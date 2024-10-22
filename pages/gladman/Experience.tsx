import React from "react";
import { Organisation } from "./Organisation";
import { Period } from "./Period";
import { Technolgies } from "./Technologies";

export function Experience() {
  return (
    <article>
      <section>
        <h4>
          <Period from="2021-08" to="2024-06" suffix="(Contract)" />
          <Organisation
            name="Standard Bots"
            href="https://standardbots.com/"
            role="Full Stack Developer"
          />
        </h4>
        <Technolgies
          items={[
            "react",
            "three",
            "r3f",
            "docker",
            "ts",
            "node",
            "postgres",
            "feathers",
            "next",
            "vite",
            "webrtc",
            "gha",
          ]}
        />
        <p>
          Developing the control systems and programming environment for a robot
          arm used for industrial automation.
        </p>
        <ul>
          <li>
            <em>Visualization</em> – using Three.js to visualize the state of
            the robot arm and its environment.
          </li>
          <li>
            <em>Integration</em> – developing the Node.js backend to integrate
            with the robot arm and linked devices, to run routines and ad-hoc
            commands.
          </li>
          <li>
            <em>Simulation</em> – implementing hardware and communication
            simulations of the robot arm and linked devices in Node.js for use
            in testing and development.
          </li>
          <li>
            <em>Routine Editor</em> – creating an approachable no-code/low-code
            interface for less technical users to be able to program the robot.
          </li>
          <li>
            <em>Migration to self-hosted</em> – migrated away from Firebase to a
            fully self-hosted solution using PostgreSQL and FeathersJS.
          </li>
        </ul>
      </section>

      <section>
        <h4>
          <Period from="2020-05" to="2021-04" suffix="(Contract)" />
          <Organisation
            name="HSBC"
            href="https://www.hsbc.com/"
            role="Front End Developer"
          />
        </h4>
        <Technolgies
          items={[
            "electron",
            "js",
            "ts",
            "rxjs",
            "webdriver",
            "cssmodules",
            "storybook",
            "teamcity",
          ]}
        />
        <p>
          Front end development in the core team for the trading and risk
          platform used by several lines of business within the bank.
        </p>
        <ul>
          <li>
            <em>New Application Shell</em> – rewrite of the layout engine and
            service adapters from an older framework into React and RxJS, to
            improve maintainability. The shell is highly configurable, allowing
            the user to add, remove and rearrange tens of components across
            multiple tabs and nested layouts in an intuitive way.
          </li>
          <li>
            <em>Modernising the codebase</em> – by introducing Jest, Storybook,
            TypeScript and CSS Modules, and carrying out a complex upgrade of
            WebdriverIO.
          </li>
          <li>
            <em>Theming</em> – added theming capability on top of extensive
            existing CSS, using CSS custom properties.
          </li>
        </ul>
      </section>

      <section>
        <h4>
          <Period from="2018-06" to="2020-03" />
          <Organisation
            name="Adaptive Financial Consulting"
            href="https://weareadaptive.com/"
            role="Front End Developer"
          />
        </h4>
        <Technolgies
          items={[
            "ts",
            "react",
            "redux",
            "reduxobservable",
            "rxjs",
            "selenium",
            "cypress",
            "styledcomponents",
            "emotion",
            "storybook",
            "jenkins",
          ]}
        />
        <p>
          Front end development on highly dynamic and interactive financial web
          applications.
        </p>
        <ul>
          <li>
            <em>FX orders</em> – module integrating into the trading platform at
            a tier 1 investment bank. Working on client site in a mixed product
            development team of consultants and direct employees. Components
            included the order blotter and single and multileg order tickets
            with live ticking prices and fills. The tickets need to update
            efficiently so that the application can show up to 25
            simultaneously.
          </li>
          <li>
            <em>Cryptocurrency exchange</em> – web client for private and
            institutional investors. Responsive design usable on desktop and
            mobile devices. With chart, order blotter, trade feed, order book
            and order ticket. The trade feed and order book were designed to
            cope with 100ms update frequency.
          </li>
          <li>
            <em>Basket trading</em> – application for a tier 1 investment bank,
            with unlimited scrolling workspace and blotter with expandable
            nested rows, ticking prices and fills.
          </li>
        </ul>
      </section>

      <section>
        <h4>
          <Period from="2016-09" to="2018-06" />
          <Organisation
            name="Trussle"
            href="https://www.trussle.com/"
            role="Full Stack Developer"
          />
        </h4>
        <Technolgies
          items={[
            "js",
            "node",
            "postgres",
            "ts",
            "react",
            "next",
            "angularjs",
            "sass",
            "cssmodules",
            "aws",
            "k8s",
            "openapi",
            "jenkins",
          ]}
        />
        <p>
          Full stack development of customer facing and back office software in
          a startup online mortgage brokerage. I introduced TypeScript, Webpack,
          React and Swagger into the development stack.
        </p>
        <ul>
          <li>
            <em>Customer Website</em> – developed a new on-boarding application
            using Next.js and implemented OAuth 2 sign-in using Passport.js.
          </li>
          <li>
            <em>AWS Lambda</em> – process to match 1,000s of customer details
            with 10,000s of remortgage deals.
          </li>
          <li>
            <em>Back Office System</em> – started the shift from server rendered
            views to using React to allow more complex UI and implemented client
            side Typescript.
          </li>
          <li>
            <em>Back End</em> – migrated the database from MongoDB to PostgreSQL
            and implemented a reporting schema.
          </li>
        </ul>
      </section>

      <section>
        <h4>
          <Period from="2005-09" to="2016-08" />
          <Organisation
            name="CACI"
            href="http://www.caci.co.uk"
            role="Team Leader, Software Engineer"
          />
        </h4>
        <Technolgies
          items={["c#", "xamarin", "unidata", "js", "android", "uwp"]}
        />
        <p>
          Full stack development of software for both internal and external
          clients in a range of business sectors.
        </p>
        <ul>
          <li>
            <em>Mobile app</em> – an app for Android and Windows Phone for time
            recording and work calendar.
          </li>
          <li>
            <em>Web UI</em> – an ERP application with staff planning, project
            planning, payroll and accounting modules.
          </li>
          <li>Leading a team of 8 engineers.</li>
        </ul>
      </section>

      <section>
        <h4>
          <Period from="1996-12" to="2005-09" />
          <Organisation name="TCO" role="Software Engineer" />
        </h4>
        <Technolgies items={["unidata", "js"]} />
        <p>
          Requirements analysis, design, engineering and support of database
          applications for a wide range of business needs.
        </p>
        <ul>
          <li>
            <em>Workflow engine</em> – highly configurable integrated workflow
            used in many business areas (invoice registration, inspection
            management, social care), allowing direct links to forms across the
            software.
          </li>
          <li>
            <em>Rostering and staff planning</em> – graphical an intuitive
            application to allocate work to staff and monitor in real time. Used
            by our customers to plan thousands of care workers.
          </li>
        </ul>
      </section>
    </article>
  );
}
