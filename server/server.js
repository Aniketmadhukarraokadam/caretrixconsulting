import express from 'express';
import cors from 'cors';
import { db, initDatabase } from './db.js';

// Initialize SQLite tables and seed data
initDatabase();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    database: 'SQLite (node:sqlite)',
    timestamp: new Date().toISOString()
  });
});

// -------------------------------------------------------------
// PROPOSALS / LEADS
// -------------------------------------------------------------

// Get all proposals (with optional status filter)
app.get('/api/proposals', (req, res) => {
  try {
    const { status, search } = req.query;
    let query = 'SELECT * FROM proposals';
    const params = [];

    const conditions = [];
    if (status && status !== 'all') {
      conditions.push('status = ?');
      params.push(status);
    }
    if (search) {
      conditions.push('(contact_name LIKE ? OR company_name LIKE ? OR work_email LIKE ? OR required_service LIKE ?)');
      const term = `%${search}%`;
      params.push(term, term, term, term);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    query += ' ORDER BY created_at DESC';

    const stmt = db.prepare(query);
    const proposals = stmt.all(...params);
    res.json(proposals);
  } catch (err) {
    console.error('Error fetching proposals:', err);
    res.status(500).json({ error: 'Failed to retrieve proposals' });
  }
});

// Submit a new consultation proposal
app.post('/api/proposals', (req, res) => {
  try {
    const {
      contact_name,
      company_name,
      work_email,
      phone_number,
      required_service,
      project_scale,
      project_details
    } = req.body;

    if (!contact_name || !work_email || !required_service) {
      return res.status(400).json({ error: 'Please provide full name, work email, and required service' });
    }

    const stmt = db.prepare(`
      INSERT INTO proposals (contact_name, company_name, work_email, phone_number, required_service, project_scale, project_details, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'new')
    `);

    const result = stmt.run(
      contact_name,
      company_name || 'Individual / Confidential',
      work_email,
      phone_number || '',
      required_service,
      project_scale || 'Consultation Needed',
      project_details || ''
    );

    res.status(201).json({
      message: 'Consultation proposal recorded successfully in SQL database',
      proposalId: result.lastInsertRowid
    });
  } catch (err) {
    console.error('Error creating proposal:', err);
    res.status(500).json({ error: 'Database error saving proposal' });
  }
});

// Update proposal status
app.patch('/api/proposals/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'contacted', 'in_progress', 'closed'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }

    const stmt = db.prepare(`UPDATE proposals SET status = ? WHERE id = ?`);
    stmt.run(status, id);

    res.json({ message: 'Proposal status updated', id, status });
  } catch (err) {
    console.error('Error updating proposal:', err);
    res.status(500).json({ error: 'Failed to update proposal' });
  }
});

// Delete proposal
app.delete('/api/proposals/:id', (req, res) => {
  try {
    const { id } = req.params;
    const stmt = db.prepare(`DELETE FROM proposals WHERE id = ?`);
    stmt.run(id);
    res.json({ message: 'Proposal deleted successfully', id });
  } catch (err) {
    console.error('Error deleting proposal:', err);
    res.status(500).json({ error: 'Failed to delete proposal' });
  }
});

// -------------------------------------------------------------
// JOBS
// -------------------------------------------------------------

// Get jobs (optionally filtered by department or status)
app.get('/api/jobs', (req, res) => {
  try {
    const { department, status = 'active' } = req.query;
    let query = 'SELECT * FROM job_postings';
    const params = [];
    const conditions = [];

    if (status !== 'all') {
      conditions.push('status = ?');
      params.push(status);
    }
    if (department && department !== 'all') {
      conditions.push('department = ?');
      params.push(department);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    query += ' ORDER BY created_at DESC';

    const jobs = db.prepare(query).all(...params);
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ error: 'Failed to retrieve jobs' });
  }
});

// Create new job posting (Admin)
app.post('/api/jobs', (req, res) => {
  try {
    const { title, department, location, employment_type, experience, description, requirements } = req.body;
    if (!title || !department || !description) {
      return res.status(400).json({ error: 'Title, department, and description are required' });
    }

    const stmt = db.prepare(`
      INSERT INTO job_postings (title, department, location, employment_type, experience, description, requirements, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'active')
    `);

    const result = stmt.run(
      title,
      department,
      location || 'Pune / Navi Mumbai',
      employment_type || 'Full-time',
      experience || '2+ years',
      description,
      requirements || ''
    );

    res.status(201).json({ message: 'Job posting created', jobId: result.lastInsertRowid });
  } catch (err) {
    console.error('Error creating job:', err);
    res.status(500).json({ error: 'Failed to create job posting' });
  }
});

// Update job posting
app.put('/api/jobs/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { title, department, location, employment_type, experience, description, requirements, status } = req.body;

    const stmt = db.prepare(`
      UPDATE job_postings
      SET title = ?, department = ?, location = ?, employment_type = ?, experience = ?, description = ?, requirements = ?, status = ?
      WHERE id = ?
    `);

    stmt.run(title, department, location, employment_type, experience, description, requirements, status || 'active', id);
    res.json({ message: 'Job updated successfully', id });
  } catch (err) {
    console.error('Error updating job:', err);
    res.status(500).json({ error: 'Failed to update job' });
  }
});

// Delete job posting
app.delete('/api/jobs/:id', (req, res) => {
  try {
    const { id } = req.params;
    const stmt = db.prepare(`DELETE FROM job_postings WHERE id = ?`);
    stmt.run(id);
    res.json({ message: 'Job deleted', id });
  } catch (err) {
    console.error('Error deleting job:', err);
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

// -------------------------------------------------------------
// CANDIDATE APPLICATIONS
// -------------------------------------------------------------

// Submit application
app.post('/api/applications', (req, res) => {
  try {
    const {
      job_id,
      candidate_name,
      candidate_email,
      candidate_phone,
      domain_category,
      total_experience,
      resume_url,
      candidate_message
    } = req.body;

    if (!candidate_name || !candidate_email || !domain_category) {
      return res.status(400).json({ error: 'Candidate name, email, and domain category are required' });
    }

    const stmt = db.prepare(`
      INSERT INTO job_applications (job_id, candidate_name, candidate_email, candidate_phone, domain_category, total_experience, resume_url, candidate_message, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending')
    `);

    const result = stmt.run(
      job_id ? Number(job_id) : null,
      candidate_name,
      candidate_email,
      candidate_phone || '',
      domain_category,
      total_experience || 'Entry-level',
      resume_url || '',
      candidate_message || ''
    );

    res.status(201).json({
      message: 'Application submitted successfully to Caretrix HR database',
      applicationId: result.lastInsertRowid
    });
  } catch (err) {
    console.error('Error saving application:', err);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Get all applications (Admin)
app.get('/api/applications', (req, res) => {
  try {
    const { domain, status } = req.query;
    let query = `
      SELECT a.*, j.title as job_title 
      FROM job_applications a
      LEFT JOIN job_postings j ON a.job_id = j.id
    `;
    const conditions = [];
    const params = [];

    if (domain && domain !== 'all') {
      conditions.push('a.domain_category = ?');
      params.push(domain);
    }
    if (status && status !== 'all') {
      conditions.push('a.status = ?');
      params.push(status);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    query += ' ORDER BY a.created_at DESC';

    const apps = db.prepare(query).all(...params);
    res.json(apps);
  } catch (err) {
    console.error('Error fetching applications:', err);
    res.status(500).json({ error: 'Failed to fetch candidate applications' });
  }
});

// Update application status
app.patch('/api/applications/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const stmt = db.prepare(`UPDATE job_applications SET status = ? WHERE id = ?`);
    stmt.run(status, id);

    res.json({ message: 'Application status updated', id, status });
  } catch (err) {
    console.error('Error updating application status:', err);
    res.status(500).json({ error: 'Failed to update application status' });
  }
});

// Delete application
app.delete('/api/applications/:id', (req, res) => {
  try {
    const { id } = req.params;
    const stmt = db.prepare(`DELETE FROM job_applications WHERE id = ?`);
    stmt.run(id);
    res.json({ message: 'Application deleted', id });
  } catch (err) {
    console.error('Error deleting application:', err);
    res.status(500).json({ error: 'Failed to delete application' });
  }
});

// -------------------------------------------------------------
// NEWSLETTER
// -------------------------------------------------------------
app.post('/api/newsletter', (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email required' });
    }

    const stmt = db.prepare(`INSERT OR IGNORE INTO newsletter_subscribers (email) VALUES (?)`);
    stmt.run(email);
    res.status(201).json({ message: 'Subscribed to Caretrix industry updates' });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

// -------------------------------------------------------------
// ADMIN STATS / ANALYTICS
// -------------------------------------------------------------
app.get('/api/stats', (req, res) => {
  try {
    const totalProposals = db.prepare(`SELECT COUNT(*) as count FROM proposals`).get().count;
    const newProposals = db.prepare(`SELECT COUNT(*) as count FROM proposals WHERE status = 'new'`).get().count;
    const activeJobs = db.prepare(`SELECT COUNT(*) as count FROM job_postings WHERE status = 'active'`).get().count;
    const totalApplications = db.prepare(`SELECT COUNT(*) as count FROM job_applications`).get().count;
    const pendingApplications = db.prepare(`SELECT COUNT(*) as count FROM job_applications WHERE status = 'pending'`).get().count;

    res.json({
      totalProposals,
      newProposals,
      activeJobs,
      totalApplications,
      pendingApplications
    });
  } catch (err) {
    console.error('Error computing stats:', err);
    res.status(500).json({ error: 'Failed to compute dashboard stats' });
  }
});

// Serve client production build if available
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../client/dist');

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Start Express Server
app.listen(PORT, () => {
  console.log(`Caretrix SQL API Server listening at http://localhost:${PORT}`);
});

