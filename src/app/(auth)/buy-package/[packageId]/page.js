"use client";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Image from "next/image";
const paymentImage = "/assets/images/common/logo_payment.png";

function BuyPackageById({ params }) {
  return (
    // <div>Package {params.packageId}</div>
    <section className="package_details_page sectionPadding">
      <div className="package-introduction">
        <Container>
          <Row>
            <Col sm={12} className="text-center">
              <h2 class="sectionTitle text-center">Purchase Package</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="package_details_wrapper">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="p-d-w_content">
                <Row>
                  <Col sm={12} lg={6} className="mb-lg-0 mb-sm-5 mb-4">
                    <div className="package_details">
                      <div class="sectionTitle text-center">
                        Package Details
                      </div>
                      <table class="table-responsive" width="100%">
                        <tbody>
                          <tr>
                            <td width="50%" align="left">
                              Package
                            </td>
                            <td width="50%" align="right">
                              10 Studio Classes
                            </td>
                          </tr>
                          <tr>
                            <td width="50%" align="left">
                              Type
                            </td>
                            <td width="50%" align="right">
                              Standard
                            </td>
                          </tr>
                          <tr>
                            <td width="50%" align="left">
                              Rydes
                            </td>
                            <td width="50%" align="right">
                              10
                            </td>
                          </tr>
                          <tr>
                            <td width="50%" align="left">
                              Guest Booking
                            </td>
                            <td width="50%" align="right">
                              Allowed
                            </td>
                          </tr>
                          <tr>
                            <td width="50%" align="left">
                              Booking Type
                            </td>
                            <td width="50%" align="right">
                              Peak{" "}
                            </td>
                          </tr>
                          <tr>
                            <td width="50%" align="left">
                              Validity
                            </td>
                            <td width="50%" align="right">
                              60 Days
                            </td>
                          </tr>
                          <tr>
                            <td width="50%" align="left">
                              <strong>Price</strong>
                            </td>
                            <td width="50%" align="right">
                              <strong>CI$215.00</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="terms-condi-note">
                      Note - Additional
                      <a
                        href=""
                        title="terms & conditions"
                        target=""
                        className="ms-1 me-1"
                      >
                        terms & conditions
                      </a>
                      apply.
                    </div>
                  </Col>
                  <Col sm={12} lg={6}>
                    <div className="payment_sec">
                      <Form>
                        <div class="sectionTitle text-center">
                          Payment Information
                        </div>
                        <div class="required-div">
                          <span class="required">*=Required</span>
                        </div>
                        <div class="p-d_subtitle">Amount Due CI$215.00</div>
                        <div className="p-s_credit_card_details">
                          <div className="p-s-cc-d_title">
                            <div className="">
                              <span className="d-flex">
                                Credit Card Details
                              </span>
                            </div>
                            <div className="">
                              <a
                                className="themeBtn"
                                href=""
                                title=""
                                target=""
                              >
                                Add Card
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* add card form section s */}
                        <div className="saved_card_wrapper" id="usercardGrid">
                          <div className="saved_card">
                            <div class="table-responsive">
                              <table class="s-c_details" width="100%">
                                <tbody>
                                  <tr>
                                    <th>Name</th>
                                    <th>Card Number</th>
                                    <th>Expiry</th>
                                    <th></th>
                                  </tr>
                                  <tr height="40">
                                    <td width="30%">
                                      <div class="card_name">Netclues</div>
                                    </td>
                                    <td width="30%">
                                      <div class="card_nub">
                                        ************1111
                                      </div>
                                    </td>
                                    <td width="20%">
                                      <div class="card_expiry">01/2027</div>
                                    </td>
                                    <td width="20%">
                                      <div className="select-btn themeBtn">Select</div>
                                    </td>
                                  </tr>
                                  <tr height="40">
                                    <td width="30%">
                                      <div class="card_name">Netclues</div>
                                    </td>
                                    <td width="30%">
                                      <div class="card_nub">
                                        ************1111
                                      </div>
                                    </td>
                                    <td width="20%">
                                      <div class="card_expiry">01/2027</div>
                                    </td>
                                    <td width="20%">
                                      <div className="select-btn themeBtn">Select</div>
                                    </td>
                                  </tr>
                                  <tr height="40">
                                    <td width="30%">
                                      <div class="card_name">Netclues</div>
                                    </td>
                                    <td width="30%">
                                      <div class="card_nub">
                                        ************1111
                                      </div>
                                    </td>
                                    <td width="20%">
                                      <div class="card_expiry">01/2027</div>
                                    </td>
                                    <td width="20%">
                                      <div className="select-btn themeBtn">Select</div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        {/* add card form section s */}
                        {/* form section s */}
                        <div className="card-form-wrapper" id="">
                          <Row>
                            <Col sm={12}>
                              <Form.Group
                                controlId="validationFormik01"
                                className="mb-3"
                              >
                                <Form.Label>
                                  Credit Card Holder Name
                                  <span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  placeholder="Credit Card Holder Name"
                                />
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group
                                controlId="validationFormik01"
                                className="mb-3"
                              >
                                <Form.Label>
                                  Credit Card Number
                                  <span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  placeholder="Credit Card Number"
                                />
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group
                                controlId="validationFormik01"
                                className="mb-3"
                              >
                                <Form.Label>
                                  CVV #<span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  placeholder="CVV Number"
                                />
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group
                                controlId="validationFormik01"
                                className="mb-3"
                              >
                                <Form.Label>
                                  Expiry Month
                                  <span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  placeholder="Select Month"
                                />
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group
                                controlId="validationFormik01"
                                className="mb-3"
                              >
                                <Form.Label>
                                  Expiry Year<span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  placeholder="Select Year"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={12}>
                              <div className="seperator-line"></div>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={12}>
                              <div className="form-section-title">
                                Billing Information
                              </div>
                            </Col>
                            <Col sm={12}>
                              <Form.Group
                                controlId="validationFormik01"
                                className="mb-3"
                              >
                                <Form.Label>
                                  Street<span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  placeholder="Street"
                                />
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group
                                controlId="validationFormik01"
                                className="mb-3"
                              >
                                <Form.Label>
                                  City<span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  placeholder="City"
                                />
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group
                                controlId="validationFormik01"
                                className="mb-3"
                              >
                                <Form.Label>
                                  State/Island
                                  <span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  placeholder="State/Island"
                                />
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group
                                controlId="validationFormik01"
                                className="mb-3"
                              >
                                <Form.Label>
                                  Zip Code<span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  placeholder="Zip Code"
                                />
                              </Form.Group>
                            </Col>
                            <Col sm={6}>
                              <Form.Group
                                controlId="validationFormik01"
                                className="mb-3"
                              >
                                <Form.Label>
                                  Country<span className="required">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  placeholder="Country"
                                />
                              </Form.Group>
                            </Col>
                            <Col sm={12}>
                              <Form.Group className="position-relative mb-3 mt-2">
                                <Form.Check
                                  required
                                  name="terms"
                                  label="Save this card for future payments"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                        {/* form section s */}
                        <div className="checkbox-agree-note">
                          <Form.Group>
                            <Form.Check
                              className="me-1"
                              inline
                              label="I understand and accept the"
                              name="group1"
                            />
                            <a href="" title="terms & conditions" target="">
                              terms & conditions
                            </a>
                          </Form.Group>
                        </div>
                        <div className="payment_button">
                          <div className="google-captacha">
                            <div className="captcha"></div>
                          </div>
                          <div className="p-b_btn">
                            <a href="" title="" class="themeBtn text-center danger-btn">
                              Cancel
                            </a>
                            <a href="" title="" class="themeBtn text-center">
                              Make Payment
                            </a>
                          </div>
                        </div>
                        <div class="secure_ptm">
                          <p>
                            <b>
                              <FontAwesomeIcon className="icon" icon={faLock} />
                              Secure Payment
                            </b>{" "}
                            powered by{" "}
                          </p>
                        </div>
                        <div class="p-b_img">
                          <a href="" title="" rel="nofollow">
                            <Image
                              src={paymentImage}
                              width={166}
                              height={151}
                              alt="payment-image"
                            />
                          </a>
                        </div>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default BuyPackageById;
