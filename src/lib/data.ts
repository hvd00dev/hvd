export type Project = {
  slug: string;
  title: string;
  description: string;
  color: string;
  logo: string;
  bg: string;
  link: string;
};

const projects: Project[] = [
  {
    slug: "hvdbank",
    title: "hvdbank",
    description:
      "I developed a modern and responsive digital banking application using React, TypeScript, Tailwind CSS, SCSS, and Next.js, with deployment on Vercel. While the development was entirely done by me, the UI was professionally designed in Figma by Produce UI. The app delivers a clean and immersive user experience, fully responsive across mobile, tablet, and desktop devices. It simulates key banking features such as transaction tracking, currency exchange, and income overview, making it a solid foundation for a scalable and innovative fintech solution.",
    color: "#caff33",
    logo: "/images/project-bank-logo.svg",
    bg: "/images/project-bank-bg.png",
    link: "https://hvdbank.vercel.app",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
