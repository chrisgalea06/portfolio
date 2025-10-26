"use client";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import "aos/dist/aos.css";
import portfolioData from "@/lib/portfolio-data";
import { ItemServiceProps, ServiceItem } from "@/lib/types";

function ItemService(props: ItemServiceProps) {
  const animationClass = () => {
    switch (props.animationDelay) {
      case 1:
        return "fade-up-left";
      case 2:
        return "fade-up";
      case 3:
        return "fade-up-right";
      default:
        return "";
    }
  };
  return (
    <div
      className="mt-14 flex-1 box"
      data-aos={animationClass()}
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="border-gradient p-7 relative text-center h-full flex flex-col">
        <div className="textgradient text-left">
          <h3>{props.num}</h3>
        </div>
        <div className="text-center [&_img]:mx-auto mt-2 mb-9 h-[61px]">
          <Image src={props.image} width={61} height={61} alt={props.title} />
        </div>
        <h3 className="text-[24px] font-extrabold mb-4">{props.title}</h3>
        <div className="text-center text-sm flex-grow">{props.description}</div>
      </div>
    </div>
  );
}
export default function Services() {
  const dataContent = portfolioData.services;

  return (
    <div
      className="text-white lg:pt-[130px] pt-[90px]"
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="wrapper contentstext">
        <div className="text-center">
          <h2>{dataContent?.title}</h2>
          <div className="max-w-[410px] mx-auto">{dataContent?.sub_title}</div>
        </div>
        <div className="responsive gap-4 justify-center items-stretch">
          {dataContent?.service_items.map(
            (item: ServiceItem, index: number) => (
              <ItemService
                key={index}
                num={index + 1}
                image="/assets/icons/icon-front.svg"
                title={item?.title}
                description={parse(`${item?.description}`)}
                animationDelay={index + 1}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
