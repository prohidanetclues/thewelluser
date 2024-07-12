"use client";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button, NavItem, Offcanvas } from "react-bootstrap";
import { signIn, signOut, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenusList } from "@/redux/menus/slice";

const HeaderComponent = () => {
  const { data: session, status } = useSession();
  const [show, setShow] = useState(false);

  // const dispatch = useDispatch();
  // const menus = useSelector((state) => state.menu.menus);
  // const menuStatus = useSelector((state) => state.menu.status);
  // const error = useSelector((state) => state.menu.error);

  // useEffect(() => {
  //   if (menuStatus === "idle") {
  //     dispatch(fetchMenusList("https://api.example.com/menus"));
  //   }
  // }, [menuStatus, dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dropdown, setDropdown] = useState(false);
  const showDropdown = (e) => {
    setDropdown(!dropdown);
  };
  const hideDropdown = (e) => {
    setDropdown(false);
  };

  return (
    <header className="header">
      <Container fluid>
        <Navbar expand="xl" className="top-menu">
          <Link href="/" passHref>
            <Navbar.Brand>
              <div className="logoContainer">
                <Image src="/assets/images/logo/logo.png" alt="Logo" layout="responsive" width={215} height={80} priority />
              </div>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbar-content" />
          <Navbar.Collapse id="navbar-content" className="navbar-content">
            <Nav className="ms-auto flex-wrap">
              <NavDropdown title="Explore" id="explore-dropdown" show={dropdown} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <NavDropdown.Item as="div">
                  <Link href="/about-us" passHref legacyBehavior>
                    About Us
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link href="/our-teams" passHref legacyBehavior>
                    Our Teams
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link href="/faqs" passHref legacyBehavior>
                    FAQs
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link href="/contact-us" passHref legacyBehavior>
                    Contact Us
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item as="div">
                  <Link href="/clinical-services" passHref legacyBehavior>
                    Clinical Services
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="div">
                  <Link href="/movement-studio" passHref legacyBehavior>
                    Movement Studio
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavItem>
                <Link href="/packages" passHref legacyBehavior>
                  <Nav.Link>Package</Nav.Link>
                </Link>
              </NavItem>
            </Nav>
            <Nav className="d-flex align-items-center navabr-btn-group">
              <Link href="/" passHref legacyBehavior>
                <Button className="themeBtn">Book Appointment</Button>
              </Link>
              <Link href="/" passHref legacyBehavior>
                <Button className="themeBtn">Book Class</Button>
              </Link>
              {status === "authenticated" ? (
                <>
                  <Button className="themeBtn login-btn" onClick={() => signOut()}>
                    <FontAwesomeIcon className="login-icon" title="Sign Out" icon={faCircleUser} />
                  </Button>
                </>
              ) : (
                <>
                  <Button className="themeBtn login-btn" onClick={() => signIn()}>
                    <FontAwesomeIcon className="login-icon" title="Sign In" icon={faCircleUser} />
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Button className="themeBtn mobile-menu" variant="primary" onClick={handleShow}>
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Button className="themeBtn canvas-login-btn">
          <FontAwesomeIcon className="login-icon" icon={faCircleUser} />
        </Button>

        <Offcanvas show={show} onHide={handleClose} className="d-xl-none">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Image src="/assets/images/logo/logo.png" width={200} height={60} alt="Logo" priority />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="mobile-menu-list-wrap">
              <Nav className="mobile-nav flex-column">
                <NavDropdown title="Explore" id="explore-dropdown">
                  <NavDropdown.Item as="div">
                    <Link href="/about-us" passHref legacyBehavior>
                      About Us
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div">
                    <Link href="/our-teams" passHref legacyBehavior>
                      Our Teams
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div">
                    <Link href="/faqs" passHref legacyBehavior>
                      FAQs
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div">
                    <Link href="/contact-us" passHref legacyBehavior>
                      Contact Us
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Services" id="services-dropdown">
                  <NavDropdown.Item as="div">
                    <Link href="/clinical-services" passHref legacyBehavior>
                      Clinical Services
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="div">
                    <Link href="/movement-studio" passHref legacyBehavior>
                      Movement Studio
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavItem>
                  <Link href="/packages" passHref legacyBehavior>
                    <Nav.Link>Package</Nav.Link>
                  </Link>
                </NavItem>
              </Nav>
              <Nav className="d-flex align-items-center navabr-btn-group flex-column">
                <Link href="/" passHref legacyBehavior>
                  <Button className="themeBtn">Book Appointment</Button>
                </Link>
                <Link href="/" passHref legacyBehavior>
                  <Button className="themeBtn">Book Class</Button>
                </Link>
              </Nav>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </header>
  );
};

export default HeaderComponent;
