import { GetMetaInfoBySlugApi } from "@/api/alias";
import AliasChecker from "@/context/AliasChecker";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "terms-conditions" });
  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

async function TermsAndConditionsPage() {
  const data = await AliasChecker({ alias: "terms-conditions" });

  if (!data) {
    notFound();
  }

  return (
    <>
      <section className="cms sectionPadding">
        <div className="introduction">
          <Container>
            <Row>
              <Col sm={12} lg={10} className="mx-auto">
                <h2 class="sectionTitle text-center">Terms & Conditions</h2>
              </Col>
          </Row>
          </Container>
        </div>
        <div className="details-section">
          <Container>
            <Row>
              <Col sm={12} lg={10} className="mx-auto">
                <div dangerouslySetInnerHTML={{ __html: data }}></div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default TermsAndConditionsPage;
