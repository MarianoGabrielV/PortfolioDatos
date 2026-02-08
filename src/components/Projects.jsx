import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Análisis RFM + Dashboard Ejecutivo (Power BI)",
            description: "Segmentación de clientes con RFM (Recency, Frequency, Monetary) y dashboard en Power BI para identificar segmentos clave y orientar acciones comerciales (retención, reactivación y fidelización).",
            questions: [
                "¿Cómo se distribuyen los clientes por segmento (Lost, At Risk, Potential, Champions, Loyal)?",
                "¿Qué segmentos concentran la mayor parte de las ventas?",
                "¿Cómo cambia el ticket promedio según el segmento?",
                "¿Dónde están las oportunidades: reactivación vs fidelización?"
            ],
            tags: ["PowerBI", "Excel-CSV", "Python-Pandas",],
            link: "#",
            video: "/Videos/rfm-dashboard-demo-web.mp4"
        },
        {
            id: 2,
            title: "Análisis Exploratorio de Datos (EDA) + Dashboard",
            description: "Análisis exploratorio de datos con Python para comprender el comportamiento del negocio, detectar patrones, outliers y generar insights accionables antes de cualquier etapa de modelado o visualización BI.",
            questions: [
                "¿Cómo se comportan las variables principales del dataset?",
                "¿Existen outliers o valores atípicos relevantes?",
                "¿Qué patrones y relaciones aparecen entre métricas clave?",
                "¿Qué insights se pueden extraer para el negocio antes de modelar?"
            ],
            tags: ["PowerBI", "Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
            link: "#",
            video: "/Videos/ecommerce-demo.mp4"
        },
        {
            id: 3,
            title: "Análisis Exploratorio de Datos (EDA) con Python.",
            description: "Análisis exploratorio de un dataset de ventas para comprender el comportamiento del negocio, detectar patrones, outliers y relaciones entre variables clave antes de la etapa de visualización o modelado. El proyecto incluye limpieza de datos, análisis estadístico, visualizaciones y generación de insights accionables.",
            questions: [
                "¿Cómo evolucionan las ventas en el tiempo?",
                "¿Qué categorías y regiones concentran mayor volumen?",
                "¿Existe relación entre ventas y ganancia?",
                "¿Qué patrones o anomalías requieren atención del negocio?"
            ],
            tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
            link: "#",
            video: "/Videos/task-dashboard.mp4"
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5">Mis <span className="text-gradient">Proyectos</span></h2>
                <div className="row g-4">
                    {projects.map((project) => (
                        <div key={project.id} className="col-md-4">
                            <div className="card h-100 shadow-sm border-0 bg-dark text-light">
                                {project.video ? (
                                    <video
                                        className="card-img-top"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                        src={project.video}
                                        muted
                                        loop
                                        autoPlay
                                        playsInline
                                        controls
                                    />
                                ) : (
                                    <div className="card-img-top bg-secondary" style={{ height: '200px' }}></div>
                                )}
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">{project.title}</h5>
                                    <p className="card-text text-secondary mb-3">{project.description}</p>
                                    {project.questions && project.questions.length > 0 && (
                                        <div className="mb-3">
                                            <div className="fw-bold mb-2">Preguntas que responde:</div>
                                            <ul className="mb-0 ps-3 text-secondary">
                                                {project.questions.map((question) => (
                                                    <li key={question}>{question}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="mt-auto">
                                        <div className="d-flex gap-2 flex-wrap mb-3">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">{tag}</span>
                                            ))}
                                        </div>
                                        <a href={project.link} className="btn btn-sm btn-outline-light align-self-start">Ver Proyecto</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;





