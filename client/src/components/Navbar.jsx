import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ChevronDown,
  Menu,
  X,
  Bot,
  Brain,
  FileCode2,
  FileSpreadsheet,
  BookOpen,
  FileText,
  Printer,
  Tablet,
  Image as ImageIcon,
  HeartPulse,
  Receipt,
  CreditCard,
  Ban,
  RotateCcw,
  Search,
  Scale,
  Scroll,
  Building,
  UserCog,
  BookCheck,
  CircleDollarSign,
  Users,
  BarChart3,
  Laptop,
  Megaphone,
  ShoppingCart,
  LineChart,
  Truck,
  ShieldCheck,
  FileSearch,
  Accessibility,
  Grid,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesAccordion, setMobileServicesAccordion] = useState(false);

  const navRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const closeDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(false);
    setMobileMenuOpen(false);
  };

  const navigateToService = (category) => {
    closeDropdown();
    navigate(`/services?cat=${category}`);
  };

  return (
    <div id="site-header" style={{ position: 'sticky', top: 0, zIndex: 1030, width: '100%' }}>
      {/* ── TOPBAR ────────────────────────────────────── */}
      <div
        className="topbar"
        style={{
          background: 'linear-gradient(90deg, #070C1E 0%, #0B1228 50%, #111A38 100%)',
          padding: '10px 0',
          fontSize: '12px',
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.8)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <span
                style={{
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
                  color: '#ffffff',
                  fontSize: '9.5px',
                  fontWeight: 800,
                  padding: '3px 12px',
                  borderRadius: '100px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  boxShadow: '0 0 12px rgba(37, 99, 235, 0.3)',
                }}
              >
                Caretrix Consulting Private Limited
              </span>
              <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)' }} />
              <a
                href="mailto:support@caretrixconsulting.com"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.85)' }}
              >
                <Mail size={12} color="#0284C7" /> support@caretrixconsulting.com
              </a>
              <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)' }} />
              <a
                href="tel:+918308906690"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.85)' }}
              >
                <Phone size={12} color="#0284C7" /> +91-8308906690
              </a>
              <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)' }} />
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.75)' }}>
                <MapPin size={12} color="#0284C7" /> Pune HQ &amp; Bengaluru, India | USA
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 600 }}>
                ● ISO 27001 Certified &bull; HIPAA Compliant
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FLOATING NAVBAR ────────────────────────────────────── */}
      <nav
        ref={navRef}
        style={{
          background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(28, 34, 128, 0.08)',
          boxShadow: isScrolled
            ? '0 15px 45px rgba(28, 34, 128, 0.12)'
            : '0 10px 35px rgba(28, 34, 128, 0.06)',
          width: '96%',
          maxWidth: '1740px',
          margin: isScrolled ? '6px auto 10px' : '12px auto 14px',
          borderRadius: '18px',
          transition: 'all 0.3s ease',
          position: 'relative',
        }}
      >
        <div
          className="container-fluid"
          style={{
            minHeight: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
          }}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeDropdown}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <img
              src="/logo.png"
              alt="Caretrix Consulting"
              style={{
                height: '48px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 0.3s ease',
              }}
            />
          </Link>

          {/* Desktop Nav Items */}
          <div
            className="d-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link-item ${isActive ? 'active' : ''}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link-item ${isActive ? 'active' : ''}`
              }
            >
              About
            </NavLink>

            {/* Services Dropdown Item */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`nav-link-item ${servicesOpen ? 'active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Services <ChevronDown size={14} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {/* 4-Column Mega Menu Dropdown */}
              {servicesOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '960px',
                    maxWidth: '92vw',
                    background: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 25px 60px rgba(13, 16, 53, 0.18), 0 0 0 1px rgba(28, 34, 128, 0.08)',
                    padding: '24px',
                    zIndex: 1050,
                    animation: 'dropFade 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '20px',
                    }}
                  >
                    {/* Column 1: AI & Automations + Publishing */}
                    <div>
                      <div className="mega-col-header" style={{ color: '#0284C7' }}>
                        <Brain size={14} /> AI &amp; Automations
                      </div>
                      <div className="mega-links-group">
                        <Link to="/services?cat=ai_automation" onClick={closeDropdown} className="mega-item">
                          <Bot size={13} color="#0284C7" /> AI Automation Services
                        </Link>
                        <Link to="/services?cat=ai_automation" onClick={closeDropdown} className="mega-item">
                          <FileCode2 size={13} color="#0284C7" /> Agentic AI Workflows
                        </Link>
                        <Link to="/services?cat=ai_automation" onClick={closeDropdown} className="mega-item">
                          <FileText size={13} color="#0284C7" /> Intelligent Doc Processing
                        </Link>
                        <Link to="/services?cat=data_annotation" onClick={closeDropdown} className="mega-item">
                          <FileSpreadsheet size={13} color="#0284C7" /> AI Data Annotation
                        </Link>
                      </div>

                      <div className="mega-col-header mt-3" style={{ color: '#1E3A8A' }}>
                        <BookOpen size={14} /> STM Publishing
                      </div>
                      <div className="mega-links-group">
                        <Link to="/services?cat=publishing" onClick={closeDropdown} className="mega-item">
                          <BookOpen size={13} /> Publishing Services
                        </Link>
                        <Link to="/services?cat=publishing" onClick={closeDropdown} className="mega-item">
                          <FileText size={13} /> Editorial Services
                        </Link>
                        <Link to="/services?cat=publishing" onClick={closeDropdown} className="mega-item">
                          <Printer size={13} /> Digital Prepress
                        </Link>
                        <Link to="/services?cat=publishing" onClick={closeDropdown} className="mega-item">
                          <Tablet size={13} /> eBook &amp; ePUB3 Conversion
                        </Link>
                        <Link to="/services?cat=publishing" onClick={closeDropdown} className="mega-item">
                          <ImageIcon size={13} /> Alt Text &amp; Accessibility
                        </Link>
                      </div>
                    </div>

                    {/* Column 2: Healthcare BPO + Real Estate */}
                    <div>
                      <div className="mega-col-header" style={{ color: '#0284C7' }}>
                        <HeartPulse size={14} /> Health Care
                      </div>
                      <div className="mega-links-group">
                        <Link to="/services?cat=healthcare" onClick={closeDropdown} className="mega-item">
                          <HeartPulse size={13} color="#0284C7" /> Medical Coding (ICD-10)
                        </Link>
                        <Link to="/services?cat=healthcare" onClick={closeDropdown} className="mega-item">
                          <Receipt size={13} color="#0284C7" /> Medical Billing
                        </Link>
                        <Link to="/services?cat=healthcare" onClick={closeDropdown} className="mega-item">
                          <CreditCard size={13} color="#0284C7" /> Payment Posting
                        </Link>
                        <Link to="/services?cat=healthcare" onClick={closeDropdown} className="mega-item">
                          <Ban size={13} color="#0284C7" /> Denial Management
                        </Link>
                        <Link to="/services?cat=healthcare" onClick={closeDropdown} className="mega-item">
                          <RotateCcw size={13} color="#0284C7" /> AR Recovery
                        </Link>
                      </div>

                      <div className="mega-col-header mt-3">
                        <Building size={14} /> Real Estate
                      </div>
                      <div className="mega-links-group">
                        <Link to="/services?cat=realestate" onClick={closeDropdown} className="mega-item">
                          <Search size={13} /> CAM Audit Services
                        </Link>
                        <Link to="/services?cat=realestate" onClick={closeDropdown} className="mega-item">
                          <Scale size={13} /> CAM Reconciliation
                        </Link>
                        <Link to="/services?cat=realestate" onClick={closeDropdown} className="mega-item">
                          <Scroll size={13} /> Lease Administration
                        </Link>
                        <Link to="/services?cat=realestate" onClick={closeDropdown} className="mega-item">
                          <FileText size={13} /> Lease Abstraction
                        </Link>
                        <Link to="/services?cat=realestate" onClick={closeDropdown} className="mega-item">
                          <CircleDollarSign size={13} /> Property Accounting
                        </Link>
                      </div>
                    </div>

                    {/* Column 3: Finance & Accounting BPO + IT & Digital */}
                    <div>
                      <div className="mega-col-header" style={{ color: '#1E3A8A' }}>
                        <CircleDollarSign size={14} /> Finance &amp; Accounting BPO
                      </div>
                      <div className="mega-links-group">
                        <Link to="/services?cat=accounting" onClick={closeDropdown} className="mega-item">
                          <BookCheck size={13} /> General Ledger &amp; Bookkeeping
                        </Link>
                        <Link to="/services?cat=accounting" onClick={closeDropdown} className="mega-item">
                          <Receipt size={13} /> Accounts Payable / Receivable
                        </Link>
                        <Link to="/services?cat=accounting" onClick={closeDropdown} className="mega-item">
                          <BarChart3 size={13} /> Financial Planning &amp; Reporting
                        </Link>
                        <Link to="/services?cat=staffing" onClick={closeDropdown} className="mega-item">
                          <Users size={13} /> Global Staff Augmentation
                        </Link>
                      </div>

                      <div className="mega-col-header mt-3">
                        <Laptop size={14} /> IT &amp; Digital
                      </div>
                      <div className="mega-links-group">
                        <Link to="/services?cat=customsoftware" onClick={closeDropdown} className="mega-item">
                          <Laptop size={13} /> Software Solutions
                        </Link>
                        <Link to="/services?cat=digitalmarketing" onClick={closeDropdown} className="mega-item">
                          <Megaphone size={13} /> Digital Marketing &amp; SEO
                        </Link>
                        <Link to="/services?cat=customsoftware" onClick={closeDropdown} className="mega-item">
                          <ShoppingCart size={13} /> E-Commerce Solutions
                        </Link>
                        <Link to="/services?cat=customsoftware" onClick={closeDropdown} className="mega-item">
                          <LineChart size={13} /> Data Analytics
                        </Link>
                      </div>
                    </div>

                    {/* Column 4: More Services + View All */}
                    <div>
                      <div className="mega-col-header">
                        <Grid size={14} /> More Services
                      </div>
                      <div className="mega-links-group">
                        <Link to="/services?cat=logistics" onClick={closeDropdown} className="mega-item">
                          <Truck size={13} /> Logistics Services
                        </Link>
                        <Link to="/services?cat=realestate" onClick={closeDropdown} className="mega-item">
                          <Building size={13} /> Title &amp; Settlement
                        </Link>
                        <Link to="/services?cat=realestate" onClick={closeDropdown} className="mega-item">
                          <Receipt size={13} /> Mortgage &amp; Escrow
                        </Link>
                        <Link to="/services?cat=verification" onClick={closeDropdown} className="mega-item">
                          <ShieldCheck size={13} /> Background Verification
                        </Link>
                        <Link to="/services?cat=technicalpub" onClick={closeDropdown} className="mega-item">
                          <FileSearch size={13} /> Technical Writing (S1000D)
                        </Link>
                        <Link to="/services?cat=publishing" onClick={closeDropdown} className="mega-item">
                          <Accessibility size={13} /> Digital Accessibility
                        </Link>
                      </div>

                      <div className="mega-col-header mt-3" style={{ color: '#1E3A8A' }}>
                        <Grid size={14} /> View All
                      </div>
                      <div className="mega-links-group">
                        <Link
                          to="/services"
                          onClick={closeDropdown}
                          className="mega-item"
                          style={{
                            fontWeight: 700,
                            color: '#2563EB',
                            background: 'rgba(37, 99, 235, 0.08)',
                            borderRadius: '8px',
                            padding: '8px 10px',
                          }}
                        >
                          <Grid size={13} color="#2563EB" /> Explore All 65+ Services <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Global Delivery Assurance Strip */}
                  <div
                    style={{
                      borderTop: '1px solid #e2e8f0',
                      marginTop: '18px',
                      paddingTop: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px',
                      background: 'rgba(37, 99, 235, 0.04)',
                      padding: '12px 18px',
                      borderRadius: '10px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#1E293B' }}>
                      <Sparkles size={16} color="#0284C7" />
                      <span>
                        Global Delivery Assurance: <strong style={{ color: '#1E3A8A' }}>ISO 27001 Certified &amp; HIPAA Compliant</strong> Multi-Shore Pods
                      </span>
                    </div>
                    <Link
                      to="/contact"
                      onClick={closeDropdown}
                      style={{
                        background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
                        color: '#ffffff',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        padding: '7px 16px',
                        borderRadius: '100px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                      }}
                    >
                      Consult Our Solutions Team <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/industries"
              className={({ isActive }) =>
                `nav-link-item ${isActive ? 'active' : ''}`
              }
            >
              Industries
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-link-item ${isActive ? 'active' : ''}`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `nav-link-item ${isActive ? 'active' : ''}`
              }
            >
              Careers
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link-item ${isActive ? 'active' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Right Action Items */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Direct Phone Info Box */}
            <div
              className="d-desktop"
              style={{
                borderLeft: '1.5px solid rgba(37, 99, 235, 0.15)',
                paddingLeft: '16px',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Phone size={12} color="#0284C7" /> +91-8308906690
              </div>
              <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>
                24/7 Digital Inquiry &bull; Mon–Sat 9AM–6PM IST
              </div>
            </div>

            {/* Primary CTA Button */}
            <button
              type="button"
              onClick={onOpenModal}
              className="btn-sapphire"
              style={{
                padding: '10px 22px',
                fontSize: '13.5px',
                whiteSpace: 'nowrap',
              }}
            >
              <Send size={14} /> Get Free Quote
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="d-mobile"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px',
                color: '#1E3A8A',
              }}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#ffffff',
              borderTop: '1px solid #e2e8f0',
              borderRadius: '0 0 18px 18px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <Link to="/" onClick={closeDropdown} className="mobile-nav-link">
              Home
            </Link>
            <Link to="/about" onClick={closeDropdown} className="mobile-nav-link">
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
                className="mobile-nav-link"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                }}
              >
                Services <ChevronDown size={16} style={{ transform: mobileServicesAccordion ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {mobileServicesAccordion && (
                <div
                  style={{
                    padding: '10px 16px',
                    background: '#f8fafc',
                    borderRadius: '10px',
                    marginTop: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <Link to="/services?cat=ai_automation" onClick={closeDropdown} className="mobile-sub-link">
                    &bull; AI &amp; Automations
                  </Link>
                  <Link to="/services?cat=healthcare" onClick={closeDropdown} className="mobile-sub-link">
                    &bull; Healthcare BPO &amp; RCM
                  </Link>
                  <Link to="/services?cat=customsoftware" onClick={closeDropdown} className="mobile-sub-link">
                    &bull; IT &amp; Custom Software Solutions
                  </Link>
                  <Link to="/services?cat=publishing" onClick={closeDropdown} className="mobile-sub-link">
                    &bull; STM Publishing &amp; Prepress
                  </Link>
                  <Link to="/services?cat=realestate" onClick={closeDropdown} className="mobile-sub-link">
                    &bull; Real Estate, CAM &amp; Title
                  </Link>
                  <Link to="/services?cat=data_annotation" onClick={closeDropdown} className="mobile-sub-link">
                    &bull; AI Data Annotation
                  </Link>
                  <Link to="/services?cat=accounting" onClick={closeDropdown} className="mobile-sub-link">
                    &bull; Accounting &amp; Bookkeeping
                  </Link>
                  <Link to="/services?cat=digitalmarketing" onClick={closeDropdown} className="mobile-sub-link">
                    &bull; Digital Marketing &amp; SEO
                  </Link>
                  <Link to="/services" onClick={closeDropdown} className="mobile-sub-link fw-bold" style={{ color: '#2563EB' }}>
                    &bull; View All 65+ Services &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link to="/industries" onClick={closeDropdown} className="mobile-nav-link">
              Industries
            </Link>
            <Link to="/projects" onClick={closeDropdown} className="mobile-nav-link">
              Projects
            </Link>
            <Link to="/careers" onClick={closeDropdown} className="mobile-nav-link">
              Careers
            </Link>
            <Link to="/contact" onClick={closeDropdown} className="mobile-nav-link">
              Contact
            </Link>

            <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1d3a', marginBottom: '8px' }}>
                <Phone size={13} color="#CC2228" style={{ display: 'inline', marginRight: '6px' }} />
                +91-8308906690
              </div>
              <button
                type="button"
                onClick={() => {
                  closeDropdown();
                  onOpenModal();
                }}
                className="btn-accent-custom"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Send size={14} /> Get Free Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Embedded Component Styles */}
      <style>{`
        .nav-link-item {
          font-family: var(--font-heading);
          font-size: 14.5px;
          font-weight: 600;
          color: #1a1d3a;
          padding: 8px 14px;
          border-radius: 8px;
          position: relative;
          transition: color 0.2s, background 0.2s;
        }
        .nav-link-item:hover, .nav-link-item.active {
          color: #1E3A8A;
          background: rgba(37, 99, 235, 0.06);
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 14px;
          right: 14px;
          height: 2.5px;
          background: linear-gradient(90deg, #1E3A8A, #2563EB, #0284C7);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link-item:hover::after, .nav-link-item.active::after {
          transform: scaleX(1);
        }
        .mega-col-header {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #1E3A8A;
          padding-bottom: 6px;
          border-bottom: 1.5px solid rgba(37, 99, 235, 0.12);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .mega-links-group {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .mega-item {
          font-size: 13px;
          font-weight: 500;
          color: #334155;
          padding: 6px 10px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.15s ease;
        }
        .mega-item:hover {
          background: rgba(37, 99, 235, 0.08);
          color: #1E3A8A;
          padding-left: 14px;
        }
        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 600;
          color: #1a1d3a;
          padding: 8px 12px;
          border-radius: 8px;
        }
        .mobile-sub-link {
          font-size: 13.5px;
          color: #475569;
          padding: 4px 8px;
        }
        @media (max-width: 991px) {
          .d-desktop { display: none !important; }
          .d-mobile { display: block !important; }
        }
        @media (min-width: 992px) {
          .d-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
