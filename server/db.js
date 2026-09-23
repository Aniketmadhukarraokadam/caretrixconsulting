import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'caretrix.db');

export const db = new DatabaseSync(dbPath);

export function initDatabase() {
  // 1. Create Proposals Table (Consultation / Leads)
  db.exec(`
    CREATE TABLE IF NOT EXISTS proposals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      contact_name TEXT NOT NULL,
      company_name TEXT NOT NULL,
      work_email TEXT NOT NULL,
      phone_number TEXT NOT NULL,
      required_service TEXT NOT NULL,
      project_scale TEXT NOT NULL,
      project_details TEXT NOT NULL,
      status TEXT DEFAULT 'new' CHECK(status IN ('new', 'contacted', 'in_progress', 'closed')),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // 2. Create Job Postings Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS job_postings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      department TEXT NOT NULL,
      location TEXT NOT NULL,
      employment_type TEXT NOT NULL,
      experience TEXT NOT NULL,
      description TEXT NOT NULL,
      requirements TEXT,
      status TEXT DEFAULT 'active' CHECK(status IN ('active', 'closed')),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // 3. Create Job Applications Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS job_applications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      job_id INTEGER,
      candidate_name TEXT NOT NULL,
      candidate_email TEXT NOT NULL,
      candidate_phone TEXT NOT NULL,
      domain_category TEXT NOT NULL,
      total_experience TEXT NOT NULL,
      resume_url TEXT NOT NULL,
      candidate_message TEXT,
      status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'reviewing', 'interviewing', 'offered', 'rejected')),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(job_id) REFERENCES job_postings(id) ON DELETE SET NULL
    );
  `);

  // 4. Create Newsletter Subscriptions Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Seed sample jobs if table is empty
  const jobCount = db.prepare(`SELECT COUNT(*) as count FROM job_postings`).get().count;
  if (jobCount === 0) {
    const insertJob = db.prepare(`
      INSERT INTO job_postings (title, department, location, employment_type, experience, description, requirements, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertJob.run(
      'Senior Full Stack React / Node Engineer',
      'Custom Software & ERP',
      'Pune, India (Hybrid)',
      'Full-time',
      '4-7 years',
      'Lead architecture and frontend/backend integration for high-concurrency client cloud applications, REST/GraphQL APIs, and enterprise portals.',
      'Proficiency in React.js, Node.js/Express, relational SQL databases, Docker, and AWS/Azure cloud microservices.',
      'active'
    );

    insertJob.run(
      'Healthcare RCM & Medical Coding Specialist',
      'Healthcare BPO',
      'Navi Mumbai / Pune, India (On-site)',
      'Full-time',
      '2-5 years',
      'Manage revenue cycle operations, ICD-10-CM/CPT coding verifications, prior authorizations, and claims denial management for US healthcare clients.',
      'CPC / CCS certified preferred, sound understanding of HIPAA guidelines, and US healthcare payer EDI 837/835 workflows.',
      'active'
    );

    insertJob.run(
      'AI Data Annotation & Computer Vision Lead',
      'AI & Data Annotation',
      'Bengaluru / Pune, India (Hybrid)',
      'Full-time',
      '3-6 years',
      'Direct large-scale dataset labeling workflows across image segmentation, video bounding boxes, LiDAR point clouds, and NLP datasets for autonomous AI models.',
      'Experience managing annotation platforms (CVAT, Labelbox), QA auditing, and client ML training pipeline deliveries.',
      'active'
    );

    insertJob.run(
      'Commercial Real Estate Lease Abstraction Analyst',
      'Real Estate & Title BPO',
      'Pune, India (On-site)',
      'Full-time',
      '2-4 years',
      'Perform detailed lease abstraction, CAM expense reconciliation audits, rent roll verification, and property accounting across commercial portfolios.',
      'Strong grasp of US/UK commercial lease terminology, financial modeling, and property management systems (Yardi, MRI).',
      'active'
    );

    insertJob.run(
      'STM Publishing & S1000D XML Conversion Specialist',
      'STM Publishing & Prepress',
      'Pune, India (Hybrid)',
      'Full-time',
      '2-5 years',
      'Lead automated journal prepress typesetting, ePUB3/Kindle production, JATS/BITS XML restructuring, and S1000D defense documentation conversion.',
      'Deep knowledge of XML/XSLT, InDesign, MathML, Section 508 / WCAG 2.1 AA digital accessibility standards.',
      'active'
    );

    insertJob.run(
      'Senior Cloud & DevOps Solutions Architect',
      'Cloud & Infrastructure Services',
      'Pune, India (Hybrid)',
      'Full-time',
      '4-6 years',
      'Architect, deploy, and manage enterprise cloud infrastructure, Kubernetes clusters, CI/CD pipelines, and high-throughput microservices for global enterprise clients.',
      'Hands-on expertise in AWS/Azure cloud architecture, Terraform IaC, Docker, Kubernetes, and enterprise observability stacks.',
      'active'
    );

    insertJob.run(
      'Senior SAP S/4HANA FICO Functional Consultant',
      'SAP Enterprise Solutions',
      'Pune / Bengaluru, India (Hybrid)',
      'Full-time',
      '5-8 years',
      'Lead end-to-end SAP S/4HANA Finance & Controlling implementations, Central Finance architecture, New GL, AP/AR automation, Asset Accounting, and CO-PA configuration for global multinational clients.',
      'SAP Certified Application Associate in S/4HANA Financial Accounting, hands-on experience in S/4HANA greenfield/brownfield migrations, integration with MM/SD, and S/4HANA Embedded Analytics.',
      'active'
    );

    insertJob.run(
      'SAP ABAP on HANA & BTP Cloud Developer',
      'SAP Enterprise Solutions',
      'Bengaluru / Pune, India (Hybrid)',
      'Full-time',
      '4-7 years',
      'Design modern SAP extensibility on SAP Business Technology Platform (BTP), Core Data Services (CDS) Views, RESTful Application Programming (RAP), OData services, and Fiori UI5 user interfaces.',
      'Expertise in ABAP on HANA, SAP BTP Integration Suite, SAP Fiori / UI5, SAP Gateway, and SAP Cloud Connector.',
      'active'
    );

    insertJob.run(
      'SAP BASIS & Cloud Migration Specialist',
      'SAP Enterprise Solutions',
      'Pune, India (Hybrid)',
      'Full-time',
      '4-8 years',
      'Manage SAP HANA database administration, system refreshes, OS/DB migrations to AWS/Azure, patch management, high-availability architecture, and disaster recovery.',
      'Hands-on expertise in SAP HANA 2.0 administration, SAP NetWeaver, Solution Manager, SUM (Software Update Manager), and cloud hyper-scaler deployments.',
      'active'
    );

    insertJob.run(
      'Background Verification (BGV) Operations Lead',
      'Verification & Compliance',
      'Pune, India (On-site)',
      'Full-time',
      '3-6 years',
      'Supervise end-to-end background check workflows, criminal records vetting, identity verification, court records screening, and compliance audits.',
      'Demonstrated experience in corporate BGV screening, compliance audits, and SLA turnaround reporting.',
      'active'
    );

    insertJob.run(
      '24/7 Global BPO & Customer Experience Supervisor',
      '24/7 Global BPO Pods',
      'Navi Mumbai, India (Rotational Shifts)',
      'Full-time',
      '3-5 years',
      'Direct omnichannel customer support floor operations, monitor CSAT and FCR KPIs, train support associates, and maintain 24/7 delivery uptime.',
      'Excellent verbal English communication, prior experience leading teams of 15+ agents in inbound/outbound support.',
      'active'
    );
  }

  // Ensure SAP positions are present
  const sapJobExists = db.prepare(`SELECT COUNT(*) as count FROM job_postings WHERE department = 'SAP Enterprise Solutions'`).get().count;
  if (sapJobExists === 0) {
    const insertJob = db.prepare(`
      INSERT INTO job_postings (title, department, location, employment_type, experience, description, requirements, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'active')
    `);

    insertJob.run(
      'Senior SAP S/4HANA FICO Functional Consultant',
      'SAP Enterprise Solutions',
      'Pune / Bengaluru, India (Hybrid)',
      'Full-time',
      '5-8 years',
      'Lead end-to-end SAP S/4HANA Finance & Controlling implementations, Central Finance architecture, New GL, AP/AR automation, Asset Accounting, and CO-PA configuration for global multinational clients.',
      'SAP Certified Application Associate in S/4HANA Financial Accounting, hands-on experience in S/4HANA greenfield/brownfield migrations, integration with MM/SD, and S/4HANA Embedded Analytics.'
    );

    insertJob.run(
      'SAP ABAP on HANA & BTP Cloud Developer',
      'SAP Enterprise Solutions',
      'Bengaluru / Pune, India (Hybrid)',
      'Full-time',
      '4-7 years',
      'Design modern SAP extensibility on SAP Business Technology Platform (BTP), Core Data Services (CDS) Views, RESTful Application Programming (RAP), OData services, and Fiori UI5 user interfaces.',
      'Expertise in ABAP on HANA, SAP BTP Integration Suite, SAP Fiori / UI5, SAP Gateway, and SAP Cloud Connector.'
    );

    insertJob.run(
      'SAP BASIS & Cloud Migration Specialist',
      'SAP Enterprise Solutions',
      'Pune, India (Hybrid)',
      'Full-time',
      '4-8 years',
      'Manage SAP HANA database administration, system refreshes, OS/DB migrations to AWS/Azure, patch management, high-availability architecture, and disaster recovery.',
      'Hands-on expertise in SAP HANA 2.0 administration, SAP NetWeaver, Solution Manager, SUM (Software Update Manager), and cloud hyper-scaler deployments.'
    );
  }

  // Seed sample proposals if empty
  const proposalCount = db.prepare(`SELECT COUNT(*) as count FROM proposals`).get().count;
  if (proposalCount === 0) {
    const insertProposal = db.prepare(`
      INSERT INTO proposals (contact_name, company_name, work_email, phone_number, required_service, project_scale, project_details, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertProposal.run(
      'Vikram Singhania',
      'NexGen Health Systems',
      'v.singhania@nexgenhealth.io',
      '+91 98230 45678',
      'Healthcare Operations',
      '20-100 Resources',
      'Seeking end-to-end RCM scaling and medical billing operations team to support 45 clinics across North America.',
      'in_progress'
    );

    insertProposal.run(
      'Sarah Jenkins',
      'Global FinScale UK',
      'sarah.j@finscale.co.uk',
      '+44 20 7946 0912',
      'Verification Services',
      '5-20 Resources',
      'Need an outsourced international background verification desk for pre-employment screening across APAC and EMEA.',
      'new'
    );
  }

  // Ensure an SAP proposal is present in admin database
  const sapProposalExists = db.prepare(`SELECT COUNT(*) as count FROM proposals WHERE required_service LIKE '%SAP%'`).get().count;
  if (sapProposalExists === 0) {
    const insertProposal = db.prepare(`
      INSERT INTO proposals (contact_name, company_name, work_email, phone_number, required_service, project_scale, project_details, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertProposal.run(
      'Marcus Schneider',
      'Nordic Heavy Machinery AG',
      'm.schneider@nordicmachinery.de',
      '+49 89 1234 5678',
      'SAP S/4HANA & Enterprise ERP',
      '20-100 Resources',
      'Planning brownfield migration from SAP ECC 6.0 EHP8 to SAP S/4HANA Cloud with Central Finance and Fiori UI5 apps.',
      'new'
    );
  }

  // Seed sample applications if empty
  const appCount = db.prepare(`SELECT COUNT(*) as count FROM job_applications`).get().count;
  if (appCount === 0) {
    const insertApp = db.prepare(`
      INSERT INTO job_applications (job_id, candidate_name, candidate_email, candidate_phone, domain_category, total_experience, resume_url, candidate_message, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertApp.run(
      1,
      'Rohan Kulkarni',
      'rohan.kulkarni@example.com',
      '+91 91234 56789',
      'IT Services',
      '5-7 years',
      'https://drive.google.com/file/d/sample-rohan-resume/view',
      '5 years of experience building enterprise React SPAs and microservices backends with SQL.',
      'reviewing'
    );
  }
}
