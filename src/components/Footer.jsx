import React from 'react';

const Footer = ({ t }) => {
    return (
        <footer className="bg-black py-4 text-center text-white-50 mt-5">
            <div className="container">
                <p className="mb-2">{t.footer.rights.replace('{year}', new Date().getFullYear())}</p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="https://github.com/MarianoGabrielV" className="text-white text-decoration-none">{t.footer.github}</a>
                    <a href="https://www.linkedin.com/in/marianovergniaud/" className="text-white text-decoration-none">{t.footer.linkedin}</a>
                    <a href="mailto:mariano.unla@gmail.com" className="text-white text-decoration-none">{t.footer.email}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
