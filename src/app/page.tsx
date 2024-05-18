import React from "react";
import Hero from "../components/Hero";

const page = () => {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero/>
      </div>
    </main>
  );
};

export default page;
