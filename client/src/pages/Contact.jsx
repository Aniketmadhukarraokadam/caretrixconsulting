import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '../components/Toast';

export default function Contact() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    contact_name: '',
    company_name: '',
    work_email: '',
    phone_number: '',
    required_service: 'IT Services',
    project_scale: '5-20 Resources',
    project_details: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        addToast('B2B Proposal submitted to Caretrix SQL database!', 'success');
        setFormData({
          contact_name: '',
          company_name: '',
          work_email: '',
          phone_number: '',
          required_service: 'IT Services',
          project_scale: '5-20 Resources',
          project_details: '',
        });
      } else {
        addToast(data.error || 'Failed to submit proposal', 'error');
      }
    } catch {
      addToast('Network error connecting to SQL backend', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#030712', color: '#ffffff' }}>
      {/* Header */}
      <section className="page-header" style={{ paddingBottom: '7rem' }}>
        <div className="container-fluid">
          <span className="eyebrow eyebrow-cyber">Connect With Us</span>
          <h1>Strategic Partner Gateways</h1>
          <p>
            Connect with Caretrix Consulting's advisory team. Discuss your service delivery requirements, pilot scale options, and operational timelines.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section style={{ marginTop: '-4.5rem', position: 'relative', zIndex: 10, paddingBottom: '5rem' }}>
        <div className="container-fluid">
          <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'flex-start' }}>
            {/* Information Card */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src="/consulting_team.png"
                  alt="Caretrix Offices"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 30%, rgba(9, 26, 47, 0.85) 100%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: 'white' }}>
                  <h3 style={{ color: 'white', fontSize: '1.4rem' }}>Corporate Facilities</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem' }}>
                    Pune HQ &amp; Navi Mumbai Centers
                  </p>
                </div>
              </div>

              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
                  <div
                    style={{
                      background: 'rgba(0, 166, 199, 0.1)',
                      padding: '10px',
                      borderRadius: '10px',
                      height: 'fit-content',
                    }}
                  >
                    <MapPin size={22} color="var(--secondary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>Physical Presence</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>
                      <strong style={{ color: 'var(--primary-dark)' }}>Pune HQ:</strong> 4th Floor, Dangat Patil Empire, Kudale Baug, Vadgaon Budruk, Pune &ndash; 411041
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                      <strong style={{ color: 'var(--primary-dark)' }}>Navi Mumbai:</strong> C-207, 2nd Floor, Tower 2, Above Vashi Railway Station, Vashi, Navi Mumbai &ndash; 400703
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
                  <div
                    style={{
                      background: 'rgba(247, 148, 29, 0.12)',
                      padding: '10px',
                      borderRadius: '10px',
                      height: 'fit-content',
                    }}
                  >
                    <Phone size={22} color="#d97706" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>Direct Line Verification</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+91 77580 88438</p>
                    <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>
                      ● Mon &ndash; Sat, 9:00 AM &ndash; 7:00 PM IST
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div
                    style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      padding: '10px',
                      borderRadius: '10px',
                      height: 'fit-content',
                    }}
                  >
                    <Mail size={22} color="#10b981" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>Official Channels</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                      <strong>Business Inquiries:</strong> Contact@caretrixconsulting.com
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '4px' }}>
                      <strong>HR &amp; Careers:</strong> hr@caretrixconsulting.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B Consultation Form Card */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <span className="eyebrow eyebrow-accent">Direct API Gateway</span>
              <h2 style={{ fontSize: '1.8rem', marginTop: '0.3rem', marginBottom: '0.4rem' }}>
                B2B Proposal Request
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                Submit your operational requirements. Stored directly in our SQL database for rapid assessment by our advisory partners.
              </p>

              {submitted ? (
                <div style={{ background: '#ecfdf5', padding: '2rem', borderRadius: '12px', textAlign: 'center', border: '1px solid #a7f3d0' }}>
                  <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ color: '#064e3b', marginBottom: '0.5rem' }}>Inquiry Registered in SQL DB!</h3>
                  <p style={{ color: '#047857', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                    Thank you. Your consultation ticket has been generated and dispatched to our solutions director.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-primary btn-sm">
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="contact_name"
                        value={formData.contact_name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="e.g. Rahul Deshmukh"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="e.g. CareGlobal Tech"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="work_email"
                        value={formData.work_email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="r.deshmukh@company.com"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                        Required Service Category *
                      </label>
                      <select
                        name="required_service"
                        value={formData.required_service}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="SAP S/4HANA & Enterprise ERP">SAP S/4HANA &amp; Enterprise ERP (FICO, MM, SD, BTP, BASIS)</option>
                        <option value="HRMS & Payroll Software">HRMS &amp; Payroll Software (vortexsofthrms)</option>
                        <option value="Healthcare BPO & RCM">Healthcare BPO &amp; RCM (Medical Coding, Billing, AR)</option>
                        <option value="Real Estate & Title Services">Real Estate &amp; Title (Lease Abstraction, CAM Audit)</option>
                        <option value="STM Publishing & Prepress">STM Publishing (ePUB3, XML, Typesetting, WCAG)</option>
                        <option value="AI & Data Annotation">AI &amp; Data Annotation (Agentic AI, LiDAR, Vision, NLP)</option>
                        <option value="Custom Software & Web Dev">Custom Software &amp; Web Apps (React, Node, Cloud)</option>
                        <option value="ERP & SAP Solutions">ERP &amp; SAP Systems &amp; AMS Support</option>
                        <option value="Marketing Automation">Marketing Automation (Lead Gen, CRM Sequences)</option>
                        <option value="Accounting & Financial BPO">Accounting &amp; Financial BPO (Bookkeeping, Payroll)</option>
                        <option value="Logistics & Supply Chain">Logistics &amp; Supply Chain (BOL, Waybill, Rate Audit)</option>
                        <option value="Technical Publications">Technical Publications &amp; S1000D / DITA XML</option>
                        <option value="Background Verification">Background Verification (BGV Compliance Screening)</option>
                        <option value="24/7 Global BPO Pods">24/7 Global BPO Pods (Customer Support, Helpdesk)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                        Estimated Team Scale *
                      </label>
                      <select
                        name="project_scale"
                        value={formData.project_scale}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="1-5 Resources">Small Team (1 - 5 Specialists)</option>
                        <option value="5-20 Resources">Medium Team (5 - 20 Resources)</option>
                        <option value="20-100 Resources">Large Scale (20 - 100 Resources)</option>
                        <option value="100+ Resources">Enterprise Scale (100+ Resources)</option>
                        <option value="Consultation Needed">Consultation Needed to Scope</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                      Project Scope &amp; Target Timelines
                    </label>
                    <textarea
                      name="project_details"
                      rows="4"
                      value={formData.project_details}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Describe your bottlenecks, team profile requirements, or compliance guidelines..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}
                  >
                    {loading ? (
                      'Inserting Into SQL Database...'
                    ) : (
                      <>
                        <Send size={18} /> Request Consultation Callback
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
