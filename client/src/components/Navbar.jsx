import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Menu,
  X,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Globe2,
  Server,
  BarChart3,
  HeartPulse,
  Cpu,
  FileCheck2,
  Headphones,
  CheckCircle2,
} from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [hubsDropdownOpen, setHubsDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileHubsOpen, setMobileHubsOpen] = useState(false);

  const servicesRef = useRef(null);
  const hubsRef = useRef(null);

  const closeAll = () => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setHubsDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileHubsOpen(false);
  };

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
      if (hubsRef.current && !hubsRef.current.contains(e.target)) {
        setHubsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const panIndiaHubs = [
    { city: 'Pune (Global HQ)', desc: 'Dangat Patil Empire, Vadgaon Budruk. SAP CoE & Cloud Lab.', state: 'Maharashtra' },
    { city: 'Navi Mumbai Hub', desc: 'Vashi Station Tower 2. Healthcare RCM & 24/7 BPO Ops.', state: 'Maharashtra' },
    { city: 'Bengaluru Tech Hub', desc: 'Outer Ring Road tech corridor. ABAP on HANA & Cloud BTP.', state: 'Karnataka' },
    { city: 'Hyderabad AI Lab', desc: 'Hitec City. Agentic AI, Computer Vision & Data Annotation.', state: 'Telangana' },
    { city: 'Delhi NCR Advisory', desc: 'Gurugram Cyber City. Corporate Strategy & Pan-India BGV.', state: 'NCR' },
    { city: 'Chennai Delivery', desc: 'OMR corridor. STM Publishing & Prepress XML automation.', state: 'Tamil Nadu' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        width: '100%',
      }}
    >
      {/* 1. Executive Top Bar: Pan-India Network & Direct Helplines */}
      <div
        style={{
          background: '#0a192f',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.78rem',
          padding: '6px 0',
          color: '#cbd5e1',
        }}
      >
        <div
          className="container-fluid"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          {/* Pan-India Presence Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '2px 8px',
                borderRadius: '12px',
                background: 'rgba(2, 132, 199, 0.25)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38bdf8',
                fontWeight: 700,
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              <Globe2 size={12} /> Pan-India Grid
            </span>
            <span style={{ color: '#cbd5e1' }}>
              <strong>28 States &amp; 8 UTs Covered</strong> • Major Tech Centers: Pune • Mumbai • Bengaluru • Hyderabad • Delhi NCR • Chennai
            </span>
          </div>

          {/* Quick Helplines & Regional Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href="tel:+917758088438"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#38bdf8', fontWeight: 600 }}
            >
              <Phone size={13} /> +91 77580 88438
            </a>
            <a
              href="mailto:Contact@caretrixconsulting.com"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#cbd5e1' }}
            >
              <Mail size={13} /> Contact@caretrixconsulting.com
            </a>
            <span style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 6px #10b981' }} />
              24/7 Operations Online
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Executive Navigation Bar */}
      <div
        className="container-fluid"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '74px',
        }}
      >
        {/* Brand Logo */}
        <Link to="/" onClick={closeAll} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/logo.png"
            alt="Caretrix Consulting"
            style={{
              height: '42px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.35rem',
                letterSpacing: '-0.02em',
                color: '#123d6b',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              CARETRIX
            </span>
            <span
              style={{
                fontSize: '0.66rem',
                fontWeight: 700,
                letterSpacing: '1.8px',
                color: '#64748b',
                textTransform: 'uppercase',
                display: 'block',
              }}
            >
              CONSULTING PVT. LTD.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.4rem',
          }}
          className="desktop-nav"
        >
          <NavLink
            to="/"
            end
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#334155',
              fontWeight: isActive ? 700 : 500,
              fontSize: '0.92rem',
              padding: '6px 2px',
            })}
          >
            Home
          </NavLink>

          {/* Services Mega Dropdown Trigger */}
          <div
            ref={servicesRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <NavLink
              to="/services"
              style={{
                color: servicesDropdownOpen ? '#0052cc' : '#334155',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 2px',
              }}
            >
              <span>Services (65+)</span>
              <span
                style={{
                  background: 'linear-gradient(135deg, #0052cc 0%, #2563eb 100%)',
                  color: '#ffffff',
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: '4px',
                }}
              >
                SAP &amp; AI
              </span>
              <ChevronDown size={14} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </NavLink>

            {/* Mega Menu Flyout */}
            {servicesDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-150px',
                  width: '680px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15)',
                  zIndex: 2000,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.25rem',
                }}
              >
                <Link
                  to="/services"
                  onClick={closeAll}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.2s',
                  }}
                >
                  <Server size={22} color="#0052cc" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.92rem', display: 'block' }}>
                      SAP S/4HANA &amp; ERP Cloud
                    </strong>
                    <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: '1.5' }}>
                      Greenfield/Brownfield migration, Central Finance, BTP &amp; 24/7 BASIS AMS.
                    </p>
                  </div>
                </Link>

                <Link
                  to="/services"
                  onClick={closeAll}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.2s',
                  }}
                >
                  <BarChart3 size={22} color="#0284c7" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.92rem', display: 'block' }}>
                      Digital Marketing &amp; 8D Motion
                    </strong>
                    <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: '1.5' }}>
                      Performance ROAS engines, GEO/AEO AI SEO, and 3D commercial video.
                    </p>
                  </div>
                </Link>

                <Link
                  to="/services"
                  onClick={closeAll}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.2s',
                  }}
                >
                  <HeartPulse size={22} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.92rem', display: 'block' }}>
                      Healthcare Operations &amp; RCM
                    </strong>
                    <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: '1.5' }}>
                      HIPAA-certified medical billing, ICD-10 coding, and denial recovery.
                    </p>
                  </div>
                </Link>

                <Link
                  to="/services"
                  onClick={closeAll}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.2s',
                  }}
                >
                  <FileCheck2 size={22} color="#d97706" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.92rem', display: 'block' }}>
                      Pan-India Verification (BGV)
                    </strong>
                    <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: '1.5' }}>
                      Court record queries, university checks, and physical geo-tracking across 28 states.
                    </p>
                  </div>
                </Link>

                <div
                  style={{
                    gridColumn: 'span 2',
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '0.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.82rem',
                  }}
                >
                  <span style={{ color: '#64748b' }}>Explore full catalog including HRMS, Real Estate, and STM Publishing:</span>
                  <Link to="/services" onClick={closeAll} style={{ color: '#0052cc', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    View All 65+ Services <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Hubs Dropdown */}
          <div
            ref={hubsRef}
            style={{ position: 'relative' }}
          >
            <button
              onClick={() => setHubsDropdownOpen(!hubsDropdownOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: hubsDropdownOpen ? '#0052cc' : '#334155',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: '6px 2px',
              }}
            >
              <MapPin size={14} color="#0052cc" />
              <span>Pan-India Hubs</span>
              <ChevronDown size={14} style={{ transform: hubsDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {hubsDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-100px',
                  width: '420px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15)',
                  zIndex: 2000,
                }}
              >
                <div style={{ fontSize: '0.78rem', color: '#0052cc', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.5px' }}>
                  Pan-India Delivery Centers &amp; CoEs
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {panIndiaHubs.map((hub, idx) => (
                    <div key={idx} style={{ borderBottom: idx !== panIndiaHubs.length - 1 ? '1px solid #f1f5f9' : 'none', paddingBottom: '6px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.86rem' }}>{hub.city}</strong>
                        <span style={{ fontSize: '0.72rem', color: '#0284c7', background: '#e0f2fe', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                          {hub.state}
                        </span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', marginTop: '2px' }}>{hub.desc}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <Link to="/global" onClick={closeAll} style={{ color: '#0052cc', fontSize: '0.82rem', fontWeight: 600 }}>
                    Explore Global Follow-The-Sun Facilities →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/industries"
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#334155',
              fontWeight: isActive ? 700 : 500,
              fontSize: '0.92rem',
              padding: '6px 2px',
            })}
          >
            Industries
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#334155',
              fontWeight: isActive ? 700 : 500,
              fontSize: '0.92rem',
              padding: '6px 2px',
            })}
          >
            Projects
          </NavLink>

          <NavLink
            to="/case-studies"
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#334155',
              fontWeight: isActive ? 700 : 500,
              fontSize: '0.92rem',
              padding: '6px 2px',
            })}
          >
            Case Studies
          </NavLink>

          <NavLink
            to="/careers"
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#334155',
              fontWeight: isActive ? 700 : 500,
              fontSize: '0.92rem',
              padding: '6px 2px',
            })}
          >
            Careers
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#334155',
              fontWeight: isActive ? 700 : 500,
              fontSize: '0.92rem',
              padding: '6px 2px',
            })}
          >
            Contact
          </NavLink>

          <NavLink
            to="/admin"
            onClick={closeAll}
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: '8px',
              background: isActive ? '#e0f2fe' : '#f1f5f9',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              fontWeight: 600,
              fontSize: '0.82rem',
            })}
          >
            <ShieldCheck size={14} color="#0052cc" /> Admin
          </NavLink>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => {
              closeAll();
              onOpenModal();
            }}
            className="btn btn-primary"
            style={{
              padding: '0.65rem 1.4rem',
              fontSize: '0.9rem',
            }}
          >
            <Sparkles size={16} />
            <span>Launch RFP</span>
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#0f172a',
              display: 'none',
              padding: '6px',
            }}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            padding: '1.5rem',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/" onClick={closeAll} style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 600 }}>Home</Link>
            <Link to="/about" onClick={closeAll} style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 600 }}>About Directorate</Link>
            <Link to="/services" onClick={closeAll} style={{ color: '#0052cc', fontSize: '1rem', fontWeight: 700 }}>65+ Services Directory</Link>
            <Link to="/industries" onClick={closeAll} style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 600 }}>Industries</Link>
            <Link to="/projects" onClick={closeAll} style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 600 }}>Projects</Link>
            <Link to="/global" onClick={closeAll} style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 600 }}>Global Delivery</Link>
            <Link to="/case-studies" onClick={closeAll} style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 600 }}>Case Studies</Link>
            <Link to="/careers" onClick={closeAll} style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 600 }}>Careers</Link>
            <Link to="/contact" onClick={closeAll} style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 600 }}>Contact Desk</Link>
            <Link to="/admin" onClick={closeAll} style={{ color: '#0f172a', fontSize: '1rem', fontWeight: 600 }}>Admin Portal</Link>

            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="tel:+917758088438" style={{ color: '#0052cc', fontWeight: 600, fontSize: '0.9rem' }}>
                📞 Call: +91 77580 88438
              </a>
              <button
                onClick={() => {
                  closeAll();
                  onOpenModal();
                }}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <Sparkles size={16} /> Request Custom Proposal
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
