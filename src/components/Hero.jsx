import { useLang } from "../context/LanguageContext";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { contact } from "../data/contact";
import Tile from "./Tile";
import CountUp from "./CountUp";
import { GitHubIcon, LinkedInIcon, DownloadIcon, ArrowIcon } from "./Icons";

const linkClass = "flex-1 flex items-center justify-center gap-2 rounded-xl bg-ink/50 px-4 py-3 text-sm hover:bg-accent hover:text-accent-ink transition-colors";

export default function Hero() {
  const { t, lang } = useLang();
  const { handleAnchor } = useSmoothScroll();
  const h = t.hero;

  return (
    <section className="pt-24 pb-16 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <Tile className="col-span-2 md:col-span-1 md:row-span-2 bg-cream text-ink p-3 flex flex-col">
          <img src="/profile.png" alt="Jorge Manuel López"
            className="w-full aspect-[4/3] md:aspect-auto md:flex-1 md:min-h-0 object-cover object-top rounded-xl" />
          <div className="px-1 pt-3 pb-1">
            <p className="font-semibold text-lg leading-tight">Jorge Manuel López</p>
            <p className="text-sm text-ink/60">{h.role}</p>
          </div>
        </Tile>

        <Tile className="col-span-2 md:col-span-3 p-6 md:p-10 flex flex-col justify-between gap-8 md:min-h-[330px]">
          <p className="label">{h.role} · {h.location}</p>
          <div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              {h.title} <em className="text-accent">{h.titleEm}</em>
            </h1>
            <p className="mt-5 max-w-xl text-muted leading-relaxed">{h.intro}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" onClick={handleAnchor}
              className="px-5 py-3 rounded-xl bg-accent text-accent-ink font-semibold text-sm hover:bg-cream transition-colors">
              {h.ctaProjects}
            </a>
            <a href="#contact" onClick={handleAnchor}
              className="px-5 py-3 rounded-xl border border-line font-semibold text-sm hover:border-accent hover:text-accent transition-colors">
              {h.ctaContact}
            </a>
          </div>
        </Tile>

        <Tile className="col-span-2 md:col-span-1 p-5 flex flex-col justify-between gap-4">
          <p className="flex items-center gap-2 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {h.availableLabel}
          </p>
          <p className="text-muted text-sm leading-relaxed">{h.availableText}</p>
        </Tile>

        {h.stats.map((s, i) => (
          <Tile key={s.label} className={`p-5 flex flex-col justify-between gap-4 ${i === 0 ? "bg-accent text-accent-ink border-accent" : ""}`}>
            <span className={`text-5xl font-bold leading-none ${i === 0 ? "" : "text-accent"}`}>
              <CountUp value={s.value} />
            </span>
            <span className={`text-sm leading-snug ${i === 0 ? "text-accent-ink/75" : "text-muted"}`}>{s.label}</span>
          </Tile>
        ))}

        <Tile className="col-span-2 p-5 md:p-6">
          <p className="label">{h.nowLabel}</p>
          <p className="mt-3 font-serif text-2xl leading-snug">{h.now}</p>
        </Tile>

        <Tile className="col-span-2 p-3 md:p-4 flex flex-col sm:flex-row gap-3 sm:items-stretch">
          <a href={contact.github} target="_blank" rel="noreferrer" className={linkClass}>
            <GitHubIcon /> GitHub <ArrowIcon />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            <LinkedInIcon /> LinkedIn <ArrowIcon />
          </a>
          <a href={contact.cv[lang]} download className={linkClass}>
            <DownloadIcon /> {h.cv}
          </a>
        </Tile>
      </div>
    </section>
  );
}
