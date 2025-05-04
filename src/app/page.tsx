"use client";

import "./globals.css";
import { Suspense } from "react";
import About from "@/components/sections/home/about/About";
import ContactForm from "@/components/sections/home/contact/ContactForm";
import Hero from "@/components/sections/home/hero/Hero";
import MyProjects from "@/components/sections/home/myprojects/MyProjects";
import ScrollHandler from "@/components/ui/scrollhandler/ScrollHandler";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Suspense fallback={null}>
          <ScrollHandler />
        </Suspense>
        <Hero />
        <About />
        <MyProjects />
        <ContactForm />
      </main>
    </div>
  );
}
