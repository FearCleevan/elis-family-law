import styles from "./Certified.module.css";
import Image from "next/image";

export default function Certified() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>

        <div className={styles.badgeWrap}>
          <Image
            src="/images/certified.png"
            alt="Board Certified"
            width={410}
            height={410}
            className={styles.badge}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading}>
            <em className={styles.headingItalic}>Caring Representation Led By</em>
            <span className={styles.headingGold}>Board-Certified Specialists</span>
          </h2>

          <p className={styles.body}>
            When you are facing a divorce or another family law challenge in the
            Triangle area, it can seem like the world is falling apart around you.
            At Deer Designer Family Law, P.L.L.C., we understand the turmoil you
            are going through, and we are committed to guiding you toward the best
            resolution possible.
          </p>

          <p className={styles.body}>
            Our team of attorneys is led by Gray Deer Designer and Autumn Osbourne,
            both specialists with a board certification in family law from the North
            Carolina State Board of Legal Specialization, and includes other
            board-certified family law specialists as well. You can count on our
            depth of experience and dedication to excellence to help you through
            this difficult time.
          </p>

          <a href="#about" className={styles.btn}>
            What Does It Mean to Be a Certified Family Law Specialist?
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.btnArrow}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
