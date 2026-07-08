import React from 'react';

const FlagImage = ({ country }) => {
    const flagMap = {
        es: 'https://flagcdn.com/w80/es.png',
        en: 'https://flagcdn.com/w80/gb.png',
        pt: 'https://flagcdn.com/w80/br.png'
    };

    return (
        <img
            src={flagMap[country]}
            alt={country}
            width="20"
            height="15"
            className="d-block rounded"
            loading="lazy"
        />
    );
};

const Navbar = ({ language, setLanguage, t }) => {
    const languages = [
        { code: 'es', flag: 'es', title: 'Español' },
        { code: 'en', flag: 'en', title: 'English' },
        { code: 'pt', flag: 'pt', title: 'Português' }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand fw-bold text-gradient" href="#">{t.navbar.brand}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#hero">{t.navbar.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">{t.navbar.about}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">{t.navbar.skills}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">{t.navbar.projects}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">{t.navbar.experience}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">{t.navbar.education}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">{t.navbar.contact}</a>
                        </li>
                        <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2" role="group" aria-label="Language switcher">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        type="button"
                                        className={`btn btn-sm rounded-circle p-2 ${language === lang.code ? 'btn-primary' : 'btn-outline-light'}`}
                                        onClick={() => setLanguage(lang.code)}
                                        title={lang.title}
                                        aria-label={lang.title}
                                        aria-pressed={language === lang.code}
                                        style={{ width: '42px', height: '42px' }}
                                    >
                                        <FlagImage country={lang.flag} />
                                    </button>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
