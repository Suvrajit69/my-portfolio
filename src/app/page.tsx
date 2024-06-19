import React from "react";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import RecentProjects from "../components/RecentProjects";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import { navItems } from "../data";
import Experience from "../components/Experience";
import Approach from "../components/Approach";
import Footer from "../components/Footer";
import StarsCanvas from "../components/Stars";

const page = () => {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <div className="relative z-0">
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </main>
  );
};

export default page;
