import { useEffect, useState } from "react";

export default function Resume() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="resume">
      <div className="wrap">
        <div className="resume-band">
          <div>
            <h3>Want the full picture?</h3>
            <p>Preview or download my resume for a complete breakdown of my skills, projects, and education.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn-ghost" onClick={() => setOpen(true)}>
              Preview resume
            </button>
            <a className="btn btn-primary" href="/resume.pdf" download="Smit_Patel_Resume.pdf">
              Download resume
            </a>
          </div>
        </div>
      </div>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <span className="mono">resume.pdf</span>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <a className="btn btn-ghost" style={{ padding: "7px 14px" }} href="/resume.pdf" download="Smit_Patel_Resume.pdf">
                  Download
                </a>
                <button className="modal-close" aria-label="Close preview" onClick={() => setOpen(false)}>
                  ✕
                </button>
              </div>
            </div>
            <iframe src="/resume.pdf" title="Smit Patel — Resume preview" />
          </div>
        </div>
      )}
    </section>
  );
}