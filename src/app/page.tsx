import './globals.css';
import About from "@/components/sections/home/about/About";
import ContactForm from "@/components/sections/home/contact/ContactForm";
import Header from "@/components/layout/header/Header";
import Hero from "@/components/sections/home/hero/Hero";
// import MyProjects from "@/components/myprojects/MyProjects";

export default function Home() {
  return (
    <div className=" min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
     
        <Header />
        <Hero />
        <About/>
        {/* <MyProjects /> */}
        <ContactForm/>

      </main>
      <footer></footer>
    </div>
  );
}
