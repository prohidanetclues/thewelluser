import React from "react";
import { GetMetaInfoBySlugApi } from "@/api/alias";
import dynamic from "next/dynamic";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "sign-in" });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

// Dynamically import
const SignInComponent = dynamic(() => import("@/components/sign-in"), {
  ssr: true, // Enable SSR for better SEO if needed
});

const SignInPage = () => {
  return <SignInComponent />;
};

export default SignInPage;
