import {
  services_section_img,
  van_in_motion_img,
  vans_parked_img,
} from "@/assets";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactUsNowBttn from "../UI/ContactUsNowBttn";

const Unique = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <div className="w-full">
          <h2 className="text-primary">What makes us unique</h2>

          <h3 className="mt-5 text-3xl font-bold md:text-4xl">
            Excellence in Every Mile
          </h3>
          <p className="mt-4 text-sm text-gray-400">
            We combine cutting-edge technology with a commitment to customer
            satisfaction, offering tailored logistics solutions that ensure
            efficiency, reliability, and on-time delivery.
          </p>
          <ul className="mt-5 flex flex-col gap-5">
            <li className="flex items-center gap-3">
              <Check className="size-5 stroke-[4px] text-primary" />
              <p className="text-sm text-gray-400">
                A robust network of partners and facilities across key regions
              </p>
            </li>
            <li className="flex items-center gap-3">
              <Check className="size-5 stroke-[4px] text-primary" />
              <p className="text-sm text-gray-400">
                Expertise in providing flexible, customer-centric solutions
              </p>
            </li>
            <li className="flex items-center gap-3">
              <Check className="size-5 stroke-[4px] text-primary" />

              <p className="text-sm text-gray-400">
                Focus on safety and sustainability in all operations
              </p>
            </li>
          </ul>
          <div className="mt-10 flex flex-col-reverse items-center gap-7 sm:flex-row">
            <ContactUsNowBttn />
            <Link
              href="/services"
              className="transition-colors hover:text-primary"
            >
              View our services
            </Link>
          </div>
        </div>
        <div className="relative hidden aspect-[7/7] w-full md:block">
          <div className="absolute inset-14 rounded-xl bg-primary/70">
            <Image
              src={services_section_img}
              alt=""
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 aspect-[7/7] w-[70%] rounded-3xl border-[10px] border-gray-50">
            <Image
              src={van_in_motion_img}
              alt=""
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="absolute left-0 top-0 aspect-[7/7] w-[50%] rounded-3xl border-[10px] border-gray-50">
            <Image
              src={vans_parked_img}
              alt=""
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Unique;
