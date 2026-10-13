import { useRef } from "react";

const diyas = [
  { label: "clarity", delay: ".2s" },
  { label: "insight", delay: ".5s" },
  { label: "growth", delay: ".8s" },
];

function Diya({ label, delay }) {
  return (
    <div className="diya" style={{ "--d": delay }}>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path
          className="flame"
          d="M20 9c3 4 3.6 6.6 2 9.3-1 1.7-4 1.7-5 0-1.6-2.7-1-5.3 3-9.3z"
          fill="var(--amber)"
        />
        <path
          d="M8 23c0-3 5.4-5 12-5s12 2 12 5-5.4 9-12 9S8 26 8 23z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
        />
        <ellipse cx="20" cy="23" rx="12" ry="5" fill="none" stroke="var(--accent)" strokeWidth="2" />
      </svg>
      <span>{label}</span>
    </div>
  );
}

export default function Hero() {
  const visualRef = useRef(null);

  // the mandala ring behind the chart card drifts gently toward the cursor — a small,
  // deliberate response rather than a decorative animation that plays on its own
  function handleMouseMove(e) {
    const el = visualRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    el.style.setProperty("--spin", `${dx * 14}deg`);
  }
  function handleMouseLeave() {
    const el = visualRef.current;
    if (el) el.style.setProperty("--spin", "0deg");
  }

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">data analyst — ahmedabad, india</div>
          <h1>Smit Patel</h1>
          <p className="lead">
            I turn raw, messy datasets into dashboards and models people can actually act on —
            working across SQL, Python, and Power BI, with a growing focus on applied machine
            learning.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn btn-ghost" href="#resume">
              Download resume
            </a>
          </div>
          <div className="diya-row">
            {diyas.map((d) => (
              <Diya key={d.label} {...d} />
            ))}
          </div>
          <div className="hero-meta">
            <span>
              <strong>Graduated 2026</strong> — B.Tech Computer Engineering, Silver Oak University
            </span>
            <span>
              <strong>CGPA</strong> — 9.07 / 10
            </span>
          </div>
        </div>
        <div className="hero-visual" ref={visualRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className="chart-card">
            <div className="top-row">
              <span className="mono">churn_model.accuracy</span>
              <span className="big-num">85%</span>
            </div>
            <svg
              className="chart-svg"
              viewBox="0 0 360 170"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Illustrative chart of model accuracy trending upward"
            >
              <g className="chart-bars" opacity="0.5">
                {[
                  [20, 120, 40, 0.1],
                  [55, 100, 60, 0.2],
                  [90, 80, 80, 0.3],
                  [125, 60, 100, 0.4],
                  [160, 46, 114, 0.5],
                  [195, 34, 126, 0.6],
                  [230, 26, 134, 0.7],
                  [265, 18, 142, 0.8],
                  [300, 10, 150, 0.9],
                ].map(([x, y, h, d], i) => (
                  <rect
                    key={i}
                    x={x}
                    y={y}
                    width="18"
                    height={h}
                    fill="#E2A63B"
                    style={{ animationDelay: `${d}s` }}
                  />
                ))}
              </g>
              <polyline
                className="chart-line"
                points="20,150 55,132 90,108 125,90 160,74 195,60 230,48 265,36 300,24 335,16"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
