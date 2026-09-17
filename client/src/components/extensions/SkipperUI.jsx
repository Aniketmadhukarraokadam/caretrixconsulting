import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Skipper UI: 3D Perspective Tilt Card
 * Physics-based 3D tilt with dynamic light glare and multi-layered depth.
 */
export function SkipperTiltCard({
  children,
  className = '',
  style = {},
  glare = true,
  maxTilt = 14,
}) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const [glareOpacity, setGlareOpacity] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    if (glare) setGlareOpacity(0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setGlareOpacity(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        perspective: 1000,
        ...style,
      }}
      className={`skipper-tilt-card ${className}`}
    >
      <div
        style={{
          position: 'relative',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(17, 34, 64, 0.75) 0%, rgba(8, 16, 32, 0.9) 100%)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 240, 255, 0.1)',
          transition: 'border-color 0.3s ease',
          height: '100%',
        }}
      >
        {/* Dynamic specular glare overlay */}
        {glare && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              opacity: glareOpacity,
              transition: 'opacity 0.2s ease',
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.35), transparent 60%)`,
              zIndex: 3,
            }}
          />
        )}

        <div style={{ position: 'relative', zIndex: 2, transform: 'translateZ(30px)' }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Skipper UI: Conic Glow Card
 * Rotating animated neon border gradient with sleek frosted surface.
 */
export function SkipperConicGlowCard({ children, className = '', style = {}, tag = null }) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '20px',
        padding: '2px',
        overflow: 'hidden',
        background: 'transparent',
        ...style,
      }}
      className={`skipper-conic-glow-card ${className}`}
    >
      {/* Animated rotating conic neon beam */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'conic-gradient(from 0deg, transparent 0deg 240deg, #00f0ff 300deg, #a855f7 330deg, #00f0ff 360deg)',
          zIndex: 0,
        }}
      />

      {/* Card Body */}
      <div
        style={{
          position: 'relative',
          borderRadius: '18px',
          background: 'rgba(7, 15, 30, 0.94)',
          backdropFilter: 'blur(20px)',
          padding: '1.75rem',
          zIndex: 1,
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        {tag && (
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(0, 240, 255, 0.15)',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              color: '#00f0ff',
              padding: '2px 10px',
              borderRadius: '20px',
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {tag}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

/**
 * Skipper UI: Pulsing Animated Metric Badge
 */
export function SkipperMetricBadge({ label, value, color = '#00f0ff' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 14px',
        borderRadius: '30px',
        background: 'rgba(15, 23, 42, 0.75)',
        border: `1px solid ${color}44`,
        boxShadow: `0 0 15px ${color}22`,
      }}
    >
      <span
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: color,
          display: 'inline-block',
          boxShadow: `0 0 8px ${color}`,
          animation: 'skipper-pulse 2s infinite',
        }}
      />
      <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>{label}:</span>
      <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 700 }}>{value}</span>
    </motion.div>
  );
}
