import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© 2026 Smit Patel. Built with data, not templates.</span>
        <div>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          &nbsp;·&nbsp;
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
