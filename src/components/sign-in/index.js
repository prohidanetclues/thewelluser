"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShowErrorSwalToast, ShowSuccessSwalToast } from "@/components/common/SwalToast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import OverlayLoader from "../loader/OverlayLoader";

const validationSchema = yup.object().shape({
  email: yup.string().email("Entered value does not match email format").required("Email is required"),
  password: yup.string().min(6, "Password must have at least 6 characters").required("Password is required"),
});

const SignInComponent = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });

        if (res.ok) {
          setLoading(false);
          const urlParams = new URLSearchParams(new URL(res.url).search);
          const callbackUrl = urlParams.get("callbackUrl") || "/my-account";
          router.push(callbackUrl);
          ShowSuccessSwalToast("Login successful");
        } else {
          setLoading(false);
          ShowErrorSwalToast("Invalid email or password");
        }
      } catch (error) {
        setLoading(false);
        ShowErrorSwalToast("An unexpected error occurred. Please try again.");
      }
    },
  });

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  return (
    <section className="auth-section sectionPadding">
      <Container>
        <Row>
          <Col md={8} lg={6} className="mx-auto">
            <div className="title-part">
              <h2 className="sectionTitle before-right-auto">LOGIN OR CREATE AN ACCOUNT</h2>
              <p className="common-paragraph mb-4">
                Please create an account or login to purchase packages and make reservations. If you prefer, you can also drop by the studio to add funds to your account so you can use your account
                balance to purchase packages.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} lg={6} className="mx-auto">
            <div className="form-inner">
              <div className="form-title-part">
                <h2 className="form-title mb-1">
                  <span className="icon-bg">
                    <FontAwesomeIcon className="icon" icon={faRightToBracket} />
                  </span>
                  SIGN IN
                  <span className="form-sub-title"> TO THE WELL LTD</span>
                </h2>
                <p className="common-paragraph">Already have an account...</p>
              </div>
              <OverlayLoader loading={loading}>
                <div className="form-part">
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group controlId="formBasicEmail" className="mb-3">
                      <div className="d-flex justify-content-between">
                        <Form.Label>
                          Email address<span className="required">*</span>
                        </Form.Label>
                        <div className="required-div">
                          <span className="required">*=Required</span>
                        </div>
                      </div>
                      <Form.Control type="email" placeholder="Enter email" isInvalid={!!formik.errors.email && formik.touched.email} {...formik.getFieldProps("email")} />
                      <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mb-3">
                      <Form.Label>
                        Password<span className="required">*</span>
                      </Form.Label>
                      <Form.Control type="password" placeholder="Password" isInvalid={!!formik.errors.password && formik.touched.password} {...formik.getFieldProps("password")} />
                      <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Check
                        name="rememberMe"
                        label="Remember Me"
                        feedbackType="invalid"
                        id="validationFormik0"
                        checked={formik.values.rememberMe}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center auth-btn-group mb-2">
                      <Button type="submit" className="themeBtn btn btn-primary">
                        <span className="auth-lock-icon me-2">
                          <FontAwesomeIcon className="icon" icon={faLock} />
                        </span>
                        Sign In
                      </Button>
                      <Link href="/sign-up" className="themeBtn btn btn-primary">
                        Create an account
                      </Link>
                    </div>
                    <Link href="/forgot-password" className="text-muted">
                      <small>
                        <span className="form-inner-label">Forgot Password?</span>
                      </small>
                    </Link>
                  </Form>
                </div>
              </OverlayLoader>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignInComponent;
