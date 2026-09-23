import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building,
  Globe2,
  ShieldCheck,
  Award,
  UserCheck,
  Clock,
  Sparkles,
  ChevronUp,
  Briefcase,
  GraduationCap,
  ChevronRight,
  HeartPulse,
  X,
} from 'lucide-react';
import { useToast } from './Toast';

export default function Footer({ onOpenModal }) {
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        addToast('Subscribed to Caretrix executive updates!', 'success');
        setEmail('');
      } else {
        addToast(data.error || 'Thank you for subscribing!', 'success');
        setEmail('');
      }
    } catch {
      addToast('Thank you for subscribing to executive updates!', 'success');
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#080B1A',
        color: '#ffffff',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      {/* ── TOP OPERATIONAL STATUS TICKER ────────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(90deg, #0A0D1F 0%, #101538 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '11px 0',
          fontSize: '12.5px',
          color: 'rgba(255, 255, 255, 0.75)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                  display: 'inline-block',
                }}
              />
              <strong style={{ color: '#ffffff' }}>Global Operational Status:</strong> 100% Core Systems Online &amp; Synchronized
            </div>

            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', fontSize: '12px' }}>
              <span>Pune HQ: <strong style={{ color: '#5BA8D4' }}>IST Active (24/7)</strong></span>
              <span>Bengaluru: <strong style={{ color: '#5BA8D4' }}>Tech Hub Operational</strong></span>
              <span>USA Entity: <strong style={{ color: '#10b981' }}>EST/PST Overlap Active</strong></span>
              <span>Europe: <strong style={{ color: '#f59e0b' }}>GMT/CET Overlap</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN 4-COLUMN FOOTER ────────────────────────────────────── */}
      <div className="container" style={{ padding: '70px 20px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '50px',
          }}
        >
          {/* Col 1: Brand & Certifications */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '18px' }}>
              <img
                src="/logo.png"
                alt="Caretrix Consulting"
                style={{
                  height: '46px',
                  width: 'auto',
                  background: '#ffffff',
                  padding: '5px 12px',
                  borderRadius: '10px',
                }}
              />
            </Link>

            <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.75, marginBottom: '20px' }}>
              <strong style={{ color: '#ffffff' }}>Caretrix Consulting Private Limited</strong> is an ISO 27001:2013 certified and HIPAA-compliant global IT and BPO outsourcing partner headquartered in Pune with an advanced technology delivery center in Bengaluru and a corporate presence in Wyoming, USA. Empowering 150+ international clients across AI Software, Healthcare RCM, Publishing, Data Annotation, and Enterprise BPO operations.
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '22px' }}>
              <span className="footer-cert-pill">
                <ShieldCheck size={13} color="#10b981" /> ISO 27001:2013
              </span>
              <span className="footer-cert-pill">
                <HeartPulse size={13} color="#5BA8D4" /> HIPAA Compliant
              </span>
              <span className="footer-cert-pill">
                <Award size={13} color="#f59e0b" /> Startup India
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://www.linkedin.com/company/caretrixconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h6 className="footer-col-title">Quick Links</h6>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">All Services</Link></li>
              <li><Link to="/industries" className="footer-link">Industries</Link></li>
              <li><Link to="/projects" className="footer-link">Projects &amp; Case Studies</Link></li>
              <li><Link to="/careers" className="footer-link">Careers &amp; Hiring</Link></li>
              <li><Link to="/contact" className="footer-link">Contact &amp; Support</Link></li>
              <li><a href="#faq" className="footer-link">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div>
            <h6 className="footer-col-title">Our Services</h6>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/services?cat=hrms" className="footer-link" style={{ color: '#ff8585', fontWeight: 700 }}>
                  <Sparkles size={12} color="#ff8585" style={{ display: 'inline', marginRight: '6px' }} />
                  HR &amp; Payroll Software (CaretrixHRMS)
                </Link>
              </li>
              <li><Link to="/services?cat=customsoftware" className="footer-link">Software &amp; Cloud Engineering</Link></li>
              <li><Link to="/services?cat=publishing" className="footer-link">STM Publishing &amp; Prepress</Link></li>
              <li><Link to="/services?cat=healthcare" className="footer-link">Healthcare BPO &amp; RCM Services</Link></li>
              <li><Link to="/services?cat=realestate" className="footer-link">Real Estate &amp; CAM Audit</Link></li>
              <li><Link to="/services?cat=data_annotation" className="footer-link">AI Data Annotation &amp; CV</Link></li>
              <li><Link to="/services?cat=accounting" className="footer-link">Accounting &amp; Bookkeeping</Link></li>
              <li><Link to="/services?cat=staffing" className="footer-link">Manpower &amp; Staff Augmentation</Link></li>
              <li><Link to="/services?cat=digitalmarketing" className="footer-link">Digital Marketing &amp; SEO</Link></li>
              <li><Link to="/services?cat=realestate" className="footer-link">Title &amp; Settlement Services</Link></li>
            </ul>
          </div>

          {/* Col 4: Headquarters & Multi-Offices */}
          <div>
            <h6 className="footer-col-title">Headquarters &amp; Offices</h6>
            
            {/* Highlighted Pune HQ Card */}
            <div
              style={{
                background: 'rgba(204, 34, 40, 0.12)',
                padding: '12px 14px',
                borderRadius: '12px',
                border: '1px solid rgba(204, 34, 40, 0.3)',
                marginBottom: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span
                  style={{
                    background: '#CC2228',
                    color: '#fff',
                    fontSize: '9.5px',
                    fontWeight: 800,
                    padding: '2px 7px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  Head Office
                </span>
                <strong style={{ color: '#ffffff', fontSize: '13.5px' }}>Pune Headquarters</strong>
              </div>
              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)', margin: 0, lineHeight: 1.5 }}>
                502, 4th Floor, Dangat Patil Empire, Kudale Baug, Vadgaon Budruk, Pune, Maharashtra 411041
              </p>
            </div>

            {/* Bengaluru Tech Branch */}
            <div style={{ marginBottom: '12px', fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                <MapPin size={12} color="#5BA8D4" style={{ display: 'inline', marginRight: '5px' }} />
                Bengaluru Tech Delivery Hub
              </div>
              No.125, Ranganath Complex, Madiwala, HSR Layout, Bengaluru, Karnataka 560068
            </div>

            {/* USA Corporate Presence */}
            <div style={{ marginBottom: '16px', fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                <Globe2 size={12} color="#5BA8D4" style={{ display: 'inline', marginRight: '5px' }} />
                USA Corporate Entity
              </div>
              30 N Gould St Ste 100, Sheridan, WY 82801, USA
            </div>

            {/* Direct Contact Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', marginBottom: '18px' }}>
              <a href="mailto:support@caretrixconsulting.com" style={{ color: '#5BA8D4', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={13} color="#CC2228" /> support@caretrixconsulting.com
              </a>
              <a href="tel:+918308906690" style={{ color: '#ffffff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={13} color="#CC2228" /> +91-8308906690
              </a>
              <div style={{ color: '#10b981', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={12} /> 24/7 Digital Support &bull; Mon–Sat 9AM–6PM IST
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                Stay Updated With Industry Insights
              </div>
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '6px' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    flex: 1,
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: '#CC2228',
                    color: '#ffffff',
                    border: 'none',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {loading ? '...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER BOTTOM BAR ────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '20px 0',
          fontSize: '13px',
          color: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              Copyright &copy; 2026 Caretrix Consulting Private Limited. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#faq" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>FAQ</a>
              <a href="#contact" onClick={onOpenModal} style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Privacy Policy</a>
              <a href="#contact" onClick={onOpenModal} style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FLOATING WHATSAPP MULTI-INTENT MODAL ────────────────────────────────────── */}
      {whatsappModalOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '92px',
            right: '24px',
            width: '350px',
            maxWidth: 'calc(100vw - 36px)',
            background: '#ffffff',
            borderRadius: '18px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.06)',
            zIndex: 99999,
            overflow: 'hidden',
            animation: 'dropFade 0.25s ease',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #075E54 0%, #128C7E 100%)',
              color: '#ffffff',
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}
              >
                💬
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14.5px' }}>
                  Caretrix Helpdesk
                </div>
                <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#25d366', boxShadow: '0 0 6px #25d366' }} />
                  Online &bull; Replies in &lt;15 mins
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setWhatsappModalOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.8)',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '18px 16px', background: '#f8fafc' }}>
            <div style={{ fontSize: '12.5px', color: '#64748b', fontWeight: 600, marginBottom: '12px' }}>
              Please select your inquiry type:
            </div>

            {/* Option 1: Business */}
            <a
              href="https://wa.me/918308906690?text=Hello%20Caretrix%20Consulting%20Sales%20Team%2C%20I%20am%20looking%20for%20business%20services%20(IT%20%2F%20BPO%20%2F%20AI).%20I%20would%20like%20to%20discuss%20our%20project%20requirements%20and%20request%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setWhatsappModalOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '14px',
                padding: '13px 14px',
                marginBottom: '10px',
                transition: 'all 0.2s',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(28, 34, 128, 0.08)',
                  color: '#1C2280',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Briefcase size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ display: 'block', fontSize: '13.5px', color: '#0F172A', fontWeight: 700 }}>
                  Business &amp; Services Inquiry
                </strong>
                <span style={{ display: 'block', fontSize: '11.5px', color: '#64748b', marginTop: '2px' }}>
                  I need IT, BPO, AI, or Software services for my organization
                </span>
              </div>
              <ChevronRight size={14} color="#94a3b8" />
            </a>

            {/* Option 2: Careers */}
            <a
              href="https://wa.me/918308906690?text=Hello%20Caretrix%20Consulting%20HR%20Team%2C%20I%20am%20a%20job%20candidate%20inquiring%20about%20career%20opportunities%20and%20openings.%20I%20would%20like%20to%20share%20my%20profile%20for%20review."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setWhatsappModalOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '14px',
                padding: '13px 14px',
                transition: 'all 0.2s',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(204, 34, 40, 0.08)',
                  color: '#CC2228',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <GraduationCap size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ display: 'block', fontSize: '13.5px', color: '#0F172A', fontWeight: 700 }}>
                  Job Careers &amp; HR Hiring
                </strong>
                <span style={{ display: 'block', fontSize: '11.5px', color: '#64748b', marginTop: '2px' }}>
                  I am a candidate looking for open roles &amp; submitting CV
                </span>
              </div>
              <ChevronRight size={14} color="#94a3b8" />
            </a>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <button
        type="button"
        onClick={() => setWhatsappModalOpen(!whatsappModalOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: '#25d366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          border: 'none',
          cursor: 'pointer',
          zIndex: 99998,
          fontSize: '26px',
          transition: 'transform 0.2s',
        }}
        aria-label="Chat on WhatsApp"
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        💬
      </button>

      {/* Floating Scroll To Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '88px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: '#1C2280',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(28, 34, 128, 0.3)',
          border: 'none',
          cursor: 'pointer',
          zIndex: 99998,
          transition: 'transform 0.2s',
        }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>

      {/* Footer Scoped Styles */}
      <style>{`
        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 14.5px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 8px;
        }
        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2.5px;
          background: #CC2228;
          border-radius: 2px;
        }
        .footer-link {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.75);
          display: inline-block;
          transition: all 0.2s ease;
        }
        .footer-link:hover {
          color: #5BA8D4;
          transform: translateX(4px);
        }
        .footer-cert-pill {
          background: rgba(255, 255, 255, 0.07);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 13px;
          transition: all 0.2s ease;
        }
        .footer-social-btn:hover {
          background: #CC2228;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
