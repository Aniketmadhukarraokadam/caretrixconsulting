import React, { useState } from 'react';
import {
  Cpu,
  HeartPulse,
  FileCheck2,
  Headphones,
  BarChart3,
  Briefcase,
  Building,
  BookOpen,
  Sparkles,
  Layers,
  Truck,
  FileText,
  Search,
  CheckCircle2,
  Send,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import HumanMotion8DStudio from '../components/HumanMotion8DStudio';
import { HaikeiLayeredWaves, HaikeiOrganicBlobs } from '../components/extensions/HaikeiBackgrounds';
import { AnimasterMagneticButton } from '../components/extensions/AnimasterLib';


export default function Services({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Services (65+)' },
    { id: 'sap', label: 'SAP S/4HANA & ERP' },
    { id: 'hrms', label: 'HRMS & AI Software' },
    { id: 'healthcare', label: 'Healthcare BPO / RCM' },
    { id: 'realestate', label: 'Real Estate & Title' },
    { id: 'publishing', label: 'STM Publishing' },
    { id: 'ai', label: 'AI & Data Annotation' },
    { id: 'software', label: 'Custom Software & ERP' },
    { id: 'marketing', label: 'Marketing Automation' },
    { id: 'accounting', label: 'Accounting & Payroll' },
    { id: 'logistics', label: 'Logistics BPO' },
    { id: 'techpub', label: 'Technical Publications' },
    { id: 'verification', label: 'Background Verification' },
    { id: 'bpo', label: '24/7 Global BPO' },
  ];

  const services = [
    {
      id: 'sap-s4hana-migration',
      cat: 'sap',
      badge: 'ENTERPRISE SAP PRACTICE',
      icon: <Layers size={32} color="#00a6c7" />,
      image: '/images/sap_cloud_mesh.jpg',
      title: 'SAP S/4HANA Transformation, Cloud Migration & Greenfield/Brownfield Deployments',
      desc: 'End-to-end enterprise SAP digital core transformations: SAP ECC 6.0 migration to SAP S/4HANA Cloud (Public & Private Edition), Central Finance (cFin) consolidation, automated code remediation, and business process re-engineering for global corporations.',
      features: [
        'Greenfield, Brownfield & Selective Data Transition (SDT) to SAP S/4HANA',
        'SAP Central Finance (cFin) Integration & Universal Journal (ACDOCA) Setup',
        'SAP Readiness Assessment, Custom Code Remediation & Dual-Maintenance',
        'SAP S/4HANA Embedded Analytics, Real-Time Financial Close & KPI Dashboards',
        'Cloud Infrastructure Deployment on AWS, Microsoft Azure & Google Cloud (GCP)',
      ],
      deliverables: 'Accelerated 4-6 month cutover roadmap, 65% faster financial close cycles, and 100% data fidelity.',
    },
    {
      id: 'sap-functional-modules',
      cat: 'sap',
      badge: 'SAP FUNCTIONAL EXCELLENCE',
      icon: <CheckCircle2 size={32} color="#1c2280" />,
      image: '/it_services.png',
      title: 'SAP Functional Consulting (FICO, MM, SD, PP, QM & SuccessFactors)',
      desc: 'Deep-domain SAP functional configuration and optimization: Order-to-Cash (O2C), Procure-to-Pay (P2P), Record-to-Report (R2R), Plan-to-Produce (P2P), and Hire-to-Retire (H2R) workflows aligned with global industry best practices.',
      features: [
        'SAP FICO: New General Ledger, Multi-Currency AP/AR, Asset Accounting & CO-PA',
        'SAP MM & Sourcing: Material Requirements Planning (MRP Live), Inventory & P2P',
        'SAP SD: Sales Order Processing, Pricing Procedure, Billing & Global Trade Services',
        'SAP PP & QM: Discrete/Repetitive Manufacturing, Shop Floor Control & Inspections',
        'SAP HCM & SuccessFactors: Employee Central, Global Payroll & Performance Management',
      ],
      deliverables: 'Comprehensive business blueprinting, automated workflow approval routing, and certified module consultants.',
    },
    {
      id: 'sap-btp-abap',
      cat: 'sap',
      badge: 'SAP TECHNICAL ARCHITECTURE',
      icon: <Cpu size={32} color="#5ba8d4" />,
      image: '/workforce_team.png',
      title: 'SAP BTP, ABAP on HANA & Fiori UI5 Cloud Engineering',
      desc: 'Modern cloud-native SAP extensibility on SAP Business Technology Platform (BTP): Core Data Services (CDS) Views, RESTful Application Programming (RAP), OData microservices, and consumer-grade SAP Fiori / SAPUI5 responsive applications.',
      features: [
        'SAP Business Technology Platform (BTP) Integration Suite & Cloud Foundry',
        'ABAP on HANA, Core Data Services (CDS) Views & Virtual Data Models (VDM)',
        'RESTful Application Programming (RAP) & Cloud Application Programming (CAP)',
        'Custom SAP Fiori / SAPUI5 Mobile-First Apps & Launchpad Personalization',
        'SAP Cloud Connector, Third-Party REST/GraphQL Integrations & Event Mesh',
      ],
      deliverables: 'Clean-core architecture, decoupled microservices, and 40% reduction in custom maintenance overhead.',
    },
    {
      id: 'sap-basis-ams',
      cat: 'sap',
      badge: '24/7 MANAGED SERVICES',
      icon: <ShieldCheck size={32} color="#10b981" />,
      image: '/global_delivery.png',
      title: 'SAP BASIS Administration, Security, GRC & 24/7 AMS Support',
      desc: 'Enterprise-grade SAP BASIS support, SAP HANA database tuning, high availability, disaster recovery failover, Support Package Stack (SPS) patching, and ITIL-aligned 24/7 L1-L3 Application Management Services (AMS).',
      features: [
        'SAP HANA In-Memory Database Administration, Backup/Recovery & Optimization',
        'SAP System Copy, OS/DB Cloud Migration & Homogeneous/Heterogeneous Refreshes',
        'SAP Security, Authorizations, GRC Access Control & Role Engineering Auditing',
        '24/7 Follow-The-Sun L1/L2/L3 Ticket Resolution & Incident Management',
        'Automated Testing, EarlyWatch Alert Analysis & Continuous SLA Optimization',
      ],
      deliverables: '99.98% SAP system uptime SLA, <15 minute critical P1 incident response, and proactive tuning.',
    },
    {
      id: 'hrms-software',
      cat: 'hrms',
      badge: 'PROPRIETARY AI PLATFORM',
      icon: <Cpu size={32} color="#e11d48" />,
      image: '/consulting_team.png',
      title: 'Enterprise HRMS & Payroll Software (vortexsofthrms)',
      desc: 'Autonomous cloud HRMS and payroll software engineered for modern enterprises: autonomous multi-tier salary calculation, statutory tax compliance (PF, ESIC, PT, TDS), biometric and RFID attendance sync, and predictive workforce analytics.',
      features: [
        'Autonomous Multi-Tier Salary, Incentive & Overtime Calculation Engine',
        'Biometric, Geo-Fence & RFID Real-Time Attendance Synchronization',
        'Automated Employee Onboarding & Digital Compliance Vault',
        'Statutory Tax Deductions & Automated Government Filing (PF, ESIC, TDS, PT)',
        'Employee Mobile Self-Service Portal & Predictive Attrition AI',
      ],
      deliverables: 'Instant cloud deployment, 99.99% payroll calculation accuracy, and zero compliance penalties.',
    },
    {
      id: 'health-rcm',
      cat: 'healthcare',
      badge: 'FLAGSHIP HEALTHCARE BPO',
      icon: <HeartPulse size={32} color="#0284c7" />,
      image: '/healthcare_ops.png',
      title: 'Healthcare BPO & Revenue Cycle Management (RCM)',
      desc: 'Full-lifecycle HIPAA-compliant revenue cycle management, CPC/CCS certified medical coding (ICD-10-CM, CPT-4, HCPCS Level II), billing, claims scrubbing, denial resolution, and AR recovery.',
      features: [
        'Medical Coding & Chart Audits (ICD-10-CM, CPT-4, HCPCS Level II)',
        'Electronic Claims Scrubbing & Submission (HIPAA EDI 837/835)',
        'Claims Denial Management, Root-Cause Auditing & Payer Appeals',
        'Insurance Eligibility Verification & Prior Authorization Fast-Track',
        'Payment Posting, Charge Entry Verification & AR Recovery Adjudication',
      ],
      deliverables: '24-48 hr claim turnaround, 98.5%+ first-pass acceptance rate, and 40% reduction in AR days.',
    },
    {
      id: 'real-estate-title',
      cat: 'realestate',
      badge: 'FLAGSHIP REAL ESTATE & TITLE',
      icon: <Building size={32} color="#10b981" />,
      image: '/finance_accounting.png',
      title: 'Real Estate, Title & Mortgage Settlement Services',
      desc: 'Commercial lease abstraction, CAM expense reconciliation audits, property accounting, nationwide title searches, commitment typing, policy preparation, and mortgage settlement support.',
      features: [
        'Commercial Lease Abstraction & Multi-Tenant Lease Administration',
        'Common Area Maintenance (CAM) Expense Reconciliation & Audit',
        'Title Search, Title Examination, Commitment Typing & Policy Preparation',
        'Property Accounting, Rent Roll Verification & Operating Expense Audits',
        'Mortgage Closing, Escrow Document Preparation & Settlement Support',
      ],
      deliverables: 'Strict 48-hour title turnaround, 99.8% lease abstraction accuracy, Yardi/MRI integration.',
    },
    {
      id: 'stm-publishing',
      cat: 'publishing',
      badge: 'FLAGSHIP PUBLISHING BPO',
      icon: <BookOpen size={32} color="#1c2280" />,
      image: '/consulting_team.png',
      title: 'STM Publishing, Media Prepress & Accessibility',
      desc: 'Academic journal typesetting, automated publishing prepress (vortexsoftpublishing), eBook conversion (ePUB3, fixed layout, Kindle), JATS/BITS XML conversion, and Section 508 / WCAG 2.1 AA accessibility tagging.',
      features: [
        'Academic Journal & STM Book Typesetting (LaTeX, InDesign, 3B2)',
        'ePUB3, Fixed Layout, Mobi, Kindle & XML Conversion',
        'Alt-Text Writing & Complex STEM Mathematical Description Authoring',
        'WCAG 2.1 AA / Section 508 / PDF/UA Accessibility Compliance Remediation',
        'Substantive Copyediting, Proofreading & Editorial Production Desks',
      ],
      deliverables: '5x faster turnaround with automated prepress, 100% WCAG compliance, zero XML validation errors.',
    },
    {
      id: 'ai-automation-data',
      cat: 'ai',
      badge: 'CORE ENTERPRISE DOMAIN',
      icon: <Sparkles size={32} color="#00f0ff" />,
      image: '/images/hero_3d_mesh.jpg',
      title: 'AI, Agentic Workflows & High-Precision Data Annotation',
      desc: 'Autonomous AI solutions, Agentic multi-step workflows, Intelligent Document Processing (IDP), and high-precision computer vision annotation (Image, Video, Audio, 3D LiDAR, NLP) to train production machine learning models.',
      features: [
        'Custom Agentic AI Workflows & Multi-Step Task Orchestration',
        'Intelligent Document Processing (IDP) with OCR & Multimodal NLP Parsing',
        'Image, Video, Audio & 3D LiDAR Point Cloud AI Data Annotation',
        'Robotic Process Automation (RPA) for High-Volume Repetitive Operations',
        'Private Enterprise LLMs, Retrieval-Augmented Generation (RAG) & Chatbots',
      ],
      deliverables: '99.9% data labeling accuracy, human-in-the-loop validation, and up to 70% processing cost reduction.',
    },
    {
      id: 'custom-software',
      cat: 'software',
      badge: 'CORE ENTERPRISE DOMAIN',
      icon: <Cpu size={32} color="#5ba8d4" />,
      image: '/it_services.png',
      title: 'Custom Software, Web Apps & Business Portals',
      desc: 'Bespoke full-stack web and mobile application engineering, enterprise CRM, ERP, and HRMS platforms, customer self-service portals, executive dashboards, and high-concurrency cloud microservices.',
      features: [
        'Custom Software & Web Application Development (React, Next.js, Node, Python)',
        'Enterprise CRM, ERP & Custom HRMS System Engineering',
        'Interactive Executive Dashboards & Real-Time Operational Analytics',
        'Customer Portals, Partner Hubs & Internal Employee Intranets',
        'Custom RESTful & GraphQL Microservice API Integrations',
      ],
      deliverables: 'Dedicated sprint pods, 99.95% cloud SLA uptime, automated CI/CD deployment pipelines.',
    },
    {
      id: 'erp-sap-solutions',
      cat: 'software',
      badge: 'ENTERPRISE DOMAIN',
      icon: <Layers size={32} color="#1c2280" />,
      image: '/consulting_team.png',
      title: 'ERP & SAP Enterprise Solutions',
      desc: 'Comprehensive ERP implementations, legacy modernization, SAP consulting, cloud data warehouse migrations, and enterprise business workflow automation systems.',
      features: [
        'ERP Implementation, Customization & Legacy System Modernization',
        'SAP Consulting, Module Configuration & Cloud Migration Services',
        'Enterprise Workflow Automation & Cross-Platform Systems Integration',
        'Database Optimization, Query Refactoring & High-Volume Data Warehousing',
      ],
      deliverables: 'Zero-disruption system cutover, end-to-end user training, and 24/7 post-deployment support.',
    },
    {
      id: 'marketing-automation',
      cat: 'marketing',
      badge: 'ENTERPRISE SERVICE',
      icon: <BarChart3 size={32} color="#ec4899" />,
      image: '/images/martech_3d_engine.jpg',
      title: 'Digital Marketing, MarTech & 8D Motion Video',
      desc: 'Automated B2B lead generation (Vortexreach), CRM marketing funnels, dynamic multi-channel email campaign sequences, data-driven SEO, PPC campaign management, and conversion analytics.',
      features: [
        'Automated B2B Lead Generation & Multi-Channel Prospect Sequencing',
        'CRM Marketing Automation & Dynamic Drip Email Workflows',
        'Search Engine Optimization (SEO) & High-ROI Pay-Per-Click (PPC) Management',
        'Customer Journey Funnel Tracking & Marketing Revenue Attribution',
        'E-Commerce Catalog Enrichment & Marketplace Optimization',
      ],
      deliverables: 'Consistent 3x-5x pipeline growth, real-time ROI dashboards, lower customer acquisition cost.',
    },
    {
      id: 'accounting-finance',
      cat: 'accounting',
      badge: 'ENTERPRISE SERVICE',
      icon: <FileCheck2 size={32} color="#8b5cf6" />,
      image: '/finance_accounting.png',
      title: 'Accounting, Finance & Payroll BPO',
      desc: 'End-to-end corporate bookkeeping, multi-currency ledger setup, autonomous payroll processing, statutory tax compliance, accounts payable/receivable reconciliation, and financial audit readiness.',
      features: [
        'Full-Cycle Bookkeeping & Cloud Ledger Setup (QuickBooks, Xero, NetSuite)',
        'Autonomous Multi-Tier Payroll Calculation & Statutory Remittances',
        'Accounts Payable (AP) Invoice Matching & Accounts Receivable (AR) Collections',
        'Monthly Bank, Merchant & Credit Card Ledger Reconciliations',
        'Corporate Tax Preparation, Financial Reporting & Audit Dossiers',
      ],
      deliverables: 'Audit-ready monthly financials by the 5th of each month, 100% statutory compliance.',
    },
    {
      id: 'logistics-supply-chain',
      cat: 'logistics',
      badge: 'ENTERPRISE SERVICE',
      icon: <Truck size={32} color="#ec4899" />,
      image: '/global_delivery.png',
      title: 'Logistics & Supply Chain Operations',
      desc: 'Back-office freight support, Bill of Lading (BOL) verification, rate auditing, waybill entry, inventory warehouse tracking, dispatch coordination, and shipping logistics analytics.',
      features: [
        'Bill of Lading (BOL) Processing, Data Extraction & Discrepancy Audits',
        'Freight Rate Auditing, Carrier Invoice Verification & Payment Release',
        'Inventory Tagging, SKU Tracking & Warehouse Dispatch Coordination',
        'Carrier Onboarding, Driver Compliance Checks & Fleet Tracking Support',
        'Supply Chain Logistics Performance & Turnaround Analytics',
      ],
      deliverables: '99.7% waybill entry accuracy, rapid dispatch coordination, and reduced freight leakage.',
    },
    {
      id: 'tech-publications',
      cat: 'techpub',
      badge: 'DEFENSE & AEROSPACE',
      icon: <FileText size={32} color="#cc2228" />,
      image: '/workforce_team.png',
      title: 'Technical Publications & S1000D / DITA XML',
      desc: 'High-precision technical writing, S1000D and DITA XML modular conversion, Illustrated Parts Catalogs (IPC), equipment maintenance manuals, and multilingual technical documentation for aerospace and industrial defense.',
      features: [
        'Technical Manual Authoring, Operator Handbooks & Maintenance Guides',
        'S1000D Issue 4.1/4.2 & DITA XML Modular Data Module Conversion',
        'Illustrated Parts Catalogs (IPC) & 2D/3D Technical Schematic Illustration',
        'Multi-lingual Technical Translation & Regulatory Defense Localization',
      ],
      deliverables: '100% specification compliance with S1000D / ATA iSpec 2200 standards.',
    },
    {
      id: 'bgv-compliance',
      cat: 'verification',
      badge: 'COMPLIANCE & INTEGRITY',
      icon: <ShieldCheck size={32} color="#10b981" />,
      image: '/verification_services.png',
      title: 'Employee Background Verification (BGV) & Compliance Screening',
      desc: 'Institutional-grade candidate background vetting: previous employment audits, highest education credentials, criminal court records across district and high courts, and geo-tagged physical address checks.',
      features: [
        'Previous Employment & Compensation History Verification',
        'University Degree & Professional Accreditation Authentication',
        'Civil & Criminal Court Record Screening Across National Judicial Records',
        'Physical Address Verification with Geo-Tagged Photographic Evidence',
        'Global Sanctions, AML Watchlists & Politically Exposed Persons (PEP) Checks',
      ],
      deliverables: 'Encrypted digital BGV dossier delivered within 3-4 business days with 99.9% accuracy.',
    },
    {
      id: 'bpo-customer-pods',
      cat: 'bpo',
      badge: '24/7 GLOBAL DELIVERY',
      icon: <Headphones size={32} color="#6366f1" />,
      image: '/bpo_outsourcing.png',
      title: '24/7 Global BPO & Omnichannel Customer Pods',
      desc: 'Round-the-clock customer support pods operating in rotational shifts: multilingual inbound customer service, technical support helpdesk, outbound tele-surveys, and omnichannel chat, email, and social media moderation.',
      features: [
        'Inbound Customer Service, Billing Support & Helpdesk Operations',
        'Live Chat, Email Ticketing & Social Channel Resolution (Zendesk, Freshdesk)',
        'Outbound Tele-Surveys, Appointment Setting & Customer Retention',
        'Conversational AI Integration with Human Fallback Escalation',
        'Quality Assurance (QA) Monitoring & CSAT Benchmark Optimization',
      ],
      deliverables: 'First Response Time < 45 seconds, 92%+ CSAT rating, and 24/7/365 follow-the-sun uptime.',
    },
  ];

  const filteredServices = services.filter((srv) => {
    const matchCat = activeFilter === 'all' || srv.cat === activeFilter;
    const matchSearch =
      !searchQuery ||
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow-white">Comprehensive 65+ Offerings</span>
          <h1>Full-Spectrum Global IT &amp; BPO Solutions</h1>
          <p>
            From proprietary enterprise AI platforms and Healthcare RCM to STM Publishing prepress, Real Estate BPO, and custom software engineering — explore our complete operational suite.
          </p>
        </div>
      </section>

      {/* Strategic Framework Pill Strip */}
      <section style={{ background: 'rgba(8, 16, 32, 0.9)', padding: '1.75rem 0', borderBottom: '1px solid rgba(0, 240, 255, 0.18)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0', fontWeight: 600 }}>
              <ShieldCheck size={18} color="#10b981" /> ISO 27001:2013 &amp; ISO 9001 Certified
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0', fontWeight: 600 }}>
              <HeartPulse size={18} color="#00f0ff" /> HIPAA Compliant Healthcare Delivery
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0', fontWeight: 600 }}>
              <Zap size={18} color="#a855f7" /> Proprietary AI Software Platforms
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0', fontWeight: 600 }}>
              <Building size={18} color="#f59e0b" /> Pune, Bengaluru &amp; US Delivery Centers
            </div>
          </div>
        </div>
      </section>

      {/* 3D 8D Real-Human Video Studio Demonstration */}
      <HumanMotion8DStudio onOpenModal={onOpenModal} />

      {/* Search & Category Filter Bar */}
      <section
        style={{
          background: 'rgba(6, 14, 30, 0.96)',
          backdropFilter: 'blur(24px)',
          padding: '1.5rem 0',
          borderBottom: '1px solid rgba(0, 240, 255, 0.25)',
          position: 'sticky',
          top: '76px',
          zIndex: 90,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', maxWidth: '520px' }}>
              <Search size={18} color="#00f0ff" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search across all 65+ services (e.g. S1000D, RCM, Lease Abstraction, HRMS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control"
                style={{
                  paddingLeft: '2.6rem',
                  height: '44px',
                  fontSize: '0.9rem',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  color: '#ffffff',
                  borderRadius: '12px',
                }}
              />
            </div>

            {/* Horizontal Filter Pills */}
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                overflowX: 'auto',
                paddingBottom: '0.4rem',
                whiteSpace: 'nowrap',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  style={{
                    padding: '0.55rem 1.1rem',
                    borderRadius: '20px',
                    border: activeFilter === cat.id ? '1.5px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.15)',
                    background: activeFilter === cat.id ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: activeFilter === cat.id ? '#00f0ff' : '#cbd5e1',
                    fontWeight: 600,
                    fontSize: '0.84rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: activeFilter === cat.id ? '0 0 15px rgba(0, 240, 255, 0.3)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="section-py" style={{ background: '#030712' }}>
        <div className="container-fluid">
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.92rem', color: '#94a3b8', fontWeight: 600 }}>
              Showing <strong style={{ color: '#00f0ff' }}>{filteredServices.length}</strong> enterprise service suites &amp; delivery frameworks
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '2.5rem',
                  alignItems: 'center',
                  padding: '2.5rem',
                  background: 'rgba(11, 24, 46, 0.75)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  borderRadius: '22px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div
                      style={{
                        background: 'rgba(0, 240, 255, 0.12)',
                        border: '1px solid rgba(0, 240, 255, 0.3)',
                        padding: '12px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {srv.icon}
                    </div>
                    <div>
                      <span
                        style={{
                          background: srv.cat === 'hrms' ? '#e11d48' : srv.cat === 'sap' ? '#00f0ff' : 'rgba(59, 130, 246, 0.3)',
                          color: srv.cat === 'sap' ? '#030712' : '#ffffff',
                          padding: '3px 10px',
                          borderRadius: '4px',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          letterSpacing: '0.5px',
                        }}
                      >
                        {srv.badge}
                      </span>
                      <h2 style={{ fontSize: '1.55rem', marginTop: '6px', color: '#ffffff' }}>{srv.title}</h2>
                    </div>
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                    {srv.desc}
                  </p>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <strong style={{ display: 'block', fontSize: '0.92rem', marginBottom: '0.6rem', color: '#00f0ff' }}>
                      Key Capabilities &amp; SLA Framework:
                    </strong>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem' }}>
                      {srv.features.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                          <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span style={{ fontSize: '0.86rem', color: '#e2e8f0' }}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      background: 'rgba(0, 240, 255, 0.08)',
                      padding: '0.9rem 1.25rem',
                      borderRadius: '10px',
                      borderLeft: '4px solid #00f0ff',
                      marginBottom: '1.75rem',
                    }}
                  >
                    <span style={{ fontSize: '0.86rem', color: '#cbd5e1' }}>
                      <strong style={{ color: '#00f0ff' }}>Delivery Guarantee:</strong> {srv.deliverables}
                    </span>
                  </div>

                  <button
                    onClick={onOpenModal}
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.6rem' }}
                  >
                    <Send size={15} /> Request Customized Proposal for this Suite
                  </button>
                </div>

                <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', height: '100%', minHeight: '320px' }}>
                  <img
                    src={srv.image}
                    alt={srv.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Positioning Section */}
      <section style={{ background: '#060e1e', padding: '5.5rem 0', borderTop: '1px solid rgba(0, 240, 255, 0.15)', borderBottom: '1px solid rgba(0, 240, 255, 0.15)' }}>
        <div className="container-fluid">
          <div className="text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
            <span className="eyebrow eyebrow-cyber">Strategic Value Framework</span>
            <h2 className="section-title">Why Global Enterprises Partner With Us</h2>
            <p className="section-subtitle mx-auto">
              Combining cutting-edge software engineering, operational excellence, and agile workforce delivery across India and the United States.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.75rem' }}>
            <div className="card" style={{ padding: '2rem', background: 'rgba(11, 24, 46, 0.7)', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
              <div style={{ fontSize: '1.8rem', color: '#00f0ff', marginBottom: '0.75rem' }}>
                <Cpu size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem' }}>AI + Automation + Human Depth</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.65' }}>
                Harmonizing autonomous AI agents, machine learning automation, and subject-matter expert human oversight to deliver 99.9% operational accuracy.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', background: 'rgba(11, 24, 46, 0.7)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <div style={{ fontSize: '1.8rem', color: '#10b981', marginBottom: '0.75rem' }}>
                <Layers size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem' }}>Tech + Operations + Workforce</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.65' }}>
                Integrated full-stack solutions uniting custom software engineering, 24/7 business BPO operations, and on-demand global staffing augmentation.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', background: 'rgba(11, 24, 46, 0.7)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <div style={{ fontSize: '1.8rem', color: '#f59e0b', marginBottom: '0.75rem' }}>
                <Zap size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem' }}>Business Process Automation</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.65' }}>
                Eliminating operational bottlenecks with Intelligent Document Processing (IDP), Robotic Process Automation (RPA), and automated enterprise workflows.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem', background: 'rgba(11, 24, 46, 0.7)', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
              <div style={{ fontSize: '1.8rem', color: '#ec4899', marginBottom: '0.75rem' }}>
                <ShieldCheck size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem' }}>ISO 27001 &amp; HIPAA Governance</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.65' }}>
                Bank-grade physical security, dedicated client server partitions, and full regulatory compliance for sensitive healthcare and financial data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section style={{ background: 'radial-gradient(circle at 50% 50%, #0d284e 0%, #030712 85%)', color: 'white', padding: '5.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            Require a Customized Multi-Disciplinary Scope?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Our enterprise solutions architects can assemble a dedicated pod combining custom software developers, SAP consultants, or digital marketing specialists tailored to your target SLA.
          </p>
          <button onClick={onOpenModal} className="btn btn-primary btn-lg" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
            Consult With Our Solutions Architect
          </button>
        </div>
      </section>
    </div>
  );
}
