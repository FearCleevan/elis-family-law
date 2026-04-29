const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Elis Family Law, P.L.L.C.",
  "alternateName": "Deer Designer Family Law",
  "description":
    "Board-certified family law specialists serving Durham, Raleigh, Cary, Wake Forest, and throughout North Carolina. Expert representation in divorce, child custody, child support, property division, spousal support, prenuptial agreements, estate planning, and domestic violence.",
  "url": "https://elisfamilylaw.vercel.app",
  "telephone": "+19196269148",
  "priceRange": "$$",
  "image": "https://elisfamilylaw.vercel.app/images/logo.png",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "3511 Shannon Road Suite 150",
      "addressLocality": "Durham",
      "addressRegion": "NC",
      "postalCode": "27707",
      "addressCountry": "US",
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "201 Shannon Oaks Circle Suite 100",
      "addressLocality": "Cary",
      "addressRegion": "NC",
      "postalCode": "27511",
      "addressCountry": "US",
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "1740 Heritage Center Drive Suite 202",
      "addressLocality": "Wake Forest",
      "addressRegion": "NC",
      "postalCode": "27587",
      "addressCountry": "US",
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "27 Hillsboro Street",
      "addressLocality": "Pittsboro",
      "addressRegion": "NC",
      "postalCode": "27312",
      "addressCountry": "US",
    },
  ],
  "areaServed": [
    { "@type": "City", "name": "Durham, NC" },
    { "@type": "City", "name": "Raleigh, NC" },
    { "@type": "City", "name": "Cary, NC" },
    { "@type": "City", "name": "Wake Forest, NC" },
    { "@type": "City", "name": "Pittsboro, NC" },
    { "@type": "State", "name": "North Carolina" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Family Law Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Divorce & Separation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Asset Divorce" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Child Custody" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Child Support" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property Division" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spousal Support" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Prenuptial Agreements" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estate Planning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Domestic Violence Legal Support" } },
    ],
  },
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
