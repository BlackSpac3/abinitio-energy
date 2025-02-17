"use client";

import { motion } from "framer-motion";
import { slideXContainer, slideLeft, slideRight, tween } from "@/utils";
import { Check, Clock, MapPinned, Truck } from "lucide-react";

const EasyTransport = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <motion.div
          variants={slideXContainer}
          whileInView="show"
          viewport={{ once: true }}
          initial="hidden"
          className="w-full"
        >
          <motion.h2
            variants={slideLeft}
            transition={tween}
            className="text-2xl font-bold"
          >
            Supply chain services for easy transport
          </motion.h2>
          <motion.p
            variants={slideLeft}
            transition={tween}
            className="mt-5 text-sm text-gray-400"
          >
            We make end-to-end supply chain easier and smoother for you. Turning
            your complex logistics process into smooth ones.
          </motion.p>
          <ul className="mt-5 flex flex-col gap-5">
            <motion.li
              variants={slideLeft}
              transition={tween}
              className="flex items-center gap-3"
            >
              <Check className="size-5 stroke-[4px] text-primary" />
              <p className="text-sm text-gray-400">Simplify your logistics</p>
            </motion.li>
            <motion.li
              variants={slideLeft}
              transition={tween}
              className="flex items-center gap-3"
            >
              <Check className="size-5 stroke-[4px] text-primary" />
              <p className="text-sm text-gray-400">
                Supporting your end-to-end logistics
              </p>
            </motion.li>
            <motion.li
              variants={slideLeft}
              transition={tween}
              className="flex items-center gap-3"
            >
              <Check className="size-5 stroke-[4px] text-primary" />
              <p className="text-sm text-gray-400">
                Straightforward and efficient logistics
              </p>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          variants={slideXContainer}
          whileInView="show"
          viewport={{ once: true }}
          initial="hidden"
          transition={{ delay: 4 }}
          className="flex w-full flex-col gap-5 md:p-5 md:px-20"
        >
          <motion.div
            variants={slideRight}
            transition={tween}
            className="flex w-fit items-center gap-3 rounded-lg bg-white p-4"
          >
            <div className="w-fit rounded-md bg-teal-100 p-2 text-teal-500">
              <Truck className="size-8" />
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Departure From Lagos State
              </p>
              <p className="font-bold">21,000L of fuel, 14 June</p>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            transition={tween}
            className="flex w-fit items-center gap-3 place-self-end rounded-lg bg-white p-4"
          >
            <div className="w-fit rounded-md bg-sky-100 p-2 text-sky-500">
              <Clock className="size-8" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Transit At Ondo State</p>
              <p className="font-bold">21,000L of fuel, 15 June</p>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            transition={tween}
            className="flex w-fit items-center gap-3 rounded-lg bg-white p-4"
          >
            <div className="w-fit rounded-md bg-indigo-100 p-2 text-indigo-500">
              <MapPinned className="size-8" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Arrived At FCT Abuja</p>
              <p className="font-bold">21,000L of fuel, 15 June</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default EasyTransport;
