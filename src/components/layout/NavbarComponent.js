"use client";
import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { Button, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { usePathname } from "next/navigation";

const NavbarComponent = ({ className, headerMenuHierarchy }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);

  const handleMouseEnter = (setDropdownFn, title) => {
    setDropdownFn(title);
  };

  const handleMouseLeave = (setDropdownFn) => {
    setDropdownFn(null);
  };

  const handleLinkClick = useCallback(() => {
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
  }, []);

  const isMenuOrSubRecordActive = useCallback(
    (menu) => {
      if (pathname === menu.alias) {
        return true;
      }
      if (menu.subRecords) {
        return menu.subRecords.some((subRecord) => isMenuOrSubRecordActive(subRecord));
      }
      return false;
    },
    [pathname]
  );

  const renderSubRecords = useMemo(
    () => (subRecords) => {
      return subRecords.map((subRecord) => (
        <NavDropdown.Item as="div" key={subRecord.alias || subRecord.title}>
          {subRecord.subRecords.length > 0 ? (
            <NavDropdown
              drop="end"
              title={subRecord.title}
              id={`${subRecord.title}-dropdown`}
              show={openNestedDropdown === subRecord.title}
              onMouseEnter={() => handleMouseEnter(setOpenNestedDropdown, subRecord.title)}
              onMouseLeave={() => handleMouseLeave(setOpenNestedDropdown)}
            >
              {renderSubRecords(subRecord.subRecords)}
            </NavDropdown>
          ) : (
            <Link href={subRecord.alias || "#"} passHref legacyBehavior>
              <a onClick={handleLinkClick} className={pathname === subRecord.alias ? "active" : ""}>
                {subRecord.title}
              </a>
            </Link>
          )}
        </NavDropdown.Item>
      ));
    },
    [openNestedDropdown, pathname, handleLinkClick]
  );

  if (!headerMenuHierarchy.length) {
    return <div></div>;
  }

  return (
    <>
      <Nav className={className}>
        {headerMenuHierarchy.map((menu) =>
          menu.subRecords.length > 0 ? (
            <NavDropdown
              key={menu.alias || menu.title}
              title={menu.title}
              id={`${menu.title}-dropdown`}
              show={openDropdown === menu.title}
              onMouseEnter={() => handleMouseEnter(setOpenDropdown, menu.title)}
              onMouseLeave={() => handleMouseLeave(setOpenDropdown)}
              className={isMenuOrSubRecordActive(menu) ? "active" : ""}
            >
              {renderSubRecords(menu.subRecords)}
            </NavDropdown>
          ) : (
            <NavItem key={menu.alias || menu.title}>
              <div className="nav-link">
                <Link className={pathname === menu.alias ? "active" : ""} href={menu.alias || "#"} passHref>
                  {menu.title}
                </Link>
              </div>
            </NavItem>
          )
        )}
      </Nav>
      <Nav className="d-flex align-items-center navabr-btn-group">
        <Link href="/" passHref legacyBehavior>
          <Button className="themeBtn">Book Appointment</Button>
        </Link>
        <Link href="/" passHref legacyBehavior>
          <Button className="themeBtn">Book Class</Button>
        </Link>
      </Nav>
    </>
  );
};

export default NavbarComponent;
