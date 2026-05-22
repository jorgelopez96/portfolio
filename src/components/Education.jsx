import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { degrees } from "../data/education";
import { SectionTitle } from "./Skills";
import CertificateModal from "./CertificateModal";

export default function Education() {
  const { t } = useLang();
  const [selected, setSelected] = useState(null);

  return (
    <section id="education" className="py-28 bg-transparent relative">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title={t.education.title} />
        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {degrees.map((deg) => {
            const hasCert = !!deg.diplomaUrl;
            const isApproved = hasCert || deg.completed;
            return (
              <div key={deg.id}
                className="flex items-center justify-between p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${isApproved ? "bg-green-500/15 border border-green-500/40" : "bg-white/5 border border-white/10"}`}>
                    {isApproved ? (
                      <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-700 block" />
                    )}
                  </div>
                  <div>
                    <p className="font-display text-white font-semibold">{t.education.degrees[deg.key]}</p>
                    <p className="font-mono text-xs text-gray-500 mt-0.5">{deg.institution}</p>
                  </div>
                </div>
                {hasCert ? (
                  <button onClick={() => setSelected(deg)}
                    className="font-mono text-xs text-purple-400 border border-purple-700/60 px-3 py-1.5 rounded-xl hover:bg-purple-900/20 transition-all whitespace-nowrap ml-4 cursor-pointer">
                    {t.education.diplomaBtn} ↗
                  </button>
                ) : (
                  <span className="font-mono text-xs text-green-500/70 border border-green-500/20 px-3 py-1.5 rounded-xl ml-4">
                    {t.education.noCertificate}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {selected && <CertificateModal degree={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
