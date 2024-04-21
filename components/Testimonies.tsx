"use client";

import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from "html-react-parser";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/lib/services";
import Skeleton from "@/components/Skeleton";
import ErrorNetwork from "@/components/errorNetwork";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FaStar, FaRegStar } from "react-icons/fa6";
import Image from "next/image";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="arrow-next absolute left-0 right-[70px] mx-auto -bottom-[140px]  z-10 cursor-pointer border-solid border-[1px] text-white  rounded-full w-12 h-12 flex justify-center items-center text-3xl  hover:bg-gradient-to-r hover:from-[#00B0ED] hover:to-[#061887] hover:border-black"
      onClick={onClick}
    >
      <RiArrowLeftSLine />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="arrow-prev absolute right-0 left-[70px]  mx-auto -bottom-[140px] z-10 cursor-pointer border-solid border-[1px] border-white rounded-full text-white w-12 h-12 flex justify-center items-center text-3xl hover:bg-gradient-to-r hover:from-[#00B0ED] hover:to-[#061887] hover:border-black"
      onClick={onClick}
    >
      <RiArrowRightSLine />
    </div>
  );
}

function ItemSlider({
  name,
  comment,
  rate,
}: {
  name: string;
  comment: string | ReactNode;
  rate: number;
}) {
  return (
    <div
      className="relative text-left text-white pb-11"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="relative flex gap-3 mx-auto justify-start lg:text-2xl text-xl text-[#FFB800]">
        <Rating rate={rate} /> <div className="text-white">{rate} Star</div>
      </div>
      <div className="relative">
        <div className="py-5 lg:pr-[160px] lg:text-left text-justify">
          {comment ? comment : "comment is empty"}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-[27px] font-semibold">{name}</h3>
        <div className="lg:hidden">
          <Image
            src="/images/quote.svg"
            width={122 * 0.7}
            height={100 * 0.7}
            alt=""
            className="relative right-0 bottom-0"
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/images/quote.svg"
          width={122}
          height={100}
          alt=""
          className="absolute right-0 top-0 "
        />
      </div>
    </div>
  );
}
function Rating({ rate }: { rate: number }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      stars.push(<FaStar key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return <>{stars}</>;
}

export default function Testimonies() {
  const getQuery = async () => {
    return await getData("/testimony?populate=deep");
  };
  const query = useQuery({
    queryKey: ["testimony"],
    queryFn: getQuery,
  });
  const dataContent = query.data?.data.data.attributes;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  if (query.isLoading) <></>;

  return (
    <div className="max-w-[890px] mx-auto lg:pt-[130px] pt-[90px] pb-[150px]">
      <div
        className="contentstext"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          {dataContent?.title}
        </h2>
      </div>
      <div className="bg-[#100F0C] px-11 py-11">
        <Slider {...settings}>
          {dataContent?.item_testimony.map((item: any) => {
            return (
              <ItemSlider
                key={item.id}
                name={item.name}
                comment={parse(`${item.comment}`)}
                rate={item.rate}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
