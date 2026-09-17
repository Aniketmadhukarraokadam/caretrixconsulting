import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, Award, CheckCircle, ShieldCheck, HeartHandshake, Zap, Users } from 'lucide-react';
import { HaikeiLayeredWaves, HaikeiOrganicBlobs } from '../components/extensions/HaikeiBackgrounds';
import { AnimasterMagneticButton } from '../components/extensions/AnimasterLib';

export default function About({ onOpenModal }) {
  const values = [
    {
      icon: <ShieldCheck size={28} color="#00a6c7" />,
      title: 'Integrity & Compliance',
      desc: 'Strict adherence to global legal compliances, confidentiality protocols, HIPAA mandates, and ISO 27001 data governance.',
    },
    {
      icon: <Target size={28} color="#f7941d" />,
      title: 'Precision in Execution',
      desc: 'Rigorous Quality Assurance frameworks guaranteeing 99.8%+ accuracy across background screenings, coding, and development.',
    },
    {
      icon: <Zap size={28} color="#10b981" />,
      title: 'Operational Agility',
      desc: 'Rapid ramping capability to mobilize expert technical teams and operational desks within 7-14 business days.',
    },
    {
      icon: <Users size={28} color="#6366f1" />,
      title: 'Client Centricity',
      desc: 'Transparent SLAs, dedicated delivery directors, and regular governance reviews ensuring alignment with your strategic milestones.',
    },
  ];

  const milestones = [
    { year: '2017', title: 'Founding & Inception', desc: 'Established in Pune with focus on executive consulting and workforce solutions.' },
    { year: '2019', title: 'Expansion into BPO & Tech', desc: 'Expanded delivery operations to support inbound/outbound support and full-stack software development.' },
    { year: '2021', title: 'Navi Mumbai Hub Opened', desc: 'Inaugurated second dedicated facility above Vashi Railway Station for Healthcare RCM and BPO scaling.' },
    { year: '2023', title: 'ISO & Compliance Certifications', desc: 'Achieved ISO 9001 and ISO 27001 certifications alongside Skill India & Apprenticeship partnerships.' },
    { year: 'Present', title: 'Global Transformation Delivery', desc: 'Serving 150+ multinational organizations with follow-the-sun 24/7 delivery and over 2,500 specialists deployed.' },
  ];

  return (
    <div style={{ background: '#030712', color: '#ffffff' }}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container-fluid">
          <span className="eyebrow eyebrow-cyber">Our Heritage &amp; Mission</span>
          <h1>Strategic Consulting. Global Execution.</h1>
          <p>
            Caretrix Consulting empowers organizations across continents to operate with agility, optimize expenditures, and scale specialized domain workflows seamlessly.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-py" style={{ background: '#030712' }}>
        <div className="container-fluid">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="eyebrow eyebrow-teal">Who We Are</span>
              <h2 className="section-title">Bridging Global Enterprises with World-Class Execution</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Founded in 2017, Caretrix Consulting is an end-to-end business consulting and multi-domain operations partner headquartered in Pune and Navi Mumbai, India.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                We engineer scalable solutions spanning Software &amp; Cloud Systems, Healthcare RCM, BPO Customer Operations, KPO Analytics, Pre-Employment Background Screening, and Specialized Staffing. Our dual-center infrastructure enables 24/7 global coverage.
              </p>

              <div className="grid-2" style={{ gap: '1.5rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Target size={20} color="var(--secondary)" />
                    <strong style={{ fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Our Mission</strong>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    Deliver reliable, high-yield operational solutions that empower global partners to thrive in competitive digital landscapes.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Compass size={20} color="#d97706" />
                    <strong style={{ fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Our Vision</strong>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    To be recognized globally as the most dependable and high-precision consulting and offshore delivery organization from India.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
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

      {/* Core Values */}
      <section style={{ background: '#f8fafc', padding: '5rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '650px', marginBottom: '3.5rem' }}>
            <span className="eyebrow eyebrow-accent">The Operating Code</span>
            <h2 className="section-title">Core Principles Guiding Every Engagement</h2>
            <p className="section-subtitle mx-auto">
              Our cultural framework is anchored on transparency, client-first alignment, and relentless delivery precision.
            </p>
          </div>

          <div className="grid-4">
            {values.map((v, i) => (
              <div key={i} className="card">
                <div style={{ marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-py">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '650px', marginBottom: '3.5rem' }}>
            <span className="eyebrow eyebrow-teal">Growth Milestones</span>
            <h2 className="section-title">The Evolution of Caretrix</h2>
            <p className="section-subtitle mx-auto">
              From a boutique advisory into an international operational backbone supporting critical client workflows.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  borderLeft: `4px solid ${idx % 2 === 0 ? 'var(--secondary)' : 'var(--accent)'}`,
                }}
              >
                <div
                  style={{
                    background: idx % 2 === 0 ? 'rgba(0, 166, 199, 0.1)' : 'rgba(247, 148, 29, 0.12)',
                    color: idx % 2 === 0 ? 'var(--secondary)' : '#d97706',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                  }}
                >
                  {m.year}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>{m.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations & Certifications */}
      <section style={{ background: '#f8fafc', padding: '4rem 0', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '600px', marginBottom: '2.5rem' }}>
            <span className="eyebrow eyebrow-accent">Government &amp; Quality Recognition</span>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Accreditations &amp; Partnerships</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Recognized and affiliated with premier skill development and workforce standard frameworks.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <img
                src="/skill-india-logo.jpg"
                alt="Skill India Certification"
                style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
              />
              <div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: '8px', color: 'var(--text-muted)' }}>
                Skill India Partner
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img
                src="/apprenticeship-logo.png"
                alt="National Apprenticeship Promotion Scheme"
                style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
              />
              <div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: '8px', color: 'var(--text-muted)' }}>
                NAPS Registered
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(16px)',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#00f0ff' }}>ISO 9001:2015</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Quality Management</div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(16px)',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#3b82f6' }}>ISO 27001</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Information Security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Haikei Wave Transition */}
      <HaikeiLayeredWaves height="120px" opacity={0.6} />

      {/* CTA */}
      <section style={{ position: 'relative', background: '#040914', color: 'white', padding: '5rem 0', textAlign: 'center', overflow: 'hidden' }}>
        <HaikeiOrganicBlobs color="#00f0ff" size={400} blur={90} opacity={0.15} style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ color: 'white', fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem' }}>
            Collaborate With Our Leadership
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '0 auto 2.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Discover how our consulting expertise and offshore delivery scale can benefit your corporate growth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <AnimasterMagneticButton onClick={onOpenModal} variant="primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
              Book Executive Discovery Call
            </AnimasterMagneticButton>
            <Link to="/contact" className="btn btn-outline-white btn-lg">
              Contact Our Offices
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
