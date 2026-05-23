import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
  </svg>
);

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

  const links = ["skills", "education", "projects", "experience", "contact"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#080810]/85 backdrop-blur-md border-b border-purple-900/20" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={scrollToTop} className="font-display text-white text-xl font-bold tracking-tight hover:text-purple-400 transition-colors cursor-pointer">
          JL<span className="text-purple-400">.</span>
        </button>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} onClick={handleAnchor} className="text-sm text-gray-400 hover:text-purple-400 transition-colors font-mono tracking-widest uppercase">
                {t.nav[l]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="/Jorge_Lopez_CV.pdf" download
            className="hidden md:flex items-center gap-2 text-xs font-mono text-purple-400 border border-purple-700/60 px-3 py-1.5 rounded-full hover:bg-purple-900/20 hover:border-purple-500 transition-all group">
            <span>CV</span>
            <DownloadIcon />
          </a>

          <button onClick={toggleLang} className="text-xs font-mono border border-purple-700 text-purple-400 px-3 py-1 rounded-full hover:bg-purple-900/30 transition-colors">
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-3 h-px bg-current" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#080810]/95 border-t border-purple-900/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={(e) => { handleAnchor(e); setMenuOpen(false); }}
              className="text-sm text-gray-400 hover:text-purple-400 font-mono tracking-widest uppercase">
              {t.nav[l]}
            </a>
          ))}
          <a href="/Jorge_Lopez_CV.pdf" download
            className="flex items-center gap-2 text-xs font-mono text-purple-400 border border-purple-700/60 px-3 py-1.5 rounded-full w-fit hover:bg-purple-900/20 transition-all">
            <span>CV</span>
            <DownloadIcon />
          </a>
        </div>
      )}
    </nav>
  );
}
