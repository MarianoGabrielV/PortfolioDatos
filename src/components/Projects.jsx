import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Analisis de Resolucion de Tkt's",
            description: "Este dashboard muestra la resolucion de tkt's para la empresa donde actualmente me desempeño como Analista de Datos y Programador.",
            tags: ["PowerBI", "Excel"],
            link: "#",
            image: "/Images/dashbees.png"
        },
        {
            id: 2,
            title: "E-Commerce Demo",
            description: "Una tienda en línea simulada con carrito de compras.",
            tags: ["Vue", "Tailwind", "Firebase"],
            link: "#",
            image: "/Images/dashbees.png"
        },
        {
            id: 3,
            title: "Task Dashboard",
            description: "Aplicación de gestión de tareas y productividad.",
            tags: ["React", "Node.js", "MongoDB"],
            link: "#",
            image: "/Images/dashbees.png"
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
                                {project.image ? (
                                    <img src={project.image} className="card-img-top" alt={project.title} style={{ height: '200px', objectFit: 'cover' }} />
                                ) : (
                                    <div className="card-img-top bg-secondary" style={{ height: '200px' }}></div>
                                )}
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{project.title}</h5>
                                    <p className="card-text text-secondary">{project.description}</p>
                                    <div className="d-flex gap-2 flex-wrap mb-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">{tag}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="btn btn-sm btn-outline-light stretched-link">Ver Proyecto</a>
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
