import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const COLORS = [
      [0, 82, 204],
      [37, 99, 235],
      [2, 132, 199],
    ];

    // Minimal count (14 particles) for zero CPU overhead
    const CFG = {
      count: 14,
      minR: 0.8,
      maxR: 1.8,
      speed: 0.18,
    };

    let W, H;
    let particles = [];
    let animationId;
    let isRunning = true;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    class Dust {
      constructor() {
        this.init(true);
      }

      init(random) {
        this.x = random ? Math.random() * W : (Math.random() > 0.5 ? -5 : W + 5);
        this.y = random ? Math.random() * H : Math.random() * H;
        this.r = CFG.minR + Math.random() * (CFG.maxR - CFG.minR);
        const a = Math.random() * Math.PI * 2;
        const s = CFG.speed * (0.4 + Math.random() * 0.6);
        this.vx = Math.cos(a) * s;
        this.vy = Math.sin(a) * s;
        this.op = 0.04 + Math.random() * 0.08;
        const ci = Math.floor(Math.random() * COLORS.length);
        this.color = COLORS[ci];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -10 || this.x > W + 10 || this.y < -10 || this.y > H + 10) {
          this.init(false);
        }
      }

      draw() {
        const [r, g, b] = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${this.op})`;
        ctx.fill();
      }
    }

    resize();
    particles = [];
    for (let i = 0; i < CFG.count; i++) {
      particles.push(new Dust());
    }

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
      if (currentTime - lastTime < 33) return;
      lastTime = currentTime;

      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
    }

    animate(0);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
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
