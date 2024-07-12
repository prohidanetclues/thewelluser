"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
  Spinner,
  Nav,
} from "react-bootstrap";
import checkImageExists from "@/utils/checkImageExists";
import { GetTeamListDetailsApi } from "@/api/our-team";

const OurTeamsComponent = () => {
  const [teamList, setTeamList] = useState([]);
  const [profileImages, setProfileImages] = useState({});
  const [loading, setLoading] = useState(true);

  const publicPath = process.env.NEXT_PUBLIC_API_PUBLIC_URL;
  const defaultImage = "/assets/images/common/user-dummy-img.jpg";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { success, teams } = await GetTeamListDetailsApi();
      if (!success) {
        setLoading(false);
        return; // Correctly handle the case where fetching team details fails
      }
      setTeamList(teams);

      const imageChecks = teams.flatMap((item) =>
        item.values.map(async (sub) => {
          const imageUrl = `${publicPath}/${sub.WithProfileImage.fullFilePath}`;
          const exists = await checkImageExists(imageUrl);
          return { id: sub.id, url: exists ? imageUrl : defaultImage };
        })
      );

      const images = await Promise.all(imageChecks);
      const imagesMap = images.reduce((acc, { id, url }) => {
        acc[id] = url;
        return acc;
      }, {});
      setProfileImages(imagesMap);
    } catch (error) {
      console.error("Error fetching team details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!Array.isArray(teamList) || teamList.length === 0) {
    return <p>No team members found.</p>; // Render a message for empty state
  }

  return (
    <section className="ourTeamPage sectionPadding">
      <Tab.Container id="left-tabs-example" defaultActiveKey="All">
        <Container>
          <Row>
            <Col md={12}>
              <div className="tab-listing">
                <Nav variant="tabs">
                  {teamList.map((item) => (
                    <Nav.Item key={item.key}>
                      <Nav.Link eventKey={item.key}>{item.key}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </Col>

            <Tab.Content className="p-0">
              {teamList.map((item) => (
                <Tab.Pane key={item.key} eventKey={item.key} title={item.key}>
                  <Container>
                    <Row>
                      {item.values.map((sub) => (
                        <Col md={4} sm={6} key={sub.id}>
                          <Link href={`/our-teams/${sub.id}`} passHref>
                            <Card>
                              <Card.Img
                                variant="top"
                                src={profileImages[sub.id] || defaultImage}
                                alt={sub.name}
                              />
                              <Card.Body>
                                <Card.Title className="text-truncate-02">
                                  {sub.name}
                                </Card.Title>
                                <Card.Text>
                                  <span className="designation text-truncate-02">
                                    {sub.job}
                                  </span>
                                  <span className="degree text-truncate-02">
                                    {sub.designation}
                                  </span>
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Link>
                        </Col>
                      ))}
                    </Row>
                  </Container>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Row>
        </Container>
      </Tab.Container>
    </section>
  );
};

export default OurTeamsComponent;
