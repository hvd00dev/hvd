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
        <section id="home">
        <div className="md:h-[700px] h-[660px] flex flex-start relative text-[#ededed] w-full mt-[100px]">
          <div className={styles.neonblink}>
            <Image
              className="md:w-[858px] w-[500px] absolute top-[260px] left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/images/hvdlettering.png"
              width={858}
              height={50}
              quality={100}
              alt="Hvd lettering"
            />
          </div>
          <Image
            className="md:w-[360px] md:top-[280px] w-[280px] absolute left-1/2 top-[240px] transform -translate-x-1/2 -translate-y-1/2"
            src="/images/hvd2.png"
            width={360}
            height={100}
            quality={100}
            alt="Sketch of Hvd as a Illustration"
          />
          <div className="relative z-2 flex items-center justify-end gap-[20px] flex-col px-4 py-6 w-full">
            <div className="flex flex-col items-center justify-center">
              <h1 className="md:text-[40px] text-[30px] font-bold">Hi, I'm Hudson! 👋</h1>
              <span className="md:text-[26px] text-[18px] font-semibold">
                A Front-end Developer 👨‍💻
              </span>
            </div>
            <div className="flex items-center gap-x-4 gap-y-1 flex-wrap justify-center">
              <span className="whitespace-nowrap">
                ⚡ +2 years of experience
              </span>
              <span className="whitespace-nowrap">
                🏡 Rio de Janeiro, Brazil
              </span>
              <span className="whitespace-nowrap">
                🌎 Portuguese and English
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
      </section>
      </MaxWidth>
    </>
  );
}
