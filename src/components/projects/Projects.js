import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Varroe"
          des="Varroe is a premium booking and appointment platform that connects users to the best merchants and freelancers in their area for services including beauty, wellness, fitness, and more."
          src={"https://varroe.com/_next/static/media/logo.dd3b17de.svg"}
          gitUrl="https://github.com/varroe/client-web"
          website="https://varroe.com/"
        />
        <ProjectsCard
          title="MSDAT"
          des="The Federal Ministry of Health (FMOH) Nigeria multi source data analysis resource provides a single transparent view of key health indicators against multiple data sources. "
          src={"https://msdat.fmohconnect.gov.ng/img/Logo-mob.9cc7855d.svg"}
          website="https://msdat.fmohconnect.gov.ng/"
        />
        <ProjectsCard
          title="Estatemaster"
          des=" EstateMaster is an AI-powered Property Management Solution that is currently under development. Once launched, it will eliminate intermediaries and commissions for property owners, buyers, and renters. "
          src={"https://app.estatemaster.ng/img/propertylabLogo.svg"}
          website={"https://app.estatemaster.ng/"}
        />
        <ProjectsCard
          title="Slate"
          des=" From School Management Automation to Comprehensive lesson delivery, Slate.ng delivers powerful features that enable you to run your online, offline, and blended learning school."
          src={"https://www.slate.ng/favicon.ico"}
          website={"https://www.slate.ng/"}
        />
      </div>
    </section>
  );
};

export default Projects;
