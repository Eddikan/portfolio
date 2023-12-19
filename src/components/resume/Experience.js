import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web and mobile Engineer -remote"
            subTitle="Eazipay - 03/03/2023 - present"
            result="Nigeria"
            des=" My work as a mobile and frontend developer in this company directly impacts how people manage their finances and investments. This can be personally rewarding, knowing that your work is making a real difference in users' lives."
          />
          <ResumeCard
            title="Frontend Software Developer - remote"
            subTitle="Varroe - (2022 - 2023)"
            result="Canada"
            des="In my role, I was responsible for creating web pages and implementing data logic on the frontend of the web application. I utilized TypeScript, React.js, and Next.js to develop robust and scalable solutions"
          />
          <ResumeCard
            title="Slate - hybrid"
            subTitle="Slate - (2021 - 2022)"
            result="Nigeria"
            des=" UI/UX operations for a learning management system with secondary schools as the target audience,  the web application provided solutions from school management automation to comprehensive lesson delivery"
          />
          <ResumeCard
            title="Full-Stack Software Developer - remote"
            subTitle="SIT Technologies - (2022)"
            result="United States"
            des="I took ownership of building, deploying, and maintaining several of the company's projects utilizing Next.js, TypeScript, and Tailwind CSS."
          />
          <ResumeCard
            title="Frontend Software Developer - hybrid"
            subTitle="Ehealth4everyone - (2020 - 2021)"
            result="Nigeria"
            des="Built stable and maintainable data-driven applications and Worked closely with the design team to recommend solutions for a streamlined and user-friendly interface."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
