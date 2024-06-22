"use client";
import React, { FC } from "react";
import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import { navItems } from "../data";
import Footer from "../components/Footer";
import Approach from "../components/Approach";
import Experience from "../components/Experience";
import RecentProjects from "../components/RecentProjects";
import Grid from "../components/Grid";

const page: FC = () => {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default page;
