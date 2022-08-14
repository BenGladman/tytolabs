import React from "react";
import logoUrl from "./tyto.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={logoUrl} alt="Tyto Logo" />
      </a>
      <h1>Tyto Labs</h1>
      <em className={styles.tag}>Software design and development</em>
    </header>
  );
}
