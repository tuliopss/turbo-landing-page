import React, { useState } from "react";
import "./Main.css";
const Main = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    // <main className='main-container'>
    //   <h1 className='content-title'>Turbine suas vendas já!</h1>
    //   <div className='content-container'>
    //     <div className='text-area'>
    //       <h4>
    //         Acelere o crescimento do seu negócio com estratégias de{" "}
    //         <span className='custom-span'>
    //           tráfego pago e marketing digital
    //         </span>{" "}
    //         personalizadas. Resultados reais, parceria constante.
    //       </h4>

    //       <p className='text-hidden' hidden={isHidden}>
    //         Somos especialistas em tráfego pago e estratégias digitais,
    //         oferecemos soluções personalizadas para aumentar sua visibilidade,
    //         atrair clientes e gerar resultados reais.
    //       </p>
    //       <button className='see-more' onClick={() => setIsHidden(!isHidden)}>
    //         {isHidden ? "Ler mais " : "Ler menos"}
    //       </button>
    //     </div>

    //     <div className='content-image'></div>

    //     <img src='/logo.png' alt='logo-turbo' />
    //   </div>
    // </main>
    <main className='main-container'>
      <h1 className='content-title'>Turbine suas vendas já!</h1>
      <div className='content-wrapper'>
        <div className='text-area'>
          <h4>
            Acelere o crescimento do seu negócio com estratégias de{" "}
            <span className='custom-span'>
              tráfego pago e marketing digital!
            </span>{" "}
          </h4>
          <p className='text-hidden' hidden={isHidden}>
            Somos especialistas em tráfego pago e estratégias digitais,
            oferecemos soluções personalizadas para aumentar sua visibilidade,
            atrair clientes e gerar resultados reais.
          </p>
          <button className='see-more' onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? "Ler mais" : "Ler menos"}
          </button>
        </div>
        <div className='image-container'>
          <img src='/logo.png' alt='logo-turbo' />
        </div>
      </div>
    </main>
  );
};

export default Main;
