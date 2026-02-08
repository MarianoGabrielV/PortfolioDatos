import React from 'react';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: "Tecnicatura Universitaria en Ciencia de Datos",
            institution: "Universidad Nacional de Guillermo Brown",
            period: "2024 - Actualidad",
            description: "Formacion en analisis de datos, estadistica aplicada y herramientas para la toma de decisiones."
        },
        {
            id: 2,
            degree: "Tecnicatura Universitaria en Programacion",
            institution: "Universidad Nacional de Guillermo Brown",
            period: "2022 - 2024",
            description: "Base solida en desarrollo de software, logica, estructuras de datos y resolucion de problemas."
        },
        {
            id: 3,
            degree: "Diplomatura en Python",
            institution: "Universidad Tecnologica Nacional (UTN)",
            period: "2022",
            description: "Python aplicado a desarrollo y analisis, con enfoque en buenas practicas y automatizacion."
        }
    ];

    return (
        <section id="education" className="section-padding">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5">Mis <span className="text-gradient">Estudios</span></h2>
                <div className="row g-4 justify-content-center">
                    {education.map((edu) => (
                        <div key={edu.id} className="col-md-6 col-lg-4">
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
