import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// Function to generate metadata dynamically
export async function generateMetadata({}) {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({
    alias: "sitemap",
  });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

const ThankYouComponent = async () => {

  return (
    <section className="sectionPadding">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="titleBorder text-center">Thank you</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYouComponent;
