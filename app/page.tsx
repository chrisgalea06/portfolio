"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Basecontent from "@/components/basecontent";

import MainBanner from "@/components/MainBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonies from "@/components/Testimonies";
import ListProjects from "@/components/ListProjects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Basecontent>
        <Header />
        <div id="home">
          <MainBanner />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="testimonies">
          <Testimonies />
        </div>
        <div id="projects">
          <ListProjects amountToShow={2} />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </Basecontent>
    </div>
  );
}
