// components/RecentProjects.tsx
import React from "react";
import Image from "next/image";
import { ProjectCarousel, ProjectCard } from "@/components/ui/project-carousel";
import { projects } from "@/data";

type ContentSection = {
  title: string;
  items: string[];
};

const buildProjectContent = (
  description: string,
  imageSrc: string,
  sections: ContentSection[],
  tags: string[]
) => {
  return (
    <div className="space-y-6 text-white-200">
      <p>{description}</p>
      
      {/* Tags display */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 rounded-full text-xs font-medium bg-black-200 border border-purple-200 text-purple-100"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          src={imageSrc}
          alt="Project screenshot"
          width={800}
          height={600}
          className="rounded-lg border border-black-300"
        />
        
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="p-4 rounded-lg bg-black-200 border border-black-300">
              <h5 className="font-semibold text-white-100">{section.title}</h5>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecentProjects = () => {
  const projectCards = projects.map((project, index) => (
    <ProjectCard
      key={project.id}
      project={{
        src: project.src,
        title: project.title,
        tags: project.tags,
        content: buildProjectContent(
          project.content.description,
          project.src,
          project.content.sections,
          project.tags
        ),
        iconLists: project.iconLists,
        link: project.link
      }}
      index={index}
    />
  ));

  return (
    <section className="py-20 bg-black-100" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Projects I&apos;ve worked on
        </h2>
        <ProjectCarousel items={projectCards} />
      </div>
    </section>
  );
};

export default RecentProjects;