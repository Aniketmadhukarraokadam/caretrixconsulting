import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Brain,
  Bot,
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
  Users,
  CheckCircle2,
  ArrowRight,
  Search,
  Sparkles,
  Clock,
  CircleDollarSign,
  UserCog,
  Send,
  Printer,
  Tablet,
  Receipt,
  CreditCard,
  Ban,
  RotateCcw,
  Scale,
  Scroll,
  FileCode2,
  ShoppingCart,
  LineChart,
  FileSearch,
  Accessibility,
} from 'lucide-react';

export default function Services({ onOpenModal }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState(catParam);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (catParam) {
      setActiveCategory(catParam);
    }
  }, [catParam]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setSearchParams(catId === 'all' ? {} : { cat: catId });
  };

  const categories = [
    { id: 'all', label: 'All Services (65+)' },
    { id: 'ai_automation', label: 'AI & Automations' },
    { id: 'healthcare', label: 'Healthcare BPO & RCM' },
    { id: 'customsoftware', label: 'IT & Software Solutions' },
    { id: 'publishing', label: 'Publishing & Prepress' },
    { id: 'realestate', label: 'Real Estate & Title' },
    { id: 'data_annotation', label: 'AI Data Annotation' },
    { id: 'accounting', label: 'Finance & Accounting BPO' },
    { id: 'staffing', label: 'Manpower & Staffing' },
    { id: 'logistics', label: 'Logistics & Supply Chain' },
    { id: 'digitalmarketing', label: 'Digital Marketing & SEO' },
    { id: 'technicalpub', label: 'Technical Publications' },
    { id: 'verification', label: 'Background Verification' },
  ];

  const allServices = [
    // 1. AI & Automations
    {
      id: 'ai-automation-services',
      category: 'ai_automation',
      badge: 'AI & HYPER-AUTOMATION',
      icon: <Brain size={28} color="#0284C7" />,
      title: 'AI Automation & Agentic Workflow Systems',
      desc: 'Autonomous multi-agent workflows, robotic process automation (RPA), and custom Large Language Model (LLM) integrations engineered to eliminate repetitive operational bottlenecks across enterprise departments.',
      features: [
        'Multi-agent autonomous systems using LangChain, AutoGen & custom LLM orchestrators',
        'Intelligent Document Processing (IDP) for invoices, medical records & legal contracts',
        'Natural Language Processing (NLP) summarization and custom vector knowledge bases (RAG)',
        'Enterprise integration with ERP, CRM, and cloud REST APIs with zero human intervention',
        'Continuous human-in-the-loop (HITL) quality validation and audit trail logging',
      ],
      sla: '99.5% processing accuracy • <200ms model inference latency',
      tag: '5x Operational Velocity',
    },
    {
      id: 'idp-services',
      category: 'ai_automation',
      badge: 'INTELLIGENT DOCUMENT PROCESSING',
      icon: <FileText size={28} color="#2563EB" />,
      title: 'Intelligent Document Processing (IDP) & OCR Automation',
      desc: 'AI-driven computer vision and OCR pipelines that extract, categorize, validate, and index unstructured and semi-structured documents at massive enterprise scale.',
      features: [
        'Multi-layout document OCR (handwritten, scanned, multilingual PDF, TIFF)',
        'Deep learning table parsing, boundary bounding, and key-value pair extraction',
        'Automated 3-way invoice and purchase order matching against ERP databases',
        'Section 508 and HIPAA compliant encrypted document processing workflows',
      ],
      sla: 'Sub-second document extraction • 99.8% verified field accuracy',
      tag: 'Zero Manual Data Entry',
    },

    // 3. Healthcare BPO & RCM
    {
      id: 'medical-coding-services',
      category: 'healthcare',
      badge: 'HEALTHCARE REVENUE CYCLE',
      icon: <HeartPulse size={28} color="#0284C7" />,
      title: 'Medical Coding (ICD-10-CM, CPT, HCPCS & Risk Adjustment)',
      desc: 'AAPC & AHIMA certified medical coding services ensuring maximum reimbursement compliance, reduced payer rejections, and comprehensive chart audit coverage across multi-specialty practices.',
      features: [
        'Certified professional coders (CPC, COC, CIC, CRC) with specialty-specific pods',
        'Inpatient, outpatient, emergency room, and ambulatory surgical center (ASC) coding',
        'HCC Risk Adjustment and Hierarchical Condition Category coding for Medicare Advantage',
        'Comprehensive 100% pre-bill quality audit sampling ensuring 98%+ clean claims',
      ],
      sla: '98%+ coding accuracy • 24-hour chart turnaround time (TAT)',
      tag: 'AAPC / AHIMA Certified',
    },
    {
      id: 'medical-billing-rcm',
      category: 'healthcare',
      badge: 'END-TO-END RCM',
      icon: <Receipt size={28} color="#0284C7" />,
      title: 'Medical Billing, Payment Posting & Electronic Claim Submission',
      desc: 'End-to-end medical billing operations covering electronic 837 claim submission, clearinghouse rejections resolution, ERA/EOB payment posting, and patient balance collections.',
      features: [
        'Real-time patient demographic verification and insurance eligibility checking',
        'Daily electronic clearinghouse transmission with immediate scrub error remediation',
        'Manual and automated ERA/835 payment posting and line-item contractual write-offs',
        'Patient billing inquiries support and automated secondary/tertiary payer billing',
      ],
      sla: '<24 hour claim submission TAT • 99% posting accuracy',
      tag: 'Accelerated Cash Flow',
    },
    {
      id: 'denial-management-ar',
      category: 'healthcare',
      badge: 'ACCOUNTS RECEIVABLE RECOVERY',
      icon: <Ban size={28} color="#0284C7" />,
      title: 'Denial Management & Accounts Receivable (AR) Recovery',
      desc: 'Aggressive aged AR recovery and systematic denial resolution. We identify payer rejection root causes, appeal wrongful denials with medical documentation, and recover revenue over 90+ days aging.',
      features: [
        'Systematic root cause analysis across CARC/RARC denial reason codes',
        'Formal multi-tier payer appeals with medical necessity documentation',
        'Dedicated aged AR liquidation pods for 90+, 120+, and 180+ day accounts',
        'Payer pattern tracking preventing recurring denials on future claims',
      ],
      sla: '35% average reduction in aged AR days • 85%+ appeal recovery rate',
      tag: 'Recover Stalled Revenue',
    },

    // 4. IT & Custom Software Solutions
    {
      id: 'custom-software-solutions',
      category: 'customsoftware',
      badge: 'FULL-STACK CLOUD & SOFTWARE',
      icon: <Laptop size={28} color="#1C2280" />,
      title: 'Custom Enterprise Software Engineering & Offshore Development Centers (ODC)',
      desc: 'Dedicated offshore software engineering teams building scalable web applications, enterprise microservices, cloud infrastructure, and cross-platform mobile applications for high-growth global enterprises.',
      features: [
        'Modern full-stack web applications in React, Next.js, Node.js, Python & Java',
        'High-throughput microservices architecture, RESTful APIs, and GraphQL gateways',
        'Multi-cloud infrastructure deployment on AWS, Microsoft Azure & Google Cloud (IaC/Terraform)',
        'Dedicated Agile development pods with direct sprint integration and full IP transfer',
      ],
      sla: '99.99% system uptime architecture • Full source code ownership',
      tag: 'Dedicated Agile Pods',
    },
    {
      id: 'ecommerce-solutions',
      category: 'customsoftware',
      badge: 'E-COMMERCE & DIGITAL COMMERCE',
      icon: <ShoppingCart size={28} color="#1C2280" />,
      title: 'Omnichannel E-Commerce Platforms & Custom Storefronts',
      desc: 'High-conversion e-commerce development, headless Shopify Plus, Magento, WooCommerce, and custom multi-vendor marketplace platforms with seamless payment gateways and inventory sync.',
      features: [
        'Headless commerce architectures with sub-second page load times',
        'ERP and warehouse management system (WMS) bi-directional inventory sync',
        'Global multi-currency, multi-language checkout with automated tax calculation',
        'High-availability hosting optimized for peak flash-sale traffic volumes',
      ],
      sla: 'Sub-1.2s mobile page load • 99.98% checkout availability',
      tag: 'Conversion-Optimized',
    },

    // 5. Publishing & Prepress Services
    {
      id: 'digital-prepress-typesetting',
      category: 'publishing',
      badge: 'STM PUBLISHING & PREPRESS',
      icon: <BookOpen size={28} color="#8B5CF6" />,
      title: 'Digital Prepress, Automated Typesetting & STM Journal Production',
      desc: 'Automated XML-first typesetting, LaTeX equation formatting, high-end design, and digital prepress services for global academic publishers, university presses, and commercial imprints.',
      features: [
        'XML-first automated pagination in Adobe InDesign, 3B2, and custom typesetting engines',
        'Complex STM mathematical typesetting with MathML and LaTeX formatting',
        'Rigorous copyediting, developmental editing, and proofreading by subject-matter experts',
        'Print-ready high-resolution PDF generation with preflight verification',
      ],
      sla: '99.9% typographical accuracy • 5-day journal turnaround',
      tag: 'Academic & STM Standards',
    },
    {
      id: 'epub-ebook-conversion',
      category: 'publishing',
      badge: 'ACCESSIBLE DIGITAL FORMATS',
      icon: <Tablet size={28} color="#8B5CF6" />,
      title: 'eBook Conversion (ePUB3, Fixed Layout & Kindle KF8)',
      desc: 'Flawless digital conversion from any source format (PDF, Word, InDesign, printed hardcopy) into modern reflowable and fixed-layout ePUB3 and Kindle formats compatible with all e-readers.',
      features: [
        'Reflowable and fixed-layout ePUB3 with embedded audio, video & interactive scripts',
        'Amazon Kindle KF8/MOBI conversion with validated NCX navigation structures',
        'Section 508 and WCAG 2.1 AA digital accessibility tagging with alt-text integration',
        '100% EpubCheck validated files passing all retail distributor ingestion checks',
      ],
      sla: '100% validation on Apple Books, Amazon KDP & Google Play',
      tag: 'Global Retail Ready',
    },

    // 6. Real Estate, CAM & Title
    {
      id: 'cam-audit-reconciliation',
      category: 'realestate',
      badge: 'COMMERCIAL REAL ESTATE BPO',
      icon: <Scale size={28} color="#10B981" />,
      title: 'CAM Audit, CAM Reconciliation & Property Accounting',
      desc: 'Detailed Common Area Maintenance (CAM) reconciliations, operating expense audits, gross-up calculations, and variance reporting for commercial property owners and REITs.',
      features: [
        'Proration calculations, caps (cumulative & compounding), and base-year expense audits',
        'Tenant bill-back schedules, real estate tax apportionments, and insurance audits',
        'Yardi, MRI Software, RealPage, and AppFolio property accounting management',
        'Detailed dispute resolution support and landlord expense variance defense',
      ],
      sla: '100% mathematical audit accuracy • 15% average recovered leakage',
      tag: 'Yardi & MRI Certified',
    },
    {
      id: 'lease-abstraction-admin',
      category: 'realestate',
      badge: 'LEASE ADMINISTRATION',
      icon: <Scroll size={28} color="#10B981" />,
      title: 'Commercial Lease Abstraction & Lease Administration',
      desc: 'Comprehensive extraction of key business, financial, and legal lease clauses into structured formats. Overcoming language variations across retail, office, and industrial commercial leases.',
      features: [
        'Extraction of rent schedules, escalation clauses, tenant options, and maintenance obligations',
        'Multi-tier quality check: abstractor draft reviewed by senior real estate attorney',
        'Direct data ingestion into Yardi Voyager, ProLease, CoStar, and custom databases',
        'Critical date tracking (renewal options, ROFO/ROFR, expansion & termination dates)',
      ],
      sla: '99.8% clause accuracy • 48-hour turnarounds per lease document',
      tag: 'Institutional Real Estate',
    },

    // 7. AI Data Annotation & Computer Vision
    {
      id: 'ai-data-annotation-services',
      category: 'data_annotation',
      badge: 'AI / ML TRAINING PIPELINES',
      icon: <FileSpreadsheet size={28} color="#F59E0B" />,
      title: 'AI Data Annotation & Computer Vision Training Data',
      desc: 'Human-in-the-loop data labeling services for autonomous vehicles, medical imaging, retail automation, and robotics. Bounding boxes, polygons, semantic segmentation, LiDAR, and RLHF.',
      features: [
        '2D/3D bounding boxes, polygon masks, and pixel-level semantic segmentation',
        '3D LiDAR point cloud annotation with cuboids and sensor fusion tracking',
        'Video annotation: multi-frame object tracking, action recognition, and temporal labeling',
        'Large Language Model (LLM) RLHF prompt evaluation, red-teaming, and factuality scoring',
      ],
      sla: '99.5% consensus accuracy • Multi-tier QA validation before export',
      tag: 'Autonomous & Robotics Ready',
    },

    // 8. Accounting & Bookkeeping
    {
      id: 'accounting-bookkeeping-bpo',
      category: 'accounting',
      badge: 'OFFSHORE FINANCE BPO',
      icon: <BarChart3 size={28} color="#2563EB" />,
      title: 'Offshore Bookkeeping, AP/AR & Financial Reporting BPO',
      desc: 'Dedicated offshore accounting teams managing daily transaction classification, general ledger maintenance, accounts payable/receivable (AP/AR), and monthly GAAP/IFRS financial close.',
      features: [
        'Full-charge bookkeeping in QuickBooks Online, Xero, NetSuite, and Sage',
        'End-to-end accounts payable automation: 3-way PO matching, vendor aging & disbursements',
        'Accounts receivable tracking, customer invoice generation, and collection workflows',
        'Monthly balance sheet reconciliation, P&L statements, and cash flow forecasts',
      ],
      sla: 'Monthly close by business day 5 • 100% audit-ready balance sheets',
      tag: '50% Lower Accounting Cost',
    },

    // 9. Manpower & Staffing
    {
      id: 'manpower-staffing-pods',
      category: 'staffing',
      badge: 'TALENT AUGMENTATION',
      icon: <Users size={28} color="#10B981" />,
      title: 'Dedicated Offshore Talent Pods & Strategic Staff Augmentation',
      desc: 'Pre-vetted, highly skilled technical and operational talent deployed as dedicated extensions of your in-house teams. Scaling your bandwidth without recruiting overhead or employment liabilities.',
      features: [
        'Pre-screened software developers, QA engineers, RCM billers, and data analysts',
        'Zero notice setup with 100% time-zone overlap matching US, UK, and European hours',
        'Direct project management integration with your Jira, Slack, and GitHub workflows',
        'Transparent monthly flat-rate billing with zero hidden recruitment fees',
      ],
      sla: 'Onboarding in 7–10 days • Replacement guarantee within 5 business days',
      tag: 'Immediate Bandwidth Scale',
    },

    // 10. Logistics & Supply Chain
    {
      id: 'logistics-supply-chain-bpo',
      category: 'logistics',
      badge: 'LOGISTICS OPERATIONS',
      icon: <Truck size={28} color="#EC4899" />,
      title: 'Logistics Data Support, Shipping Document Audits & Freight BPO',
      desc: '24/7 back-office processing for freight forwarders, 3PL carriers, and supply chain operators. Bill of lading entry, freight invoice audits, and shipment tracking.',
      features: [
        'Bill of Lading (BOL), airway bill, and customs entry documentation processing',
        'Freight invoice auditing against agreed rate cards and tariff schedules',
        'Carrier dispatch coordination and live exception tracking for shipping delays',
        'Warehouse inventory cycle count reconciliations and ERP data synchronization',
      ],
      sla: '<15 min document processing TAT • 99.8% entry accuracy',
      tag: '24/7 Freight Operations',
    },

    // 11. Digital Marketing & SEO
    {
      id: 'digital-marketing-seo-services',
      category: 'digitalmarketing',
      badge: 'DIGITAL PERFORMANCE',
      icon: <Megaphone size={28} color="#1C2280" />,
      title: 'Data-Driven Enterprise SEO, PPC & B2B Inbound Growth',
      desc: 'Results-oriented digital marketing strategies engineered to drive organic search visibility, high-intent B2B qualified leads, and measurable customer acquisition ROI.',
      features: [
        'Technical enterprise SEO audits, site architecture optimization, and keyword strategies',
        'High-converting Google Ads and LinkedIn Ads campaigns with rigorous ROAS tracking',
        'Authoritative B2B thought leadership content creation and white-hat backlink acquisition',
        'Conversion Rate Optimization (CRO) and user journey analytics across all landing pages',
      ],
      sla: 'Guaranteed page-1 ranking targets • Transparent weekly analytics reporting',
      tag: 'Measurable B2B Pipeline',
    },

    // 12. Technical Publications (S1000D)
    {
      id: 'technical-publications-s1000d',
      category: 'technicalpub',
      badge: 'DEFENSE & AEROSPACE TECH PUBS',
      icon: <FileSearch size={28} color="#0EA5E9" />,
      title: 'Technical Publications, S1000D XML Conversion & Manual Authoring',
      desc: 'Specialized technical documentation services conforming to international military and civilian specifications (S1000D, ATA 2200, DITA). Maintenance manuals, IPCs, and operator guides.',
      features: [
        'S1000D Issue 4.1 / 4.2 / 5.0 Data Module authoring and Common Source Database (CSDB) sync',
        'Interactive Electronic Technical Publications (IETP / IETM) compilation',
        'Illustrated Parts Catalog (IPC) creation with exploded 2D/3D vector schematics',
        'Technical editing, safety standard audits, and multi-lingual technical localization',
      ],
      sla: '100% specification compliance • Military & civilian aviation certified',
      tag: 'S1000D & ATA Compliant',
    },

    // 13. Background Verification
    {
      id: 'background-verification-bgv',
      category: 'verification',
      badge: 'PAN-INDIA & GLOBAL BGV',
      icon: <ShieldCheck size={28} color="#10B981" />,
      title: 'Pan-India Background Verification (BGV) & Compliance Screening',
      desc: 'Comprehensive employee background checks covering employment history, educational credentials, criminal court records, physical address checks, and global database screenings.',
      features: [
        'Physical on-ground address verification across 28 states and Union Territories in India',
        'University and board educational degree authentications with registrar verification',
        'Prior employer HR verification: tenure, designation, exit conduct, and compensation',
        'Police criminal record check and e-Court litigation database screening',
      ],
      sla: 'Express 48-hour turnarounds • Encrypted tamper-proof digital reports',
      tag: '100% Verified Screening',
    },
  ];

  const filteredServices = allServices.filter((srv) => {
    const matchesCat = activeCategory === 'all' || srv.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ background: '#f8faff', minHeight: '100vh' }}>
      {/* ── HEADER BANNER ────────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #070C1E 0%, #0B1228 50%, #111A38 100%)',
          color: '#ffffff',
          padding: '65px 0 55px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '900px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(37, 99, 235, 0.15)',
              border: '1px solid rgba(37, 99, 235, 0.3)',
              padding: '6px 18px',
              borderRadius: '100px',
              fontSize: '11.5px',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#93C5FD',
              marginBottom: '18px',
            }}
          >
            <Sparkles size={13} color="#60A5FA" />
            ISO 27001 Certified &bull; 65+ Global Services Portfolio
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '16px',
              letterSpacing: '-0.025em',
            }}
          >
            Enterprise Services &amp; Global BPO Solutions
          </h1>
          <p
            style={{
              fontSize: '16.5px',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 auto 28px',
            }}
          >
            Delivering high-precision operational excellence, AI automation workflows, healthcare revenue cycle management, custom software, and specialized business processing for 150+ international clients.
          </p>

          {/* Live Search Bar */}
          <div
            style={{
              position: 'relative',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            <Search
              size={18}
              color="#94a3b8"
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search services (e.g. Medical Coding, Cloud Engineering, AI Annotation, S1000D)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: '#ffffff',
                border: 'none',
                padding: '14px 18px 14px 46px',
                borderRadius: '12px',
                fontSize: '14.5px',
                color: '#0f172a',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* ── CATEGORY FILTER TABS ────────────────────────────────────── */}
      <div
        style={{
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          position: 'sticky',
          top: '68px',
          zIndex: 100,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
        }}
      >
        <div className="container" style={{ padding: '12px 20px', overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: '8px', minWidth: 'max-content' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                style={{
                  background: activeCategory === cat.id ? 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)' : 'rgba(37, 99, 235, 0.04)',
                  color: activeCategory === cat.id ? '#ffffff' : '#334155',
                  border: activeCategory === cat.id ? '1px solid #2563EB' : '1px solid rgba(37, 99, 235, 0.12)',
                  borderRadius: '100px',
                  padding: '8px 18px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  boxShadow: activeCategory === cat.id ? '0 4px 14px rgba(37, 99, 235, 0.25)' : 'none',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES LISTING GRID ────────────────────────────────────── */}
      <div className="container section-pad">
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '15px', color: '#64748b' }}>
            Showing <strong>{filteredServices.length}</strong> specialized services
          </div>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              style={{ background: 'none', border: 'none', color: '#2563EB', fontSize: '13px', cursor: 'pointer', fontWeight: 600 }}
            >
              Clear Search
            </button>
          )}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                padding: '34px 30px',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
            >
              {/* Top Row: Badge & ROI Tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span
                  style={{
                    background: 'rgba(37, 99, 235, 0.08)',
                    color: '#1E3A8A',
                    fontSize: '10.5px',
                    fontWeight: 800,
                    letterSpacing: '0.8px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  {srv.badge}
                </span>
                <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#10b981' }}>
                  {srv.tag}
                </span>
              </div>

              {/* Title & Icon */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(37, 99, 235, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {srv.icon}
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>
                  {srv.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7, marginBottom: '20px' }}>
                {srv.desc}
              </p>

              {/* Key Features / Capabilities */}
              <div style={{ marginBottom: '24px', flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#1E3A8A', marginBottom: '10px' }}>
                  Key Capabilities &amp; Deliverables
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {srv.features.map((feat, fidx) => (
                    <li key={fidx} style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SLA Metrics Box */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  fontSize: '12.5px',
                  color: '#475569',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Clock size={15} color="#0284C7" style={{ flexShrink: 0 }} />
                <span>
                  <strong>SLA:</strong> {srv.sla}
                </span>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={onOpenModal}
                className="btn-accent-custom"
                style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
              >
                <Send size={14} /> Request Quote &amp; Scope Discussion
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM CTA ────────────────────────────────────── */}
      <div className="cta-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Need a Custom Dedicated Pod or Service SLA?</h2>
          <p>
            We customize pods with specific skill sets, software proficiencies, and strict turnaround agreements. Talk to our solutions director today.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={onOpenModal}
              className="btn-cta-white"
            >
              <Send size={16} /> Request Custom Pod Proposal
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
              Call +91-8308906690
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
