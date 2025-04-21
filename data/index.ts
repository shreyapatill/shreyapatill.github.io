// data/index.ts
import { ReactNode } from "react";

type ContentSection = {
  title: string;
  items: string[];
};

export type Project = {
  id: number;
  title: string;
  des: string;
  src: string;
  iconLists: string[];
  link: string;
  tags: string[]; // Changed from single category to multiple tags
  content: {
    description: string;
    sections: ContentSection[];
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "PrivyTrack",
    des: "Privacy-focused period tracker with React Native frontend and secure API",
    src: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
    tags: ["Mobile", "Backend", "Security", "Fullstack"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Managed full product development lifecycle of a period tracking app featuring 5 distinct privacy levels for increased user security.",
            "Built secure auth flows **(MFA, SSO) and fluid user interface in React Native, with REST API for backend integration.",
            "Designed Supabase backend for data persistence, implementing predictive cycle algorithms and data visualizations.",
            "Integrated Expo Router for navigation, Tailwind CSS for styling, React-Hook-Form for form handling, Zod for schema validation, and TypeScript for type safety.",
            "Raised $10,000 from iVenture Accelerator and featured as one of Poets & Quant's Most Disruptive Startups."
          ]
        }
      ],
      description: "Privacy-focused period tracker with React Native frontend and secure API"
    }
  },
  {
    id: 2,
    title: "Amazon Fire TV News Widget",
    des: "APL-based content delivery system for Alexa devices",
    src: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
    tags: ["Frontend", "Cloud", "Graphics"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Led the design and development of a News widget for Fire TV Ambient Experience, collaborating with UI/UX, Product, News, and Widget Framework teams.",
            "Learned Alexa Programming Language (APL) and implemented Fire TV News Widget UI with APL to meet UX design requirements.",
            "Implemented a data layer (Java/Kotlin) connecting the widget UI with news data source, receiving news updates through Android ContentResolver, transforming the data, and automatically refreshing the News Widget using the Observer pattern.",
            "Debugged Android application using ADB logs and wrote unit test scripts using JUnit.",
            "Utilized the Hedwig framework and Partner Managed Rows (PMR) for on-demand video clips, implementing features like deep linking.",
            "Managed scoping requirements, creating detailed design documentation, and developing strategies for sustainable long-term improvements while ensuring alignment with business goals."
          ]
        }
      ],
      description: "APL-based content delivery system for Alexa devices"
    }
  },  {
    id: 3,
    title: "Amazon Ad Analytics Dashboard",
    des: "React/Redux visualization for FireTV user ad metrics",
    src: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
    tags: ["Data", "Frontend", "Cloud"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Designed a centralized heatmap, improving ad experiences for 150M+ users.",
            "Built the application on Harmony console using MVC frameworks, achieving a 500x performance improvement in backend data retrieval.",
            "Developed microservices using AWS tools Artha and Horizonte for dynamic metric integration.",
            "Implemented frontend with Redux for state management, React Router for navigation, and custom React components for efficient visualization.",
            "Designed and implemented features like highlighted labeled tiles, collapsible data panels, aesthetic UI, dynamic controls (configuration switches, active state toggles) to visualize ad products.",
            "Deployed via Amazon’s proprietary CI/CD tools, conducting user acceptance testing and training sessions with ~20 FTV product managers for immediate feedback.",
          ]
        }
      ],
      description: "React/Redux visualization for FireTV user ad metrics"
    }
  },  {
    id: 4,
    title: "John Deere AutoPath Analytics",
    des: "C++ data pipeline for autonomous farming systems",
    src: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
    tags: ["Embedded", "Data", "Robotics"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Developed analytics dashboard for John Deere’s AutoPath, an autonomous farming navigation system used in 5,000+ farm vehicles, using C/C++.",
            "Leveraged an existing framework to package and transmit data from embedded systems to analytics team, improving plant-to-row and boundary tracking features and optimizing product placement and agricultural yield.",
            "Developed a data pipeline using Qt Creator to streamline processing.",
            "Orchestrated automated build processes using Jenkins pipelines for testing and release management."
          ]
        }
      ],
      description: "C++ data pipeline for autonomous farming systems"
    }
  },  {
    id: 5,
    title: "Linux-like OS Kernel Implementation",
    des: "From-bootloader userspace environment in RISC-V ASM/C",
    src: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
    tags: ["Embedded", "Systems", "Research"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Developed core operating system components roughly based on Unix V6 and written primarily in RISC-V assembly and C",
            "Implemented functionalities such as interrupt logic, user threading, Sv39 paging for kernel and applications, device initialization via virtio, and a filesystem to run user programs.",
            "Implemented key OS abstractions including a filesystem for loading ELF executables, a system call interface enabling user programs to request kernel services, and concurrency mechanisms like fork, locking, and preemptive multitasking.",
            "Debugged both kernel and user-level code using gdb."
          ]
        }
      ],
      description: "From-bootloader userspace environment in RISC-V ASM/C"
    }
  },  {
    id: 5,
    title: "FPGA 2048",
    des: "SystemVerilog VGA controller with NIOS-II CPU",
    src: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
    tags: ["Embedded", "Graphics", "GameDev"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Implemented the 2048 game on an FPGA, utilizing NIOS II CPU programmed in C to manage game logic such as tile movement, merging, and scorekeeping.",
            "Developed hardware modules in SystemVerilog for the VGA controller and video RAM (VRAM) to render 4x4 game board and tiles with distinct colors."
          ]
        }
      ],
      description: "SystemVerilog VGA controller with NIOS-II CPU"
    }
  },
];