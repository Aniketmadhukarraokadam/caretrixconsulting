import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const COLORS = [
      [0, 166, 199],   // Caretrix Teal
      [18, 61, 107],   // Corporate Blue
      [247, 148, 29],  // Orange accent
    ];

    const CFG = {
      count: 50,
      minR: 0.6,
      maxR: 1.8,
      minOpacity: 0.05,
      maxOpacity: 0.16,
      speed: 0.25,
    };

    let W, H;
    let particles = [];
    let animationId;

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
        const s = CFG.speed * (0.3 + Math.random() * 0.7);
        this.vx = Math.cos(a) * s;
        this.vy = Math.sin(a) * s;
        this.op = CFG.minOpacity + Math.random() * (CFG.maxOpacity - CFG.minOpacity);
        const ci = Math.random() < 0.2 ? 2 : Math.floor(Math.random() * 2);
        this.color = COLORS[ci];
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.008 + Math.random() * 0.012;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;
        if (this.x < -10 || this.x > W + 10 || this.y < -10 || this.y > H + 10) {
          this.init(false);
        }
      }

      draw() {
        const alpha = this.op * (0.75 + 0.25 * Math.sin(this.pulse));
        const [r, g, b] = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.fill();
      }
    }

    resize();
    particles = [];
    for (let i = 0; i < CFG.count; i++) {
      particles.push(new Dust());
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.update();
        p.draw();
      }
      animationId = requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
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
