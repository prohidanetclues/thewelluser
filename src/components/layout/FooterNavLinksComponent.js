"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Col } from "react-bootstrap";

function FooterNavLinksComponent({ footerMenuList }) {
  const pathname = usePathname();
  return (
    <>
      {footerMenuList.length > 0 && (
        <Col sm={6} lg={4} xl={3}>
          <div className="footerQuickLinks">
            <h4 className="footerTitle">Quick Links</h4>
            <div className="links-wrap">
              <ul>
                {footerMenuList.map((page, index) => (
                  <li key={`footer-quick-links-${index}`}>
                    <Link href={page.alias || "/"} className={pathname === page.alias ? "active" : ""}>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      )}
    </>
  );
}

export default FooterNavLinksComponent;
