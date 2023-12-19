import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {navLinksdata.map(({ _id, title, link }) => (
            <li key={_id}>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                  {title}
                  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
