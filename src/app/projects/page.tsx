import MaxWidth from "@/components/layout/maxwidth/maxwidth";
import ProjectCards from "@/components/sections/projects/projectcards/ProjectCards";

export default function Projects() {
  return (
    <MaxWidth>
      <div className="min-h-screen mt-20">
        <ProjectCards/>
      </div>
    </MaxWidth>
  );
}
