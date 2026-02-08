import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Analista de Datos / Desarrollador",
            company: "Workgroup",
            period: "Febrero 2024 - Actualidad",
            description: "Recoleccion, procesamiento y validacion de datos de sistemas operativos y de negocio. Desarrollo de dashboards en Power BI, consultas con SQL/Python y automatizacion de reportes para reducir tiempos operativos."
        },
        {
            id: 2,
            role: "Docente de Python y Ciencia de Datos",
            company: "Nivel Secundario",
            period: "2022 - Actualidad",
            description: "Formacion en programacion, pensamiento logico y analisis de datos para adolescentes. Diseno de proyectos practicos con Python, visualizacion basica y resolucion de problemas con datos."
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
