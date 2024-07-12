import React from "react";
import { GetMetaInfoBySlugApi } from "@/api/alias";
import dynamic from "next/dynamic";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "reset-password" });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

// Dynamically import
const ResetPasswordComponent = dynamic(() => import("@/components/reset-password"), {
  ssr: true, // Enable SSR for better SEO if needed
});

const ResetPasswordPage = ({ params }) => {
  return <ResetPasswordComponent params={params} />;
};

export default ResetPasswordPage;
