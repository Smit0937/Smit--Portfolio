import { useState } from "react";
import { profile, gmailComposeUrl } from "../data/content.js";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [noteVisible, setNoteVisible] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${msg}`;
    const url = gmailComposeUrl({ subject: `Portfolio contact from ${name}`, body });
    window.open(url, "_blank", "noopener,noreferrer");
    setNoteVisible(true);
    setTimeout(() => setNoteVisible(false), 4000);
  }

  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div className="contact-left">
          <h2>Let's talk data.</h2>
          <p>
            Open to analyst and data science opportunities, collaborations, and anyone who wants
            to talk about a messy dataset.
          </p>
          <a
            className="contact-link"
            href={gmailComposeUrl({ subject: "Hello Smit" })}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.email}
          </a>
          <div className="social-row">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="f-name">Full name</label>
            <input id="f-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="f-email">Email</label>
            <input
              id="f-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="f-msg">Message</label>
            <textarea id="f-msg" rows="4" required value={msg} onChange={(e) => setMsg(e.target.value)} />
          </div>
          <button className="btn btn-primary" type="submit" style={{ alignSelf: "flex-start" }}>
            Send message
          </button>
          {noteVisible && <span id="form-note" className="mono">Opening Gmail…</span>}
        </form>
      </div>
    </section>
  );
}