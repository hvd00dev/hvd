"use client";

import Image from "next/image";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1c1c1cbb]  backdrop-blur bg-opacity-90">
      <Image
        className="absolute top-[0px] min-h-[120px]"
        src="/images/home.webp"
        width={1920}
        height={240}
        alt="Squares"
      />
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
      <Image
        className="absolute bottom-[0px] min-h-[120px] rotate-180"
        src="/images/home.webp"
        width={1920}
        height={240}
        alt="Squares"
      />
    </div>
  );
}
