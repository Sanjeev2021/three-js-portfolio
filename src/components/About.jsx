"use client";
import React from "react";
import { Tilt } from "react-next-tilt";
import { motion } from "framer-motion";

import { styles } from "../app/style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {SectionWrapper} from '../hoc/';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a dynamic and versatile software developer with a year of hands-on
        experience, I have honed my skills across a range of technologies,
        including AngularJS, MySQL, Golang, web development, React.js, and
        Next.js. My ability to adapt and excel in diverse technical environments
        demonstrates my commitment to continuous learning and excellence. Beyond
        my technical prowess, I bring a confident and charismatic presence to
        any team, embodying a blend of professionalism and a cool, hunky, and
        handsome demeanor that makes me a standout collaborator in any project.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About , "about");
