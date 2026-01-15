import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-4 text-center text-white-50 mt-5">
            <div className="container">
                <p className="mb-2">&copy; {new Date().getFullYear()} Diseño Personal. Todos los derechos reservados.</p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="https://github.com/MarianoGabrielV" className="text-white text-decoration-none">GitHub</a>
                    <a href="https://www.linkedin.com/in/marianovergniaud/" className="text-white text-decoration-none">LinkedIn</a>
                    </div>        
            </div>
        </footer>
    );
};

export default Footer;
