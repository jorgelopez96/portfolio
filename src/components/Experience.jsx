import { useLang } from "../context/LanguageContext";
import { experience } from "../data/experience";
import { SectionTitle } from "./Skills";

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="py-28 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title={t.experience.title} />
        <div className="mt-14">
          {experience.length === 0 ? (
            <div className="border border-white/[0.06] rounded-2xl p-12 text-center">
              <p className="font-mono text-sm text-gray-600 tracking-wider">{t.experience.empty}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {experience.map((exp) => (
                <div key={exp.id} className="border border-white/[0.06] rounded-2xl p-6 hover:border-purple-500/30 transition-all">
                  <p className="text-white">{exp.key}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
