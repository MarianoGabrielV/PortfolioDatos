import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding bg-dark bg-opacity-50">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5">Sobre <span className="text-gradient">Mi</span></h2>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4 p-md-5">
                                <p className="text-light text-opacity-75 mb-3">
                                    <span className="fw-bold text-primary">Analista de Datos</span> con formacion tecnica y universitaria
                                    en programacion y ciencia de datos. Trabajo en <span className="fw-bold text-primary">entornos productivos</span>,
                                    transformando datos en <span className="fw-bold text-primary">informacion accionable</span> para la toma
                                    de decisiones.
                                </p>
                                <p className="text-light text-opacity-75 mb-0">
                                    Domino <span className="fw-bold text-primary">Excel Avanzado, SQL Avanzado, Python y Power BI</span> para
                                    analisis exploratorio, modelado y automatizacion de reportes. Desarrollo
                                    <span className="fw-bold text-primary"> dashboards orientados a KPIs</span>, colaboro con negocio y
                                    tecnologia asegurando calidad de datos, y tambien cuento con
                                    <span className="fw-bold text-primary"> experiencia docente en Python y Ciencia de Datos</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
