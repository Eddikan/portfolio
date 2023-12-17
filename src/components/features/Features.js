import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="App Development"
          des="I can turn your ideads into reality and create web applications to suit your project and meet your requirements"
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="I improving your website to increase its visibility in Google, Microsoft Bing, and other search engines whenever people search for it"
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="I create software applications that run on a mobile device for both Ios/Android"
          icon={<FaMobile />}
        />

        <Card
          title="Hosting Websites"
          des="Whether it's for personal or business use, i can publish your website files onto the internet. So, anyone who has access to the internet has access to your website."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
