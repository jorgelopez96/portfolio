import { useEffect } from "react";
import { useLang } from "../context/LanguageContext";

export default function CertificateModal({ degree, onClose }) {
  const { t } = useLang();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isExternal = degree.type === "iframe";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-[#0f0f1a] border border-purple-700/40 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/30">
          <div>
            <p className="font-mono text-xs text-purple-500 tracking-widest uppercase mb-0.5">{degree.institution}</p>
            <h3 className="font-display font-bold text-white text-lg">{t.education.degrees[degree.key]}</h3>
          </div>
          <div className="flex items-center gap-3">
            {degree.diplomaUrl && isExternal && (
              <a
                href={degree.diplomaUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-purple-400 border border-purple-700/50 px-3 py-1.5 rounded-xl hover:bg-purple-900/20 transition-all"
              >
                {t.education.modalLinkBtn}
              </a>
            )}
            {degree.type === "pdf" && (
              <a
                href={degree.diplomaUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-purple-400 border border-purple-700/50 px-3 py-1.5 rounded-xl hover:bg-purple-900/20 transition-all"
              >
                Abrir PDF ↗
              </a>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl border border-white/10 text-gray-500 hover:text-white hover:border-purple-500/50 transition-all flex items-center justify-center text-lg"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden bg-white/[0.01]" style={{ minHeight: "500px" }}>
          {isExternal ? (
            <iframe
              src={degree.diplomaUrl}
              title={t.education.degrees[degree.key]}
              className="w-full h-full border-0"
              style={{ minHeight: "500px" }}
            />
          ) : (
            <iframe
              src={degree.diplomaUrl}
              title={t.education.degrees[degree.key]}
              className="w-full h-full border-0"
              style={{ minHeight: "500px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
