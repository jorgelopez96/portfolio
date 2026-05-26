import { useLang } from "../context/LanguageContext";
import { SectionTitle } from "./Skills";

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="py-28 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title={t.experience.title} />
        <div className="mt-14 max-w-2xl flex flex-col gap-5">
          {t.experience.bio.map((paragraph, i) => (
            <p key={i} className={`leading-relaxed ${i === 0 ? "text-white text-lg font-medium" : "text-gray-400 text-base"}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
