export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-card">
            <img className="profile-photo" src="/profile.jpeg" alt="Smit Patel" />
            <h4>Smit Patel</h4>
            <div className="role">Data Analyst · Aspiring Data Scientist</div>
            <div className="lang-row">
              <span className="pill">English</span>
              <span className="pill">Gujarati</span>
              <span className="pill">Hindi</span>
            </div>
          </div>
          <div className="about-text">
            <span className="section-head tag" style={{ marginBottom: 14, display: "block" }}>
              about
            </span>
            <p>
              I'm a Computer Engineering graduate from Silver Oak University, Ahmedabad, with a
              strong foundation in SQL, Python, Excel, and Power BI. I like taking a dataset
              nobody has looked at closely yet — customer records, sales logs, patient data — and
              finding the pattern that actually changes a decision.
            </p>
            <p>
              Most of my work sits at the intersection of analysis and communication: cleaning
              and modelling the data is only half the job, the other half is building a dashboard
              or app that makes the finding obvious to someone who wasn't in the weeds with me.
            </p>
            <p>
              I'm currently deepening my machine learning practice and building toward
              graduate-level data science work, while staying hands-on with real datasets through
              self-directed projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
