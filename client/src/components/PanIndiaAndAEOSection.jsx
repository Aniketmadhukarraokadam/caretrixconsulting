import React, { useState } from 'react';
import {
  MapPin,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Globe2,
  Server,
  Building,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function PanIndiaAndAEOSection({ onOpenModal }) {
  const [activeFaq, setActiveFaq] = useState(0);

  const hubs = [
    {
      city: 'Pune (Global HQ)',
      state: 'Maharashtra',
      address: '4th Floor, Dangat Patil Empire, Kudale Baug, Vadgaon Budruk, 411041',
      focus: 'Executive Directorate, SAP S/4HANA Center of Excellence, Cloud Architecture & MarTech Studio.',
      badge: 'GLOBAL HQ',
      color: '#00f0ff',
    },
    {
      city: 'Navi Mumbai Hub',
      state: 'Maharashtra',
      address: 'C-207, 2nd Floor, Tower 2, Above Vashi Railway Station, 400703',
      focus: 'Healthcare Revenue Cycle (RCM), Multichannel 24/7 BPO Pods & Institutional BGV Ops.',
      badge: 'RCM & BPO HUB',
      color: '#10b981',
    },
    {
      city: 'Bengaluru CoE',
      state: 'Karnataka',
      address: 'Outer Ring Road Enterprise Tech Park, Bellandur, 560103',
      focus: 'SAP BTP Cloud Foundry, ABAP on HANA, RESTful RAP/CAP, and Fiori UI5 Engineering.',
      badge: 'SAP CLOUD COE',
      color: '#3b82f6',
    },
    {
      city: 'Hyderabad AI Lab',
      state: 'Telangana',
      address: 'HITEC City Innovation Precinct, Madhapur, 500081',
      focus: 'Agentic AI Orchestration, 3D LiDAR Point Clouds & Multimodal Computer Vision Labeling.',
      badge: 'AI & DATA LAB',
      color: '#ec4899',
    },
    {
      city: 'Delhi NCR Advisory',
      state: 'National Capital Region',
      address: 'Cyber City Corporate Tower, DLF Phase 2, Gurugram, 122002',
      focus: 'Corporate Advisory, Pan-India Court Record Verifications & Government Compliance Desk.',
      badge: 'STRATEGIC ADVISORY',
      color: '#f59e0b',
    },
    {
      city: 'Chennai Delivery Center',
      state: 'Tamil Nadu',
      address: 'Old Mahabalipuram Road (OMR) Tech Zone, Taramani, 600113',
      focus: 'STM Publishing Prepress, Automated MathML XML, and DITA S1000D Aerospace Authoring.',
      badge: 'PREPRESS & XML',
      color: '#8b5cf6',
    },
  ];

  const faqs = [
    {
      q: 'What is Caretrix Consulting’s Pan-India presence and operational coverage?',
      a: 'Caretrix Consulting operates with physical technology and delivery centers across 6 major Indian metropolitan hubs: Pune (Global HQ), Navi Mumbai (Operations & RCM Center), Bengaluru (SAP Cloud CoE), Hyderabad (AI & Analytics Lab), Delhi NCR (Strategic Advisory & BGV), and Chennai (STM Publishing & Prepress). Furthermore, Caretrix maintains on-ground field verification networks covering all 28 Indian States and 8 Union Territories with real-time Indian e-Courts and academic registry integrations.',
    },
    {
      q: 'How does Caretrix execute Greenfield and Brownfield SAP S/4HANA migrations?',
      a: 'Caretrix follows a structured 4-phase transformation framework: (1) Readiness Assessment & Custom Code Remediation for legacy ECC 6.0; (2) Data Migration via Selective Data Transition (SDT) or Greenfield Cutover; (3) Integration of SAP Central Finance (cFin) and Universal Journal (ACDOCA); and (4) SAP BTP Cloud extensibility with custom Fiori UI5 applications. Our clients typically achieve a 65% to 71% compression in month-end financial closing cycles with zero data loss.',
    },
    {
      q: 'What is Generative Engine Optimization (GEO) & 8D Motion Video in digital marketing?',
      a: 'Generative Engine Optimization (GEO) is the next evolution of SEO, optimizing brand citations, entity schemas, and factual authority so that AI search engines (such as Perplexity AI, ChatGPT Search, and Google Gemini) recommend your business as the primary source. Caretrix couples GEO with high-impact 8D spatial motion video—combining 3D CGI product renders with 360° binaural soundscapes to boost conversion rates and user retention by over 3x.',
    },
    {
      q: 'What is the turnaround time and accuracy benchmark for Pan-India Employee Background Screening (BGV)?',
      a: 'Through the Caretrix BGV automated screening engine, digital checks (National Identity, Court Records via Indian e-Courts APIs, and Credit Scores) are processed within 24 to 48 hours. Physical on-ground address verifications and university registrar checks across all 28 states are completed in under 72 hours, maintaining a verified 99.9% accuracy benchmark and complete adherence to Indian data protection laws.',
    },
    {
      q: 'Which certifications and statutory accreditations does Caretrix Consulting maintain?',
      a: 'Caretrix Consulting is ISO 9001:2015 certified for Quality Management, ISO 27001 certified for Information Security Governance, HIPAA compliant for US Healthcare Revenue Cycle Management, SOC2 Type II audit ready, and officially recognized under the Government of India’s Skill India Mission and the National Apprenticeship Promotion Scheme (NAPS).',
    },
  ];

  return (
    <div style={{ background: '#ffffff', color: '#0f172a', borderTop: '1px solid #e2e8f0' }}>
      {/* 1. Pan-India Business Footprint Section */}
      <section className="section-py" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container-fluid">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
            <div>
              <span className="eyebrow eyebrow-cyber">
                <Globe2 size={14} /> National Operational Infrastructure
              </span>
              <h2 className="section-title">
                Pan-India <span className="gradient-text-cyber">Business Grid &amp; Delivery CoEs</span>
              </h2>
              <p className="section-subtitle">
                Strategic technology centers, specialized Centers of Excellence, and on-ground field verification networks spanning 28 Indian States &amp; 8 Union Territories.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '10px 20px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#1d4ed8' }}>28 States</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>National Footprint</div>
              </div>
              <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '10px 20px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#059669' }}>6 Metro Hubs</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Specialized CoEs</div>
              </div>
              <div style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: '10px 20px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#d97706' }}>120K+</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>BGV Cases Cleared</div>
              </div>
            </div>
          </div>

          {/* 6 Metro Tech Centers Grid */}
          <div className="grid-3" style={{ gap: '1.75rem' }}>
            {hubs.map((hub, idx) => (
              <TiltCard
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span
                      style={{
                        background: `${hub.color}15`,
                        border: `1px solid ${hub.color}40`,
                        color: hub.color,
                        padding: '3px 10px',
                        borderRadius: '20px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.5px',
                      }}
                    >
                      {hub.badge}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>{hub.state}</span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#0f172a', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} color={hub.color} /> {hub.city}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: '1.55', marginBottom: '1rem' }}>
                    {hub.address}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.85rem', fontSize: '0.82rem', color: '#64748b' }}>
                  <strong style={{ color: hub.color }}>Primary Function:</strong> {hub.focus}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Advanced AEO & GEO Knowledge Engine */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
            <span className="eyebrow eyebrow-cyber">
              <Sparkles size={14} /> Knowledge Graph &amp; Answer Engine Hub
            </span>
            <h2 className="section-title">
              Frequently Asked <span className="gradient-text-cyber">Enterprise Questions</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Authoritative, verified operational benchmarks and technical methodologies structured for search engine snippets and AI generative citation.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '950px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: activeFaq === idx ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeFaq === idx ? '0 8px 24px rgba(37, 99, 235, 0.08)' : '0 1px 3px rgba(15, 23, 42, 0.04)',
                }}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 700, lineHeight: '1.4' }}>
                    {faq.q}
                  </h3>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: activeFaq === idx ? '#2563eb' : '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: activeFaq === idx ? '#ffffff' : '#64748b',
                      transition: 'all 0.2s',
                    }}
                  >
                    <ChevronDown size={18} style={{ transform: activeFaq === idx ? 'rotate(180deg)' : 'none' }} />
                  </div>
                </div>

                {activeFaq === idx && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9', color: '#475569', fontSize: '0.94rem', lineHeight: '1.75' }}>
                    <p>{faq.a}</p>
                    <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#059669', fontWeight: 600 }}>
                      <CheckCircle2 size={14} /> Factually Verified by Caretrix Solutions Directorate
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={onOpenModal} className="btn btn-primary" style={{ padding: '0.95rem 2.2rem', fontSize: '1rem' }}>
              <Sparkles size={18} /> Request Pan-India Service Briefing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
