import { useLang } from "../context/LanguageContext";
import Modal from "./Modal";
import { ProjectLinks, TechList } from "./ProjectTile";

export default function ProjectModal({ project, onClose }) {
  const { t } = useLang();
  const info = t.projects.items[project.key];

  return (
    <Modal title={info.name} onClose={onClose} closeLabel={t.projects.close} wide>
      {project.image && (
        <div className="bg-ink/70 p-4 sm:p-6">
          <img src={project.image} alt={info.name} className="mx-auto max-h-[45vh] w-auto max-w-full rounded-lg border border-line" />
        </div>
      )}
      <div className="p-5 sm:p-8 flex flex-col gap-6">
        <div>
          <p className="font-serif text-2xl sm:text-3xl leading-tight">{info.tagline}</p>
          <p className="mt-3 text-muted leading-relaxed">{info.description}</p>
        </div>

        {info.metrics.length > 0 && (
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {info.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-line p-4">
                <dt className="text-2xl font-bold text-accent">{m.value}</dt>
                <dd className="mt-1 text-xs text-muted leading-snug">{m.label}</dd>
              </div>
            ))}
          </dl>
        )}

        {info.highlights.length > 0 && (
          <div>
            <p className="label mb-3">{t.projects.highlights}</p>
            <ul className="flex flex-col gap-2.5">
              {info.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed">
                  <span className="text-accent mt-0.5">→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <TechList tech={project.tech} />
        <ProjectLinks project={project} t={t} />
      </div>
    </Modal>
  );
}
