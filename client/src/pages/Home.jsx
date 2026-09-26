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
  ArrowUpRight,
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

  // Orchestrator active interactive division tab
  const [activeOrchestratorTab, setActiveOrchestratorTab] = useState('sap');

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
      a: 'Yes. Caretrix Consulting operates under verified ISO 27001:2013 information security standards and maintains strict HIPAA compliance protocols across all healthcare operations, medical data handling, and confidential enterprise processing.',
    },
    {
      q: 'Where are Caretrix Consulting delivery hubs and offices located?',
      a: 'We are headquartered in Pune (Vadgaon Budruk) with our specialized operations delivery center in Navi Mumbai (Vashi Station Complex). We serve 150+ international clients across the US, UK, Europe, Australia, and India.',
    },
  ];

  // 6 Interactive Holographic Orchestrator Divisions
  const orchestratorDivisions = [
    {
      id: 'sap',
      name: 'SAP S/4HANA & ERP',
      shortName: 'SAP S/4HANA',
      icon: <Cpu size={16} />,
      color: '#38BDF8',
      gradient: 'linear-gradient(135deg, #0284C7 0%, #1E3A8A 100%)',
      glow: 'rgba(56, 189, 248, 0.4)',
      badge: 'ENTERPRISE SAP ERP',
      title: 'SAP S/4HANA Migration & 24/7 BASIS AMS Pods',
      subtitle: 'Zero-downtime Greenfield & Brownfield cutovers with 24/7 dedicated BASIS L1-L3 SLA support.',
      pipeline: [
        { num: '01', title: 'Landscape Discovery', desc: 'Custom code & DB readiness analysis' },
        { num: '02', title: 'Cloud Cutover', desc: 'Automated zero-downtime migration' },
        { num: '03', title: 'Fiori Modernization', desc: 'Role-based UX & custom ABAP modules' },
        { num: '04', title: '24/7 AMS BASIS Pod', desc: '<15 min P1 incident response SLA' },
      ],
      metrics: [
        { val: '99.99%', lbl: 'Cloud Uptime SLA' },
        { val: '<15 Mins', lbl: 'P1 Incident Response' },
        { val: '100%', lbl: 'Data Integrity Audit' },
      ],
      stack: ['SAP S/4HANA', 'SAP BASIS', 'ABAP on HANA', 'SAP Fiori', 'HANA Cloud', 'Disaster Recovery'],
      cat: 'sap',
      modalService: 'SAP Enterprise Solutions',
    },
    {
      id: 'cloud',
      name: '24/7 Cloud NOC & DevOps',
      shortName: 'Cloud & DevOps',
      icon: <Cloud size={16} />,
      color: '#60A5FA',
      gradient: 'linear-gradient(135deg, #2563EB 0%, #0D9488 100%)',
      glow: 'rgba(96, 165, 250, 0.4)',
      badge: 'MULTI-CLOUD PLATFORMS',
      title: 'Multi-Cloud Infrastructure, Kubernetes & 24/7 Global NOC',
      subtitle: 'Enterprise AWS, Azure, and Google Cloud operations with automated Terraform IaC and 24/7 proactive monitoring.',
      pipeline: [
        { num: '01', title: 'Well-Architected Audit', desc: 'Security, cost & elasticity review' },
        { num: '02', title: 'Terraform IaC', desc: 'Declarative GitOps cloud provisioning' },
        { num: '03', title: 'Kubernetes Platform', desc: 'High-availability microservice clusters' },
        { num: '04', title: '24/7 Proactive NOC', desc: 'Real-time telemetry & Datadog alert pods' },
      ],
      metrics: [
        { val: '99.98%', lbl: 'System Availability' },
        { val: '<10 Mins', lbl: 'NOC Mean Response' },
        { val: '40%+', lbl: 'Cloud TCO Reduction' },
      ],
      stack: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Terraform', 'Datadog', 'Docker'],
      cat: 'cloud',
      modalService: 'Cloud Support & DevOps',
    },
    {
      id: 'ai',
      name: 'Agentic AI & Annotation',
      shortName: 'AI & Data Annotation',
      icon: <Brain size={16} />,
      color: '#A78BFA',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #1E3A8A 100%)',
      glow: 'rgba(167, 139, 250, 0.4)',
      badge: 'ENTERPRISE AI PODS',
      title: 'Agentic AI Workflows, LLM Engineering & Computer Vision',
      subtitle: 'Specialized enterprise AI task agents, RAG document intelligence, and high-precision 2D/3D LiDAR data annotation.',
      pipeline: [
        { num: '01', title: 'Data Ingestion Silo', desc: 'HIPAA & ISO 27001 secure data pipeline' },
        { num: '02', title: 'Agentic Workflows', desc: 'Autonomous LLM reasoning & tool routing' },
        { num: '03', title: 'Precision Labeling', desc: 'LiDAR, Polygon CV & RLHF human feedback' },
        { num: '04', title: 'Production Bench', desc: 'Continuous evaluation & model accuracy QA' },
      ],
      metrics: [
        { val: '99.6%', lbl: 'Annotation Accuracy' },
        { val: '4.8x', lbl: 'Throughput Acceleration' },
        { val: '24/7', lbl: 'Continuous AI Retraining' },
      ],
      stack: ['Autonomous Agents', 'LangChain', 'Vector DB', '3D LiDAR', 'Computer Vision', 'RLHF QA'],
      cat: 'ai_automation',
      modalService: 'AI Solutions & Data Annotation',
    },
    {
      id: 'bpo',
      name: 'Omnichannel BPO Pods',
      shortName: 'Omnichannel BPO',
      icon: <Headphones size={16} />,
      color: '#34D399',
      gradient: 'linear-gradient(135deg, #059669 0%, #0D9488 100%)',
      glow: 'rgba(52, 211, 153, 0.4)',
      badge: 'OMNICHANNEL OPERATIONS',
      title: 'Customer Experience, Tier 1-3 Desk & Back-Office BPO',
      subtitle: 'Multi-lingual omnichannel support (voice, email, chat) paired with high-volume transaction processing & claims audits.',
      pipeline: [
        { num: '01', title: 'Pod Workflow Mapping', desc: 'Standard operating procedures (SOP)' },
        { num: '02', title: 'Omnichannel Setup', desc: 'Telephony, Zendesk & CRM integration' },
        { num: '03', title: 'Quality Auditing', desc: '100% call & transaction compliance' },
        { num: '04', title: 'Rapid Pod Scale', desc: 'Onboarding extra talent within 48 hours' },
      ],
      metrics: [
        { val: '94.6%', lbl: 'First Contact Res.' },
        { val: '99.8%', lbl: 'SLA Adherence' },
        { val: '<48 Hrs', lbl: 'Pod Deployment Time' },
      ],
      stack: ['Voice Telephony', 'Zendesk', 'Salesforce CRM', 'Email & Chat', 'Claims Processing', 'Transaction BPO'],
      cat: 'bpo',
      modalService: 'Enterprise BPO Services',
    },
    {
      id: 'kpo',
      name: 'Strategic KPO & Valuation',
      shortName: 'Strategic KPO',
      icon: <BarChart3 size={16} />,
      color: '#FBBF24',
      gradient: 'linear-gradient(135deg, #D97706 0%, #4F46E5 100%)',
      glow: 'rgba(251, 191, 36, 0.4)',
      badge: 'QUANTITATIVE INTELLIGENCE',
      title: 'Financial Modeling, Equity Valuation & IP Legal Research',
      subtitle: 'High-value analytical modeling, DCF/LBO models, market landscape intelligence, and patent prior-art searches.',
      pipeline: [
        { num: '01', title: 'Scope Definition', desc: 'Financial thesis & hypothesis mapping' },
        { num: '02', title: 'Data Extraction', desc: 'SEC filings, Bloomberg & Capital IQ' },
        { num: '03', title: 'Valuation Modeling', desc: 'Dynamic DCF, Comps & sensitivity matrix' },
        { num: '04', title: 'Executive Report', desc: 'C-suite board-ready investment decks' },
      ],
      metrics: [
        { val: '100%', lbl: 'Formula Audit Quality' },
        { val: '3.2x', lbl: 'Research Turnaround' },
        { val: '<24 Hrs', lbl: 'Model Update SLA' },
      ],
      stack: ['Financial Modeling', 'DCF / LBO', 'Prior Art IP', 'CapIQ / Bloomberg', 'Market Intelligence', 'LPO'],
      cat: 'kpo',
      modalService: 'KPO & Research Services',
    },
    {
      id: 'rcm',
      name: 'Healthcare RCM & HIPAA',
      shortName: 'Healthcare RCM',
      icon: <HeartPulse size={16} />,
      color: '#F87171',
      gradient: 'linear-gradient(135deg, #E11D48 0%, #1E3A8A 100%)',
      glow: 'rgba(248, 113, 113, 0.4)',
      badge: 'HIPAA COMPLIANT RCM',
      title: 'Healthcare Revenue Cycle & Denial Recovery Pods',
      subtitle: 'Certified medical coding (ICD-10-CM / CPT), automated claim scrubbing, prior authorization, and aged AR recovery.',
      pipeline: [
        { num: '01', title: 'Prior Authorization', desc: 'Real-time payer eligibility checks' },
        { num: '02', title: 'Certified Coding', desc: 'AAPC / AHIMA certified ICD-10 coders' },
        { num: '03', title: 'Claim Scrubbing', desc: '98%+ first-pass clean acceptance' },
        { num: '04', title: 'Denial Recovery', desc: 'Rapid appeal cycle & AR monetization' },
      ],
      metrics: [
        { val: '98.6%', lbl: 'Clean Claim Rate' },
        { val: '<15 Days', lbl: 'Aged AR Days' },
        { val: '91.4%', lbl: 'Denial Appeals Won' },
      ],
      stack: ['ICD-10-CM', 'CPT Codes', 'Epic EHR', 'Cerner', 'HIPAA Certified', 'Clearinghouse EDI'],
      cat: 'healthcare',
      modalService: 'Healthcare BPO & RCM',
    },
  ];

  return (
    <div className="homepage-root" style={{ background: '#ffffff' }}>
      {/* ═══════ REVOLUTIONARY NEXT-GEN CYBERNETIC HERO SECTION ═══════ */}
      <section
        className="hero-cyber-root"
        style={{
          background: 'linear-gradient(180deg, #050814 0%, #070B1F 45%, #0B1228 100%)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          padding: '65px 0 35px',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Ambient Radial Flares & Lights */}
        <div
          style={{
            position: 'absolute',
            top: '-160px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '950px',
            height: '520px',
            background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.35) 0%, rgba(6, 182, 212, 0.16) 40%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '35%',
            left: '-120px',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            right: '-120px',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        {/* Subtle Cyber Matrix Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
            backgroundSize: '28px 28px, 112px 112px, 112px 112px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Top Live Operational Mesh Beacon */}
          <div style={{ textAlign: 'center', marginBottom: '22px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                padding: '7px 20px',
                borderRadius: '100px',
                boxShadow: '0 0 25px rgba(37, 99, 235, 0.25)',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 12px #10B981',
                  display: 'inline-block',
                  animation: 'pulseGlow 1.6s infinite alternate',
                }}
              />
              <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#93C5FD' }}>
                GLOBAL DELIVERY MESH ACTIVE
              </span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>&bull;</span>
              <span style={{ fontSize: '11px', color: '#CBD5E1', fontWeight: 600 }}>
                PUNE GLOBAL HQ &bull; NAVI MUMBAI DELIVERY CENTER
              </span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>&bull;</span>
              <span style={{ fontSize: '11px', color: '#34D399', fontWeight: 700 }}>
                ISO 27001 &bull; HIPAA CERTIFIED
              </span>
            </div>
          </div>

          {/* Monumental Hero Headline & Dynamic Scrambler */}
          <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto 28px' }}>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.12,
                marginBottom: '18px',
                letterSpacing: '-0.035em',
              }}
            >
              Autonomous Enterprise IT Systems, Cloud Architecture &amp; Global{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #60A5FA 45%, #A78BFA 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  textShadow: '0 0 35px rgba(56, 189, 248, 0.35)',
                }}
              >
                {currentText}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '3.5px',
                  height: '0.85em',
                  background: '#38BDF8',
                  marginLeft: '4px',
                  verticalAlign: 'middle',
                  boxShadow: '0 0 10px #38BDF8',
                }}
              />
            </h1>

            <p
              style={{
                fontSize: 'clamp(15.5px, 1.2vw, 18px)',
                color: '#94A3B8',
                lineHeight: 1.75,
                maxWidth: '800px',
                margin: '0 auto 30px',
                fontWeight: 400,
              }}
            >
              Orchestrating zero-downtime SAP S/4HANA migrations, 24/7 managed cloud NOC infrastructure, intelligent agentic AI workflows, and HIPAA-compliant healthcare BPO for <strong style={{ color: '#FFFFFF' }}>150+ international enterprise clients</strong> across the US, UK, Europe, and APAC.
            </p>

            {/* Action Center Buttons */}
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={onOpenModal}
                className="btn-cyber-primary"
              >
                <Send size={16} /> Request Executive Proposal
              </button>
              <Link
                to="/services"
                className="btn-cyber-ghost"
              >
                <Sparkles size={16} color="#38BDF8" /> Explore 75+ Service Directory
              </Link>
              <Link
                to="/hero"
                className="btn-cyber-ghost"
                style={{ borderColor: 'rgba(94, 14, 215, 0.5)', background: 'rgba(94, 14, 215, 0.15)', color: '#DDD6FE' }}
              >
                <ArrowUpRight size={16} color="#A78BFA" /> Full-Screen Video Hero
              </Link>
              <a
                href="tel:+917758088438"
                className="btn-cyber-hotline"
              >
                <Phone size={15} color="#34D399" /> +91 77580 88438
                <span style={{ fontSize: '10.5px', color: '#94A3B8', fontWeight: 500 }}>(24/7 Global Desk)</span>
              </a>
            </div>
          </div>

          {/* ═══════ THE HOLOGRAPHIC ENTERPRISE OPERATIONS ORCHESTRATOR ═══════ */}
          <div
            className="cyber-orchestrator-console"
            style={{
              background: 'rgba(8, 14, 34, 0.82)',
              border: '1.5px solid rgba(59, 130, 246, 0.28)',
              borderRadius: '24px',
              padding: '28px',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.65), 0 0 50px rgba(37, 99, 235, 0.15)',
              backdropFilter: 'blur(28px)',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '35px',
            }}
          >
            {/* Top Glowing Mesh Strip */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, #38BDF8 30%, #3B82F6 70%, transparent 100%)',
              }}
            />

            {/* Division Switcher Tab Rail */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '8px',
                marginBottom: '24px',
              }}
            >
              {orchestratorDivisions.map((div) => {
                const isActive = activeOrchestratorTab === div.id;
                return (
                  <button
                    key={div.id}
                    type="button"
                    onClick={() => setActiveOrchestratorTab(div.id)}
                    className={`orchestrator-tab-btn ${isActive ? 'active' : ''}`}
                    style={
                      isActive
                        ? {
                            background: div.gradient,
                            borderColor: div.color,
                            boxShadow: `0 0 20px ${div.glow}`,
                            color: '#ffffff',
                          }
                        : {}
                    }
                  >
                    <span style={{ color: isActive ? '#ffffff' : div.color, display: 'flex', alignItems: 'center' }}>
                      {div.icon}
                    </span>
                    <span>{div.shortName}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Division Holographic Console */}
            {(() => {
              const activeDiv =
                orchestratorDivisions.find((d) => d.id === activeOrchestratorTab) || orchestratorDivisions[0];
              return (
                <div key={activeDiv.id} style={{ animation: 'fadeIn 0.35s ease-out' }}>
                  {/* Division Header Banner */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '14px',
                      paddingBottom: '18px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      marginBottom: '20px',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <span
                          style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            color: activeDiv.color,
                            border: `1px solid ${activeDiv.color}40`,
                            fontSize: '10px',
                            fontWeight: 800,
                            letterSpacing: '0.8px',
                            textTransform: 'uppercase',
                            padding: '3px 9px',
                            borderRadius: '6px',
                          }}
                        >
                          {activeDiv.badge}
                        </span>
                        <span style={{ fontSize: '11.5px', color: '#94A3B8' }}>
                          Telemetry: <strong style={{ color: '#34D399' }}>Real-Time SLA Synchronized</strong>
                        </span>
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                        {activeDiv.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#94A3B8', margin: '4px 0 0', maxWidth: '720px' }}>
                        {activeDiv.subtitle}
                      </p>
                    </div>

                    <Link
                      to={`/services?cat=${activeDiv.cat}`}
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#E2E8F0',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        padding: '9px 16px',
                        borderRadius: '10px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '7px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Explore Full Specification <ChevronRight size={14} color={activeDiv.color} />
                    </Link>
                  </div>

                  {/* 4-Step Architecture Pipeline */}
                  <div style={{ marginBottom: '22px' }}>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        color: '#94A3B8',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Layers size={13} color={activeDiv.color} /> Execution Pipeline Blueprint:
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '12px',
                      }}
                    >
                      {activeDiv.pipeline.map((step, idx) => (
                        <div key={idx} className="pipeline-step-card">
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginBottom: '6px',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '10.5px',
                                fontWeight: 800,
                                color: activeDiv.color,
                                fontFamily: 'monospace',
                                background: 'rgba(255, 255, 255, 0.05)',
                                padding: '2px 7px',
                                borderRadius: '4px',
                              }}
                            >
                              PHASE {step.num}
                            </span>
                            <CheckCircle2 size={13} color="#10B981" />
                          </div>
                          <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#ffffff', marginBottom: '3px' }}>
                            {step.title}
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#94A3B8', lineHeight: 1.4 }}>
                            {step.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Telemetry Metrics & Deploy Pod Row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '16px',
                      alignItems: 'center',
                      background: 'rgba(0, 0, 0, 0.25)',
                      padding: '16px 18px',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    {/* Left: 3 KPI Gauges */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                      {activeDiv.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            padding: '10px 12px',
                            borderRadius: '10px',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                          }}
                        >
                          <div style={{ fontSize: '18px', fontWeight: 800, color: activeDiv.color, lineHeight: 1.1 }}>
                            {m.val}
                          </div>
                          <div style={{ fontSize: '10.5px', color: '#94A3B8', marginTop: '4px', fontWeight: 600 }}>
                            {m.lbl}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right: Stack Chips & Modal Trigger */}
                    <div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                        {activeDiv.stack.map((t, idx) => (
                          <span
                            key={idx}
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              color: '#CBD5E1',
                              fontSize: '11px',
                              fontWeight: 600,
                              padding: '2px 8px',
                              borderRadius: '6px',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={onOpenModal}
                        style={{
                          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '12.5px',
                          padding: '9px 18px',
                          borderRadius: '10px',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <Zap size={14} /> Deploy Dedicated {activeDiv.shortName} Pod &bull; &lt;48h Setup
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* ═══════ 4-PILLAR PERFORMANCE BENTO SHIELDS ═══════ */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <div className="hero-bento-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Globe2 size={22} color="#38BDF8" />
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  150<span>+</span>
                </div>
              </div>
              <div style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.4 }}>
                Global Enterprise Clients across US, UK, EU &amp; APAC
              </div>
            </div>

            <div className="hero-bento-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Layers size={22} color="#60A5FA" />
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  75<span>+</span>
                </div>
              </div>
              <div style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.4 }}>
                Specialized Enterprise IT, Cloud &amp; BPO Services
              </div>
            </div>

            <div className="hero-bento-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <ShieldCheck size={22} color="#10B981" />
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  99.98<span>%</span>
                </div>
              </div>
              <div style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.4 }}>
                Operational &amp; Uptime SLA Compliance Guarantee
              </div>
            </div>

            <div className="hero-bento-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <CircleDollarSign size={22} color="#FBBF24" />
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  45<span>%</span>
                </div>
              </div>
              <div style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.4 }}>
                Average Operational Cost Reduction vs Onshore Teams
              </div>
            </div>
          </div>
        </div>

        {/* ── DUAL TRACK EDGE-TO-EDGE MARQUEE ────────────────────────────────────── */}
        <div className="hero-scroll-container full-bleed" style={{ marginTop: '10px' }}>
          <div className="hero-scroll-track">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <div key={`m1-${idx}`} className="hero-card" style={{ background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                <div className="hero-tag">{item.tag}</div>
                <div className="service-icon">{item.icon}</div>
                <h5 style={{ color: '#ffffff' }}>{item.title}</h5>
                <p style={{ color: '#94A3B8' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="hero-scroll-track reverse">
            {marqueeItems.concat(marqueeItems).reverse().map((item, idx) => (
              <div key={`m2-${idx}`} className="hero-card" style={{ background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                <div className="hero-tag">{item.tag}</div>
                <div className="service-icon">{item.icon}</div>
                <h5 style={{ color: '#ffffff' }}>{item.title}</h5>
                <p style={{ color: '#94A3B8' }}>{item.desc}</p>
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
                      <a href="tel:+917758088438" style={{ color: '#ffffff', fontWeight: 700, fontSize: '15.5px' }}>
                        +91 77580 88438
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
              href="tel:+917758088438"
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
              <Phone size={16} /> +91 77580 88438
            </a>
          </div>
        </div>
      </div>

      {/* Scoped CSS for Home */}
      <style>{`
        /* Next-Gen Cybernetic Hero Styles */
        .btn-cyber-primary {
          background: linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #0284C7 100%);
          color: #ffffff !important;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 12px;
          border: 1px solid rgba(147, 197, 253, 0.4);
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4), 0 0 20px rgba(37, 99, 235, 0.2);
          display: inline-flex;
          align-items: center;
          gap: 9px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .btn-cyber-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(37, 99, 235, 0.6), 0 0 30px rgba(56, 189, 248, 0.4);
          border-color: #60A5FA;
        }

        .btn-cyber-ghost {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(14px);
          color: #E2E8F0 !important;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 26px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .btn-cyber-ghost:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(59, 130, 246, 0.5);
          color: #ffffff !important;
          transform: translateY(-2px);
        }

        .btn-cyber-hotline {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #A7F3D0 !important;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 20px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .btn-cyber-hotline:hover {
          background: rgba(16, 185, 129, 0.16);
          border-color: #10B981;
          transform: translateY(-2px);
        }

        /* Orchestrator Tab Buttons */
        .orchestrator-tab-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94A3B8;
          padding: 11px 14px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justifyContent: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: center;
        }
        .orchestrator-tab-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #E2E8F0;
          border-color: rgba(255, 255, 255, 0.16);
        }
        .orchestrator-tab-btn.active {
          color: #ffffff;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        /* Pipeline Step Cards */
        .pipeline-step-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          padding: 16px 14px;
          transition: all 0.25s ease;
          position: relative;
        }
        .pipeline-step-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        /* Metric Bento Cards */
        .hero-bento-card {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 18px;
          padding: 22px 24px;
          backdrop-filter: blur(14px);
          transition: all 0.25s ease;
        }
        .hero-bento-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(56, 189, 248, 0.35);
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
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
