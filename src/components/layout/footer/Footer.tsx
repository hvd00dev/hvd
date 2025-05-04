"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBriefcase,
  faEnvelope,
  faLaptopCode,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import MaxWidth from "../maxwidth/maxwidth";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="font-[family-name:var(--font-geist-sans)] text-white w-full bg-[#1C1C1C] px-6 py-4 flex flex-col items-center justify-center">
      <MaxWidth>
        <div className="flex flex-col gap-4 items-center w-full pb-5 border-b-1 border-[#262626] mb-4">
          <h2 className="flex gap-2 items-center text-white text-[20px] font-bold">
            <Image src="/logo.png" width={40} height={22} alt="hvdbank Logo" />
          </h2>
        </div>
        <div className="w-full flex flex-row items-center justify-center flex-wrap gap-4 pb-4 border-b-1 border-[#262626]">
          <span className="flex gap-2 items-center text-[12px] lg:text-[14px]">
            <FontAwesomeIcon icon={faEnvelope} className="text-orange-500" />{" "}
            hvd00dev@gmail.com
          </span>
          <span className="flex gap-2 items-center text-[12px] lg:text-[14px]">
            <FontAwesomeIcon icon={faPhone} className="text-orange-500" /> +55
            21 99814-7371
          </span>
          <span className="flex gap-2 items-center text-[12px] lg:text-[14px]">
            <FontAwesomeIcon icon={faLocationDot} className="text-orange-500" />{" "}
            Rio de Janeiro, Brazil
          </span>
        </div>
        <div className=" lg:px-3 lg:pr-6 lg:pt-2 lg:py-2 lg:mt-4 lg:rounded-full pt-10 relative mt-10 bg-[#1A1A1A] w-full border-1 border-[#262626] rounded-xl flex flex-col items-center justify-center lg:justify-between lg:flex-row gap-4 py-4">
          <div className="flex items-center gap-4 absolute lg:static lg:transform-none lg:translate-none left-1/2 transform -translate-x-1/2 top-[-22px]">
            <a
              href="https://github.com/hvd00dev"
              target="_blank"
              className="flex items-center justify-center rounded-full w-[44px] h-[44px] bg-[#ff6900] text-[#262626] text-[18px] lg:text-[20px] lg:w-[33px] lg:h-[33px]"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/hudson-ferreira-483936186/"
              target="_blank"
              className="flex items-center justify-center rounded-full w-[44px] h-[44px] bg-[#ff6900] text-[#262626] text-[18px] lg:text-[20px] lg:w-[33px] lg:h-[33px]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/hudfrr/"
              target="_blank"
              className="flex items-center justify-center rounded-full w-[44px] h-[44px] bg-[#ff6900] text-[#262626] text-[18px] lg:text-[20px] lg:w-[33px] lg:h-[33px]"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <span className="text-[#B3B3B3] text-[12px] lg:text-[14px]">
            hvd all rights reserved ©
          </span>
        </div>
      </MaxWidth>
    </footer>
  );
}
