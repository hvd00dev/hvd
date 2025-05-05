import ProjectCard from "../projectcard/ProjectCard";

const projects = [
  {
    slug: "hvdbank",
    bgImage: "/images/project-bank.png",
    color: "#caff33",
    link: "https://hvdbank.vercel.app",
  },
];

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          slug={project.slug}
          bgImage={project.bgImage}
          color={project.color}
        />
      ))}
    </div>
  );
}
