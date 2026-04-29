import Image from "next/image";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.socials}>
        <a href="#" aria-label="Facebook" className={styles.socialIcon}>
          <Image src="/icons/facebook.png" alt="Facebook" width={28} height={28} />
        </a>
        <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
          <Image src="/icons/linkedin.png" alt="LinkedIn" width={28} height={28} />
        </a>
        <a href="#" aria-label="YouTube" className={styles.socialIcon}>
          <Image src="/icons/youtube.png" alt="YouTube" width={28} height={28} />
        </a>
      </div>

      <span className={styles.phone}>
        <span className={styles.phoneCall}>CALL&nbsp;</span>
        <span className={styles.phoneNumber}>919-626-9148</span>
      </span>
    </div>
  );
}
