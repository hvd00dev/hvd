"use client";

import { useState, useEffect, useRef } from "react";
import MaxWidth from "../maxwidth/maxwidth";
import Image from "next/image";
import styles from "./Technologies.module.scss";

const technologies = [
  { src: "/images/react.webp", alt: "React" },
  { src: "/images/html.webp", alt: "HTML" },
  { src: "/images/CSS.webp", alt: "CSS" },
  { src: "/images/sass.webp", alt: "SCSS" },
  { src: "/images/typescript.png", alt: "TypeScript" },
  { src: "/images/javascript.webp", alt: "JavaScript" },
  { src: "/images/nextjs.png", alt: "Next.js" },
  { src: "/images/nodejs.webp", alt: "Node.js" },
  { src: "/images/figma.png", alt: "Figma" },
  { src: "/images/photoshop.webp", alt: "Photoshop" },
  { src: "/images/git.webp", alt: "Git" },
  { src: "/images/clickup.png", alt: "Clickup" },
  { src: "/images/laravel.png", alt: "Laravel" },
  { src: "/images/lua.webp", alt: "Lua" },
  { src: "/images/heidisql.png", alt: "HeidiSQL" },
  { src: "/images/xampp.svg", alt: "Xampp" },
  { src: "/images/github.svg", alt: "GitHub" },
  { src: "/images/gitlab.svg", alt: "GitLab" },
  { src: "/images/aws.png", alt: "AWS" },
  { src: "/images/azure.png", alt: "Azure" },
];

export default function Technologies() {
  const [speed] = useState(30);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current && scrollRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const scrollWidth = scrollRef.current.scrollWidth / 2;

      if (scrollWidth < containerWidth) {
        scrollRef.current.innerHTML += scrollRef.current.innerHTML;
      }
    }
  }, []);

  return (
    <MaxWidth>
      <div className={styles.tecmask}>
        <div className="w-full max-w-[1240px] flex items-center justify-center">
          <div ref={containerRef} className="relative w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-6 whitespace-nowrap w-max animate-scroll"
              style={{
                animationDuration: `${speed}s`,
              }}
            >
              {[...technologies, ...technologies, ...technologies].map(
                (tech, index) => (
                  <Image
                    key={index}
                    src={tech.src}
                    alt={tech.alt}
                    quality={100}
                    width={60}
                    height={60}
                    className="h-10 w-10 object-contain"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll linear infinite;
        }
      `}</style>
    </MaxWidth>
  );
}
