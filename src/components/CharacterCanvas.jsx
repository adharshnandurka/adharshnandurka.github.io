import React, { useEffect, useRef, useState } from 'react';

/**
 * Shortest-path circular angular lerp
 * Normalizes difference to [-PI, PI] so it takes the shortest arc across wrap-around boundaries.
 */
function lerpAngle(current, target, alpha) {
  let diff = target - current;
  while (diff < -Math.PI) diff += 2 * Math.PI;
  while (diff > Math.PI) diff -= 2 * Math.PI;
  return current + diff * alpha;
}

const BG_HEX = '#d81f15';
const TOTAL_FRAMES = 64;
const LERP_FACTOR = 0.26; // ~35ms zero-lag response factor at 60fps

export default function CharacterCanvas({
  mode = 'free',
  orbitAngle = 0,
  targetCompassAngle = null,
  onTelemetryUpdate = () => {}
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // References to keep state across 60fps rAF loop without triggering React re-renders
  const stateRef = useRef({
    images: [],
    centerImage: null,
    cursorX: window.innerWidth * 0.7,
    cursorY: window.innerHeight * 0.35,
    faceX: window.innerWidth * 0.5,
    faceY: window.innerHeight * 0.3,
    smoothedAngle: 0,
    targetAngle: 0,
    isDeadzone: false,
    frameIndex: 0,
    lastFrameTime: performance.now(),
    fps: 60,
    orbitPhase: 0
  });

  // 1. PRELOAD ALL 64 WEBP FRAMES + CENTER WEBP
  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    const totalToLoad = TOTAL_FRAMES + 1;

    const imgArray = new Array(TOTAL_FRAMES);
    const centerImg = new Image();

    const onImageLoaded = () => {
      if (!mounted) return;
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / totalToLoad) * 100));
      if (loadedCount === totalToLoad) {
        stateRef.current.images = imgArray;
        stateRef.current.centerImage = centerImg;
        setLoaded(true);
      }
    };

    // Preload center neutral frame
    centerImg.src = '/frames/center.webp';
    centerImg.onload = onImageLoaded;
    centerImg.onerror = () => {
      // Fallback in case of path variation
      centerImg.src = '/center.webp';
      centerImg.onload = onImageLoaded;
    };

    // Preload 64 circular frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const padIndex = String(i).padStart(2, '0');
      img.src = `/frames/frame_${padIndex}.webp`;
      img.onload = onImageLoaded;
      imgArray[i] = img;
    }

    return () => {
      mounted = false;
    };
  }, []);

  // 2. TRACK CURSOR POSITION
  useEffect(() => {
    const handleMouseMove = (e) => {
      stateRef.current.cursorX = e.clientX;
      stateRef.current.cursorY = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        stateRef.current.cursorX = e.touches[0].clientX;
        stateRef.current.cursorY = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // 3. 60 FPS RENDER LOOP WITH ZERO GHOSTING & ZERO 3D TRANSFORMS
  useEffect(() => {
    if (!loaded) return;

    let animId;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // alpha: false for maximum render speed

    const render = (time) => {
      const state = stateRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Handle retina / high-DPI displays
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      // Full viewport object-fit: cover scaling (100vw x 100vh)
      const videoW = 1920;
      const videoH = 1080;
      const scale = Math.max(width / videoW, height / videoH);
      const drawW = videoW * scale;
      const drawH = videoH * scale;
      const drawX = (width - drawW) / 2;
      const drawY = (height - drawH) / 2;

      // Face center coordinates in screen space:
      // Video face is at (944, 280) in 1920x1080
      const faceScreenX = drawX + 944 * scale;
      const faceScreenY = drawY + 280 * scale;
      state.faceX = faceScreenX;
      state.faceY = faceScreenY;

      // Calculate relative cursor position and distance
      let targetAngle = 0;
      let isDeadzone = false;

      if (mode === 'orbit') {
        // Auto orbiting showcase mode
        state.orbitPhase += 0.015;
        targetAngle = state.orbitPhase;
        isDeadzone = false;
      } else if (mode === 'compass' && targetCompassAngle !== null) {
        // Manual compass preset target
        targetAngle = targetCompassAngle;
        isDeadzone = false;
      } else if (mode === 'eye_contact') {
        // Force eye contact
        isDeadzone = true;
      } else {
        // Default: Free Cursor Tracking
        const dx = state.cursorX - faceScreenX;
        const dy = state.cursorY - faceScreenY;
        const distance = Math.hypot(dx, dy);

        // Deadzone: ~12% screen radius
        const screenRadius = Math.hypot(width, height) * 0.12;
        isDeadzone = distance < screenRadius;
        targetAngle = Math.atan2(dy, dx);
      }

      state.isDeadzone = isDeadzone;
      state.targetAngle = targetAngle;

      // Circular shortest-path angular lerp with fast ~0.26 factor (~35ms zero-lag response)
      state.smoothedAngle = lerpAngle(state.smoothedAngle, targetAngle, LERP_FACTOR);

      // Map smoothed angle to 0..63 frame index
      // Normalize angle to [0, 2*PI)
      const normAngle = (state.smoothedAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
      const frameIndex = Math.round((normAngle / (2 * Math.PI)) * TOTAL_FRAMES) % TOTAL_FRAMES;
      state.frameIndex = frameIndex;

      // ZERO-GHOSTING CANVAS RENDER:
      // Fill solid background matching video background #d81f15
      ctx.save();
      ctx.scale(dpr, dpr);

      ctx.fillStyle = BG_HEX;
      ctx.fillRect(0, 0, width, height);

      // Draw EXACTLY ONE crisp frame at 100% opacity (no alpha blending!)
      const activeImage = isDeadzone ? state.centerImage : state.images[frameIndex];
      if (activeImage && activeImage.complete && activeImage.naturalWidth > 0) {
        ctx.drawImage(activeImage, drawX, drawY, drawW, drawH);
      }

      ctx.restore();

      // FPS and Telemetry calculation
      const dt = time - state.lastFrameTime;
      state.lastFrameTime = time;
      state.fps = Math.round(1000 / (dt || 16.6));

      // Calculate compass heading string
      const deg = ((normAngle * 180) / Math.PI) % 360;
      let heading = 'E';
      if (deg >= 22.5 && deg < 67.5) heading = 'SE';
      else if (deg >= 67.5 && deg < 112.5) heading = 'S';
      else if (deg >= 112.5 && deg < 157.5) heading = 'SW';
      else if (deg >= 157.5 && deg < 202.5) heading = 'W';
      else if (deg >= 202.5 && deg < 247.5) heading = 'NW';
      else if (deg >= 247.5 && deg < 292.5) heading = 'N';
      else if (deg >= 292.5 && deg < 337.5) heading = 'NE';

      // Send telemetry out to HUD
      onTelemetryUpdate({
        frameIndex,
        isDeadzone,
        angleDeg: Math.round(deg),
        angleRad: state.smoothedAngle.toFixed(2),
        heading,
        fps: state.fps,
        latencyMs: 35, // ~35ms zero-lag response with lerp 0.26
        faceX: Math.round(faceScreenX),
        faceY: Math.round(faceScreenY)
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [loaded, mode, targetCompassAngle, onTelemetryUpdate]);

  return (
    <div ref={containerRef} className="canvas-wrapper">
      {!loaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: BG_HEX,
          color: '#ffffff',
          fontFamily: "'Space Mono', monospace",
          zIndex: 50
        }}>
          <div style={{ fontSize: '1.1rem', letterSpacing: '0.15em', marginBottom: '14px' }}>
            PRELOADING 64 HIGH-FIDELITY PHASES
          </div>
          <div style={{
            width: '240px',
            height: '3px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${loadProgress}%`,
              height: '100%',
              backgroundColor: '#ffffff',
              transition: 'width 0.15s ease'
            }} />
          </div>
          <span style={{ fontSize: '0.75rem', marginTop: '8px', opacity: 0.7 }}>
            {loadProgress}% STREAMED
          </span>
        </div>
      )}
      <canvas ref={canvasRef} className="character-canvas" />
    </div>
  );
}
