"use client";
import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import SpidyWebs from "./ui/SpidyWebs";
import ComputerCanvas from "./ui/Computer";
import Image from "next/image";

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

    const handleMobile = () => {
      if (screenWidth < 768) {
        setIsDotsVisible(false);
      } else {
        setIsDotsVisible(true);
      }
    };

    handleMobile();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mb-20 relative">
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

      <div className="flex justify-center relative my-8">
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full flex flex-col items-center">
            <Image
              src="/Hero-removedbg.png"
              width={500}
              height={500}
              priority={true}
              alt="Picture of the author"
              className="z-0 absolute"
            />
            <div className="circle rounded-full z-0 absolute h-36 w-72 md:h-40 md:w-[30rem] bottom-56 md:bottom-0"/>
            <TextGenerateEffect
              className="text-center z-10 mt-48 xs:mt-64 sm:mt-64 text-[40px] md:text-5xl lg:text-6xl"
              words="Crafting High-Performance Websites
            with seamless User Experiences & Speed"
            />

            <p className="text-center z-10 md:tracking-wider mb-2 text-base md:text-lg lg:text-2xl">
              Hi, I&apos;m Suvrajit
            </p>
            <h2 className="uppercase z-10 tracking-widest mb-4 text-xs md:text-sm text-center text-blue-100  max-w-80">
              A full stack developer
            </h2>
            {isDotsVisible && <SpidyWebs />}
          </div>
          <div className="h-60 sm:h-80 w-full z-50 ">
            <ComputerCanvas />
          </div>
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
