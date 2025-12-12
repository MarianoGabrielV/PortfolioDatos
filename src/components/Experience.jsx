import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Frontend Developer",
            company: "Tech Solutions Inc.",
            period: "2023 - Presente",
            description: "Desarrollo de interfaces de usuario modernas utilizando React y TypeScript. Mejora del rendimiento web en un 40%."
        },
        {
            id: 2,
            role: "Junior Web Developer",
            company: "Creative Agency",
            period: "2021 - 2023",
            description: "Colaboración en sitios web corporativos y landing pages utilizando HTML, SCSS y JavaScript."
        }
    ];

    return (
        <section id="experience" className="section-padding bg-dark bg-opacity-50">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5">Experiencia <span className="text-gradient">Laboral</span></h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="card mb-4 bg-transparent border-start border-0 border-primary border-3 rounded-0 ps-3">
                                <div className="card-body py-0">
                                    <span className="badge bg-secondary mb-2">{exp.period}</span>
                                    <h4 className="card-title fw-bold">{exp.role}</h4>
                                    <h5 className="text-primary">{exp.company}</h5>
                                    <p className="card-text mt-2 text-light text-opacity-75">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
