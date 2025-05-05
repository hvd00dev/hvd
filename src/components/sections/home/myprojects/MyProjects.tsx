import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MaxWidth from "../../../layout/maxwidth/maxwidth";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import ProjectCard from "../../projects/projectcard/ProjectCard";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import ProjectCards from "../../projects/projectcards/ProjectCards";

export default function MyProjects() {
  return (
    <MaxWidth>
      <section id="projects">
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center gap-2 text-[22px]">
            <span className="text-orange-500">
              <FontAwesomeIcon icon={faCode} />
            </span>
            <h3 className="font-bold">Latest projects</h3>
          </div>
          <ProjectCards/>
          <div className="w-full flex justify-center items-center">
            <Link href="/projects">
              <Button text="See all projects"></Button>
            </Link>
          </div>
        </div>
      </section>
    </MaxWidth>
  );
}
