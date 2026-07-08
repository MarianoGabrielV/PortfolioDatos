import React from 'react';

const Education = ({ t }) => {
    const education = t.education.items;

    return (
        <section id="education" className="section-padding">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5">{t.education.title} <span className="text-gradient">{t.education.highlight}</span></h2>
                <div className="row g-4 justify-content-center">
                    {education.map((edu, index) => (
                        <div key={`${edu.degree}-${index}`} className="col-md-6 col-lg-4">
                            <div className="card h-100 bg-dark border-secondary">
                                <div className="card-body text-center p-4">
                                    <div className="mb-3">
                                        <i className="bi bi-mortarboard fs-1 text-primary"></i>
                                    </div>
                                    <h4 className="card-title fw-bold">{edu.degree}</h4>
                                    <h6 className="text-secondary mb-3">{edu.institution}</h6>
                                    <span className="badge bg-dark border border-secondary mb-3">{edu.period}</span>
                                    <p className="card-text text-light text-opacity-75">{edu.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
