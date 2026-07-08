import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState('es');
  const t = useMemo(() => translations[language], [language]);

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} t={t} />
      <Hero language={language} t={t} />
      <About language={language} t={t} />
      <Skills language={language} t={t} />
      <Projects language={language} t={t} />
      <Experience language={language} t={t} />
      <Education language={language} t={t} />
      <Contact language={language} t={t} />
      <Footer language={language} t={t} />
    </div>
  );
}

export default App;
