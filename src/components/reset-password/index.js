"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams, useRouter } from "next/navigation";
import { ResetPasswordApi } from "@/api/reset-password";
import { ShowErrorSwalToast, ShowSuccessSwalToast } from "../common/swaltoast";

const validationSchema = yup.object().shape({
  password: yup.string().min(6, "Password must have at least 6 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const ResetPasswordComponent = ({ params }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const resetToken = params.token;

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
      if (!resetToken) {
        ShowErrorSwalToast("Token not found. Unable to reset password.");
        return;
      }
      const requestData = { ...data, resetToken };
      const { success, message } = await ResetPasswordApi({ data: requestData });
      if (success) {
        router.push("/sign-in");
        ShowSuccessSwalToast(message);
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
          <h2 className="text-center">Reset Password</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                isInvalid={!!errors.password}
                {...register("password")}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                isInvalid={!!errors.confirmPassword}
                {...register("confirmPassword")}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPasswordComponent;
