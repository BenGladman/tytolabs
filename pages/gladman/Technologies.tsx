import React from "react";
import tech from "./tech.json";
import styles from "./Technologies.module.css";

interface TechnologiesProps {
  items: Array<keyof typeof tech>;
}

export function Technolgies({ items }: TechnologiesProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          <a
            className={styles.link}
            href={tech[item].href}
            rel="nofollow noopener"
          >
            {tech[item].name}
          </a>
        </li>
      ))}
    </ul>
  );
}
