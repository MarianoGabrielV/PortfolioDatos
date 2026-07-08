import React from 'react';

const Projects = ({ t }) => {
    const projects = t.projects.items.map((project, index) => ({ ...project, id: index + 1, link: index === 0 ? 'https://github.com/MarianoGabrielV/rfm-powerbi-dashboard' : index === 1 ? 'https://github.com/MarianoGabrielV/eda-python-sales-analysis' : index === 2 ? 'https://github.com/MarianoGabrielV/Datos-EDA-Python/tree/main' : 'https://github.com/MarianoGabrielV/MySQLPowerBI', video: index === 0 ? '/Videos/rfm-dashboard-demo-web.mp4' : index === 1 ? '/Videos/ecommerce-demo.mp4' : index === 2 ? '/Videos/task-dashboard.mp4' : '/Videos/SqlPowerBI.mp4' }));

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5">{t.projects.title} <span className="text-gradient">{t.projects.highlight}</span></h2>
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
                                            <div className="fw-bold mb-2">{t.projects.questionsLabel}</div>
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
                                        <a href={project.link} className="btn btn-sm btn-outline-light align-self-start">{t.projects.buttonLabel}</a>
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








