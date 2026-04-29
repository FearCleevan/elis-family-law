import Script from "next/script";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import LegalGuidance from "./components/LegalGuidance";
import Certified from "./components/Certified";
import Partners from "./components/Partners";
import Consult from "./components/Consult";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";
import styles from "./page.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Elis Family Law",
  description:
    "Board-certified family law specialists providing divorce, child custody, alimony, and estate planning services in Durham, Raleigh, Cary, and throughout North Carolina.",
  url: "http://elisfamilylaw.vercel.app",
  telephone: "+1-919-626-9148",
  email: "info@elisfamilylaw.com",
  image: "http://elisfamilylaw.vercel.app/images/logo.png",
  logo: "http://elisfamilylaw.vercel.app/images/logo.png",
  priceRange: "$$$",
  foundingDate: "2010",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Durham",
      addressRegion: "NC",
      postalCode: "27707",
      streetAddress: "3511 Shannon Road Suite 150",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Durham",
    addressRegion: "NC",
    postalCode: "27707",
    streetAddress: "3511 Shannon Road Suite 150",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.994,
    longitude: -78.8986,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Durham",
    },
    {
      "@type": "City",
      name: "Raleigh",
    },
    {
      "@type": "City",
      name: "Cary",
    },
    {
      "@type": "City",
      name: "Wake Forest",
    },
    {
      "@type": "City",
      name: "Pittsboro",
    },
    {
      "@type": "State",
      name: "North Carolina",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Family Law Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Divorce & Separation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "High-Asset Divorce",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Child Custody",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Child Support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Division",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Spousal Support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Prenuptial Agreements",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estate Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Domestic Violence",
        },
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/elisfamilylaw",
    "https://www.linkedin.com/company/elisfamilylaw",
    "https://www.youtube.com/@elisfamilylaw",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  member: [
    {
      "@type": "Person",
      name: "Elis Designer",
      jobTitle: "Managing Partner",
      description: "Board-certified family law specialist",
    },
    {
      "@type": "Person",
      name: "Amanda C. Knight",
      jobTitle: "Partner",
      description: "Board-certified family law specialist",
    },
    {
      "@type": "Person",
      name: "Autumn D. Osbourne",
      jobTitle: "Partner",
      description: "Board-certified family law specialist",
    },
  ],
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sarah M.",
      },
      reviewBody:
        "Autumn Osbourne offered top-notch counsel and legal support during a difficult, high-conflict divorce. My family wouldn't be where we are today without her.",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "45",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.wrapper}>
        <TopBar />
        <Header />
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="legal-guidance">
          <LegalGuidance />
        </div>
        <div id="certified">
          <Certified />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="consult">
          <Consult />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <Location />
        </div>
        <Footer />
      </div>
    </>
  );
}