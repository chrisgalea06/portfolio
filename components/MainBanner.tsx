"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import parse from "html-react-parser";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/lib/services";
import Skeleton from "@/components/Skeleton";
import ErrorNetwork from "@/components/errorNetwork";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainBanner() {
  const getQuery = async () => {
    return await getData("/main-banner?populate=*");
  };
  const getQuery2 = async () => {
    return await getData("/general?populate=*");
  };
  const getQuery3 = async () => {
    return await getData("/total-project?populate=*");
  };

  const query = useQuery({
    queryKey: ["banner"],
    queryFn: getQuery,
  });
  const query2 = useQuery({
    queryKey: ["general"],
    queryFn: getQuery2,
  });

  if (query.isLoading || query2.isLoading) <></>;

  const dataContent = query.data?.data.data.attributes;
  const dataGeneral = query2.data?.data.data.attributes;

  return (
    <div className="relative text-white min-h-screen  flex items-center w-full overflow-hidden lg:pt-[130px] pt-[90px] pb-14">
      <div className="w-full h-full">
        <Image
          src="/images/ellipse1.svg"
          width={767}
          height={773}
          alt="image"
          className="absolute left-0 top-0"
        />
        <div className="wrapper w-full mx-auto relative z-10">
          <div className="responsive  justify-between items-center">
            <div
              className="flex-1 text-center lg:mb-0 mb-11 lg:text-left lg:max-w-[580px]"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <h2 className="lg:text-[48px] text-[22px]">
                {dataContent?.welcome_text}
              </h2>
              <h1 className="gradientblue lg:text-[90px] text-[45px]  font-black leading-[1.1] my-5">
                {dataContent?.name && parse(`${dataContent?.name}`)}
              </h1>
              <div className="mt-7 mb-11">
                {dataContent?.description &&
                  parse(`${dataContent?.description}`)}
              </div>
              {dataGeneral?.cta_link && (
                <Link
                  href={`${dataGeneral?.cta_link}`}
                  className="btn lg:text-[22px] text-[17px]"
                >
                  {dataGeneral?.cta_label}
                </Link>
              )}
            </div>
            {dataContent?.image.data && (
              <div className="max-h-[470px] lg:max-h-none overflow-hidden">
              <Image
                src={`${
                  process.env.URL_MEDIA + dataContent?.image.data.attributes.url
                }`}
                width={parseInt(`${dataContent?.image.data.attributes.width}`)}
                height={parseInt(
                  `${dataContent?.image.data.attributes.height}`
                )}
                alt="christoper"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              />
              </div>
            )}
          </div>
          <div
            className="w-full min-h-[70px] bg-gradient-to-r from-[#171610] to-[#14383F] text-white p-7 border-solid border-[#171610] border-[1px] responsive items-center justify-around"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-offset="-1000"
          >
            <div className="text-white text-center lg:text-left responsive [&_h4]:font-bold [&_h4]:text-[60px] items-center gap-5">
              <h4>3+</h4>
              <div>Years of Experience</div>
            </div>
            <div className="relative w-full lg:my-0 my-8 lg:w-[1px] h-[1px] lg:h-[90px] bg-white"></div>
            <div className="text-white responsive [&_h4]:font-bold [&_h4]:text-[60px] items-center gap-5">
              <h4>5</h4>
              <div>Project Completed</div>
            </div>
            <div className="relative w-full lg:my-0 my-8 lg:w-[1px] h-[1px] lg:h-[90px] bg-white"></div>
            <div className="text-white responsive [&_h4]:font-bold [&_h4]:text-[60px] items-center gap-5">
              <h4>5+</h4>
              <div>Happy Clients</div>
            </div>
          </div>
        </div>
        <Image
          src="/images/ellipse2.svg"
          width={805}
          height={1252}
          alt="image"
          className="absolute right-0 top-0"
        />
      </div>
    </div>
  );
}
