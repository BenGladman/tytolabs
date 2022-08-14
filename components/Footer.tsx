import React from "react";
import { EmailIcon } from "./EmailIcon";
import styles from "./Footer.module.css";
import { GitHubIcon } from "./GitHubIcon";
import { LinkedInIcon } from "./LinkedInIcon";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.links}>
        <a href="https://github.com/BenGladman" title="GitHub">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/ben-gladman/" title="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href="mailto:ben.gladman@gmail.com" title="email">
          <EmailIcon />
        </a>
      </p>
      <p className={styles.registration}>Company number 13523740</p>
    </footer>
  );
}
