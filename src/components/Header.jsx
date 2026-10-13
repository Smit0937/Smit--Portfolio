import { useState } from "react";

const links = [
  { id: "projects", label: "projects" },
  { id: "about", label: "about" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];

export default function Header({ active, theme, onToggleTheme, progress }) {
  const [open, setOpen] = useState(false);

  const themeIcon = theme === "light" ? "☀" : theme === "dark" ? "☾" : "◐";

  return (
    <header>
      <div id="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="nav">
        <a className="brand" href="#top">
          Smit<span>.</span>Patel
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "active" : ""}>
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a className="nav-cta" href="#contact">
            get in touch
          </a>
          <button id="theme-toggle" aria-label="Toggle color theme" onClick={onToggleTheme}>
            {themeIcon}
          </button>
          <button
            className="menu-btn"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            ≡
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
