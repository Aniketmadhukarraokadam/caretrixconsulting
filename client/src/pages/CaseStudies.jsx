import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

export default function CaseStudies({ onOpenModal }) {
  const [filter, setFilter] = useState('all');

  const cases = [
    {
      id: 1,
      tag: 'IT Services',
      title: 'IT Systems Performance & Transaction Latency Optimization',
      client: 'Global Fintech Platform (London, UK)',
      challenge: 'Global fintech payment gateway experiencing transaction latency and database deadlocks during peak flash transactions, with checkout delays exceeding 4.2 seconds.',
      solution: 'Deployed a dedicated L2/L3 engineering pod to monitor query queues, refactor core microservice API layers, containerize services on Kubernetes, and introduce Redis cluster caching.',
      outcome: 'Transaction latency slashed by 80% (reduced from 4.2s to under 0.7s), with system availability reaching 99.98% SLA even during peak holiday shopping surges.',
      stats: [{ label: 'Latency Cut', val: '80%' }, { label: 'SLA Runtime', val: '99.98%' }, { label: 'Saved Revenue', val: '$1.4M/yr' }],
    },
    {
      id: 2,
      tag: 'KPO Services',
      title: 'Content Engineering & ePub3 Accessibility Transformation',
      client: 'Major Educational Publishing House (Europe)',
      challenge: 'Legacy backlist of 600+ complex STEM textbooks required urgent accessibility remediation and conversion to interactive ePub3 / MathML standards under tight statutory deadlines.',
      solution: 'Formed a specialized 30-member KPO content engineering team in Pune, utilizing custom automated XML transformation pipelines alongside expert STEM editorial validation.',
      outcome: 'Completed all 600 titles 3 weeks ahead of regulatory schedule with 100% WCAG 2.1 AA compliance and zero structural validation errors.',
      stats: [{ label: 'Titles Converted', val: '600+' }, { label: 'Error Rate', val: '0.00%' }, { label: 'Time Saved', val: '3 Weeks' }],
    },
    {
      id: 3,
      tag: 'Healthcare Operations',
      title: 'Healthcare Claims Denial Recovery & AR Days Compression',
      client: 'Multi-Location US Clinic Network (Texas & Florida)',
      challenge: 'Claims denial rate climbed to 16.5% due to non-standardized ICD-10 medical coding and delayed prior authorization requests, stranding $3.2M in aged accounts receivable.',
      solution: 'Mobilized a certified CPC/CCS medical billing and revenue cycle management squad in Navi Mumbai to audit denied charts, fix coding discrepancies, and automate insurer follow-ups.',
      outcome: 'Denial rate dropped to 3.4% within 90 days. Recovered $2.7M in trapped cash flows and lowered average Days in AR from 54 days to 32 days.',
      stats: [{ label: 'Denial Reduction', val: '79%' }, { label: 'Cash Recovered', val: '$2.7M' }, { label: 'Days in AR', val: '32 Days' }],
    },
    {
      id: 4,
      tag: 'Verification Services',
      title: 'High-Throughput Employee Verification for Tech Enterprise',
      client: 'Tier-1 IT Multinational (Pan-India)',
      challenge: 'Client onboarding 3,000+ engineers monthly was stalled by slow candidate verification cycles (taking 16+ days per candidate), resulting in high offer dropouts.',
      solution: 'Implemented automated Caretrix BGV screening engine with direct integration into Indian judicial records, university APIs, and real-time field geo-verification trackers.',
      outcome: 'Turnaround time compressed from 16 days to under 4 days. Cleared 35,000+ candidates in year one with 99.9% verification fidelity.',
      stats: [{ label: 'Turnaround Time', val: '75% Faster' }, { label: 'Files Cleared', val: '35,000+' }, { label: 'Offer Retention', val: '+24%' }],
    },
    {
      id: 5,
      tag: 'SAP Solutions',
      title: 'Global Manufacturing SAP S/4HANA Cloud Migration & Central Finance',
      client: 'Heavy Engineering & Industrial Equipment OEM (US & Germany)',
      challenge: 'Client operated across 18 company codes on a fragmented SAP ECC 6.0 landscape with 400+ custom Z-programs, causing 14-day month-end financial reconciliations and siloed supply chain forecasting.',
      solution: 'Architected a phased Greenfield migration to SAP S/4HANA Cloud Private Edition. Implemented SAP Central Finance (cFin), Universal Journal consolidation, custom Fiori apps via SAP BTP, and automated SAP BASIS zero-downtime cutover.',
      outcome: 'Reduced financial close cycle from 14 days to 4 days (71% compression). Eliminated 260 legacy custom transactions and unified global inventory visibility in real-time across 7 manufacturing plants.',
      stats: [{ label: 'Close Cycle Cut', val: '71%' }, { label: 'Inventory Opt', val: '$8.5M' }, { label: 'Cutover SLA', val: '100% Zero-Loss' }],
    },
    {
      id: 6,
      tag: 'Digital Marketing & MarTech',
      title: 'Global Omnichannel B2B Growth Funnel & 8D Motion Commercial Campaign',
      client: 'Enterprise AI & Cloud SaaS Conglomerate (California, USA)',
      challenge: 'Client faced escalating customer acquisition costs (CAC exceeding $1,450) and low engagement on static ad creatives, with demo-to-close conversion stagnating at 4.2%.',
      solution: 'Orchestrated an automated multi-touch intent funnel (Vortexreach), engineered 3D cinematic motion product visuals with 8D binaural sound design, and deployed Generative Engine Optimization (GEO) across AI search surfaces.',
      outcome: 'Customer acquisition cost slashed by 58% ($610 CAC). Pipeline velocity surged by 340%, and video engagement retention reached an industry-leading 82%.',
      stats: [{ label: 'CAC Reduced', val: '58%' }, { label: 'Pipeline Surge', val: '3.4x' }, { label: 'ROAS Peak', val: '5.2x' }],
    },
  ];

  const filtered = filter === 'all' ? cases : cases.filter((c) => c.tag.toLowerCase().includes(filter));

  return (
    <div style={{ background: '#030712', color: '#ffffff' }}>
      {/* Header */}
      <section className="page-header">
        <div className="container-fluid">
          <span className="eyebrow eyebrow-cyber">Impact Evidence</span>
          <h1>Client Transformation Case Studies</h1>
          <p>
            Real results delivered through structured execution across SAP ERP, digital marketing, 8D motion visuals, healthcare operations, and digital systems.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ background: '#060e1e', padding: '1.5rem 0', borderBottom: '1px solid rgba(0, 240, 255, 0.15)' }}>
        <div className="container-fluid">
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Case Histories' },
              { id: 'sap', label: 'SAP & S/4HANA' },
              { id: 'marketing', label: 'Marketing & 8D Motion' },
              { id: 'it', label: 'IT Systems' },
              { id: 'kpo', label: 'KPO & Content' },
              { id: 'healthcare', label: 'Healthcare Operations' },
              { id: 'verification', label: 'Verification (BGV)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '20px',
                  border: filter === tab.id ? '1.5px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.15)',
                  background: filter === tab.id ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  color: filter === tab.id ? '#00f0ff' : '#cbd5e1',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: filter === tab.id ? '0 0 15px rgba(0, 240, 255, 0.3)' : 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases List */}
      <section className="section-py" style={{ background: '#030712' }}>
        <div className="container-fluid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {filtered.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{
                  padding: '2.5rem',
                  background: 'rgba(11, 24, 46, 0.75)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  borderRadius: '22px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <span className="eyebrow eyebrow-cyber">{item.tag}</span>
                    <h2 style={{ fontSize: '1.65rem', marginTop: '0.4rem', color: '#ffffff' }}>{item.title}</h2>
                    <div style={{ fontSize: '0.92rem', color: '#00f0ff', fontWeight: 600, marginTop: '4px' }}>
                      Client Partner: {item.client}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {item.stats.map((s, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: 'rgba(0, 240, 255, 0.08)',
                          border: '1px solid rgba(0, 240, 255, 0.25)',
                          padding: '12px 20px',
                          borderRadius: '12px',
                          textAlign: 'center',
                          minWidth: '110px',
                        }}
                      >
                        <div style={{ fontSize: '1.55rem', fontWeight: 900, color: '#00f0ff' }}>
                          {s.val}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                  {/* Challenge */}
                  <div style={{ background: 'rgba(244, 63, 94, 0.1)', padding: '1.5rem', borderRadius: '14px', borderLeft: '4px solid #f43f5e', border: '1px solid rgba(244, 63, 94, 0.25)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: '#fb7185', fontWeight: 700 }}>
                      <AlertTriangle size={18} /> Challenge
                    </div>
                    <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.65' }}>
                      {item.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div style={{ background: 'rgba(0, 240, 255, 0.1)', padding: '1.5rem', borderRadius: '14px', borderLeft: '4px solid #00f0ff', border: '1px solid rgba(0, 240, 255, 0.25)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: '#00f0ff', fontWeight: 700 }}>
                      <Lightbulb size={18} /> Caretrix Solution
                    </div>
                    <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.65' }}>
                      {item.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', borderRadius: '14px', borderLeft: '4px solid #10b981', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: '#34d399', fontWeight: 700 }}>
                      <TrendingUp size={18} /> Measurable Impact
                    </div>
                    <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.65' }}>
                      {item.outcome}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={onOpenModal} className="btn btn-primary" style={{ padding: '0.7rem 1.6rem', fontSize: '0.9rem' }}>
                    Inquire for Similar Enterprise Results <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'radial-gradient(circle at 50% 50%, #0d284e 0%, #030712 85%)', color: 'white', padding: '5.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            Want to Achieve Similar Outcomes?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '680px', margin: '0 auto 2.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Every project begins with a complimentary feasibility, architecture review, and cost-benefit ROI analysis conducted by our solutions director.
          </p>
          <button onClick={onOpenModal} className="btn btn-primary btn-lg" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
            Book Feasibility &amp; ROI Review
          </button>
        </div>
      </section>
    </div>
  );
}
