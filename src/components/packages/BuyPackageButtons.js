"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

function BuyPackageButtons({ session = null, id }) {
  return (
    <>
      {!session && (
        <Button
          variant="primary"
          className="themeBtn w-100 text-center"
          onClick={() =>
            signIn("Credentials", { callbackUrl: `/buy-package/${id}` })
          }
        >
          Buy Now
        </Button>
      )}

      {session && (
        <Link href={`/buy-package/${id}`} passHref>
          <Button variant="primary" className="themeBtn w-100 text-center">
            Buy Now
          </Button>
        </Link>
      )}
    </>
  );
}

export default BuyPackageButtons;
