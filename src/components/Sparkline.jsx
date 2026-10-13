export default function Sparkline({ points = [] }) {
  if (!points.length) return null;
  const w = 76;
  const h = 28;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * (w - 4) + 2;
    const y = h - 2 - ((p - min) / range) * (h - 4);
    return [x, y];
  });
  const path = coords.map(([x, y]) => `${x},${y}`).join(" ");
  const [lastX, lastY] = coords[coords.length - 1];

  return (
    <svg
      className="sparkline"
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      role="img"
      aria-label="Illustrative trend for this project's outcome"
    >
      <polyline points={path} fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <circle cx={lastX} cy={lastY} r="2.4" fill="var(--amber)" />
    </svg>
  );
}