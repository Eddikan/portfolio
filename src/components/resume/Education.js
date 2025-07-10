import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2011 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Calabar (2016 - 2023)"
            result=""
            des=""
          />
          <ResumeCard
            title="West African Senior School Certificate"
            subTitle="Federal Government Boys College Abuja (2011 - 2015)"
            result=""
            des=""
          />
        </div>
      </div>
      

    </motion.div>
  );
};

export default Education;
