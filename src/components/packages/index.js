"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PackagesTypeFilterComponent from "@/components/packages/PackagesTypeFilterComponent";
import PackagesListing from "./PackagesListing";

const ListPackagesComponent = ({ session = {}, packages = [] }) => {
  const [selectedPackageType, setSelectedPackageType] = useState(null);

  const filteredPackages = selectedPackageType
    ? packages.filter((pkg) => pkg.packageTypeId === selectedPackageType)
    : packages;

  return (
    <section className="packages sectionPadding">
      <div className="package-introduction">
        <Container>
          <Row>
            <Col sm={12} className="text-center">
              <h2 className="sectionTitle text-center">Packages</h2>
              <p>Packages Description</p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="mb-lg-5 mb-4">
              <h3 className="sectionContentTitle">CLASS PACKAGES</h3>
              <p className="common-paragraph">
                Please note that Studio Packages, Reformer Packages and Gym
                Packages only work for the respective class type. For example,
                you need to hold a 1:1 reformer package to reserve a 1:1
                reformer class. You can hold multiple packages simultaneously.{" "}
              </p>
              <p className="common-paragraph">
                Most packages allow guest booking which means that you will be
                able to use your credits to book guests to accompany you to
                class.
              </p>
              <p className="common-paragraph">
                Please review package conditions carefully before purchasing.
                Note that packages are non-refundable and all packages have
                expiry dates that cannot be extended.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pricing-part">
        <Container>
          <Row>
            <PackagesTypeFilterComponent
              packagesTypes={packages.map((item) => ({
                value: item.packageTypeId,
                label: item.packageTypeTitle,
              }))}
              changePackageList={setSelectedPackageType}
            />
          </Row>
        </Container>
      </div>
      <PackagesListing packages={filteredPackages} session={session} />
    </section>
  );
};

export default ListPackagesComponent;
