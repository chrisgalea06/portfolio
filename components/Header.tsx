"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import portfolioData, { getLogo } from "../lib/portfolio-data";
import { MenuItem } from "../lib/types";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const dataContent = portfolioData.menus;
  const dataGeneral = portfolioData.general;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    };

    if (menu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
      }
    };

    if (menu) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menu]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`lg:fixed fixed w-full top-0 py-4 text-white z-20 overflow-x-hidden transition-all duration-300 ${
        scrolled ? "bg-[#15140f]/80 backdrop-blur-sm" : "bg-transparent"
      }`}
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <div className="wrapper">
        <div className="flex justify-between text-lg items-center">
          <Link href="/">
            <Image src={getLogo()} width={47} height={46} alt="logo" />
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex gap-7 font-normal">
              {dataContent?.map((item: MenuItem) => {
                return (
                  <li key={item.id} className="menu-item2">
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
            {dataGeneral?.cta_link && (
              <Link href={dataGeneral.cta_link} className="btn ml-16">
                {dataGeneral.cta_label}
              </Link>
            )}
          </div>
          <div className="lg:hidden relative">
            <button
              onClick={() => setMenu(!menu)}
              className="cursor-pointer p-2"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
            >
              <IoMdMenu className="text-5xl" />
            </button>
          </div>
        </div>
      </div>
      {menu ? (
        <div ref={menuRef}>
          <ul
            className="flex flex-col gap-7 font-normal bggradient w-[97%] mx-auto left-0 right-0 text-center p-7 mt-2 rounded-lg"
            role="menu"
            aria-label="Navigation menu"
          >
            {dataContent?.map((item: MenuItem) => {
              return (
                <li
                  onClick={() => setMenu(false)}
                  key={item.id}
                  className="menu-item"
                  role="menuitem"
                >
                  <Link href={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
