import { GetMetaInfoBySlugApi } from "@/api/alias";
import React from "react";
import FaqsComponent from "@/components/faqs";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "faqs" });
  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

const FaqsPage = async ({ searchParams }) => {
  return <FaqsComponent searchParams={searchParams} />;
};

export default FaqsPage;
