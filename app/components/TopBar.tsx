"use client";

export default function TopBar() {
  return (
    <div
      style={{
        width: "1440px",
        height: "40px",
        backgroundColor: "#12161E",
        borderBottom: "0.94px solid rgba(196, 158, 120, 0.2)",
        paddingTop: "6px",
        paddingBottom: "6px",
        paddingLeft: "100px",
        paddingRight: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        flexShrink: 0,
      }}
    >
      {/* Social Icons - Left */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Facebook */}
        <a
          href="#"
          aria-label="Facebook"
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "1px solid rgba(196, 158, 120, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#C49E78",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <svg width="10" height="12" viewBox="0 0 10 18" fill="none">
            <path
              d="M6.5 6H8.5L8 9H6.5V18H3.5V9H2V6H3.5V4.5C3.5 2.5 4.5 1 7 1H9V4H7.5C6.9 4 6.5 4.4 6.5 5V6Z"
              fill="#C49E78"
            />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          aria-label="LinkedIn"
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "1px solid rgba(196, 158, 120, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#C49E78",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
            <path
              d="M1.5 0C0.67 0 0 0.67 0 1.5C0 2.33 0.67 3 1.5 3C2.33 3 3 2.33 3 1.5C3 0.67 2.33 0 1.5 0ZM0 4.5H3V14H0V4.5ZM5 4.5H7.5V5.8C7.9 5.1 8.9 4.3 10.5 4.3C13 4.3 14 5.8 14 8.3V14H11V8.8C11 7.5 10.5 6.8 9.5 6.8C8.3 6.8 7.5 7.6 7.5 9V14H5V4.5Z"
              fill="#C49E78"
            />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="#"
          aria-label="YouTube"
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "1px solid rgba(196, 158, 120, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#C49E78",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <svg width="12" height="9" viewBox="0 0 16 12" fill="none">
            <path
              d="M15.4 1.8C15.2 1.1 14.7 0.5 14 0.3C12.8 0 8 0 8 0C8 0 3.2 0 2 0.3C1.3 0.5 0.8 1.1 0.6 1.8C0.3 3 0.3 6 0.3 6C0.3 6 0.3 9 0.6 10.2C0.8 10.9 1.3 11.5 2 11.7C3.2 12 8 12 8 12C8 12 12.8 12 14 11.7C14.7 11.5 15.2 10.9 15.4 10.2C15.7 9 15.7 6 15.7 6C15.7 6 15.7 3 15.4 1.8ZM6.5 8.5V3.5L10.5 6L6.5 8.5Z"
              fill="#C49E78"
            />
          </svg>
        </a>
      </div>

      {/* Phone Number - Right */}
      <div
        style={{
          fontFamily: "var(--font-montserrat), sans-serif",
          fontSize: "12px",
          fontWeight: "500",
          letterSpacing: "0.12em",
          color: "#C49E78",
          textTransform: "uppercase",
        }}
      >
        CALL 919-626-9148
      </div>
    </div>
  );
}
