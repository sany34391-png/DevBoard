"use client";
import { useState } from "react";
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

  return (
    <header className={styles.header}>
      <div className={styles.headerIMG}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="DevBoard"
            width={28}
            height={28}
          />
        </Link>
      </div>
      <div className={styles.navigation}>
        <h2>DevBoard</h2>
        <div className={styles.navLinks}>
          <Link href="/features">Features</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </header>
  );
}