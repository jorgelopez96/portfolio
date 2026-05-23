import { useLang } from "../context/LanguageContext";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function Hero() {
  const { t } = useLang();
  const { handleAnchor } = useSmoothScroll();

  return (
    <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-32">
        <div>
          <p className="font-mono text-purple-400 text-xs tracking-[0.4em] uppercase mb-8 animate-fade-in">
            {t.hero.greeting}
          </p>
          <h1 className="font-display font-extrabold leading-[1.05] mb-8 animate-slide-up">
            <span className="block text-5xl md:text-6xl lg:text-7xl text-white">Jorge</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-white">Manuel</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400">
              López
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-md animate-slide-up delay-200 font-light">
            {t.hero.tagline}
          </p>
          <div className="flex gap-4 animate-slide-up delay-300">
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

        {/* Photo */}
        <div className="flex justify-center md:justify-end animate-slide-left delay-200">
          <div className="relative w-72 h-96 md:w-80 md:h-[480px]">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
              <img src="/profile.png" alt="Jorge López"
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080810]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#0f0f1a] border border-purple-700/50 rounded-xl px-4 py-2.5 shadow-xl">
              <p className="font-mono text-xs text-purple-400 tracking-wider">FullStack Developer</p>
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
