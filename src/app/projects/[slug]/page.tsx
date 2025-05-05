import MaxWidth from "@/components/layout/maxwidth/maxwidth";
import { getProjectBySlug } from "@/lib/data";
import { faChevronLeft, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen mt-20 flex flex-col">
      <MaxWidth>
        <div className="relative ">
          <div
            style={{
              backgroundImage: `url(${project.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              maskImage: "linear-gradient(to bottom, black 70%, transparent)",
            }}
            className="absolute z-[0] h-[200px] w-full rounded-xl p-6"
          >
            <Link href={"/projects"}>
              <button className="cursor-pointer font-bold flex gap-2 items-center bg-black/30 backdrop-blur border-2 border-[#1c1c1c20] text-white px-3 py-1 rounded-full text-sm">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-[#ff6600]"
                />
                <span>BACK</span>
              </button>
            </Link>
          </div>
          <div className="relative top-[150px] flex flex-col gap-4 items-center mb-50">
            <div
              className="relative z-[2] flex items-center justify-center backdrop-blur border-3 border-[#1c1c1c20] p-4 rounded-xl"
              style={{ backgroundColor: project.color }}
            >
              <Image
                src={project.logo}
                width={50}
                height={50}
                alt="hvdbank logo"
              />
            </div>
            <Link href={"https://hvdbank.vercel.app"} target="_blank">
              <button className="cursor-pointer font-bold flex gap-2 items-center bg-black/20 backdrop-blur border-2 border-[#1c1c1c20] text-white px-3 py-1 rounded-full text-sm">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-[#ff6600]"
                />
                <span>CLICK TO VISIT</span>
              </button>
            </Link>
            <div className="relative z-[1] flex flex-col text-center">
              <h1 className="text-[20px] font-bold">{project.title}</h1>
              <p className="text-sm text-[#9f9f9f]">{project.description}</p>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
}
