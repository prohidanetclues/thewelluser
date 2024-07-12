import React from "react";
import { GetMetaInfoBySlugApi } from "@/api/alias";
import dynamic from "next/dynamic";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "forgot-password" });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

// Dynamically import
const ForgotPasswordComponent = dynamic(() => import("@/components/forgot-password"), {
  ssr: true, // Enable SSR for better SEO if needed
});

const ForgotPasswordPage = () => {
  return <ForgotPasswordComponent />;
};

export default ForgotPasswordPage;
