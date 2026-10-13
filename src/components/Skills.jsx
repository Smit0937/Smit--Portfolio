import { expertise } from "../data/content.js";

function handleMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  card.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

function Icon({ path, circle }) {
  if (path === "bars") {
    return (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="10" width="4" height="10" />
        <rect x="10" y="5" width="4" height="15" />
        <rect x="16" y="13" width="4" height="7" />
      </svg>
    );
  }
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      {circle && <circle cx="12" cy="12" r="3" />}
      <path d={path} />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <span className="tag">technical expertise</span>
          <h2>What I work with</h2>
        </div>
        <div className="grid-4">
          {expertise.map((item) => (
            <div className="exp-card spotlight" key={item.title} onMouseMove={handleMove}>
              <Icon path={item.icon} circle={item.circle} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
