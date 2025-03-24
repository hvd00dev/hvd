import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import MyProjects from "@/components/myprojects/MyProjects";
import Technologies from "@/components/technologies/Technologies";

export default function Home() {
  return (
    <div className="grid grid-rows-[0px_1fr_20px] min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Header />
        <Hero />
        <Technologies/>
        <MyProjects />
      </main>
      <footer></footer>
    </div>
  );
}
