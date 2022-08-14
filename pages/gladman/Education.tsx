import React from "react";
import { Organisation } from "./Organisation";
import { Period } from "./Period";

export function Education() {
  return (
    <article>
      <h3>Education</h3>

      <section>
        <h4>
          <Period from="1995" to="1996" />
          <Organisation
            name="University of Birmingham"
            href="https://www.birmingham.ac.uk/"
            subject="MSc Cognitive Science"
            level="(Distinction)"
          />
        </h4>
        <p>
          Spent middle term at University of Padua, Italy, where I designed and
          carried out a psychology experiment.
        </p>
      </section>

      <section>
        <h4>
          <Period from="1992" to="1995" />
          <Organisation
            name="University of Reading"
            href="http://www.reading.ac.uk/"
            subject="BA (Hons) Philosophy"
            level="(2:1)"
          />
        </h4>
        <p>
          One term spent at Leiden University, Netherlands. Received a 1st for
          my final dissertation on the Philosophy of Science.
        </p>
      </section>
    </article>
  );
}
