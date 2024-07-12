import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
const sitemapImage = "/assets/images/logo/w-logo.png";

// Function to generate metadata dynamically
export async function generateMetadata({}) {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({
    alias: "thank-you",
  });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

const SiteMapComponent = async () => {
  return (
    <section className="siteMapPage sectionPadding">
      <div className="introduction">
        <Container>
          <Row>
            <Col sm={12}>
              <h2 class="sectionTitle text-center">Sitemap</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="sitemapWrapper">
        <Container>
          <Row>
            <Col sm={12}>
              <ul>
                <li>
                  <a href="" title="Home">
                    <span class="sitemap__icon">
                      <Image
                        src={sitemapImage}
                        width={166}
                        height={151}
                        alt="sitemap-logo"
                      />
                    </span>
                    <span class="sitemap__main-menu">Home</span>
                  </a>
                  <ul>
                    <li>
                      <a href="" title="Our Team">
                        Our Team
                      </a>
                      <ul>
                        <li>
                          <a href="" title="Our Team">
                            Our Team
                          </a>
                        </li>
                        <li>
                          <a href="" title="Our Team">
                            Our Team
                          </a>
                        </li>
                        <li>
                          <a href="" title="Our Team">
                            Our Team
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" title="Our Team">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="" title="Our Team">
                        Our Team
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="" title="Services">
                    <span class="sitemap__icon">
                      <Image
                        src={sitemapImage}
                        width={166}
                        height={151}
                        alt="sitemap-logo"
                      />
                    </span>
                    <span class="sitemap__main-menu">Packages</span>
                  </a>
                </li>
                <li>
                  <a href="" title="Our Stylists">
                    <span class="sitemap__icon">
                      <Image
                        src={sitemapImage}
                        width={166}
                        height={151}
                        alt="sitemap-logo"
                      />
                    </span>
                    <span class="sitemap__main-menu">Book Class</span>
                  </a>
                </li>
                <li>
                  <a href="" title="About">
                    <span class="sitemap__icon">
                      <Image
                        src={sitemapImage}
                        width={166}
                        height={151}
                        alt="sitemap-logo"
                      />
                    </span>
                    <span class="sitemap__main-menu">Explore</span>
                  </a>
                </li>
                <li>
                  <a href="" title="Gift Card">
                    <span class="sitemap__icon">
                      <Image
                        src={sitemapImage}
                        width={166}
                        height={151}
                        alt="sitemap-logo"
                      />
                    </span>
                    <span class="sitemap__main-menu">Services</span>
                  </a>
                </li>
                <li>
                  <a href="" title="Contact">
                    <span class="sitemap__icon">
                      <Image
                        src={sitemapImage}
                        width={166}
                        height={151}
                        alt="sitemap-logo"
                      />
                    </span>
                    <span class="sitemap__main-menu">Contact</span>
                  </a>
                </li>

                <li>
                  <a href="" title="XML Sitemap">
                  <span class="sitemap__icon">
                      <Image
                        src={sitemapImage}
                        width={166}
                        height={151}
                        alt="sitemap-logo"
                      />
                    </span>
                    <span class="sitemap__main-menu">Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="" title="XML Sitemap">
                  <span class="sitemap__icon">
                      <Image
                        src={sitemapImage}
                        width={166}
                        height={151}
                        alt="sitemap-logo"
                      />
                    </span>
                    <span class="sitemap__main-menu">
                      Terms &amp; Conditions
                    </span>
                  </a>
                </li>
                <li>
                  <a href="" title="XML Sitemap">
                  <span class="sitemap__icon">
                      <Image
                        src={sitemapImage}
                        width={166}
                        height={151}
                        alt="sitemap-logo"
                      />
                    </span>
                    <span class="sitemap__main-menu">XML Sitemap</span>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default SiteMapComponent;
