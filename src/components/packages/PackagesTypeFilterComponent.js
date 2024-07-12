"use client";
import React from "react";
import { Col } from "react-bootstrap";
import ReactSelect from "react-select";

function PackagesTypeFilterComponent({ packagesTypes, changePackageList = () => {} }) {
  return (
    <>
      {packagesTypes.length > 0 && (
        <Col sm={12}>
          <div className="d-flex justify-content-end align-items-center filterSection">
            <label className="me-2">Search Packages By Type:</label>
            <ReactSelect className="filterDropdown" onChange={(selectedOption) => changePackageList(selectedOption ? selectedOption.value : null)} options={packagesTypes} isClearable />
          </div>
        </Col>
      )}
    </>
  );
}

export default PackagesTypeFilterComponent;
