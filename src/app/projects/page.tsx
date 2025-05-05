import MaxWidth from "@/components/layout/maxwidth/maxwidth";
import ProjectCards from "@/components/sections/projects/projectcards/ProjectCards";
import Image from "next/image";

export default function Projects() {
  return (
    <MaxWidth>
      <div className="relative min-h-screen mt-20">
      <Image
             className="absolute top-[-100px] min-h-[120px]"
             src="/images/home.webp"
             width={1920}
             height={240}
             alt="Squares"
             />
        <ProjectCards/>
      </div>
    </MaxWidth>
  );
}
