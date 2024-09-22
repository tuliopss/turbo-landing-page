import React from "react";
import ServiceCard from "../ServicesCard/ServiceCard";

const ServiceSection = () => {
  return (
    <section className='services-container'>
      <h1 className='content-title'>Nossos serviços: </h1>
      <div className='services-card'>
        <ServiceCard
          image={"public/socialmedia.jpg"}
          title={"Social Media"}
          text={
            "Temos profissionais que planejaram o melhor para o seu perfil!"
          }
        />
        <ServiceCard
          image={"public/trafego-image.jpg"}
          title={"Tráfego Pago"}
          text={
            "As melhores estratégias do mercado para impulsionar suas vendas!"
          }
        />
      </div>
    </section>
  );
};

export default ServiceSection;
