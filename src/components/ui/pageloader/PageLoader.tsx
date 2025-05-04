"use client";

import Image from "next/image";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1c1c1cbb]  backdrop-blur bg-opacity-90">
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
    </div>
  );
}
