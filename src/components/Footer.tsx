import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "../data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 bottom-16">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-60"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] flex flex-col gap-2">
          <span>Ready to take your </span>
          <span className="text-purple"> digital presence </span>
          <span>to the next level ?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:suvrajitmondal359@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col-reverse justify-between items-center gap-5">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Suvrajit Mondal
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
