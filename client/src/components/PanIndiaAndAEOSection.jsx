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
  Bot,
  Copy,
  Check,
  Search,
  Laptop,
  Headphones,
  Briefcase,
  FileText,
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function PanIndiaAndAEOSection({ onOpenModal }) {
  const [activeFaq, setActiveFaq] = useState(0);
  const [faqCategory, setFaqCategory] = useState('all');
  const [copiedIdx, setCopiedIdx] = useState(null);

  const hubs = [
    {
      city: 'Pune (Global HQ)',
      state: 'Maharashtra',
      address: '4th Floor, Dangat Patil Empire, Kudale Baug, Vadgaon Budruk, 411041',
      focus: 'Executive Directorate, SAP S/4HANA Center of Excellence, Cloud Architecture & MarTech Studio.',
      badge: 'GLOBAL HQ',
      color: '#0052cc',
    },
    {
      city: 'Navi Mumbai Hub',
      state: 'Maharashtra',
      address: 'C-207, 2nd Floor, Tower 2, Above Vashi Railway Station, 400703',
      focus: 'Healthcare Revenue Cycle (RCM), Multichannel 24/7 BPO Pods & Institutional BGV Ops.',
      badge: 'RCM & BPO HUB',
      color: '#059669',
    },
    {
      city: 'Bengaluru CoE',
      state: 'Karnataka',
      address: 'Outer Ring Road Enterprise Tech Park, Bellandur, 560103',
      focus: 'SAP BTP Cloud Foundry, ABAP on HANA, RESTful RAP/CAP, and Fiori UI5 Engineering.',
      badge: 'SAP CLOUD COE',
      color: '#2563eb',
    },
    {
      city: 'Hyderabad AI Lab',
      state: 'Telangana',
      address: 'HITEC City Innovation Precinct, Madhapur, 500081',
      focus: 'Agentic AI Orchestration, 3D LiDAR Point Clouds & Multimodal Computer Vision Labeling.',
      badge: 'AI & DATA LAB',
      color: '#7c3aed',
    },
    {
      city: 'Delhi NCR Advisory',
      state: 'National Capital Region',
      address: 'Cyber City Corporate Tower, DLF Phase 2, Gurugram, 122002',
      focus: 'Corporate Advisory, Pan-India Court Record Verifications & Government Compliance Desk.',
      badge: 'STRATEGIC ADVISORY',
      color: '#d97706',
    },
    {
      city: 'Chennai Delivery Center',
      state: 'Tamil Nadu',
      address: 'Old Mahabalipuram Road (OMR) Tech Zone, Taramani, 600113',
      focus: 'STM Publishing Prepress, Automated MathML XML, and DITA S1000D Aerospace Authoring.',
      badge: 'PREPRESS & XML',
      color: '#0284c7',
    },
  ];

  const faqs = [
    {
      category: 'ams',
      q: 'What are Caretrix Consulting’s Application Support Services (AMS) and incident SLA commitments?',
      a: 'Caretrix provides comprehensive 24/7/365 L1, L2, and L3 Application Management Services (AMS) aligned with ITIL v4 frameworks. We guarantee a <15-minute response time on critical P1 incidents and 99.98% application uptime. Our certified engineering pods manage full-stack cloud observability (Datadog, Dynatrace, New Relic, Prometheus), database administration (PostgreSQL, MySQL, Oracle, MongoDB), security vulnerability patching, and CI/CD zero-downtime releases for modern SaaS architectures and enterprise ERP suites.',
      badge: '15-Min SLA',
    },
    {
      category: 'voice',
      q: 'How does Caretrix deliver International Voice Process and Domestic Voice Process operations?',
      a: 'Caretrix operates dual-track voice support delivery: (1) International Voice Process: Dedicated 24/7 inbound/outbound customer experience, technical helpdesk, and HIPAA patient intake pods for US, UK, European, and Australian enterprises staffed with C2 English and neutral-accent certified agents maintaining a 96.4% CSAT benchmark; and (2) Domestic Voice Process: Pan-India multilingual support across 12+ regional languages (Hindi, Marathi, Tamil, Telugu, Kannada, Malayalam, Bengali, Gujarati, Punjabi, Odia) delivering <15-second average speed of answer (ASA) and 88%+ First Contact Resolution (FCR) for banking, e-commerce, and healthcare leaders.',
      badge: 'US/UK & 12+ Langs',
    },
    {
      category: 'sap',
      q: 'What makes Caretrix an Enterprise Mega Hub uniting Consulting and Managed Services?',
      a: 'Caretrix functions as an Enterprise Mega Hub by housing two integrated engines under one roof: Strategic Enterprise Consulting (SAP S/4HANA migrations, cloud architecture, corporate advisory, and 5.2x ROAS performance marketing) combined with follow-the-sun 24/7 Managed Services (L1/L2/L3 AMS, international & domestic voice contact centers, healthcare RCM, and physical background verification across all 28 Indian States).',
      badge: 'Mega Hub',
    },
    {
      category: 'sap',
      q: 'How does Caretrix execute Greenfield and Brownfield SAP S/4HANA migrations?',
      a: 'Caretrix follows a structured 4-phase transformation framework: (1) Readiness Assessment & Custom Code Remediation for legacy ECC 6.0; (2) Data Migration via Selective Data Transition (SDT) or Greenfield Cutover; (3) Integration of SAP Central Finance (cFin) and Universal Journal (ACDOCA); and (4) SAP BTP Cloud extensibility with custom Fiori UI5 applications. Our clients typically achieve a 65% to 71% compression in month-end financial closing cycles with zero data loss.',
      badge: 'SAP S/4HANA',
    },
    {
      category: 'martech',
      q: 'What is Generative Engine Optimization (GEO) & 8D Motion Video in digital marketing?',
      a: 'Generative Engine Optimization (GEO) is the next evolution of SEO, optimizing brand citations, entity schemas, and factual authority so that AI search engines (such as Perplexity AI, ChatGPT Search, and Google Gemini) recommend your business as the primary source. Caretrix couples GEO with high-impact 8D spatial motion video—combining 3D CGI product renders with 360° binaural soundscapes to boost conversion rates and user retention by over 3x.',
      badge: 'GEO / AEO',
    },
    {
      category: 'bgv',
      q: 'What is the turnaround time and accuracy benchmark for Pan-India Background Verification (BGV)?',
      a: 'Through the Caretrix BGV automated screening engine, digital checks (National Identity, Court Records via Indian e-Courts APIs, and Credit Scores) are processed within 24 to 48 hours. Physical on-ground address verifications and university registrar checks across all 28 states are completed in under 72 hours, maintaining a verified 99.9% accuracy benchmark and complete adherence to Indian data protection laws.',
      badge: '28 States',
    },
    {
      category: 'compliance',
      q: 'Which certifications and statutory accreditations does Caretrix Consulting maintain?',
      a: 'Caretrix Consulting is ISO 9001:2015 certified for Quality Management, ISO 27001 certified for Information Security Governance, HIPAA compliant for US Healthcare Revenue Cycle Management, SOC2 Type II audit ready, and officially recognized under the Government of India’s Skill India Mission and the National Apprenticeship Promotion Scheme (NAPS).',
      badge: 'ISO & HIPAA',
    },
    {
      category: 'geo',
      q: 'What is Caretrix Consulting’s Pan-India presence and operational coverage?',
      a: 'Caretrix Consulting operates with physical technology and delivery centers across 6 major Indian metropolitan hubs: Pune (Global HQ), Navi Mumbai (Operations & RCM Center), Bengaluru (SAP Cloud CoE), Hyderabad (AI & Analytics Lab), Delhi NCR (Strategic Advisory & BGV), and Chennai (STM Publishing & Prepress). Furthermore, Caretrix maintains on-ground field verification networks covering all 28 Indian States and 8 Union Territories with real-time Indian e-Courts and academic registry integrations.',
      badge: '6 Hubs / 28 States',
    },
  ];

  const filteredFaqs = faqCategory === 'all' ? faqs : faqs.filter((f) => f.category === faqCategory);

  const handleCopyFact = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2500);
  };

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
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0052cc' }}>28 States</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>National Footprint</div>
              </div>
              <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '10px 20px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#059669' }}>6 Metro Hubs</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Specialized CoEs</div>
              </div>
              <div style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: '10px 20px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#d97706' }}>120K+</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Cases Cleared</div>
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
          <div className="text-center mx-auto" style={{ maxWidth: '850px', marginBottom: '2.5rem' }}>
            <span className="eyebrow eyebrow-cyber">
              <Sparkles size={14} /> Answer Engine (AEO) &amp; Generative Engine (GEO) Hub
            </span>
            <h2 className="section-title">
              Verified Enterprise <span className="gradient-text-cyber">Knowledge Base</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Authoritative, extractive factual answers structured for Google SGE, Perplexity AI, ChatGPT, and Claude citations.
            </p>

            {/* GEO LLM-Ready Standard Banner */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '1.25rem',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '30px',
                padding: '6px 16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                fontSize: '0.78rem',
                color: '#334155',
              }}
            >
              <Bot size={15} color="#0052cc" />
              <span>
                <strong>GEO Standard Compliant:</strong> LLMs and AI Agents can ingest our raw knowledge base at{' '}
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0052cc', fontWeight: 700, textDecoration: 'underline' }}
                >
                  /llms.txt
                </a>{' '}
                or{' '}
                <a
                  href="/llms-full.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0052cc', fontWeight: 700, textDecoration: 'underline' }}
                >
                  /llms-full.txt
                </a>
              </span>
            </div>
          </div>

          {/* FAQ Category Filter Switchers */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '2.5rem',
            }}
          >
            {[
              { id: 'all', label: 'All Knowledge Facts', icon: Sparkles },
              { id: 'ams', label: 'Application Support (AMS)', icon: Laptop },
              { id: 'voice', label: 'Voice Processes (Intl & Domestic)', icon: Headphones },
              { id: 'sap', label: 'SAP S/4HANA & Mega Hub', icon: Briefcase },
              { id: 'bgv', label: 'Pan-India BGV (28 States)', icon: ShieldCheck },
              { id: 'compliance', label: 'Certifications & Compliance', icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = faqCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFaqCategory(tab.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: isActive ? '#0052cc' : '#ffffff',
                    color: isActive ? '#ffffff' : '#334155',
                    border: isActive ? '1px solid #0052cc' : '1px solid #cbd5e1',
                    boxShadow: isActive ? '0 4px 12px rgba(0, 82, 204, 0.2)' : '0 1px 2px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Accordion List with Direct Copy Fact Snippets */}
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: isOpen ? '1.5px solid #0052cc' : '1px solid #e2e8f0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 10px 25px -4px rgba(0, 82, 204, 0.08)' : '0 2px 6px rgba(15, 23, 42, 0.03)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          background: '#eff6ff',
                          border: '1px solid #bfdbfe',
                          color: '#0052cc',
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: '6px',
                          textTransform: 'uppercase',
                          flexShrink: 0,
                        }}
                      >
                        {faq.badge}
                      </span>
                      <span
                        style={{
                          fontSize: '1.02rem',
                          fontWeight: 700,
                          color: isOpen ? '#0052cc' : '#0f172a',
                          lineHeight: '1.4',
                        }}
                      >
                        {faq.q}
                      </span>
                    </div>

                    <ChevronDown
                      size={18}
                      color={isOpen ? '#0052cc' : '#64748b'}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.5rem',
                        borderTop: '1px solid #f1f5f9',
                        marginTop: '0.25rem',
                        paddingTop: '1rem',
                      }}
                    >
                      <p
                        style={{
                          color: '#334155',
                          fontSize: '0.94rem',
                          lineHeight: '1.75',
                          marginBottom: '1rem',
                        }}
                      >
                        {faq.a}
                      </p>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          gap: '10px',
                          background: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          padding: '8px 12px',
                        }}
                      >
                        <span style={{ fontSize: '0.76rem', color: '#64748b' }}>
                          ✓ AI Citation Verified • Extracted from Caretrix Knowledge Graph
                        </span>
                        <button
                          onClick={() => handleCopyFact(faq.a, idx)}
                          style={{
                            background: '#ffffff',
                            border: '1px solid #cbd5e1',
                            borderRadius: '6px',
                            padding: '4px 10px',
                            fontSize: '0.74rem',
                            fontWeight: 700,
                            color: copiedIdx === idx ? '#059669' : '#0f172a',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'all 0.2s',
                          }}
                        >
                          {copiedIdx === idx ? <Check size={12} color="#059669" /> : <Copy size={12} />}
                          <span>{copiedIdx === idx ? 'Copied Fact!' : 'Copy Answer Snippet'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
