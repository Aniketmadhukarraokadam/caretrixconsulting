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
  Cloud,
  Server,
  Headphones,
  Database,
  Leaf,
} from 'lucide-react';
import { useToast } from '../components/Toast';

export default function Home({ onOpenModal }) {
  const { addToast } = useToast();

  // Dynamic Typed Capability Text
  const typedWords = [
    'SAP S/4HANA Enterprise Solutions',
    '24/7 Managed Cloud Support & NOC',
    'Intelligent AI & LLM Automations',
    'Omnichannel BPO & Helpdesk Pods',
    'Strategic KPO & Equity Valuation',
    'HIPAA Healthcare RCM Operations',
    'STM Publishing & S1000D XML',
    'Corporate CSR & ESG Auditing',
    'Global Managed IT Offshore Pods',
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
    { tag: 'SAP Enterprise', icon: <Cpu size={18} color="#0284C7" />, title: 'SAP S/4HANA & AMS Support', desc: 'S/4HANA migrations, BASIS managed services, Fiori UX & custom ABAP modules.' },
    { tag: 'Cloud Support', icon: <Cloud size={18} color="#2563EB" />, title: '24/7 Managed Cloud & DevOps', desc: 'AWS, Azure, GCP infrastructure management, Kubernetes orchestration & 24/7 NOC.' },
    { tag: 'Omnichannel BPO', icon: <Headphones size={18} color="#059669" />, title: 'Customer Care & Helpdesk BPO', desc: 'Omnichannel support, Tier 1-3 technical helpdesk & back-office transaction pods.' },
    { tag: 'Strategic KPO', icon: <BarChart3 size={18} color="#6366F1" />, title: 'KPO & Financial Intelligence', desc: 'Equity valuation, financial modeling, market research & IP legal analytics.' },
    { tag: 'CSR & ESG', icon: <Leaf size={18} color="#10B981" />, title: 'Corporate CSR & ESG Auditing', desc: 'Section 135 CSR execution, carbon footprint audits & BRSR compliance reporting.' },
    { tag: 'Enterprise BPO', icon: <Users size={18} color="#2563EB" />, title: 'Enterprise Operations BPO', desc: 'Omnichannel customer support, back-office processing & transactional excellence.' },
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

  // Flagship Services Data
  const flagshipServices = [
    {
      icon: <Cpu size={28} />,
      iconBg: 'rgba(2, 132, 199, 0.1)',
      iconColor: '#0284C7',
      title: 'SAP S/4HANA Enterprise Migration & AMS Support',
      badge: 'SAP SPECIALIZATION',
      badgeBg: 'linear-gradient(135deg, #0284C7 0%, #1E3A8A 100%)',
      desc: 'End-to-end Greenfield/Brownfield SAP S/4HANA migration, 24/7 L1-L3 BASIS AMS support, Fiori UX modernization, and custom ABAP on HANA extensions.',
      link: '/services?cat=sap',
      highlightBorder: true,
    },
    {
      icon: <Cloud size={28} />,
      iconBg: 'rgba(37, 99, 235, 0.08)',
      iconColor: '#2563EB',
      title: '24/7 Managed Cloud Support & Infrastructure',
      badge: '24/7 GLOBAL NOC',
      badgeBg: 'linear-gradient(135deg, #2563EB 0%, #0D9488 100%)',
      desc: 'Multi-cloud administration across AWS, Azure, and Google Cloud. Kubernetes container orchestration, Infrastructure as Code (Terraform), and proactive DevOps monitoring.',
      link: '/services?cat=cloud',
    },
    {
      icon: <Headphones size={28} />,
      iconBg: 'rgba(5, 150, 105, 0.08)',
      iconColor: '#059669',
      title: 'Omnichannel Customer Care & Helpdesk BPO',
      desc: 'Multi-lingual customer support (Voice, Email, Chat, In-App), multi-tier technical helpdesk, back-office claims verification, and high-volume transaction processing.',
      link: '/services?cat=bpo',
    },
    {
      icon: <BarChart3 size={28} />,
      iconBg: 'rgba(99, 102, 241, 0.08)',
      iconColor: '#6366F1',
      title: 'Strategic KPO, Financial Research & Market Intelligence',
      desc: 'Equity research, financial DCF/LBO modeling, competitive landscape mapping, business intelligence, and patent / Intellectual Property (IP) search analytics.',
      link: '/services?cat=kpo',
    },
    {
      icon: <Leaf size={28} />,
      iconBg: 'rgba(16, 185, 129, 0.08)',
      iconColor: '#10B981',
      title: 'Corporate Social Responsibility (CSR) & ESG Sustainability',
      desc: 'End-to-end Section 135 CSR lifecycle execution, NGO due diligence, carbon footprint GHG auditing, and SEBI-aligned Business Responsibility and Sustainability Reporting (BRSR).',
      link: '/services?cat=csr',
    },
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
      desc: 'Specialized machine learning workflows, retrieval-augmented generation (RAG), automated document intelligence (IDP), and high-precision computer vision data labeling.',
      link: '/services?cat=ai_automation',
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
      q: 'What SAP consulting and AMS support services does Caretrix provide?',
      a: 'We offer full-lifecycle SAP services including Greenfield and Brownfield SAP S/4HANA migrations, 24/7 L1-L3 BASIS AMS managed support, Fiori UX modernization, custom ABAP on HANA module development, and database backup / recovery automation.',
    },
    {
      q: 'What is the distinction between BPO and KPO services at Caretrix?',
      a: 'Our Business Process Outsourcing (BPO) focuses on high-volume, process-driven operational workflows such as 24/7 omnichannel customer care, technical helpdesks, and transaction processing. Our Knowledge Process Outsourcing (KPO) provides high-value analytical expertise including equity research, financial valuation modeling, competitive intelligence, and patent / IP legal analytics.',
    },
    {
      q: 'How does Caretrix assist corporations with CSR activities and ESG compliance?',
      a: 'Caretrix provides turnkey Corporate Social Responsibility (CSR) execution aligned with Section 135 of the Companies Act, including NGO due diligence, education & healthcare community outreach, impact assessment, and SEBI Business Responsibility and Sustainability Reporting (BRSR) along with GHG Scope 1-3 carbon footprint auditing.',
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
                  <Link to="/services?cat=sap" className="hero-chip">
                    <Cpu size={13} color="#0284C7" /> SAP S/4HANA &amp; AMS
                  </Link>
                  <Link to="/services?cat=cloud" className="hero-chip">
                    <Cloud size={13} color="#2563EB" /> 24/7 Cloud NOC
                  </Link>
                  <Link to="/services?cat=bpo" className="hero-chip">
                    <Headphones size={13} color="#059669" /> Omnichannel BPO
                  </Link>
                  <Link to="/services?cat=kpo" className="hero-chip">
                    <BarChart3 size={13} color="#6366F1" /> Strategic KPO
                  </Link>
                  <Link to="/services?cat=csr" className="hero-chip">
                    <Leaf size={13} color="#10B981" /> Corporate CSR &amp; ESG
                  </Link>
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
                    <Laptop size={13} color="#2563EB" /> Custom Software
                  </Link>
                  <Link to="/services?cat=publishing" className="hero-chip">
                    <BookOpen size={13} color="#6366F1" /> STM Prepress
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
                  <div className="stat-num">75<span>+</span></div>
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
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    <button
                      type="button"
                      onClick={() => setActiveCockpitTab('ai')}
                      style={{
                        background: activeCockpitTab === 'ai' ? 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)' : 'rgba(255, 255, 255, 0.06)',
                        border: activeCockpitTab === 'ai' ? '1px solid #60A5FA' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '11px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      AI &amp; Software
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCockpitTab('sap')}
                      style={{
                        background: activeCockpitTab === 'sap' ? 'linear-gradient(135deg, #0284C7 0%, #1E3A8A 100%)' : 'rgba(255, 255, 255, 0.06)',
                        border: activeCockpitTab === 'sap' ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '11px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      SAP &amp; Cloud NOC
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCockpitTab('bpo')}
                      style={{
                        background: activeCockpitTab === 'bpo' ? 'linear-gradient(135deg, #0D9488 0%, #059669 100%)' : 'rgba(255, 255, 255, 0.06)',
                        border: activeCockpitTab === 'bpo' ? '1px solid #34D399' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '11px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      BPO &amp; KPO Pods
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCockpitTab('rcm')}
                      style={{
                        background: activeCockpitTab === 'rcm' ? 'linear-gradient(135deg, #059669 0%, #10B981 100%)' : 'rgba(255, 255, 255, 0.06)',
                        border: activeCockpitTab === 'rcm' ? '1px solid #34D399' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '11px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Healthcare RCM
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCockpitTab('csr')}
                      style={{
                        background: activeCockpitTab === 'csr' ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)' : 'rgba(255, 255, 255, 0.06)',
                        border: activeCockpitTab === 'csr' ? '1px solid #6EE7B7' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '11px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      CSR &amp; ESG
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

                  {activeCockpitTab === 'sap' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <div>
                          <strong style={{ fontSize: '14.5px', color: '#ffffff' }}>SAP S/4HANA &amp; 24/7 Cloud NOC</strong>
                          <div style={{ fontSize: '11px', color: '#94A3B8' }}>S/4HANA Cloud Migration, BASIS AMS &amp; DevOps</div>
                        </div>
                        <span style={{ background: 'rgba(2, 132, 199, 0.3)', border: '1px solid #0284C7', color: '#7DD3FC', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                          24/7 MANAGED
                        </span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Cloud Uptime</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#34D399' }}>99.99%</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Incident SLA</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#38BDF8' }}>&lt;15 Mins</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Migration Speed</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#A5B4FC' }}>Zero Downtime</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="#10B981" /> Active: AWS / Azure / GCP Infrastructure &amp; SAP BASIS L1-L3
                      </div>
                    </div>
                  )}

                  {activeCockpitTab === 'bpo' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <div>
                          <strong style={{ fontSize: '14.5px', color: '#ffffff' }}>Omnichannel BPO &amp; Strategic KPO</strong>
                          <div style={{ fontSize: '11px', color: '#94A3B8' }}>Helpdesk, Claims, Financial Valuation &amp; IP Research</div>
                        </div>
                        <span style={{ background: 'rgba(13, 148, 136, 0.3)', border: '1px solid #14B8A6', color: '#99F6E4', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                          SLA ASSURED
                        </span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>First Contact Res.</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#34D399' }}>94.6%</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>SLA Compliance</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#38BDF8' }}>99.8%</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Pod Deployment</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#FCD34D' }}>&lt;48 Hrs</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="#10B981" /> Active: 24/7 Multi-Lingual Helpdesk &amp; Quantitative Analytics
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

                  {activeCockpitTab === 'csr' && (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <div>
                          <strong style={{ fontSize: '14.5px', color: '#ffffff' }}>Corporate CSR &amp; ESG Sustainability</strong>
                          <div style={{ fontSize: '11px', color: '#94A3B8' }}>Section 135 Execution, Carbon Accounting &amp; BRSR</div>
                        </div>
                        <span style={{ background: 'rgba(16, 185, 129, 0.3)', border: '1px solid #10B981', color: '#A7F3D0', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                          SEBI BRSR COMPLIANT
                        </span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>BRSR Audit Ready</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#34D399' }}>100%</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Projects Audited</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#38BDF8' }}>50+</div>
                        </div>
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '8px' }}>
                          <div style={{ fontSize: '10px', color: '#94A3B8' }}>Carbon Offset</div>
                          <div style={{ fontSize: '18px', fontWeight: 800, color: '#FCD34D' }}>28,000+ Tn</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="#10B981" /> Active: Verified NGO Due Diligence &amp; GHG Protocol Scope 1-3 Audits
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
              From enterprise SAP S/4HANA transformations and 24/7 managed cloud support to HIPAA-compliant healthcare operations and omnichannel BPO, we cover every dimension of your organization's outsourcing with 75+ specialized services.
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
              <Sparkles size={16} /> Explore All 75+ Specialized Services
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
