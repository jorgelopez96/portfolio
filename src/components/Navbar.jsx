import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { contact } from "../data/contact";
import { DownloadIcon } from "./Icons";

const links = ["projects", "stack", "education", "contact"];

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const { handleAnchor, scrollToTop } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled || menuOpen ? "bg-ink/85 backdrop-blur-md border-b border-line" : ""}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button onClick={scrollToTop} className="font-serif text-2xl hover:text-accent transition-colors">
          Jorge López
        </button>
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} onClick={handleAnchor} className="text-sm text-muted hover:text-cream transition-colors">
                {t.nav[l]}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={contact.cv[lang]} download
            className="hidden sm:flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-line hover:border-accent hover:text-accent transition-colors">
            CV <DownloadIcon />
          </a>
          <button onClick={toggleLang} aria-label="Cambiar idioma / Change language"
            className="font-mono text-xs px-3 py-2 rounded-full border border-line hover:border-accent hover:text-accent transition-colors">
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button className="md:hidden p-2 text-muted" aria-label="Menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block w-5 h-px bg-current mb-1.5" />
            <span className="block w-5 h-px bg-current mb-1.5" />
            <span className="block w-3 h-px bg-current" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={(e) => { handleAnchor(e); setMenuOpen(false); }}
              className="text-lg text-muted hover:text-cream">
              {t.nav[l]}
            </a>
          ))}
          <a href={contact.cv[lang]} download className="flex items-center gap-2 text-accent">
            CV <DownloadIcon />
          </a>
        </div>
      )}
    </nav>
  );
}
