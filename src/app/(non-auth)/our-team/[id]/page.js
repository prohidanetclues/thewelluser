import React from "react";
import TeamDetailComponent from "@/components/our-team/TeamDetailComponent";

const TeamDetailPage = async ({ params }) => {
  return <TeamDetailComponent id={params.id} />;
};

export default TeamDetailPage;
