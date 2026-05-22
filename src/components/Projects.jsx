import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { projects } from "../data/projects";
import { SectionTitle } from "./Skills";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { t } = useLang();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-28 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title={t.projects.title} />
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {projects.map((p) => {
            const info = t.projects.items[p.key];
            return (
              <div key={p.id}
                className="group border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.02] hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => setSelected(p)}
              >
                <div className="relative h-52 bg-purple-950/20 overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={info.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-mono text-xs text-purple-900 tracking-widest">// SCREENSHOT PENDIENTE</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  {/* Overlay hint on hover */}
                  <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="font-mono text-xs text-white border border-white/30 px-3 py-1.5 rounded-xl backdrop-blur-sm">
                      Ver preview
                    </span>
                  </div>
                  <span className={`absolute top-4 right-4 font-mono text-xs px-2 py-1 rounded-full border ${p.status === "deployed" ? "border-green-500/40 text-green-400 bg-green-900/20" : "border-yellow-500/40 text-yellow-400 bg-yellow-900/20"}`}>
                    {t.projects.status[p.status]}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2">{info.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{info.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-purple-400 border border-purple-800/50 px-2 py-0.5 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="flex-1 text-center font-mono text-xs py-2 border border-white/10 text-gray-400 hover:border-purple-500/50 hover:text-purple-400 rounded-xl transition-all">
                      GitHub
                    </a>
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="flex-1 text-center font-mono text-xs py-2 bg-purple-600/20 border border-purple-600/40 text-purple-300 hover:bg-purple-600/30 rounded-xl transition-all">
                      Live ↗
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
