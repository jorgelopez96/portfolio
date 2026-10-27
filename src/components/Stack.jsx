import { useLang } from "../context/LanguageContext";
import { skills } from "../data/skills";
import SectionTitle from "./SectionTitle";
import Tile from "./Tile";

const GROUPS = ["front", "back", "desktop", "quality"];

export default function Stack() {
  const { t } = useLang();
  const s = t.stack;

  return (
    <section id="stack" className="py-16 md:py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={s.title} em={s.titleEm} />
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {GROUPS.map((g) => (
            <Tile key={g} className="p-5 md:p-7 flex flex-col gap-5">
              <div>
                <h3 className="text-xl font-semibold">{s.groups[g].title}</h3>
                <p className="mt-1.5 text-sm text-muted">{s.groups[g].text}</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {skills.filter((sk) => sk.group === g).map((sk) => (
                  <li key={sk.name} className="chip flex items-center gap-2 rounded-full border border-line bg-ink/40 pl-2 pr-3 py-1.5 text-sm">
                    <img src={sk.icon} alt="" loading="lazy" className={`w-4 h-4 ${sk.dark ? "invert" : ""}`} />
                    {sk.name}
                  </li>
                ))}
              </ul>
            </Tile>
          ))}
        </div>
      </div>
    </section>
  );
}
