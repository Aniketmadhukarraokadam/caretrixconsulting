import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  Phone,
  Mail,
  Send,
  ChevronDown,
  ChevronRight,
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
  HeartPulse,
  Receipt,
  CreditCard,
  Ban,
  RotateCcw,
  Search,
  Scale,
  Scroll,
  Building,
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
  Cloud,
  CloudCog,
  Headphones,
  PhoneCall,
  HeartHandshake,
  Leaf,
  Boxes,
  Database,
  TrendingUp,
  Activity,
  Layers,
  Award,
} from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSubDropdown, setActiveSubDropdown] = useState('sap');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesAccordion, setMobileServicesAccordion] = useState(false);
  const [mobileActiveSub, setMobileActiveSub] = useState(null);

  const navRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
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
    }, 220);
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

  // Structured Sub-Dropdown Data Dictionary
  const subDropdownData = {
    sap: {
      categoryKey: 'sap',
      title: 'SAP Enterprise Solutions',
      badge: 'ENTERPRISE ERP & S/4HANA',
      badgeColor: '#60A5FA',
      sla: 'Zero-downtime cutovers • 24/7 AMS follow-the-sun',
      desc: 'End-to-end SAP advisory, S/4HANA cloud migration, Central Finance implementation, and 24/7 AMS BASIS and functional support.',
      items: [
        {
          title: 'SAP S/4HANA Cloud Migration',
          desc: 'Greenfield & brownfield cutover, Central Finance, and automated business testing.',
          icon: <Boxes size={16} color="#38BDF8" />,
          cat: 'sap',
        },
        {
          title: '24/7 SAP AMS Managed Services',
          desc: 'Tier 1–3 incident resolution across FICO, MM, SD, PP with guaranteed <15m P1 SLA.',
          icon: <Database size={16} color="#60A5FA" />,
          cat: 'sap',
        },
        {
          title: 'SAP BASIS & Landscape Management',
          desc: 'Kernel updates, database tuning, cloud hosting (AWS/Azure), and system recovery.',
          icon: <Layers size={16} color="#818CF8" />,
          cat: 'sap',
        },
        {
          title: 'Custom ABAP on HANA & BTP',
          desc: 'CDS views, OData services, Fiori UX modernization, and cloud REST integrations.',
          icon: <FileCode2 size={16} color="#34D399" />,
          cat: 'sap',
        },
      ],
    },
    cloud: {
      categoryKey: 'cloud',
      title: 'Cloud Support & DevOps Operations',
      badge: '24/7 FOLLOW-THE-SUN NOC',
      badgeColor: '#38BDF8',
      sla: '99.98% uptime SLA • <10 min P1 alert acknowledgment',
      desc: 'Follow-the-sun cloud infrastructure management, FinOps cost control, multi-cloud sysadmin, and Kubernetes platform engineering.',
      items: [
        {
          title: '24/7 Cloud NOC & SysAdmin',
          desc: 'Live telemetry, metric alerts, and round-the-clock incident response across AWS/Azure/GCP.',
          icon: <Cloud size={16} color="#38BDF8" />,
          cat: 'cloud',
        },
        {
          title: 'DevOps & CI/CD Pipelines',
          desc: 'Zero-downtime deployments via GitHub Actions, GitLab, and automated canary releases.',
          icon: <CloudCog size={16} color="#60A5FA" />,
          cat: 'cloud',
        },
        {
          title: 'Kubernetes & Container Hardening',
          desc: 'EKS, AKS, GKE clusters, service mesh security, Helm charts, and GitOps workflows.',
          icon: <Layers size={16} color="#A78BFA" />,
          cat: 'cloud',
        },
        {
          title: 'Cloud FinOps & Cost Governance',
          desc: 'Resource right-sizing, auto-scaling policy, and sustained 30-45% cloud bill savings.',
          icon: <CircleDollarSign size={16} color="#34D399" />,
          cat: 'cloud',
        },
      ],
    },
    bpo: {
      categoryKey: 'bpo',
      title: 'BPO Services & Contact Center',
      badge: 'OMNICHANNEL OUTSOURCING',
      badgeColor: '#34D399',
      sla: '95%+ CSAT rating • <20s average speed to answer',
      desc: 'Dedicated customer experience pods, omnichannel voice and digital ticketing, tier 1-2 helpdesk, and high-throughput back-office transaction execution.',
      items: [
        {
          title: 'Omnichannel Contact Center BPO',
          desc: 'Inbound customer care, phone support, live chat, email, and WhatsApp messaging.',
          icon: <Headphones size={16} color="#34D399" />,
          cat: 'bpo',
        },
        {
          title: 'Technical Helpdesk (Tier 1–2)',
          desc: 'Software troubleshooting, user authentication, and multi-tier IT support workflows.',
          icon: <PhoneCall size={16} color="#38BDF8" />,
          cat: 'bpo',
        },
        {
          title: 'Back-Office Transaction Processing',
          desc: 'Claims adjudication, customer KYC verification, chargeback audits, and ledger reconciliations.',
          icon: <Receipt size={16} color="#FBBF24" />,
          cat: 'bpo',
        },
        {
          title: 'E-Commerce Operations BPO',
          desc: 'Seller onboarding, catalog enrichment, order processing, and returns handling.',
          icon: <ShoppingCart size={16} color="#F472B6" />,
          cat: 'bpo',
        },
      ],
    },
    kpo: {
      categoryKey: 'kpo',
      title: 'KPO & Research Services',
      badge: 'HIGH-VALUE KNOWLEDGE PODS',
      badgeColor: '#A78BFA',
      sla: 'CFA / MBA-led analysis • ISO 27001 encrypted data handling',
      desc: 'Domain-expert research pods delivering financial modeling, equity research, intellectual property landscaping, and legal process outsourcing (LPO).',
      items: [
        {
          title: 'Financial Modeling & Valuation',
          desc: '3-statement financial models, DCF/LBO equity valuations, and M&A due diligence.',
          icon: <TrendingUp size={16} color="#A78BFA" />,
          cat: 'kpo',
        },
        {
          title: 'Market & Industry Intelligence',
          desc: 'TAM/SAM/SOM market sizing, competitor benchmarking, and customized executive briefings.',
          icon: <LineChart size={16} color="#38BDF8" />,
          cat: 'kpo',
        },
        {
          title: 'Patent & IP Research',
          desc: 'Patent novelty search, prior-art landscaping, and freedom-to-operate (FTO) charting.',
          icon: <Scale size={16} color="#FBBF24" />,
          cat: 'kpo',
        },
        {
          title: 'Legal Process Outsourcing (LPO)',
          desc: 'Contract lifecycle redlining, lease abstraction summaries, and eDiscovery review.',
          icon: <FileText size={16} color="#34D399" />,
          cat: 'kpo',
        },
      ],
    },
    ai_automation: {
      categoryKey: 'ai_automation',
      title: 'AI Solutions & Data Annotation',
      badge: 'AGENTIC WORKFLOWS & CV',
      badgeColor: '#38BDF8',
      sla: '99.5% annotation consensus • <200ms model inference',
      desc: 'Agentic workflow automation, intelligent document processing (IDP), LLM fine-tuning, and high-precision computer vision data labeling.',
      items: [
        {
          title: 'Agentic AI Automations',
          desc: 'Autonomous multi-agent systems using LangChain, AutoGen & custom LLM orchestrators.',
          icon: <Bot size={16} color="#38BDF8" />,
          cat: 'ai_automation',
        },
        {
          title: 'Intelligent Document Processing (IDP)',
          desc: 'OCR pipelines extracting data from invoices, medical records, and legal agreements.',
          icon: <FileText size={16} color="#60A5FA" />,
          cat: 'ai_automation',
        },
        {
          title: 'Computer Vision 2D/3D Labeling',
          desc: 'Bounding boxes, polygon segmentation, and 3D LiDAR point clouds for ML models.',
          icon: <FileSpreadsheet size={16} color="#34D399" />,
          cat: 'data_annotation',
        },
        {
          title: 'LLM Fine-Tuning & RLHF',
          desc: 'Domain-specific model alignment, factuality grading, and red-teaming datasets.',
          icon: <Brain size={16} color="#A78BFA" />,
          cat: 'ai_automation',
        },
      ],
    },
    healthcare: {
      categoryKey: 'healthcare',
      title: 'Healthcare BPO & Revenue Cycle (RCM)',
      badge: 'HIPAA COMPLIANT & CERTIFIED',
      badgeColor: '#34D399',
      sla: '98%+ clean claim first-pass • <15 day AR turnaround',
      desc: 'End-to-end medical coding, claims billing, payment posting, denial appeals, and accounts receivable (AR) recovery under strict HIPAA compliance.',
      items: [
        {
          title: 'Medical Coding (ICD-10-CM / CPT)',
          desc: 'AAPC & AHIMA certified coders ensuring accurate code assignment and documentation audit.',
          icon: <HeartPulse size={16} color="#34D399" />,
          cat: 'healthcare',
        },
        {
          title: 'Claim Submission & Billing',
          desc: 'Electronic EDI claim clearinghouse validation and timely filing compliance.',
          icon: <Receipt size={16} color="#38BDF8" />,
          cat: 'healthcare',
        },
        {
          title: 'Payment Posting & Reconciliation',
          desc: 'ERA/EOB reconciliation, patient co-pay posting, and contractual adjustment tracking.',
          icon: <CreditCard size={16} color="#FBBF24" />,
          cat: 'healthcare',
        },
        {
          title: 'Denial Management & AR Recovery',
          desc: 'Root-cause denial investigation, resubmission appeals, and aged balance recovery.',
          icon: <RotateCcw size={16} color="#F472B6" />,
          cat: 'healthcare',
        },
      ],
    },
    customsoftware: {
      categoryKey: 'customsoftware',
      title: 'IT & Software Engineering',
      badge: 'DEDICATED OFFSHORE PODS',
      badgeColor: '#60A5FA',
      sla: 'Agile 2-week sprints • 100% time-zone aligned',
      desc: 'Custom software architecture, modern microservices, full-stack web and mobile apps, and dedicated offshore development pods (ODC).',
      items: [
        {
          title: 'Enterprise Software Engineering',
          desc: 'Full-stack cloud architectures built with React, Next.js, Node.js, Python, and Java.',
          icon: <Laptop size={16} color="#60A5FA" />,
          cat: 'customsoftware',
        },
        {
          title: 'API & Microservice Development',
          desc: 'High-throughput RESTful, GraphQL, and event-driven microservices on AWS/Azure.',
          icon: <FileCode2 size={16} color="#38BDF8" />,
          cat: 'customsoftware',
        },
        {
          title: 'Cross-Platform Mobile Apps',
          desc: 'Native iOS & Android performance using React Native and Flutter frameworks.',
          icon: <Tablet size={16} color="#A78BFA" />,
          cat: 'customsoftware',
        },
        {
          title: 'Global Staff Augmentation',
          desc: 'Dedicated full-stack developers, QA engineers, and architects for sprint velocity.',
          icon: <Users size={16} color="#34D399" />,
          cat: 'staffing',
        },
      ],
    },
    publishing: {
      categoryKey: 'publishing',
      title: 'STM Publishing & Prepress',
      badge: 'WCAG 2.1 & S1000D CERTIFIED',
      badgeColor: '#38BDF8',
      sla: 'Zero-defect composition • <24 hr journal turnaround',
      desc: 'Digital prepress, automated typesetting, ePUB3 conversion, S1000D XML authoring, and PDF digital accessibility remediation.',
      items: [
        {
          title: 'Typesetting & Journal Production',
          desc: 'High-volume composition in InDesign, 3B2, LaTeX, and XML-first automated workflows.',
          icon: <Printer size={16} color="#38BDF8" />,
          cat: 'publishing',
        },
        {
          title: 'eBook & ePUB3 Conversion',
          desc: 'Reflowable and fixed-layout ePUB3, Kindle KF8, and interactive media conversion.',
          icon: <Tablet size={16} color="#60A5FA" />,
          cat: 'publishing',
        },
        {
          title: 'S1000D & DITA XML Authoring',
          desc: 'Technical authoring, CSDB compilation, and IETP/IETM manuals for aerospace & defense.',
          icon: <FileSearch size={16} color="#A78BFA" />,
          cat: 'technicalpub',
        },
        {
          title: 'Section 508 & WCAG Accessibility',
          desc: 'PDF/UA document tagging, alt-text authoring, and screen-reader accessibility audits.',
          icon: <Accessibility size={16} color="#34D399" />,
          cat: 'publishing',
        },
      ],
    },
    csr: {
      categoryKey: 'csr',
      title: 'CSR Activity & ESG Sustainability',
      badge: 'SECTION 135 & BRSR COMPLIANT',
      badgeColor: '#34D399',
      sla: '100% statutory compliance • Verified social impact audit',
      desc: 'Orchestrating end-to-end corporate social responsibility initiatives, community engagement drives, carbon footprint accounting, and SEBI BRSR disclosures.',
      items: [
        {
          title: 'CSR Program Execution & Strategy',
          desc: 'Companies Act Section 135 project identification, NGO vetting, and fund governance.',
          icon: <HeartHandshake size={16} color="#34D399" />,
          cat: 'csr',
        },
        {
          title: 'Youth Skill Development & NAPS',
          desc: 'Apprenticeship incubation, technical skill training, and rural digital literacy drives.',
          icon: <Award size={16} color="#38BDF8" />,
          cat: 'csr',
        },
        {
          title: 'ESG & Carbon Footprint Audits',
          desc: 'Scope 1-3 greenhouse gas emissions accounting and decarbonization roadmaps.',
          icon: <Leaf size={16} color="#10B981" />,
          cat: 'csr',
        },
        {
          title: 'BRSR & Sustainability Disclosures',
          desc: 'SEBI-mandated Business Responsibility reporting and GRI standard filings.',
          icon: <FileText size={16} color="#60A5FA" />,
          cat: 'csr',
        },
      ],
    },
  };

  const activeSubData = subDropdownData[activeSubDropdown] || subDropdownData.sap;

  return (
    <div id="site-header" style={{ position: 'sticky', top: 0, zIndex: 1030, width: '100%' }}>
      {/* ── TOPBAR ────────────────────────────────────── */}
      <div
        className="topbar"
        style={{
          background: '#050A18',
          padding: '8px 0',
          fontSize: '12px',
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.75)',
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
                Caretrix Consulting
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
                href="tel:+917758088438"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.85)' }}
              >
                <Phone size={12} color="#0284C7" /> +91 77580 88438
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 600 }}>
                ● ISO 27001 Certified &bull; HIPAA Compliant &bull; 24/7 Global Hubs
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN DEEP OBSIDIAN SAPPHIRE NAVBAR ────────────────────────────────────── */}
      <nav
        ref={navRef}
        style={{
          background: isScrolled ? 'rgba(7, 12, 30, 0.95)' : 'rgba(10, 17, 40, 0.9)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(59, 130, 246, 0.22)',
          boxShadow: isScrolled
            ? '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(37, 99, 235, 0.15)'
            : '0 12px 35px rgba(0, 0, 0, 0.35)',
          width: '96%',
          maxWidth: '1740px',
          margin: isScrolled ? '6px auto 10px' : '10px auto 14px',
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
                height: '46px',
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

            {/* Interactive Services Sub-Dropdown Trigger */}
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

              {/* ── TWO-PANE MASTER-DETAIL SUB-DROPDOWN ── */}
              {servicesOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '1040px',
                    maxWidth: '94vw',
                    background: '#070C1E',
                    border: '1.5px solid rgba(59, 130, 246, 0.28)',
                    borderRadius: '20px',
                    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7), 0 0 40px rgba(37, 99, 235, 0.2)',
                    padding: '24px',
                    zIndex: 1050,
                    animation: 'dropFade 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                    color: '#ffffff',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '320px 1fr',
                      gap: '24px',
                      alignItems: 'stretch',
                    }}
                  >
                    {/* Left Pane: Sub-Dropdown Category Selector */}
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '14px',
                        padding: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        maxHeight: '480px',
                        overflowY: 'auto',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '10px',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '1.2px',
                          color: '#60A5FA',
                          padding: '6px 12px',
                          marginBottom: '4px',
                        }}
                      >
                        Select Service Capability
                      </div>

                      {Object.keys(subDropdownData).map((catKey) => {
                        const data = subDropdownData[catKey];
                        const isSelected = activeSubDropdown === catKey;
                        return (
                          <div
                            key={catKey}
                            onMouseEnter={() => setActiveSubDropdown(catKey)}
                            onClick={() => navigateToService(data.categoryKey)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '10px 14px',
                              borderRadius: '10px',
                              cursor: 'pointer',
                              background: isSelected
                                ? 'linear-gradient(90deg, rgba(37, 99, 235, 0.3) 0%, rgba(2, 132, 199, 0.12) 100%)'
                                : 'transparent',
                              border: isSelected
                                ? '1px solid rgba(96, 165, 250, 0.45)'
                                : '1px solid transparent',
                              transition: 'all 0.18s ease',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span
                                style={{
                                  width: '8px',
                                  height: '8px',
                                  borderRadius: '50%',
                                  background: isSelected ? '#38BDF8' : 'rgba(255, 255, 255, 0.3)',
                                  boxShadow: isSelected ? '0 0 8px #38BDF8' : 'none',
                                }}
                              />
                              <span
                                style={{
                                  fontSize: '13px',
                                  fontWeight: isSelected ? 700 : 500,
                                  color: isSelected ? '#ffffff' : '#CBD5E1',
                                }}
                              >
                                {data.title}
                              </span>
                            </div>
                            <ChevronRight
                              size={14}
                              color={isSelected ? '#38BDF8' : '#64748B'}
                              style={{
                                transform: isSelected ? 'translateX(2px)' : 'none',
                                transition: 'transform 0.18s ease',
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Right Pane: Dynamic Sub-Dropdown Details & Sub-Services */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '6px 4px',
                      }}
                    >
                      {/* Sub-Category Header */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span
                            style={{
                              fontSize: '10px',
                              fontWeight: 800,
                              textTransform: 'uppercase',
                              letterSpacing: '1px',
                              color: activeSubData.badgeColor,
                              background: 'rgba(255, 255, 255, 0.06)',
                              border: `1px solid ${activeSubData.badgeColor}40`,
                              padding: '3px 10px',
                              borderRadius: '100px',
                            }}
                          >
                            {activeSubData.badge}
                          </span>
                          <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600 }}>
                            {activeSubData.sla}
                          </span>
                        </div>

                        <h4
                          style={{
                            fontSize: '20px',
                            fontWeight: 800,
                            color: '#ffffff',
                            marginBottom: '6px',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {activeSubData.title}
                        </h4>
                        <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '20px' }}>
                          {activeSubData.desc}
                        </p>

                        {/* Sub-Services 2x2 Grid */}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '12px',
                            marginBottom: '22px',
                          }}
                        >
                          {activeSubData.items.map((item, idx) => (
                            <Link
                              key={idx}
                              to={`/services?cat=${item.cat}`}
                              onClick={closeDropdown}
                              className="sub-dropdown-card"
                              style={{
                                background: 'rgba(255, 255, 255, 0.04)',
                                border: '1px solid rgba(255, 255, 255, 0.09)',
                                borderRadius: '12px',
                                padding: '14px',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'flex-start',
                              }}
                            >
                              <div
                                style={{
                                  width: '32px',
                                  height: '32px',
                                  borderRadius: '8px',
                                  background: 'rgba(255, 255, 255, 0.06)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                }}
                              >
                                {item.icon}
                              </div>
                              <div>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '3px' }}>
                                  {item.title}
                                </div>
                                <div style={{ fontSize: '11.5px', color: '#94A3B8', lineHeight: 1.45 }}>
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Right Pane Footer Action Bar */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '14px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        <Link
                          to={`/services?cat=${activeSubData.categoryKey}`}
                          onClick={closeDropdown}
                          style={{
                            fontSize: '12.5px',
                            fontWeight: 700,
                            color: '#38BDF8',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          Explore All {activeSubData.title} <ArrowRight size={13} />
                        </Link>

                        <button
                          type="button"
                          onClick={() => {
                            closeDropdown();
                            onOpenModal();
                          }}
                          className="btn-sapphire"
                          style={{ padding: '8px 18px', fontSize: '12.5px' }}
                        >
                          Request B2B Quote
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Multi-Shore Universal Assurance Strip */}
                  <div
                    style={{
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      marginTop: '18px',
                      paddingTop: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px',
                      background: 'rgba(37, 99, 235, 0.08)',
                      padding: '10px 18px',
                      borderRadius: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#E2E8F0' }}>
                      <Sparkles size={14} color="#38BDF8" />
                      <span>
                        Global Delivery Model &bull; <strong style={{ color: '#60A5FA' }}>Pune HQ &bull; Bengaluru CoE &bull; Wyoming Hub</strong> &bull; 99.98% SLA
                      </span>
                    </div>

                    <Link
                      to="/services"
                      onClick={closeDropdown}
                      style={{
                        color: '#93C5FD',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      View Full 75+ Service Catalog <ArrowRight size={12} />
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
              to="/case-studies"
              className={({ isActive }) =>
                `nav-link-item ${isActive ? 'active' : ''}`
              }
            >
              Case Studies
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

          {/* Right Action Button & Mobile Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              type="button"
              onClick={onOpenModal}
              className="btn-sapphire d-desktop"
              style={{ padding: '11px 24px', fontSize: '13.5px' }}
            >
              <Send size={14} /> Request Proposal
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="d-mobile"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '8px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE DRAWER MENU ────────────────────────────────────── */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '16px 20px 24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              background: '#070C1E',
              borderRadius: '0 0 18px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              color: '#ffffff',
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
              <div
                onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
                className="mobile-nav-link"
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>Services (75+)</span>
                <ChevronDown
                  size={16}
                  style={{
                    transform: mobileServicesAccordion ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s',
                  }}
                />
              </div>

              {mobileServicesAccordion && (
                <div
                  style={{
                    padding: '10px 14px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    marginTop: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {Object.keys(subDropdownData).map((catKey) => {
                    const data = subDropdownData[catKey];
                    const isSubOpen = mobileActiveSub === catKey;
                    return (
                      <div key={catKey} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '6px' }}>
                        <div
                          onClick={() => setMobileActiveSub(isSubOpen ? null : catKey)}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '6px 4px',
                            cursor: 'pointer',
                            fontSize: '13.5px',
                            fontWeight: 700,
                            color: isSubOpen ? '#38BDF8' : '#E2E8F0',
                          }}
                        >
                          <span>&bull; {data.title}</span>
                          <ChevronDown size={13} style={{ transform: isSubOpen ? 'rotate(180deg)' : 'none' }} />
                        </div>
                        {isSubOpen && (
                          <div style={{ paddingLeft: '12px', paddingTop: '4px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {data.items.map((it, idx) => (
                              <Link
                                key={idx}
                                to={`/services?cat=${it.cat}`}
                                onClick={closeDropdown}
                                style={{ fontSize: '12px', color: '#94A3B8', textDecoration: 'none', display: 'block' }}
                              >
                                &ndash; {it.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <Link
                    to="/services"
                    onClick={closeDropdown}
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#38BDF8',
                      marginTop: '6px',
                      padding: '4px',
                    }}
                  >
                    View All 75+ Services &rarr;
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

            <Link to="/case-studies" onClick={closeDropdown} className="mobile-nav-link">
              Case Studies
            </Link>

            <Link to="/careers" onClick={closeDropdown} className="mobile-nav-link">
              Careers
            </Link>

            <Link to="/contact" onClick={closeDropdown} className="mobile-nav-link">
              Contact
            </Link>

            <div style={{ paddingTop: '10px' }}>
              <button
                type="button"
                onClick={() => {
                  closeDropdown();
                  onOpenModal();
                }}
                className="btn-sapphire"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Send size={14} /> Request Proposal
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
          color: #E2E8F0;
          padding: 8px 14px;
          border-radius: 100px;
          position: relative;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          border: 1px solid transparent;
        }
        .nav-link-item:hover {
          color: #38BDF8;
          background: rgba(37, 99, 235, 0.15);
          border-color: rgba(56, 189, 248, 0.25);
        }
        .nav-link-item.active {
          color: #ffffff;
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.45) 0%, rgba(37, 99, 235, 0.3) 100%);
          border-color: rgba(96, 165, 250, 0.4);
          box-shadow: 0 0 16px rgba(37, 99, 235, 0.2);
        }
        .sub-dropdown-card:hover {
          background: rgba(37, 99, 235, 0.12) !important;
          border-color: rgba(96, 165, 250, 0.35) !important;
          transform: translateY(-2px);
        }
        .mobile-nav-link {
          font-size: 15px;
          font-weight: 600;
          color: #F1F5F9;
          padding: 8px 0;
          display: block;
          text-decoration: none;
          transition: color 0.2s;
        }
        .mobile-nav-link:hover {
          color: #38BDF8;
        }
      `}</style>
    </div>
  );
}
