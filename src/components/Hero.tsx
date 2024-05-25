import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-30 relative">
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
            with seamless User Experiences & speed"
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
              otherClasses="gap-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
