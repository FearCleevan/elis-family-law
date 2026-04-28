"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        width: "1440px",
        height: "693px",
        backgroundColor: "#16191F",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Vector Left */}
      <div
        style={{
          position: "absolute",
          width: "981px",
          height: "971px",
          top: "-168.06px",
          left: "-784px",
          transform: "rotate(90deg)",
          opacity: 1,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/vector-left.png"
          alt=""
          fill
          style={{
            objectFit: "contain",
            filter:
              "sepia(1) saturate(0.3) brightness(0.85) hue-rotate(10deg)",
            opacity: 0.2,
          }}
        />
      </div>

      {/* Vector Right */}
      <div
        style={{
          position: "absolute",
          width: "981px",
          height: "971px",
          top: "-159.06px",
          left: "1288px",
          transform: "rotate(-90deg)",
          opacity: 1,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/vector-right.png"
          alt=""
          fill
          style={{
            objectFit: "contain",
            filter:
              "sepia(1) saturate(0.3) brightness(0.85) hue-rotate(10deg)",
            opacity: 0.2,
          }}
        />
      </div>

      {/* Hero Overlay Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "1438px",
          height: "694px",
          top: "-0.06px",
          background:
            "linear-gradient(180deg, rgba(22, 25, 31, 0.8) 0%, rgba(22, 25, 31, 0.4) 50%, #16191F 100%)",
          zIndex: 1,
        }}
      />

      {/* Hero Content — "Your Future Starts Here" Container */}
      <div
        style={{
          position: "absolute",
          width: "870px",
          height: "391px",
          top: "150.94px",
          left: "285px",
          zIndex: 2,
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.071)",
          border: "1px solid rgba(255, 255, 255, 0.102)",
          boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
          padding: "49px 47px",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "64px",
            fontWeight: "400",
            lineHeight: "1.1",
            color: "#FFFFFF",
            margin: "0 0 16px 0",
            letterSpacing: "-0.01em",
          }}
        >
          Your Future{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "#C49E78",
            }}
          >
            Starts Here
          </em>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.75)",
            margin: "0 0 8px 0",
            letterSpacing: "0.02em",
            maxWidth: "560px",
          }}
        >
          Divorce & Family Law Attorneys Serving Durham, Raleigh, Cary, the Triangle,
          and Throughout North Carolina.
        </p>

        {/* Divider tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "8px 0 24px",
          }}
        >
          <div style={{ height: "1px", width: "48px", backgroundColor: "rgba(196,158,120,0.4)" }} />
          <span
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "rgba(196,158,120,0.7)",
              textTransform: "uppercase",
            }}
          >
            BOARD CERTIFIED SPECIALIZATION
          </span>
          <div style={{ height: "1px", width: "48px", backgroundColor: "rgba(196,158,120,0.4)" }} />
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "11px",
              fontWeight: "500",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#16191F",
              backgroundColor: "#C49E78",
              padding: "13px 28px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            CALL NOW
          </a>

          <a
            href="#"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "11px",
              fontWeight: "500",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#C49E78",
              border: "1px solid #C49E78",
              padding: "12px 28px",
              textDecoration: "none",
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
        </div>
      </div>
    </section>
  );
}
