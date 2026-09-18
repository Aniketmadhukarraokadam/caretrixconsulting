import React, { useEffect, useRef } from 'react';

/**
 * Lightweight, high-performance Interactive 3D Canvas
 * Optimized to eliminate CPU spikes, avoid expensive radial gradient allocations per frame,
 * and automatically pause when off-screen.
 */
export default function Interactive3DCanvas({ className = '', style = {} }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Optimized particle count (50 instead of 140)
    const particleCount = 50;
    const particles = [];
    const sphereRadius = Math.min(width, height) * 0.38;

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      const r = sphereRadius * (0.65 + 0.35 * Math.random());

      particles.push({
        x: r * Math.sin(theta) * Math.cos(phi),
        y: r * Math.sin(theta) * Math.sin(phi),
        z: r * Math.cos(theta),
        baseSize: 1.5 + Math.random() * 2,
        color: Math.random() > 0.4 ? 'rgba(0, 82, 204, 0.7)' : 'rgba(37, 99, 235, 0.7)',
        pulseSpeed: 0.015 + Math.random() * 0.02,
        pulseVal: Math.random() * Math.PI,
      });
    }

    let rotX = 0.2;
    let rotY = 0.4;
    let targetRotX = 0.2;
    let targetRotY = 0.4;
    let isVisible = true;

    // Pause when scrolled past hero (performance optimization)
    const handleScroll = () => {
      isVisible = window.scrollY < 850;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle document visibility
    const handleVisibility = () => {
      isVisible = !document.hidden && window.scrollY < 850;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const fov = 450;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      rotX += (targetRotX - rotX) * 0.04;
      rotY += (targetRotY - rotY) * 0.04;
      targetRotY += 0.0018;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const centerX = width * 0.62;
      const centerY = height * 0.5;

      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulseVal += p.pulseSpeed;

        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const scale = fov / (fov + z2);
        const px = x1 * scale + centerX;
        const py = y2 * scale + centerY;

        const alpha = Math.max(0.1, Math.min(0.85, (z2 + sphereRadius) / (sphereRadius * 2)));
        const size = Math.max(1, p.baseSize * scale * (0.85 + 0.15 * Math.sin(p.pulseVal)));

        projected.push({ x: px, y: py, z: z2, size, alpha, color: p.color });
      }

      // Draw faint connections (limited to close particles)
      ctx.lineWidth = 0.75;
      const maxDist = 90;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.15;
            ctx.strokeStyle = `rgba(0, 82, 204, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots cleanly without expensive per-frame radial gradient allocations
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        ...style,
      }}
    />
  );
}
