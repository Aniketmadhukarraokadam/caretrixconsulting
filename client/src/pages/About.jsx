import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Compass,
  Award,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
  Send,
  Building,
  Globe2,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function About({ onOpenModal }) {
  const values = [
    {
      icon: <ShieldCheck size={28} color="#1E3A8A" />,
      title: 'Institutional Security & ISO Governance',
      desc: 'Strict adherence to global data privacy laws, ISO 27001:2013 data security standards, and HIPAA compliance mandates for sensitive healthcare and enterprise processing.',
    },
    {
      icon: <Target size={28} color="#2563EB" />,
      title: 'Precision in Execution (99.8%+ SLA)',
      desc: 'Rigorous multi-tier Quality Assurance frameworks guaranteeing 99.8%+ accuracy across medical coding, lease abstraction, automated publishing, and software systems.',
    },
    {
      icon: <Zap size={28} color="#10B981" />,
      title: 'Agile Operational Pods',
      desc: 'Rapid ramping capability to mobilize expert technical pods and operational desks within 7-10 business days, perfectly synced with your time zone.',
    },
    {
      icon: <Users size={28} color="#0284C7" />,
      title: 'Transparent Client Alignment',
      desc: 'Transparent SLAs, dedicated delivery directors, regular executive reviews, and direct communication ensuring alignment with your strategic growth targets.',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Inception',
      desc: 'Established with a core mission to provide high-yield technology systems and specialized offshore BPO operations for international businesses.',
    },
    {
      year: '2022',
      title: 'Healthcare RCM & Publishing Scaling',
      desc: 'Scaled specialized delivery pods for US Healthcare Revenue Cycle Management, medical coding, and STM academic publishing prepress.',
    },
    {
      year: '2023',
      title: 'Bengaluru Tech Delivery Hub',
      desc: 'Inaugurated dedicated tech center in Bengaluru tech corridor for full-stack cloud, custom software, and AI data annotation services.',
    },
    {
      year: '2024',
      title: 'ISO 27001 & HIPAA Certifications',
      desc: 'Achieved formal ISO 27001:2013 information security and HIPAA compliance certifications alongside Startup India registration.',
    },
    {
      year: '2026',
      title: 'Global Delivery Across 150+ Clients',
      desc: 'Serving 150+ international enterprise clients across the US, UK, EU, and APAC with 24/7 continuous operations and 75+ specialized service lines.',
    },
  ];

  return (
    <div style={{ background: '#ffffff', color: '#0F172A' }}>
      {/* ── PAGE HEADER ────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #070C1E 0%, #0B1228 50%, #111A38 100%)',
          color: '#ffffff',
          padding: '65px 0 55px',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(37, 99, 235, 0.15)',
              border: '1px solid rgba(37, 99, 235, 0.3)',
              padding: '6px 18px',
              borderRadius: '100px',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#93C5FD',
              marginBottom: '16px',
            }}
          >
            <Sparkles size={13} color="#60A5FA" /> Corporate Heritage &amp; Mission
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            Strategic Consulting. Global Execution.
          </h1>
          <p
            style={{
              fontSize: '16.5px',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            Caretrix Consulting empowers multinational organizations across continents to operate with agility, eliminate cost leakages, and scale specialized domain workflows seamlessly.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE SECTION ────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="section-tag">Who We Are</div>
              <h2 className="section-title">
                Bridging Global Enterprises with <span className="highlight">World-Class Execution</span>
              </h2>
              <div className="section-divider" />
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.75, marginBottom: '16px' }}>
                Caretrix Consulting Private Limited is an ISO 27001:2013 certified and HIPAA-compliant global outsourcing and technology engineering partner headquartered in Pune with advanced delivery operations in Bengaluru and an entity in Wyoming, USA.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.75, marginBottom: '28px' }}>
                We engineer scalable solutions spanning AI Automation, Healthcare Revenue Cycle Management, Cloud &amp; Software Engineering, STM Publishing Prepress, Real Estate &amp; Title BPO, and Dedicated Staff Augmentation. Our multi-hub delivery enables true 24/7 continuous velocity.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div
                  style={{
                    background: '#f8faff',
                    padding: '20px',
                    borderRadius: '14px',
                    borderLeft: '4px solid #1C2280',
                    border: '1px solid #e2e8f0',
                    borderLeftWidth: '4px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Target size={20} color="#1C2280" />
                    <strong style={{ fontSize: '15px', color: '#0f172a' }}>Our Mission</strong>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                    Deliver reliable, high-yield operational solutions and autonomous software that empower global partners to thrive in competitive digital economies.
                  </p>
                </div>

                <div
                  style={{
                    background: '#f8faff',
                    padding: '20px',
                    borderRadius: '14px',
                    borderLeft: '4px solid #CC2228',
                    border: '1px solid #e2e8f0',
                    borderLeftWidth: '4px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Compass size={20} color="#CC2228" />
                    <strong style={{ fontSize: '15px', color: '#0f172a' }}>Our Vision</strong>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                    To be recognized internationally as the most dependable, high-precision consulting and offshore delivery organization operating from India.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(28, 34, 128, 0.12)',
                  border: '1px solid #e2e8f0',
                }}
              >
                <img
                  src="/caretrix_about.png"
                  alt="About Caretrix Consulting"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE PRINCIPLES / VALUES ────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#f8faff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <div className="section-tag">The Operating Code</div>
            <h2 className="section-title">
              Core Principles Guiding <span className="highlight">Every Engagement</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Our cultural framework is anchored on institutional transparency, client-first alignment, and relentless delivery precision.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '30px 24px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(28, 34, 128, 0.04)',
                }}
              >
                <div style={{ marginBottom: '16px' }}>{v.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  {v.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '13.5px', lineHeight: 1.7, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROWTH MILESTONES ────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <div className="section-tag">Growth Milestones</div>
            <h2 className="section-title">
              The Evolution of <span className="highlight">Caretrix</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              From a dedicated delivery unit into an international operational backbone supporting critical client workflows.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  borderLeft: `5px solid ${idx % 2 === 0 ? '#1C2280' : '#CC2228'}`,
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                }}
              >
                <div
                  style={{
                    background: idx % 2 === 0 ? 'rgba(28, 34, 128, 0.08)' : 'rgba(204, 34, 40, 0.08)',
                    color: idx % 2 === 0 ? '#1C2280' : '#CC2228',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '16px',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {m.year}
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    {m.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCREDITATIONS & PARTNERSHIPS ────────────────────────────────────── */}
      <section className="section-pad" style={{ background: '#f8faff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <div className="section-tag">Quality Recognition</div>
            <h2 className="section-title">
              Accreditations &amp; <span className="highlight">Certifications</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Recognized and audited under premier international security and workforce standard frameworks.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <img
                src="/skill-india-logo.jpg"
                alt="Skill India Certification"
                style={{ height: '65px', width: 'auto', objectFit: 'contain' }}
              />
              <div style={{ fontSize: '13px', fontWeight: 600, marginTop: '8px', color: '#64748b' }}>
                Skill India Partner
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img
                src="/apprenticeship-logo.png"
                alt="National Apprenticeship Scheme"
                style={{ height: '65px', width: 'auto', objectFit: 'contain' }}
              />
              <div style={{ fontSize: '13px', fontWeight: 600, marginTop: '8px', color: '#64748b' }}>
                NAPS Registered
              </div>
            </div>

            <div
              style={{
                background: '#ffffff',
                border: '1.5px solid rgba(28, 34, 128, 0.2)',
                borderRadius: '16px',
                padding: '16px 24px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(28, 34, 128, 0.05)',
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#1C2280' }}>ISO 9001:2015</div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Quality Management</div>
            </div>

            <div
              style={{
                background: '#ffffff',
                border: '1.5px solid rgba(204, 34, 40, 0.2)',
                borderRadius: '16px',
                padding: '16px 24px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(204, 34, 40, 0.05)',
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#CC2228' }}>ISO 27001:2013</div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Information Security</div>
            </div>

            <div
              style={{
                background: '#ffffff',
                border: '1.5px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '16px',
                padding: '16px 24px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.05)',
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#10B981' }}>HIPAA Compliant</div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Healthcare Data Protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ────────────────────────────────────── */}
      <div className="cta-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Collaborate With Our Leadership Team</h2>
          <p>
            Discover how our consulting expertise and offshore delivery scale can benefit your corporate growth.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={onOpenModal}
              className="btn-cta-white"
            >
              <Send size={16} /> Book Executive Discovery Call
            </button>
            <Link
              to="/contact"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                padding: '14px 28px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Contact Our Offices &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
