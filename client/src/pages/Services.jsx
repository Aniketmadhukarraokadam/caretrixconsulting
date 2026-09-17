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
  Laptop,
  PhoneCall,
  Activity,
  Globe2,
  ArrowRight,
  TrendingUp,
  Clock,
  Check,
} from 'lucide-react';
import HumanMotion8DStudio from '../components/HumanMotion8DStudio';

export default function Services({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Services (65+)' },
    { id: 'appsupport', label: 'Application Support (AMS)' },
    { id: 'intlvoice', label: 'International Voice Process' },
    { id: 'domesticvoice', label: 'Domestic Voice Process' },
    { id: 'sap', label: 'SAP S/4HANA & ERP' },
    { id: 'marketing', label: 'Performance Marketing & 8D' },
    { id: 'healthcare', label: 'Healthcare BPO / RCM' },
    { id: 'hrms', label: 'HRMS & AI Software' },
    { id: 'verification', label: 'Background Verification' },
    { id: 'realestate', label: 'Real Estate & Title' },
    { id: 'publishing', label: 'STM Publishing' },
    { id: 'ai', label: 'AI & Data Annotation' },
    { id: 'software', label: 'Custom Software & Microservices' },
    { id: 'accounting', label: 'Accounting & Payroll' },
  ];

  const services = [
    {
      id: 'app-support-services',
      cat: 'appsupport',
      badge: '24/7 ENTERPRISE APPLICATION SUPPORT (AMS)',
      icon: <Laptop size={32} color="#1d4ed8" />,
      image: '/it_services.png',
      title: 'Enterprise Application Support Services (AMS), L1/L2/L3 Maintenance & Cloud Observability',
      desc: 'Mission-critical enterprise application maintenance and 24/7/365 production support. We ensure uninterrupted digital velocity for modern SaaS architectures, legacy ERP monoliths, cloud microservices, and client-facing web portals with industry-leading SLA commitments.',
      features: [
        'Tier-1, Tier-2 & Tier-3 (L1/L2/L3) Incident Response & Bug Remediations',
        'Strict SLA Commitment: <15 Minute Acknowledgment for Critical P1 Incidents',
        '24/7 Full-Stack Cloud Observability (Datadog, Dynatrace, New Relic, Prometheus & Grafana)',
        'Database Administration, Performance Tuning & Backups (PostgreSQL, MySQL, Oracle, MongoDB)',
        'DevOps CI/CD Pipeline Maintenance, Rollbacks & Zero-Downtime Patch Releases',
        'Proactive Capacity Planning, Security Vulnerability Scans & ITIL v4 Incident Management',
      ],
      deliverables: '99.98% application uptime guarantee, 15-minute P1 critical response time, and detailed monthly root-cause analysis (RCA) reporting.',
      roiTag: '52% TCO Reduction vs Onshore Support',
    },
    {
      id: 'intl-voice-process',
      cat: 'intlvoice',
      badge: 'GLOBAL 24/7 INTERNATIONAL VOICE OPERATIONS',
      icon: <Headphones size={32} color="#059669" />,
      image: '/bpo_outsourcing.png',
      title: 'International Voice Process, Global Customer Experience & Technical Helpdesk',
      desc: 'High-touch 24/7/365 inbound and outbound voice operations engineered for North American (US & Canada), UK/European, and Australian enterprises. Our C2 English-certified customer experience pods deliver empathy, deep technical troubleshooting, and superior First Contact Resolution.',
      features: [
        'Round-the-Clock Inbound Customer Support, Billing Inquiries & Order Resolution',
        'Outbound Enterprise Telesales, Warm Lead Qualification & Executive Appointment Setting',
        'Tier-1 & Tier-2 Technical Helpdesk, Software Troubleshooting & Hardware Triage',
        'HIPAA-Compliant US Healthcare Intake, Patient Registration & Pre-Authorizations',
        'FinTech & Banking Verification, KYC Validation & Fraud Alert Notifications',
        'Omnichannel Cloud Contact Centers (Genesys Cloud, Five9, Avaya & Twilio Flex) with Real-Time AI Sentiment Analysis',
      ],
      deliverables: '96.4% verified CSAT benchmark, <20-second Average Speed of Answer (ASA), and 88%+ First Contact Resolution (FCR).',
      roiTag: '96.4% CSAT • US/UK/AUS Specialized',
    },
    {
      id: 'domestic-voice-process',
      cat: 'domesticvoice',
      badge: 'PAN-INDIA MULTILINGUAL VOICE OPERATIONS',
      icon: <PhoneCall size={32} color="#d97706" />,
      image: '/consulting_team.png',
      title: 'Domestic Voice Process (Pan-India Multilingual Customer Care across 12+ Languages)',
      desc: 'Comprehensive Indian domestic call center operations bridging language diversity with high conversion and prompt service. Serving leading Indian banks, NBFCs, e-commerce giants, telecom providers, and D2C brands with native fluency across all regional states.',
      features: [
        'Native Multilingual Voice Support: Hindi, Marathi, Tamil, Telugu, Kannada, Malayalam, Bengali, Gujarati, Punjabi, Odia & English',
        'BFSI Loan Inquiries, Early-Bucket Collections & Digital KYC Verification',
        'E-Commerce Hyperlocal Delivery Tracking, Order Confirmations & Return Audits',
        'Healthcare Tele-Consultation Bookings, Diagnostic Follow-ups & Insurance Desk',
        'Real-Time Call Recording, Speech Analytics & Regulatory Compliance Auditing',
        'Automated Interactive Voice Response (IVR) with Seamless Human Specialist Fallback',
      ],
      deliverables: '<15 second average speed of answer (ASA), 99.8% telephony uptime, and Pan-India coverage matching all Indian business hours.',
      roiTag: '12+ Regional Languages • <15s ASA',
    },
    {
      id: 'digital-marketing-growth',
      cat: 'marketing',
      badge: 'HIGH-VELOCITY GROWTH MARKETING & 8D MOTION',
      icon: <BarChart3 size={32} color="#0284c7" />,
      image: '/images/martech_3d_engine.jpg',
      title: 'Performance Marketing, Generative Engine Optimization (GEO/AEO) & 8D Motion Commercials',
      desc: 'Full-funnel client acquisition marketing combining multi-channel programmatic ad buying, high-converting direct-response copywriting, 3D CGI commercial video, 8D spatial binaural audio, and advanced entity schema optimization for AI search engines.',
      features: [
        'Multi-Touch Paid Acquisition (Meta Ads, Google Performance Max, LinkedIn B2B)',
        'Generative Engine Optimization (GEO) & Answer Engine Optimization (AEO) for ChatGPT, Perplexity & Gemini',
        'Cinema-Grade 3D Product Motion, CGI Commercial Animation & 8D Spatial Audio',
        'Conversion Rate Optimization (CRO), Multi-Variant Landing Page Funnels & Heatmap Audits',
        'B2B Account-Based Marketing (ABM) Outreach Sequences with High-Converting Copy',
        'Real-Time Attribution Modeling, ROAS Dashboards & Predictive CAC Minimization',
      ],
      deliverables: '5.2x average verified ROAS, 3x higher engagement on 8D motion videos, and top-tier indexing across AI search surfaces.',
      roiTag: '5.2x Average ROAS • Next-Gen AEO/GEO',
    },
    {
      id: 'sap-s4hana-migration',
      cat: 'sap',
      badge: 'ENTERPRISE SAP PRACTICE',
      icon: <Layers size={32} color="#0052cc" />,
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
      roiTag: '65% Month-End Close Acceleration',
    },
    {
      id: 'sap-functional-modules',
      cat: 'sap',
      badge: 'SAP FUNCTIONAL EXCELLENCE',
      icon: <CheckCircle2 size={32} color="#1d4ed8" />,
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
      roiTag: 'Certified SAP Module Specialists',
    },
    {
      id: 'sap-btp-abap',
      cat: 'sap',
      badge: 'SAP TECHNICAL ARCHITECTURE',
      icon: <Cpu size={32} color="#0284c7" />,
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
      roiTag: 'Clean Core BTP Architecture',
    },
    {
      id: 'sap-basis-ams',
      cat: 'sap',
      badge: '24/7 MANAGED SAP BASIS',
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
      roiTag: '99.98% System Uptime SLA',
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
      roiTag: '100% Statutory Compliance Zero Errors',
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
      roiTag: '98.5% First-Pass Clean Claims',
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
        'Nationwide Title Search, Ownership Chain Verification & Encumbrance Identification',
        'Title Commitment Typing, Policy Preparation & Endorsements',
        'Mortgage Settlement Assistance, Closing Disclosure Review & Wire Auditing',
      ],
      deliverables: '99.8% title commitment typing accuracy, 24-hr turnaround on search packages, and audit-ready CAM calculations.',
      roiTag: '24-Hr Title Turnaround Guarantee',
    },
    {
      id: 'stm-publishing',
      cat: 'publishing',
      badge: 'ACADEMIC PREPRESS LEADERSHIP',
      icon: <BookOpen size={32} color="#8b5cf6" />,
      image: '/caretrix_about.png',
      title: 'STM Academic Publishing, MathML XML & Prepress Typesetting',
      desc: 'Scientific, Technical, and Medical (STM) digital publishing production: XML conversion (JATS, BITS, TEI), LaTeX to XML transformation, high-complexity MathML structuring, automated multi-platform eBook generation, and copyediting.',
      features: [
        'JATS, BITS & TEI Standard XML Transformation & Schema Validation',
        'Complex MathML & ChemML Encoding with Semantic Structuring',
        'Automated InDesign, 3B2 & LaTeX Prepress Typesetting Engines',
        'ePub3, Kindle & Accessible PDF (WCAG 2.1 AA / PDF/UA) Production',
        'Native English Academic Copyediting & Reference Verification',
      ],
      deliverables: 'Zero-schema-error guarantee, rapid turnaround on high-volume journal issues, and complete multi-format publication.',
      roiTag: 'Zero-Schema-Error Publishing',
    },
    {
      id: 'bgv-compliance',
      cat: 'verification',
      badge: 'COMPLIANCE & INTEGRITY',
      icon: <ShieldCheck size={32} color="#10b981" />,
      image: '/verification_services.png',
      title: 'Employee Background Verification (BGV) & Compliance Screening (28 States)',
      desc: 'Institutional-grade candidate background vetting: previous employment audits, highest education credentials, criminal court records across district and high courts, and geo-tagged physical address checks across all 28 Indian States.',
      features: [
        'Previous Employment & Compensation History Verification',
        'University Degree & Professional Accreditation Authentication',
        'Civil & Criminal Court Record Screening Across National Judicial Records',
        'Physical Address Verification with Geo-Tagged Photographic Evidence',
        'Global Sanctions, AML Watchlists & Politically Exposed Persons (PEP) Checks',
      ],
      deliverables: 'Encrypted digital BGV dossier delivered within 48-72 hours with 99.9% verified factual accuracy.',
      roiTag: '99.9% Accuracy Across 28 States',
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
    <div style={{ background: '#f8fafc', color: '#0f172a' }}>
      {/* 1. Header Section */}
      <section
        style={{
          background: 'linear-gradient(180deg, #f0f7ff 0%, #f8fafc 100%)',
          padding: '5rem 0 3.5rem',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div className="container text-center">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              color: '#1d4ed8',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1.25rem',
            }}
          >
            <Sparkles size={14} /> Full-Spectrum IT &amp; BPO Catalog (65+ Services)
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              fontWeight: 900,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
            }}
          >
            Enterprise Services &amp; <span className="gradient-text-cyber">Global Delivery Pods</span>
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#475569',
              maxWidth: '820px',
              margin: '0 auto 2rem',
              lineHeight: '1.7',
            }}
          >
            From <strong>24/7 Application Support Services (AMS)</strong>, <strong>International Voice Process (US/UK/AUS)</strong>, 
            and <strong>Domestic Pan-India Multilingual Voice Care</strong> to <strong>SAP S/4HANA Migrations</strong> and <strong>Performance Marketing</strong> — explore our end-to-end delivery framework.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenModal} className="btn btn-primary" style={{ padding: '0.95rem 2.2rem', fontSize: '1rem' }}>
              <Sparkles size={16} /> Request Custom Pod Architecture
            </button>
            <a href="tel:+917758088438" className="btn btn-secondary" style={{ padding: '0.95rem 1.8rem', fontSize: '1rem' }}>
              <PhoneCall size={16} color="#0052cc" /> Call +91 77580 88438
            </a>
          </div>
        </div>
      </section>

      {/* 2. Strategic Quality & Regulatory Trust Bar */}
      <section style={{ background: '#ffffff', padding: '1.5rem 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155', fontWeight: 600 }}>
              <ShieldCheck size={18} color="#059669" /> ISO 9001:2015 &amp; ISO 27001 Certified
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155', fontWeight: 600 }}>
              <HeartPulse size={18} color="#0284c7" /> HIPAA Compliant US Healthcare Pods
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155', fontWeight: 600 }}>
              <Clock size={18} color="#1d4ed8" /> 15-Minute Critical P1 Incident SLA
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155', fontWeight: 600 }}>
              <Globe2 size={18} color="#d97706" /> 28 Indian States &amp; Follow-The-Sun US Grid
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3D 8D Real-Human Video Studio Demonstration */}
      <HumanMotion8DStudio onOpenModal={onOpenModal} />

      {/* 4. Search & Filter Bar */}
      <section
        style={{
          background: '#ffffff',
          padding: '1.25rem 0',
          borderBottom: '1px solid #e2e8f0',
          position: 'sticky',
          top: '76px',
          zIndex: 90,
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', maxWidth: '540px' }}>
              <Search size={18} color="#1d4ed8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search across all 65+ services (e.g. Application Support, Voice, SAP, RCM, BGV)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  paddingLeft: '2.6rem',
                  paddingRight: '1rem',
                  height: '46px',
                  fontSize: '0.92rem',
                  background: '#f8fafc',
                  border: '1.5px solid #cbd5e1',
                  color: '#0f172a',
                  borderRadius: '12px',
                  outline: 'none',
                }}
              />
            </div>

            {/* Category Filter Pills */}
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
                    padding: '0.55rem 1.15rem',
                    borderRadius: '20px',
                    border: activeFilter === cat.id ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
                    background: activeFilter === cat.id ? '#eff6ff' : '#ffffff',
                    color: activeFilter === cat.id ? '#1d4ed8' : '#475569',
                    fontWeight: 700,
                    fontSize: '0.84rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: activeFilter === cat.id ? '0 2px 8px rgba(37, 99, 235, 0.15)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Listing Grid */}
      <section className="section-py" style={{ background: '#f8fafc' }}>
        <div className="container-fluid">
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.92rem', color: '#64748b', fontWeight: 600 }}>
              Showing <strong style={{ color: '#0f172a' }}>{filteredServices.length}</strong> enterprise service suites &amp; SLA frameworks
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.25fr 1fr',
                  gap: '2.5rem',
                  alignItems: 'center',
                  padding: '2.5rem',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '22px',
                  boxShadow: '0 4px 25px -3px rgba(15, 23, 42, 0.07)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div
                      style={{
                        background: '#eff6ff',
                        border: '1px solid #bfdbfe',
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
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span
                          style={{
                            background: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            color: '#1d4ed8',
                            padding: '3px 10px',
                            borderRadius: '4px',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            letterSpacing: '0.5px',
                          }}
                        >
                          {srv.badge}
                        </span>
                        {srv.roiTag && (
                          <span
                            style={{
                              background: '#ecfdf5',
                              border: '1px solid #a7f3d0',
                              color: '#059669',
                              padding: '3px 8px',
                              borderRadius: '4px',
                              fontSize: '0.7rem',
                              fontWeight: 700,
                            }}
                          >
                            ✓ {srv.roiTag}
                          </span>
                        )}
                      </div>
                      <h2 style={{ fontSize: '1.45rem', marginTop: '6px', color: '#0f172a', fontWeight: 800 }}>{srv.title}</h2>
                    </div>
                  </div>

                  <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                    {srv.desc}
                  </p>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <strong style={{ display: 'block', fontSize: '0.92rem', marginBottom: '0.6rem', color: '#0f172a' }}>
                      Key Capabilities &amp; SLA Framework:
                    </strong>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem' }}>
                      {srv.features.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                          <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span style={{ fontSize: '0.86rem', color: '#334155' }}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      background: '#f8fafc',
                      padding: '0.9rem 1.25rem',
                      borderRadius: '10px',
                      borderLeft: '4px solid #2563eb',
                      marginBottom: '1.75rem',
                      border: '1px solid #e2e8f0',
                      borderLeftWidth: '4px',
                    }}
                  >
                    <span style={{ fontSize: '0.86rem', color: '#334155' }}>
                      <strong style={{ color: '#1d4ed8' }}>Delivery Guarantee:</strong> {srv.deliverables}
                    </span>
                  </div>

                  <button
                    onClick={onOpenModal}
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.8rem', fontSize: '0.92rem' }}
                  >
                    <Send size={15} /> Request Customized Proposal for this Pod
                  </button>
                </div>

                <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid #e2e8f0', height: '100%', minHeight: '340px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
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

      {/* 6. Strategic Value Framework */}
      <section style={{ background: '#ffffff', padding: '5.5rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-fluid">
          <div className="text-center mx-auto" style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
            <span className="eyebrow eyebrow-cyber">Enterprise Partnership Framework</span>
            <h2 className="section-title">Why Global Enterprises Partner With Caretrix</h2>
            <p className="section-subtitle mx-auto">
              Delivering high-velocity technical depth, 24/7 operational execution, and proven capital compression for North American, European, and Pan-India leaders.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.75rem' }}>
            <div className="card">
              <div style={{ color: '#1d4ed8', marginBottom: '0.75rem' }}>
                <Laptop size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.5rem' }}>15-Min Application Support SLA</h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: '1.65' }}>
                Guaranteed &lt;15-minute response on mission-critical P1 incidents with 24/7/365 full-stack cloud observability and root-cause prevention.
              </p>
            </div>

            <div className="card">
              <div style={{ color: '#059669', marginBottom: '0.75rem' }}>
                <Headphones size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.5rem' }}>Global &amp; Domestic Voice Pods</h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: '1.65' }}>
                C2 English neutral-accent voice operations for US/UK/AUS alongside 12+ regional Pan-India languages with 96.4% CSAT benchmarks.
              </p>
            </div>

            <div className="card">
              <div style={{ color: '#0284c7', marginBottom: '0.75rem' }}>
                <BarChart3 size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.5rem' }}>5.2x ROAS &amp; AEO Marketing</h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: '1.65' }}>
                Data-driven programmatic media buying, high-converting copywriting, and specialized entity schema indexing for AI search engines (ChatGPT, Perplexity).
              </p>
            </div>

            <div className="card">
              <div style={{ color: '#d97706', marginBottom: '0.75rem' }}>
                <ShieldCheck size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.5rem' }}>ISO 27001 &amp; HIPAA Governance</h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: '1.65' }}>
                Institutional security governance, biometric delivery floors, and full regulatory compliance for sensitive healthcare and financial data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Bottom Banner */}
      <section style={{ background: 'linear-gradient(135deg, #0a192f 0%, #123d6b 100%)', color: 'white', padding: '5.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow eyebrow-white" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={14} /> Ready to Deploy
          </span>
          <h2 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            Require a Customized Multi-Disciplinary Scope?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Our enterprise solutions architects assemble dedicated pods combining Application Support engineers, International/Domestic Voice agents, or SAP consultants tailored to your target SLA.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenModal} className="btn btn-accent btn-lg" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
              <Sparkles size={18} /> Consult With Our Solutions Directorate
            </button>
            <a href="tel:+917758088438" className="btn btn-secondary" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem', background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              Call Directorate +91 77580 88438
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
