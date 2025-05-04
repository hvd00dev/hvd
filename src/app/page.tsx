"use client";

import "./globals.css";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import About from "@/components/sections/home/about/About";
import ContactForm from "@/components/sections/home/contact/ContactForm";
import Hero from "@/components/sections/home/hero/Hero";
import MyProjects from "@/components/sections/home/myprojects/MyProjects";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams]);

  return (
    <div className=" min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
        <About />
        <MyProjects />
        <ContactForm />
      </main>
      <footer></footer>
    </div>
  );
}
