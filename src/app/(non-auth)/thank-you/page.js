"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// Dynamically import
const ThankYouComponent = dynamic(() => import("@/components/thank-you"), {
  ssr: true,
});

const ThankYouPage = () => {
  const image = "/assets/images/common/error_404.png";
  return (
    <section className="thank-you sectionPadding">
      <Container>
        <Row>
          <Col md={12}>
            <div className="thank-you-wrap">
              <div className="thank-you-text-box text-center">
                <h2 className="thank-you-title">Thank You!</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </p>
                <div className="d-flex justify-content-center">
                  <Link href="/" className="themeBtn" title="Back To Home">
                    <span>Back To Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYouPage;
