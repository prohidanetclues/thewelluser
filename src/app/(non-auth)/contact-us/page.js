import { GetMetaInfoBySlugApi } from "@/api/alias";
import ContactUsComponent from "@/components/contact-us";
import React from "react";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const { success, metaInfo } = await GetMetaInfoBySlugApi({ alias: "contact-us" });

  if (success) {
    return {
      title: metaInfo.metaTitle,
      description: metaInfo.metaDescription,
    };
  }
}

const ContactUsPage = async () => {
  return <ContactUsComponent />;
};

export default ContactUsPage;
