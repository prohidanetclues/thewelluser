import { GetMetaInfoBySlugApi } from "@/api/alias";
import { GetPackagesApi } from "@/api/packages";
import authOptions  from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import React from "react";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "packages" });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

// Dynamically import
const ListPackagesComponent = dynamic(() => import("@/components/packages"), {
  ssr: true, // Enable SSR for better SEO if needed
});

export default async function PackagesPage() {
  const session = await getServerSession(authOptions);

  const response = await GetPackagesApi();
  const { success, packages } = response;

  if (!success) {
    return (
      <div>
        <p>Packages not found.</p>
      </div>
    );
  }

  return <ListPackagesComponent session={session} packages={packages} />;
}
