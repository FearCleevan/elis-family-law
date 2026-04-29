import styles from "./LegalGuidance.module.css";
import Image from "next/image";

const cards = [
  { icon: "/legal/divorce-separation.png",    title: "Divorce & Separation",     body: "Steady, strategic guidance through divorce, with a focus on protecting your future at every stage.",                                              href: "#legal-guidance" },
  { icon: "/legal/high-asset-divorce.png",    title: "High-Asset Divorce",        body: "Sophisticated representation for divorces involving substantial assets, complex portfolios, or long-term financial interests.",                    href: "#legal-guidance" },
  { icon: "/legal/child-custody.png",         title: "Child Custody",             body: "Thoughtful advocacy for parenting arrangements that protect your children's wellbeing and your future role.",                                      href: "#legal-guidance" },
  { icon: "/legal/child-support.png",         title: "Child Support",             body: "Clear, informed guidance on establishing, modifying, and enforcing child support with care and precision.",                                        href: "#legal-guidance" },
  { icon: "/legal/property-division.png",     title: "Property Division",         body: "Strategic counsel for dividing assets and debts in a way that safeguards your financial future.",                                                  href: "#legal-guidance" },
  { icon: "/legal/spousal-support.png",       title: "Spousal Support",           body: "Experienced representation in alimony matters involving lifestyle, earning capacity, and long-term stability.",                                    href: "#legal-guidance" },
  { icon: "/legal/prenuptial-agreements.png", title: "Prenuptial Agreements",     body: "Carefully crafted agreements designed to protect assets, clarify expectations, and support peace of mind.",                                        href: "#legal-guidance" },
  { icon: "/legal/estate-planning.png",       title: "Estate Planning",           body: "Personalized estate planning services to help you protect your wishes, your assets, and the people you love.",                                    href: "#legal-guidance" },
  { icon: "/legal/domestic-violence.png",     title: "Domestic Violence",         body: "Compassionate, decisive legal support focused on your safety, stability, and next steps with care.",                                              href: "#legal-guidance" },
];

export default function LegalGuidance() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.label}>Deer Designer Family Practice Areas</p>
        <h2 className={styles.heading}>
          <em>Legal Guidance For Every Step Forward</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <Image src={card.icon} alt={card.title} width={56} height={40} className={styles.icon} />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardBody}>{card.body}</p>
            <a href={card.href} className={styles.learnMore}>
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={styles.arrowIcon}>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
