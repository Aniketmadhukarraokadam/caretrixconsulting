import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

export default function Projects({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'US Regional Hospital Network RCM Modernization',
      domain: 'healthcare',
      client: 'Multi-State Healthcare System (USA)',
      scale: '45 Dedicated Specialists',
      duration: 'Ongoing (Started 2022)',
      summary: 'Re-engineered prior authorization and claims scrub pipelines, eliminating denial backlogs and restoring $4.8M in trapped insurance revenue.',
      stack: ['Epic Systems', 'Cerner', 'Optum Encoder', 'HIPAA 837/835 EDI'],
      results: ['Denial rate dropped from 14.2% to 3.1%', 'Average AR days reduced by 22 days', '100% HIPAA audit compliance'],
    },
    {
      id: 2,
      title: 'Global Fintech High-Concurrency API Architecture',
      domain: 'tech',
      client: 'Tier-1 Payments Platform (UK/EU)',
      scale: '18 Full-Stack Engineers',
      duration: '14 Months',
      summary: 'Deconstructed legacy monolithic transaction server into resilient containerized microservices capable of sustaining 25,000 requests/sec with zero packet loss.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
      results: ['API latency cut by 80% (< 0.7s)', '99.99% system availability', 'Zero security vulnerability incidents'],
    },
    {
      id: 3,
      title: 'Pan-India Enterprise Employee Screening Framework',
      domain: 'bgv',
      client: 'Fortune 500 IT Services Conglomerate',
      scale: '30 Verification Officers',
      duration: 'Ongoing (3+ Years)',
      summary: 'Engineered a digital verification pipeline running automated court record queries, university registrar checks, and geo-tagged address verifications across 28 Indian states.',
      stack: ['Caretrix BGV Engine', 'OCR Document Extraction', 'e-Courts API', 'Aadhaar Offline XML'],
      results: ['Turnaround time reduced from 14 to 3 days', 'Over 120,000 background files cleared', '99.9% verification accuracy SLA'],
    },
    {
      id: 4,
      title: 'Omnichannel Customer Support & Helpdesk for E-Commerce',
      domain: 'bpo',
      client: 'Leading D2C Lifestyle Retailer',
      scale: '65 Multilingual Agents',
      duration: 'Ongoing (2+ Years)',
      summary: 'Operated a 24/7 bilingual customer resolution hub spanning voice, WhatsApp, live chat, and Zendesk tickets during high-velocity festive seasons.',
      stack: ['Zendesk', 'Five9 Cloud Telephony', 'Shopify Plus', 'Klaviyo'],
      results: ['First Response Time maintained < 30 seconds', 'CSAT increased from 78% to 94.2%', 'First-Contact Resolution of 88%'],
    },
    {
      id: 5,
      title: 'Educational Publishing ePub3 & Interactive Math Digitize',
      domain: 'kpo',
      client: 'European Academic Publisher',
      scale: '22 Content Engineers & SMEs',
      duration: '9 Months',
      summary: 'Digitized and engineered 450+ higher-education textbooks into accessible ePub3 and MathML compliant interactive formats with formula validations.',
      stack: ['XML / XSLT', 'MathML', 'InDesign Scripting', 'Python NLP'],
      results: ['Zero formatting errors upon validation', '100% WCAG 2.1 AA accessibility score', 'Delivered 3 weeks ahead of deadline'],
    },
    {
      id: 6,
      title: 'Multinational Manufacturing SAP S/4HANA Private Cloud Deployment',
      domain: 'sap',
      client: 'Heavy Engineering & Industrial OEM (US & Germany)',
      scale: '28 SAP Functional & Technical Consultants',
      duration: '18 Months (Completed & 24/7 AMS)',
      summary: 'Greenfield migration of 18 global company codes from legacy SAP ECC 6.0 to SAP S/4HANA Cloud, integrating Central Finance (cFin) and custom Fiori UI5 portals.',
      stack: ['SAP S/4HANA Cloud', 'Central Finance (cFin)', 'SAP BTP', 'ABAP on HANA', 'SAP Fiori UI5', 'SAP BASIS'],
      results: ['Financial close reduced from 14 to 4 days', 'Automated reconciliations across 18 company codes', 'Zero-downtime production cutover completed'],
    },
  ];

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.domain === activeFilter);

  return (
    <div style={{ background: '#030712', color: '#ffffff' }}>
      {/* Header */}
      <section className="page-header">
        <div className="container-fluid">
          <span className="eyebrow eyebrow-cyber">Delivery Track Record</span>
          <h1>Proven Project Deployments</h1>
          <p>
            Explore real-world technical, operational, and verification projects delivered by Caretrix Consulting across international markets.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: '#060e1e', padding: '1.5rem 0', borderBottom: '1px solid rgba(0, 240, 255, 0.15)' }}>
        <div className="container-fluid">
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'sap', label: 'SAP Enterprise ERP' },
              { id: 'healthcare', label: 'Healthcare & RCM' },
              { id: 'tech', label: 'IT & Cloud Systems' },
              { id: 'bgv', label: 'Verification (BGV)' },
              { id: 'bpo', label: 'BPO & Support' },
              { id: 'kpo', label: 'KPO & Content' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '20px',
                  border: activeFilter === tab.id ? '1.5px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.15)',
                  background: activeFilter === tab.id ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeFilter === tab.id ? '#00f0ff' : '#cbd5e1',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeFilter === tab.id ? '0 0 15px rgba(0, 240, 255, 0.3)' : 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-py" style={{ background: '#030712' }}>
        <div className="container-fluid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {filtered.map((proj) => (
              <div
                key={proj.id}
                className="card"
                style={{
                  padding: '2.5rem',
                  background: 'rgba(11, 24, 46, 0.75)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  borderRadius: '22px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <span className="eyebrow eyebrow-cyber" style={{ marginBottom: '0.5rem' }}>
                      {proj.domain.toUpperCase()} CASE
                    </span>
                    <h2 style={{ fontSize: '1.65rem', color: '#ffffff', marginTop: '0.3rem' }}>{proj.title}</h2>
                    <div style={{ fontSize: '0.92rem', color: '#00f0ff', fontWeight: 600, marginTop: '4px' }}>
                      Client Profile: {proj.client}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', background: '#f8fafc', padding: '8px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block' }}>Team Scale:</span>
                      <strong>{proj.scale}</strong>
                    </div>
                    <div style={{ borderLeft: '1px solid #cbd5e1', paddingLeft: '1rem' }}>
                      <span style={{ color: 'var(--text-muted)', display: 'block' }}>Timeline:</span>
                      <strong>{proj.duration}</strong>
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {proj.summary}
                </p>

                {/* Stacks & Results */}
                <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(0, 240, 255, 0.2)', padding: '1.2rem', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00f0ff', marginBottom: '0.6rem' }}>
                      Technology &amp; Tooling Stacks:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {proj.stack.map((s, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: 'rgba(0, 240, 255, 0.1)',
                            border: '1px solid rgba(0, 240, 255, 0.25)',
                            padding: '3px 10px',
                            borderRadius: '6px',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            color: '#00f0ff',
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '1.2rem', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', marginBottom: '0.6rem' }}>
                      Key Business Outcomes:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {proj.results.map((r, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', color: '#e2e8f0' }}>
                          <CheckCircle2 size={15} color="#10b981" /> <strong>{r}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="btn btn-primary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>Request Similar Project Scope</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--gradient-dark)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '1rem' }}>
            Have a Specific Project Milestone in Mind?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Submit your technical specifications or functional requirements for an instant feasibility review and time-to-market estimate.
          </p>
          <button onClick={onOpenModal} className="btn btn-accent btn-lg">
            Schedule Project Scoping Session
          </button>
        </div>
      </section>
    </div>
  );
}
