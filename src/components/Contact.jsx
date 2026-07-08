import React from 'react';

const Contact = ({ t }) => {
    return (
        <section id="contact" className="section-padding bg-dark bg-opacity-50">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5">{t.contact.title} <span className="text-gradient">{t.contact.highlight}</span></h2>
                <div className="row g-4 justify-content-center">
                    {t.contact.cards.map((card) => (
                        <div key={card.title} className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 text-center p-3">
                                <h5 className="fw-bold mb-2">{card.title}</h5>
                                {card.title === 'Email' ? (
                                    <a className="text-decoration-none text-light text-opacity-75" href="mailto:mariano.unla@gmail.com">
                                        {card.value}
                                    </a>
                                ) : card.title === 'Phone' || card.title === 'Teléfono' ? (
                                    <a className="text-decoration-none text-light text-opacity-75" href="tel:+5491162123307">
                                        {card.value}
                                    </a>
                                ) : card.title === 'LinkedIn' ? (
                                    <a className="text-decoration-none text-light text-opacity-75" href="https://www.linkedin.com/in/marianovergniaud/" target="_blank" rel="noreferrer">
                                        {card.value}
                                    </a>
                                ) : (
                                    <a className="text-decoration-none text-light text-opacity-75" href="https://github.com/MarianoGabrielV" target="_blank" rel="noreferrer">
                                        {card.value}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
