import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center vh-100 text-center">
      <div className="container">
        <h1 className="display-1 fw-bold mb-4">
          Hola, soy <span className="text-gradient">Mariano Vergniaud</span>
        </h1>
        <p className="lead mb-5 text-secondary fs-3">
          Analista de Datos y Desarrollador de Software.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#projects" className="btn btn-primary btn-lg">Ver Proyectos</a>
          <a href="#contact" className="btn btn-outline-light btn-lg">Contáctame</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
