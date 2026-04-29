import Image from "next/image";
import { Fragment } from "react";
import styles from "./Consult.module.css";

const steps = [
  { num: "01", label: "Consult" },
  { num: "02", label: "Match" },
  { num: "03", label: "Advocate" },
];

export default function Consult() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>

        <h2 className={styles.heading}>
          <em>Close Attention To What You Need</em>
        </h2>

        <div className={styles.flow}>
          {steps.map((step, i) => (
            <Fragment key={step.num}>
              <div className={styles.step}>
                <div className={styles.circle}>
                  <span className={styles.circleNum}>{step.num}</span>
                </div>
                <span className={styles.stepLabel}>{step.label}</span>
              </div>

              {i < steps.length - 1 && (
                <Image
                  src="/icons/arrow-right.png"
                  alt=""
                  width={60}
                  height={16}
                  className={styles.arrow}
                />
              )}
            </Fragment>
          ))}
        </div>

        <div className={styles.details}>
          <p className={styles.body}>
            When you have your first consultation with our firm, you will personally speak with Deer Designer
            or another senior level attorney to tell your story. From there, you will work with one lawyer for
            the duration of your case. You will not get passed to a junior associate or be lost in the shuffle.
          </p>
          <p className={styles.body}>
            We take care to match you with the attorney at our firm who can be of the most help in your unique
            situation. We respect that this is your life, and what happens now can have cascading effects in the
            future. We aim to ensure that you can face the future from a position of strength and hope.
          </p>
          <a href="#about" className={styles.btn}>
            Learn More About Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.btnArrow}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
