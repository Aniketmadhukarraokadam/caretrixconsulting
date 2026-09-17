import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe2,
  TrendingUp,
  Sparkles,
  Zap,
  BarChart3,
  Layers,
  Compass,
  DollarSign,
  ChevronRight,
} from 'lucide-react';
import Interactive3DCanvas from '../components/Interactive3DCanvas';
import TiltCard from '../components/TiltCard';
import StatCounter from '../components/StatCounter';
import PanIndiaAndAEOSection from '../components/PanIndiaAndAEOSection';
import HumanMotion8DStudio from '../components/HumanMotion8DStudio';
import { AnimasterMagneticButton } from '../components/extensions/AnimasterLib';

export default function Home({ onOpenModal }) {
  // ROI / Savings Estimator state
  const [estimatorTeamSize, setEstimatorTeamSize] = useState('15');
  const [estimatorDomain, setEstimatorDomain] = useState('sap');

  const getEstimatedSavings = () => {
    const size = parseInt(estimatorTeamSize, 10) || 15;
    const rates = {
      sap: { usRate: 180, ctRate: 55, name: 'SAP S/4HANA & Enterprise Cloud Pod' },
      martech: { usRate: 130, ctRate: 40, name: 'Digital Marketing & 8D Motion Growth Pod' },
      healthcare: { usRate: 75, ctRate: 22, name: 'Healthcare Operations & RCM Billing Pod' },
      software: { usRate: 140, ctRate: 45, name: 'Full-Stack Software & AI Engineering Pod' },
    };
    const domainData = rates[estimatorDomain] || rates.sap;
    const annualHoursPerDev = 1920;
    const standardCost = size * domainData.usRate * annualHoursPerDev;
    const caretrixCost = size * domainData.ctRate * annualHoursPerDev;
    const annualSavings = standardCost - caretrixCost;
    return {
      name: domainData.name,
      savingsMillion: (annualSavings / 1000000).toFixed(2),
      savingsPercent: Math.round(((standardCost - caretrixCost) / standardCost) * 100),
    };
  };

  const currentEstimator = getEstimatedSavings();

  return (
    <div className="full-frame-homepage" style={{ background: '#f8fafc', color: '#0f172a' }}>
      {/* 1. Full-Frame Modern Executive Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          background: 'radial-gradient(ellipse 90% 70% at 50% -10%, #e0f2fe 0%, #f8fafc 65%, #f8fafc 100%)',
          overflow: 'hidden',
          padding: '6rem 0 4.5rem',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        {/* Interactive 3D Canvas Background */}
        <Interactive3DCanvas />

        {/* Soft Ambient Depth Accents */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(0, 82, 204, 0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div className="container-fluid" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            {/* Hero Left Column */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '30px',
                  background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  boxShadow: '0 2px 8px rgba(37, 99, 235, 0.08)',
                  marginBottom: '1.5rem',
                }}
              >
                <Sparkles size={16} color="#1d4ed8" />
                <span style={{ color: '#1d4ed8', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                  Enterprise Digital Transformation &amp; Global Consulting
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.6rem, 4.8vw, 4.4rem)',
                  fontWeight: 900,
                  lineHeight: '1.1',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.03em',
                  color: '#0f172a',
                }}
              >
                Engineering the <span className="gradient-text-cyber">Digital Future</span> with 3D Motion &amp; Global Consulting.
              </h1>

              <p
                style={{
                  fontSize: '1.18rem',
                  color: '#475569',
                  lineHeight: '1.75',
                  marginBottom: '2.5rem',
                  maxWidth: '680px',
                }}
              >
                Caretrix delivers Fortune-500 scale digital innovation: <strong>SAP S/4HANA Cloud Transformations</strong>, 
                high-velocity <strong>Digital Marketing &amp; 8D Motion Video</strong>, autonomous <strong>HRMS Software</strong>, 
                and round-the-clock <strong>24/7 Global Delivery Pods</strong> from Pune and Navi Mumbai.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3rem', alignItems: 'center' }}>
                <AnimasterMagneticButton
                  onClick={onOpenModal}
                  variant="primary"
                  style={{ padding: '0.95rem 2.2rem', fontSize: '1.05rem' }}
                >
                  <Sparkles size={18} />
                  <span>Initiate Enterprise RFP</span>
                  <ArrowRight size={18} />
                </AnimasterMagneticButton>

                <Link
                  to="/services"
                  className="btn btn-secondary"
                  style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
                >
                  <Layers size={18} color="#123d6b" />
                  <span>Explore 65+ Services</span>
                </Link>
              </div>

              {/* Trust Micro-Metrics */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2.5rem',
                  flexWrap: 'wrap',
                  borderTop: '1px solid #e2e8f0',
                  paddingTop: '1.75rem',
                }}
              >
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1d4ed8' }}>
                    <StatCounter end={180} duration={1500} prefix="$" suffix="M+" />
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Client Pipeline Influenced</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#059669' }}>
                    <StatCounter end={99.8} duration={1500} decimals={1} suffix="%" />
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Verified SLA Adherence</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d97706' }}>
                    <StatCounter end={13} duration={1200} suffix=" Pods" />
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Specialized Delivery Centers</div>
                </div>
              </div>
            </div>

            {/* Hero Right Column: 3D Visual Card */}
            <div>
              <TiltCard
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '24px',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'relative', height: '360px', overflow: 'hidden' }}>
                  <img
                    src="/images/hero_3d_mesh.jpg"
                    alt="3D Holographic Global Mesh Network"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '18px',
                      left: '18px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid #cbd5e1',
                      padding: '6px 14px',
                      borderRadius: '30px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#1d4ed8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Globe2 size={14} /> LIVE GLOBAL DATA FABRIC
                  </div>
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: '#0f172a' }}>
                    Connected Global Intelligence
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    Unified cross-border delivery spanning Pune Global HQ, Navi Mumbai Center, and international enterprise nodes. Real-time observability and sub-second transaction routing.
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {['ISO 9001:2015', 'ISO 27001 Security', 'SOC2 Compliant', 'HIPAA Certified'].map((cert, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: '#f1f5f9',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          padding: '4px 10px',
                          fontSize: '0.76rem',
                          color: '#334155',
                          fontWeight: 600,
                        }}
                      >
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full-Bleed Capabilities Marquee */}
      <div className="marquee-container" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '16px 0' }}>
        <div className="marquee-content">
          {[
            'SAP S/4HANA CLOUD MIGRATIONS',
            '3D COMMERCIAL MOTION & 8D VIDEO',
            'AI SEARCH OPTIMIZATION (GEO & AEO)',
            'ENTERPRISE HRMS & PAYROLL CLOUD',
            'HIPAA REVENUE CYCLE MANAGEMENT',
            'MULTI-TOUCH ROAS ATTRIBUTION',
            '24/7 GLOBAL DELIVERY PODS',
            'INSTITUTIONAL BGV SCREENING',
          ].map((item, idx) => (
            <span
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '0.88rem',
                fontWeight: 800,
                letterSpacing: '1.2px',
                color: idx % 2 === 0 ? '#1d4ed8' : '#0f172a',
                textTransform: 'uppercase',
                padding: '0 20px',
              }}
            >
              <Sparkles size={14} color="#0284c7" /> {item}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Featured Enterprise Transformation Pillars */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container-fluid">
          <div className="text-center mx-auto" style={{ maxWidth: '850px', marginBottom: '4rem' }}>
            <span className="eyebrow eyebrow-cyber">
              <Compass size={14} /> Strategic Growth Engines
            </span>
            <h2 className="section-title">
              Full-Frame Enterprise <span className="gradient-text-cyber">Transformation Pillars</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Bridging cutting-edge MarTech, enterprise ERP cloud modernizations, and global operational resilience.
            </p>
          </div>

          <div className="grid-3">
            {/* Pillar 1: Digital Marketing & MarTech */}
            <TiltCard
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/images/martech_3d_engine.jpg"
                  alt="MarTech Command Center"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7), transparent 70%)' }} />
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #fbcfe8',
                    color: '#db2777',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                  }}
                >
                  DIGITAL MARKETING &amp; MARTECH
                </span>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', color: '#0f172a' }}>
                  AI Growth Marketing &amp; ROAS Scale
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                  Programmatic ad spend optimization, multi-channel funnels, Generative Engine Optimization (AEO/GEO), and hyper-converting sales copy.
                </p>
                <Link to="/services" style={{ color: '#1d4ed8', fontSize: '0.88rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Explore MarTech Services <ChevronRight size={16} />
                </Link>
              </div>
            </TiltCard>

            {/* Pillar 2: SAP S/4HANA & Enterprise Cloud */}
            <TiltCard
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/images/sap_cloud_mesh.jpg"
                  alt="SAP S/4HANA Cloud Architecture"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7), transparent 70%)' }} />
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #fde68a',
                    color: '#d97706',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                  }}
                >
                  SAP S/4HANA &amp; ENTERPRISE ERP
                </span>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', color: '#0f172a' }}>
                  S/4HANA Migration &amp; Central Finance
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                  Greenfield/Brownfield S/4HANA migrations, SAP BTP integrations, ABAP on HANA, custom Fiori UI5 portals, and 24/7 SLA-backed BASIS AMS.
                </p>
                <Link to="/services" style={{ color: '#d97706', fontSize: '0.88rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Explore SAP Consulting <ChevronRight size={16} />
                </Link>
              </div>
            </TiltCard>

            {/* Pillar 3: 24/7 Global BPO & Healthcare Pods */}
            <TiltCard
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/healthcare_ops.png"
                  alt="Global Healthcare Operations"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7), transparent 70%)' }} />
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #a7f3d0',
                    color: '#059669',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                  }}
                >
                  GLOBAL OPERATIONS &amp; BPO
                </span>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', color: '#0f172a' }}>
                  Healthcare RCM &amp; 24/7 Support Pods
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                  End-to-end HIPAA-certified medical billing, denial reduction, institutional background verification, and multilingual customer support.
                </p>
                <Link to="/services" style={{ color: '#059669', fontSize: '0.88rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Explore Global Operations <ChevronRight size={16} />
                </Link>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 4. Real-Human 3D 8D Motion Video Studio & Services Showcase */}
      <HumanMotion8DStudio onOpenModal={onOpenModal} />

      {/* 5. Real-Time Global Delivery & Delivery Centers */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-fluid">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
            <div>
              <span className="eyebrow eyebrow-cyber">
                <Globe2 size={14} /> Follow-The-Sun Grid
              </span>
              <h2 className="section-title">24/7 Synchronized Global Centers</h2>
              <p className="section-subtitle">
                Engineered for continuous operational velocity with zero handoff latency across North American, European, and Asia-Pacific markets.
              </p>
            </div>

            <Link to="/global" className="btn btn-secondary">
              <span>View Facility Certifications</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {/* Center 1: Pune HQ */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1d4ed8', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '4px 10px', borderRadius: '6px' }}>
                  GLOBAL HEADQUARTERS
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', display: 'inline-block' }} /> Live 24/7
                </span>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>Pune Technology Center</h3>
              <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                4th Floor, Dangat Patil Empire, Kudale Baug, Vadgaon Budruk, Pune 411041. Hosting SAP Centers of Excellence, Cloud Architecture, and MarTech labs.
              </p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', fontSize: '0.82rem', color: '#64748b' }}>
                <strong style={{ color: '#0f172a' }}>Specializations:</strong> SAP S/4HANA, Custom Microservices, 8D Motion, KPO STEM
              </div>
            </div>

            {/* Center 2: Navi Mumbai */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0284c7', background: '#f0f9ff', border: '1px solid #bae6fd', padding: '4px 10px', borderRadius: '6px' }}>
                  OPERATIONS &amp; RCM HUB
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', display: 'inline-block' }} /> Live 24/7
                </span>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>Navi Mumbai Delivery Hub</h3>
              <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                C-207, 2nd Floor, Tower 2, Above Vashi Railway Station, 400703. Direct rail-transit connectivity, high-density biometric security floors.
              </p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', fontSize: '0.82rem', color: '#64748b' }}>
                <strong style={{ color: '#0f172a' }}>Specializations:</strong> Healthcare RCM, BGV Screening, Omnichannel Voice BPO
              </div>
            </div>

            {/* Center 3: Global Timezone Alignment */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#d97706', background: '#fffbeb', border: '1px solid #fde68a', padding: '4px 10px', borderRadius: '6px' }}>
                  FOLLOW-THE-SUN SLA
                </span>
                <h3 style={{ fontSize: '1.4rem', color: '#0f172a', margin: '1rem 0 0.5rem' }}>Global Timezone Alignment</h3>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  Complete overlap with US Eastern (EST), Pacific (PST), UK/European (GMT/CET), and Australian (AEST) enterprise operating hours.
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>US EST / PST</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1d4ed8' }}>Full Overlap</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>UK GMT</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#059669' }}>100% Active</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>India IST</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#d97706' }}>HQ Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Cost Savings & ROI Calculator Widget */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: '3rem',
              boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08)',
            }}
          >
            <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
              <div>
                <span className="eyebrow eyebrow-cyber">
                  <DollarSign size={14} /> ROI &amp; Enterprise Economics
                </span>
                <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                  Calculate Your Pod Cost Advantage
                </h2>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                  See how replacing onshore overhead with Caretrix’s dedicated high-performance pods compresses your budget while accelerating sprint throughput.
                </p>

                {/* Team Size Slider */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a' }}>Dedicated Specialists / Pod Size:</label>
                    <span style={{ color: '#1d4ed8', fontWeight: 800, fontSize: '1.1rem' }}>{estimatorTeamSize} Specialists</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={estimatorTeamSize}
                    onChange={(e) => setEstimatorTeamSize(e.target.value)}
                    style={{ width: '100%', accentColor: '#1d4ed8', cursor: 'pointer' }}
                  />
                </div>

                {/* Domain Selector */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#0f172a', marginBottom: '8px' }}>
                    Domain Specialty:
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {[
                      { id: 'sap', label: 'SAP S/4HANA ERP' },
                      { id: 'martech', label: 'MarTech & 8D Motion' },
                      { id: 'healthcare', label: 'Healthcare RCM' },
                      { id: 'software', label: 'AI & Custom Dev' },
                    ].map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setEstimatorDomain(d.id)}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '8px',
                          border: estimatorDomain === d.id ? '1.5px solid #2563eb' : '1px solid #cbd5e1',
                          background: estimatorDomain === d.id ? '#eff6ff' : '#f8fafc',
                          color: estimatorDomain === d.id ? '#1d4ed8' : '#475569',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculator Output */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #0a192f 0%, #1e3a5f 100%)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  color: '#ffffff',
                  boxShadow: '0 15px 35px rgba(10, 25, 47, 0.25)',
                }}
              >
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                  Estimated Annual Capital Savings
                </div>
                <div style={{ fontSize: '3.8rem', fontWeight: 900, color: '#ffffff', lineHeight: '1', marginBottom: '0.5rem' }}>
                  ${currentEstimator.savingsMillion}M
                </div>
                <div style={{ fontSize: '1.1rem', color: '#34d399', fontWeight: 700, marginBottom: '1.5rem' }}>
                  Save ~{currentEstimator.savingsPercent}% Compared to Domestic Hiring
                </div>
                <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '1.75rem', lineHeight: '1.6' }}>
                  Based on a dedicated <strong>{currentEstimator.name}</strong> of {estimatorTeamSize} full-time specialists operating with 99.8% SLA delivery from India.
                </div>
                <button
                  onClick={onOpenModal}
                  className="btn btn-accent"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}
                >
                  <Sparkles size={16} /> Lock In This Custom Rate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Business Presence & Advanced AEO/GEO Knowledge Engine */}
      <PanIndiaAndAEOSection onOpenModal={onOpenModal} />

      {/* 7. Full-Frame Executive Enterprise Call to Action */}
      <section
        className="section-py-lg"
        style={{
          background: 'linear-gradient(135deg, #0a192f 0%, #123d6b 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          color: '#ffffff',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow eyebrow-white" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={14} /> Ready to Accelerate
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Start Your Transformation with Caretrix Today.
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '720px',
              margin: '0 auto 2.5rem',
              lineHeight: '1.75',
            }}
          >
            Whether you require an end-to-end SAP S/4HANA migration pod, an AI-powered digital marketing machine, or a 24/7 global operations desk, our leadership team is ready to deploy.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenModal}
              className="btn btn-accent"
              style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem' }}
            >
              <Sparkles size={20} />
              <span>Schedule Executive Consultation</span>
              <ArrowRight size={20} />
            </button>

            <Link
              to="/contact"
              className="btn btn-secondary"
              style={{ padding: '1.1rem 2.2rem', fontSize: '1.1rem', background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              <span>Connect with Pune / Mumbai Office</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
