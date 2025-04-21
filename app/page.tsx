// app/page.tsx
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import Image from "next/image";
import styles from "./MyComponent.module.css"; // adjust if needed

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <RecentProjects />
        <div>
          <Image
            src="/personal-website/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </div>
      </div>
    </main>
  );
}