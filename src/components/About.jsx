import React from 'react';

const About = ({ t }) => {
    return (
        <section id="about" className="section-padding bg-dark bg-opacity-50">
            <div className="container">
                <h2 className="display-5 fw-bold text-center mb-5">{t.about.title} <span className="text-gradient">{t.about.highlight}</span></h2>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-4 p-md-5">
                                <p className="text-light text-opacity-75 mb-3">
                                    {t.about.intro}
                                </p>
                                <p className="text-light text-opacity-75 mb-0">
                                    {t.about.details}
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
