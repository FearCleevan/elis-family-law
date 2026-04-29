"use client";

import { useState } from "react";
import styles from "./About.module.css";

type Status = "idle" | "loading" | "success";

const bullets = [
  "Stay up to date on changes in North Carolina law",
  "Get specialist legal insights to your most pressing family law questions",
  "Access exclusive guides and resources you won't find anywhere else",
];

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function About() {
  const [name, setName]     = useState("");
  const [email, setEmail]   = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [status, setStatus] = useState<Status>("idle");

  function clearError(field: "name" | "email") {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    const next: { name?: string; email?: string } = {};
    if (!name.trim())          next.name  = "Please enter your name.";
    if (!validateEmail(email)) next.email = "Please enter a valid email address.";
    if (Object.keys(next).length) { setErrors(next); return; }

    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <section className={styles.section}>
        <div className={styles.frame}>
          <div className={styles.left}>
            <p className={styles.label}>Newsletter Signup</p>
            <h2 className={styles.heading}>
              <em>Ex Files featuring </em>
              <span className={styles.headingGold}>Pour Decisions</span>
            </h2>
          </div>
          <div className={styles.right}>
            <div className={styles.successBanner} role="status">
              <p className={styles.successText}>
                You&apos;re subscribed! Watch your inbox for the first issue.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
          <form onSubmit={handleSubmit} noValidate className={styles.form}>
            <div className={styles.field}>
              <input
                id="about-name"
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => clearError("name")}
                className={`${styles.input}${errors.name ? ` ${styles.inputError}` : ""}`}
                aria-label="Your name"
                aria-describedby={errors.name ? "about-name-error" : undefined}
              />
              {errors.name && (
                <p id="about-name-error" className={styles.errorMsg} role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className={styles.field}>
              <input
                id="about-email"
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => clearError("email")}
                className={`${styles.input}${errors.email ? ` ${styles.inputError}` : ""}`}
                aria-label="Your email"
                aria-describedby={errors.email ? "about-email-error" : undefined}
              />
              {errors.email && (
                <p id="about-email-error" className={styles.errorMsg} role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing…" : "Subscribe Now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
