"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import parse from "html-react-parser";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../lib/services";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const getQuery = async () => {
    return await getData("/menus?populate=*");
  };
  const getQuery2 = async () => {
    return await getData("/general?populate=*");
  };
  const query = useQuery({
    queryKey: ["menus"],
    queryFn: getQuery,
  });
  const query2 = useQuery({
    queryKey: ["general"],
    queryFn: getQuery2,
  });

  if (query.isLoading) <></>;

  const dataContent = query.data?.data.data;
  const dataGeneral = query2.data?.data.data.attributes;

  return (
    <div
      className="lg:fixed fixed w-full top-0 py-4 text-white z-20 overflow-x-hidden"
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="wrapper">
        <div className="flex justify-between text-[22px] items-center">
          {dataGeneral?.logo.data ? (
            <Link href="/">
              {/* <Image
                src={`${
                  process.env.URL_MEDIA + dataGeneral?.logo.data.attributes.url
                }`}
                width={parseInt(
                  `${dataGeneral?.logo.data.attributes.width * 0.6}`
                )}
                height={parseInt(
                  `${dataGeneral?.logo.data.attributes.height * 0.6}`
                )}
                alt={`${dataGeneral?.title}`}
              /> */}
              <Image src="/images/logo.svg" width={47} height={46} alt="logo" />
            </Link>
          ) : null}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex gap-7 font-normal">
              {dataContent?.map((item: any) => {
                return (
                  <li key={item.id} className="menu-item2">
                    <Link href={`/${item.attributes.link}`}>
                      {item.attributes.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {dataGeneral?.cta_link && (
              <Link href={`/${dataGeneral?.cta_link}`} className="btn ml-16">
                {dataGeneral?.cta_label}
              </Link>
            )}
          </div>
          <div className="lg:hidden relative cursor-pointer">
            <IoMdMenu className="text-5xl" onClick={() => setMenu(!menu)} />
          </div>
        </div>
      </div>
      {menu ? (
        <ul className="flex flex-col gap-7 font-normal bggradient w-[97%] mx-auto left-0 right-0 text-center p-7 mt-2 rounded-lg">
          {dataContent?.map((item: any) => {
            return (
              <li
                onClick={() => setMenu(false)}
                key={item.id}
                className="menu-item"
              >
                <Link href={`/${item.attributes.link}`}>
                  {item.attributes.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
