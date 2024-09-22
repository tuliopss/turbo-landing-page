import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactSection = () => {
  return (
    <section className='contact-section'>
      <div className='contact-container'>
        <h2 className='content-title'>Entre em Contato</h2>
        <p>
          Fale diretamente com um de nossos consultores e descubra como podemos
          impulsionar seu negócio com as soluções da Turbo!
        </p>

        <a
          href='https://wa.me/SEU_NUMERO_DE_WHATSAPP'
          className='cta-button'
          target='_blank'
          rel='noopener noreferrer'>
          Converse conosco sem pagamentos prévios <WhatsAppIcon />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
