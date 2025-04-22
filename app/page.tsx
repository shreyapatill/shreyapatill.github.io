// app/page.tsx
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Strengths from "@/components/Strengths";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Projects", link: "#projects" },
            { name: "Experience", link: "#workexperience" },
            { name: "Contact", link: "#contact" }, 
          ]}
        />
        <Hero />
        <RecentProjects />
        <Experience />
        <Strengths />
        <Footer />
      </div>
    </main>
  );
}