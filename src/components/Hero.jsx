import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center vh-100 text-center">
      <div className="container">
        <h1 className="display-1 fw-bold mb-4">
          Mariano Gabriel <span className="text-gradient">Vergniaud</span>
        </h1>
        <p className="lead mb-5 text-secondary fs-3">
          Analista de Datos con foco en SQL, Python, Excel y Power BI.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#projects" className="btn btn-primary btn-lg">Ver Proyectos</a>
          <a href="#contact" className="btn btn-outline-light btn-lg">Contacto</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
