"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "ABOUT",           href: "#about" },
  { label: "FAMILY LAW",      href: "#legal-guidance" },
  { label: "ESTATE PLANNING", href: "#legal-guidance" },
  { label: "TESTIMONIALS",    href: "#testimonials" },
  { label: "RESOURCES",       href: "#" },
  { label: "CONTACT",         href: "#contact" },
];

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => setOpen((v) => !v);
  const close  = () => setOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <Image
          src="/images/logo.png"
          alt="Deer Designer Family Law"
          width={160}
          height={49}
          priority
          className={styles.logo}
        />

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.cta}>SCHEDULE A CONSULTATION</a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open ? "true" : "false"}
          className={`${styles.hamburger} ${open ? styles.open : ""}`}
          onClick={toggle}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </header>

      <div
        className={`${styles.drawer} ${open ? styles.open : ""}`}
        aria-hidden={open ? "false" : "true"}
      >
        <div className={styles.drawerBackdrop} onClick={close} aria-hidden="true" />
        <div className={styles.drawerPanel}>
          <nav className={styles.drawerNav}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.drawerLink}
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className={styles.drawerCta} onClick={close}>
            SCHEDULE A CONSULTATION
          </a>
        </div>
      </div>
    </>
  );
}
