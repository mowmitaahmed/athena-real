import React from "react";
import service1 from "../Images/service/service1.png";
import service2 from "../Images/service/service2.png";
import service3 from "../Images/service/service3.png";
import service4 from "../Images/service/service4.png";

const Service = () => {
  return (
    <section className="service-area py-5" id="service">
      <div className="container">
        <h2 className="section-title">What we do</h2>
        <p className="section-subtitle mb-5">
          Our main focus is to make the User Experience very <br /> simple and
          easy. Simplicity is our Strength.
        </p>
        <div className="row">
          <div className="col-md-3">
            <div className="card pt-5 pb-4 px-4 border-0 card-hover">
              <div className="d-flex justify-content-center">
                <img className="service-img" src={service1} alt="service" />
              </div>
              <h5 className="service-title mt-3">Experience Design</h5>
              <p className="service-description">
                The point of using Lorem Ipsum is that it has a more-orless
                normal.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card pt-5 pb-4 px-4 border-0 card-hover">
              <div className="d-flex justify-content-center">
                <img className="service-img" src={service2} alt="service" />
              </div>
              <h5 className="service-title mt-3">Interface Design </h5>
              <p className="service-description">
                The point of using Lorem Ipsum is that it has a more-orless
                normal.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card pt-5 pb-4 px-4 border-0 card-hover">
              <div className="d-flex justify-content-center">
                <img className="service-img" src={service3} alt="service" />
              </div>
              <h5 className="service-title mt-3">Prototyping</h5>
              <p className="service-description">
                The point of using Lorem Ipsum is that it has a more-orless
                normal.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card pt-5 pb-4 px-4 border-0 card-hover">
              <div className="d-flex justify-content-center">
                <img className="service-img" src={service4} alt="service" />
              </div>
              <h5 className="service-title mt-3">Illustration</h5>
              <p className="service-description">
                The point of using Lorem Ipsum is that it has a more-orless
                normal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
