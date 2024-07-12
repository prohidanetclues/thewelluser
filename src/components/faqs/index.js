import React from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { GetFaqsListApi } from "@/api/faqs";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const FaqsComponent = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const limit = 10;

  const { success, faqs, totalPages } = await GetFaqsListApi(page, limit);
  if (!success) {
    return notFound();
  }

  return (
    <section className="faq sectionPadding">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="sectionTitle">FREQUENTLY ASKED QUESTIONS</h2>
          </Col>
          <Col md={12}>
            <Accordion defaultActiveKey="0" flush>
              {faqs.map((val, key) => (
                <AccordionItem eventKey={key} key={key} className="border-0 mb-4 shadow">
                  <AccordionHeader className="border-bottom collapsed fw-semibold">
                    <h2 className="faqs-title">
                      <span className="question">Q</span>
                      {val.question}
                    </h2>
                  </AccordionHeader>
                  <AccordionBody>
                    <span className="ans">A</span>
                    <span dangerouslySetInnerHTML={{ __html: val.answer }}></span>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
          <Col md={12}>
            <div className="pagination-section">
              <ul className="pagination">
                <li className={page === 1 ? "disabled" : ""}>
                  <Link href={`?page=${Math.max(page - 1, 1)}`} title="Previous">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </Link>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index} className={page === index + 1 ? "active" : ""}>
                    <Link href={`?page=${index + 1}`}>{index + 1}</Link>
                  </li>
                ))}
                <li className={page === totalPages ? "disabled" : ""}>
                  <Link href={`?page=${Math.min(page + 1, totalPages)}`} title="Next">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqsComponent;
