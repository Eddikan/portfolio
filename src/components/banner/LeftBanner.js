import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVuedotjs,
  SiNextdotjs,
  SiIonic,
  SiNuxtdotjs,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Mobile Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Ime Ekwere</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a seasoned frontend developer with 4 years of experience, I bring a
          wealth of knowledge and expertise to the table. I specialize in
          building intuitive and visually appealing user interfaces for both web and mobile.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Eddikan" target="__blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>

            <a href="https://twitter.com/skinnyeddyy" target="__blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>

            <a href="https://www.linkedin.com/in/ime-ekwere-552b9b1b3/" target="__blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex flex-wrap md:grid grid-cols-3 gap-4">
            <span className="bannerIcons">
              <FaReact />
            </span>
            <span className="bannerIcons">
              <SiVuedotjs />
            </span>
            <span className="bannerIcons">
              <SiNextdotjs />
            </span>
            <span className="bannerIcons">
              <SiTailwindcss />
            </span>
            <span className="bannerIcons">
              <SiIonic />
            </span>
            <span className="bannerIcons">
              <SiNuxtdotjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
