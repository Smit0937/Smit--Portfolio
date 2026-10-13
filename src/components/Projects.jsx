import { projects } from "../data/content.js";
import Sparkline from "./Sparkline.jsx";

function handleMove(e) {
  const row = e.currentTarget;
  const rect = row.getBoundingClientRect();
  row.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  row.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C3.58 0 0 3.65 0 8.15c0 3.6 2.29 6.65 5.47 7.73.4.08.55-.17.55-.39 0-.19-.01-.82-.01-1.49-2.01.38-2.53-.5-2.69-.95-.09-.23-.48-.95-.82-1.14-.28-.15-.68-.52-.01-.53.63-.01 1.08.59 1.23.83.72 1.23 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.91-3.64-4.02 0-.89.31-1.62.82-2.19-.08-.2-.36-1.03.08-2.15 0 0 .67-.22 2.2.84a7.4 7.4 0 0 1 4 0c1.53-1.06 2.2-.84 2.2-.84.44 1.12.16 1.95.08 2.15.51.57.82 1.29.82 2.19 0 3.12-1.87 3.81-3.65 4.02.29.25.54.74.54 1.5 0 1.09-.01 1.96-.01 2.23 0 .22.15.48.55.39A8.17 8.17 0 0 0 16 8.15C16 3.65 12.42 0 8 0z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="tag">selected work</span>
          <h2>Projects</h2>
          <p>
            Four projects spanning prediction models, interactive dashboards, and exploratory
            analysis on real-world datasets.
          </p>
        </div>
        <div className="proj-list">
          {projects.map((p) => (
            <div className="proj-row spotlight" key={p.title} onMouseMove={handleMove}>
              <div className="p-date mono">{p.date.toLowerCase()}</div>
              <div>
                <h3>
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      {p.title}
                      <GithubIcon />
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p>{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="proj-metric">
                <Sparkline points={p.trend} />
                <b>{p.metric.value}</b>
                <span>{p.metric.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}