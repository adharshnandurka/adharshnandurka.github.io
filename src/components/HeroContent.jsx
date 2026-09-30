import React from 'react';

export default function HeroContent() {
  return (
    <div className="hero-overlay" role="region" aria-label="Hero Section">
      {/* BOTTOM-LEFT: HERO TYPOGRAPHY & CTAs */}
      <div className="hero-bottom-left">
        <div className="hero-intro-text">Hi, I'm</div>
        
        {/* Large, elegant cursive script with soft drop shadow */}
        <h1
          className="hero-cursive-name"
          aria-label="Adharsh"
        >
          Adharsh
        </h1>

        {/* Compact bio: Graduate Engineer Trainee – Level L1 */}
        <p className="hero-compact-bio">
          I am currently working as a Graduate Engineer Trainee – Level L1, specializing in Microsoft Azure Cloud. I joined the organization three months ago and am currently undergoing structured training in Azure Administration.
        </p>

        {/* Two stylish white pill buttons: Resume (solid with arrow) and Let's Talk (frosted glass) */}
        <div className="hero-button-row">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume-solid">
            Resume
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          <a href="#contact" className="btn-talk-frosted">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}
