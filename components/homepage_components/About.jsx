"use client";
import { ArrowLeftRight, Rocket, ShieldCheck } from "lucide-react";
import { Fragment } from "react";
import { delay, easeIn, easeInOut, easeOut, motion } from "framer-motion";
import { tween } from "@/utils";

const data = [
  {
    heading: "Logistics solutions tailored to your needs",
    desc: "Streamline operations with tailored logistics services, from transportation to supply chain, ensuring success.",
    icon: (
      <div className="w-fit rounded-md bg-teal-100 p-3 text-teal-500">
        <ArrowLeftRight className="size-7" />
      </div>
    ),
  },
  {
    heading: "Cutting-edge technology for smarter, faster delivery",
    desc: "Innovative technology powering faster, smarter logistics and ensuring seamless, reliable delivery solutions.",
    icon: (
      <div className="w-fit rounded-md bg-orange-100 p-3 text-orange-500">
        <Rocket className="size-7" />
      </div>
    ),
  },
  {
    heading: "A reputation built on excellence and reliability",
    desc: "Renowned for excellence and reliability, delivering seamless logistics solutions tailored to your needs.",
    icon: (
      <div className="w-fit rounded-md bg-blue-100 p-3 text-blue-500">
        <ShieldCheck className="size-7" />
      </div>
    ),
  },
];

const AboutCards = ({ heading, desc, icon }) => {
  return (
    <div className="rounded-lg bg-white p-6">
      {icon}
      <h3 className="text-md mt-5 font-medium leading-tight">{heading}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
};

const About = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="overview" className="scroll-mt-20">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ ...tween, delay: 0.4 }}
        className="text-primary"
      >
        About
      </motion.h2>
      <div className="mt-5 flex flex-col gap-5 md:flex-row">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...tween, delay: 0.4 }}
          className="w-full text-3xl font-bold md:text-4xl"
        >
          Solution for your <br /> logistics need
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...tween, delay: 0.4 }}
          className="w-[90%] text-sm text-gray-400 md:text-right"
        >
          At Abinitio Logistics, we provide world-class logistics services,
          specializing in haulage, supply chain management, and warehousing,
          ensuring efficient operations and precise execution.
        </motion.p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3"
      >
        {data.map((card, index) => (
          <motion.div variants={item} transition={tween} key={index}>
            <AboutCards
              heading={card.heading}
              desc={card.desc}
              icon={card.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default About;
