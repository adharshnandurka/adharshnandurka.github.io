import React, { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from './components/Navbar';
import CharacterCanvas from './components/CharacterCanvas';
import HeroContent from './components/HeroContent';
import PortfolioSections from './components/PortfolioSections';

export default function App() {
  const [telemetry, setTelemetry] = useState({
    isDeadzone: false
  });

  const [isHovered, setIsHovered] = useState(false);

  // Custom Cursor Positions
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const auraPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      // Check if hovering over clickable/interactive element
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive') ||
        target.closest('.hero-commanding-name')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth trailing physics for aura ring via rAF
    let animId;
    const updateAura = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      auraPos.current.x += (targetX - auraPos.current.x) * 0.18;
      auraPos.current.y += (targetY - auraPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${auraPos.current.x}px, ${auraPos.current.y}px)`;
      }

      animId = requestAnimationFrame(updateAura);
    };

    animId = requestAnimationFrame(updateAura);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleTelemetryUpdate = useCallback((data) => {
    setTelemetry(data);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Custom Glowing Magnetic Cursor: Dot + Smooth Trailing Aura Ring */}
      <div
        ref={ringRef}
        className={`custom-aura-ring ${isHovered ? 'hovered' : ''} ${telemetry.isDeadzone ? 'eye-contact' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isHovered ? 'hovered' : ''}`}
        aria-hidden="true"
      />

      {/* Floating Centered Frosted-Glass Header */}
      <Navbar />

      {/* Hero Section: Fullscreen Canvas (100vw, 100vh, object-fit: cover) */}
      <section className="hero-section" id="hero">
        {/* Fullscreen 60 FPS Zero-Ghosting Canvas Renderer */}
        <CharacterCanvas
          onTelemetryUpdate={handleTelemetryUpdate}
        />

        {/* Hero Typography (Bottom-Left) */}
        <HeroContent />
      </section>

      {/* Sections 1 to 5 from Resume: ABOUT, EXPERIENCE, EDUCATION, PROJECTS, CONTACT */}
      <PortfolioSections />
    </div>
  );
}
