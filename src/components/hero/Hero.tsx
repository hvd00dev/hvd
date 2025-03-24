"use client";

import styles from "./Hero.module.scss";
import MaxWidth from "../maxwidth/maxwidth";
import Button from "../button/Button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Image
        className="absolute top-[0px]"
        src="/images/home.webp"
        width={1920}
        height={3000}
        alt="Squares"
      />
      <MaxWidth>
        <div className="flex flex-start relative h-[700px] text-[#ededed] w-full">
          <div className={styles.neonblink}>
            <Image
              className="absolute top-[260px] left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/images/hvdlettering.png"
              width={858}
              height={50}
              quality={100}
              alt="Hvd lettering"
            />
          </div>
          <Image
            className="absolute left-1/2 top-[280px] transform -translate-x-1/2 -translate-y-1/2"
            src="/images/hvd2.png"
            width={360}
            height={100}
            quality={100}
            alt="Sketch of Hvd as a Illustration"
          />
          <div className="relative z-2 flex items-center justify-end gap-[20px] flex-col px-4 py-6 w-full">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[40px] font-bold">Hi, I'm Hudson! 👋</h1>
              <span className="text-[26px] font-semibold">
                A Front-end Developer 👨‍💻
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="whitespace-nowrap">
                ⚡ +2 years of experience
              </span>
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
                fontSize="20px"
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
    </>
  );
}
