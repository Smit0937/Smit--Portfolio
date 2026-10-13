import { useEffect, useRef, useState } from "react";
import { stats } from "../data/content.js";

function useCountUp(target, decimals, start) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame;
    const duration = 1100;
    const t0 = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);
  return value.toFixed(decimals);
}

function Stat({ value, suffix, label, decimals, start }) {
  const display = useCountUp(value, decimals, start);
  return (
    <div className="stat">
      <b>
        {display}
        {suffix}
      </b>
      <span>{label}</span>
    </div>
  );
}

export default function StatStrip() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="stat-strip" ref={ref}>
      <div className="wrap">
        {stats.map((s) => (
          <Stat key={s.label} {...s} start={start} />
        ))}
      </div>
    </div>
  );
}
