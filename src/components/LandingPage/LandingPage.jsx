// react libraries
import React from "react";
import { Link } from "react-router-dom";

// styles
import "./_landing.scss";

// component
import Button from "../Common/Button";

/**
 * @desc default landing page
 */
const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="page-section top-section">
        <h1>Bug tracking done right</h1>
        <p>
          Capture, track and resolve bugs & issues throughout your entire
          development
        </p>
        <Link to="/register">
          <Button btnText="learn more" />
        </Link>
      </section>
      <section className="page-section middle-section">
        <section className="section-text">
          <h2>What is a bug and issue tracking tool?</h2>
          <p>
            Bug and issue tracking software helps software teams find, record
            and track bugs in their software.A great bug & issue tracker gives
            the team a single view of all items in the backlog.
          </p>
        </section>
        <section className="section-text">
          <h2>Logan Bug and Issue Tracker</h2>
          <p>
            Logan was built to track and manage bugs in personal projects by
            Oluwafemi Akinwa in 2020. Still in beta but hopefully would go live
            with cool features before the end of the year
          </p>
        </section>
      </section>
      <section className="page-section bottom-section">
        <section className="btm-section-item">
          <h4>Developer tool intgrations</h4>
          <p>
            Connect to github to get an end-to-end traceability from backlog to
            deployment
          </p>
        </section>
        <section className="btm-section-item">
          <h4>Easy to use APIs</h4>
          <p>
            Integrate Logan with all the tools your team is already using by
            leveraging its robust set of APIs.
          </p>
        </section>
        <section className="btm-section-item">
          <h4>Third-party addons</h4>
          <p>
            Install plug-and-play third-party addons to extend Logan to fit any
            use case.
          </p>
        </section>
      </section>
    </div>
  );
};

export default LandingPage;
