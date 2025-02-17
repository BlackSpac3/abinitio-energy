"use client";
import { hero_img } from "@/assets";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";
const Hero2 = () => {
  const router = useRouter();
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <div className="mx-auto mt-0 flex w-full flex-col items-center gap-2 text-center sm:mt-10 sm:w-[80%]">
        <motion.h1
          variants={item}
          className="font-sans text-3xl font-bold text-foreground sm:text-5xl"
        >
          Fast, Reliable Logistics to Propel Your{" "}
          <span className="text-primary">Business Forward</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 w-full text-sm text-gray-400 sm:w-[80%]"
        >
          We are a modern, forward-thinking company that blends logistics with
          advanced technology to streamline your operations, improve efficiency,
          reduce costs, and enhance service delivery, keeping your business
          ahead in a competitive market.
        </motion.p>
        <motion.div variants={item} className="mt-4 flex items-center gap-2">
          <button
            onClick={() => router.push("/#overview")}
            className="flex items-center gap-1 rounded-md bg-primary-light px-5 py-2 text-primary transition-all hover:bg-primary hover:text-white active:scale-90"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      <motion.div
        ref={imgRef}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <motion.div variants={item}>
          <Image
            src={hero_img}
            alt=""
            className="mt-10 aspect-[10/7] w-full rounded-lg object-cover sm:aspect-[13/6]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Hero2;
