import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GetContactDetailsApi } from "@/api/contact-us";
import AliasChecker from "@/context/AliasChecker";

// Function to generate metadata dynamically
export async function generateMetadata({}) {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({
    alias: "contact-us",
  });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

const ContactUsComponent = async () => {
  const data = await AliasChecker({ alias: "contact-us" });

  const { success, generalSetting, locations } = await GetContactDetailsApi();

  const contactImg = "/assets/images/common/phone.png";
  const emailImg = "/assets/images/common/mail.png";
  const locationImg = "/assets/images/common/location.png";

  return (
    <section className="contact-us sectionPadding">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="titleBorder text-center">Contact Us</h2>
          </Col>
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="contact-us_detail">
              <div className="contact-us_Section">
                <div className="sectionContentTitle">Contact</div>
                <Row>
                  {generalSetting.ownerContactPhoneNo && (
                    <Col sm={6}>
                      <div className="d-flex align-items-center mb-4">
                        <Image
                          alt="Phone"
                          className="me-3 opacity-75"
                          src={contactImg}
                          width={50}
                          height={50}
                        />
                        <Link
                          href={`tel:${generalSetting.ownerContactPhoneNo}`}
                          title={`Call us on: ${generalSetting.ownerContactPhoneNo}`}
                        >
                          {generalSetting.ownerContactPhoneNo}
                        </Link>
                      </div>
                    </Col>
                  )}

                  {generalSetting.clinicEmailId && (
                    <Col sm={6}>
                      <div className="d-flex align-items-center mb-4">
                        <Image
                          alt="Mail"
                          className="me-3 opacity-75"
                          src={emailImg}
                          width={50}
                          height={50}
                        />
                        <Link
                          href={`mailto:${generalSetting.clinicEmailId}`}
                          title={`Mail us on: ${generalSetting.clinicEmailId}`}
                        >
                          {generalSetting.clinicEmailId}
                        </Link>
                      </div>
                    </Col>
                  )}

                  {locations.map((val, key) => {
                    return (
                      <Col xs={12} key={key}>
                        <div className="d-flex align-items-center mb-4">
                          <Image
                            src={locationImg}
                            alt="Location"
                            className="me-3 opacity-75"
                            width={50}
                            height={50}
                          />
                          <p className="m-0">{val.fullAddress}</p>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
              <div className="contact-us_Section inner-section">
                <div className="sectionContentTitle">Sub-Contact</div>
                <Row>
                  {generalSetting.ownerContactPhoneNo && (
                    <Col sm={6}>
                      <div className="d-flex align-items-center mb-4">
                        <Image
                          alt="Phone"
                          className="me-3 opacity-75"
                          src={contactImg}
                          width={50}
                          height={50}
                        />
                        <Link
                          href={`tel:${generalSetting.ownerContactPhoneNo}`}
                          title={`Call us on: ${generalSetting.ownerContactPhoneNo}`}
                        >
                          {generalSetting.ownerContactPhoneNo}
                        </Link>
                      </div>
                    </Col>
                  )}

                  {generalSetting.clinicEmailId && (
                    <Col sm={6}>
                      <div className="d-flex align-items-center mb-4">
                        <Image
                          alt="Mail"
                          className="me-3 opacity-75"
                          src={emailImg}
                          width={50}
                          height={50}
                        />
                        <Link
                          href={`mailto:${generalSetting.clinicEmailId}`}
                          title={`Mail us on: ${generalSetting.clinicEmailId}`}
                        >
                          {generalSetting.clinicEmailId}
                        </Link>
                      </div>
                    </Col>
                  )}

                  {locations.map((val, key) => {
                    return (
                      <Col xs={12} key={key}>
                        <div className="d-flex align-items-center mb-4">
                          <Image
                            src={locationImg}
                            alt="Location"
                            className="me-3 opacity-75"
                            width={50}
                            height={50}
                          />
                          <p className="m-0">{val.fullAddress}</p>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
              <div className="contact-us_Section inner-section">
                <div className="sectionContentTitle">Sub-Contact</div>
                <Row>
                  {generalSetting.ownerContactPhoneNo && (
                    <Col sm={6}>
                      <div className="d-flex align-items-center mb-4">
                        <Image
                          alt="Phone"
                          className="me-3 opacity-75"
                          src={contactImg}
                          width={50}
                          height={50}
                        />
                        <Link
                          href={`tel:${generalSetting.ownerContactPhoneNo}`}
                          title={`Call us on: ${generalSetting.ownerContactPhoneNo}`}
                        >
                          {generalSetting.ownerContactPhoneNo}
                        </Link>
                      </div>
                    </Col>
                  )}

                  {generalSetting.clinicEmailId && (
                    <Col sm={6}>
                      <div className="d-flex align-items-center mb-4">
                        <Image
                          alt="Mail"
                          className="me-3 opacity-75"
                          src={emailImg}
                          width={50}
                          height={50}
                        />
                        <Link
                          href={`mailto:${generalSetting.clinicEmailId}`}
                          title={`Mail us on: ${generalSetting.clinicEmailId}`}
                        >
                          {generalSetting.clinicEmailId}
                        </Link>
                      </div>
                    </Col>
                  )}

                  {locations.map((val, key) => {
                    return (
                      <Col xs={12} key={key}>
                        <div className="d-flex align-items-center mb-4">
                          <Image
                            src={locationImg}
                            alt="Location"
                            className="me-3 opacity-75"
                            width={50}
                            height={50}
                          />
                          <p className="m-0">{val.fullAddress}</p>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: data }}></div>; */}
            <div>
              <div class="mb-4">
                <h2 class="sectionContentTitle before-right-auto">Location</h2>
                <p className="common-paragraph">
                  We are located on the 2nd floor of Bayshore Mall above Cartier
                  on the beautiful George Town Waterfront. The entire studio has
                  been designed with the utmost care to deliver the most serene
                  experience for our clients. We have 8&nbsp;beautifully
                  appointed treatment rooms, the largest yoga studio on the
                  island and a reformer room with 4 Balanced Body reformers. We
                  have a full service gymnasium with a Rogue Monster rack and
                  assorted pieces of rehabilitation equipment. We have a
                  spacious and beautiful patio which can be used for workshops,
                  yoga and social gatherings.
                </p>
              </div>
              <div class="mb-4">
                <h2 class="sectionContentTitle before-right-auto">Parking</h2>
                <p className="common-paragraph">
                  There is a large parking lot behind the Bayshore Mall. Please
                  bring your parking ticket to your appointment for validation.
                </p>
              </div>
              <div class="">
                <h2 class="sectionContentTitle before-right-auto">
                  Traffic <span className="">(Getting here on time)</span>
                </h2>
                <p className="common-paragraph">
                  Like everywhere in Cayman, traffic can be heavy at times.
                  Fortunately Bayshore Mall is accessible from two roads; from
                  Seafarers Drive on the waterfront and from Walkers Road. We
                  recommend using the rear entrance on busy cruise ship days to
                  minimize traffic congestion.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <iframe
              allowFullScreen=""
              height="100%"
              width="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d941.434425260043!2d-81.3837206!3d19.2937696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f25865fe2b06783%3A0xed78d8551b9a33dc!2sBayshore%20Mall%2C%20S%20Church%20St%2C%20George%20Town%2C%20Cayman%20Islands!5e0!3m2!1sen!2sin!4v1684763472525!5m2!1sen!2sin"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUsComponent;
