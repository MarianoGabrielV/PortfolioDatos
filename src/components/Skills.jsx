import React from 'react';

const Skills = () => {
    const skills = [
        "Excel Avanzado",
        "SQL",
        "Python",
        "Power BI",
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "Pandas",
        "Docker",
        "Git",
        "GitHub",
        "Linux",
        "Azure",
        "Kubernetes"
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5">Skills <span className="text-gradient">Tecnicas</span></h2>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                                <div className="d-flex flex-wrap gap-2 justify-content-center">
                                    {skills.map((skill) => (
                                        <span key={skill} className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 fs-6">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
