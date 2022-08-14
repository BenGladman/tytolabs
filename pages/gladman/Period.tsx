import React from "react";
import styles from "./Period.module.css";

interface DateDisplayProps {
  date: string;
}

function DateDisplay({ date }: DateDisplayProps) {
  const dateMatch = date.match(/^(\d{4})(-\d{2}?)$/);

  if (dateMatch) {
    return (
      <time dateTime={date}>
        {new Date(date).toLocaleString("default", {
          month: dateMatch[2] ? "long" : undefined,
          year: "numeric",
        })}
      </time>
    );
  }

  return <>{date}</>;
}

interface PeriodProps {
  from: string;
  to: string;
  suffix?: string;
}

export function Period({ from, to, suffix }: PeriodProps) {
  return (
    <>
      <span className={styles.period}>
        <DateDisplay date={from} /> → <DateDisplay date={to} />
      </span>
      {suffix && <span className={styles.suffix}> {suffix}</span>}
    </>
  );
}
