import { useLang } from "../context/LanguageContext";
import Tile from "./Tile";
import CountUp from "./CountUp";
import { GitHubIcon, ArrowIcon } from "./Icons";

const linkClass = "inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs hover:border-accent hover:text-accent transition-colors";

export function ProjectLinks({ project, t }) {
  if (!project.github && !project.live) {
    return <span className="font-mono text-xs text-dim">{t.projects.internal}</span>;
  }
  return (
    <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className={linkClass}><GitHubIcon /> GitHub</a>
      )}
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer" className={linkClass}>Live <ArrowIcon /></a>
      )}
    </div>
  );
}

export function TechList({ tech }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tech.map((tag) => (
        <li key={tag} className="font-mono text-[11px] text-muted border border-line rounded-md px-2 py-0.5">{tag}</li>
      ))}
    </ul>
  );
}

export default function ProjectTile({ project, onOpen }) {
  const { t } = useLang();
  const info = t.projects.items[project.key];
  const big = project.featured;

  const open = () => onOpen(project);
  const onKey = (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), open());

  return (
    <Tile
      role="button" tabIndex={0} onClick={open} onKeyDown={onKey} aria-label={`${info.name}: ${t.projects.details}`}
      className={`group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${big ? "md:col-span-4 grid md:grid-cols-2" : "md:col-span-2 flex flex-col"}`}
    >
      <div className={`flex items-center justify-center overflow-hidden bg-ink/70 p-4 md:p-6 ${big ? "aspect-[16/10] md:aspect-auto md:min-h-[340px]" : "aspect-[16/9]"}`}>
        {project.image && (
          <img src={project.image} alt={info.name} loading="lazy"
            className="max-w-full max-h-full rounded-lg border border-line shadow-2xl shadow-black/40 transition-transform duration-700 group-hover:scale-[1.03]" />
        )}
      </div>

      <div className={`flex flex-col gap-5 ${big ? "p-6 md:p-8" : "p-5 flex-1"}`}>
        <div>
          <p className="label">{t.projects.status[project.status]}</p>
          <h3 className={`font-serif leading-none mt-2 ${big ? "text-4xl md:text-5xl" : "text-3xl"}`}>{info.name}</h3>
          <p className="mt-2 text-muted">{info.tagline}</p>
        </div>

        {info.metrics.length > 0 && (
          <dl className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {info.metrics.map((m) => (
              <div key={m.label}>
                <dt className="text-3xl font-bold text-accent leading-none"><CountUp value={m.value} /></dt>
                <dd className="mt-1.5 text-xs text-muted leading-snug">{m.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto flex flex-col gap-4">
          <TechList tech={project.tech} />
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <ProjectLinks project={project} t={t} />
            <span className="text-sm text-accent group-hover:translate-x-1 transition-transform">{t.projects.details} →</span>
          </div>
        </div>
      </div>
    </Tile>
  );
}
