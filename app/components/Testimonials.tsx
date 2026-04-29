"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";

const tabs = ["Family", "Divorce", "Child Custody", "Domestic Violence"];

const testimonials: Record<string, { quote: string; name: string; role: string; initials: string }[]> = {
  Family: [
    {
      quote: "Autumn Osbourne offered top-notch counsel and legal support during a difficult, high-conflict divorce. My family wouldn't be where we are today without her. The entire Deer Designer Family Law team consistently goes above and beyond for their clients. I can't recommend Autumn and Deer Designer Family Law enough.",
      name: "Sarah M.", role: "Family Law Client", initials: "SM",
    },
    {
      quote: "We highly recommend the legal services of attorney Buckley. Attorney Buckley has represented us in a very difficult family issue and we have been more than satisfied. The firm is extremely knowledgeable about family law and has consistently conducted themselves with the utmost professionalism.",
      name: "James R.", role: "Family Law Client", initials: "JR",
    },
  ],
  Divorce: [
    {
      quote: "My divorce was complicated, but the attorneys here made sure I was protected at every turn. I felt heard, valued, and well-represented throughout.",
      name: "Linda K.", role: "Divorce Client", initials: "LK",
    },
    {
      quote: "From the first consultation to the final resolution, the professionalism and empathy I experienced were second to none. Highly recommend.",
      name: "David T.", role: "Divorce Client", initials: "DT",
    },
  ],
  "Child Custody": [
    {
      quote: "They helped me secure the custody arrangement that was truly best for my children. I am forever grateful for their dedication and expertise.",
      name: "Monica A.", role: "Child Custody Client", initials: "MA",
    },
    {
      quote: "Navigating custody was overwhelming, but this firm kept me informed and confident. The outcome was better than I ever hoped for.",
      name: "Brian S.", role: "Child Custody Client", initials: "BS",
    },
  ],
  "Domestic Violence": [
    {
      quote: "They helped me find safety and legal protection when I needed it most. Their compassion and swift action made all the difference in my life.",
      name: "Rachel P.", role: "Domestic Violence Client", initials: "RP",
    },
    {
      quote: "The firm treated my case with the urgency and sensitivity it required. I finally felt safe knowing I had such capable advocates in my corner.",
      name: "Christine W.", role: "Domestic Violence Client", initials: "CW",
    },
  ],
};

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("Family");
  const cards = testimonials[activeTab];

  return (
    <section className={styles.section}>
      <div className={styles.frame}>

        <div className={styles.titleBlock}>
          <p className={styles.label}>Testimonials</p>
          <h2 className={styles.heading}>
            <em>Hear What Our Clients Have to Say</em>
          </h2>
        </div>

        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`${styles.chip} ${activeTab === tab ? styles.chipActive : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.cards}>
          {cards.map((t) => (
            <div key={t.name} className={styles.card}>
              <Image src="/icons/testimonial-icon.png" alt="" width={45} height={45} className={styles.quoteIcon} />
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.profile}>
                <div className={styles.avatar}>
                  <span className={styles.avatarInitials}>{t.initials}</span>
                </div>
                <div className={styles.profileInfo}>
                  <p className={styles.profileName}>{t.name}</p>
                  <p className={styles.profileRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              aria-label={tab}
              className={`${styles.dot} ${activeTab === tab ? styles.dotActive : ""}`}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        <a href="#" className={styles.btn}>
          Read More Testimonials
          <Image src="/icons/black-arrow-icon.png" alt="" width={16} height={16} className={styles.btnArrow} />
        </a>

      </div>
    </section>
  );
}
