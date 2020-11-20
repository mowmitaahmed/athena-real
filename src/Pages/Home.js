import React from "react";
import Achievements from "../Components/Achievements";
import Header from "../Components/Header";
import RunningProject from "../Components/RunningProject";
import Service from "../Components/Service";
import Footer from "../Components/Footer";
import PricingTable from "../Components/PricingTable";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <Service />
      <RunningProject />
      <Achievements />
      <PricingTable />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
