import React, { useState, useEffect } from 'react';
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
  Sparkles,
  Zap,
  Clock,
  CircleDollarSign,
  UserCog,
  ChevronRight,
  Plus,
  Minus,
  Activity,
  Layers,
  Check,
} from 'lucide-react';
import { useToast } from '../components/Toast';

export default function Home({ onOpenModal }) {
  const { addToast } = useToast();

  // Dynamic Typed Capability Text
  const typedWords = [
    'Intelligent AI Automations',
    'Enterprise Cloud Systems',
    'HIPAA Healthcare BPO',
    'STM Publishing Prepress',
    'Commercial Real Estate BPO',
    'Computer Vision Datasets',
    'Global Managed IT Pods',
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Cockpit active interactive tab
  const [activeCockpitTab, setActiveCockpitTab] = useState('ai');

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
          setTimeout(() => setIsDeleting(true), 1600);
          setTypingSpeed(45);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typedWords.length);
          setTypingSpeed(90);
        } else {
          setTypingSpeed(35);
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
    }, 700);
  };

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Marquee Cards Data (Updated to Sapphire & Cerulean Theme)
  const marqueeItems = [
    { tag: 'Enterprise BPO', icon: <Users size={18} color="#2563EB" />, title: 'Enterprise BPO & Operations', desc: 'Omnichannel customer support, back-office processing & transactional excellence.' },
    { tag: 'AI / ML', icon: <Brain size={18} color="#0284C7" />, title: 'AI Automations', desc: 'Agentic AI workflows, intelligent document processing (IDP) & task agents.' },
    { tag: 'Engineering', icon: <Laptop size={18} color="#1E3A8A" />, title: 'Custom Software', desc: 'Scalable cloud, web & mobile applications engineered for high throughput.' },
    { tag: 'Medical BPO', icon: <HeartPulse size={18} color="#10B981" />, title: 'Healthcare RCM', desc: 'End-to-end medical billing, ICD-10 coding & denial recovery maximizing ROI.' },
    { tag: 'Finance BPO', icon: <CircleDollarSign size={18} color="#6366F1" />, title: 'Accounting & Finance BPO', desc: 'Accounts payable/receivable, ledger reconciliation & financial reporting.' },
    { tag: 'Publishing', icon: <BookOpen size={18} color="#0EA5E9" />, title: 'Publishing Prepress', desc: 'ePUB3 conversion, typesetting, S1000D XML & WCAG 2.1 accessibility.' },
    { tag: 'Real Estate', icon: <Building size={18} color="#F59E0B" />, title: 'Real Estate BPO', desc: 'Lease abstraction, CAM audits & proactive property accounting workflows.' },
    { tag: 'AI Datasets', icon: <FileSpreadsheet size={18} color="#3B82F6" />, title: 'AI Data Annotation', desc: 'High-precision computer vision, LiDAR 3D & RLHF datasets for AI models.' },
    { tag: 'MarTech', icon: <Megaphone size={18} color="#6366F1" />, title: 'Digital Growth & SEO', desc: 'Data-driven SEO, dynamic PPC campaigns & high-conversion B2B pipelines.' },
    { tag: 'Staffing', icon: <Users size={18} color="#059669" />, title: 'Global Staff Augmentation', desc: 'Dedicated offshore pods & certified subject-matter specialists.' },
    { tag: 'Legal Escrow', icon: <FileText size={18} color="#0284C7" />, title: 'Title & Settlement', desc: 'Comprehensive title searches, policy typing & mortgage settlement support.' },
  ];

  // 10 Flagship Services Data
  const flagshipServices = [
    {
      icon: <Laptop size={28} />,
      iconBg: 'rgba(37, 99, 235, 0.08)',
      iconColor: '#2563EB',
      title: 'IT & Cloud Software Engineering',
      desc: 'Custom software architecture, full-stack web & mobile apps, cloud infrastructure (AWS/Azure), enterprise integrations, and AI-enabled business tools tailored to your operational workflows.',
      link: '/services?cat=customsoftware',
    },
    {
      icon: <Brain size={28} />,
      iconBg: 'rgba(30, 58, 138, 0.1)',
      iconColor: '#1E3A8A',
      title: 'AI Solutions, LLM Engineering & Data Annotation',
      badge: 'ENTERPRISE AI PODS',
      badgeBg: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
      desc: 'Specialized machine learning workflows, retrieval-augmented generation (RAG), automated document intelligence (IDP), and high-precision computer vision data labeling.',
      link: '/services?cat=ai_automation',
      highlightBorder: true,
    },
    {
      icon: <HeartPulse size={28} />,
      iconBg: 'rgba(16, 185, 129, 0.08)',
      iconColor: '#10B981',
      title: 'Healthcare BPO & Revenue Cycle (RCM)',
      desc: 'End-to-end medical coding (ICD-10-CM / CPT), claim billing, payment posting, denial management, prior authorization, and accounts receivable (AR) recovery.',
      link: '/services?cat=healthcare',
    },
    {
      icon: <BookOpen size={28} />,
      iconBg: 'rgba(2, 132, 199, 0.08)',
      iconColor: '#0284C7',
      title: 'STM Publishing & Prepress Services',
      desc: 'Digital prepress, typesetting, ePUB3 conversion, S1000D XML structuring, copy editing, and Section 508 / WCAG 2.1 AA PDF accessibility remediation.',
      link: '/services?cat=publishing',
    },
    {
      icon: <Building size={28} />,
      iconBg: 'rgba(245, 158, 11, 0.08)',
      iconColor: '#F59E0B',
      title: 'Real Estate & Commercial Lease BPO',
      desc: 'Commercial lease abstraction, CAM audit & reconciliation, property accounting, title search, settlement processing, and mortgage escrow support.',
      link: '/services?cat=realestate',
    },
    {
      icon: <FileSpreadsheet size={28} />,
      iconBg: 'rgba(99, 102, 241, 0.08)',
      iconColor: '#6366F1',
      title: 'AI Data Annotation & Computer Vision',
      desc: 'Precision image, video, audio, and text labeling for machine learning pipelines. 2D bounding boxes, polygon semantic segmentation, 3D LiDAR point clouds, and RLHF data.',
      link: '/services?cat=data_annotation',
    },
    {
      icon: <BarChart3 size={28} />,
      iconBg: 'rgba(37, 99, 235, 0.08)',
      iconColor: '#2563EB',
      title: 'Accounting & Financial Operations',
      desc: 'Offshore bookkeeping, general ledger management, accounts payable/receivable, financial statement preparation, and statutory tax compliance support.',
      link: '/services?cat=accounting',
    },
    {
      icon: <Truck size={28} />,
      iconBg: 'rgba(14, 165, 233, 0.08)',
      iconColor: '#0EA5E9',
      title: 'Logistics & Supply Chain Back-Office',
      desc: 'Freight data processing, shipping documentation audits, inventory tracking, bill of lading entry, and predictive supply chain analytics.',
      link: '/services?cat=logistics',
    },
    {
      icon: <Megaphone size={28} />,
      iconBg: 'rgba(30, 58, 138, 0.08)',
      iconColor: '#1E3A8A',
      title: 'Digital Marketing & Performance SEO',
      desc: 'Data-driven search engine optimization (SEO), high-ROI PPC campaigns, social media management, technical content marketing, and B2B lead generation.',
      link: '/services?cat=digitalmarketing',
    },
    {
      icon: <FileText size={28} />,
      iconBg: 'rgba(6, 182, 212, 0.08)',
      iconColor: '#06B6D4',
      title: 'Technical Publications & S1000D XML',
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
      q: 'What engagement models does Caretrix Consulting offer for enterprise clients?',
      a: 'We offer flexible, client-centric engagement models tailored to your operational scale: Dedicated Offshore Pods (fully managed teams integrated into your daily standups and toolchain), Time & Materials for agile development projects, and Fixed-SLA Managed Services for ongoing BPO operations such as Healthcare RCM, Publishing Prepress, and Customer Care.',
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
          background: 'radial-gradient(ellipse at 50% -10%, #e0e7ff 0%, #f0f7ff 38%, #ffffff 80%)',
          padding: '48px 0 35px',
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
              gap: '44px',
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
                  gap: '9px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                  padding: '7px 18px',
                  borderRadius: '100px',
                  marginBottom: '22px',
                  boxShadow: '0 4px 20px rgba(37, 99, 235, 0.08)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10B981',
                    boxShadow: '0 0 10px #10B981',
                    display: 'inline-block',
                    animation: 'pulseGlow 1.6s infinite alternate',
                  }}
                />
                <span style={{ fontSize: '11.5px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#1E3A8A' }}>
                  GLOBAL ENTERPRISE DELIVERY &bull; ISO 27001 CERTIFIED &bull; HIPAA COMPLIANT
                </span>
              </div>

              {/* Dynamic Typing Title */}
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1.15,
                  marginBottom: '20px',
                  letterSpacing: '-0.03em',
                }}
              >
                Architecting Next-Gen IT, AI Automations &amp; Global{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 35%, #0284C7 70%, #6366F1 100%)',
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
                    width: '3.5px',
                    height: '0.85em',
                    background: '#2563EB',
                    marginLeft: '4px',
                    verticalAlign: 'middle',
                    boxShadow: '0 0 8px #2563EB',
                  }}
                />
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: '17px',
                  color: '#475569',
                  lineHeight: 1.75,
                  marginBottom: '30px',
                  maxWidth: '650px',
                }}
              >
                We provide premier enterprise IT consulting, custom software engineering, intelligent AI workflows, and 24/7 global BPO services. Delivering SLA-backed excellence across Healthcare RCM, STM Publishing Prepress, Real Estate BPO, and Cloud Infrastructure for <strong>150+ international clients</strong> with <strong>200+ delivered engagements</strong>.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="btn-sapphire"
                  style={{ padding: '15px 32px', fontSize: '15px' }}
                >
                  <Send size={16} /> Request Executive Proposal
                </button>
                <Link
                  to="/about"
                  className="btn-glass"
                  style={{ padding: '15px 30px', fontSize: '15px' }}
                >
                  <Zap size={16} /> Explore Organization Profile
                </Link>
              </div>

              {/* Interactive Service Chips Bar */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(37, 99, 235, 0.12)',
                  borderRadius: '18px',
                  padding: '16px 20px',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#1E3A8A',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Quick Service Router</span>
                  <span style={{ fontSize: '10px', color: '#64748B' }}>Click to explore</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <Link to="/services?cat=ai_automation" className="hero-chip">
                    <Brain size={13} color="#0284C7" /> AI &amp; Automations
                  </Link>
                  <Link to="/services?cat=realestate" className="hero-chip">
                    <Building size={13} color="#F59E0B" /> Commercial Real Estate BPO
                  </Link>
                  <Link to="/services?cat=healthcare" className="hero-chip">
                    <HeartPulse size={13} color="#10B981" /> Healthcare RCM
                  </Link>
                  <Link to="/services?cat=customsoftware" className="hero-chip">
                    <Laptop size={13} color="#2563EB" /> Custom Software &amp; Cloud
                  </Link>
                  <Link to="/services?cat=publishing" className="hero-chip">
                    <BookOpen size={13} color="#6366F1" /> STM Publishing Prepress
                  </Link>
                  <Link to="/services?cat=staffing" className="hero-chip">
                    <Users size={13} color="#059669" /> 24/7 Global Staffing
                  </Link>
                </div>
              </div>

              {/* 5-Stat Chips */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                  gap: '12px',
                  marginTop: '26px',
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

            {/* Right Column: ALL-NEW INTERACTIVE 3D ENTERPRISE OPERATIONS COCKPIT */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '560px',
                  background: 'linear-gradient(160deg, #070C1E 0%, #0B1228 60%, #111A38 100%)',
                  borderRadius: '26px',
                  border: '1.5px solid rgba(255, 255, 255, 0.14)',
                  boxShadow: '0 25px 70px rgba(7, 12, 30, 0.4), 0 0 40px rgba(37, 99, 235, 0.15)',
                  padding: '30px',
                  color: '#ffffff',
                  overflow: 'hidden',
                }}
              >
                {/* Background Ambient Glow Grid */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '320px',
                    height: '320px',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Console Header Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '18px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)',
                      }}
                    >
                      <Activity size={18} color="#ffffff" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '13.5px', letterSpacing: '0.6px' }}>
                        CARETRIX COMMAND COCKPIT
                      </div>
                      <div style={{ fontSize: '10.5px', color: '#94A3B8' }}>
                        Autonomous Operations Telemetry &bull; v4.2
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#10B981',
                        boxShadow: '0 0 10px #10B981',
                        display: 'inline-block',
                        animation: 'pulseGlow 1.5s infinite alternate',
                      }}
                    />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#10B981', textTransform: 'uppercase' }}>
                      SYNCHRONIZED
                    </span>
                  </div>
                </div>

                {/* Global Hubs Grid Status */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '10px 12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ fontSize: '9.5px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>Pune Global HQ</div>
                    <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#60A5FA', marginTop: '3px' }}>24/7 BPO &bull; Active</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '10px 12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ fontSize: '9.5px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>Bengaluru CoE</div>
                    <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#34D399', marginTop: '3px' }}>AI Lab &bull; Online</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '10px 12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ fontSize: '9.5px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>Wyoming Hub</div>
                    <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#FCD34D', marginTop: '3px' }}>US Entity &bull; Active</div>
                  </div>
                </div>

                {/* Interactive Cockpit Capability Switcher */}
                <div style={{ marginBottom: '18px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                    Select Live Division Telemetry:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setActiveCockpitTab('ai')}
                      style={{
                        background: activeCockpitTab === 'ai' ? 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)' : 'rgba(255, 255, 255, 0.06)',
                        border: activeCockpitTab === 'ai' ? '1px solid #60A5FA' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        padding: '8px 10px',
                        borderRadius: '10px',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      AI &amp; Software
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCockpitTab('rcm')}
                      style={{
                        background: activeCockpitTab === 'rcm' ? 'linear-gradient(135deg, #059669 0%, #10B981 100%)' : 'rgba(255, 255, 255, 0.06)',
                        border: activeCockpitTab === 'rcm' ? '1px solid #34D399' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        padding: '8px 10px',
                        borderRadius: '10px',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Healthcare RCM
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCockpitTab('publishing')}
                      style={{
                        background: activeCockpitTab === 'publishing' ? 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' : 'rgba(255, 255, 255, 0.06)',
                        border: activeCockpitTab === 'publishing' ? '1px solid #A5B4FC' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        padding: '8px 10px',
                        borderRadius: '10px',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Publishing Prepress
                    </button>
                  </div>
                </div>

                {/* Dynamic Telemetry Display Card */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    padding: '18px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    marginBottom: '20px',
                  }}
                >
                  {activeCockpitTab === 'ai' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <div>
                          <strong style={{ fontSize: '14.5px', color: '#ffffff' }}>Agentic AI &amp; Cloud Systems</strong>
                          <div style={{ fontSize: '11px', color: '#94A3B8' }}>Autonomous task agents &amp; cloud microservices</div>
                        </div>
                        <span style={{ background: 'rgba(37, 99, 235, 0.3)', border: '1px solid #3B82F6', color: '#93C5FD', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                          SOC 2 &bull; ISO 27001
                        </span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Model Accuracy</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#38BDF8' }}>99.6%</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Throughput</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#34D399' }}>4.8x</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Pipeline</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#A5B4FC' }}>24/7 CI/CD</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="#10B981" /> Active: 3D LiDAR, Polygon Segmentation &amp; LLM Automation
                      </div>
                    </div>
                  )}

                  {activeCockpitTab === 'rcm' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <div>
                          <strong style={{ fontSize: '14.5px', color: '#ffffff' }}>Healthcare Revenue Cycle (RCM)</strong>
                          <div style={{ fontSize: '11px', color: '#94A3B8' }}>ICD-10-CM, Prior Auth &amp; AR Recovery</div>
                        </div>
                        <span style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', color: '#6EE7B7', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                          HIPAA COMPLIANT
                        </span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Clean Claims</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#34D399' }}>98.6%</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>AR Reduction</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#38BDF8' }}>&lt;15 Days</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Denial Appeal</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#FCD34D' }}>91.4%</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="#10B981" /> Active: Dedicated US Healthcare Pods (PST/EST Coverage)
                      </div>
                    </div>
                  )}

                  {activeCockpitTab === 'publishing' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <div>
                          <strong style={{ fontSize: '14.5px', color: '#ffffff' }}>STM Publishing Prepress CoE</strong>
                          <div style={{ fontSize: '11px', color: '#94A3B8' }}>S1000D XML, ePUB3 &amp; PDF Remediation</div>
                        </div>
                        <span style={{ background: 'rgba(99, 102, 241, 0.2)', border: '1px solid #6366F1', color: '#C7D2FE', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                          WCAG 2.1 AA
                        </span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>S1000D XML</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#A5B4FC' }}>100% Valid</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Typesetting</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#38BDF8' }}>Zero-Defect</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Turnaround</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#34D399' }}>&lt;24 Hrs</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="#10B981" /> Active: High-volume STM conversion &amp; Section 508 compliance
                      </div>
                    </div>
                  )}
                </div>

                {/* Guaranteed SLA Meters */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#94A3B8' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} color="#60A5FA" /> Incident SLA: <strong style={{ color: '#ffffff' }}>&lt;15 Mins</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={14} color="#10B981" /> Uptime SLA: <strong style={{ color: '#ffffff' }}>99.98%</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Award size={14} color="#FCD34D" /> ISO 27001 Certified
                  </div>
                </div>

                {/* Floating Satellite Badges */}
                <div className="satellite-pill satellite-1">
                  <Sparkles size={12} color="#38BDF8" /> 45% Operational Savings
                </div>
                <div className="satellite-pill satellite-2">
                  <ShieldCheck size={12} color="#34D399" /> Dedicated Security Pods
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── DUAL TRACK EDGE-TO-EDGE MARQUEE ────────────────────────────────────── */}
        <div className="hero-scroll-container full-bleed" style={{ marginTop: '35px' }}>
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
          {/* Infinite mirror items */}
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

      {/* ═══════ COMPREHENSIVE SERVICES SECTION (BENTO GRID) ═══════ */}
      <section className="section-pad" id="services" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '55px' }}>
            <div className="section-tag">Enterprise Capabilities</div>
            <h2 className="section-title">
              Comprehensive <span className="highlight">Services</span> We Deliver
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              From enterprise custom software architecture to HIPAA-compliant healthcare operations, we cover every dimension of your organization's outsourcing with 65+ specialized services.
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
                        border: '2px solid rgba(37, 99, 235, 0.4)',
                        background: 'linear-gradient(160deg, #ffffff 0%, #f0f7ff 100%)',
                        boxShadow: '0 12px 35px rgba(37, 99, 235, 0.12)',
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
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: '100px',
                      marginBottom: '16px',
                      letterSpacing: '0.6px',
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
                  Explore Service Specification <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/services" className="btn-sapphire">
              <Sparkles size={16} /> Explore All 65+ Specialized Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ STRATEGIC VALUE POSITIONING (WHY CARETRIX) ═══════ */}
      <section className="section-pad" id="why-us" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '55px' }}>
            <div className="section-tag">Strategic Value Framework</div>
            <h2 className="section-title">
              Engineered For Measurable <span className="highlight">Enterprise Scale</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Combining institutional data security, operational agility, and certified offshore talent pods to drive transformative business results.
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
              <div className="icon"><ShieldCheck size={38} color="#1E3A8A" /></div>
              <h3>99.9<span>%</span></h3>
              <p>Security &amp; SLA Compliance (ISO 27001 &bull; HIPAA Compliant Delivery)</p>
            </div>

            <div className="whyus-card">
              <div className="icon"><Clock size={38} color="#2563EB" /></div>
              <h3>24<span>/7</span></h3>
              <p>Continuous Global Delivery (Pune HQ, Bengaluru CoE &amp; US Overlap)</p>
            </div>

            <div className="whyus-card">
              <div className="icon"><CircleDollarSign size={38} color="#10B981" /></div>
              <h3>45<span>%</span></h3>
              <p>Average Operational Cost Reduction vs Onshore In-House Teams</p>
            </div>

            <div className="whyus-card">
              <div className="icon"><Users size={38} color="#0284C7" /></div>
              <h3>150<span>+</span></h3>
              <p>Global Enterprise Clients Empowered Across US, UK, EU &amp; APAC</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ENTERPRISE GLOBAL DELIVERY METHODOLOGY ═══════ */}
      <section
        className="section-pad"
        id="delivery-framework"
        style={{
          background: 'linear-gradient(135deg, #070C1E 0%, #0B1228 50%, #111A38 100%)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '44px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  background: 'rgba(37, 99, 235, 0.2)',
                  border: '1px solid rgba(37, 99, 235, 0.4)',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#93C5FD',
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                }}
              >
                <Sparkles size={13} /> Multi-Shore Delivery Framework
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.9rem)', fontWeight: 800, color: '#ffffff', marginBottom: '18px', letterSpacing: '-0.025em' }}>
                Precision Service Execution. Dedicated Pods. Guaranteed SLAs.
              </h2>
              <p style={{ fontSize: '16.5px', color: 'rgba(255, 255, 255, 0.82)', lineHeight: 1.75, marginBottom: '26px' }}>
                We deploy dedicated, client-tailored service pods combining senior technology consultants with high-throughput delivery teams across Pune and Bengaluru. 100% focused on your tech stack, business logic, and operational SLAs.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}>
                  <CheckCircle2 size={18} color="#10B981" /> Dedicated Offshore Pods Integrated Directly Into Client Standups
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}>
                  <CheckCircle2 size={18} color="#10B981" /> Stringent ISO 27001 Security, NDAs &amp; HIPAA Compliant Workstations
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}>
                  <CheckCircle2 size={18} color="#10B981" /> Multi-Tier Incident Escalation with &lt;15-Minute Response P1 Guarantee
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px' }}>
                  <CheckCircle2 size={18} color="#10B981" /> Transparent Weekly Sprint Telemetry &amp; Bi-Weekly Executive Reviews
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="btn-sapphire"
                  style={{ padding: '14px 30px' }}
                >
                  <Send size={15} /> Request Consultation &amp; SLA Deck
                </button>
                <Link
                  to="/about"
                  className="btn-glass"
                  style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)' }}
                >
                  Explore Delivery Model &rarr;
                </Link>
              </div>
            </div>

            {/* Service Delivery Telemetry Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase', fontWeight: 600 }}>Caretrix Global Delivery</div>
                  <strong style={{ fontSize: '17px', color: '#ffffff' }}>Active Client Pod Operations</strong>
                </div>
                <span style={{ background: '#10B981', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '3px 9px', borderRadius: '4px' }}>
                  24/7 ACTIVE
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '16px', borderRadius: '14px' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>Dedicated Specialists</div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>200+ Experts</div>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.07)', padding: '16px', borderRadius: '14px' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>First-Pass SLA Accuracy</div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#10B981', marginTop: '2px' }}>99.8%</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '16px', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Sprint Delivery &amp; SLA Compliance Index</span>
                  <span style={{ color: '#10B981', fontWeight: 700 }}>100% Target Met</span>
                </div>
                <div style={{ width: '100%', height: '7px', background: 'rgba(255, 255, 255, 0.12)', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #1E3A8A, #2563EB, #10B981)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CLIENT TESTIMONIALS SECTION ═══════ */}
      <section className="section-pad" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '55px' }}>
            <div className="section-tag">Client Success Stories</div>
            <h2 className="section-title">
              Trusted by <span className="highlight">Global Leaders</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Discover how our multidisciplinary technology delivery and specialized BPO pods drive measurable growth for our international partners.
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
        <div className="container" style={{ maxWidth: '920px' }}>
          <div className="text-center" style={{ marginBottom: '45px' }}>
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
      <section className="section-pad" style={{ background: '#F8FAFC' }} id="contact-mini">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {/* Left: Contact Info Card */}
            <div
              style={{
                background: 'var(--gradient-primary)',
                borderRadius: '24px',
                padding: '44px 34px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 50px rgba(30, 58, 138, 0.25)',
              }}
            >
              <div>
                <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  Let's Work Together
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '15px', marginBottom: '34px', lineHeight: 1.7 }}>
                  Tell us about your project or operational requirements, and our solution architects will respond within 24 hours with a customized proposal.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.16)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={19} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                        Direct Phone (India / Global)
                      </div>
                      <a href="tel:+918308906690" style={{ color: '#ffffff', fontWeight: 700, fontSize: '15.5px' }}>
                        +91-8308906690
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.16)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={19} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                        Corporate Email
                      </div>
                      <a href="mailto:support@caretrixconsulting.com" style={{ color: '#ffffff', fontWeight: 700, fontSize: '15.5px' }}>
                        support@caretrixconsulting.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.16)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Clock size={19} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                        Operational Working Hours
                      </div>
                      <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '14px' }}>
                        Mon–Sat, 9:00 AM – 6:00 PM IST (24/7 Digital Hub)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '32px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)' }}>
                📍 Pune Headquarters &bull; Bengaluru Tech Hub &bull; Wyoming, USA
              </div>
            </div>

            {/* Right: Interactive Message Form */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '38px',
                boxShadow: '0 4px 25px rgba(15, 23, 42, 0.06)',
                border: '1px solid #E2E8F0',
              }}
            >
              <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                Send Us a Message
              </h4>
              <p style={{ fontSize: '14.5px', color: '#64748B', marginBottom: '24px' }}>
                Fill in the details below and our solution team will respond promptly.
              </p>

              <form onSubmit={handleContactSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1E293B', marginBottom: '5px' }}>
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
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1E293B', marginBottom: '5px' }}>
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
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1E293B', marginBottom: '5px' }}>
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
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1E293B', marginBottom: '5px' }}>
                      Service Required
                    </label>
                    <select
                      className="form-select"
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="AI Solutions & Data Annotation">AI Solutions &amp; Data Annotation</option>
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

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1E293B', marginBottom: '5px' }}>
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
                  className="btn-sapphire"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
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
          <div className="section-tag" style={{ background: 'rgba(255, 255, 255, 0.16)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
            Start Your Transformation
          </div>
          <h2>Ready to Transform Your Business Operations?</h2>
          <p>
            Partner with an ISO 27001 certified global IT &amp; BPO delivery leader. Connect with our solution specialists for an immediate custom assessment.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={onOpenModal}
              className="btn-cta-white"
            >
              <Send size={16} /> Request Free Consultation
            </button>
            <a
              href="tel:+918308906690"
              style={{
                background: 'rgba(255, 255, 255, 0.16)',
                color: '#ffffff',
                border: '1.5px solid rgba(255, 255, 255, 0.35)',
                padding: '14px 30px',
                borderRadius: '100px',
                fontWeight: 700,
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s',
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
          padding: 7px 15px;
          border-radius: 100px;
          background: #ffffff;
          border: 1px solid rgba(37, 99, 235, 0.14);
          font-size: 11.5px;
          font-weight: 600;
          color: #334155;
          transition: all 0.25s ease;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03);
        }
        .hero-chip:hover {
          background: #0F172A;
          color: #ffffff !important;
          transform: translateY(-2px);
          border-color: transparent;
        }
        .stat-chip {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(37, 99, 235, 0.12);
          border-radius: 14px;
          padding: 13px 15px;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.06);
          text-align: left;
        }
        .stat-num {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--primary-dark);
          line-height: 1;
          margin-bottom: 2px;
        }
        .stat-num span {
          color: var(--primary-light);
        }
        .stat-lbl {
          font-size: 10.5px;
          font-weight: 600;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        .satellite-pill {
          position: absolute;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          pointer-events: none;
        }
        .satellite-1 {
          top: -12px;
          right: 20px;
          animation: floatSlow 4s ease-in-out infinite;
        }
        .satellite-2 {
          bottom: -12px;
          left: 20px;
          animation: floatSlow 5s ease-in-out infinite reverse;
        }

        .testimonial-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          padding: 34px 28px;
          border: 1px solid var(--border-light);
          transition: var(--transition);
          position: relative;
        }
        .testimonial-card:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-5px);
          border-color: rgba(37, 99, 235, 0.25);
        }
        .testimonial-card .stars {
          color: #F59E0B;
          font-size: 16px;
          margin-bottom: 12px;
        }
        .testimonial-card .comment {
          font-size: 14.5px;
          color: var(--text-dark);
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 22px;
        }
        .testimonial-card .reviewer {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .testimonial-card .reviewer-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: #ffffff;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14.5px;
        }
        .testimonial-card .reviewer-name {
          font-weight: 700;
          font-size: 14.5px;
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
