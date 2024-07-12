import React from "react";
import { notFound } from "next/navigation";
import { GetMetaInfoBySlugApi } from "@/api/alias";
import AliasChecker from "@/context/AliasChecker";
import ContactUsPage from "@/app/(non-auth)/contact-us/page";
import OurTeamsPage from "../our-team/page";
import FaqsPage from "../faqs/page";
import HomePage from "../home/page";
import SignInPage from "../sign-in/page";
import SignUpPage from "../sign-up/page";
import SiteMapPage from "../sitemap/page";
import PackagesPage from "../packages/page";

// Function to generate metadata dynamically
export async function generateMetadata({ params }) {
  const slug = params.slugs[params.slugs.length - 1];
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: slug });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }

  return {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
  };
}

// Mapping slugs to components
const slugToComponentMap = {
  "contact-us": ContactUsPage,
  "our-team": OurTeamsPage,
  packages: PackagesPage,
  faqs: FaqsPage,
  home: HomePage,
  "sign-in": SignInPage,
  "sign-up": SignUpPage,
  sitemap: SiteMapPage,
};

// Server component to render the page
const DynamicSlugPage = async ({ params }) => {
  const slug = params.slugs[params.slugs.length - 1];

  const PageComponent = slugToComponentMap[slug];
  if (PageComponent) {
    return <PageComponent />;
  }

  try {
    const data = await AliasChecker({ alias: slug });

    if (!data) {
      notFound();
    }

    return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
  } catch (error) {
    console.error("Error fetching data for alias:", slug, error);
    notFound();
  }
};

export default DynamicSlugPage;
