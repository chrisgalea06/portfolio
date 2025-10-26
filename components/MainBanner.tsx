"use client";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import "aos/dist/aos.css";
import portfolioData, { getProfileImage } from "../lib/portfolio-data";

export default function MainBanner() {
  const dataContent = portfolioData.mainBanner;

  return (
    <div className="relative text-white min-h-screen flex items-center w-full overflow-hidden lg:pt-[130px] md:pt-[100px] pt-[90px] pb-14">
      <div className="w-full h-full">
        <Image
          src="/assets/icons/ellipse1.svg"
          width={767}
          height={773}
          alt="image"
          className="absolute left-0 top-0"
        />
        <div className="wrapper w-full mx-auto relative z-10">
          <div className="responsive justify-between items-center md:px-8 px-4">
            <div
              className="flex-1 text-center lg:mb-0 mb-11 lg:text-left lg:max-w-[580px]"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <h2 className="lg:text-[48px] md:text-[36px] text-[22px]">
                {dataContent?.welcome_text}
              </h2>
              <h1 className="gradientblue lg:text-[90px] md:text-[65px] text-[45px] font-black leading-[1.1] my-5">
                {dataContent?.name && parse(`${dataContent?.name}`)}
              </h1>
              <div className="mt-7 mb-11">
                {dataContent?.description &&
                  parse(`${dataContent?.description}`)}
              </div>
            </div>
            <div
              className="max-h-[470px] lg:max-h-none overflow-hidden md:px-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <Image
                src={getProfileImage()}
                width={400}
                height={675}
                alt="Christopher Galea"
              />
            </div>
          </div>
          <div
            className="w-full min-h-[70px] bg-gradient-to-r from-[#171610] to-[#14383F] text-white p-7 border-solid border-[#171610] border-[1px] responsive2 items-center justify-around md:mx-4 mx-2"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-offset="-1000"
          >
            <div className="text-white text-center md:text-left responsive [&_h4]:font-bold [&_h4]:text-[60px] items-center gap-5">
              <h4>5+</h4>
              <div>Years of Experience</div>
            </div>
            <div className="relative w-full md:my-0 my-8 md:w-[1px] h-[1px] md:h-[90px] bg-white"></div>
            <div className="text-white responsive [&_h4]:font-bold [&_h4]:text-[60px] items-center gap-5">
              <h4>30+</h4>
              <div>Projects Completed</div>
            </div>
            <div className="relative w-full md:my-0 my-8 md:w-[1px] h-[1px] md:h-[90px] bg-white"></div>
            <div className="text-white responsive [&_h4]:font-bold [&_h4]:text-[60px] items-center gap-5">
              <h4>500+</h4>
              <div>Happy Users</div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/icons/ellipse2.svg"
          width={805}
          height={1252}
          alt="image"
          className="absolute right-0 top-0"
        />
      </div>
    </div>
  );
}
