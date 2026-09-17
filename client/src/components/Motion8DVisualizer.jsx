import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Sparkles, Play, Pause } from 'lucide-react';

/**
 * 8D Spatial Motion & Soundwave Visualizer
 * Real-time harmonic frequency canvas rendering spatial motion waves,
 * simulated 8D audio pans, and dynamic frequency ribbons.
 */
export default function Motion8DVisualizer({ className = '', style = {} }) {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [spatialAngle, setSpatialAngle] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = canvas.parentElement.offsetWidth || 800);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 260);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    let phase = 0;
    let angle = 0;

    const bars = 48;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (isPlaying) {
        phase += 0.04;
        angle = (angle + 0.02) % (Math.PI * 2);
        setSpatialAngle(Math.round((angle * 180) / Math.PI));
      }

      const centerY = height / 2;
      const barWidth = width / bars;

      // Draw 8D Orbit Ring indicator
      const orbitX = width / 2 + Math.cos(angle) * (width * 0.38);
      const orbitY = centerY + Math.sin(angle) * 35;
      const orbitScale = 0.6 + 0.4 * (Math.sin(angle) + 1);

      // Ambient 8D Glow Orb
      const orbGrad = ctx.createRadialGradient(orbitX, orbitY, 0, orbitX, orbitY, 60 * orbitScale);
      orbGrad.addColorStop(0, 'rgba(0, 240, 255, 0.4)');
      orbGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.2)');
      orbGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = orbGrad;
      ctx.beginPath();
      ctx.arc(orbitX, orbitY, 60 * orbitScale, 0, Math.PI * 2);
      ctx.fill();

      // Core Satellite Node
      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.arc(orbitX, orbitY, 4 * orbitScale, 0, Math.PI * 2);
      ctx.fill();

      // Harmonic Multi-Waveforms
      const waveCount = 3;
      const colors = [
        { stroke: 'rgba(0, 240, 255, 0.75)', fill: 'rgba(0, 240, 255, 0.08)' },
        { stroke: 'rgba(147, 51, 234, 0.65)', fill: 'rgba(147, 51, 234, 0.05)' },
        { stroke: 'rgba(16, 185, 129, 0.55)', fill: 'rgba(16, 185, 129, 0.04)' },
      ];

      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        ctx.moveTo(0, centerY);

        const freq = 0.008 + w * 0.004;
        const amp = 35 - w * 7;
        const speed = phase * (1 + w * 0.35);

        for (let x = 0; x <= width; x += 4) {
          const envelope = Math.sin((x / width) * Math.PI); // tapering ends
          const y =
            centerY +
            Math.sin(x * freq + speed) * amp * envelope +
            Math.cos(x * freq * 0.5 - speed) * (amp * 0.5) * envelope;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = colors[w].stroke;
        ctx.lineWidth = 2 - w * 0.4;
        ctx.stroke();

        // Wave Fill
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.fillStyle = colors[w].fill;
        ctx.fill();
      }

      // Vertical 8D Equalizer Bars (Center Stage)
      for (let i = 0; i < bars; i++) {
        const x = i * barWidth + barWidth * 0.2;
        const distFromOrbit = Math.abs(x - orbitX) / width;
        const proxBoost = Math.max(0, 1 - distFromOrbit * 3) * 1.6;

        const dynamicHeight =
          (Math.sin(i * 0.45 + phase * 1.5) * 0.5 + 0.5) * 55 * (0.4 + proxBoost) + 10;

        const barGrad = ctx.createLinearGradient(x, centerY - dynamicHeight / 2, x, centerY + dynamicHeight / 2);
        barGrad.addColorStop(0, '#00f0ff');
        barGrad.addColorStop(0.5, '#3b82f6');
        barGrad.addColorStop(1, '#a855f7');

        ctx.fillStyle = barGrad;
        ctx.fillRect(x, centerY - dynamicHeight / 2, barWidth * 0.6, dynamicHeight);
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPlaying]);

  return (
    <div
      className={`motion-visualizer-card ${className}`}
      style={{
        position: 'relative',
        background: 'rgba(10, 18, 36, 0.7)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 240, 255, 0.25)',
        borderRadius: '20px',
        padding: '1.5rem',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        ...style,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '20px',
              background: 'rgba(0, 240, 255, 0.15)',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              color: '#00f0ff',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            <Sparkles size={13} /> 8D Spatial Motion Engine
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}>
            Azimuth: <strong style={{ color: '#00f0ff' }}>{spatialAngle}°</strong> Orbit Active
          </span>
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '10px',
            background: isPlaying ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            color: 'white',
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {isPlaying ? <Pause size={14} color="#00f0ff" /> : <Play size={14} color="#00f0ff" />}
          {isPlaying ? 'Live 8D Motion' : 'Paused'}
        </button>
      </div>

      <div style={{ position: 'relative', height: '180px', width: '100%', borderRadius: '14px', overflow: 'hidden' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', position: 'relative', zIndex: 2 }}>
        <span>Spatial Panning: 360° Binaural Mesh</span>
        <span style={{ color: '#10b981', fontWeight: 600 }}>● Frequency Sync: 60 FPS Real-time</span>
        <span>Resolution: High-Fidelity 8K Stream</span>
      </div>
    </div>
  );
}
