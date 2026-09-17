import React, { useEffect, useRef } from 'react';

/**
 * Interactive 3D Canvas
 * Renders an interactive 3D particle constellation with rotational inertia,
 * depth perspective scaling, glowing connections, and cursor gravity.
 */
export default function Interactive3DCanvas({ className = '', style = {} }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle Sphere / Field setup
    const particleCount = 140;
    const particles = [];
    const sphereRadius = Math.min(width, height) * 0.38;

    for (let i = 0; i < particleCount; i++) {
      // Uniform spherical distribution using Fibonacci sphere or random spherical coords
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      const r = sphereRadius * (0.6 + 0.4 * Math.random());

      particles.push({
        x: r * Math.sin(theta) * Math.cos(phi),
        y: r * Math.sin(theta) * Math.sin(phi),
        z: r * Math.cos(theta),
        baseSize: 1.5 + Math.random() * 2.5,
        color: Math.random() > 0.4 ? '#0052cc' : Math.random() > 0.5 ? '#2563eb' : '#0284c7',
        pulseSpeed: 0.02 + Math.random() * 0.04,
        pulseVal: Math.random() * Math.PI,
      });
    }

    // Camera / Rotation state
    let rotX = 0.2;
    let rotY = 0.4;
    let targetRotX = 0.2;
    let targetRotY = 0.4;
    let mouseX = 0;
    let mouseY = 0;
    let isHovered = false;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseY = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = mouseX * 2.5;
      targetRotX = -mouseY * 2.5;
      isHovered = true;
    };

    const onMouseLeave = () => {
      isHovered = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const fov = 420;
    const centerX = width / 2;
    const centerY = height / 2;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Auto rotate when idle, or blend with mouse target
      if (!isHovered) {
        targetRotY += 0.0035;
        targetRotX = Math.sin(targetRotY * 0.5) * 0.25;
      }
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Transform & Project particles
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulseVal += p.pulseSpeed;
        const pulse = 0.8 + 0.3 * Math.sin(p.pulseVal);

        // 3D rotation matrix
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective projection
        const scale = fov / (fov + z2 + 300);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;
        const alpha = Math.max(0.12, Math.min(1, (z2 + 250) / 380));

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          scale,
          alpha,
          size: p.baseSize * scale * pulse,
          color: p.color,
        });
      }

      // Sort by depth (back to front)
      projected.sort((a, b) => a.z - b.z);

      // Draw connecting filaments
      const maxDistance = 75;
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.25 * Math.min(projected[i].alpha, projected[j].alpha);
            ctx.strokeStyle = `rgba(0, 82, 204, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Glowing Particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        // Outer glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5);
        grad.addColorStop(0, `rgba(37, 99, 235, ${p.alpha * 0.4})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.size), 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw 3D Core Concentric Rings
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotY * 0.5);
      ctx.scale(1, 0.32);
      ctx.beginPath();
      ctx.arc(0, 0, sphereRadius * 0.95, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 82, 204, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (canvas) canvas.removeEventListener('mouseleave', onMouseLeave);
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
