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
  Laptop,
  Headphones,
  PhoneCall,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Server,
  HeartPulse,
  Briefcase,
  Building2,
  Cpu,
} from 'lucide-react';
import Interactive3DCanvas from '../components/Interactive3DCanvas';
import TiltCard from '../components/TiltCard';
import StatCounter from '../components/StatCounter';
import PanIndiaAndAEOSection from '../components/PanIndiaAndAEOSection';
import HumanMotion8DStudio from '../components/HumanMotion8DStudio';
import { AnimasterMagneticButton } from '../components/extensions/AnimasterLib';

export default function Home({ onOpenModal }) {
  // Mega Hub Hero Active Pillar State: 'consulting' | 'services'
  const [heroPillar, setHeroPillar] = useState('consulting');

  // ROI / Savings Estimator state
  const [estimatorTeamSize, setEstimatorTeamSize] = useState('15');
  const [estimatorDomain, setEstimatorDomain] = useState('appsupport');

  const getEstimatedSavings = () => {
    const size = parseInt(estimatorTeamSize, 10) || 15;
    const rates = {
      appsupport: { usRate: 150, ctRate: 45, name: '24/7 Application Support & AMS Pod' },
      cloudsoft: { usRate: 175, ctRate: 50, name: 'Cloud & Custom Software Engineering Pod' },
      ai_automation: { usRate: 190, ctRate: 55, name: 'AI, LLM & Hyper-Automation Pod' },
      intlvoice: { usRate: 55, ctRate: 18, name: 'International Voice Process Pod (US/UK/AUS)' },
      domesticvoice: { usRate: 35, ctRate: 12, name: 'Pan-India Domestic Voice Support Pod' },
      erp_crm: { usRate: 185, ctRate: 55, name: 'Enterprise ERP & CRM Pod (SAP/Salesforce/Dynamics)' },
      cybersecurity: { usRate: 180, ctRate: 52, name: 'Cyber Security & Managed SOC Pod' },
      healthcare: { usRate: 75, ctRate: 22, name: 'Healthcare Operations & RCM Billing Pod' },
    };
    const domainData = rates[estimatorDomain] || rates.appsupport;
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
      {/* 0. Mega Hub Top Announcement Strip (Visible immediately below Navbar) */}
      <div
        style={{
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          padding: '9px 0',
          boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
        }}
      >
        <div
          className="container-fluid"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.74rem',
                fontWeight: 800,
                color: '#0052cc',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                padding: '3px 10px',
                borderRadius: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              <Building2 size={13} /> Enterprise Mega Hub
            </span>
            <span style={{ fontSize: '0.82rem', color: '#334155', fontWeight: 600 }}>
              Dual-Powerhouse Model: <strong>Strategic Enterprise Consulting</strong> &amp; <strong>24/7 Global Managed Services</strong> across 28 Indian States
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setHeroPillar('consulting')}
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: heroPillar === 'consulting' ? '#ffffff' : '#0052cc',
                background: heroPillar === 'consulting' ? '#0052cc' : '#eff6ff',
                border: '1px solid #bfdbfe',
                padding: '4px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.2s',
              }}
            >
              <Briefcase size={12} /> Strategic Consulting
            </button>
            <button
              onClick={() => setHeroPillar('services')}
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: heroPillar === 'services' ? '#ffffff' : '#059669',
                background: heroPillar === 'services' ? '#059669' : '#ecfdf5',
                border: '1px solid #a7f3d0',
                padding: '4px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.2s',
              }}
            >
              <Headphones size={12} /> Managed Services &amp; Voice
            </button>
          </div>
        </div>
      </div>

      {/* 1. Full-Frame Modern Executive Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          background: 'radial-gradient(ellipse 90% 70% at 50% -10%, #e0f2fe 0%, #f8fafc 65%, #f8fafc 100%)',
          overflow: 'hidden',
          padding: '3.75rem 0 3.5rem',
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
                  marginBottom: '1.25rem',
                }}
              >
                <Sparkles size={16} color="#1d4ed8" />
                <span style={{ color: '#1d4ed8', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                  Enterprise Mega Hub • Consulting &amp; Global Operations
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 4.4vw, 4rem)',
                  fontWeight: 900,
                  lineHeight: '1.14',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.03em',
                  color: '#0f172a',
                }}
              >
                Accelerating Enterprises with <span className="gradient-text-cyber">Strategic Consulting</span> &amp; <span style={{ color: '#0052cc' }}>24/7 Managed Services</span>.
              </h1>

              <p
                style={{
                  fontSize: '1.12rem',
                  color: '#475569',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  maxWidth: '680px',
                }}
              >
                Caretrix operates as a premier enterprise Mega Hub: uniting Fortune-500 scale <strong>Strategic Consulting</strong> (Multi-Cloud &amp; DevOps, Custom Software Engineering, AI &amp; Automation, Enterprise ERP/CRM, and Cyber Defense) with bank-grade <strong>24/7 Managed Services</strong> (15-min SLA Application Support AMS, US/UK/AUS &amp; Pan-India Voice Processes, and HIPAA Healthcare BPO).
              </p>

              {/* Dual-Pillar Quick Feature Badges */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: '#ffffff',
                    border: '1px solid #dbeafe',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  }}
                >
                  <Briefcase size={16} color="#0052cc" />
                  <span style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 600 }}>
                    <strong>Consulting:</strong> Cloud &amp; DevOps • Custom Software • AI • Enterprise ERP
                  </span>
                </div>

                <div
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: '#ffffff',
                    border: '1px solid #dcfce7',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  }}
                >
                  <Headphones size={16} color="#059669" />
                  <span style={{ fontSize: '0.84rem', color: '#1e293b', fontWeight: 600 }}>
                    <strong>Services:</strong> 15-Min SLA AMS • US/UK Voice • 12+ Languages
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem', alignItems: 'center' }}>
                <AnimasterMagneticButton
                  onClick={onOpenModal}
                  variant="primary"
                  style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
                >
                  <Sparkles size={18} />
                  <span>Initiate Enterprise RFP</span>
                  <ArrowRight size={18} />
                </AnimasterMagneticButton>

                <Link
                  to="/services"
                  className="btn btn-secondary"
                  style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}
                >
                  <Briefcase size={16} color="#0052cc" />
                  <span>Consulting Hub</span>
                </Link>

                <Link
                  to="/services"
                  className="btn btn-secondary"
                  style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}
                >
                  <Headphones size={16} color="#059669" />
                  <span>Services Hub</span>
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
                  paddingTop: '1.5rem',
                }}
              >
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1d4ed8' }}>
                    <StatCounter end={15} duration={1200} prefix="<" suffix=" Min" />
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>P1 Critical Incident SLA</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#059669' }}>
                    <StatCounter end={96.4} duration={1500} decimals={1} suffix="%" />
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Verified Voice CSAT Score</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#d97706' }}>
                    <StatCounter end={28} duration={1200} suffix=" States" />
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Pan-India Delivery Grid</div>
                </div>
              </div>
            </div>

            {/* Hero Right Column: Interactive Dual-Engine Showcase Terminal */}
            <div>
              <TiltCard
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '24px',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12)',
                  overflow: 'hidden',
                }}
              >
                {/* Terminal Tab Header */}
                <div
                  style={{
                    background: '#0f172a',
                    padding: '12px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      onClick={() => setHeroPillar('consulting')}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        background: heroPillar === 'consulting' ? '#0052cc' : 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        transition: 'all 0.2s',
                      }}
                    >
                      Engine A: Consulting
                    </button>
                    <button
                      onClick={() => setHeroPillar('services')}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        background: heroPillar === 'services' ? '#059669' : 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        transition: 'all 0.2s',
                      }}
                    >
                      Engine B: Managed Services
                    </button>
                  </div>
                </div>

                {/* Hero Graphic / Visual Representation */}
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img
                    src={heroPillar === 'consulting' ? '/images/sap_cloud_mesh.jpg' : '/images/hero_3d_mesh.jpg'}
                    alt="Caretrix Mega Hub Architecture"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'all 0.4s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid #cbd5e1',
                      padding: '5px 12px',
                      borderRadius: '30px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: heroPillar === 'consulting' ? '#0052cc' : '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    }}
                  >
                    {heroPillar === 'consulting' ? <Briefcase size={12} /> : <Headphones size={12} />}
                    {heroPillar === 'consulting' ? 'STRATEGIC CONSULTING HUB' : '24/7 MANAGED SERVICES HUB'}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      right: '16px',
                      color: '#ffffff',
                    }}
                  >
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '2px' }}>
                      {heroPillar === 'consulting'
                        ? 'Cloud, Custom Software & Enterprise CoE'
                        : 'Application Support AMS & Dual Voice Pods'}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                      {heroPillar === 'consulting'
                        ? 'Multi-Cloud AWS/Azure, Resilient Microservices, AI Automation & Enterprise ERP/CRM.'
                        : '15-Minute P1 SLA, US/UK/AUS C2 English & 12+ Pan-India Language Centers.'}
                    </div>
                  </div>
                </div>

                {/* Card Content & Features */}
                <div style={{ padding: '1.4rem' }}>
                  {heroPillar === 'consulting' ? (
                    <div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '1rem' }}>
                        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '10px' }}>
                          <strong style={{ color: '#0f172a', fontSize: '0.84rem', display: 'block' }}>Cloud &amp; Software CoE</strong>
                          <span style={{ color: '#64748b', fontSize: '0.74rem' }}>AWS/Azure, React/Node, Microservices</span>
                        </div>
                        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '10px' }}>
                          <strong style={{ color: '#0f172a', fontSize: '0.84rem', display: 'block' }}>Enterprise ERP &amp; AI</strong>
                          <span style={{ color: '#64748b', fontSize: '0.74rem' }}>SAP S/4HANA, Salesforce &amp; Agents</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {['ISO 9001:2015', 'ISO 27001 Certified', 'SOC-2 Type II', 'CMMI Level 3'].map((badge, idx) => (
                          <span key={idx} style={{ background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', borderRadius: '6px', padding: '3px 8px', fontSize: '0.72rem', fontWeight: 700 }}>
                            ✓ {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '1rem' }}>
                        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '10px' }}>
                          <strong style={{ color: '#0f172a', fontSize: '0.84rem', display: 'block' }}>&lt;15 Min P1 SLA</strong>
                          <span style={{ color: '#64748b', fontSize: '0.74rem' }}>ITIL v4 L1/L2/L3 24/7/365</span>
                        </div>
                        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '10px' }}>
                          <strong style={{ color: '#0f172a', fontSize: '0.84rem', display: 'block' }}>Dual Voice Process</strong>
                          <span style={{ color: '#64748b', fontSize: '0.74rem' }}>US/UK/AUS &amp; 12+ Indian Langs</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {['HIPAA Certified', 'PCI-DSS Level 1', 'Skill India Partner', '28 States BGV'].map((badge, idx) => (
                          <span key={idx} style={{ background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', borderRadius: '6px', padding: '3px 8px', fontSize: '0.72rem', fontWeight: 700 }}>
                            ✓ {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
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
            'APPLICATION SUPPORT SERVICES (AMS L1/L2/L3)',
            'INTERNATIONAL VOICE PROCESS (US/UK/AUS)',
            'DOMESTIC VOICE PROCESS (12+ INDIAN LANGUAGES)',
            'SAP S/4HANA CLOUD MIGRATIONS',
            'PERFORMANCE MARKETING (5.2x ROAS)',
            'ANSWER ENGINE OPTIMIZATION (AEO & GEO)',
            'ENTERPRISE HRMS & PAYROLL CLOUD',
            'HIPAA REVENUE CYCLE MANAGEMENT',
            '24/7/365 FOLLOW-THE-SUN DELIVERY',
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

      {/* 3. NEW DEDICATED SECTION: Enterprise Application Support Services (AMS) */}
      <section className="section-py" style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-fluid">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="eyebrow eyebrow-cyber">
                <Laptop size={14} /> Mission-Critical IT Operations
              </span>
              <h2 className="section-title">
                24/7/365 Enterprise <span className="gradient-text-cyber">Application Support (AMS)</span>
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                Ensure zero unplanned downtime for your mission-critical software, custom microservices, and enterprise databases. 
                Our dedicated Application Management Services (AMS) pods provide continuous L1, L2, and L3 tier triaging with bank-grade SLAs.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.25rem' }}>
                  <div style={{ color: '#1d4ed8', fontWeight: 800, fontSize: '1.4rem', marginBottom: '4px' }}>&lt;15 Min SLA</div>
                  <strong style={{ color: '#0f172a', fontSize: '0.9rem', display: 'block' }}>P1 Critical Response</strong>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '4px' }}>Immediate escalation &amp; resolution for blocking production issues.</p>
                </div>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.25rem' }}>
                  <div style={{ color: '#059669', fontWeight: 800, fontSize: '1.4rem', marginBottom: '4px' }}>99.98%</div>
                  <strong style={{ color: '#0f172a', fontSize: '0.9rem', display: 'block' }}>System Availability</strong>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '4px' }}>Continuous cloud monitoring &amp; proactive health health-checks.</p>
                </div>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.25rem' }}>
                  <div style={{ color: '#0284c7', fontWeight: 800, fontSize: '1.4rem', marginBottom: '4px' }}>Full-Stack</div>
                  <strong style={{ color: '#0f172a', fontSize: '0.9rem', display: 'block' }}>Observability Suite</strong>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '4px' }}>Datadog, Dynatrace, New Relic, Prometheus &amp; Grafana.</p>
                </div>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.25rem' }}>
                  <div style={{ color: '#d97706', fontWeight: 800, fontSize: '1.4rem', marginBottom: '4px' }}>Zero-Downtime</div>
                  <strong style={{ color: '#0f172a', fontSize: '0.9rem', display: 'block' }}>CI/CD Deployment</strong>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '4px' }}>Automated rollbacks, database migrations &amp; patch verification.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenModal} className="btn btn-primary" style={{ padding: '0.85rem 1.8rem' }}>
                  <span>Deploy an Application Support Pod</span>
                  <ArrowRight size={16} />
                </button>
                <Link to="/services" className="btn btn-secondary" style={{ padding: '0.85rem 1.6rem' }}>
                  View Support Framework
                </Link>
              </div>
            </div>

            <div>
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '2.5rem', boxShadow: '0 15px 40px -5px rgba(15, 23, 42, 0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#1d4ed8', fontWeight: 800, textTransform: 'uppercase' }}>ITIL v4 Certified Tiering</span>
                    <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginTop: '2px' }}>Multi-Tier Incident Architecture</h3>
                  </div>
                  <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' }}>
                    Live 24/7 Monitoring
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#eff6ff', color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                      L1
                    </div>
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.95rem' }}>24/7 Helpdesk &amp; First-Line Triage</strong>
                      <p style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '2px' }}>User access management, basic troubleshooting, automated alert triage, and ticket dispatch within 5 minutes.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f0fdf4', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                      L2
                    </div>
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.95rem' }}>Deep Application &amp; Database Engineering</strong>
                      <p style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '2px' }}>Configuration remediation, database query optimization, log deep-dives, microservice restarts, and API syncs.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#fffbeb', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                      L3
                    </div>
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '0.95rem' }}>Core Code Fixes &amp; Architectural Engineering</strong>
                      <p style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '2px' }}>Direct bug patching, hotfix deployment, architectural redesign, root-cause analysis (RCA), and vendor escalations.</p>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', marginTop: '1.5rem', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.84rem' }}>
                  <span style={{ color: '#64748b' }}>Standard Incident Ticketing:</span>
                  <span style={{ color: '#0f172a', fontWeight: 700 }}>ServiceNow • Jira • Zendesk • Freshservice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEW DEDICATED SECTION: International & Domestic Voice Process Hub */}
      <section className="section-py" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-fluid">
          <div className="text-center mx-auto" style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
            <span className="eyebrow eyebrow-cyber">
              <Headphones size={14} /> Omnichannel Voice &amp; Customer Care
            </span>
            <h2 className="section-title">
              Dual-Track Voice Operations: <span className="gradient-text-cyber">International &amp; Domestic</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Empowering global enterprises with C2 English neutral-accent voice desks while delivering Pan-India native fluency across 12+ Indian languages.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2.5rem' }}>
            {/* International Voice Card */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '22px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ background: '#f0fdf4', color: '#059669', border: '1px solid #bbf7d0', padding: '4px 12px', borderRadius: '20px', fontSize: '0.74rem', fontWeight: 800 }}>
                    US / UK / AUSTRALIA / EUROPE
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 700 }}>
                    ✓ 96.4% CSAT Rating
                  </span>
                </div>

                <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Globe2 size={24} color="#059669" /> International Voice Process
                </h3>

                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  High-touch inbound and outbound customer experience pods delivering empathy, neutral accent fluency, and rapid resolution for international markets across North American, European, and Australian business hours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {[
                    '24/7 Inbound Customer Service, Billing & Escalation Desks',
                    'C2 English Certified Specialists with Neutral Accent Training',
                    'HIPAA-Compliant US Healthcare Intake & Insurance Verification',
                    'Technical Support Tier-1/2 with Remote Desktop Diagnostics',
                    'FinTech KYC Screening, Fraud Alert Outreach & Telesales',
                    'Cloud Telephony: Genesys, Five9, Avaya & Twilio with AI Sentiment Tracking',
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.86rem', color: '#334155' }}>
                      <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Response SLA:</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#059669' }}>&lt;20s Average Answer Speed</div>
                </div>
                <button onClick={onOpenModal} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.86rem' }}>
                  Deploy International Pod
                </button>
              </div>
            </div>

            {/* Domestic Voice Card */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '22px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ background: '#fffbeb', color: '#d97706', border: '1px solid #fde68a', padding: '4px 12px', borderRadius: '20px', fontSize: '0.74rem', fontWeight: 800 }}>
                    PAN-INDIA MULTILINGUAL GRID
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#d97706', fontWeight: 700 }}>
                    ✓ 12+ Regional Languages
                  </span>
                </div>

                <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PhoneCall size={24} color="#d97706" /> Domestic Voice Process
                </h3>

                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  High-velocity regional Indian voice operations addressing language fragmentation for leading Indian banks, NBFCs, e-commerce marketplaces, telecom providers, and D2C brands.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {[
                    'Native Regional Fluency: Hindi, Marathi, Tamil, Telugu, Kannada, Bengali & more',
                    'BFSI Collections, Loan Document Verification & e-KYC Auditing',
                    'E-Commerce Hyperlocal Delivery Tracking & Customer Dispute Resolution',
                    'Healthcare Tele-Consultation Bookings & Diagnostic Scheduling',
                    '100% Call Recording, Quality Scoring & Speech Pattern Analytics',
                    'Automated IVR Telephony with Sub-Second Specialist Routing',
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.86rem', color: '#334155' }}>
                      <CheckCircle2 size={16} color="#d97706" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Speed SLA:</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#d97706' }}>&lt;15s Average Answer Speed</div>
                </div>
                <button onClick={onOpenModal} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.86rem' }}>
                  Deploy Domestic Pod
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Enterprise Transformation Pillars */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container-fluid">
          <div className="text-center mx-auto" style={{ maxWidth: '850px', marginBottom: '4rem' }}>
            <span className="eyebrow eyebrow-cyber">
              <Compass size={14} /> Strategic Growth Engines
            </span>
            <h2 className="section-title">
              Enterprise Digital <span className="gradient-text-cyber">Transformation Pillars</span>
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
                  DIGITAL MARKETING &amp; 5.2x ROAS
                </span>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', color: '#0f172a' }}>
                  AI Growth Marketing &amp; AEO / GEO
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                  Programmatic ad spend optimization, multi-channel funnels, Generative Engine Optimization (AEO/GEO for ChatGPT/Perplexity), and hyper-converting sales copy.
                </p>
                <Link to="/services" style={{ color: '#1d4ed8', fontSize: '0.88rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Explore MarTech Services <ChevronRight size={16} />
                </Link>
              </div>
            </TiltCard>

            {/* Pillar 2: Cloud Architecture, Custom Software & Enterprise ERP */}
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
                  src="/it_services.png"
                  alt="Cloud Architecture & Custom Software"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.7), transparent 70%)' }} />
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #bfdbfe',
                    color: '#1d4ed8',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                  }}
                >
                  CLOUD, SOFTWARE &amp; ENTERPRISE CORE
                </span>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.6rem', color: '#0f172a' }}>
                  Cloud Architecture, Software &amp; ERP
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                  Multi-cloud infrastructure (AWS/Azure/GCP), resilient microservices in Node/React/Java, DevOps automation, and modern enterprise ERP/CRM (SAP, Salesforce, Dynamics).
                </p>
                <Link to="/services" style={{ color: '#1d4ed8', fontSize: '0.88rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Explore Cloud &amp; Software Consulting <ChevronRight size={16} />
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

      {/* 6. Real-Human 3D 8D Motion Video Studio Demonstration */}
      <HumanMotion8DStudio onOpenModal={onOpenModal} />

      {/* 7. Real-Time Global Delivery & Delivery Centers */}
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
                4th Floor, Dangat Patil Empire, Kudale Baug, Vadgaon Budruk, Pune 411041. Hosting Multi-Cloud Architecture Labs, Application Support AMS, Software Engineering, and Enterprise Consulting.
              </p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', fontSize: '0.82rem', color: '#64748b' }}>
                <strong style={{ color: '#0f172a' }}>Specializations:</strong> 24/7 AMS, Cloud &amp; DevOps, Custom Software, AI &amp; Enterprise ERP
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
                  OPERATIONS &amp; VOICE HUB
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669', display: 'inline-block' }} /> Live 24/7
                </span>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>Navi Mumbai Delivery Hub</h3>
              <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                C-207, 2nd Floor, Tower 2, Above Vashi Railway Station, 400703. Direct rail-transit connectivity, high-density biometric voice floors.
              </p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', fontSize: '0.82rem', color: '#64748b' }}>
                <strong style={{ color: '#0f172a' }}>Specializations:</strong> International Voice Process, Domestic Multilingual BPO, Healthcare RCM
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

      {/* 8. Interactive Cost Savings & ROI Calculator Widget */}
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
                  See how replacing onshore overhead with Caretrix’s dedicated high-performance pods compresses your budget while accelerating operational velocity.
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
                      { id: 'appsupport', label: 'Application Support (AMS)' },
                      { id: 'cloudsoft', label: 'Cloud & Custom Software' },
                      { id: 'ai_automation', label: 'AI & Hyper-Automation' },
                      { id: 'intlvoice', label: 'International Voice (US/UK)' },
                      { id: 'domesticvoice', label: 'Domestic Voice (Pan-India)' },
                      { id: 'erp_crm', label: 'Enterprise ERP & CRM' },
                      { id: 'cybersecurity', label: 'Cyber Security' },
                      { id: 'healthcare', label: 'Healthcare RCM' },
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

      {/* 9. Pan-India Business Presence & Advanced AEO/GEO Knowledge Engine */}
      <PanIndiaAndAEOSection onOpenModal={onOpenModal} />

      {/* 10. Full-Frame Executive Enterprise Call to Action */}
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
            Whether you require 24/7 Application Support Services (AMS), an International/Domestic Voice Process call center, or an end-to-end SAP S/4HANA migration pod, our leadership team is ready to deploy.
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
