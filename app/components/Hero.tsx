import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero-bg.png"
        alt="Family walking in nature"
        fill
        priority
        sizes="100vw"
        quality={85}
        className={styles.heroBg}
      />

      <div className={styles.overlay} />

      <div className={styles.vectorLeft}>
        <Image
          src="/images/vector-left.png"
          alt=""
          fill
          sizes="(max-width: 1023px) 0px, 700px"  // Add this
          className={styles.vectorImg}
        />
      </div>

      <div className={styles.vectorRight}>
        <Image
          src="/images/vector-right.png"
          alt=""
          fill
          sizes="(max-width: 1023px) 0px, 700px"  // Add this
          className={styles.vectorImg}
        />
      </div>

      <div className={styles.card}>
        <h1 className={styles.heading}>
          <em className={styles.headingItalic}>Your Future</em>{" "}
          <span className={styles.headingGold}>Starts Here</span>
        </h1>

        <p className={styles.subtext}>
          Divorce &amp; Family Law Attorneys Serving Durham, Raleigh, Cary, the Triangle,
          and Throughout North Carolina.
        </p>

        <div className={styles.divider}>
          <svg className={styles.dividerStar} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
          </svg>
          <span className={styles.dividerLabel}>Led by Board Certified Specialists in Family Law</span>
          <svg className={styles.dividerStar} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
          </svg>
        </div>

        <div className={styles.buttons}>
          <a href="tel:9196269148" className={styles.btnPrimary}>
            CALL NOW
            <svg className={styles.btnArrow} viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className={styles.btnOutline}>SCHEDULE A CONSULTATION</a>
        </div>
      </div>
    </section>
  );
}
