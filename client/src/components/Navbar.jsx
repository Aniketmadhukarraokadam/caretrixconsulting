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
  Layers,
  PhoneCall,
  Laptop,
  Users,
} from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [voiceDropdownOpen, setVoiceDropdownOpen] = useState(false);
  const [hubsDropdownOpen, setHubsDropdownOpen] = useState(false);
  
  // Mobile accordions
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileVoiceOpen, setMobileVoiceOpen] = useState(false);
  const [mobileHubsOpen, setMobileHubsOpen] = useState(false);

  const servicesRef = useRef(null);
  const voiceRef = useRef(null);
  const hubsRef = useRef(null);

  const closeAll = () => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setVoiceDropdownOpen(false);
    setHubsDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileVoiceOpen(false);
    setMobileHubsOpen(false);
  };

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
      if (voiceRef.current && !voiceRef.current.contains(e.target)) {
        setVoiceDropdownOpen(false);
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
              <strong>28 States &amp; 8 UTs Covered</strong> • Major Delivery Hubs: Pune • Mumbai • Bengaluru • Hyderabad • Delhi NCR • Chennai
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
              24/7/365 Global Operations Live
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
          height: '76px',
        }}
      >
        {/* Brand Logo */}
        <Link to="/" onClick={closeAll} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/logo.png"
            alt="Caretrix Consulting"
            style={{
              height: '44px',
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
            gap: '1.35rem',
          }}
          className="desktop-nav"
        >
          <NavLink
            to="/"
            end
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#1e293b',
              fontWeight: isActive ? 700 : 600,
              fontSize: '0.92rem',
              padding: '6px 2px',
            })}
          >
            Home
          </NavLink>

          {/* Mega Dropdown: Services & Solutions */}
          <div
            ref={servicesRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <NavLink
              to="/services"
              style={{
                color: servicesDropdownOpen ? '#0052cc' : '#1e293b',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 2px',
              }}
            >
              <span>Services &amp; Solutions</span>
              <span
                style={{
                  background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  color: '#1d4ed8',
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: '4px',
                }}
              >
                65+
              </span>
              <ChevronDown size={14} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </NavLink>

            {/* Mega Menu Flyout */}
            {servicesDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-180px',
                  width: '740px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15)',
                  zIndex: 2000,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.1rem',
                }}
              >
                {/* 1. Application Support Services */}
                <Link
                  to="/services"
                  onClick={closeAll}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: '#eff6ff',
                    border: '1px solid #dbeafe',
                    transition: 'all 0.2s',
                  }}
                >
                  <Laptop size={22} color="#1d4ed8" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Application Support Services
                      <span style={{ fontSize: '0.65rem', background: '#2563eb', color: '#fff', padding: '1px 6px', borderRadius: '4px' }}>AMS</span>
                    </strong>
                    <p style={{ color: '#475569', fontSize: '0.78rem', lineHeight: '1.5', marginTop: '2px' }}>
                      24/7/365 L1/L2/L3 support, 15-min P1 incident SLA, cloud observability &amp; legacy modernization.
                    </p>
                  </div>
                </Link>

                {/* 2. International Voice Process */}
                <Link
                  to="/services"
                  onClick={closeAll}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: '#f0fdf4',
                    border: '1px solid #dcfce7',
                    transition: 'all 0.2s',
                  }}
                >
                  <Headphones size={22} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      International Voice Process
                      <span style={{ fontSize: '0.65rem', background: '#059669', color: '#fff', padding: '1px 6px', borderRadius: '4px' }}>US / UK / AUS</span>
                    </strong>
                    <p style={{ color: '#475569', fontSize: '0.78rem', lineHeight: '1.5', marginTop: '2px' }}>
                      C2 English &amp; neutral accent pods, 24/7 inbound/outbound customer support &amp; 96%+ CSAT.
                    </p>
                  </div>
                </Link>

                {/* 3. Domestic Voice Process */}
                <Link
                  to="/services"
                  onClick={closeAll}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: '#fffbeb',
                    border: '1px solid #fef3c7',
                    transition: 'all 0.2s',
                  }}
                >
                  <PhoneCall size={22} color="#d97706" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ color: '#0f172a', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Domestic Voice Process
                      <span style={{ fontSize: '0.65rem', background: '#d97706', color: '#fff', padding: '1px 6px', borderRadius: '4px' }}>12+ Languages</span>
                    </strong>
                    <p style={{ color: '#475569', fontSize: '0.78rem', lineHeight: '1.5', marginTop: '2px' }}>
                      Pan-India multilingual voice support for BFSI, E-commerce, tele-sales &amp; &lt;15s answer speed.
                    </p>
                  </div>
                </Link>

                {/* 4. SAP S/4HANA & ERP Cloud */}
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
                    <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: '1.5', marginTop: '2px' }}>
                      Greenfield/Brownfield migration, Central Finance (cFin), BTP, Fiori &amp; BASIS AMS.
                    </p>
                  </div>
                </Link>

                {/* 5. Digital Marketing & 8D Motion */}
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
                      Performance Marketing &amp; 8D Motion
                    </strong>
                    <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: '1.5', marginTop: '2px' }}>
                      Multi-touch ROAS engines, Generative AEO/GEO optimization, and 3D commercial video.
                    </p>
                  </div>
                </Link>

                {/* 6. Healthcare Operations & RCM */}
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
                      Healthcare RCM &amp; Clinical BPO
                    </strong>
                    <p style={{ color: '#64748b', fontSize: '0.78rem', lineHeight: '1.5', marginTop: '2px' }}>
                      HIPAA-certified medical billing, ICD-10 coding, charge capture &amp; denial recovery.
                    </p>
                  </div>
                </Link>

                <div
                  style={{
                    gridColumn: 'span 2',
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '0.85rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.82rem',
                  }}
                >
                  <span style={{ color: '#64748b' }}>Explore HRMS, Real Estate Title, STM Publishing &amp; BGV:</span>
                  <Link to="/services" onClick={closeAll} style={{ color: '#0052cc', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    View All 65+ Services Directory <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Voice & BPO Hub Menu */}
          <div
            ref={voiceRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setVoiceDropdownOpen(true)}
            onMouseLeave={() => setVoiceDropdownOpen(false)}
          >
            <button
              onClick={() => setVoiceDropdownOpen(!voiceDropdownOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: voiceDropdownOpen ? '#0052cc' : '#1e293b',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: '6px 2px',
              }}
            >
              <Headphones size={15} color="#059669" />
              <span>Voice &amp; Support Pods</span>
              <ChevronDown size={14} style={{ transform: voiceDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {voiceDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-80px',
                  width: '380px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15)',
                  zIndex: 2000,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  24/7 Voice &amp; Customer Support Centers
                </div>

                <Link
                  to="/services"
                  onClick={closeAll}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '10px',
                    background: '#f0fdf4',
                    border: '1px solid #dcfce7',
                    display: 'block',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>International Voice Process</strong>
                    <span style={{ fontSize: '0.7rem', color: '#059669', fontWeight: 700 }}>US / UK / AUS</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.76rem', margin: '4px 0 0' }}>
                    C2 English specialists, tech support, customer care, and HIPAA intake.
                  </p>
                </Link>

                <Link
                  to="/services"
                  onClick={closeAll}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '10px',
                    background: '#fffbeb',
                    border: '1px solid #fef3c7',
                    display: 'block',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Domestic Voice Process</strong>
                    <span style={{ fontSize: '0.7rem', color: '#d97706', fontWeight: 700 }}>12+ Languages</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.76rem', margin: '4px 0 0' }}>
                    Hindi, Marathi, Tamil, Telugu, Kannada, Bengali &amp; regional pan-India support.
                  </p>
                </Link>

                <Link
                  to="/services"
                  onClick={closeAll}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '10px',
                    background: '#eff6ff',
                    border: '1px solid #dbeafe',
                    display: 'block',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Application Support (AMS)</strong>
                    <span style={{ fontSize: '0.7rem', color: '#1d4ed8', fontWeight: 700 }}>15-Min SLA</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.76rem', margin: '4px 0 0' }}>
                    L1, L2, L3 tier engineering support, bug triaging &amp; cloud observability.
                  </p>
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/industries"
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#1e293b',
              fontWeight: isActive ? 700 : 600,
              fontSize: '0.92rem',
              padding: '6px 2px',
            })}
          >
            Industries
          </NavLink>

          {/* Pan-India Delivery Hubs Dropdown */}
          <div
            ref={hubsRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setHubsDropdownOpen(true)}
            onMouseLeave={() => setHubsDropdownOpen(false)}
          >
            <button
              onClick={() => setHubsDropdownOpen(!hubsDropdownOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: hubsDropdownOpen ? '#0052cc' : '#1e293b',
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
                  <Link to="/global" onClick={closeAll} style={{ color: '#0052cc', fontSize: '0.82rem', fontWeight: 700 }}>
                    Explore Global Follow-The-Sun Facilities →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/case-studies"
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#1e293b',
              fontWeight: isActive ? 700 : 600,
              fontSize: '0.92rem',
              padding: '6px 2px',
            })}
          >
            Case Studies
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#1e293b',
              fontWeight: isActive ? 700 : 600,
              fontSize: '0.92rem',
              padding: '6px 2px',
            })}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#1e293b',
              fontWeight: isActive ? 700 : 600,
              fontSize: '0.92rem',
              padding: '6px 2px',
            })}
          >
            Contact
          </NavLink>
        </nav>

        {/* Right CTA Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="tel:+917758088438"
            className="btn btn-secondary"
            style={{
              padding: '8px 16px',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: '1px solid #cbd5e1',
            }}
          >
            <Phone size={14} color="#0052cc" />
            <span style={{ fontWeight: 700 }}>Call Directorate</span>
          </a>

          <button
            onClick={() => {
              closeAll();
              onOpenModal();
            }}
            className="btn btn-primary"
            style={{
              padding: '9px 20px',
              fontSize: '0.88rem',
              fontWeight: 700,
            }}
          >
            <Sparkles size={16} />
            <span>Initiate RFP</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              color: '#0f172a',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {isOpen && (
        <div
          style={{
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            padding: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          <NavLink to="/" onClick={closeAll} style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.05rem' }}>
            Home
          </NavLink>

          {/* Mobile Services Accordion */}
          <div>
            <div
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#0f172a',
                fontWeight: 700,
                fontSize: '1.05rem',
                cursor: 'pointer',
              }}
            >
              <span>Services (65+)</span>
              <ChevronDown size={18} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none' }} />
            </div>

            {mobileServicesOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.75rem', paddingLeft: '0.75rem', borderLeft: '2px solid #0052cc' }}>
                <Link to="/services" onClick={closeAll} style={{ color: '#1d4ed8', fontWeight: 600, fontSize: '0.9rem' }}>
                  ● Application Support Services (AMS)
                </Link>
                <Link to="/services" onClick={closeAll} style={{ color: '#059669', fontWeight: 600, fontSize: '0.9rem' }}>
                  ● International Voice Process (US/UK/AUS)
                </Link>
                <Link to="/services" onClick={closeAll} style={{ color: '#d97706', fontWeight: 600, fontSize: '0.9rem' }}>
                  ● Domestic Voice Process (12+ Languages)
                </Link>
                <Link to="/services" onClick={closeAll} style={{ color: '#334155', fontSize: '0.9rem' }}>
                  SAP S/4HANA &amp; ERP Cloud
                </Link>
                <Link to="/services" onClick={closeAll} style={{ color: '#334155', fontSize: '0.9rem' }}>
                  Digital Marketing &amp; 8D Motion
                </Link>
                <Link to="/services" onClick={closeAll} style={{ color: '#334155', fontSize: '0.9rem' }}>
                  Healthcare Operations &amp; RCM
                </Link>
                <Link to="/services" onClick={closeAll} style={{ color: '#0052cc', fontWeight: 700, fontSize: '0.88rem' }}>
                  View All 65+ Services →
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/industries" onClick={closeAll} style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.05rem' }}>
            Industries
          </NavLink>

          <NavLink to="/case-studies" onClick={closeAll} style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.05rem' }}>
            Case Studies
          </NavLink>

          <NavLink to="/global" onClick={closeAll} style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.05rem' }}>
            Global &amp; Pan-India Hubs
          </NavLink>

          <NavLink to="/about" onClick={closeAll} style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.05rem' }}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeAll} style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.05rem' }}>
            Contact
          </NavLink>

          <div style={{ paddingTop: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href="tel:+917758088438"
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Phone size={16} /> +91 77580 88438
            </a>

            <button
              onClick={() => {
                closeAll();
                onOpenModal();
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Sparkles size={16} /> Initiate Enterprise RFP
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
