"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import parse from "html-react-parser";
import portfolioData from "@/lib/portfolio-data";

export default function Footer() {
  const dataContent = portfolioData.general;

  return (
    <div className="relative text-white">
      <Image
        src="/assets/icons/ellipse6.svg"
        width={805}
        height={1252}
        alt="image"
        className="absolute left-0 bottom-0"
      />
      <div className="wrapper">
        <div className="responsive justify-between py-14 w-full lg:items-end items-center gap-5 lg:gap-1">
          <div className="text-[14px] lg:order-none order-1">
            {dataContent?.copyright ? (
              parse(`${dataContent?.copyright}`)
            ) : (
              <>
                Copyright {new Date().getFullYear()} Christopher Galea | All
                Rights Reserved
              </>
            )}
          </div>
          <div className="flex items-center gap-7 relative z-10">
            {dataContent?.facebook &&
              dataContent.facebook !== "https://www.facebook.com/" && (
                <Link
                  href={dataContent.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors duration-300 text-xl cursor-pointer relative z-20"
                >
                  <FaFacebookF />
                </Link>
              )}
            {dataContent?.instagram &&
              dataContent.instagram !== "https://www.instagram.com/" && (
                <Link
                  href={dataContent.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400 transition-colors duration-300 text-xl cursor-pointer relative z-20"
                >
                  <FaInstagram />
                </Link>
              )}
            {dataContent?.linkedin &&
              dataContent.linkedin !== "https://www.linkedin.com" && (
                <Link
                  href={dataContent.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition-colors duration-300 text-xl cursor-pointer relative z-20"
                >
                  <FaLinkedinIn />
                </Link>
              )}
          </div>
        </div>
      </div>
      <Image
        src="/assets/icons/ellipse3.svg"
        width={805}
        height={1252}
        alt="image"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
}
