import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { degrees } from "../data/education";
import SectionTitle from "./SectionTitle";
import Tile from "./Tile";
import CertificateModal from "./CertificateModal";

export default function Education() {
  const { t } = useLang();
  const [selected, setSelected] = useState(null);
  const e = t.education;

  return (
    <section id="education" className="py-16 md:py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title={e.title} em={e.titleEm} />
        <Tile className="grid md:grid-cols-2">
          {degrees.map((deg, i) => (
            <div key={deg.id}
              className={`flex items-center justify-between gap-4 px-5 md:px-7 py-5 border-line ${i > 0 ? "border-t" : ""} ${i === 1 ? "md:border-t-0" : ""} ${i % 2 === 1 ? "md:border-l" : ""} ${i === degrees.length - 1 && i % 2 === 0 ? "md:col-span-2" : ""}`}>
              <div>
                <p className="font-semibold">{e.degrees[deg.key]}</p>
                <p className="font-mono text-xs text-dim mt-0.5">{deg.institution}</p>
              </div>
              <button onClick={() => setSelected(deg)}
                className="shrink-0 text-sm text-accent hover:text-cream transition-colors">
                {e.diplomaBtn} →
              </button>
            </div>
          ))}
        </Tile>
      </div>
      {selected && <CertificateModal degree={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
