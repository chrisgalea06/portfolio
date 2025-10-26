"use client";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import "aos/dist/aos.css";
import portfolioData, { getAboutImage } from "../lib/portfolio-data";

export default function About() {
  const dataContent = portfolioData.about;

  return (
    <div className="relative lg:py-[130px] py-[90px] bg-[#100F0C] ">
      <div className="wrapper">
        <div className="responsive justify-between text-white items-center gap-20">
          <Image
            src={getAboutImage()}
            width={400}
            height={500}
            alt="Christopher Galea"
            className="lg:order-1 order-2"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1000"
          />
          <div
            className="relative contentstext flex-1 [&_h4]:font-normal [&_h4]:text-[28px]
                    [&_h2]:text-[48px] [&_h2]:font-black [&_p]:my-6 lg:order-2 order-1 lg:text-left text-center
                    "
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            {/* <h4>{dataContent?.welcome_text}</h4> */}
            <h2>{dataContent?.name}</h2>
            <div className="text-justify">
              {dataContent?.description && parse(`${dataContent?.description}`)}
            </div>
            {/* <div className="inline-block mt-7">
              {dataContent?.cv && (
                <Link
                  target="_blank"
                  href={
                    process.env.URL_MEDIA + dataContent?.cv.data.attributes.url
                  }
                  className="btn flex gap-2 items-center"
                >
                  <LuDownload /> Download CV
                </Link>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
