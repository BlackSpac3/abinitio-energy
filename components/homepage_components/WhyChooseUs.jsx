"use client";
import { why_choose_us_img } from "@/assets";
import { Check, StarsIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideXContainer, slideLeft, slideRight, tween } from "@/utils";
import LightBttn from "../UI/LightBttn";

const WhyChooseUs = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={container}
      viewport={{ once: true }}
      whileInView="show"
      initial="hidden"
    >
      <motion.h2 variants={item} className="text-center text-primary">
        Why Choose Us
      </motion.h2>
      <div className="mx-auto mt-5 flex w-full flex-col items-center gap-4 text-center md:w-[80%]">
        <motion.p variants={item} className="text-3xl font-bold md:text-4xl">
          Transforming Logistics with Safety, Precision, and Trust
        </motion.p>
        <motion.p
          variants={item}
          className="w-full text-sm text-gray-400 md:w-[70%]"
        >
          No matter where your sourcing areas are located, Abinitio is
          nationally positioned and ready to bring your products to market in
          the most efficient manner to improve your Days Inventory Outstanding
          and cycle time
        </motion.p>
      </div>
      <div className="mt-10 flex flex-col gap-10 md:grid md:grid-cols-[1fr_1.1fr] md:gap-28">
        <motion.div
          variants={slideXContainer}
          whileInView="show"
          viewport={{ once: true }}
          initial="hidden"
          className="relative flex w-full items-center"
        >
          <motion.div
            variants={slideLeft}
            transition={tween}
            className="h-full w-full"
          >
            <Image
              src={why_choose_us_img}
              alt=""
              className="h-full w-full rounded-lg object-cover object-left"
            />
          </motion.div>

          <motion.div
            variants={slideLeft}
            transition={tween}
            className="absolute bottom-[10px] right-[-20px] flex items-center gap-2 rounded-lg bg-white/80 p-3 shadow-lg backdrop-blur-lg md:bottom-[60px] md:right-[-80px]"
          >
            <div className="rounded-md bg-primary/10 p-3 text-primary">
              <StarsIcon className="size-8 md:size-12" strokeWidth={"1px"} />
            </div>
            <div>
              <p className="text-3xl font-black leading-none text-primary md:text-4xl">
                15+
              </p>
              <p className="whitespace-nowrap">Years of experience</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideXContainer}
          whileInView="show"
          viewport={{ once: true }}
          initial="hidden"
          className="w-full"
        >
          <motion.h2
            variants={slideRight}
            transition={tween}
            className="text-2xl font-bold"
          >
            End-to-end logistics services to support your business operation
          </motion.h2>
          <motion.p
            variants={slideRight}
            transition={tween}
            className="mt-5 text-sm text-gray-400"
          >
            Our end-to-end logistics services cover every aspect of your supply
            chain, from transportation and warehousing to inventory management
            and delivery, ensuring your business operations run smoothly,
            efficiently, and without disruption.
          </motion.p>

          <ul className="mt-5 flex flex-col gap-5">
            <motion.li
              variants={slideRight}
              transition={tween}
              className="flex items-center gap-3"
            >
              <Check className="size-5 stroke-[4px] text-primary" />
              <p className="text-sm text-gray-400">
                Over a decade of trusted service delivery
              </p>
            </motion.li>
            <motion.li
              variants={slideRight}
              transition={tween}
              className="flex items-center gap-3"
            >
              <Check className="size-5 stroke-[4px] text-primary" />
              <p className="text-sm text-gray-400">
                Strategic locations to enhance distribution efficiency
              </p>
            </motion.li>
            <motion.li
              transition={tween}
              variants={slideRight}
              className="flex items-center gap-3"
            >
              <Check className="size-5 stroke-[4px] text-primary" />
              <p className="text-sm text-gray-400">
                A customer-first approach that ensures satisfaction every time
              </p>
            </motion.li>
          </ul>
          <motion.div variants={slideRight} transition={tween} className="mt-7">
            <LightBttn path={"/about"} text={"Learn More"} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default WhyChooseUs;
