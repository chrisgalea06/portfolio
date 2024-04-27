"use client";
import React, { ReactNode } from "react";
import parse from "html-react-parser";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/services";
import Skeleton from "../components/Skeleton";
import ErrorNetwork from "../components/errorNetwork";
import Link from "next/link";
import Image from "next/image";
import _ from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface iItemProject {
  title: string;
  images: string[];
  imageWidth: number | string;
  imageHeight: number | string;
  children: string | ReactNode;
  odd?: boolean;
  link: string;
}

function ItemProject(props: iItemProject) {
  const slides = props.images.map((item: any, index: number) => (
    <SwiperSlide key={index}>
      <img src={item} alt={`Slide ${index + 1}`} />
    </SwiperSlide>
  ));

  const randomDelay = Math.floor(Math.random() * 5000) + 1000; // Generate a random number between 1000 and 4000

  return (
    <div
      className={`flex flex-col ${
        props.odd ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-14 lg:justify-center my-14 lg:px-0 md:px-16 sm:px-8 px-3`}
    >
      <div
        data-aos={`${props.odd ? "fade-up-left" : "fade-up-right"}`}
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div className="title text-[32px] font-black mb-5">
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

interface ListProjectsProps {
  amountToShow?: number;
}

export default function ListProjects({ amountToShow }: ListProjectsProps) {
  const [limit, setLimit] = React.useState(amountToShow || 3);
  const getQuery = async () => {
    return await getData("/project?populate=deep");
  };
  const query = useQuery({
    queryKey: ["project"],
    queryFn: getQuery,
  });

  if (query.isLoading) return <></>;

  const dataContent = query.data?.data.data.attributes;
  const dataAll = dataContent?.list_portfolio;
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
        {!window.location.href.includes("/projects") && (
          <Link
            href="/projects"
            className="hidden lg:block btn-white cursor-pointer hover:bg-gradient-to-r hover:from-[#00B0ED] hover:to-[#061887] hover:border-2 border-black"
            //onClick={() => setLimit(dataAll.length)}
          >
            {dataContent?.label_button}
          </Link>
        )}
      </div>
      <div className="relative mt-9">
        {dataFilter?.map((item: any, index: number) => {
          const imageUrls = item.images.data.map(
            (image: any) => process.env.URL_MEDIA + image.attributes.url
          );

          return (
            <ItemProject
              key={index}
              odd={index % 2 === 0} // Determine odd/even index
              imageHeight={411}
              imageWidth={476}
              title={item.title}
              images={imageUrls} // Pass array of image URLs
              link={item.LinkButton}
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
