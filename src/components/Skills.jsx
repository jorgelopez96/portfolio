import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { skills } from "../data/skills";
import SkillsCarousel from "./SkillsCarousel";

const LINES = [
  { cmd: "jorge@portfolio:~$ cat stack.json", delay: 0 },
  { cmd: null, delay: 500 },
  ...skills.map((s, i) => ({ cmd: `  ✓ ${s.name}`, delay: 600 + i * 150 })),
  { cmd: null, delay: 600 + skills.length * 150 + 100 },
  { cmd: `jorge@portfolio:~$ open https://jorgelopez.dev`, delay: 600 + skills.length * 150 + 250 },
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

  return (
    <section id="skills" className="py-28 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title={t.skills.title} />

        {/* Terminal — full width */}
        <div className="mt-14 rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-purple-900/10">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="font-mono text-xs text-gray-600 ml-2">stack.sh</span>
          </div>
          <div className="bg-[#0d0d1a] px-4 sm:px-6 py-5 font-mono text-xs sm:text-sm">
            {LINES.map((line, i) =>
              visible.includes(i) ? (
                <div key={i} className={`leading-6 ${line.cmd === null ? "hidden" : ""}`}>
                  {line.cmd === null ? null : line.cmd.startsWith("jorge@") ? (
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
            {visible.length >= LINES.length && (
              <div className="leading-6 mt-1">
                <span className="text-purple-400">jorge</span>
                <span className="text-gray-500">@portfolio</span>
                <span className="text-gray-600">:~$</span>
                <span className={`inline-block w-2 h-4 bg-purple-400 ml-2 align-middle ${cursor ? "opacity-100" : "opacity-0"}`} />
              </div>
            )}
            {visible.length < LINES.length && (
              <div className="">
                <span className={`inline-block w-2 h-4 bg-purple-400 ${cursor ? "opacity-100" : "opacity-0"}`} />
              </div>
            )}
          </div>
        </div>

        <SkillsCarousel />
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
