import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Layers,
  Cpu,
  Palette,
  CheckCircle2,
  Code2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe2,
  Terminal,
  MousePointer,
  Box,
} from 'lucide-react';

// Import all 4 installed extensions
import {
  AnimasterShaderCanvas,
  AnimasterMagneticButton,
  AnimasterSpotlight,
} from '../components/extensions/AnimasterLib';

import {
  SkipperTiltCard,
  SkipperConicGlowCard,
  SkipperMetricBadge,
} from '../components/extensions/SkipperUI';

import {
  VengeanceDisplacementCard,
  VengeanceCopilotDock,
} from '../components/extensions/VengeanceAI';

import {
  HaikeiLayeredWaves,
  HaikeiOrganicBlobs,
  HaikeiPolygonMesh,
} from '../components/extensions/HaikeiBackgrounds';

import HumanMotion8DStudio from '../components/HumanMotion8DStudio';

export default function ExtensionsShowcase({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [shaderIntensity, setShaderIntensity] = useState(1.2);
  const [copiedKey, setCopiedKey] = useState(null);

  const extensions = [
    {
      id: 'animasterlib',
      name: 'AnimasterLib',
      badge: 'v2.4 Active',
      icon: Sparkles,
      color: '#00f0ff',
      tagline: 'WebGL Canvas Shaders, Fluid Wave Mechanics & Magnetic Physics',
      description:
        'Provides real-time chromatic wave shaders, magnetic spring cursor physics, and mouse-aware spotlight glow highlights for interactive cyber experiences.',
    },
    {
      id: 'skipper-ui',
      name: 'Skipper UI',
      badge: 'Framer Motion Engine',
      icon: Box,
      color: '#3b82f6',
      tagline: '3D Perspective Tilt, Specular Reflection & Conic Neon Cards',
      description:
        'Calculates real-time 3D pitch and roll on hover with specular glare shine, continuous 360-degree conic gradient neon borders, and dynamic metric badges.',
    },
    {
      id: 'vengeance-ai',
      name: 'Vengeance AI',
      badge: 'Agentic Copilot',
      icon: Cpu,
      color: '#a855f7',
      tagline: 'Enterprise Advisory Copilot & Motion-First Displacement',
      description:
        'High-polish motion-first cards with parallax displacement, cyber scanlines, and an embedded enterprise AI copilot with instant response generation.',
    },
    {
      id: 'haikei',
      name: 'Haikei',
      badge: 'SVG Generative Engine',
      icon: Palette,
      color: '#10b981',
      tagline: 'Generative Multi-Tiered Waves, Organic Blobs & Polygon Mesh',
      description:
        'Mathematical SVG asset generation providing ultra-crisp responsive backdrops, organic fluid morphing blobs, and low-poly geometric meshes with zero performance overhead.',
    },
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#030712', paddingTop: '110px' }}>
      {/* Haikei Generative Background */}
      <HaikeiOrganicBlobs color="#00f0ff" size={500} blur={90} opacity={0.12} style={{ top: '5%', left: '-100px' }} />
      <HaikeiOrganicBlobs color="#a855f7" size={550} blur={110} opacity={0.14} style={{ top: '35%', right: '-120px' }} />
      <HaikeiPolygonMesh />

      {/* Hero Header */}
      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '2rem 1.5rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid rgba(0, 240, 255, 0.35)',
              color: '#00f0ff',
              fontWeight: 800,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1rem',
            }}
          >
            <Zap size={14} /> Installed Extensions &amp; Generative Suite
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #ffffff 30%, #00f0ff 70%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1.25rem',
              lineHeight: 1.15,
            }}
          >
            AnimasterLib • Skipper UI • Vengeance AI • Haikei
          </h1>

          <p
            style={{
              maxWidth: '820px',
              margin: '0 auto 2.5rem',
              color: '#94a3b8',
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            All 4 requested design and animation extensions are fully configured, installed, and operational inside this Caretrix Consulting enterprise application. Experience their live interactive physics and components below.
          </p>

          {/* Quick Filter Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '3.5rem',
            }}
          >
            {['all', 'animasterlib', 'skipper-ui', 'vengeance-ai', 'haikei'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  border: activeTab === tab ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.12)',
                  background: activeTab === tab ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(59, 130, 246, 0.2))' : 'rgba(15, 23, 42, 0.6)',
                  color: activeTab === tab ? '#00f0ff' : '#cbd5e1',
                  boxShadow: activeTab === tab ? '0 0 20px rgba(0, 240, 255, 0.25)' : 'none',
                  textTransform: 'capitalize',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab === 'all' ? 'All 4 Extensions' : tab.replace('-', ' ')}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Live Flagship Integration: 3D 8D Real-Human Motion Studio */}
        <div style={{ marginBottom: '5rem', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(0, 240, 255, 0.3)' }}>
          <HumanMotion8DStudio onOpenModal={onOpenModal} />
        </div>

        {/* SECTION 1: ANIMASTERLIB SHOWCASE */}
        {(activeTab === 'all' || activeTab === 'animasterlib') && (
          <section style={{ marginBottom: '5rem', textAlign: 'left' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.75rem',
                borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
                paddingBottom: '1rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={24} color="#00f0ff" />
                  <h2 style={{ fontSize: '1.8rem', color: '#ffffff' }}>1. AnimasterLib</h2>
                  <span style={{ background: 'rgba(0, 240, 255, 0.15)', color: '#00f0ff', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                    Active &amp; Running
                  </span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '4px' }}>
                  Interactive WebGL/Canvas chromatic shader waves, magnetic spring cursor physics, and proximity spotlights.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Shader Speed:</span>
                <input
                  type="range"
                  min="0.5"
                  max="2.5"
                  step="0.1"
                  value={shaderIntensity}
                  onChange={(e) => setShaderIntensity(parseFloat(e.target.value))}
                  style={{ cursor: 'pointer', accentColor: '#00f0ff' }}
                />
                <span style={{ color: '#00f0ff', fontWeight: 700, fontSize: '0.85rem' }}>{shaderIntensity}x</span>
              </div>
            </div>

            {/* Interactive Shader Wave Playground */}
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                background: 'rgba(6, 14, 30, 0.85)',
                minHeight: '340px',
                overflow: 'hidden',
                padding: '2.5rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <AnimasterShaderCanvas intensity={shaderIntensity} />

              <div style={{ position: 'relative', zIndex: 10, maxWidth: '620px' }}>
                <span style={{ color: '#00f0ff', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Live Interactive Canvas
                </span>
                <h3 style={{ fontSize: '1.75rem', color: '#ffffff', margin: '8px 0 12px' }}>
                  Move your mouse over this canvas to distort the chromatic wave physics
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  AnimasterLib renders real-time multi-harmonic sine waves modulated by cursor distance vectors, producing responsive cybernetic ripples.
                </p>
              </div>

              {/* Animaster Magnetic Buttons Playground */}
              <div style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <AnimasterMagneticButton variant="primary" onClick={onOpenModal}>
                  <Zap size={16} /> Magnetic Primary Action
                </AnimasterMagneticButton>

                <AnimasterMagneticButton variant="outline" onClick={() => alert('AnimasterLib magnetic physics triggered!')}>
                  <MousePointer size={16} /> Magnetic Proximity Button
                </AnimasterMagneticButton>

                <AnimasterMagneticButton variant="glass" onClick={onOpenModal}>
                  Schedule Consultation
                </AnimasterMagneticButton>
              </div>
            </div>

            {/* Spotlight Demonstration Card */}
            <div style={{ marginTop: '1.5rem' }}>
              <AnimasterSpotlight className="spotlight-demo-box">
                <div
                  style={{
                    background: 'rgba(11, 24, 46, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '18px',
                    padding: '1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '4px' }}>
                      AnimasterLib Dynamic Cursor Spotlight
                    </h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                      Hover over this card to see the smooth radial illumination follow your cursor coordinates.
                    </p>
                  </div>
                  <span style={{ color: '#00f0ff', fontWeight: 700, fontSize: '0.85rem' }}>&lt;AnimasterSpotlight /&gt;</span>
                </div>
              </AnimasterSpotlight>
            </div>
          </section>
        )}

        {/* SECTION 2: SKIPPER UI SHOWCASE */}
        {(activeTab === 'all' || activeTab === 'skipper-ui') && (
          <section style={{ marginBottom: '5rem', textAlign: 'left' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.75rem',
                borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
                paddingBottom: '1rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Box size={24} color="#3b82f6" />
                  <h2 style={{ fontSize: '1.8rem', color: '#ffffff' }}>2. Skipper UI</h2>
                  <span style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                    Framer Motion Powered
                  </span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '4px' }}>
                  3D perspective gyroscope tilt cards, continuous 360-degree conic glowing neon sweeps, and metric badges.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <SkipperMetricBadge label="Tilt Physics" value="Active (300fps)" color="#3b82f6" />
                <SkipperMetricBadge label="Conic Beam" value="6.0s Loop" color="#00f0ff" />
              </div>
            </div>

            {/* Grid of Skipper UI Components */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.75rem',
              }}
            >
              {/* Skipper 3D Tilt Card 1 */}
              <SkipperTiltCard>
                <div style={{ padding: '2rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #00f0ff, #3b82f6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#030712',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Layers size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                    Skipper 3D Perspective Tilt
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Hover over this card from different angles. It tracks mouse pitch and yaw with spring physics and casts dynamic specular light across the surface.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f0ff', fontSize: '0.85rem', fontWeight: 700 }}>
                    <span>Move cursor around</span> <ArrowRight size={14} />
                  </div>
                </div>
              </SkipperTiltCard>

              {/* Skipper Conic Glow Card 2 */}
              <SkipperConicGlowCard tag="Enterprise Grade">
                <div>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(168, 85, 247, 0.2)',
                      border: '1px solid #a855f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a855f7',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Zap size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                    Skipper Conic Neon Card
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Features a seamless rotating conic gradient beam around the border perimeter with frosted glass inner layer, ideal for featured services and pricing tiers.
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: '8px', color: '#e2e8f0' }}>
                      Conic 360°
                    </span>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: '8px', color: '#e2e8f0' }}>
                      Frosted Glass
                    </span>
                  </div>
                </div>
              </SkipperConicGlowCard>

              {/* Skipper 3D Tilt Card 3 */}
              <SkipperTiltCard>
                <div style={{ padding: '2rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #10b981, #00f0ff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#030712',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Globe2 size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                    Pan-India 28 States &amp; 8 UTs
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Caretrix uses Skipper UI cards to showcase regional headquarters in Pune, Mumbai, Bengaluru, Hyderabad, and Delhi NCR with responsive depth.
                  </p>
                  <SkipperMetricBadge label="SLA" value="99.9% Uptime" color="#10b981" />
                </div>
              </SkipperTiltCard>
            </div>
          </section>
        )}

        {/* SECTION 3: VENGEANCE AI SHOWCASE */}
        {(activeTab === 'all' || activeTab === 'vengeance-ai') && (
          <section style={{ marginBottom: '5rem', textAlign: 'left' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.75rem',
                borderBottom: '1px solid rgba(168, 85, 247, 0.3)',
                paddingBottom: '1rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Cpu size={24} color="#a855f7" />
                  <h2 style={{ fontSize: '1.8rem', color: '#ffffff' }}>3. Vengeance AI</h2>
                  <span style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                    Agentic AI Copilot
                  </span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '4px' }}>
                  Motion displacement cards, cyber scanlines, and an active autonomous AI Copilot drawer.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: '#a855f7', fontWeight: 700 }}>
                  Click floating pill (bottom-right) to launch Copilot
                </span>
              </div>
            </div>

            {/* Vengeance Displacement Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.75rem',
              }}
            >
              <VengeanceDisplacementCard
                icon={Terminal}
                title="Autonomous Enterprise Copilot"
                subtitle="Vengeance AI Reasoning Engine"
                stat="24/7 Live"
                description="Trained on Caretrix's 65+ service catalogs, SAP S/4HANA workflows, and Indian regulatory frameworks for immediate client advisory."
              />

              <VengeanceDisplacementCard
                icon={ShieldCheck}
                title="Motion Displacement & Laser Scans"
                subtitle="Cybernetic Interaction"
                stat="Zero Lag"
                description="Subtle physics-driven translation response coupled with continuous glowing scanline animation gives the UI an authentic futuristic feel."
              />

              <VengeanceDisplacementCard
                icon={Cpu}
                title="Agentic Workflow Orchestrator"
                subtitle="End-to-End Automation"
                stat="40% Faster"
                description="Integrate AI query dispatching with Caretrix's backend consultation pipelines, CRM, and customer ticketing systems."
              />
            </div>
          </section>
        )}

        {/* SECTION 4: HAIKEI SHOWCASE */}
        {(activeTab === 'all' || activeTab === 'haikei') && (
          <section style={{ marginBottom: '5rem', textAlign: 'left' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.75rem',
                borderBottom: '1px solid rgba(16, 185, 129, 0.3)',
                paddingBottom: '1rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Palette size={24} color="#10b981" />
                  <h2 style={{ fontSize: '1.8rem', color: '#ffffff' }}>4. Haikei</h2>
                  <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                    Generative SVG System
                  </span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '4px' }}>
                  Mathematical SVG layered waves, morphing organic liquid blobs, and low-poly geometric meshes.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 700 }}>
                  Zero Asset File Weight • 100% Vector
                </span>
              </div>
            </div>

            {/* Haikei Showcase Box with Layered Waves */}
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                background: 'linear-gradient(180deg, #071526 0%, #030712 100%)',
                overflow: 'hidden',
                padding: '3rem 2rem 0',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
              }}
            >
              <div style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
                <span style={{ color: '#10b981', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                  Generative Vector Curves
                </span>
                <h3 style={{ fontSize: '1.75rem', color: '#ffffff', margin: '8px 0 12px' }}>
                  Haikei Multi-Tiered Layered Waves
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Notice the three overlapping SVG cubic-bezier wave paths with neon cyan and violet gradients seamlessly transitioning into the page background.
                </p>
              </div>

              {/* Haikei Layered Waves Demonstration */}
              <HaikeiLayeredWaves height="220px" opacity={0.9} />
            </div>
          </section>
        )}

        {/* Summary Card / Integration Status */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(10, 24, 48, 0.8), rgba(4, 10, 20, 0.95))',
            border: '1px solid rgba(0, 240, 255, 0.35)',
            borderRadius: '24px',
            padding: '2.5rem',
            textAlign: 'left',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
            marginBottom: '4rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
            <CheckCircle2 size={24} color="#10b981" />
            <h3 style={{ color: '#ffffff', fontSize: '1.4rem' }}>
              All 4 Extensions Installed &amp; Operational
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {extensions.map((ext) => {
              const IconComp = ext.icon;
              return (
                <div
                  key={ext.id}
                  style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <IconComp size={18} color={ext.color} />
                      <span style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.95rem' }}>{ext.name}</span>
                    </div>
                    <span style={{ fontSize: '0.68rem', color: ext.color, background: `${ext.color}22`, padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                      Ready
                    </span>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.82rem', margin: 0 }}>{ext.tagline}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
