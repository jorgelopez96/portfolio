const animateScroll = (targetY) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 800;
  let startTime = null;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

export function useSmoothScroll() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const targetY = el.getBoundingClientRect().top + window.scrollY - 72;
    animateScroll(targetY);
  };

  const scrollToTop = (e) => {
    e?.preventDefault();
    animateScroll(0);
  };

  const handleAnchor = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    e.preventDefault();
    scrollTo(href.slice(1));
  };

  return { handleAnchor, scrollToTop };
}
