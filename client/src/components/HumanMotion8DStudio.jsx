import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Maximize2,
  Cpu,
  Headphones,
  ShieldCheck,
  Video,
  Layers,
  Zap,
  Globe2,
  CheckCircle2,
  Radio,
  Activity,
  HeartPulse,
} from 'lucide-react';

import { SkipperTiltCard } from './extensions/SkipperUI';
import { AnimasterMagneticButton } from './extensions/AnimasterLib';

/**
 * Real-Human Video & Services Catalog
 */
const SERVICES_VIDEOS = [
  {
    id: 'sap-cloud',
    category: 'SAP & Cloud Transformation',
    title: 'Enterprise SAP S/4HANA Cloud Modernization',
    specialist: 'Rajesh V. — Chief Enterprise Architect, SAP CoE',
    description:
      'Watch our SAP lead demonstrate live S/4HANA cloud migration, Brownfield conversion pipelines, and BTP real-time telemetry with zero operational downtime.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-in-office-42792-large.mp4',
    poster: '/images/sap_cloud_mesh.jpg',
    badge: 'SAP S/4HANA',
    color: '#0052cc',
    icon: Cpu,
    stats: [
      { label: 'Migration Speed', val: '2.5x Faster' },
      { label: 'Downtime SLA', val: '0.00% Scheduled' },
      { label: 'Cloud Pods', val: 'Pune & Bengaluru' },
    ],
  },
  {
    id: 'bpo-ops',
    category: '24/7 Global BPO & CX',
    title: '24/7 Multilingual Omnichannel Call Center Operations',
    specialist: 'Priya S. — VP of Global Customer Operations',
    description:
      'Live look at Caretrix 24/7 operations in Navi Mumbai and Pune handling Tier-1/2 multilingual voice, chat, AI sentiment scoring, and omnichannel dispatch.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-with-headset-talking-on-a-call-in-an-office-42790-large.mp4',
    poster: '/bpo_outsourcing.png',
    badge: '24/7 BPO PODS',
    color: '#0284c7',
    icon: Headphones,
    stats: [
      { label: 'First Contact Res.', val: '94.6%' },
      { label: 'Languages', val: '12+ Indic & Global' },
      { label: 'Op Cost Saving', val: '40% Avg' },
    ],
  },
  {
    id: '8d-motion',
    category: 'Commercial 3D & 8D Motion',
    title: 'Cinematic 3D Video & 8D Spatial Audio Studio',
    specialist: 'Vikram M. — Creative Motion Director & Sound Designer',
    description:
      'Explore how our creative artists craft high-conversion commercial motion graphics, binaural 8D spatial soundscapes, and GEO/AEO optimized marketing media.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-video-editor-working-on-a-project-in-an-office-42794-large.mp4',
    poster: '/images/martech_3d_engine.jpg',
    badge: '8D MOTION STUDIO',
    color: '#7c3aed',
    icon: Sparkles,
    stats: [
      { label: 'ROAS Uplift', val: '5.2x Average' },
      { label: 'Binaural Audio', val: '360° Spatial' },
      { label: 'Render Pipeline', val: '8K Real-time' },
    ],
  },
  {
    id: 'healthcare-rcm',
    category: 'HIPAA Healthcare Operations',
    title: 'Healthcare Revenue Cycle & Medical Coding Desk',
    specialist: 'Dr. Ananya R. — Head of Healthcare Operations & RCM',
    description:
      'Real-world healthcare billing specialists processing claims, ICD-10/11 medical coding, automated denial management, and payer reconciliations.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-female-doctor-working-on-a-laptop-in-her-office-42785-large.mp4',
    poster: '/healthcare_ops.png',
    badge: 'HEALTHCARE RCM',
    color: '#059669',
    icon: HeartPulse,
    stats: [
      { label: 'Clean Claims Rate', val: '98.4%' },
      { label: 'Compliance', val: 'HIPAA & SOC 2' },
      { label: 'Turnaround', val: '< 24 Hours' },
    ],
  },
  {
    id: 'bgv-workforce',
    category: 'Pan-India BGV & Workforce',
    title: '28-State Background Verification & Field Logistics',
    specialist: 'Amit K. — National Operations Directorate',
    description:
      'Field officers executing real-time court record verifications, criminal database checks, and physical address audits spanning all 28 Indian States & 8 UTs.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-businessman-working-on-his-laptop-in-an-office-42777-large.mp4',
    poster: '/verification_services.png',
    badge: 'PAN-INDIA BGV',
    color: '#d97706',
    icon: ShieldCheck,
    stats: [
      { label: 'State Coverage', val: '28 States + 8 UTs' },
      { label: 'SLA Speed', val: '24-48 Hours' },
      { label: 'Court API Mesh', val: 'Real-time Link' },
    ],
  },
];

export default function HumanMotion8DStudio({ onOpenModal }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isSpatial8DOn, setIsSpatial8DOn] = useState(false);
  const [azimuth, setAzimuth] = useState(0);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const pannerRef = useRef(null);
  const oscRef = useRef(null);

  const activeService = SERVICES_VIDEOS[selectedIdx];

  // Handle Video play/pause
  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, selectedIdx]);

  // Handle 8D Spatial Audio Synth using Web Audio API
  useEffect(() => {
    if (isSpatial8DOn) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContext();
        }
        if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }

        const panner = audioCtxRef.current.createStereoPanner();
        pannerRef.current = panner;

        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, audioCtxRef.current.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime);

        osc.connect(panner);
        panner.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start();
        oscRef.current = osc;
      } catch (err) {
        console.warn('Web Audio 8D init error:', err);
      }
    } else {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch (e) {}
        oscRef.current = null;
      }
    }

    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch (e) {}
      }
    };
  }, [isSpatial8DOn]);

  // 8D Orbit Animation & Canvas Wave Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let angle = 0;
    let phase = 0;

    const render = () => {
      const w = (canvas.width = canvas.parentElement?.offsetWidth || 600);
      const h = (canvas.height = canvas.parentElement?.offsetHeight || 90);

      ctx.clearRect(0, 0, w, h);

      if (isPlaying) {
        angle = (angle + 0.025) % (Math.PI * 2);
        phase += 0.05;
        const currentDeg = Math.round((angle * 180) / Math.PI);
        setAzimuth(currentDeg);

        if (pannerRef.current && isSpatial8DOn) {
          const panVal = Math.sin(angle);
          pannerRef.current.pan.setValueAtTime(panVal, audioCtxRef.current?.currentTime || 0);
        }
      }

      const centerY = h / 2;

      // 8D Orbiting Sound Satellite
      const orbitRadiusX = w * 0.42;
      const orbitX = w / 2 + Math.cos(angle) * orbitRadiusX;
      const orbitY = centerY + Math.sin(angle) * 18;
      const orbitScale = 0.5 + 0.5 * (Math.sin(angle) + 1);

      // Orbit Glow
      const orbGrad = ctx.createRadialGradient(orbitX, orbitY, 0, orbitX, orbitY, 35 * orbitScale);
      orbGrad.addColorStop(0, `${activeService.color}77`);
      orbGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = orbGrad;
      ctx.beginPath();
      ctx.arc(orbitX, orbitY, 35 * orbitScale, 0, Math.PI * 2);
      ctx.fill();

      // Satellite Core Node
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(orbitX, orbitY, 3.5 * orbitScale, 0, Math.PI * 2);
      ctx.fill();

      // Harmonic Waves
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      for (let x = 0; x <= w; x += 4) {
        const env = Math.sin((x / w) * Math.PI);
        const y = centerY + Math.sin(x * 0.012 + phase) * 14 * env;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = activeService.color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Spectrum Bars
      const barCount = 32;
      const barWidth = w / barCount;
      for (let i = 0; i < barCount; i++) {
        const bx = i * barWidth + barWidth * 0.25;
        const distFromOrbit = Math.abs(bx - orbitX) / w;
        const prox = Math.max(0, 1 - distFromOrbit * 3.5);
        const bHeight = (Math.sin(i * 0.4 + phase * 1.8) * 0.5 + 0.5) * 26 * (0.3 + prox * 1.5) + 5;

        ctx.fillStyle = prox > 0.4 ? activeService.color : 'rgba(255, 255, 255, 0.25)';
        ctx.fillRect(bx, centerY - bHeight / 2, barWidth * 0.5, bHeight);
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPlaying, isSpatial8DOn, activeService]);

  return (
    <section
      id="motion-studio-section"
      style={{
        position: 'relative',
        padding: '5rem 0',
        background: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="container-fluid" style={{ position: 'relative', zIndex: 5 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '30px',
              background: '#e0f2fe',
              border: '1px solid #bae6fd',
              color: '#0284c7',
              fontWeight: 800,
              fontSize: '0.8rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            <Radio size={14} color="#0284c7" /> Enterprise Real-Human Media Studio
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#0f172a',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Real-Human Operations in <span style={{ color: '#0052cc' }}>3D Motion &amp; Spatial Sound</span>
          </h2>

          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Explore Caretrix Consulting's core service divisions presented by senior enterprise specialists with interactive 3D perspective orientation and 360-degree acoustic panning.
          </p>

          {/* Quick Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '1.25rem' }}>
            <span style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '30px', fontSize: '0.82rem', fontWeight: 600, color: '#334155', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
              ● 3D Perspective Physics
            </span>
            <span style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '30px', fontSize: '0.82rem', fontWeight: 600, color: '#334155', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
              ● 360° Binaural Audio
            </span>
            <span style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '6px 14px', borderRadius: '30px', fontSize: '0.82rem', fontWeight: 600, color: '#334155', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
              ● Pune &amp; Navi Mumbai Centers
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {SERVICES_VIDEOS.map((srv, idx) => {
            const IconComp = srv.icon;
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={srv.id}
                onClick={() => setSelectedIdx(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  background: isSelected ? '#123d6b' : '#ffffff',
                  border: isSelected ? '1.5px solid #123d6b' : '1px solid #cbd5e1',
                  color: isSelected ? '#ffffff' : '#334155',
                  boxShadow: isSelected ? '0 4px 14px rgba(18, 61, 107, 0.25)' : '0 1px 2px rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <IconComp size={16} color={isSelected ? '#ffffff' : '#64748b'} />
                <span>{srv.category}</span>
              </button>
            );
          })}
        </div>

        {/* Central Studio: 3D Video Viewport + Telemetry */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
            gap: '2.5rem',
            alignItems: 'center',
            maxWidth: '1240px',
            margin: '0 auto',
          }}
          className="studio-grid-wrap"
        >
          {/* Left Column: Video Player in Sleek Modern Container */}
          <SkipperTiltCard maxTilt={8}>
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#0f172a',
                border: '1px solid #334155',
                boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.3)',
              }}
            >
              {/* Video Player */}
              <div style={{ position: 'relative', aspectRatio: '16/9', width: '100%', overflow: 'hidden' }}>
                <video
                  ref={videoRef}
                  src={activeService.videoUrl}
                  poster={activeService.poster}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* HUD Top Bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    right: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pointerEvents: 'auto',
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: isPlaying ? '#10b981' : '#f59e0b',
                        display: 'inline-block',
                      }}
                    />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff' }}>
                      {isPlaying ? 'LIVE STREAM' : 'PAUSED'}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#38bdf8', fontWeight: 600 }}>
                      4K HDR
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      style={{
                        background: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '6px 10px',
                        color: isMuted ? '#94a3b8' : '#38bdf8',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      {isMuted ? 'Muted' : 'Unmuted'}
                    </button>

                    <button
                      onClick={() => setIsSpatial8DOn(!isSpatial8DOn)}
                      style={{
                        background: isSpatial8DOn ? '#2563eb' : 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      <Headphones size={14} />
                      <span>{isSpatial8DOn ? '8D Audio ON' : '8D Audio OFF'}</span>
                    </button>
                  </div>
                </div>

                {/* HUD Bottom Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '14px',
                    right: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      padding: '8px 14px',
                      borderRadius: '12px',
                      maxWidth: '75%',
                    }}
                  >
                    <div style={{ color: '#38bdf8', fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase' }}>
                      {activeService.badge}
                    </div>
                    <div style={{ color: '#ffffff', fontSize: '0.86rem', fontWeight: 600 }}>
                      {activeService.specialist}
                    </div>
                  </div>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0f172a',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    }}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                </div>
              </div>

              {/* Integrated 8D Spatial Motion Wave Canvas at bottom of card */}
              <div
                style={{
                  background: '#0b1329',
                  borderTop: '1px solid #1e293b',
                  padding: '12px 18px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Activity size={12} color="#38bdf8" /> 8D Binaural Acoustic Waveform
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700 }}>
                    Azimuth: {azimuth}° Panning
                  </span>
                </div>
                <div style={{ height: '55px', width: '100%', position: 'relative' }}>
                  <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
          </SkipperTiltCard>

          {/* Right Column: Service Telemetry & Modern Action Buttons */}
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '6px',
                background: '#e0f2fe',
                border: '1px solid #bae6fd',
                color: '#0284c7',
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Enterprise Service Spotlight
            </span>

            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#0f172a',
                marginBottom: '0.85rem',
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
              }}
            >
              {activeService.title}
            </h3>

            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              {activeService.description}
            </p>

            {/* Service SLA Stats Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '2rem',
              }}
            >
              {activeService.stats.map((st, i) => (
                <div
                  key={i}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '12px',
                    textAlign: 'center',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  }}
                >
                  <div style={{ color: '#0052cc', fontSize: '1.2rem', fontWeight: 800, marginBottom: '2px' }}>
                    {st.val}
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.74rem', fontWeight: 600 }}>{st.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <AnimasterMagneticButton
                onClick={onOpenModal}
                variant="primary"
                style={{ padding: '12px 24px', fontSize: '0.95rem' }}
              >
                <Zap size={16} />
                <span>Request {activeService.badge} Scope</span>
              </AnimasterMagneticButton>

              <button
                onClick={() => setIsSpatial8DOn(!isSpatial8DOn)}
                className="btn btn-secondary"
                style={{ padding: '12px 22px', fontSize: '0.92rem' }}
              >
                <Headphones size={16} />
                <span>{isSpatial8DOn ? 'Stop 8D Audio' : 'Test 8D Audio'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .studio-grid-wrap {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
