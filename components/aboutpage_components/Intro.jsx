"use client";

import { about_us_page_header_img } from "@/assets";
import { Eye, Flag } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideLeft, slideRight, slideXContainer } from "@/utils";

const Intro = () => {
  return (
    <div className="flex flex-row gap-10">
      <motion.div
        animate={slideLeft.show}
        initial={slideLeft.hidden}
        className=""
      >
        <Image
          src={about_us_page_header_img}
          alt=""
          className="hidden h-full max-w-[400px] rounded-lg object-cover md:block"
        />
      </motion.div>
      <motion.div
        variants={slideXContainer}
        initial="hidden"
        animate="show"
        className="md:p-5"
      >
        <motion.h2 variants={slideRight} className="text-primary">
          About Abinitio Energy
        </motion.h2>
        <motion.p
          variants={slideRight}
          className="mt-5 text-3xl font-bold md:text-4xl"
        >
          Simplifying Logistics, Accelerating Your Business
        </motion.p>
        <motion.p variants={slideRight} className="mt-3 text-sm text-gray-400">
          Abinitio Logistics Energy Limited, established in 2004, is a privately
          owned logistics company. It was founded to bridge the gap between
          traditional client relationships and the fast pace of technology,
          combining both to benefit our clients.
        </motion.p>

        <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:gap-0">
          <motion.div
            variants={slideRight}
            className="w-full sm:border-r sm:pr-5"
          >
            <Eye className="size-10 stroke-1 text-primary" />
            <h3 className="mt-4 text-2xl font-medium">Our Vision</h3>
            <p className="mt-1 text-sm text-gray-400">
              To be the leading fuel distribution company in Nigeria, setting
              benchmarks in safety, reliability, and sustainability.
            </p>
          </motion.div>
          <motion.div variants={slideRight} className="w-full sm:pl-5">
            <Flag className="size-10 stroke-1 text-primary" />
            <h3 className="mt-4 text-2xl font-medium">Our Mission</h3>
            <p className="mt-1 text-sm text-gray-400">
              At Abinitio Energy, we are driven by a passion for excellence in
              providing reliable, innovative, and sustainable logistics
              solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default Intro;
