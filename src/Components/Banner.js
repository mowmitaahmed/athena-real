import React from "react";
import banner from "../Images/Illustration/banner.png";

const Banner = () => {
  return (
    <section className="mt-5 pt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="banner-title">Florence agency</h1>
            <p className="banner-paragraph">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button className="btn common-btn">See Pricing</button>
          </div>
          <div className="col-md-6 offset-md-1">
            <img className="img-fluid" src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
