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
  Briefcase,
  Building2,
  Clock,
  Compass,
  Code2,
  Bot,
} from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'consulting' | 'services' | 'hubs' | 'company' | null
  
  // Mobile accordion states
  const [mobileConsultingOpen, setMobileConsultingOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileHubsOpen, setMobileHubsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const timeoutRef = useRef(null);
  const navContainerRef = useRef(null);

  const handleMouseEnter = (dropdownName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const closeAll = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(null);
    setIsMobileOpen(false);
    setMobileConsultingOpen(false);
    setMobileServicesOpen(false);
    setMobileHubsOpen(false);
    setMobileCompanyOpen(false);
  };

  // Close dropdown on ESC or outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeAll();
    };
    const handleClickOutside = (e) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const panIndiaHubs = [
    { city: 'Pune (Global HQ)', desc: 'Dangat Patil Empire, Vadgaon Budruk. Cloud & Enterprise Software CoE.', state: 'Maharashtra', tag: 'Global HQ' },
    { city: 'Navi Mumbai Hub', desc: 'Vashi Station Tower 2. Healthcare RCM & 24/7 BPO Ops.', state: 'Maharashtra', tag: 'BPO Ops' },
    { city: 'Bengaluru Tech Hub', desc: 'Outer Ring Road tech corridor. Cloud Microservices & DevOps CoE.', state: 'Karnataka', tag: 'Cloud CoE' },
    { city: 'Hyderabad AI Lab', desc: 'Hitec City. Agentic AI, Computer Vision & Data Annotation.', state: 'Telangana', tag: 'AI Hub' },
    { city: 'Delhi NCR Advisory', desc: 'Gurugram Cyber City. Corporate Strategy & Pan-India BGV.', state: 'NCR', tag: 'Advisory' },
    { city: 'Chennai Delivery', desc: 'OMR corridor. STM Publishing & Prepress XML automation.', state: 'Tamil Nadu', tag: 'Delivery' },
  ];

  return (
    <header
      ref={navContainerRef}
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
      {/* 1. Executive Top Operational Bar */}
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
          {/* Mega Hub Badge & Pan-India Network */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '2px 9px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.3) 0%, rgba(37, 99, 235, 0.3) 100%)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38bdf8',
                fontWeight: 700,
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              <Sparkles size={11} /> Enterprise Mega Hub
            </span>
            <span style={{ color: '#e2e8f0', fontSize: '0.78rem' }}>
              <strong>Strategic Consulting</strong> &amp; <strong>24/7 Global Managed Services</strong> across 28 Indian States &amp; 8 UTs
            </span>
          </div>

          {/* Quick Contact & Live Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem', flexWrap: 'wrap' }}>
            <a
              href="tel:+917758088438"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#38bdf8', fontWeight: 600 }}
            >
              <Phone size={12} /> +91 77580 88438
            </a>
            <a
              href="mailto:Contact@caretrixconsulting.com"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#cbd5e1' }}
            >
              <Mail size={12} /> Contact@caretrixconsulting.com
            </a>
            <span style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 6px #10b981' }} />
              24/7 Operations Live
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Mega Hub Navigation Bar */}
      <div
        className="container-fluid"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '74px',
        }}
      >
        {/* Brand Logo & Mega Hub Identity */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.3rem',
                  letterSpacing: '-0.02em',
                  color: '#123d6b',
                  lineHeight: 1.1,
                }}
              >
                CARETRIX
              </span>
              <span
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  background: '#0052cc',
                  color: '#ffffff',
                  padding: '1px 6px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Mega Hub
              </span>
            </div>
            <span
              style={{
                fontSize: '0.66rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: '#64748b',
                textTransform: 'uppercase',
                display: 'block',
                marginTop: '1px',
              }}
            >
              Consulting &amp; Managed Services
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          className="desktop-nav"
        >
          {/* Home */}
          <NavLink
            to="/"
            end
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#1e293b',
              fontWeight: isActive ? 700 : 600,
              fontSize: '0.92rem',
              padding: '8px 2px',
            })}
          >
            Home
          </NavLink>

          {/* 1. CONSULTING HUB DROPDOWN */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => handleMouseEnter('consulting')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'consulting' ? null : 'consulting')}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'consulting' ? '#0052cc' : '#1e293b',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: '8px 4px',
              }}
            >
              <Briefcase size={16} color="#0052cc" />
              <span>Consulting Hub</span>
              <ChevronDown
                size={14}
                style={{
                  transform: activeDropdown === 'consulting' ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
            </button>

            {/* Dropdown Card */}
            {activeDropdown === 'consulting' && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-120px',
                  width: '680px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15)',
                  zIndex: 2000,
                }}
              >
                {/* Header inside dropdown */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f1f5f9' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#0052cc', letterSpacing: '0.6px' }}>
                      Pillar 1 • Strategic Advisory &amp; Enterprise Architecture
                    </span>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: '2px 0 0' }}>
                      Enterprise Consulting Division
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.75rem', background: '#eff6ff', color: '#1d4ed8', padding: '3px 10px', borderRadius: '20px', fontWeight: 700 }}>
                    Strategy &amp; Cloud CoE
                  </span>
                </div>

                {/* Grid of Universal Consulting Services */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.9rem' }}>
                  {/* 1. Cloud Architecture & DevOps */}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Server size={20} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Cloud Architecture &amp; DevOps</strong>
                        <span style={{ fontSize: '0.65rem', background: '#0284c7', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>Cloud</span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', lineHeight: '1.4', margin: '3px 0 0' }}>
                        AWS, Azure &amp; GCP landing zones, Kubernetes (EKS/AKS), Terraform IaC, and GitOps CI/CD pipelines.
                      </p>
                    </div>
                  </Link>

                  {/* 2. Custom Software Engineering */}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Code2 size={20} color="#8b5cf6" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Custom Enterprise Software</strong>
                        <span style={{ fontSize: '0.65rem', background: '#8b5cf6', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>Full-Stack</span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', lineHeight: '1.4', margin: '3px 0 0' }}>
                        React 19, Next.js, Node.js, Python, Java Spring Boot, scalable microservices, and mobile platforms.
                      </p>
                    </div>
                  </Link>

                  {/* 3. Enterprise ERP & CRM Core */}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Layers size={20} color="#0052cc" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Enterprise ERP &amp; CRM</strong>
                        <span style={{ fontSize: '0.65rem', background: '#0052cc', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>Enterprise</span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', lineHeight: '1.4', margin: '3px 0 0' }}>
                        SAP S/4HANA (cFin/BTP), Salesforce CRM, Microsoft Dynamics 365, and Oracle Cloud modernizations.
                      </p>
                    </div>
                  </Link>

                  {/* 4. AI & Hyper-Automation */}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Bot size={20} color="#ec4899" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>AI &amp; Hyper-Automation</strong>
                        <span style={{ fontSize: '0.65rem', background: '#ec4899', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>AI / LLMs</span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', lineHeight: '1.4', margin: '3px 0 0' }}>
                        Private enterprise LLMs, RAG knowledge systems, autonomous agentic workflows, and RPA bots.
                      </p>
                    </div>
                  </Link>

                  {/* 5. Cyber Security & IT Governance */}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s',
                    }}
                  >
                    <ShieldCheck size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Cyber Security &amp; SOC</strong>
                        <span style={{ fontSize: '0.65rem', background: '#10b981', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>Security</span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', lineHeight: '1.4', margin: '3px 0 0' }}>
                        24/7 Managed SOC, SIEM monitoring, penetration testing (VAPT), and ISO 27001 / SOC-2 Type II readiness.
                      </p>
                    </div>
                  </Link>

                  {/* 6. Strategic Advisory & Consulting */}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Compass size={20} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Management &amp; Advisory</strong>
                        <span style={{ fontSize: '0.65rem', background: '#2563eb', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>Strategy</span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', lineHeight: '1.4', margin: '3px 0 0' }}>
                        Business process re-engineering, digital governance, organizational scaling &amp; M&amp;A tech integration.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Footer strip linking to Managed Services */}
                <div
                  style={{
                    marginTop: '1.1rem',
                    paddingTop: '0.9rem',
                    borderTop: '1px solid #e2e8f0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.82rem',
                  }}
                >
                  <span style={{ color: '#64748b' }}>Looking for 24/7 operational execution and voice centers?</span>
                  <button
                    onClick={() => setActiveDropdown('services')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#0052cc',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Switch to Managed Services Hub <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 2. SERVICES HUB DROPDOWN */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'services' ? '#0052cc' : '#1e293b',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: '8px 4px',
              }}
            >
              <Headphones size={16} color="#059669" />
              <span>Services Hub</span>
              <span
                style={{
                  background: '#dcfce7',
                  border: '1px solid #86efac',
                  color: '#15803d',
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  padding: '1px 5px',
                  borderRadius: '4px',
                }}
              >
                24/7
              </span>
              <ChevronDown
                size={14}
                style={{
                  transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
            </button>

            {/* Dropdown Card */}
            {activeDropdown === 'services' && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-240px',
                  width: '760px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15)',
                  zIndex: 2000,
                }}
              >
                {/* Header inside dropdown */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f1f5f9' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#059669', letterSpacing: '0.6px' }}>
                      Pillar 2 • 24/7 Global BPO &amp; Managed Support Operations
                    </span>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: '2px 0 0' }}>
                      Global Managed Services Division
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.75rem', background: '#ecfdf5', color: '#047857', padding: '3px 10px', borderRadius: '20px', fontWeight: 700 }}>
                    SLA-Backed Delivery
                  </span>
                </div>

                {/* Grid of 6 Core Services */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.9rem' }}>
                  {/* 1. Application Support Services */}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#eff6ff',
                      border: '1px solid #dbeafe',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Laptop size={20} color="#1d4ed8" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Application Support (AMS)</strong>
                        <span style={{ fontSize: '0.65rem', background: '#1d4ed8', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>15-Min SLA</span>
                      </div>
                      <p style={{ color: '#475569', fontSize: '0.76rem', lineHeight: '1.4', margin: '2px 0 0' }}>
                        ITIL v4 L1/L2/L3 triage, full-stack APM observability (Datadog/Dynatrace), database administration &amp; cloud infrastructure.
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
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#f0fdf4',
                      border: '1px solid #dcfce7',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Headphones size={20} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>International Voice Process</strong>
                        <span style={{ fontSize: '0.65rem', background: '#059669', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>US / UK / AUS</span>
                      </div>
                      <p style={{ color: '#475569', fontSize: '0.76rem', lineHeight: '1.4', margin: '2px 0 0' }}>
                        C2 neutral English specialists, 24/7 inbound/outbound support, 96.4% CSAT &amp; HIPAA-compliant pods.
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
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#fffbeb',
                      border: '1px solid #fef3c7',
                      transition: 'all 0.2s',
                    }}
                  >
                    <PhoneCall size={20} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Domestic Voice Process</strong>
                        <span style={{ fontSize: '0.65rem', background: '#d97706', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>12+ Languages</span>
                      </div>
                      <p style={{ color: '#475569', fontSize: '0.76rem', lineHeight: '1.4', margin: '2px 0 0' }}>
                        Pan-India support in Hindi, Marathi, Tamil, Telugu, Kannada, Bengali &amp; regional dialects (&lt;15s ASA).
                      </p>
                    </div>
                  </Link>

                  {/* 4. Healthcare Operations & RCM */}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s',
                    }}
                  >
                    <HeartPulse size={20} color="#0d9488" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Healthcare RCM &amp; Clinical BPO</strong>
                        <span style={{ fontSize: '0.65rem', background: '#0d9488', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>HIPAA</span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', lineHeight: '1.4', margin: '2px 0 0' }}>
                        Medical coding (ICD-10), billing, prior authorization, charge capture &amp; denial recovery pods.
                      </p>
                    </div>
                  </Link>

                  {/* 5. Pan-India Background Verification */}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s',
                    }}
                  >
                    <ShieldCheck size={20} color="#6366f1" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Pan-India Verification (BGV)</strong>
                        <span style={{ fontSize: '0.65rem', background: '#6366f1', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>28 States</span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', lineHeight: '1.4', margin: '2px 0 0' }}>
                        Physical address verification, court records, criminal checks &amp; institutional credentials across India.
                      </p>
                    </div>
                  </Link>

                  {/* 6. Enterprise HRMS & Staffing */}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '11px',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Users size={20} color="#475569" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.88rem' }}>Enterprise HRMS &amp; Staffing</strong>
                        <span style={{ fontSize: '0.65rem', background: '#475569', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>NAPS</span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', lineHeight: '1.4', margin: '2px 0 0' }}>
                        Skill India and NAPS certified staffing, automated payroll engines, compliance &amp; talent pipelines.
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Footer strip */}
                <div
                  style={{
                    marginTop: '1.1rem',
                    paddingTop: '0.9rem',
                    borderTop: '1px solid #e2e8f0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.82rem',
                  }}
                >
                  <span style={{ color: '#64748b' }}>Real Estate Title, STM Publishing XML, and custom workflows:</span>
                  <Link to="/services" onClick={closeAll} style={{ color: '#0052cc', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    View Complete 65+ Services Directory <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 3. MEGA DELIVERY HUBS */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => handleMouseEnter('hubs')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'hubs' ? null : 'hubs')}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'hubs' ? '#0052cc' : '#1e293b',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: '8px 4px',
              }}
            >
              <MapPin size={15} color="#0052cc" />
              <span>Mega Hubs</span>
              <ChevronDown
                size={14}
                style={{
                  transform: activeDropdown === 'hubs' ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
            </button>

            {/* Dropdown Card */}
            {activeDropdown === 'hubs' && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-140px',
                  width: '460px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.4rem',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15)',
                  zIndex: 2000,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', paddingBottom: '0.6rem', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#0052cc', letterSpacing: '0.5px' }}>
                    Pan-India Delivery Infrastructure
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#0284c7', background: '#e0f2fe', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                    28 States Covered
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {panIndiaHubs.map((hub, idx) => (
                    <div key={idx} style={{ borderBottom: idx !== panIndiaHubs.length - 1 ? '1px solid #f8fafc' : 'none', paddingBottom: '5px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.86rem' }}>{hub.city}</strong>
                        <span style={{ fontSize: '0.7rem', color: '#0052cc', background: '#eff6ff', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>
                          {hub.tag}
                        </span>
                      </div>
                      <p style={{ color: '#64748b', fontSize: '0.76rem', margin: '2px 0 0' }}>{hub.desc}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '0.9rem', paddingTop: '0.8rem', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <Link to="/global" onClick={closeAll} style={{ color: '#0052cc', fontSize: '0.82rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Explore Global Delivery Network &amp; On-Ground Reach <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 4. COMPANY DROPDOWN */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => handleMouseEnter('company')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'company' ? '#0052cc' : '#1e293b',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: '8px 4px',
              }}
            >
              <span>Company</span>
              <ChevronDown
                size={14}
                style={{
                  transform: activeDropdown === 'company' ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
            </button>

            {activeDropdown === 'company' && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-40px',
                  width: '260px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1rem',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15)',
                  zIndex: 2000,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <Link
                  to="/about"
                  onClick={closeAll}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    color: '#0f172a',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  About Caretrix
                </Link>
                <Link
                  to="/projects"
                  onClick={closeAll}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    color: '#0f172a',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  Projects &amp; Case Studies
                </Link>
                <Link
                  to="/industries"
                  onClick={closeAll}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    color: '#0f172a',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  Industries Served
                </Link>
                <Link
                  to="/careers"
                  onClick={closeAll}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    color: '#0f172a',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  <span>Careers</span>
                  <span style={{ fontSize: '0.65rem', background: '#dcfce7', color: '#15803d', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>Hiring</span>
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <NavLink
            to="/contact"
            onClick={closeAll}
            style={({ isActive }) => ({
              color: isActive ? '#0052cc' : '#1e293b',
              fontWeight: isActive ? 700 : 600,
              fontSize: '0.92rem',
              padding: '8px 2px',
            })}
          >
            Contact
          </NavLink>
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => {
              closeAll();
              if (onOpenModal) onOpenModal();
            }}
            className="btn btn-primary"
            style={{
              padding: '0.65rem 1.4rem',
              fontSize: '0.88rem',
              fontWeight: 700,
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0, 82, 204, 0.2)',
            }}
          >
            <Sparkles size={14} />
            <span>Initiate RFP</span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{
              background: '#f1f5f9',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '8px',
              color: '#0f172a',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {isMobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '74px',
            left: 0,
            right: 0,
            bottom: 0,
            background: '#ffffff',
            zIndex: 3000,
            overflowY: 'auto',
            padding: '1.5rem',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          {/* Quick Hub Indicator */}
          <div
            style={{
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '10px',
              padding: '10px 14px',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#1d4ed8',
              fontSize: '0.84rem',
              fontWeight: 700,
            }}
          >
            <Building2 size={16} /> Caretrix Mega Hub: Consulting &amp; Managed Services
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link
              to="/"
              onClick={closeAll}
              style={{ padding: '10px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', borderBottom: '1px solid #f1f5f9' }}
            >
              Home
            </Link>

            {/* Accordion: Consulting Hub */}
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              <button
                onClick={() => setMobileConsultingOpen(!mobileConsultingOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  padding: '10px 0',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0052cc',
                  cursor: 'pointer',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Briefcase size={18} /> Consulting Hub
                </span>
                <ChevronDown size={16} style={{ transform: mobileConsultingOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {mobileConsultingOpen && (
                <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Cloud Architecture &amp; DevOps Infrastructure
                  </Link>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Custom Enterprise Software Engineering
                  </Link>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Enterprise ERP &amp; CRM (SAP, Salesforce, Dynamics)
                  </Link>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • AI Engineering &amp; Hyper-Automation
                  </Link>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Cyber Security &amp; Managed SOC Operations
                  </Link>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Management Consulting &amp; Strategic Advisory
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion: Services Hub */}
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  padding: '10px 0',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#059669',
                  cursor: 'pointer',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Headphones size={18} /> Managed Services Hub
                </span>
                <ChevronDown size={16} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {mobileServicesOpen && (
                <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • 24/7 Application Support (15-Min SLA AMS)
                  </Link>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • International Voice Process (US/UK/AUS Pods)
                  </Link>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Domestic Voice Process (12+ Pan-India Languages)
                  </Link>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Healthcare RCM &amp; Clinical BPO (HIPAA)
                  </Link>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Pan-India Background Verification (28 States)
                  </Link>
                  <Link to="/services" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Enterprise HRMS &amp; Staffing (NAPS / Skill India)
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion: Mega Hubs */}
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              <button
                onClick={() => setMobileHubsOpen(!mobileHubsOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  padding: '10px 0',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  cursor: 'pointer',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={18} /> Delivery Hubs &amp; CoEs
                </span>
                <ChevronDown size={16} style={{ transform: mobileHubsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {mobileHubsOpen && (
                <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <Link to="/global" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Pune Global HQ (SAP &amp; Cloud Lab)
                  </Link>
                  <Link to="/global" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Navi Mumbai Hub (Healthcare RCM &amp; BPO)
                  </Link>
                  <Link to="/global" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Bengaluru Tech Hub (HANA Cloud BTP)
                  </Link>
                  <Link to="/global" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Hyderabad AI Lab (Process Automation)
                  </Link>
                  <Link to="/global" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    • Delhi NCR Advisory &amp; Chennai Delivery
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion: Company */}
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              <button
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  padding: '10px 0',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  cursor: 'pointer',
                }}
              >
                <span>Company &amp; Work</span>
                <ChevronDown size={16} style={{ transform: mobileCompanyOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {mobileCompanyOpen && (
                <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <Link to="/about" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    About Caretrix Consulting
                  </Link>
                  <Link to="/projects" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    Projects &amp; Case Studies
                  </Link>
                  <Link to="/industries" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    Industries Served
                  </Link>
                  <Link to="/careers" onClick={closeAll} style={{ padding: '6px 0', color: '#334155', fontSize: '0.92rem' }}>
                    Careers &amp; Opportunities
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={closeAll}
              style={{ padding: '10px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', borderBottom: '1px solid #f1f5f9' }}
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Call & RFP */}
          <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={() => {
                closeAll();
                if (onOpenModal) onOpenModal();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem', justifyContent: 'center' }}
            >
              <Sparkles size={16} /> Initiate Enterprise RFP
            </button>
            <a
              href="tel:+917758088438"
              className="btn btn-secondary"
              style={{ width: '100%', padding: '0.85rem', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Phone size={16} color="#0052cc" /> Call +91 77580 88438
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
