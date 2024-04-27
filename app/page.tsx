"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Basecontent from "../components/basecontent";

import MainBanner from "../components/MainBanner";
import About from "../components/About";
import Services from "../components/Services";
import Testimonies from "../components/Testimonies";
import ListProjects from "../components/ListProjects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { getData } from "../lib/services";
import axios from "axios";
import Loader from "../components/Loader";
import React from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + process.env.KEY_API,
    },
  };

  const getGeneralData: any = () =>
    axios.get(`${process.env.URL_API}/general`, config).then((res) => {
      setIsLoading(false);
    });

  useEffect(() => {
    getGeneralData();
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Basecontent>
          <Header />
          <div id="home" className="overflow-x-hidden overflow-y-hidden">
            <MainBanner />
          </div>
          <div id="about" className="overflow-x-hidden overflow-y-hidden">
            <About />
          </div>
          <div id="services" className="overflow-x-hidden overflow-y-hidden">
            <Services />
          </div>
          <div id="testimonies" className="overflow-x-hidden overflow-y-hidden">
            <Testimonies />
          </div>
          <div id="projects" className="overflow-x-hidden overflow-y-hidden">
            <ListProjects amountToShow={2} />
          </div>
          <div id="contact" className="overflow-x-hidden overflow-y-hidden">
            <Contact />
          </div>
          <Footer />
        </Basecontent>
      )}
    </div>
  );
}
