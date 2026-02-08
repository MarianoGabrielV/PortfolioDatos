import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-dark bg-opacity-50">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5">Contacto <span className="text-gradient">Directo</span></h2>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 text-center p-3">
                            <h5 className="fw-bold mb-2">Email</h5>
                            <a className="text-decoration-none text-light text-opacity-75" href="mailto:mairano.unla@gmail.com">
                                mairano.unla@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 text-center p-3">
                            <h5 className="fw-bold mb-2">Telefono</h5>
                            <a className="text-decoration-none text-light text-opacity-75" href="tel:+5491162123307">
                                +54 9 11 6212 3307
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 text-center p-3">
                            <h5 className="fw-bold mb-2">LinkedIn</h5>
                            <a className="text-decoration-none text-light text-opacity-75" href="https://www.linkedin.com/in/marianovergniaud/" target="_blank" rel="noreferrer">
                                /in/marianovergniaud
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100 border-0 text-center p-3">
                            <h5 className="fw-bold mb-2">GitHub</h5>
                            <a className="text-decoration-none text-light text-opacity-75" href="https://github.com/MarianoGabrielV" target="_blank" rel="noreferrer">
                                /MarianoGabrielV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
