import { useEffect } from "react";
import { useLang } from "../context/LanguageContext";

export default function ProjectModal({ project, onClose }) {
  const { t } = useLang();
  const info = t.projects.items[project.key];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full sm:max-w-4xl bg-[#0f0f1a] border border-purple-700/40 rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-900/30 flex-shrink-0">
          <div className="min-w-0 mr-3">
            <h3 className="font-display font-bold text-white text-base sm:text-lg truncate">{info.name}</h3>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a href={project.github} target="_blank" rel="noreferrer"
              className="font-mono text-xs text-gray-400 border border-white/10 px-2.5 py-1.5 rounded-xl hover:border-purple-500/50 hover:text-purple-400 transition-all">
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="noreferrer"
              className="font-mono text-xs text-purple-400 border border-purple-700/50 px-2.5 py-1.5 rounded-xl hover:bg-purple-900/20 transition-all">
              Live ↗
            </a>
            <button onClick={onClose}
              className="w-8 h-8 rounded-xl border border-white/10 text-gray-500 hover:text-white hover:border-purple-500/50 transition-all flex items-center justify-center text-lg flex-shrink-0">
              ×
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="overflow-hidden bg-black flex-shrink-0">
          <img src={project.image} alt={info.name} className="w-full object-cover object-top max-h-[45vh] sm:max-h-[55vh]" />
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-4 overflow-y-auto">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{info.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span key={tag} className="font-mono text-xs text-purple-400 border border-purple-800/50 px-2 py-0.5 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
