"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const anchorClass =
    "text-[#212121] text-xs sm:text-sm font-semibold sm:font-bold hover:scale-105 transition-all duration-200 cursor-pointer";

  const contactClass =
    "bg-[#ff5e0081] backdrop-blur flex items-center justify-center w-8 h-8 max-lg:w-9 max-lg:h-9 text-white text-lg font-bold p-2 rounded-full border border-orange-500 hover:cursor-pointer hover:scale-[1.03] transition-transform duration-300";

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 transition-all duration-500 z-[5] ${
        isScrolled
          ? "py-3 opacity-100 translate-y-0"
          : "bg-transparent py-6 opacity-90 translate-y-[-6px]"
      }`}
    >
      <Image src="/logo.png" alt="HVD logo" width={60} height={20} />
      <nav>
        <ul
          className={`flex items-center gap-12 transition-all duration-6 ${
            isScrolled
              ? "bg-white/30 backdrop-blur border border-[#bababa50] px-4 py-3 rounded-full opacity-100 translate-y-0"
              : "translate-y-[-5px]"
          }`}
        >
          <li>
            <a className={anchorClass} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={anchorClass} href="#">
              About
            </a>
          </li>
          <li>
            <a className={anchorClass} href="#">
              Projects
            </a>
          </li>
          <li>
            <a className={anchorClass} href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <a className={contactClass}
        href="https://github.com/hvd00dev"
        target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className={contactClass}
          href="https://www.linkedin.com/in/hudson-ferreira-483936186/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className={contactClass}
         href="https://www.instagram.com/hudfrr/"
         target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </header>
  );
}
