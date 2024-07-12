import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  const image = "/assets/images/common/error_404.png";
  return (
    <section className="not-found sectionPadding">
      <Container>
        <Row>
          <Col md={12}>
            <div className="not-found-wrap">
              <div className="tp-error-text-box text-center">
                <div className="error-image">
                  <Image src={image} width={400} height={200} alt="error-404" layout="responsive" priority />
                </div>
                <h4 className="error-title">Oops.! Page Not Found!</h4>
                <p>The page you are looking for does not exist.</p>
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

export default NotFound;
