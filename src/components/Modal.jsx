import { useEffect } from "react";

// Modal compartido por proyectos y certificados: Esc o clic afuera cierra, bloquea el scroll de fondo
export default function Modal({ title, subtitle, onClose, closeLabel, wide, actions, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <div
        role="dialog" aria-modal="true" aria-label={title}
        className={`relative w-full ${wide ? "sm:max-w-4xl" : "sm:max-w-3xl"} max-h-[92vh] flex flex-col bg-tile border border-line rounded-t-2xl sm:rounded-2xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-line">
          <div className="min-w-0">
            {subtitle && <p className="label">{subtitle}</p>}
            <h3 className="font-serif text-2xl leading-tight truncate">{title}</h3>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {actions}
            <button onClick={onClose} aria-label={closeLabel}
              className="w-9 h-9 rounded-xl border border-line text-muted hover:text-cream hover:border-accent transition-colors text-xl leading-none">
              ×
            </button>
          </div>
        </div>
        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
