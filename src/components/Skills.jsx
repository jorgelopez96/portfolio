import { useLang } from "../context/LanguageContext";
import { skills } from "../data/skills";

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="py-28 bg-transparent relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title={t.skills.title} />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 mt-14">
          {skills.map((skill) => (
            <div key={skill.name}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-purple-500/40 hover:bg-purple-950/20 transition-all duration-300 cursor-default">
              <img src={skill.icon} alt={skill.name} className="w-11 h-11 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs font-mono text-gray-500 group-hover:text-purple-300 transition-colors text-center leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Nuevo estilo de título de sección — sin numeración
export function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
      <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{title}</h2>
    </div>
  );
}
