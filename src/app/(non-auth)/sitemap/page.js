import { GetMetaInfoBySlugApi } from "@/api/alias";
import SiteMapComponent from "@/components/sitemap";
import React from "react";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "sitemap" });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

const SiteMapPage = async () => {
  return <SiteMapComponent />;
};

export default SiteMapPage;
