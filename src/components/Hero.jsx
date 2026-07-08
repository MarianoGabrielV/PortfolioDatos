import React from 'react';

const Hero = ({ t }) => {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center vh-100 text-center">
      <div className="container">
        <h1 className="display-1 fw-bold mb-4">
          {t.hero.name} <span className="text-gradient">{t.hero.highlight}</span>
        </h1>
        <p className="lead mb-5 text-secondary fs-3">
          {t.hero.subtitle}
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#projects" className="btn btn-primary btn-lg">{t.hero.projectsBtn}</a>
          <a href="#contact" className="btn btn-outline-light btn-lg">{t.hero.contactBtn}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
