"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

type ProjectCardProps = {
  bgImage: string;
  slug: string;
  color: string;
};

export default function ProjectCard({
  bgImage,
  slug,
  color,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/projects/${slug}`}>
      <div
        className="border-4 border-[#1c1c1c20] relative w-full h-64 rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.015]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: color,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center transition-opacity">
            <div className="flex gap-2 items-center bg-black/30 backdrop-blur border-2 border-[#1c1c1c20] text-white px-2 py-2 rounded-xl text-sm font-semibold transition-all">
              <FontAwesomeIcon icon={faExpand} className="text-[#ff6600]" />
              Click to open
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
