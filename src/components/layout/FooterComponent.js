import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import FooterNavLinksComponent from "./FooterNavLinksComponent";

const FooterComponent = ({ footerMenuList }) => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Container fluid>
          <Row>
            <Col sm={12} xl={3} className="d-flex justify-content-center align-items-center">
              <div className="footer-top-logo text-center">
                <Image src="/assets/images/logo/footerLogo.png" width={250} height={250} layout="responsive" alt="The Wellness" />
              </div>
            </Col>
            <Col sm={6} lg={4} xl={3}>
              <div className="footerTimes">
                <h4 className="footerTitle">Clinical Services</h4>
                <ul>
                  <li>
                    <span>Monday - Friday</span>8:00 am - 6:00 pm
                  </li>
                  <li>
                    <span>Saturday</span>9:00 am - 4:00 pm
                  </li>
                  <li>
                    <span>Sunday</span>CLOSED
                  </li>
                </ul>
              </div>
              <div className="footerTimes mt-30">
                <h4 className="footerTitle">Studio Services</h4>
                <ul>
                  <li>
                    <span>Monday - Friday</span>6:00 am - 6:00 pm
                  </li>
                  <li>
                    <span>Saturday</span>7:00 am - 12:00 pm
                  </li>
                  <li>
                    <span>Sunday</span>7:00 am - 12:00 pm
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={6} lg={4} xl={3}>
              <div className="footerContact">
                <h4 className="footerTitle">Contact us</h4>
                <p>
                  2nd Floor Bayshore Mall
                  <br />
                  George Town, Grand Cayman, Cayman Islands
                </p>
              </div>
              <div className="footerLinks">
                <ul>
                  <li>
                    <span>T.</span>
                    <Link href="tel:+1345943935511" title="Call us on: +1 (345) 943-935511">
                      +1 (345) 943-935511
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@thewellcayman.com">info@thewellcayman.com</Link>
                  </li>
                  <li>
                    <Link href="https://wellness.thewellcayman.com/" target="_blank" rel="noopener noreferrer" title="View Our Website">
                      wellness.thewellcayman.com
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <FooterNavLinksComponent footerMenuList={footerMenuList} />
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container fluid>
          <Row>
            <Col sm={12} className="d-flex align-items-center justify-content-center mb-lg-0 mb-1 flex-sm-row flex-column">
              <p className="footer-social-note">Follow us on Social Media for updates and happenings</p>
              <ul className="footerSocial list-inline">
                <li className="list-inline-item">
                  <Link href="" title="Instagram" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="" title="Facebook" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon" icon={faFacebookF} />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="" title="Twitter" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon" icon={faXTwitter} />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="back-top" title="Back to Top">
        <FontAwesomeIcon className="icon" icon={faArrowUp} />
      </div>
    </footer>
  );
};

export default FooterComponent;
