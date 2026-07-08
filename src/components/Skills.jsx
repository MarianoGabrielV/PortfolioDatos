import React from 'react';

const Skills = ({ t }) => {
    const skillGroups = t.skills.groups;

    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5">{t.skills.title} <span className="text-gradient">{t.skills.highlight}</span></h2>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-sm bg-dark text-light">
                            <div className="card-body p-4">
                                {skillGroups.map((group) => (
                                    <div key={group.title} className="mb-4">
                                        <h5 className="fw-bold mb-3 text-primary">{group.title}</h5>
                                        <div className="d-flex flex-wrap gap-2">
                                            {group.skills.map((skill) => (
                                                <span key={skill} className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 fs-6">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
