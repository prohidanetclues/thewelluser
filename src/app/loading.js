"use client";
import Image from "next/image";
import React from "react";
const loaderImage = "/assets/images/common/LoaderIcon.webp";
function Loading(props) {
  return (
    <>
      <div className="loaderSection" role="status">
        <Image src={loaderImage} width={80} height={80} alt="loader-image" />
      </div>
    </>
  );
}

export default Loading;
