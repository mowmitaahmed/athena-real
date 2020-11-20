import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faTrophy,
  faStar,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Achievements = () => {
  return (
    <section className="py-5 my-5" id="achievement">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5">
            <h2 className="section-title">Our Achievements</h2>
            <p className="section-subtitle">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letter.
            </p>
          </div>
          <div className="col-md-7">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 card-bg">
                  <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      className="achievment-icon"
                      icon={faSmile}
                    />
                    <div>
                      <h2 className="achievment-count">700+</h2>
                      <p className="achievment-tag mb-0">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 card-bg2">
                  <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      className="achievment-icon"
                      icon={faTrophy}
                    />
                    <div>
                      <h2 className="achievment-count">140+</h2>
                      <p className="achievment-tag mb-0">Projects Completed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 card-bg">
                  <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      className="achievment-icon"
                      icon={faStar}
                    />
                    <div>
                      <h2 className="achievment-count">25+</h2>
                      <p className="achievment-tag mb-0">Crazy Minds</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 card-bg2">
                  <div className="d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      className="achievment-icon"
                      icon={faRocket}
                    />
                    <div>
                      <h2 className="achievment-count">75+</h2>
                      <p className="achievment-tag mb-0">Running Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
