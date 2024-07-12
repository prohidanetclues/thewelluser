import Image from "next/image";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const HomeComponent = () => {
  const homeWellnessClinicImg = "/assets/images/common/homeWellnessClinic.jpg";
  const momentStudioImg = "/assets/images/common/momentStudio.jpg";
  return (
    <>
      <section className="ourMission sectionPadding whiteBg">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              <h2 className="ourMissionTitle text-center sectionTitle">Our Mission</h2>
              <p className="common-paragraph ms-lg-0 me-lg-0 ms-3 me-3">
                Our mission is to redefine the wellness experience in the Cayman Islands by combining both philosophies of clinical services and holistic health under one roof. With elevated
                facilities and carefully selected practitioners, our team will help you manage or maintain your health, rehabilitate after an injury or guide you towards a balanced lifestyle. Our
                clinical team works closely with our personal trainers and studio instructors and vice-versa to ensure that your exercise, mindfulness practice and clinical therapies work in unison to
                facilitate recovery or maintenance depending on your requirements.
              </p>
              <div className="text-center mt-4">
                <Button href="#" variant="primary" className="themeBtn">
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="serviceSec secondaryBg">
        <Container fluid>
          <Row className="serviceRow d-flex align-items-center justify-content-center">
            <Col md={6} className="p-0">
              <div className="serviceContentMain">
                <div className="serviceContent mw-lg-75 mx-auto p-30">
                  <h3 className="sectionContentTitle">Our clinical services</h3>
                  <p className="common-paragraph mb-0">
                    Our clinic has 8 beautifully appointed treatment rooms within a serene and discrete setting on the George Town waterfront. Our licensed team of healthcare professionals provides
                    physiotherapy, psychotherapy, personal training, acupuncture, chiropractic and massage therapy services.
                  </p>
                  <div className="ContentBtnGroup mt-sm-5 mt-4 d-flex">
                    <Button href="#" variant="primary" target="_blank" className="themeBtn">
                      Learn More
                    </Button>
                    <Button href="#" variant="primary" className="themeBtn">
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="p-0">
              <Image className="common-sectionBg-image" src={homeWellnessClinicImg} width={1000} height={570} alt="" />
            </Col>
          </Row>
          <Row className="serviceRow evenRow d-flex align-items-center justify-content-center">
            <Col md={6} className="order-md-2 p-0">
              <div className="serviceContentMain">
                <div className="serviceContent mw-lg-75 mx-auto p-30">
                  <h3 className="sectionContentTitle">Our movement studio</h3>
                  <p className="common-paragraph mb-0">Welcome to our movement studio, the only waterfront practice in the Cayman Islands, where balance is found through the harmonious blend of Barre, Pilates, and Yoga.</p>
                  <div className="ContentBtnGroup mt-sm-5 mt-4 d-flex">
                    <Button href="#" target="_blank" variant="primary" className="themeBtn">
                      Learn More
                    </Button>
                    <Button href="#" variant="primary" className="themeBtn">
                      Book Class
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="p-0">
              <Image className="common-sectionBg-image" src={momentStudioImg} width={1000} height={570} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeComponent;
