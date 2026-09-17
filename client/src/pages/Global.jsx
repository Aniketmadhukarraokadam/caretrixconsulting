import React from 'react';
import { Globe, MapPin, Shield, Clock, Wifi, Server, CheckCircle2 } from 'lucide-react';

export default function Global({ onOpenModal }) {
  const hubs = [
    {
      name: 'Pune Global Operations HQ',
      type: 'Corporate Headquarters & Center of Excellence',
      address: '4th Floor, Dangat Patil Empire, Kudale Baug, Vadgaon Budruk, Pune, Maharashtra 411041',
      capacity: '250+ Workstations',
      specializations: ['Full-Stack Software Engineering', 'Cloud & DevOps Architecture', 'KPO & Financial Research', 'Executive BGV Screening Desk'],
      highlights: ['Dual Tier-3 fiber backbones', 'Biometric 3-factor access control', 'Full diesel generator backup power', 'ISO 27001 audited physical security'],
    },
    {
      name: 'Navi Mumbai Delivery Center',
      type: 'BPO & Healthcare Operations Center',
      address: 'C-207, 2nd Floor, Tower 2, Above Vashi Railway Station, Vashi, Navi Mumbai, Maharashtra 400703',
      capacity: '180+ Workstations',
      specializations: ['Healthcare RCM & Medical Coding', '24/7 Inbound/Outbound BPO Support', 'Verification Field Coordination', 'Enterprise Staffing Desk'],
      highlights: ['Prime transit hub above Vashi Station', 'Round-the-clock rotational shift coverage', 'HIPAA compliant clean-room facility', 'Dedicated secure client server rooms'],
    },
  ];

  const timezones = [
    { region: 'North America (EST / CST / PST)', coverage: 'Full US Business Hours & Overnight Processing', focus: 'Healthcare RCM, BPO Support, IT DevOps' },
    { region: 'United Kingdom & Europe (GMT / CET)', coverage: 'Direct Timezone Overlap (5-6 Hours Daily)', focus: 'FinTech Systems, Verification, ePub KPO' },
    { region: 'Asia-Pacific & Australia (AEST / SGT)', coverage: 'Same-day turnaround and live desk support', focus: 'Customer Support, Staffing, QA Testing' },
    { region: 'Middle East (GST / AST)', coverage: 'Real-time collaboration across working days', focus: 'IT Infrastructure, Procurement Operations' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow-white">Worldwide Reach</span>
          <h1>Global Delivery Network</h1>
          <p>
            Operating across continuous 24/7 cycles from premier delivery centers in Pune and Navi Mumbai, Caretrix Consulting serves top-tier multinational clients around the clock.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-py">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="eyebrow eyebrow-teal">Follow-The-Sun Operations</span>
              <h2 className="section-title">Seamless Operational Continuity Across All Time Zones</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Our distributed delivery model bridges geographic distances. While your onshore teams rest, Caretrix specialists in India continue sprinting on development tickets, adjudicating healthcare claims, and processing critical background dossiers.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Both facilities feature bank-grade physical security, isolated clean-room environments for sensitive financial and medical data, and 99.99% uptime connectivity.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <Clock size={24} color="#00a6c7" style={{ marginBottom: '6px' }} />
                  <strong style={{ display: 'block', fontSize: '1rem' }}>24/7/365 Runtime</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Zero operational downtime</span>
                </div>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <Shield size={24} color="#10b981" style={{ marginBottom: '6px' }} />
                  <strong style={{ display: 'block', fontSize: '1rem' }}>Data Governance</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ISO 27001 &amp; HIPAA</span>
                </div>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <img
                  src="/caretrix_global.png"
                  alt="Global Delivery Operations"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Deep Dive */}
      <section style={{ background: '#f8fafc', padding: '5rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '650px', marginBottom: '3.5rem' }}>
            <span className="eyebrow eyebrow-accent">Infrastructure Pillars</span>
            <h2 className="section-title">Strategic Delivery Centers</h2>
            <p className="section-subtitle mx-auto">
              Equipped with enterprise-grade IT infrastructure, biometric authentication, and power redundancy.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2.5rem' }}>
            {hubs.map((hub, idx) => (
              <div key={idx} className="card" style={{ padding: '2.5rem', borderTop: `5px solid ${idx === 0 ? 'var(--secondary)' : 'var(--accent)'}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={22} color={idx === 0 ? 'var(--secondary)' : '#d97706'} />
                  <h3 style={{ fontSize: '1.4rem' }}>{hub.name}</h3>
                </div>
                <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>
                  {hub.type}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  <strong>Address:</strong> {hub.address}
                </p>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                    Primary Domain Specializations:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.4rem' }}>
                    {hub.specializations.map((spec, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.86rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={14} color="#00a6c7" /> {spec}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>
                    Security &amp; Resilience Features:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.4rem' }}>
                    {hub.highlights.map((h, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                        <Shield size={14} color="#10b981" /> {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timezone Matrix */}
      <section className="section-py">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '650px', marginBottom: '3.5rem' }}>
            <span className="eyebrow eyebrow-teal">Timezone Matrix</span>
            <h2 className="section-title">Global Client Synchronization</h2>
            <p className="section-subtitle mx-auto">
              How our teams align shift schedules with your local headquarters across global business corridors.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {timezones.map((tz, idx) => (
              <div key={idx} className="card" style={{ padding: '1.8rem' }}>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-dark)', marginBottom: '0.4rem' }}>
                  {tz.region}
                </h4>
                <div style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                  Coverage: {tz.coverage}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  <strong>Key Workflows:</strong> {tz.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--gradient-dark)', color: 'white', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '1rem' }}>
            Tour Our Facilities or Setup Offshore Delivery
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Schedule an on-site physical tour of our Pune or Navi Mumbai delivery floors, or request a virtual security walkthrough.
          </p>
          <button onClick={onOpenModal} className="btn btn-accent btn-lg">
            Request Facility Audit &amp; Proposal
          </button>
        </div>
      </section>
    </div>
  );
}
