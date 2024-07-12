"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GetBannerListApi } from "@/api/banners";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const BannerComponent = () => {
  const publicPath = process.env.NEXT_PUBLIC_API_PUBLIC_URL;
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const { success, banners } = await GetBannerListApi();
        if (success) {
          setBanners(banners);
        } else {
          setBanners([]);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (!loading && banners.length === 0) {
    return <div>No banners available</div>; // Message for empty state
  }

  return (
    <div className="bannerSection">
      <Swiper
        autoHeight={true}
        spaceBetween={30}
        centeredSlides={true}
        lazy="true"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true, // Make pagination clickable
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {banners.map(({ WithProfileImage, title, shortDescription, redirectToPageLinkOne, redirectToPageLinkTwo, redirectToPageNameOne, redirectToPageNameTwo }, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <div className="single-banner-slide" style={{ backgroundImage: `url(${publicPath}/${WithProfileImage.fullFilePath})` }}>
                <div className="homeSliderCaption">
                  <h2 className="bannerTitle">{title}</h2>
                  <p className="bannerContent">{shortDescription}</p>
                  {redirectToPageNameOne && redirectToPageLinkOne && (
                    <Link href={redirectToPageLinkOne} target="_blank" className="bannerBtndiv themeBtn d-inline-flex">
                      {redirectToPageNameOne}
                    </Link>
                  )}
                  {redirectToPageNameTwo && redirectToPageLinkTwo && (
                    <Link href={redirectToPageLinkTwo} target="_blank" className="bannerBtndiv themeBtn d-inline-flex">
                      {redirectToPageNameTwo}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerComponent;
