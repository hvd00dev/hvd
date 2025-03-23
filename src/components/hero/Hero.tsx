"use client";

import Image from "next/image";
import MaxWidth from "../maxwidth/maxwidth";
import Button from "../button/Button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <MaxWidth>
      <div className="text-[#ededed] w-full pt-[26px]">
        <div className="flex items-center justify-center gap-[20px] flex-col px-4 py-6 w-full bg-[#121212] rounded-[10px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[40px] font-bold">Hi, I'm Hudson! 👋</h1>
            <span className="text-[26px] font-semibold">
              A Front-end Developer 👨‍💻
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap">⚡ +2 years of experience</span>
            <span className="whitespace-nowrap">
              ・ 🏡 Rio de Janeiro, Brazil
            </span>
            <span className="whitespace-nowrap">
              ・ 🌎 Portuguese and English
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              text="Let's connect now"
              icon={faEnvelope}
              href="mailto:hvd00dev@gmail.com"
            />
            <Button
              fontsize="22px"
              color="#31fe75"
              background="#1f64365f"
              border="#31fe75"
              icon={faWhatsapp}
              href="https://wa.me/+5521998147371"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </MaxWidth>
  );
}
