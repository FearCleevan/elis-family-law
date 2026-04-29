import styles from "./About.module.css";

const bullets = [
  "Stay up to date on changes in North Carolina law",
  "Get specialist legal insights to your most pressing family law questions",
  "Access exclusive guides and resources you won't find anywhere else",
];

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>
      {/* ── Left: content ── */}
      <div className={styles.left}>
        <p className={styles.label}>Newsletter Signup</p>

        <h2 className={styles.heading}>
          <em>Ex Files featuring </em>
          <span className={styles.headingGold}>Pour Decisions</span>
        </h2>

        <ul className={styles.bullets}>
          {bullets.map((text) => (
            <li key={text} className={styles.bulletItem}>
              <span className={styles.bulletDot}>•</span>
              {text}
            </li>
          ))}
        </ul>

        <p className={styles.note}>
          And for a fun twist: don&apos;t miss our &ldquo;Pour Decisions&rdquo; section,
          featuring wine tips from our lawyer-wine specialist Deer Designer!
        </p>
      </div>

      {/* ── Right: form ── */}
      <div className={styles.right}>
        <input
          type="text"
          placeholder="Enter your Name"
          className={styles.input}
          aria-label="Your name"
        />
        <input
          type="email"
          placeholder="Enter your Email"
          className={styles.input}
          aria-label="Your email"
        />
        <button type="submit" className={styles.submitBtn}>
          Subscribe Now
        </button>
      </div>
      </div>
    </section>
  );
}
