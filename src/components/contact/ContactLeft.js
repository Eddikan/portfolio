import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ime Ekwere</h3>
        <p className="text-lg font-normal text-gray-400">
         Frontend Developer
        </p>
     
        <a
          href="tel:+2348023499180"
          className="text-base text-gray-400 flex items-center gap-2"
        >
          Phone: <span className="text-lightText">+080 23499180</span>
        </a>
        <a
          href="mailto:imeekwere15@gmail.com"
          target="__blank"
          className="text-base text-gray-400 flex items-center gap-2"
        >
          Email: <span className="text-lightText">imeekwere15@gmail.com</span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
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
    </div>
  );
};

export default ContactLeft;
