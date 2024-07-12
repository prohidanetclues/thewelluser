"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import NavbarComponent from "./NavbarComponent";
import { Suspense, useState } from "react";
import {
  Navbar,
  Container,
  Button,
  Offcanvas,
  Nav,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { signIn, signOut, useSession } from "next-auth/react";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const HeaderComponent = ({ headerMenuHierarchy }) => {
  const { data: session, status: authStatus } = useSession();
  const router = useRouter();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header">
      <Container fluid>
        <Navbar expand="xl" className="top-menu">
          <Link href="/" passHref>
            <Navbar.Brand>
              <div className="logoContainer">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="Logo"
                  layout="responsive"
                  width={215}
                  height={80}
                  priority
                />
              </div>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbar-content" />
          <Navbar.Collapse id="navbar-content" className="navbar-content">
            <NavbarComponent
              className="ms-auto flex-wrap"
              headerMenuHierarchy={headerMenuHierarchy}
            />
          </Navbar.Collapse>

          <Nav className="ms-2 d-flex align-items-center navabr-btn-group flex-row-reverse sign-up-menu-btn-group">
            {authStatus === "authenticated" && (
              <>
                <Dropdown className="header-login-dropdown">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    <span class="user-name">Hi, Netclues</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Account Summary</Dropdown.Item>
                    <Dropdown.Item href="#">My Packages</Dropdown.Item>
                    <Dropdown.Item href="#">Transaction History </Dropdown.Item>
                    <Dropdown.Item href="#">My Invoices</Dropdown.Item>
                    <Dropdown.Item href="#">All Reservations</Dropdown.Item>
                    <Dropdown.Item href="#">My Card</Dropdown.Item>
                    <Dropdown.Item href="#">My Profile</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as="button"
                      onClick={() =>
                        signOut({ callbackUrl: "/" }).then(() =>
                          router.push("/")
                        )
                      }
                    >
                      Sign Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
            {authStatus !== "authenticated" && (
              <Link className="themeBtn login-btn" href="/sign-in">
               Sign In
              </Link>
            )}
            <Button
          className="themeBtn mobile-menu"
          variant="primary"
          onClick={handleShow}
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
          </Nav>
        </Navbar>

        
        <Offcanvas show={show} onHide={handleClose} className="d-xl-none">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Image
                src="/assets/images/logo/logo.png"
                width={200}
                height={60}
                alt="Logo"
                priority
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="mobile-menu-list-wrap">
              <NavbarComponent
                className="mobile-nav flex-column"
                headerMenuHierarchy={headerMenuHierarchy}
              />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </header>
  );
};

export default HeaderComponent;
