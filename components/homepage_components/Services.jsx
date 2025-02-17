"use client";

import { motion } from "framer-motion";
import { services_section_img } from "@/assets";
import Image from "next/image";
import { slideLeft, slideRight, slideXContainer, tween } from "@/utils";

const Services = () => {
  const services = [
    {
      name: "Administration",
      desc: "Handles the coordination, planning, and management of all logistics operations and resources",
    },
    {
      name: "Fleet Leasing and Management",
      desc: " provide businesses with reliable vehicles and maintenance services.",
    },
    // {
    //   name: "Food Service Distribution",
    //   desc: "Timely delivery of food products to restaurants and retailers.",
    // },
    {
      name: "General Haulage",
      desc: "Transportation of goods over long distances using various vehicles for diverse cargo.",
    },
    {
      name: "Transport Operations",
      desc: "Momovement of goods, ensuring timely and efficient delivery across various routes",
    },
  ];
  return (
    <div>
      <motion.h2
        initial={slideLeft.hidden}
        whileInView={slideLeft.show}
        viewport={{ once: true }}
        transition={{ ...tween, delay: 0.4 }}
        className="text-primary"
      >
        Services
      </motion.h2>
      <motion.p
        initial={slideLeft.hidden}
        whileInView={slideLeft.show}
        viewport={{ once: true }}
        transition={{ ...tween, delay: 0.4 }}
        className="mt-5 text-4xl font-bold"
      >
        Tailored solutions <br /> for your needs
      </motion.p>
      <div className="mt-10 flex flex-col gap-10 md:flex-row">
        <motion.div
          initial={slideLeft.hidden}
          whileInView={slideLeft.show}
          viewport={{ once: true }}
          transition={{ ...tween, delay: 0.4 }}
          className="w-full"
        >
          <Image
            src={services_section_img}
            alt=""
            className="h-full w-full rounded-lg object-cover object-right-top"
          />
        </motion.div>
        <motion.div
          variants={slideXContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          {services.map((service, index) => (
            <motion.div variants={slideRight} transition={tween} key={index}>
              <div className="flex items-start gap-5">
                <p className="text-lg font-medium">0{index + 1}</p>
                <div>
                  <p className="text-lg font-medium">{service.name}</p>
                  <p className="mt-2 text-sm text-gray-400">{service.desc}</p>
                </div>
              </div>
              <hr className="my-3" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default Services;
