"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuDownload } from "react-icons/lu";
import parse from "html-react-parser";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/services";
import Skeleton from "../components/Skeleton";
import ErrorNetwork from "../components/errorNetwork";
import "aos/dist/aos.css";

export default function About() {
  const getQuery = async () => {
    return await getData("/about?populate=*");
  };
  const query = useQuery({
    queryKey: ["about"],
    queryFn: getQuery,
  });
  if (query.isLoading) <></>;

  const dataContent = query.data?.data.data.attributes;

  return (
    <div className="relative lg:py-[130px] py-[90px] bg-[#100F0C] ">
      <div className="wrapper">
        <div className="responsive justify-between text-white items-center gap-20">
          {dataContent?.image?.data && (
            <>
              {/* Construct the image URL */}
              {(() => {
                const imagePath = dataContent.image.data.attributes.url;
                const imageUrl = `${process.env.URL_MEDIA}${imagePath}`;
                const imageWidth = parseInt(
                  dataContent.image.data.attributes.width
                );
                const imageHeight = parseInt(
                  dataContent.image.data.attributes.height
                );

                // Log the details to the console
                console.log("Base URL:", process.env.URL_MEDIA);
                console.log("Image Path:", imagePath);
                console.log("Image Width:", imageWidth);
                console.log("Image Height:", imageHeight);
                console.log("Complete Image URL:", imageUrl);

                return (
                  <Image
                    src={imageUrl}
                    width={imageWidth}
                    height={imageHeight}
                    alt="christoper"
                    className="lg:order-1 order-2"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  />
                );
              })()}
            </>
          )}
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
