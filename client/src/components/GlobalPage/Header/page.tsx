"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

const navigationItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDarkTheme = savedTheme === "dark" || (!savedTheme && prefersDarkTheme);

    setIsDarkTheme(shouldUseDarkTheme);
    document.documentElement.dataset.theme = shouldUseDarkTheme ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const nextTheme = isDarkTheme ? "light" : "dark";

    setIsDarkTheme(!isDarkTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  }
  return (
    <div className={styles.headerContainer}>
      <header
        className={`${styles.SAMSAheader} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="DevBoard"
              width={30}
              height={30}
            />
          </Link>
          <h2 className={styles.logoText}>DevBoard</h2>
        </div>
        <nav className={styles.navLinksSAMSA}>
          <Link href="/features">Features</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className={styles.StartSAMSA}>
          <button
            className={styles.themeButton}
            type="button"
            aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={isDarkTheme}
            onClick={toggleTheme}>
            <span className={styles.themeIcon} aria-hidden="true">
              {isDarkTheme ? "☀" : "☾"}
            </span>
          </button>

          <Link className={styles.StartLogin} href="/Login">
            Login
          </Link>

          <Link className={styles.StartButton} href="/Get Started">
            Get Started
          </Link>
        </div>
      </header>
      <button
        className={styles.menuButton}
        type="button"
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen) }
        aria-label="Открыть меню"
        aria-expanded={isMenuOpen}>
        &#9776;
      </button>
      <header className={styles.header}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="DevBoard"
              width={30}
              height={30}
            />
          </Link>

          <h2 className={styles.logoText}>DevBoard</h2>
        </div>

        <nav className={styles.navLinks}>
          <Link href="/features">Features</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className={styles.StartSAMSA}>
          <button
            className={styles.themeButtonSAMSA}
            type="button"
            aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={isDarkTheme}
            onClick={toggleTheme}
          >
            <span className={styles.themeIcon} aria-hidden="true">
              {isDarkTheme ? "☀" : "☾"}
            </span>
          </button>

          <Link className={styles.StartLogin} href="/Login">
            Login
          </Link>

          <Link className={styles.StartButton} href="/Get Started">
            Get Started
          </Link>
        </div>
      </header>
    </div>
  );
}