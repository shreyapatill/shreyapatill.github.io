// data/index.ts
import { ReactNode } from "react";
import privy from "./images/privy.svg";
import newswidget from "./images/news-widget.png";
import firetvads from "./images/firetv-ads.png";
import autopath from "./images/autopath.png";
import linuxos from "./images/linux-os.png";
import fpgablock from "./images/fpgablock.png";
import disney from "./images/disney.png";
import amicuscurator from "./images/amicus-curator.png";
import memorybeats from "./images/memorybeats.png";
import mms from "./images/mms.png";
import rubiks from "./images/rubiks.gif";
import graic from "./images/graic.gif";

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
    src: privy,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://privytrack.com",
    tags: ["Mobile", "Backend", "Security", "Fullstack"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Managed full product development lifecycle of a period tracking app featuring 5 distinct privacy levels for increased user security.",
            "Built secure auth flows (MFA, SSO) and fluid user interface in React Native, with REST API for backend integration.",
            "Designed Supabase backend for data persistence, implementing predictive cycle algorithms and data visualizations.",
            "Integrated Expo Router for navigation, Tailwind CSS for styling, React-Hook-Form for form handling, Zod for schema validation, and TypeScript for type safety.",
            "Raised $10,000 from iVenture Accelerator and featured as one of Poets & Quant's Most Disruptive Startups."
          ]
        },
      ],
      description: "Privacy-focused period tracker with React Native frontend and secure API"
    }
  },
  {
    id: 2,
    title: "Amazon Fire TV News Widget",
    des: "APL-based content delivery system for Alexa devices",
    src: newswidget,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.aboutamazon.com/news/devices/amazons-latest-fire-tv-is-smarter-than-ever-thanks-to-ambient-intelligence-and-alexa",
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
  },
  {
    id: 3,
    title: "Amazon Ad Analytics Dashboard",
    des: "React/Redux visualization for FireTV user ad metrics",
    src: firetvads,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://advertising.amazon.com/resources/ad-specs/fire-tv",
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
            "Deployed via Amazon's proprietary CI/CD tools, conducting user acceptance testing and training sessions with ~20 FTV product managers for immediate feedback.",
          ]
        }
      ],
      description: "React/Redux visualization for FireTV user ad metrics"
    }
  },
  {
    id: 4,
    title: "John Deere AutoPath Analytics",
    des: "C++ data pipeline for autonomous farming systems",
    src: autopath,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.deere.com/en/technology-products/precision-ag-technology/guidance/autopath/",
    tags: ["Embedded", "Data", "Robotics"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Developed analytics dashboard for John Deere's AutoPath, an autonomous farming navigation system used in 5,000+ farm vehicles, using C/C++.",
            "Leveraged an existing framework to package and transmit data from embedded systems to analytics team, improving plant-to-row and boundary tracking features and optimizing product placement and agricultural yield.",
            "Developed a data pipeline using Qt Creator to streamline processing.",
            "Orchestrated automated build processes using Jenkins pipelines for testing and release management."
          ]
        }
      ],
      description: "C++ data pipeline for autonomous farming systems"
    }
  },
  {
    id: 5,
    title: "Linux-like OS Kernel Implementation",
    des: "From-bootloader userspace environment in RISC-V ASM/C",
    src: linuxos,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/shreyapatill/operating-systems",
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
  },
  {
    id: 6,
    title: "FPGA 2048",
    des: "SystemVerilog VGA controller with NIOS-II CPU",
    src: fpgablock,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://docs.google.com/document/d/1tkpAkVQwqovZKCKXiYD0Gr45hyOlUSO03eEIXs9Lpqs/edit?usp=drive_link",
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
  {
    id: 7,
    title: "Traversing Disney World",
    des: "Pathfinding algorithms for theme park navigation",
    src: disney,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/shreyapatill/traversing-disneyworld?tab=readme-ov-file",
    tags: ["Algorithms", "Systems"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Developed search tool in C++ for Disney theme park visitors to optimize their experience by suggesting rides based on location and wait times.",
            "Utilized an unofficial Disney API for data and employed graph algorithms like BFS, Dijkstra's, and Kruskal's to find efficient paths and maximize rides given a time limit."
          ]
        }
      ],
      description: "Pathfinding algorithms for theme park navigation"
    }
  },
  {
    id: 8,
    title: "Amicus Curator",
    des: "AI system for judicial sentencing analysis",
    src: amicuscurator,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://docs.google.com/presentation/d/1UbLXxItRCL2eflPYdJtK1sUC93ORLOv7buiA3lS0Xqg/edit?usp=sharing",
    tags: ["AI/ML", "Systems"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Designed an AI system to assist judges by analyzing past case data to suggest sentences and evaluate the reliability of a judge's sentencing decisions.",
            "Implemented decision trees to promote consistency and reduce bias in the judicial process."
          ]
        }
      ],
      description: "AI system for judicial sentencing analysis"
    }
  },
  {
    id: 9,
    title: "MemoryBeats",
    des: "Music playlist generator for dementia patients",
    src: memorybeats,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/CS196Illinois/Group-5-SP21",
    tags: ["Mobile", "Backend"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Developed a Flutter mobile application using a Python Flask backend and the MusicBrainz API.",
            "Created a system that generates childhood music playlists based on birth year and location to aid dementia symptoms."
          ]
        }
      ],
      description: "Music playlist generator for dementia patients"
    }
  },
  {
    id: 10,
    title: "Improving MMS Algorithm",
    des: "Research in fair division algorithms",
    src: mms,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/shreyapatill/PURE-Research-Project",
    tags: ["Algorithms", "Research"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Aimed to improve the approximation guarantee of MMS algorithms, starting with the study and implementation of EF1 and ½-MMS algorithms.",
            "Worked towards finding and proving conjectures to surpass the ⅔-MMS allocation, to potentially reach ¾ or ⅘-MMS."
          ]
        }
      ],
      description: "Research in fair division algorithms"
    }
  },
  {
    id: 11,
    title: "Rubik's Cube Solving Robot",
    des: "Autonomous robot for solving Rubik's Cube",
    src: rubiks,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://docs.google.com/document/d/1ilLnubCBHi363ZguLsFRF2ngLP4usWoFoPJ6BoyOHLs/edit?usp=sharing",
    tags: ["Embedded", "Robotics"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Constructed and programmed an autonomous robot to solve a Rubik's Cube in ~2.7s.",
            "Used a Raspberry Pi for control, stepper motors for cube manipulation, a 3D-printed frame, and a tkinter user interface for inputting initial cube state."
          ]
        }
      ],
      description: "Autonomous robot for solving Rubik's Cube"
    }
  },
  {
    id: 12,
    title: "Autonomous Vehicle Path Planning",
    des: "PD controller with A* pathfinding for GRAIC competition",
    src: graic,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://drive.google.com/file/d/1JpDNg8tArc0CcWTPc3yhhaSAoPr-Fzxg/view?usp=sharing",
    tags: ["Robotics", "Embedded", "AI/ML"],
    content: {
      sections: [
        {
          title: "What I did",
          items: [
            "Created a software controller for autonomous racing within the GRAIC simulation environment.",
            "Utilized an algorithm for local path planning to avoid obstacles and boundaries and a PD controller for managing the vehicles speed and rotation."
          ]
        }
      ],
      description: "PD controller with A* pathfinding for GRAIC competition"
    }
  }
];