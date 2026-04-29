import Image from "next/image";
import { Fragment } from "react";
import styles from "./Location.module.css";

const offices = [
  { name: "Durham Office",       address: "3511 Shannon Road Suite 150\nDurham, NC, 27707" },
  { name: "Cary Office",         address: "201 Shannon Oaks Circle Suite 100\nCary, NC, 27511" },
  { name: "Wake Forest Office",  address: "1740 Heritage Center Dr. Suite 202\nWake Forest, NC, 27587" },
  { name: "Pittsboro Office",    address: "27 Hillsboro Street\nPittsboro, NC, 27312" },
];

export default function Location() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        {offices.map((office, i) => (
          <Fragment key={office.name}>
            <div className={styles.location}>
              <Image src="/icons/location-icon.png" alt="" width={50} height={50} className={styles.icon} />

              <div className={styles.textBlock}>
                <p className={styles.title}>{office.name}</p>
                <p className={styles.address}>
                  {office.address.split("\n").map((line, j, arr) => (
                    <span key={j}>
                      {line}
                      {j < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>

              <div className={styles.mapWrap}>
                <Image
                  src="/images/location-image.png"
                  alt={`${office.name} map`}
                  width={270}
                  height={150}
                  className={styles.mapImg}
                />
              </div>
            </div>

            {i < offices.length - 1 && <div className={styles.divider} />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
