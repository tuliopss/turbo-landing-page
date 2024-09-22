import React, { useState } from "react";
import ServiceCard from "../components/ServicesCard/ServiceCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Main from "../components/Main/Main";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ContactSection from "../components/ContactSection/ContactSection";

const Home = () => {
  return (
    <div className='home-container'>
      <Main />
      <ServiceSection />
      <ContactSection />
    </div>
  );
};

export default Home;
