import React from "react";
import DonateBanner from "../components/DonateBanner";
import DonateForm from "../components/DonateForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const donate = () => {
  return (
    <div>
      <Navbar />
      <DonateBanner />
      <DonateForm />
      <Footer />
    </div>
  );
};

export default donate;
