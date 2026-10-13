import { education, certifications } from "../data/content.js";

function Item({ date, title, sub }) {
  return (
    <div className="tl-item">
      <div className="tl-date">{date}</div>
      <h4>{title}</h4>
      <div className="tl-sub">{sub}</div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head">
          <span className="tag">background</span>
          <h2>Education &amp; certifications</h2>
        </div>
        <div className="timeline">
          <div className="tl-col">
            <h3>education</h3>
            {education.map((e) => (
              <Item key={e.title} {...e} />
            ))}
          </div>
          <div className="tl-col">
            <h3>certifications</h3>
            {certifications.map((c) => (
              <Item key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
