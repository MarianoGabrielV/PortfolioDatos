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
                                    Analista de Datos con formacion tecnica y universitaria en programacion y ciencia de datos,
                                    con experiencia en analisis, procesamiento y visualizacion de informacion para la toma de decisiones.
                                </p>
                                <p className="text-light text-opacity-75 mb-0">
                                    Trabajo con Excel, SQL, Python y Power BI para analisis exploratorio, reportes automatizados
                                    y dashboards interactivos. Tambien cuento con experiencia docente en Python y Ciencia de Datos,
                                    enfocada en pensamiento logico y aprendizaje basado en proyectos.
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
