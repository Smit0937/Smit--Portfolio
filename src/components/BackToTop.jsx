export default function BackToTop({ show }) {
  return (
    <button
      id="back-to-top"
      className={show ? "show" : ""}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
