import React from "react";
import { GetMetaInfoBySlugApi } from "@/api/alias";
import dynamic from "next/dynamic";
import Loading from "./loading";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "sign-up" });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

// Dynamically import
const SignUpComponent = dynamic(() => import("@/components/sign-up"), {
  loading: () => <Loading />,
  ssr: false, // Enable SSR for better SEO if needed
});

const SignUpPage = () => {
  return <SignUpComponent />;
};

export default SignUpPage;
