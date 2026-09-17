import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { useToast } from './Toast';

export default function ConsultationModal({ isOpen, onClose, defaultService = '' }) {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    contact_name: '',
    company_name: '',
    work_email: '',
    phone_number: '',
    required_service: defaultService || 'IT Services',
    project_scale: '5-20 Resources',
    project_details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        addToast('Consultation request saved to Caretrix SQL database!', 'success');
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          setFormData({
            contact_name: '',
            company_name: '',
            work_email: '',
            phone_number: '',
            required_service: defaultService || 'IT Services',
            project_scale: '5-20 Resources',
            project_details: '',
          });
        }, 2000);
      } else {
        addToast(data.error || 'Failed to submit proposal', 'error');
      }
    } catch (err) {
      console.error(err);
      addToast('Network error contacting backend SQL server', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Proposal Request Received!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '400px', margin: '0 auto' }}>
              Your requirements have been logged into our enterprise SQL database. Our solutions director will reach out within 1 business day.
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="eyebrow eyebrow-teal">Enterprise Inquiries</span>
              <h2 style={{ fontSize: '1.85rem', marginTop: '0.3rem' }}>Request B2B Consultation</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Discuss your business operations, staffing scale, or digital delivery scope with our executive team.
              </p>
            </div>

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
                    placeholder="e.g. Anand Sharma"
                    required
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="e.g. Apex Health Corp"
                    required
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    name="work_email"
                    value={formData.work_email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Required Service
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
                    Estimated Team Scale
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
                  Project Scope & Operational Objectives
                </label>
                <textarea
                  name="project_details"
                  rows="3"
                  value={formData.project_details}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Outline key targets, target launch dates, or service SLA expectations..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Recording in SQL Database...'
                ) : (
                  <>
                    <Send size={18} /> Submit Proposal to Caretrix
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
