import Image from "next/image";
import styles from "./Partners.module.css";

const partners = [
  { name: "Deer Designer",       role: "Managing Partner", image: "/team/deer-designer.png" },
  { name: "Amanda C. Knight",    role: "Partner",          image: "/team/amanda-knight.png" },
  { name: "Autumn D. Osbourne",  role: "Partner",          image: "/team/autumn-osbourne.png" },
];

export default function Partners() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>

        <div className={styles.header}>
          <h2 className={styles.heading}>
            <em>Meet Our Partners</em>
          </h2>
          <p className={styles.subtitle}>
            Our team of board-certified family law specialists is dedicated to
            providing you with expert guidance and compassionate representation
            during life&apos;s most challenging moments.
          </p>
        </div>

        <div className={styles.cards}>
          {partners.map((p) => (
            <div key={p.name} className={styles.card}>
              <Image src={p.image} alt={p.name} fill className={styles.cardImg} />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <p className={styles.cardName}>{p.name}</p>
                <p className={styles.cardRole}>{p.role}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#partners" className={styles.btn}>
          Meet All Attorneys
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.btnArrow}>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

      </div>
    </section>
  );
}
