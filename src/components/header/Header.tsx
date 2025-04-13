"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import MaxWidth from "../maxwidth/maxwidth";

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
    "text-[#ededed] text-xs sm:text-sm font-semibold sm:font-bold hover:text-white transition-all duration-200 cursor-pointer";

  const contactClass =
    "bg-[#ff5e0081] backdrop-blur flex items-center justify-center w-8 h-8 max-lg:w-9 max-lg:h-9 text-white text-lg font-bold p-2 rounded-full border border-orange-500 hover:cursor-pointer hover:scale-[1.03] transition-transform duration-300";

  return (
    <header
      className={`md:justify-between md:fixed absolute top-0 w-full max-w-[1320px] flex items-center justify-center px-6 z-[5] ${
        isScrolled
          ? "py-3 opacity-100 translate-y-0 transition-all duration-600"
          : "bg-transparent py-6"
      }`}
    >
      <Image
        className="cursor-pointer hover:scale-102"
        src="/logo.png"
        alt="HVD logo"
        width={60}
        height={20}
      />
      <nav>
        <ul
          className={`md:flex hidden items-center gap-12 transition-all duration-1 ${
            isScrolled
              ? "bg-black/30 backdrop-blur border-2 border-[#1c1c1c20] px-4 py-3 rounded-full opacity-100 translate-y-0"
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
      <div className="xl:flex hidden items-center gap-2">
        <a
          className={contactClass}
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
        <a
          className={contactClass}
          href="https://www.instagram.com/hudfrr/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </header>
  );
}
