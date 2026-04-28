"use client";

import Image from "next/image";

const navLinks = [
  { label: "ABOUT", href: "#" },
  { label: "FAMILY LAW", href: "#" },
  { label: "ESTATE PLANNING", href: "#" },
  { label: "TESTIMONIALS", href: "#" },
  { label: "RESOURCES", href: "#" },
  { label: "CONTACT", href: "#" },
];

export default function Header() {
  return (
    <header
      style={{
        width: "1440px",
        height: "91px",
        backgroundColor: "#16191F",
        borderBottom: "0.94px solid rgba(196, 158, 120, 0.2)",
        paddingTop: "21px",
        paddingBottom: "21px",
        paddingLeft: "100px",
        paddingRight: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        flexShrink: 0,
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <div style={{ flexShrink: 0 }}>
        <Image
          src="/logo.png"
          alt="Deer Designer"
          width={160}
          height={49}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "12px",
              fontWeight: "400",
              letterSpacing: "0.12em",
              color: "#FFFFFF",
              textDecoration: "none",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#C49E78")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#FFFFFF")
            }
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <a
        href="#"
        style={{
          fontFamily: "var(--font-montserrat), sans-serif",
          fontSize: "11px",
          fontWeight: "500",
          letterSpacing: "0.14em",
          color: "#C49E78",
          textTransform: "uppercase",
          textDecoration: "none",
          border: "1px solid #C49E78",
          padding: "12px 20px",
          whiteSpace: "nowrap",
          flexShrink: 0,
          transition: "background-color 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#C49E78";
          e.currentTarget.style.color = "#16191F";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#C49E78";
        }}
      >
        SCHEDULE A CONSULTATION
      </a>
    </header>
  );
}
