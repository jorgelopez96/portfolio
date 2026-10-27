import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { projects } from "../data/projects";
import SectionTitle from "./SectionTitle";
import ProjectTile from "./ProjectTile";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { t } = useLang();
  const [selected, setSelected] = useState(null);
  const p = t.projects;

  return (
    <section id="projects" className="py-16 md:py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={p.title} em={p.titleEm} />
        <div className="grid md:grid-cols-4 gap-3 md:gap-4">
          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} onOpen={setSelected} />
          ))}
        </div>
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
