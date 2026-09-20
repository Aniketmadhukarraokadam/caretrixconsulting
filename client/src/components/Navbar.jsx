import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Sparkles, Briefcase, Headphones, MapPin } from 'lucide-react';

const linkStyle = ({ isActive }) => ({
  color: isActive ? '#0052cc' : '#1e293b',
  fontWeight: isActive ? 700 : 600,
  fontSize: '0.92rem',
  padding: '8px 2px',
});

export default function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  const dropdown = (name, label, Icon, color, items) => (
    <div style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => toggleDropdown(name)}
        style={{
          background: 'transparent',
          border: 'none',
          color: activeDropdown === name ? '#0052cc' : '#1e293b',
          fontWeight: 600,
          fontSize: '0.92rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          cursor: 'pointer',
          padding: '8px 4px',
        }}
      >
        <Icon size={16} color={color} />
        <span>{label}</span>
        <ChevronDown size={14} style={{ transform: activeDropdown === name ? 'rotate(180deg)' : 'none' }} />
      </button>
      {activeDropdown === name && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '-20px',
            minWidth: '230px',
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '0.6rem',
            boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15)',
            zIndex: 2000,
          }}
        >
          {items.map((item) => (
            <Link
              key={item}
              to="/services"
              onClick={closeMenu}
              style={{ display: 'block', padding: '9px 10px', color: '#334155', fontSize: '0.86rem', borderRadius: '7px' }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        width: '100%',
      }}
    >
      <div style={{ background: '#0a192f', color: '#cbd5e1', fontSize: '0.78rem', padding: '6px 0' }}>
        <div className="container-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ color: '#e2e8f0' }}>
            <strong>Strategic Consulting</strong> &amp; <strong>24/7 Global Managed Services</strong> across 28 Indian States &amp; 8 UTs
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <a href="tel:+917758088438" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#38bdf8', fontWeight: 600 }}>
              <Phone size={12} /> +91 77580 88438
            </a>
            <a href="mailto:Contact@caretrixconsulting.com" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#cbd5e1' }}>
              <Mail size={12} /> Contact@caretrixconsulting.com
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '74px' }}>
        <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.png" alt="Caretrix Consulting" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em', color: '#123d6b', lineHeight: 1.1 }}>
              CARETRIX
            </div>
            <span style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '1.5px', color: '#64748b', textTransform: 'uppercase' }}>
              Consulting &amp; Managed Services
            </span>
          </div>
        </Link>

        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <NavLink to="/" end onClick={closeMenu} style={linkStyle}>Home</NavLink>
          {dropdown('consulting', 'Consulting', Briefcase, '#0052cc', ['Cloud Architecture & DevOps', 'Custom Enterprise Software', 'Enterprise ERP & CRM', 'AI & Automation'])}
          {dropdown('services', 'Services', Headphones, '#059669', ['Application Support Services', 'International Voice Process', 'Healthcare Operations', 'Background Verification'])}
          {dropdown('locations', 'Delivery Hubs', MapPin, '#0052cc', ['Pune Global HQ', 'Navi Mumbai Operations', 'Bengaluru Tech Center', 'Hyderabad AI Lab'])}
          <NavLink to="/about" onClick={closeMenu} style={linkStyle}>Company</NavLink>
          <NavLink to="/contact" onClick={closeMenu} style={linkStyle}>Contact</NavLink>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            type="button"
            onClick={() => { closeMenu(); if (onOpenModal) onOpenModal(); }}
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem', fontWeight: 700, borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Sparkles size={14} /> <span>Initiate RFP</span>
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '8px', color: '#0f172a', cursor: 'pointer' }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-nav" style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '1rem 1.5rem 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <Link to="/" onClick={closeMenu} style={{ padding: '10px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>Home</Link>
            <Link to="/services" onClick={closeMenu} style={{ padding: '10px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0052cc' }}>Consulting &amp; Services</Link>
            <Link to="/global" onClick={closeMenu} style={{ padding: '10px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>Delivery Hubs</Link>
            <Link to="/about" onClick={closeMenu} style={{ padding: '10px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>Company</Link>
            <Link to="/contact" onClick={closeMenu} style={{ padding: '10px 0', fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
}
