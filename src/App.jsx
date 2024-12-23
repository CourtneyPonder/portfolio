import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about-me');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <header>
        <h1>John Doe</h1>
        <nav>
          <ul>
            <li>
              <a
                href="#about-me"
                className={activeSection === 'about-me' ? 'active' : ''}
                onClick={() => handleNavClick('about-me')}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={activeSection === 'portfolio' ? 'active' : ''}
                onClick={() => handleNavClick('portfolio')}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={activeSection === 'resume' ? 'active' : ''}
                onClick={() => handleNavClick('resume')}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about-me" className={activeSection === 'about-me' ? 'active-section' : ''}>
          <AboutMe />
        </section>
        <section id="portfolio" className={activeSection === 'portfolio' ? 'active-section' : ''}>
          <Portfolio />
        </section>
        <section id="contact" className={activeSection === 'contact' ? 'active-section' : ''}>
          <Contact />
        </section>
        <section id="resume" className={activeSection === 'resume' ? 'active-section' : ''}>
          <Resume />
        </section>
      </main>

      <footer>
        <p>Connect with me:</p>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a>
      </footer>
    </div>
  );
}

export default App;
