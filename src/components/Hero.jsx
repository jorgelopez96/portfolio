import { useLang } from "../context/LanguageContext";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const stack = ["React", "TypeScript", "Firebase", "Node.js", "GitHub"];
const NAME_LINES = ["Jorge", "Manuel", "López"];

const glitchStyles = `
  @keyframes glitch-1 {
    0%, 82%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
    84% { clip-path: inset(10% 0 60% 0); transform: translate(-5px, 2px); }
    86% { clip-path: inset(50% 0 20% 0); transform: translate(5px, -2px); }
    88% { clip-path: inset(30% 0 40% 0); transform: translate(-3px, 1px); }
    90% { clip-path: inset(70% 0 10% 0); transform: translate(4px, -1px); }
    92% { clip-path: inset(15% 0 55% 0); transform: translate(-5px, 2px); }
    94% { clip-path: inset(0 0 100% 0); transform: translate(0); }
  }
  @keyframes glitch-2 {
    0%, 82%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
    85% { clip-path: inset(40% 0 30% 0); transform: translate(5px, -2px); }
    87% { clip-path: inset(20% 0 55% 0); transform: translate(-5px, 2px); }
    89% { clip-path: inset(60% 0 15% 0); transform: translate(3px, -1px); }
    91% { clip-path: inset(5% 0 80% 0); transform: translate(-4px, 1px); }
    93% { clip-path: inset(35% 0 35% 0); transform: translate(5px, -2px); }
    95% { clip-path: inset(0 0 100% 0); transform: translate(0); }
  }
  .glitch-wrap { position: relative; display: inline-block; }
  .glitch-wrap::before, .glitch-wrap::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    font: inherit;
    font-weight: inherit;
    background: inherit;
    -webkit-background-clip: inherit;
    background-clip: inherit;
    -webkit-text-fill-color: inherit;
  }
  .glitch-wrap::before {
    color: #a855f7;
    -webkit-text-fill-color: #a855f7;
    background: none;
    animation: glitch-1 3s infinite;
  }
  .glitch-wrap::after {
    color: #60a5fa;
    -webkit-text-fill-color: #60a5fa;
    background: none;
    animation: glitch-2 3s infinite;
  }
`;

const styles = [
  "text-white",
  "text-gray-400",
  "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400",
];

function GlitchName({ mobile }) {
  const sizes = mobile
    ? "text-4xl"
    : "text-5xl md:text-6xl lg:text-7xl";
  return (
    <>
      <style>{glitchStyles}</style>
      <h1 className={`font-display font-extrabold leading-[1.05] ${mobile ? "mb-3" : "mb-8"}`}>
        {NAME_LINES.map((line, i) => (
          <span key={line} className={`block ${sizes} ${styles[i]}`}>
            {i === 2 ? (
              <span className="glitch-wrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400" data-text={line}>{line}</span>
            ) : line}
          </span>
        ))}
      </h1>
    </>
  );
}

function Badges({ t }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-[#0f0f1a] border border-purple-700/50 rounded-xl px-3 py-2 shadow-xl w-fit">
        <p className="font-mono text-xs text-purple-400 tracking-wider">FullStack Developer</p>
      </div>
      <div className="bg-[#0f0f1a] border border-green-700/40 rounded-xl px-3 py-2 shadow-xl shadow-green-900/20 flex items-center gap-2 w-fit">
        <div className="relative flex items-center justify-center w-3 h-3">
          <span className="absolute w-4 h-4 rounded-full bg-green-400/30 blur-sm" />
          <span className="absolute w-5 h-5 rounded-full bg-green-400/10 blur-md" />
          <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-green-400 shadow-lg shadow-green-400/60" />
          <span className="absolute inset-0 rounded-full bg-green-400/40 animate-ping-slow" />
        </div>
        <span className="font-mono text-xs text-green-400 tracking-wider">{t.hero.available}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLang();
  const { handleAnchor } = useSmoothScroll();

  return (
    <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-24 md:py-32">

        {/* MOBILE layout */}
        <div className="md:hidden">
          {/* Row: name + photo */}
          <div className="grid grid-cols-2 gap-4 items-start mb-6">
            {/* Left: name + badges */}
            <div>
              <GlitchName mobile />
              <Badges t={t} />
            </div>
            {/* Right: photo */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl" />
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img src="/profile.png" alt="Jorge López" className="w-full object-cover object-top" style={{ aspectRatio: "3/4" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
          {/* Below: tagline + stack + buttons */}
          <div className="bg-[#0f0f1a]/60 border border-white/5 rounded-2xl p-4">
            <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">{t.hero.tagline}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {stack.map((s) => (
                <span key={s} className="font-mono text-xs text-purple-400 border border-purple-800/50 bg-purple-900/10 px-2 py-1 rounded-lg">{s}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#projects" onClick={handleAnchor}
                className="flex-1 text-center px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm rounded-xl transition-all">
                {t.hero.cta}
              </a>
              <a href="#contact" onClick={handleAnchor}
                className="flex-1 text-center px-4 py-2.5 border border-purple-700/60 text-purple-300 hover:bg-purple-900/20 font-semibold text-sm rounded-xl transition-all">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        {/* DESKTOP layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          <div>
            <GlitchName mobile={false} />
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md font-light">{t.hero.tagline}</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {stack.map((s) => (
                <span key={s} className="font-mono text-xs text-purple-400 border border-purple-800/50 bg-purple-900/10 px-2.5 py-1 rounded-lg">{s}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="#projects" onClick={handleAnchor}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/30">
                {t.hero.cta}
              </a>
              <a href="#contact" onClick={handleAnchor}
                className="px-6 py-3 border border-purple-700/60 text-purple-300 hover:bg-purple-900/20 font-semibold text-sm rounded-xl transition-all">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative w-80 h-[480px]">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl" />
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                <img src="/profile.png" alt="Jorge López"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0f0f1a] border border-purple-700/50 rounded-xl px-4 py-2.5 shadow-xl">
                <p className="font-mono text-xs text-purple-400 tracking-wider">FullStack Developer</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#0f0f1a] border border-green-700/40 rounded-xl px-3 py-2.5 shadow-xl shadow-green-900/20 flex items-center gap-2">
                <div className="relative flex items-center justify-center w-3 h-3">
                  <span className="absolute w-4 h-4 rounded-full bg-green-400/30 blur-sm" />
                  <span className="absolute w-5 h-5 rounded-full bg-green-400/10 blur-md" />
                  <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-green-400 shadow-lg shadow-green-400/60" />
                  <span className="absolute inset-0 rounded-full bg-green-400/40 animate-ping-slow" />
                </div>
                <span className="font-mono text-xs text-green-400 tracking-wider">{t.hero.available}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-purple-400/60 to-transparent mx-auto" />
      </div>
    </section>
  );
}
