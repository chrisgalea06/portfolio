"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import parse from "html-react-parser";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/lib/services";
import Skeleton from "@/components/Skeleton";
import ErrorNetwork from "@/components/errorNetwork";

export default function Footer() {
  const getQuery = async () => {
    return await getData("/general?populate=*");
  };
  const query = useQuery({
    queryKey: ["general"],
    queryFn: getQuery,
  });

  if (query.isLoading) <></>;
  const dataContent = query.data?.data.data.attributes;

  return (
    <div className="relative text-white">
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
          <div className="flex items-center gap-7">
            {dataContent?.facebook && (
              <Link href={dataContent?.facebook}>
                <FaFacebookF />
              </Link>
            )}
            {dataContent?.instagram && (
              <Link href={dataContent?.instagram}>
                <FaInstagram />
              </Link>
            )}
            {dataContent?.linkedin && (
              <Link href={dataContent?.linkedin}>
                <FaLinkedinIn />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
