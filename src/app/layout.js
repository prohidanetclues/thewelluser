import React from "react";
import AuthProvider from "@/context/AuthProvider";
import "../../styles/index.scss";
import FooterComponent from "@/components/layout/FooterComponent";
import HeaderComponent from "@/components/layout/HeaderComponent";
import ReduxProvider from "@/context/ReduxProvider";
import { GetMetaInfoBySlugApi } from "@/api/alias";
import { GetSiteMenusHierarchyApi } from "@/api/menus";

export async function generateMetadata() {
  try {
    const { success, metaInfo } = await GetMetaInfoBySlugApi({});

    if (success) {
      return {
        title: metaInfo.metaTitle,
        description: metaInfo.metaDescription,
      };
    }
  } catch (error) {}

  return {};
}

const getHeaderMenus = async () => {
  try {
    const { success, headerMenuHierarchy = [], footerMenuList = [] } = await GetSiteMenusHierarchyApi();
    if (success) {
      return { headerMenuHierarchy, footerMenuList };
    }
  } catch (error) {}

  return { headerMenuHierarchy: [], footerMenuList: [] };
};

export default async function RootLayout({ children }) {
  const { headerMenuHierarchy, footerMenuList } = await getHeaderMenus();
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AuthProvider>
            <HeaderComponent headerMenuHierarchy={headerMenuHierarchy} />
            <main>{children}</main>
            <FooterComponent footerMenuList={footerMenuList} />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
