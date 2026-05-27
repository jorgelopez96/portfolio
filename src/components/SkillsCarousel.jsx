import { skills } from "../data/skills";

// Duplicamos para loop infinito
const ITEMS = [...skills, ...skills];

export default function SkillsCarousel() {
  return (
    <div className="relative overflow-hidden mt-10">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080810] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080810] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-4 animate-carousel">
        {ITEMS.map((skill, i) => (
          <div key={`${skill.name}-${i}`}
            className="flex-shrink-0 flex flex-col items-center gap-2 px-5 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-purple-500/40 hover:bg-purple-900/10 transition-all group cursor-default w-24">
            <img src={skill.icon} alt={skill.name} className="w-9 h-9 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-mono text-[10px] text-gray-500 group-hover:text-purple-300 transition-colors text-center leading-tight">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
