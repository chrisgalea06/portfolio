"use client";
import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import _ from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import portfolioData, {
  getProjectImages,
  getProjectWebsiteUrl,
} from "../lib/portfolio-data";
import { ItemProjectProps, ListProjectsProps, ProjectItem } from "../lib/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ItemProject(props: ItemProjectProps) {
  const slides = props.images.map((item: string, index: number) => (
    <SwiperSlide key={index}>
      <Image
        src={item}
        alt={`${props.title} - Slide ${index + 1}`}
        width={476}
        height={411}
        className="w-full h-auto"
      />
    </SwiperSlide>
  ));

  const randomDelay = Math.floor(Math.random() * 5000) + 1000; // Generate a random number between 1000 and 4000

  return (
    <div
      className={`flex flex-col ${
        props.odd ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-14 lg:justify-center my-14 lg:px-0 md:px-8 sm:px-6 px-3`}
    >
      <div
        data-aos={`${props.odd ? "fade-up-left" : "fade-up-right"}`}
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div className="title text-[32px] md:text-[28px] font-black mb-5">
          <h3>{props.title}</h3>
        </div>
        <div className="text-justify">{props.children}</div>
        <div className="pt-5">
          <a
            target="_blank"
            href={props.link}
            className="btn text-[17px]"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
      </div>
      <div
        className="lg:w-1/2"
        data-aos={`${props.odd ? "fade-up-right" : "fade-up-left"}`}
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: randomDelay, // Set the random delay
            disableOnInteraction: false,
          }}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
}

export default function ListProjects({ amountToShow }: ListProjectsProps) {
  const [limit, setLimit] = React.useState(amountToShow || 3);

  const dataContent = portfolioData.projects;
  const dataAll = dataContent.portfolio_items;
  const dataFilter = _.slice(dataAll, 0, limit);

  return (
    <div className="wrapper text-white lg:pt-[130px] pt-[90px]">
      <div
        className="contentstext flex items-center justify-between"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <h2 className="lg:text-left text-center">{dataContent?.title}</h2>
        <Link
          href="/projects"
          className="hidden lg:block btn-white cursor-pointer hover:bg-gradient-to-r hover:from-[#00B0ED] hover:to-[#061887] hover:border-2 border-black"
          //onClick={() => setLimit(dataAll.length)}
        >
          {dataContent?.label_button}
        </Link>
      </div>
      <div className="relative mt-9">
        {dataFilter?.map((item: ProjectItem, index: number) => {
          const imageUrls = getProjectImages(item.title);
          const websiteUrl = getProjectWebsiteUrl(item.title);

          return (
            <ItemProject
              key={index}
              odd={index % 2 === 0} // Determine odd/even index
              imageHeight={411}
              imageWidth={476}
              title={item.title}
              images={imageUrls} // Pass array of image URLs
              link={websiteUrl}
            >
              {parse(`${item.description}`)}
            </ItemProject>
          );
        })}
      </div>

      <div className="block lg:hidden mx-auto text-center">
        <div
          className="inline-block mx-auto btn-white cursor-pointer hover:bg-gradient-to-r hover:from-[#00B0ED] hover:to-[#061887] hover:border-2 border-black"
          onClick={() => setLimit(dataAll.length)}
        >
          {dataContent?.label_button}
        </div>
      </div>
    </div>
  );
}
