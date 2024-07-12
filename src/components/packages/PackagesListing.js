import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BuyPackageButtons from "./BuyPackageButtons";

function PackagesListing({ packages = [], session = null }) {
  return (
    <>
      <div className="price-packages sectionPadding">
        <Container>
          <Row>
            {packages.map((packageGroup) => (
              <>
                <div className="col-12">
                  <div className="packages-wrap">
                    <div className="text-center title-section">
                      <h2 className="sectionTitle text-center">
                        {packageGroup.packageTypeTitle} Packages
                      </h2>
                    </div>
                    <div className="package-listing">
                      {Object.entries(packageGroup.packages).map(
                        ([key, packageList]) => (
                          <>
                            {packageList && packageList.length > 0 && (
                              <>
                                {key === "unLimitedCreditsPackages" ? (
                                  <Row>
                                    <Col sm={12}>
                                      <div className="text-center">
                                        <h2 className="sectionTitle text-center category-title">
                                          Unlimited Credits Packages
                                        </h2>
                                      </div>
                                    </Col>
                                  </Row>
                                ) : null}

                                <Row>
                                  {packageList.map((pkg) => (
                                    <>
                                      <Col sm={6} lg={3}>
                                        <div className="price-listing">
                                          <div className="package-details">
                                            <div className="package-type-title">
                                              <h5 className="p-title text-truncate-02">
                                                {pkg.title}
                                              </h5>
                                            </div>
                                            <div className="package-type-listing">
                                              <ul className="features-list">
                                                <li className="features-items">
                                                  {pkg.limitedCredits > 0
                                                    ? `${pkg.limitedCredits} Classes`
                                                    : "Unlimited Classes"}
                                                </li>
                                                <li className="features-items">
                                                  CI$${pkg.price}
                                                </li>
                                                <li className="features-items">
                                                  valid for{" "}
                                                  {pkg.dayBasedValidityDurationInDays ||
                                                  pkg.validityType === "day"
                                                    ? `${pkg.dayBasedValidityDurationInDays} Days`
                                                    : "until expiry date"}
                                                </li>
                                                {pkg.isGuestBookingAllowed && (
                                                  <li className="features-items">
                                                    guest booking allowed
                                                  </li>
                                                )}
                                              </ul>
                                            </div>
                                          </div>

                                          <div className="package-description">
                                            <p className="common-paragraph text-truncate-02">
                                              {pkg.description}
                                            </p>
                                          </div>
                                          <div className="package-but-btn d-flex">
                                            <BuyPackageButtons
                                              session={session}
                                              id={pkg.id}
                                            />
                                          </div>
                                        </div>
                                      </Col>
                                    </>
                                  ))}
                                </Row>
                              </>
                            )}
                          </>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PackagesListing;
