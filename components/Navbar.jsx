"use client";
import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import { useState, useEffect, Fragment } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);

  const isActive = (path) => {
    if (path == "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
    },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Our Team", path: "/our-team" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -150 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (window.scrollY > 0) {
      setNavbarShadow(true);
    } else {
      setNavbarShadow(false);
    }
    const shadowTrigger = () => {
      if (window.scrollY > 0) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };
    window.addEventListener("scroll", shadowTrigger);

    return () => {
      window.removeEventListener("scroll", shadowTrigger);
    };
  }, []);

  return (
    <div
      className={`${navbarShadow && "border-b bg-gray-50/80 backdrop-blur-sm"} fixed top-0 z-50 w-full`}
    >
      <motion.nav
        variants={container}
        initial="hidden"
        animate="show"
        className="container flex max-w-[1024px] items-center justify-between gap-10 py-3 text-sm"
      >
        <motion.div variants={item}>
          <Link href="/">
            <Image
              src={logo}
              alt="Abinitio Logo"
              className="h-[30px] w-auto select-none"
            />
          </Link>
        </motion.div>

        <motion.ul variants={item} className="hidden items-center md:flex">
          {navLinks.map((link, index) => {
            if (link.name === "Contact Us" || link.path === "/contact-us") {
              return null;
            }
            return (
              <Link
                key={index}
                href={link.path}
                className="relative px-5 py-2 transition-all hover:text-primary"
              >
                <div href={link.path}>
                  <p
                    className={`${isActive(link.path) && "text-primary"} transition-colors hover:text-primary`}
                  >
                    {link.name}

                    {isActive(link.path) && (
                      <motion.span
                        layoutId="activeSection"
                        style={{ originY: "0px" }}
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 30,
                        }}
                        className="absolute inset-0 -z-10 rounded-lg bg-primary-light"
                      ></motion.span>
                    )}
                  </p>
                </div>
              </Link>
            );
          })}
        </motion.ul>

        <motion.div variants={item}>
          <Link
            href="/contact-us"
            className="relative hidden rounded-lg bg-primary px-4 py-2 text-white md:block"
          >
            Contact Us
            {isActive("/contact-us") && (
              <motion.span
                layoutId="activeSection"
                style={{ originY: "0px" }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 30,
                }}
                className="absolute inset-0 -z-10 rounded-lg bg-primary/10 backdrop-blur-lg"
              ></motion.span>
            )}
          </Link>
        </motion.div>

        <motion.button
          variants={item}
          className="md:hidden"
          onClick={() => {
            setSidebarIsOpen(true);
          }}
        >
          <MenuIcon />
        </motion.button>
      </motion.nav>

      <div
        id="sidebar-navigation"
        className={`${sidebarIsOpen ? "right-0" : "right-[-100vw]"} absolute top-0 z-50 h-screen w-52 border-l bg-white transition-all md:hidden`}
      >
        <div className="p-4">
          <button onClick={() => setSidebarIsOpen(false)}>
            <X />
          </button>
        </div>

        <ul className="mt-2 flex flex-col">
          {navLinks.map((link, index) => (
            <Fragment key={index}>
              <Link
                href={link.path}
                onClick={() => setSidebarIsOpen(false)}
                className="px-4 transition-all hover:bg-slate-50 active:bg-slate-50"
              >
                <p className="py-4">{link.name}</p>
                <hr />
              </Link>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
