import React, { useState, useRef } from 'react';

/**
 * 3D Perspective Tilt Card
 * Tracks cursor coordinates on hover to apply real-time 3D rotation,
 * depth elevation, and specular glare reflection.
 */
export default function TiltCard({
  children,
  className = '',
  style = {},
  maxTilt = 14,
  glare = true,
  scale = 1.02,
  ...props
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 0.45,
        background: `radial-gradient(circle 250px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.25), transparent 75%)`,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card-container ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered
          ? 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)'
          : 'transform 0.55s cubic-bezier(0.2, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        willChange: 'transform',
        ...style,
      }}
      {...props}
    >
      {children}
      {glare && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 10,
            transition: isHovered ? 'none' : 'opacity 0.5s ease',
            ...glareStyle,
          }}
        />
      )}
    </div>
  );
}
