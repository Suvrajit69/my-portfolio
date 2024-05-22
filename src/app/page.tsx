import React from "react";
import Hero from "../components/Hero";
import Grid  from "../components/Grid";
import RecentProjects from "../components/RecentProjects";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import { navItems } from "../data";
import Experience from "../components/Experience";

const page = () => {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects/>
        <Experience/>
      </div>
    </main>
  );
};

export default page;
