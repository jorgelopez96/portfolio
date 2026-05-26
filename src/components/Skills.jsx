import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { skills } from "../data/skills";

const LINES = [
  { cmd: "jorge@portfolio:~$ cat stack.json", delay: 0 },
  { cmd: null, delay: 600 },
  ...skills.map((s, i) => ({ cmd: `  ✓ ${s.name}`, delay: 700 + i * 180 })),
  { cmd: null, delay: 700 + skills.length * 180 + 100 },
  { cmd: `jorge@portfolio:~$ open https://jorgelopez.dev`, delay: 700 + skills.length * 180 + 300 },
];

export default function Skills() {
  const { t } = useLang();
  const [visible, setVisible] = useState([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const timers = LINES.map((line, i) =>
      setTimeout(() => setVisible((v) => [...v, i]), line.delay)
    );
    const cursorTimer = setInterval(() => setCursor((c) => !c), 500);
    return () => { timers.forEach(clearTimeout); clearInterval(cursorTimer); };
  }, []);

  const getSkillIcon = (name) => skills.find((s) => s.name === name)?.icon;

  return (
    <section id="skills" className="py-28 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title={t.skills.title} />
        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-start">

          {/* Terminal */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="font-mono text-xs text-gray-600 ml-2">stack.sh</span>
            </div>
            {/* Terminal body */}
            <div className="bg-[#0d0d1a] p-5 min-h-[340px] font-mono text-sm">
              {LINES.map((line, i) =>
                visible.includes(i) ? (
                  <div key={i} className="leading-7">
                    {line.cmd === null ? (
                      <span>&nbsp;</span>
                    ) : line.cmd.startsWith("jorge@") ? (
                      <span>
                        <span className="text-purple-400">jorge</span>
                        <span className="text-gray-500">@portfolio</span>
                        <span className="text-gray-600">:~$</span>
                        <span className="text-white"> {line.cmd.split("$ ")[1]}</span>
                      </span>
                    ) : (
                      <span className="text-green-400">{line.cmd}</span>
                    )}
                  </div>
                ) : null
              )}
              {/* Blinking cursor */}
              {visible.length < LINES.length && (
                <span className={`inline-block w-2 h-4 bg-purple-400 ml-1 ${cursor ? "opacity-100" : "opacity-0"}`} />
              )}
              {visible.length >= LINES.length && (
                <div className="leading-7">
                  <span className="text-purple-400">jorge</span>
                  <span className="text-gray-500">@portfolio</span>
                  <span className="text-gray-600">:~$</span>
                  <span className={`inline-block w-2 h-4 bg-purple-400 ml-2 align-middle ${cursor ? "opacity-100" : "opacity-0"}`} />
                </div>
              )}
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div key={skill.name}
                className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-purple-500/40 hover:bg-purple-900/10 transition-all group cursor-default">
                <img src={skill.icon} alt={skill.name} className="w-7 h-7 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-mono text-xs text-gray-400 group-hover:text-purple-300 transition-colors leading-tight">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
      <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{title}</h2>
    </div>
  );
}
