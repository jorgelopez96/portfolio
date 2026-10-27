import { useInView } from "../hooks/useInView";

const canTilt = window.matchMedia(
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
).matches;

const MAX_DEG = 4;

export default function Tile({ as: Tag = "div", className = "", children, ...props }) {
  const [ref, inView] = useInView();

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    el.style.setProperty("--ry", `${(x / r.width - 0.5) * MAX_DEG * 2}deg`);
    el.style.setProperty("--rx", `${(0.5 - y / r.height) * MAX_DEG * 2}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--x", "-999px");
  };

  return (
    <Tag
      ref={ref}
      className={`tile ${inView ? "is-in" : ""} ${className}`}
      onMouseMove={canTilt ? onMove : undefined}
      onMouseLeave={canTilt ? onLeave : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
