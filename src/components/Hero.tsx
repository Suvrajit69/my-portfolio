"use client";
import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import SpidyWebs from "./ui/SpidyWebs";

const Hero = () => {
  let width = 0;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }

  const [isDotsVisible, setIsDotsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(width);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsDotsVisible(false);
      } else {
        if (screenWidth < 768) {
          setIsDotsVisible(false);
        } else {
          setIsDotsVisible(true);
        }
      }
    };

    const handleMobile = () => {
      if (screenWidth < 768) {
        setIsDotsVisible(false);
      } else {
        setIsDotsVisible(true);
      }
    };

    handleMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pb-20 pt-30 relative">
      {isDotsVisible && <SpidyWebs />}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen absolute"
          fill="white"
        />
        <Spotlight
          className="-top-10 left-full h-[80vh] w-[50vw] absolute"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw] absolute"
          fill="blue"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20">
        <div className="w-full flex flex-col items-center">
          <TextGenerateEffect
            className="text-center mx-auto text-[40px] md:text-5xl lg:text-6xl"
            words="Crafting High-Performance Websites
            with seamless User Experiences & Speed"
          />

          <p className="text-center md:tracking-wider mb-2 text-base md:text-lg lg:text-2xl">
            Hi, I&apos;m Suvrajit
          </p>
          <h2 className="uppercase tracking-widest mb-4 text-xs md:text-sm text-center text-blue-100  max-w-80">
            A full stack web developer
          </h2>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="gap-2 z-50"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
