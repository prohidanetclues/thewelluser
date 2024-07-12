import React from "react";
import { GetMetaInfoBySlugApi } from "@/api/alias";
import dynamic from "next/dynamic";
import Loading from "./loading";
import { getServerSession } from "next-auth";
import authOptions  from "@/app/api/auth/[...nextauth]/options";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "change-profile" });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

// Dynamically import
const ChangeProfileComponent = dynamic(() => import("@/components/change-profile"), {
  loading: () => <Loading />,
  ssr: false, // Enable SSR for better SEO if needed
});

const ChangeProfilePage = async () => {
  const session = await getServerSession(authOptions);

  return <ChangeProfileComponent session={session} />;
};

export default ChangeProfilePage;
