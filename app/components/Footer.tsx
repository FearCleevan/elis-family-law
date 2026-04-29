import Image from "next/image";
import styles from "./Footer.module.css";

const quickLinks: { label: string; href: string }[] = [
  { label: "About Us",                href: "#about" },
  { label: "Blog",                    href: "#" },
  { label: "Testimonials",            href: "#testimonials" },
  { label: "Resources",               href: "#" },
  { label: "Contact",                 href: "#contact" },
  { label: "Schedule a Consultation", href: "#contact" },
];

const familyLaw: { label: string; href: string }[] = [
  { label: "Divorce",                 href: "#legal-guidance" },
  { label: "High-Asset Divorce",      href: "#legal-guidance" },
  { label: "Child Custody",           href: "#legal-guidance" },
  { label: "Child Support",           href: "#legal-guidance" },
  { label: "Property Division",       href: "#legal-guidance" },
  { label: "Spousal Support",         href: "#legal-guidance" },
  { label: "Prenuptial Agreements",   href: "#legal-guidance" },
  { label: "Domestic Violence",       href: "#legal-guidance" },
];

const estatePlanning: { label: string; href: string }[] = [
  { label: "Will and Trust",          href: "#legal-guidance" },
  { label: "Power of Attorney",       href: "#legal-guidance" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.frame}>

        <div className={styles.topRow}>
          <div className={styles.brand}>
            <Image src="/images/deer-logo.png" alt="Deer Designer Family Law" width={130} height={130} className={styles.logo} />
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <Image src="/icons/facebook.png" alt="Facebook" width={28} height={28} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={28} height={28} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <Image src="/icons/youtube.png" alt="YouTube" width={28} height={28} />
              </a>
            </div>
          </div>

          <div className={styles.navColumns}>
            <div className={styles.navCol}>
              <p className={styles.colTitle}>Quick Links</p>
              <ul className={styles.colList}>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.colLink}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.navCol}>
              <p className={styles.colTitle}>Family Law</p>
              <ul className={styles.colList}>
                {familyLaw.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.colLink}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.navCol}>
              <p className={styles.colTitle}>Estate Planning</p>
              <ul className={styles.colList}>
                {estatePlanning.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.colLink}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <a href="#" className={styles.bottomLink}>Disclaimer</a>
          </div>
          <p className={styles.bottomCenter}>© Deer Designer Family Law, P.L.L.C.</p>
          <p className={styles.bottomRight}>Designed by Second Click Media</p>
        </div>

      </div>
    </footer>
  );
}
