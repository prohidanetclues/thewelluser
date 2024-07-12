"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { ForgotPasswordApi } from "@/api/forgot-password";
import { ShowErrorSwalToast, ShowSuccessSwalToast } from "../common/swaltoast";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Entered value does not match email format")
    .required("Email is required"),
});

const ForgotPasswordComponent = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { success, message } = await ForgotPasswordApi(data);
      if (success) {
        ShowSuccessSwalToast(message)
      } else {
        ShowErrorSwalToast(message);
      }
    } catch (error) {
      ShowErrorSwalToast("An unexpected error occurred. Please try again.");
    }
  };

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Forgot Password</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                isInvalid={!!errors.email}
                {...register("email")}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <small>
              <span className="form-inner-label">
                Enter your email address and we will send you instructions to
                reset your password
              </span>
            </small>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordComponent;
