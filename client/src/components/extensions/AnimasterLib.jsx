import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimasterLib: Animated Fluid Shader Canvas
 * Renders smooth interactive chromatic waves with mouse reaction.
 */
export function AnimasterShaderCanvas({
  colors = ['#00f0ff', '#3b82f6', '#8b5cf6', '#030712'],
  intensity = 1.0,
  className = '',
  style = {},
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = (e.clientX - rect.left) / canvas.width;
      mouseRef.current.targetY = (e.clientY - rect.top) / canvas.height;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      time += 0.015 * intensity;
      const w = canvas.width;
      const h = canvas.height;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, w, h);

      // Draw flowing wave ribbons
      const waveCount = 4;
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const yOffset = (h / (waveCount + 1)) * (i + 1);
        const waveColor = colors[i % colors.length];

        ctx.strokeStyle = waveColor;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = waveColor;
        ctx.shadowBlur = 16;

        for (let x = 0; x <= w; x += 8) {
          const dx = x / w - mouseRef.current.x;
          const mouseDist = Math.exp(-dx * dx * 10);
          const y =
            yOffset +
            Math.sin(x * 0.008 + time + i * 1.2) * 28 * (1 + mouseDist * 0.8) +
            Math.cos(x * 0.004 - time * 0.8) * 16;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`animaster-shader-canvas ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
        opacity: 0.65,
        ...style,
      }}
    />
  );
}

/**
 * AnimasterLib: Magnetic Spring Button
 * Magnetically pulls button towards cursor within proximity.
 */
export function AnimasterMagneticButton({
  children,
  onClick,
  className = '',
  strength = 0.35,
  style = {},
  variant = 'primary',
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = {
    primary: {
      background: 'linear-gradient(135deg, #00f0ff 0%, #3b82f6 100%)',
      color: '#030712',
      boxShadow: '0 0 25px rgba(0, 240, 255, 0.4)',
    },
    outline: {
      background: 'rgba(15, 23, 42, 0.8)',
      color: '#00f0ff',
      border: '1px solid rgba(0, 240, 255, 0.5)',
      boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.06)',
      backdropFilter: 'blur(12px)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.15)',
    },
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.2 }}
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.05 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '12px 28px',
        borderRadius: '12px',
        fontWeight: 700,
        fontSize: '0.95rem',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        position: 'relative',
        overflow: 'hidden',
        ...baseStyles[variant],
        ...style,
      }}
      className={`animaster-magnetic-btn ${className}`}
    >
      {children}
    </motion.button>
  );
}

/**
 * AnimasterLib: Spotlight Interactive Glow Container
 * Highlights cursor proximity over child elements.
 */
export function AnimasterSpotlight({ children, className = '', glowColor = 'rgba(0, 240, 255, 0.18)' }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
      className={`animaster-spotlight-wrap ${className}`}
    >
      {/* Dynamic radial spotlight */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`,
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}
