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
          title="Kouture Konect"
          des="Global fashion platform connecting fashion enthusiasts with talented designers for custom-made attire and exceptional craftsmanship."
          src={"https://sandbox.kouturekonect.com/favicon.ico"}
          website={"https://sandbox.kouturekonect.com/"}
        />{" "}
        <ProjectsCard
          title="Chisquares"
          des="AI-powered platform that streamlines scientific research planning, execution, and reporting. Helps researchers focus on impactful work by automating evidence synthesis tasks."
          src={"https://chisquares.com/_next/static/media/Logo.551e2cd4.svg"}
          website={"https://chisquares.com/"}
        />
        <ProjectsCard
          title="Eazipay"
          des="Comprehensive HR and payroll management platform for processing bulk salary payments, handling PAYE, pensions, and compliance tasks with integrated employee assessment tools."
          src={"https://www.myeazipay.com/assets/eazi-logo-72a14311.svg"}
          gitUrl="https://github.com/varroe/client-web"
          website="https://www.myeazipay.com/"
        />{" "}
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
