import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, Sparkles, Globe2, ShieldCheck } from 'lucide-react';
import { useToast } from './Toast';

export default function Footer({ onOpenModal }) {
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

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
        addToast('Subscribed to Caretrix executive intelligence updates!', 'success');
        setEmail('');
      } else {
        addToast(data.error || 'Subscription failed', 'error');
      }
    } catch {
      addToast('Error connecting to backend database', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      style={{
        background: '#0a192f',
        color: '#ffffff',
        borderTop: '1px solid #1e293b',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      {/* Top Full-Width Operational World Ticker */}
      <div
        style={{
          background: '#0f172a',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '0.85rem 0',
        }}
      >
        <div
          className="container-fluid"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#94a3b8',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            <strong style={{ color: '#ffffff' }}>Global Operational Status:</strong> 100% Core Systems Online &amp; Synchronized
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>Pune HQ: <strong style={{ color: '#60a5fa' }}>IST Active (24/7)</strong></span>
            <span>Navi Mumbai: <strong style={{ color: '#60a5fa' }}>IST Operations</strong></span>
            <span>North America: <strong style={{ color: '#10b981' }}>EST/PST Overlap</strong></span>
            <span>Europe: <strong style={{ color: '#f59e0b' }}>GMT/CET Synchronized</strong></span>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ padding: '4.5rem 2.5rem 2.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Column 1: Brand & Philosophy */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <img
                src="/logo.png"
                alt="Caretrix Consulting"
                style={{
                  height: '46px',
                  width: 'auto',
                  background: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                }}
              />
            </Link>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              A tier-1 business consulting, digital marketing, and enterprise solutions organization delivering Fortune-500 workforce, SAP ERP cloud, and 24/7 global execution.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://www.linkedin.com/company/caretrix-consulting/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(59, 130, 246, 0.12)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  color: '#60a5fa',
                }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#94a3b8',
                }}
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#94a3b8',
                }}
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '1.25rem', letterSpacing: '0.5px' }}>
              Navigation Grid
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: '#94a3b8' }}>
              <li><Link to="/" style={{ color: '#cbd5e1' }}>Executive Home</Link></li>
              <li><Link to="/about" style={{ color: '#cbd5e1' }}>About Caretrix Legacy</Link></li>
              <li><Link to="/services" style={{ color: '#cbd5e1' }}>65+ Services Directory</Link></li>
              <li><Link to="/industries" style={{ color: '#cbd5e1' }}>Industries &amp; Verticals</Link></li>
              <li><Link to="/projects" style={{ color: '#cbd5e1' }}>Featured Deployments</Link></li>
              <li><Link to="/global" style={{ color: '#cbd5e1' }}>Global Delivery Hubs</Link></li>
              <li><Link to="/case-studies" style={{ color: '#cbd5e1' }}>Enterprise Case Studies</Link></li>
              <li><Link to="/careers" style={{ color: '#cbd5e1' }}>Careers &amp; Open Positions</Link></li>
              <li><Link to="/contact" style={{ color: '#cbd5e1' }}>Executive Contact Desk</Link></li>
              <li>
                <Link to="/admin" style={{ color: '#60a5fa', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={14} /> SQL Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '1.25rem', letterSpacing: '0.5px' }}>
              Enterprise Solutions
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: '#94a3b8' }}>
              <li><Link to="/services" style={{ color: '#60a5fa' }}>● SAP S/4HANA &amp; BTP Cloud</Link></li>
              <li><Link to="/services" style={{ color: '#cbd5e1' }}>Digital Marketing &amp; 8D Motion</Link></li>
              <li><Link to="/services" style={{ color: '#cbd5e1' }}>HRMS &amp; AI Software (vortexsofthrms)</Link></li>
              <li><Link to="/services" style={{ color: '#cbd5e1' }}>Healthcare BPO &amp; Revenue Cycle (RCM)</Link></li>
              <li><Link to="/services" style={{ color: '#cbd5e1' }}>Real Estate, Title &amp; Lease BPO</Link></li>
              <li><Link to="/services" style={{ color: '#cbd5e1' }}>STM Publishing &amp; Prepress XML</Link></li>
              <li><Link to="/services" style={{ color: '#cbd5e1' }}>AI Data Annotation &amp; Computer Vision</Link></li>
              <li><Link to="/services" style={{ color: '#cbd5e1' }}>Custom Microservices &amp; Cloud</Link></li>
              <li><Link to="/services" style={{ color: '#cbd5e1' }}>Institutional Background Verification</Link></li>
              <li><Link to="/services" style={{ color: '#cbd5e1' }}>24/7 Global Omnichannel Pods</Link></li>
            </ul>
          </div>

          {/* Column 4: Physical Centers & Executive Newsletter */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '1.25rem', letterSpacing: '0.5px' }}>
              Global Headquarters
            </h4>
            <div style={{ fontSize: '0.86rem', color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.65' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <MapPin size={16} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff' }}>HQ Pune:</strong> 4th Floor, Dangat Patil Empire, Kudale Baug, Vadgaon Budruk, 411041
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <MapPin size={16} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff' }}>Navi Mumbai:</strong> C-207, 2nd Floor, Tower 2, Above Vashi Railway Station, 400703
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Phone size={16} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>+91 77580 88438</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Mail size={16} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Contact@caretrixconsulting.com</span>
              </div>
            </div>

            <form onSubmit={handleSubscribe}>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  placeholder="Executive email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 2.8rem 0.75rem 0.9rem',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                  }}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    position: 'absolute',
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: '#2563eb',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 10px',
                    cursor: 'pointer',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.84rem',
            color: '#64748b',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Caretrix Consulting Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>ISO 9001:2015 Quality Certified</span>
            <span>ISO 27001 Information Security</span>
            <span>HIPAA &amp; SOC2 Compliant</span>
            <span>Skill India &amp; NAPS Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
