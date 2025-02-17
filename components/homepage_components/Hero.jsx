import { hero_illustration } from "@/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex w-full flex-col-reverse items-center gap-10 py-5 md:flex-row">
      <div className="flex w-full flex-col items-center gap-5 text-center md:items-start md:text-left">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Simplifying Logistics, Accelerating Your Business
        </h2>
        <p className="text-xl font-light">
          Your premier partner for innovative logistics, haulage, and supply
          chain solutions designed to power seamless operations and drive
          success.
        </p>
        <button className="group flex rounded-full bg-primary p-2 text-white">
          <p className="px-3">More About Us</p>
          <div className="rounded-full bg-white text-black transition-all group-hover:scale-125 group-active:scale-90">
            <ArrowRight className="p-1" />
          </div>
        </button>
      </div>

      <div className="flex w-full items-center justify-center p-5 md:p-10">
        <Image
          src={hero_illustration}
          alt=""
          className="w-full max-w-[460px] select-none"
        />
      </div>
    </div>
  );
};
export default Hero;
