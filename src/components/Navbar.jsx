import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'education', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveTab(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="floating-header" role="banner">
      <nav className="frosted-nav-pill" role="navigation" aria-label="Main Navigation">
        <a
          href="#about"
          className={`nav-pill-item ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          [ABOUT]
        </a>
        <a
          href="#experience"
          className={`nav-pill-item ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          [EXPERIENCE]
        </a>
        <a
          href="#education"
          className={`nav-pill-item ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          [EDUCATION]
        </a>
        <a
          href="#projects"
          className={`nav-pill-item ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          [PROJECTS]
        </a>
        <a
          href="#contact"
          className={`nav-pill-item ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          [CONTACT]
        </a>
      </nav>
    </header>
  );
}
