import { GetMetaInfoBySlugApi } from "@/api/alias";
import dynamic from "next/dynamic";
import React from "react";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "our-team" });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

// Dynamically import
const OurTeamsComponent = dynamic(() => import("@/components/our-team"), {
  ssr: true, // Enable SSR for better SEO if needed
});

const OurTeamsPage = () => {
  return <OurTeamsComponent />;
};

export default OurTeamsPage;
