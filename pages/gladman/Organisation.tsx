import React from "react";
import styles from "./Organisation.module.css";

interface OrganisationProps {
  name: string;
  href?: string;
  role?: string;
  subject?: string;
  level?: string;
}

export function Organisation({
  name,
  href,
  role,
  subject,
  level,
}: OrganisationProps) {
  return (
    <>
      <br />

      {href ? (
        <a className={styles.organisation} href={href}>
          {name}
        </a>
      ) : (
        name
      )}

      <span className={styles.bullet}>▪</span>

      {role && <span className={styles.role}>{role}</span>}

      {subject && <span className={styles.subject}>{subject}</span>}

      {level && (
        <>
          <br />
          <span className={styles.level}>{level}</span>
        </>
      )}
    </>
  );
}
