import React, { useEffect, useRef } from 'react';

/**
 * Kinetic Neural Mesh Canvas
 * Custom, lightweight canvas animation featuring interconnecting glowing synaptic nodes
 * and subtle ambient energy waves that react smoothly to user cursor interaction.
 */
export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H;
    let nodes = [];
    let mouse = { x: -1000, y: -1000, radius: 160 };
    let animationId;
    let isRunning = true;

    const NODE_COUNT = 38;
    const MAX_DISTANCE = 145;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    class Node {
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.6 + 1.2;
        this.baseAlpha = Math.random() * 0.25 + 0.15;
        this.alpha = this.baseAlpha;
        this.pulse = Math.random() * Math.PI * 2;
        this.color = Math.random() > 0.4 ? '37, 99, 235' : '2, 132, 199'; // Sapphire or Cerulean
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;

        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;

        // Mouse proximity reaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.5;
          this.x -= (dx / dist) * force;
          this.y -= (dy / dist) * force;
          this.alpha = Math.min(0.7, this.baseAlpha + 0.35);
        } else {
          this.alpha = this.baseAlpha + Math.sin(this.pulse) * 0.06;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();

        // Subtle halo
        if (this.alpha > 0.3) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.color}, ${this.alpha * 0.15})`;
          ctx.fill();
        }
      }
    }

    resize();
    nodes = Array.from({ length: NODE_COUNT }, () => new Node());

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);

    const handleVisibility = () => {
      isRunning = !document.hidden;
      if (isRunning && !animationId) {
        animate();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let lastTime = 0;
    function animate(currentTime = 0) {
      if (!isRunning) {
        animationId = null;
        return;
      }
      animationId = requestAnimationFrame(animate);
      if (currentTime - lastTime < 24) return; // Cap at ~40-60fps
      lastTime = currentTime;

      ctx.clearRect(0, 0, W, H);

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            const lineAlpha = (1 - dist / MAX_DISTANCE) * 0.14;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Update & draw nodes
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
        nodes[i].draw();
      }
    }

    animate(0);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      id="particle-canvas"
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'block',
      }}
    />
  );
}
