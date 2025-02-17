import { logo } from "@/assets";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="container max-w-[1024px] pb-10">
      <div className="flex items-center justify-center rounded-lg bg-primary p-7 text-center text-white sm:p-10 md:p-20">
        <div className="w-full md:w-[70%]">
          <p className="text-2xl font-bold md:text-4xl">
            Looking for a leading logistics company for your business?
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
            <Link href="/about#FAQs">
              <button
                type="button"
                className="rounded-lg bg-white/10 px-5 py-2 transition-all hover:bg-white/20 active:scale-90"
              >
                FAQ
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="rounded-lg bg-white px-5 py-2 text-primary transition-all hover:bg-white/90 active:scale-90">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="mt-5 flex flex-col gap-10 rounded-lg bg-white p-5 sm:p-10">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <Image alt="Abinitio Energy" src={logo} className="h-auto w-28" />{" "}
          <p className="text-xl font-bold">logistics@abinitio-energy.com</p>
        </div>

        <hr />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
          <p className="text-gray-500">
            With our logistics expertise, we don’t just deliver — we deliver
            peace of mind.
          </p>
          <div>
            <p className="font-bold">Navigation</p>
            <ul className="mt-2 flex flex-col gap-2 text-gray-500">
              <li className="transition-colors hover:text-primary">
                <Link href="/">Home</Link>
              </li>
              <li className="transition-colors hover:text-primary">
                <Link href="/about">About Us</Link>
              </li>
              <li className="transition-colors hover:text-primary">
                <Link href="/services">Services</Link>
              </li>
              <li className="transition-colors hover:text-primary">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Support</p>
            <ul className="mt-2 flex flex-col gap-2 text-gray-500">
              <li className="transition-colors hover:text-primary">
                <Link href="/about#FAQs">FAQs</Link>
              </li>
              <li className="transition-colors hover:text-primary">
                <Link href="/about#FAQs">Terms</Link>
              </li>
              <li className="transition-colors hover:text-primary">
                <Link href="/about#FAQs">Privacy</Link>
              </li>
              <li className="transition-colors hover:text-primary">
                <Link href="/about#FAQs">Cookies</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Our Headquater</p>
            <p className="mt-2 text-gray-500">
              32 MaCarthy Street, <br /> Lagos Island, 102273, <br /> Lagos,
              Nigeria.
            </p>
            <Link href="tel:+2348080448044">
              <p className="mt-2 text-gray-500 transition-colors hover:text-primary">
                tel: 08080448044
              </p>
            </Link>
          </div>
        </div>
        <hr />
        <div className="flex flex-col-reverse items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Abinitio Logistics. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com">
              <Instagram className="size-4 stroke-[2.5px] transition-colors hover:text-rose-600" />
            </Link>
            <Link href="https://www.x.com">
              <Twitter className="size-4 transition-colors hover:fill-blue-600 hover:text-blue-600" />
            </Link>
            <Link href="https://www.facebook.com">
              <Facebook className="size-4 transition-colors hover:fill-blue-600 hover:text-blue-600" />
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
