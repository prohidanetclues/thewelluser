import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "react-bootstrap";
import checkImageExists from "@/utils/checkImageExists";
import { GetTeamListDetailsByIdApi } from "@/api/our-team";
import { notFound } from 'next/navigation';  // Next.js function to handle 404

const TeamDetailComponent = async ({ id }) => {
  const publicPath = process.env.NEXT_PUBLIC_API_PUBLIC_URL;
  const defaultImage = "/assets/images/common/user-dummy-img.jpg";
  const { success, team: teamDetail } = await GetTeamListDetailsByIdApi({id});

  if (!success) {
    return notFound();  // This will render the default Next.js 404 page
  }

  const profileImage = teamDetail.WithProfileImage?.fullFilePath
    ? await checkImageExists(`${publicPath}/${teamDetail.WithProfileImage.fullFilePath}`).then((exists) => (exists ? `${publicPath}/${teamDetail.WithProfileImage.fullFilePath}` : defaultImage))
    : defaultImage;

  return (
    <section className="practitioner-detail cms">
      <Container>
        <Row className="practitionerDetailRow">
          <Col lg={4} sm={12}>
            <div className="dr-img">
              <div className="thumbnail_container">
                <div className="thumbnail">
                  <Image src={profileImage} alt={`${teamDetail.firstName} ${teamDetail.lastName}`} width={500} height={500} />
                </div>
              </div>
            </div>
            <Card>
              <CardBody>
                <CardTitle>
                  {teamDetail.firstName} {teamDetail.lastName}
                </CardTitle>
                <CardText>
                  <span>{teamDetail.job}</span>
                  <span>{teamDetail.shortdescription}</span>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg={8} sm={12} className="dr-data">
            <div className="dr-details-content">
              <div className="dr-content-Head">
                <div>
                  <h2 className="dr-name">
                    {teamDetail.firstName} {teamDetail.lastName}
                  </h2>
                  <span className="sub-title"></span>
                </div>
                <Link href="https://example.com/book-appointment" target="_blank" className="themeBtn" title="Book Appointment">
                  BOOK APPOINTMENT WITH {teamDetail.firstName}
                </Link>
              </div>
              <div className="dr-description mb-4">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <ul className="dr-details-social"></ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamDetailComponent;
