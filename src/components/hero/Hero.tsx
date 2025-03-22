import Image from "next/image";
import MaxWidth from "../maxwidth/maxwidth";

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
        </div>
      </div>
    </MaxWidth>
  );
}
