import { GetMetaInfoBySlugApi } from "@/api/alias";
import Loading from "@/app/loading";
import HomeComponent from "@/components/home";
import dynamic from "next/dynamic";
import React from "react";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "home" });
  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

// Dynamically import
const BannerComponent = dynamic(() => import("@/components/home/BannerComponent"), {
  ssr: false,
  loading: () => <Loading />,
});

const HomePage = async () => {
  return (
    <>
      <BannerComponent />
      <HomeComponent />
    </>
  );
};

export default HomePage;
