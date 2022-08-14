import React from "react";
import { PdfIcon } from "../../components";
import { Education } from "./Education";
import { Experience } from "./Experience";
import pdfPath from "./gladman.pdf";
import styles from "./index.page.module.css";

export function Page() {
  return (
    <main>
      <h2>
        Ben Gladman
        <a
          href={pdfPath}
          className={styles.download}
          download="gladman.pdf"
          title="Download PDF"
        >
          <PdfIcon />
        </a>
      </h2>
      <address>
        <p>
          <a href="mailto:ben.gladman@gmail.com">ben.gladman@gmail.com</a>
        </p>
        <p>London, UK</p>
      </address>

      <Experience />

      <Education />
    </main>
  );
}
