import React from 'react';

/**
 * Haikei: Generative Layered Waves SVG Background
 * Generated multi-tiered layered wave backdrop with cyber neon gradients.
 */
export function HaikeiLayeredWaves({
  topColor = '#030712',
  bottomColor = '#060e1e',
  accentColor = '#00f0ff',
  height = '320px',
  flip = false,
  opacity = 0.85,
  className = '',
}) {
  return (
    <div
      className={`haikei-layered-waves-wrap ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        transform: flip ? 'rotate(180deg)' : 'none',
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          opacity,
        }}
      >
        <defs>
          <linearGradient id="haikeiWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="haikeiWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="haikeiWaveGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#071526" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#030712" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Layer 1: Ambient back wave */}
        <path
          d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,176C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#haikeiWaveGrad1)"
        />

        {/* Layer 2: Middle fluid neon ribbon */}
        <path
          d="M0,96L48,117.3C96,139,192,181,288,197.3C384,213,480,203,576,176C672,149,768,107,864,101.3C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#haikeiWaveGrad2)"
        />

        {/* Layer 3: Solid deep base */}
        <path
          d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,208C840,224,960,224,1080,202.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill="url(#haikeiWaveGrad3)"
        />
      </svg>
    </div>
  );
}

/**
 * Haikei: Generative Organic Blobs SVG Element
 */
export function HaikeiOrganicBlobs({
  color = '#00f0ff',
  size = 400,
  blur = 60,
  opacity = 0.25,
  style = {},
}) {
  return (
    <div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        pointerEvents: 'none',
        filter: `blur(${blur}px)`,
        opacity,
        zIndex: 0,
        ...style,
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <path
          fill={color}
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.6,81.2,29.1,72.7,41.9C64.2,54.7,53,65.7,39.8,72.4C26.7,79.1,11.5,81.4,-3.2,86.9C-17.9,92.5,-32.1,101.3,-43.8,97.7C-55.5,94.1,-64.7,78.1,-72.1,63.2C-79.5,48.3,-85,34.5,-87.3,20C-89.6,5.5,-88.6,-9.7,-83.4,-23.4C-78.2,-37.1,-68.8,-49.3,-56.6,-57.1C-44.4,-64.8,-29.4,-68.1,-15.1,-70.7C-0.8,-73.3,13.7,-75.2,27.3,-79.8L44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

/**
 * Haikei: Low-Poly Polygon Mesh Geometric Backdrop
 */
export function HaikeiPolygonMesh({ style = {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 600"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.12,
        pointerEvents: 'none',
        ...style,
      }}
    >
      <polygon points="0,0 200,0 100,150" fill="#00f0ff" />
      <polygon points="200,0 400,0 300,120" fill="#3b82f6" />
      <polygon points="400,0 600,0 550,180" fill="#8b5cf6" />
      <polygon points="600,0 800,0 720,130" fill="#00f0ff" />
      <polygon points="800,0 1000,0 900,160" fill="#3b82f6" />
      <polygon points="100,150 300,120 220,300" fill="#1e3a8a" />
      <polygon points="300,120 550,180 440,320" fill="#0284c7" />
      <polygon points="550,180 720,130 650,290" fill="#6366f1" />
      <polygon points="720,130 900,160 840,310" fill="#0284c7" />
      <polygon points="220,300 440,320 330,480" fill="#0c4a6e" />
      <polygon points="440,320 650,290 560,490" fill="#1e1b4b" />
      <polygon points="650,290 840,310 750,470" fill="#0f172a" />
      <polygon points="330,480 560,490 450,600" fill="#00f0ff" opacity="0.3" />
      <polygon points="560,490 750,470 680,600" fill="#3b82f6" opacity="0.3" />
    </svg>
  );
}
