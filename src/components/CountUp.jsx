import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const DURATION = 1200;

// Anima el primer número del texto ("85 MB", "<1%", "1080p60") y deja el resto igual
export default function CountUp({ value }) {
  const [ref, inView] = useInView(0.5);
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? Number(match[2]) : 0;
  const [n, setN] = useState(reduced ? target : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    let frame;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / DURATION, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  if (!match) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{match[1]}{n}{match[3]}</span>;
}
