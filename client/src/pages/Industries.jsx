import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Landmark,
  Laptop,
  ShoppingCart,
  GraduationCap,
  Truck,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export default function Industries({ onOpenModal }) {
  const industries = [
    {
      icon: <HeartPulse size={36} color="#f7941d" />,
      name: 'Healthcare & Life Sciences',
      tagline: 'HIPAA-Compliant Revenue Cycle & Clinical Support Systems',
      desc: 'Partnering with US clinic chains, hospital networks, and digital health startups to streamline claims processing, medical billing, ICD-10 coding, and credentialing.',
      metrics: ['98.4% First-Pass Clean Claim Rate', '40% Reduction in AR Days', 'HIPAA & HITECH Certified'],
      solutions: ['Prior Authorization Desk', 'Denial Management Recovery', 'Medical Chart Audits', 'Patient Helpdesk'],
    },
    {
      icon: <Landmark size={36} color="#00a6c7" />,
      name: 'Banking, FinTech & Financial Services',
      tagline: 'Secure Transactional Operations & Rigorous Verification',
      desc: 'Empowering digital neo-banks, payment gateways, and wealth managers with high-speed KYC compliance, candidate background screening, and high-volume customer reconciliation.',
      metrics: ['< 3 Min Real-Time KYC Processing', '99.98% Transaction Reconciliation SLA', 'SOC2 & PCI-DSS Support'],
      solutions: ['AML/KYC Verification', 'Fraud Dispute Resolution', 'Merchant Settlement Audit', 'Financial Modeling'],
    },
    {
      icon: <Laptop size={36} color="#10b981" />,
      name: 'IT, SaaS & Telecommunications',
      tagline: 'Agile Engineering Pods & 24/7 Technical Support',
      desc: 'Accelerating product velocity for high-growth SaaS platforms and telecom operators with dedicated full-stack development pods, DevOps pipelines, and tier 1-3 helpdesk desks.',
      metrics: ['24/7 Follow-the-Sun SLA', '< 15 Min Critical Incident Response', '100% Sprint Delivery Adherence'],
      solutions: ['Cloud Migration (AWS/Azure)', 'Microservices Refactoring', 'L1-L3 Support Desk', 'QA Automation'],
    },
    {
      icon: <ShoppingCart size={36} color="#ec4899" />,
      name: 'Retail & E-Commerce',
      tagline: 'Omnichannel Customer Experience & Catalog Operations',
      desc: 'Managing seasonal peak volumes, omnichannel customer retention, seller onboarding, product catalog enrichment, and returns processing for top e-commerce brands.',
      metrics: ['92%+ CSAT Across Support Channels', '< 45s Live Chat First Response', '50,000+ Monthly SKUs Enriched'],
      solutions: ['24/7 Customer Inbound/Outbound', 'Order & Return Management', 'Marketplace Catalog Cleansing', 'Seller Vetting'],
    },
    {
      icon: <GraduationCap size={36} color="#f59e0b" />,
      name: 'Education & EduTech',
      tagline: 'Interactive Courseware, Authoring & Virtual Learning Ops',
      desc: 'Powering global educational publishers and online learning platforms with expert SME authoring, SCORM module digitization, assignment grading, and student support.',
      metrics: ['1M+ Questions Authored & Validated', 'Zero Pedagogical Error Benchmark', 'ePub3 / XML Standards'],
      solutions: ['Digital Curriculum Conversion', 'SME Question-Bank Creation', 'LMS Course Management', 'Student Live Assistance'],
    },
    {
      icon: <Truck size={36} color="#6366f1" />,
      name: 'Logistics, Supply Chain & Manufacturing',
      tagline: 'Vendor Verification, Dispatch Tracking & Back-Office Audits',
      desc: 'Optimizing freight dispatch operations, bill-of-lading data processing, driver verification checks, and multi-location procurement workflows.',
      metrics: ['99.7% Waybill Entry Accuracy', 'Driver BGV Completed in 72 Hrs', 'Real-time Tracking Uptime'],
      solutions: ['SAP S/4HANA MM/PP & Supply Chain Integration', 'Bill of Lading Extraction', 'Fleet Driver Background Vetting', 'Carrier Onboarding', 'Vendor Ledger Reconciliation'],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow-white">Sector Expertise</span>
          <h1>Tailored Solutions Across Industries</h1>
          <p>
            Every industry presents unique regulatory standards and operating dynamics. Caretrix deploys domain-trained talent aligned specifically with your sector requirements.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-py">
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      background: 'rgba(0, 166, 199, 0.08)',
                      padding: '14px',
                      borderRadius: '14px',
                      display: 'inline-flex',
                    }}
                  >
                    {ind.icon}
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{ind.name}</h2>
                    <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 600 }}>
                      {ind.tagline}
                    </span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {ind.desc}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.75)',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00f0ff', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    Key Performance Benchmarks
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {ind.metrics.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        style={{
                          background: 'rgba(0, 240, 255, 0.12)',
                          border: '1px solid rgba(0, 240, 255, 0.3)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#00f0ff',
                        }}
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div style={{ marginBottom: '1.75rem', flex: 1 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                    Domain Workflows Delivered:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                    {ind.solutions.map((sol, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                        <CheckCircle size={14} color="#10b981" /> {sol}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="btn btn-primary btn-sm"
                  style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>Inquire for {ind.name.split('&')[0]}</span>
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
            Looking for a Domain-Specific SLA?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Our solutions architects will construct an operational model tailored to your exact regulatory compliance needs and throughput targets.
          </p>
          <button onClick={onOpenModal} className="btn btn-accent btn-lg">
            Request an Industry Assessment
          </button>
        </div>
      </section>
    </div>
  );
}
