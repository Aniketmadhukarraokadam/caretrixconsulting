import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cpu,
  Laptop,
  HeartPulse,
  BookOpen,
  Building,
  FileSpreadsheet,
  BarChart3,
  Truck,
  Megaphone,
  FileText,
  ShieldCheck,
  Award,
  Globe2,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Send,
  Star,
  Plus,
  Minus,
  Sparkles,
  Zap,
  Clock,
  CircleDollarSign,
  UserCog,
  ChevronRight,
} from 'lucide-react';
import { useToast } from '../components/Toast';

export default function Home({ onOpenModal }) {
  const { addToast } = useToast();

  // Typed Text Effect State
  const typedWords = [
    'Outsourcing',
    'HR & Payroll Software',
    'AI Solutions',
    'Healthcare BPO',
    'Publishing Services',
    'Data Annotation',
    'Digital Marketing',
    'Real Estate BPO',
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Active FAQ accordion state
  const [openFaq, setOpenFaq] = useState('faq-0');

  // Contact Mini Form state
  const [contactForm, setContactForm] = useState({
    fullName: '',
    emailAddr: '',
    phoneNum: '',
    service: 'General Inquiry',
    msgText: '',
  });
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    const fullWord = typedWords[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(50);
        } else {
          setTypingSpeed(90);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typedWords.length);
          setTypingSpeed(100);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.fullName || !contactForm.emailAddr || !contactForm.msgText) {
      addToast('Please complete all required fields.', 'error');
      return;
    }
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      addToast('Message sent successfully! Our executive team will reach out within 24 hours.', 'success');
      setContactForm({
        fullName: '',
        emailAddr: '',
        phoneNum: '',
        service: 'General Inquiry',
        msgText: '',
      });
    }, 800);
  };

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Marquee Cards Data
  const marqueeItems = [
    { tag: 'AI HRMS', icon: <UserCog size={18} color="#E11D48" />, title: 'HR & Payroll Software', desc: 'CaretrixHRMS: Autonomous salary calculation & biometric attendance.' },
    { tag: 'AI / ML', icon: <Brain size={18} color="#CC2228" />, title: 'AI Automations', desc: 'Agentic AI workflows, intelligent document processing (IDP) & task agents.' },
    { tag: 'Tech', icon: <Laptop size={18} color="#1C2280" />, title: 'Custom Software', desc: 'Scalable cloud, web & mobile applications built for high-throughput scale.' },
    { tag: 'Medical', icon: <HeartPulse size={18} color="#0284C7" />, title: 'Healthcare BPO', desc: 'End-to-end medical billing, ICD-10 coding & denial recovery maximizing ROI.' },
    { tag: 'Finance', icon: <CircleDollarSign size={18} color="#10B981" />, title: 'Accounting & Payroll', desc: 'Accurate bookkeeping, statutory payroll processing & financial reports.' },
    { tag: 'Media', icon: <BookOpen size={18} color="#8B5CF6" />, title: 'Publishing Prepress', desc: 'ePUB3 conversion, typesetting, S1000D XML & WCAG accessibility.' },
    { tag: 'Property', icon: <Building size={18} color="#F59E0B" />, title: 'Real Estate BPO', desc: 'Lease abstraction, CAM audits & proactive property accounting workflows.' },
    { tag: 'AI Training', icon: <FileSpreadsheet size={18} color="#EC4899" />, title: 'AI Data Annotation', desc: 'High-precision computer vision, LiDAR 3D & RLHF datasets for AI models.' },
    { tag: 'Growth', icon: <Megaphone size={18} color="#1C2280" />, title: 'Digital Marketing', desc: 'Data-driven SEO, dynamic PPC campaigns & high-conversion B2B pipelines.' },
    { tag: 'HR Staffing', icon: <Users size={18} color="#0D9488" />, title: 'Manpower Supply', desc: 'Strategic staff augmentation & dedicated offshore pods for rapid scale.' },
    { tag: 'Legal', icon: <FileText size={18} color="#CC2228" />, title: 'Title & Settlement', desc: 'Comprehensive title searches, policy typing & mortgage settlement support.' },
  ];

  // 10 Flagship Services Data
  const flagshipServices = [
    {
      icon: <Laptop size={28} />,
      iconBg: 'rgba(28, 34, 128, 0.08)',
      iconColor: '#1C2280',
      title: 'IT & Software Solutions',
      desc: 'Custom software development, web & mobile apps, cloud architectures, enterprise ERP integrations, and AI-enabled business tools tailored to your operational workflows.',
      link: '/services?cat=customsoftware',
    },
    {
      icon: <UserCog size={28} />,
      iconBg: 'rgba(225, 29, 72, 0.1)',
      iconColor: '#E11D48',
      title: 'HR & Payroll Software (CaretrixHRMS)',
      badge: 'PROPRIETARY AI SOFTWARE',
      badgeBg: '#E11D48',
      desc: 'Cloud-native AI HRMS & payroll software: autonomous salary calculation, biometric attendance sync, automated employee onboarding, and predictive workforce analytics.',
      link: '/services?cat=hrms',
      highlightBorder: true,
    },
    {
      icon: <HeartPulse size={28} />,
      iconBg: 'rgba(2, 132, 199, 0.08)',
      iconColor: '#0284C7',
      title: 'Healthcare BPO & RCM',
      desc: 'End-to-end medical coding (ICD-10-CM / CPT), claim billing, payment posting, denial management, prior authorization, and accounts receivable (AR) recovery.',
      link: '/services?cat=healthcare',
    },
    {
      icon: <BookOpen size={28} />,
      iconBg: 'rgba(139, 92, 246, 0.08)',
      iconColor: '#8B5CF6',
      title: 'Publishing & Prepress Services',
      desc: 'Digital prepress, typesetting, ePUB3 conversion, S1000D XML structuring, copy editing, and Section 508 / WCAG 2.1 AA PDF accessibility remediation.',
      link: '/services?cat=publishing',
    },
    {
      icon: <Building size={28} />,
      iconBg: 'rgba(16, 185, 129, 0.08)',
      iconColor: '#10B981',
      title: 'Real Estate & Title Services',
      desc: 'Commercial lease abstraction, CAM audit & reconciliation, property accounting, title search, settlement processing, and mortgage escrow support.',
      link: '/services?cat=realestate',
    },
    {
      icon: <FileSpreadsheet size={28} />,
      iconBg: 'rgba(245, 158, 11, 0.08)',
      iconColor: '#F59E0B',
      title: 'AI Data Annotation & CV',
      desc: 'Precision image, video, audio, and text labeling for machine learning pipelines. Bounding box, semantic segmentation, 3D LiDAR point clouds, and RLHF data.',
      link: '/services?cat=data_annotation',
    },
    {
      icon: <BarChart3 size={28} />,
      iconBg: 'rgba(204, 34, 40, 0.08)',
      iconColor: '#CC2228',
      title: 'Accounting & Financial BPO',
      desc: 'Offshore bookkeeping, payroll processing, accounts payable/receivable, financial statement preparation, and statutory tax compliance support.',
      link: '/services?cat=accounting',
    },
    {
      icon: <Truck size={28} />,
      iconBg: 'rgba(236, 72, 153, 0.08)',
      iconColor: '#EC4899',
      title: 'Logistics & Supply Chain',
      desc: 'Freight data processing, shipping documentation audits, inventory tracking, bill of lading entry, and predictive supply chain analytics.',
      link: '/services?cat=logistics',
    },
    {
      icon: <Megaphone size={28} />,
      iconBg: 'rgba(28, 34, 128, 0.08)',
      iconColor: '#1C2280',
      title: 'Digital Marketing & SEO',
      desc: 'Data-driven search engine optimization (SEO), high-ROI PPC campaigns, social media management, technical content marketing, and B2B lead generation.',
      link: '/services?cat=digitalmarketing',
    },
    {
      icon: <FileText size={28} />,
      iconBg: 'rgba(14, 165, 233, 0.08)',
      iconColor: '#0EA5E9',
      title: 'Technical Publications (S1000D)',
      desc: 'Technical authoring, regulatory compliance manuals, illustrated parts catalogs (IPC), JATS XML conversion, and multilingual localization.',
      link: '/services?cat=technicalpub',
    },
  ];

  // FAQ Data
  const faqList = [
    {
      q: 'What is healthcare RCM outsourcing and how does it work?',
      a: 'Revenue cycle management (RCM) outsourcing means an external expert partner handles medical coding, billing, claims submission, denial management, and accounts receivable recovery on behalf of a healthcare provider. Caretrix Consulting manages this end-to-end under HIPAA-compliant processes, accelerating cash flow and reducing denials without requiring an expensive in-house billing team.',
    },
    {
      q: 'How does denial management reduce claim rejections?',
      a: 'Denial management investigates the root causes of claim rejections (coding mismatches, missing documentation, or eligibility errors), corrects them, and resubmits within tight payer deadlines. Our systematic tracking prevents repeat rejections, immediately lifting first-pass clean claim acceptance rates to 98%+',
    },
    {
      q: 'What is CaretrixHRMS and how does it automate payroll?',
      a: 'CaretrixHRMS is our proprietary enterprise Human Resource Management System powered by AI. It unifies autonomous payroll calculations, biometric attendance synchronization, tax filing compliance, employee self-service, automated onboarding, and predictive retention analytics into one cloud platform.',
    },
    {
      q: 'What does an AI data annotation company do?',
      a: 'A data annotation partner labels raw datasets—images, video, audio, and text—so artificial intelligence and machine learning models can learn accurately. Caretrix Consulting provides 2D bounding boxes, polygon segmentation, 3D LiDAR point cloud labeling, and Reinforcement Learning from Human Feedback (RLHF) with strict 99.5% quality thresholds.',
    },
    {
      q: 'What is lease abstraction in commercial real estate?',
      a: 'Lease abstraction is the process of extracting critical financial, legal, and operational terms (base rent, escalation clauses, CAM obligations, renewal dates) from complex multi-page commercial leases into structured digital summaries. Our team serves commercial property managers, title companies, and REITs.',
    },
    {
      q: 'What is S1000D XML conversion used for in publishing?',
      a: 'S1000D is the global international specification for technical publications used primarily in aerospace, defense, and heavy equipment manufacturing. We restructure complex technical documentation into modular, standard XML Data Modules for compliant, multi-channel technical publishing.',
    },
    {
      q: 'Is Caretrix Consulting ISO 27001 certified and HIPAA compliant?',
      a: 'Yes. Caretrix Consulting Private Limited operates under verified ISO 27001:2013 information security standards and maintains strict HIPAA compliance protocols across all healthcare operations, medical data handling, and confidential enterprise processing.',
    },
    {
      q: 'Where are Caretrix Consulting delivery hubs and offices located?',
      a: 'We are headquartered in Pune (Maharashtra) with our state-of-the-art technology delivery center in Bengaluru (Karnataka) and a corporate US presence in Sheridan, Wyoming. We serve 150+ international clients across the US, UK, Europe, Australia, and India.',
    },
  ];

  return (
    <div className="homepage-root" style={{ background: '#ffffff' }}>
      {/* ═══════ HERO SECTION ═══════ */}
      <section
        className="hero-section"
        style={{
          background: 'linear-gradient(155deg, #f8faff 0%, #eef2ff 35%, #f0f4fc 70%, #fafcff 100%)',
          padding: '40px 0 30px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Headline & Values */}
            <div style={{ textAlign: 'left' }}>
              {/* Trust Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(28, 34, 128, 0.12)',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  marginBottom: '20px',
                  boxShadow: '0 4px 15px rgba(28, 34, 128, 0.05)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#CC2228',
                    display: 'inline-block',
                    animation: 'pulseGlow 1.5s infinite alternate',
                  }}
                />
                <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: '#1C2280' }}>
                  6+ Years Global Delivery &bull; ISO 27001 Certified &bull; HIPAA Compliant
                </span>
              </div>

              {/* Dynamic Typing Title */}
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  lineHeight: 1.15,
                  marginBottom: '18px',
                  letterSpacing: '-0.02em',
                }}
              >
                Empowering Global Enterprises with Next-Gen{' '}
                <span
                  style={{
                    background: 'linear-gradient(100deg, #CC2228 0%, #1C2280 45%, #5BA8D4 80%, #CC2228 100%)',
                    backgroundSize: '250% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  {currentText}
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '0.85em',
                    background: '#CC2228',
                    marginLeft: '3px',
                    verticalAlign: 'middle',
                  }}
                />
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: '17px',
                  color: '#475569',
                  lineHeight: 1.75,
                  marginBottom: '28px',
                  maxWidth: '650px',
                }}
              >
                We engineer full-stack IT systems, autonomous AI agent workflows, and 24/7 global BPO operations. Driving measurable ROI across Healthcare RCM, Real Estate, Publishing Prepress, and Custom Software for <strong>150+ global clients</strong> with <strong>200+ delivered projects</strong>.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="btn-accent-custom"
                  style={{ padding: '14px 30px', fontSize: '15px' }}
                >
                  <Send size={15} /> Get Free Consultation
                </button>
                <Link
                  to="/about"
                  className="btn-outline-custom"
                  style={{ padding: '14px 30px', fontSize: '15px' }}
                >
                  <Zap size={15} /> Explore Company Profile
                </Link>
              </div>

              {/* Interactive Service Chips Bar */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(28, 34, 128, 0.08)',
                  borderRadius: '16px',
                  padding: '14px 18px',
                  boxShadow: '0 6px 20px rgba(28, 34, 128, 0.04)',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    color: '#1C2280',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Interactive Service Constellation</span>
                  <span style={{ fontSize: '10px', color: '#64748b' }}>Click to explore</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <Link to="/services?cat=ai_automation" className="hero-chip">
                    <Brain size={13} color="#CC2228" /> AI &amp; Automation
                  </Link>
                  <Link
                    to="/services?cat=hrms"
                    className="hero-chip"
                    style={{ background: 'rgba(225, 29, 72, 0.06)', borderColor: 'rgba(225, 29, 72, 0.3)' }}
                  >
                    <UserCog size={13} color="#E11D48" /> HR &amp; Payroll Software
                  </Link>
                  <Link to="/services?cat=healthcare" className="hero-chip">
                    <HeartPulse size={13} color="#0284C7" /> Healthcare RCM
                  </Link>
                  <Link to="/services?cat=customsoftware" className="hero-chip">
                    <Laptop size={13} color="#6366F1" /> Custom Web &amp; Cloud
                  </Link>
                  <Link to="/services?cat=publishing" className="hero-chip">
                    <BookOpen size={13} color="#8B5CF6" /> Publishing AI
                  </Link>
                  <Link to="/services?cat=staffing" className="hero-chip">
                    <Users size={13} color="#10B981" /> 24/7 Global BPO
                  </Link>
                </div>
              </div>

              {/* 5-Stat Chips */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                  gap: '10px',
                  marginTop: '24px',
                }}
              >
                <div className="stat-chip">
                  <div className="stat-num">6<span>+</span></div>
                  <div className="stat-lbl">Years Exp.</div>
                </div>
                <div className="stat-chip">
                  <div className="stat-num">200<span>+</span></div>
                  <div className="stat-lbl">Projects</div>
                </div>
                <div className="stat-chip">
                  <div className="stat-num">150<span>+</span></div>
                  <div className="stat-lbl">Clients</div>
                </div>
                <div className="stat-chip">
                  <div className="stat-num">65<span>+</span></div>
                  <div className="stat-lbl">Services</div>
                </div>
                <div className="stat-chip">
                  <div className="stat-num">200<span>+</span></div>
                  <div className="stat-lbl">Talent</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Constellation Stage */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '520px',
                  height: '480px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Orbital Rings */}
                <div className="orbit-ring orbit-ring-1" />
                <div className="orbit-ring orbit-ring-2" />
                <div className="orbit-ring orbit-ring-3" />

                {/* Central Caretrix Core Hub */}
                <Link
                  to="/services"
                  style={{
                    position: 'absolute',
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f8faff 60%, rgba(28, 34, 128, 0.08) 100%)',
                    border: '2px solid rgba(28, 34, 128, 0.18)',
                    boxShadow: '0 15px 45px rgba(28, 34, 128, 0.18), 0 0 50px rgba(91, 168, 212, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 15,
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <Sparkles size={30} color="#CC2228" />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 900, color: '#1C2280', letterSpacing: '1px', marginTop: '4px' }}>
                    CARETRIX
                  </span>
                  <span style={{ fontSize: '7.5px', fontWeight: 700, color: '#64748B', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                    AI &amp; IT HUB
                  </span>
                </Link>

                {/* 6 Connected Nodes (Distributed Around Hub) */}
                <Link to="/services?cat=ai_automation" className="constellation-node node-top">
                  <Brain size={16} color="#CC2228" />
                  <div>
                    <div className="node-title">AI &amp; Automation</div>
                    <div className="node-sub">Agentic AI &amp; IDP</div>
                  </div>
                </Link>

                <Link to="/services?cat=healthcare" className="constellation-node node-top-right">
                  <HeartPulse size={16} color="#0284C7" />
                  <div>
                    <div className="node-title">Healthcare RCM</div>
                    <div className="node-sub">Billing &amp; Coding</div>
                  </div>
                </Link>

                <Link to="/services?cat=customsoftware" className="constellation-node node-bottom-right">
                  <Laptop size={16} color="#6366F1" />
                  <div>
                    <div className="node-title">Cloud &amp; Software</div>
                    <div className="node-sub">Web, SaaS &amp; APIs</div>
                  </div>
                </Link>

                <Link to="/services?cat=staffing" className="constellation-node node-bottom">
                  <Users size={16} color="#10B981" />
                  <div>
                    <div className="node-title">Global BPO Pods</div>
                    <div className="node-sub">24/7 Operations</div>
                  </div>
                </Link>

                <Link to="/services?cat=publishing" className="constellation-node node-bottom-left">
                  <BookOpen size={16} color="#8B5CF6" />
                  <div>
                    <div className="node-title">Publishing AI</div>
                    <div className="node-sub">ePUB3 &amp; S1000D</div>
                  </div>
                </Link>

                <Link to="/services?cat=hrms" className="constellation-node node-top-left">
                  <UserCog size={16} color="#E11D48" />
                  <div>
                    <div className="node-title">HR &amp; Payroll</div>
                    <div className="node-sub">CaretrixHRMS</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── DUAL TRACK EDGE-TO-EDGE MARQUEE ────────────────────────────────────── */}
        <div className="hero-scroll-container full-bleed" style={{ marginTop: '30px' }}>
          <div className="hero-scroll-track">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <div key={`m1-${idx}`} className="hero-card">
                <div className="hero-tag">{item.tag}</div>
                <div className="service-icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="hero-scroll-track reverse">
            {marqueeItems.concat(marqueeItems).reverse().map((item, idx) => (
              <div key={`m2-${idx}`} className="hero-card">
                <div className="hero-tag">{item.tag}</div>
                <div className="service-icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TRUST & CERTIFICATION MARQUEE ═══════ */}
      <div className="trust-marquee-wrapper">
        <div className="trust-marquee">
          <div className="trust-item"><div className="trust-icon-box cyan"><ShieldCheck size={20} /></div> ISO 27001 Certified</div>
          <div className="trust-item"><div className="trust-icon-box gold"><Award size={20} /></div> ISO 9001:2015 Quality</div>
          <div className="trust-item"><div className="trust-icon-box"><HeartPulse size={20} /></div> HIPAA Compliant</div>
          <div className="trust-item"><div className="trust-icon-box green"><Cpu size={20} /></div> Dedicated Secure Servers</div>
          <div className="trust-item"><div className="trust-icon-box cyan"><Globe2 size={20} /></div> 150+ Global Clients</div>
          <div className="trust-item"><div className="trust-icon-box gold"><BarChart3 size={20} /></div> 200+ Projects Delivered</div>
          <div className="trust-item"><div className="trust-icon-box"><Users size={20} /></div> 200+ Professionals</div>
          <div className="trust-item"><div className="trust-icon-box green"><Award size={20} /></div> Startup India Registered</div>
          {/* Duplicate for infinite seamless flow */}
          <div className="trust-item"><div className="trust-icon-box cyan"><ShieldCheck size={20} /></div> ISO 27001 Certified</div>
          <div className="trust-item"><div className="trust-icon-box gold"><Award size={20} /></div> ISO 9001:2015 Quality</div>
          <div className="trust-item"><div className="trust-icon-box"><HeartPulse size={20} /></div> HIPAA Compliant</div>
          <div className="trust-item"><div className="trust-icon-box green"><Cpu size={20} /></div> Dedicated Secure Servers</div>
          <div className="trust-item"><div className="trust-icon-box cyan"><Globe2 size={20} /></div> 150+ Global Clients</div>
          <div className="trust-item"><div className="trust-icon-box gold"><BarChart3 size={20} /></div> 200+ Projects Delivered</div>
          <div className="trust-item"><div className="trust-icon-box"><Users size={20} /></div> 200+ Professionals</div>
          <div className="trust-item"><div className="trust-icon-box green"><Award size={20} /></div> Startup India Registered</div>
        </div>
      </div>

      {/* ═══════ COMPREHENSIVE SERVICES SECTION ═══════ */}
      <section className="section-pad" id="services" style={{ background: '#f8faff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <div className="section-tag">Our Expertise</div>
            <h2 className="section-title">
              Comprehensive <span className="highlight">Services</span> We Offer
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              From full-stack IT systems to healthcare revenue cycle management, we cover every dimension of your enterprise outsourcing needs with 65+ specialized services.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {flagshipServices.map((srv, idx) => (
              <div
                key={idx}
                className="service-card"
                style={
                  srv.highlightBorder
                    ? {
                        border: '2px solid rgba(225, 29, 72, 0.35)',
                        boxShadow: '0 10px 30px rgba(225, 29, 72, 0.08)',
                      }
                    : {}
                }
              >
                {srv.badge && (
                  <div
                    style={{
                      display: 'inline-block',
                      background: srv.badgeBg,
                      color: '#ffffff',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '20px',
                      marginBottom: '14px',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      width: 'fit-content',
                    }}
                  >
                    <Sparkles size={11} style={{ display: 'inline', marginRight: '4px' }} />
                    {srv.badge}
                  </div>
                )}
                <div className="service-icon-wrap" style={{ background: srv.iconBg, color: srv.iconColor }}>
                  {srv.icon}
                </div>
                <h4>{srv.title}</h4>
                <p>{srv.desc}</p>
                <Link to={srv.link} className="service-link">
                  Explore Service <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn-primary-custom">
              <Sparkles size={16} /> View All 65+ Services Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ STRATEGIC VALUE POSITIONING SECTION ═══════ */}
      <section className="section-pad" id="why-us" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <div className="section-tag">Strategic Value Framework</div>
            <h2 className="section-title">
              Innovative Positioning <span className="highlight">Built For Scale</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Combining institutional data security, operational excellence, and agile offshore talent pods to drive measurable business transformation.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            <div className="whyus-card">
              <div className="icon"><ShieldCheck size={38} color="#1C2280" /></div>
              <h3>99.9<span>%</span></h3>
              <p>Security &amp; SLA Compliance (ISO 27001 &bull; HIPAA Compliant Ops)</p>
            </div>

            <div className="whyus-card">
              <div className="icon"><Clock size={38} color="#CC2228" /></div>
              <h3>24<span>/7</span></h3>
              <p>Continuous Global Delivery (Pune HQ, Bengaluru &amp; US Overlap)</p>
            </div>

            <div className="whyus-card">
              <div className="icon"><CircleDollarSign size={38} color="#10B981" /></div>
              <h3>45<span>%</span></h3>
              <p>Average Operational Cost Reduction vs Onshore In-House Teams</p>
            </div>

            <div className="whyus-card">
              <div className="icon"><Users size={38} color="#5BA8D4" /></div>
              <h3>150<span>+</span></h3>
              <p>Global Enterprise Clients Powered Across US, UK, EU &amp; APAC</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED PLATFORM: CAREtrixHRMS ═══════ */}
      <section
        className="section-pad"
        id="ai-platform"
        style={{
          background: 'linear-gradient(135deg, #080B1A 0%, #101538 60%, #1C2280 100%)',
          color: '#ffffff',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(225, 29, 72, 0.2)',
                  border: '1px solid rgba(225, 29, 72, 0.4)',
                  padding: '5px 14px',
                  borderRadius: '100px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#ff8585',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                <Sparkles size={13} /> Flagship AI Enterprise Platform
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
                CaretrixHRMS — Autonomous AI HRMS &amp; Payroll System
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7, marginBottom: '24px' }}>
                Engineered to replace fragmented workforce software. CaretrixHRMS automates multi-entity payroll calculations, biometric hardware sync, compliance tax filing, leave approvals, and employee lifecycle tracking with enterprise-grade security.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}>
                  <CheckCircle2 size={18} color="#10b981" /> One-Click Statutory Payroll (PF, ESI, TDS, Professional Tax)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}>
                  <CheckCircle2 size={18} color="#10b981" /> Biometric Fingerprint &amp; Face Recognition Cloud Sync
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}>
                  <CheckCircle2 size={18} color="#10b981" /> Employee Self-Service (ESS) Mobile Portal &amp; Tax Slips
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}>
                  <CheckCircle2 size={18} color="#10b981" /> AI Predictive Performance KPI &amp; Attrition Analytics
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="btn-accent-custom"
                  style={{ padding: '13px 28px' }}
                >
                  <Send size={15} /> Request Live Platform Demo
                </button>
                <Link
                  to="/services?cat=hrms"
                  className="btn-outline-custom"
                  style={{ background: 'transparent', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.4)' }}
                >
                  Platform Specifications &rarr;
                </Link>
              </div>
            </div>

            {/* Platform Mock Dashboard Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase' }}>CaretrixHRMS Cloud</div>
                  <strong style={{ fontSize: '16px', color: '#ffffff' }}>Enterprise Workforce Overview</strong>
                </div>
                <span style={{ background: '#10b981', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px' }}>
                  LIVE
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)' }}>Active Employees</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>1,480+</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.6)' }}>Payroll Accuracy</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#10b981', marginTop: '2px' }}>99.98%</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '14px', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Monthly Payroll Batch Processing</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>Ready (0 errors)</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #CC2228, #10b981)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CLIENT TESTIMONIALS SECTION ═══════ */}
      <section className="section-pad" style={{ background: '#f8faff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <div className="section-tag">Client Success Stories</div>
            <h2 className="section-title">
              Trusted by <span className="highlight">Global Leaders</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Read how our multidisciplinary technology delivery and specialized BPO pods drive measurable growth for our international partners.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="comment">
                "Caretrix transformed our medical billing backlog within 90 days. Their dedicated RCM pod reduced our denial rate from 14% to under 2.8%, dramatically boosting our monthly clinic cash collections."
              </p>
              <div className="reviewer">
                <div className="reviewer-icon">JD</div>
                <div>
                  <div className="reviewer-name">James Davis</div>
                  <div className="reviewer-title">VP Operations, Healthcare Group (Dallas, TX)</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="comment">
                "Their software engineering pod built and scaled our SaaS platform microservices seamlessly. Their engineers are top-tier, proactive, and perfectly aligned with our sprint cycles."
              </p>
              <div className="reviewer">
                <div className="reviewer-icon">SM</div>
                <div>
                  <div className="reviewer-name">Sarah Miller</div>
                  <div className="reviewer-title">Chief Technology Officer, FinTech Solutions (London, UK)</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="comment">
                "Caretrix's publishing and S1000D XML prepress team delivers unmatched speed and accuracy. They converted over 40,000 pages of academic journals into flawless ePUB3 and WCAG accessible formats."
              </p>
              <div className="reviewer">
                <div className="reviewer-icon">AK</div>
                <div>
                  <div className="reviewer-name">Alexander Krause</div>
                  <div className="reviewer-title">Managing Editor, Academic Publishing House (Munich, Germany)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ COMPREHENSIVE FAQ SECTION ═══════ */}
      <section className="section-pad" id="faq" style={{ background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <div className="section-tag">Frequently Asked Questions</div>
            <h2 className="section-title">
              Everything You Need <span className="highlight">To Know</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Clear answers to the most common questions regarding our outsourcing engagement models, compliance, and enterprise delivery standards.
            </p>
          </div>

          <div>
            {faqList.map((faq, idx) => {
              const isOpen = openFaq === `faq-${idx}`;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(`faq-${idx}`)}
                    className="faq-question"
                  >
                    <span>{faq.q}</span>
                    <div className="faq-icon">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-inner">{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ CONTACT MINI SECTION ═══════ */}
      <section className="section-pad" style={{ background: '#f8faff' }} id="contact-mini">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
            }}
          >
            {/* Left: Contact Info Card */}
            <div
              style={{
                background: 'var(--gradient-primary)',
                borderRadius: '20px',
                padding: '40px 32px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                  Let's Work Together
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '14.5px', marginBottom: '32px' }}>
                  Tell us about your project or operational requirements, and our solution architects will respond within 24 hours with a customized proposal.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 600 }}>
                        Direct Call (India / Global)
                      </div>
                      <a href="tel:+918308906690" style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>
                        +91-8308906690
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 600 }}>
                        Corporate Email
                      </div>
                      <a href="mailto:support@caretrixconsulting.com" style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>
                        support@caretrixconsulting.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 600 }}>
                        Operational Working Hours
                      </div>
                      <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '14px' }}>
                        Mon–Sat, 9:00 AM – 6:00 PM IST (24/7 Digital Hub)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '30px', fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.7)' }}>
                📍 Pune Headquarters &bull; Bengaluru Tech Hub &bull; Wyoming, USA
              </div>
            </div>

            {/* Right: Interactive Message Form */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '36px',
                boxShadow: '0 4px 20px rgba(28, 34, 128, 0.08)',
                border: '1px solid #e2e8f0',
              }}
            >
              <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Send Us a Message
              </h4>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
                Fill in the details below and our solution team will respond promptly.
              </p>

              <form onSubmit={handleContactSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '4px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your full name"
                      value={contactForm.fullName}
                      onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '4px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="your@company.com"
                      value={contactForm.emailAddr}
                      onChange={(e) => setContactForm({ ...contactForm, emailAddr: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '4px' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+91 XXXXX XXXXX"
                      value={contactForm.phoneNum}
                      onChange={(e) => setContactForm({ ...contactForm, phoneNum: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '4px' }}>
                      Service Required
                    </label>
                    <select
                      className="form-select"
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="HR & Payroll Software (CaretrixHRMS)">HR &amp; Payroll Software (CaretrixHRMS)</option>
                      <option value="IT & Software Solutions">IT &amp; Software Solutions</option>
                      <option value="Healthcare BPO & RCM">Healthcare BPO &amp; RCM</option>
                      <option value="Publishing Services">Publishing Services</option>
                      <option value="Real Estate & Title Services">Real Estate &amp; Title Services</option>
                      <option value="AI Data Annotation">AI Data Annotation</option>
                      <option value="Accounting & Finance">Accounting &amp; Finance</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Logistics Services">Logistics Services</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '4px' }}>
                    Your Message / Requirements *
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Tell us about your project scope, team size, or timeline..."
                    value={contactForm.msgText}
                    onChange={(e) => setContactForm({ ...contactForm, msgText: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="btn-accent-custom"
                  style={{ width: '100%', justifyContent: 'center', padding: '13px' }}
                >
                  <Send size={15} /> {formSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ READY TO TRANSFORM CTA BANNER ═══════ */}
      <div className="cta-banner">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div className="section-tag" style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.25)' }}>
            Start Today
          </div>
          <h2>Ready to Transform Your Business Operations?</h2>
          <p>
            Partner with an ISO 27001 certified global delivery leader. Connect with our solution specialists for a no-obligation consultation.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={onOpenModal}
              className="btn-cta-white"
            >
              <Send size={16} /> Start a Project With Us
            </button>
            <a
              href="tel:+918308906690"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                padding: '14px 28px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Phone size={16} /> +91-8308906690
            </a>
          </div>
        </div>
      </div>

      {/* Scoped CSS for Home */}
      <style>{`
        .hero-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 100px;
          background: #ffffff;
          border: 1px solid rgba(28, 34, 128, 0.09);
          font-size: 11.5px;
          font-weight: 600;
          color: #334155;
          transition: all 0.25s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }
        .hero-chip:hover {
          background: #0D0F2B;
          color: #ffffff !important;
          transform: translateY(-2px);
          border-color: transparent;
        }
        .stat-chip {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(28, 34, 128, 0.09);
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 4px 15px rgba(28, 34, 128, 0.05);
          text-align: left;
        }
        .stat-num {
          font-family: var(--font-heading);
          font-size: 1.55rem;
          font-weight: 900;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 2px;
        }
        .stat-num span {
          color: var(--accent);
        }
        .stat-lbl {
          font-size: 10.5px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .orbit-ring-1 {
          width: 320px;
          height: 320px;
          border: 1px dashed rgba(91, 168, 212, 0.35);
          animation: spinSlow 30s linear infinite;
        }
        .orbit-ring-2 {
          width: 420px;
          height: 420px;
          border: 1px dashed rgba(204, 34, 40, 0.22);
          animation: spinSlow 40s linear infinite reverse;
        }
        .orbit-ring-3 {
          width: 240px;
          height: 240px;
          border: 1px dashed rgba(16, 185, 129, 0.25);
          animation: spinSlow 20s linear infinite;
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .constellation-node {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(28, 34, 128, 0.12);
          border-radius: 12px;
          padding: 7px 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 24px rgba(13, 16, 53, 0.08);
          transition: all 0.3s ease;
          z-index: 12;
        }
        .constellation-node:hover {
          background: #ffffff;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 30px rgba(28, 34, 128, 0.18);
          border-color: #1C2280;
        }
        .node-title {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          white-space: nowrap;
        }
        .node-sub {
          font-size: 9px;
          font-weight: 500;
          color: #64748b;
          white-space: nowrap;
        }
        .node-top { top: 10px; }
        .node-top-right { top: 90px; right: 10px; }
        .node-bottom-right { bottom: 90px; right: 10px; }
        .node-bottom { bottom: 10px; }
        .node-bottom-left { bottom: 90px; left: 10px; }
        .node-top-left { top: 90px; left: 10px; }

        .testimonial-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          padding: 32px 28px;
          border: 1px solid var(--border-light);
          transition: var(--transition-slow);
          position: relative;
        }
        .testimonial-card:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-5px);
        }
        .testimonial-card .stars {
          color: #f59e0b;
          font-size: 16px;
          margin-bottom: 12px;
        }
        .testimonial-card .comment {
          font-size: 14.5px;
          color: var(--text-dark);
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 20px;
        }
        .testimonial-card .reviewer {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .testimonial-card .reviewer-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: #ffffff;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }
        .testimonial-card .reviewer-name {
          font-weight: 700;
          font-size: 14px;
          color: var(--text-dark);
        }
        .testimonial-card .reviewer-title {
          font-size: 12px;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
