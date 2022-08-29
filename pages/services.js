import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Offer from "../components/Offer";

const services = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Offer />
      <Stats />
      <Footer />
    </div>
  );
};

export default services;
