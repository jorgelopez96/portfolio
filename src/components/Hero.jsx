import { useLang } from "../context/LanguageContext";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const stack = ["React", "TypeScript", "Firebase", "Node.js", "GitHub"];
const NAME_LINES = ["Jorge", "Manuel", "López"];

const glitchStyles = `
  @keyframes glitch-1 {
    0%, 90%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
    92% { clip-path: inset(10% 0 60% 0); transform: translate(-4px, 2px); }
    94% { clip-path: inset(50% 0 20% 0); transform: translate(4px, -2px); }
    96% { clip-path: inset(30% 0 40% 0); transform: translate(-2px, 1px); }
    98% { clip-path: inset(70% 0 10% 0); transform: translate(3px, -1px); }
  }
  @keyframes glitch-2 {
    0%, 90%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
    93% { clip-path: inset(40% 0 30% 0); transform: translate(4px, -2px); }
    95% { clip-path: inset(20% 0 55% 0); transform: translate(-4px, 2px); }
    97% { clip-path: inset(60% 0 15% 0); transform: translate(2px, -1px); }
    99% { clip-path: inset(5% 0 80% 0); transform: translate(-3px, 1px); }
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
    animation: glitch-1 4s infinite;
  }
  .glitch-wrap::after {
    color: #60a5fa;
    -webkit-text-fill-color: #60a5fa;
    background: none;
    animation: glitch-2 4s infinite;
  }
`;

function GlitchName() {
  return (
    <>
      <style>{glitchStyles}</style>
      <h1 className="font-display font-extrabold leading-[1.05] mb-8">
        <span className="block text-5xl md:text-6xl lg:text-7xl text-white">Jorge</span>
        <span className="block text-5xl md:text-6xl lg:text-7xl text-gray-400">Manuel</span>
        <span className="block text-5xl md:text-6xl lg:text-7xl">
          <span
            className="glitch-wrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400"
            data-text="López"
          >
            López
          </span>
        </span>
      </h1>
    </>
  );
}

function AvailableBadge({ label }) {
  return (
    <div className="relative inline-flex items-center justify-center w-16 h-16">
      {/* Outer pulsing ring */}
      <span className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping-slow" />
      {/* Inner ring */}
      <div className="absolute inset-1 rounded-full border border-green-500/40 bg-green-500/5" />
      {/* Check SVG — bold circle checkmark */}
      <svg className="w-8 h-8 text-green-400 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {/* Label below */}
      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] text-green-400 tracking-wider whitespace-nowrap">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { t } = useLang();
  const { handleAnchor } = useSmoothScroll();

  return (
    <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-32">
        {/* Left */}
        <div>
          <GlitchName />
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-md font-light">
            {t.hero.tagline}
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {stack.map((s) => (
              <span key={s} className="font-mono text-xs text-purple-400 border border-purple-800/50 bg-purple-900/10 px-2.5 py-1 rounded-lg">
                {s}
              </span>
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

        {/* Right: photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-96 md:w-80 md:h-[480px]">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
              <img src="/profile.png" alt="Jorge López"
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080810]/60 via-transparent to-transparent" />
            </div>
            {/* FullStack badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#0f0f1a] border border-purple-700/50 rounded-xl px-4 py-2.5 shadow-xl">
              <p className="font-mono text-xs text-purple-400 tracking-wider">FullStack Developer</p>
            </div>
            {/* Available badge — separate, right side */}
            <div className="absolute -bottom-4 -right-4 bg-[#0f0f1a] border border-green-700/40 rounded-xl px-3 py-2.5 shadow-xl shadow-green-900/20 flex items-center gap-2">
              <div className="relative flex items-center justify-center w-3 h-3">
                {/* Neon glow */}
                <span className="absolute w-4 h-4 rounded-full bg-green-400/30 blur-sm" />
                <span className="absolute w-5 h-5 rounded-full bg-green-400/10 blur-md" />
                {/* Dot */}
                <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-green-400 shadow-lg shadow-green-400/60" />
                {/* Ping */}
                <span className="absolute inset-0 rounded-full bg-green-400/40 animate-ping-slow" />
              </div>
              <span className="font-mono text-xs text-green-400 tracking-wider">{t.hero.available}</span>
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
