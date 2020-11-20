import React from "react";
import project from "../Images/Illustration/r&p.png";

const RunningProject = () => {
  return (
    <section className="mt-5 pt-3 running-project-area" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img className="img-fluid" src={project} alt="project" />
          </div>
          <div className="col-md-5 offset-md-1">
            <h2 className="section-title">Stay Running & Project</h2>
            <p className="section-subtitle">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letter.
            </p>
            <button className="btn common-btn">Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningProject;
