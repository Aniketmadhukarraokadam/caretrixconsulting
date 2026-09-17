import React, { useState, useEffect } from 'react';
import {
  Database,
  Users,
  Briefcase,
  FileText,
  CheckCircle2,
  Clock,
  Trash2,
  ExternalLink,
  Plus,
  RefreshCw,
  Search,
  Filter,
  ShieldCheck,
} from 'lucide-react';
import { useToast } from '../components/Toast';

export default function Admin() {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('proposals'); // 'proposals' | 'applications' | 'jobs'
  const [stats, setStats] = useState({
    totalProposals: 0,
    newProposals: 0,
    activeJobs: 0,
    totalApplications: 0,
    pendingApplications: 0,
  });

  const [proposals, setProposals] = useState([]);
  const [applications, setApplications] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search & Filters
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Job Creation Modal
  const [showJobModal, setShowJobModal] = useState(false);
  const [newJob, setNewJob] = useState({
    title: '',
    department: 'IT Services',
    location: 'Pune, India (Hybrid)',
    employment_type: 'Full-time',
    experience: '2-5 years',
    description: '',
    requirements: '',
  });

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchProposals = async () => {
    try {
      setLoading(true);
      const url = `/api/proposals?status=${statusFilter}&search=${encodeURIComponent(search)}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setProposals(data);
      }
    } catch (e) {
      console.error(e);
      addToast('Error fetching proposals from SQL', 'error');
    } finally {
      setLoading(false);
    }
  };

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/applications?status=${statusFilter}`);
      if (res.ok) {
        const data = await res.json();
        setApplications(data);
      }
    } catch (e) {
      console.error(e);
      addToast('Error fetching applications from SQL', 'error');
    } finally {
      setLoading(false);
    }
  };

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/jobs?status=all');
      if (res.ok) {
        const data = await res.json();
        setJobs(data);
      }
    } catch (e) {
      console.error(e);
      addToast('Error fetching jobs from SQL', 'error');
    } finally {
      setLoading(false);
    }
  };

  const reloadData = () => {
    fetchStats();
    if (activeTab === 'proposals') fetchProposals();
    if (activeTab === 'applications') fetchApplications();
    if (activeTab === 'jobs') fetchJobs();
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    if (activeTab === 'proposals') fetchProposals();
    if (activeTab === 'applications') fetchApplications();
    if (activeTab === 'jobs') fetchJobs();
  }, [activeTab, statusFilter]);

  // Update proposal status in SQL
  const handleUpdateProposalStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/proposals/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        addToast(`Lead #${id} status changed to ${newStatus}`, 'success');
        fetchProposals();
        fetchStats();
      }
    } catch {
      addToast('Failed to update proposal', 'error');
    }
  };

  // Delete proposal
  const handleDeleteProposal = async (id) => {
    if (!window.confirm(`Delete lead #${id} permanently from SQL database?`)) return;
    try {
      const res = await fetch(`/api/proposals/${id}`, { method: 'DELETE' });
      if (res.ok) {
        addToast('Proposal removed from SQL database', 'success');
        fetchProposals();
        fetchStats();
      }
    } catch {
      addToast('Failed to delete proposal', 'error');
    }
  };

  // Update application status in SQL
  const handleUpdateAppStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/applications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        addToast(`Application #${id} status changed to ${newStatus}`, 'success');
        fetchApplications();
        fetchStats();
      }
    } catch {
      addToast('Failed to update candidate status', 'error');
    }
  };

  // Delete application
  const handleDeleteApplication = async (id) => {
    if (!window.confirm(`Delete applicant #${id} from SQL database?`)) return;
    try {
      const res = await fetch(`/api/applications/${id}`, { method: 'DELETE' });
      if (res.ok) {
        addToast('Applicant record deleted', 'success');
        fetchApplications();
        fetchStats();
      }
    } catch {
      addToast('Failed to delete applicant', 'error');
    }
  };

  // Create Job
  const handleCreateJob = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newJob),
      });
      if (res.ok) {
        addToast('New Job Posting created in SQL DB!', 'success');
        setShowJobModal(false);
        setNewJob({
          title: '',
          department: 'IT Services',
          location: 'Pune, India (Hybrid)',
          employment_type: 'Full-time',
          experience: '2-5 years',
          description: '',
          requirements: '',
        });
        fetchJobs();
        fetchStats();
      }
    } catch {
      addToast('Failed to create job', 'error');
    }
  };

  // Delete Job
  const handleDeleteJob = async (id) => {
    if (!window.confirm(`Delete job opening #${id} from SQL database?`)) return;
    try {
      const res = await fetch(`/api/jobs/${id}`, { method: 'DELETE' });
      if (res.ok) {
        addToast('Job posting deleted', 'success');
        fetchJobs();
        fetchStats();
      }
    } catch {
      addToast('Failed to delete job', 'error');
    }
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Header */}
      <section style={{ background: 'var(--gradient-dark)', color: 'white', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="eyebrow eyebrow-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Database size={14} /> SQLite Backend Control Center
              </span>
              <h1 style={{ color: 'white', fontSize: '2.4rem', marginTop: '0.3rem' }}>
                Caretrix Enterprise SQL Dashboard
              </h1>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem' }}>
                Direct CRUD management of consultation leads, candidate resumes, and live job openings.
              </p>
            </div>

            <button onClick={reloadData} className="btn btn-outline-white btn-sm" style={{ display: 'inline-flex', gap: '6px' }}>
              <RefreshCw size={15} /> Refresh SQL Data
            </button>
          </div>
        </div>
      </section>

      {/* KPI Cards */}
      <div className="container" style={{ marginTop: '-1.5rem', position: 'relative', zIndex: 10 }}>
        <div className="grid-4" style={{ gap: '1.25rem' }}>
          <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--secondary)' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Total Client Leads
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-dark)', margin: '4px 0' }}>
              {stats.totalProposals}
            </div>
            <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>
              {stats.newProposals} New / Uncontacted
            </span>
          </div>

          <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid #10b981' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Job Applicants
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-dark)', margin: '4px 0' }}>
              {stats.totalApplications}
            </div>
            <span style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600 }}>
              {stats.pendingApplications} Pending HR Review
            </span>
          </div>

          <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Active Openings
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-dark)', margin: '4px 0' }}>
              {stats.activeJobs}
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>
              Published in live job board
            </span>
          </div>

          <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid #6366f1' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Database Engine
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-dark)', margin: '6px 0' }}>
              SQLite 3.x
            </div>
            <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>
              ● Persistent &amp; Parameterized
            </span>
          </div>
        </div>
      </div>

      {/* Tabs & Controls */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', background: '#e2e8f0', padding: '4px', borderRadius: '10px' }}>
            <button
              onClick={() => {
                setActiveTab('proposals');
                setStatusFilter('all');
              }}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'proposals' ? 'white' : 'transparent',
                color: activeTab === 'proposals' ? 'var(--primary-dark)' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: activeTab === 'proposals' ? 'var(--shadow-sm)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <FileText size={16} /> Client Proposals ({stats.totalProposals})
            </button>

            <button
              onClick={() => {
                setActiveTab('applications');
                setStatusFilter('all');
              }}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'applications' ? 'white' : 'transparent',
                color: activeTab === 'applications' ? 'var(--primary-dark)' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: activeTab === 'applications' ? 'var(--shadow-sm)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Users size={16} /> Job Applications ({stats.totalApplications})
            </button>

            <button
              onClick={() => {
                setActiveTab('jobs');
                setStatusFilter('all');
              }}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'jobs' ? 'white' : 'transparent',
                color: activeTab === 'jobs' ? 'var(--primary-dark)' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: activeTab === 'jobs' ? 'var(--shadow-sm)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Briefcase size={16} /> Manage Job Openings
            </button>
          </div>

          {activeTab === 'jobs' && (
            <button onClick={() => setShowJobModal(true)} className="btn btn-primary btn-sm">
              <Plus size={16} /> Add New Job Opening
            </button>
          )}
        </div>

        {/* Tab 1: Proposals Manager */}
        {activeTab === 'proposals' && (
          <div className="card" style={{ padding: '1.5rem', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: '280px' }}>
                  <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    placeholder="Search name, company, email..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && fetchProposals()}
                    className="form-control"
                    style={{ paddingLeft: '2rem', height: '38px', fontSize: '0.85rem' }}
                  />
                </div>
                <button onClick={fetchProposals} className="btn btn-outline btn-sm">
                  Search
                </button>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="form-control"
                  style={{ width: '150px', height: '38px', fontSize: '0.85rem' }}
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="in_progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>Querying SQLite proposals table...</div>
            ) : proposals.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                No consultation proposals found in the database.
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9', color: 'var(--primary-dark)', borderBottom: '2px solid #cbd5e1' }}>
                    <th style={{ padding: '12px' }}>ID</th>
                    <th style={{ padding: '12px' }}>Client / Company</th>
                    <th style={{ padding: '12px' }}>Contact Details</th>
                    <th style={{ padding: '12px' }}>Service / Scale</th>
                    <th style={{ padding: '12px' }}>Scope Summary</th>
                    <th style={{ padding: '12px' }}>Status</th>
                    <th style={{ padding: '12px' }}>Date</th>
                    <th style={{ padding: '12px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {proposals.map((p) => (
                    <tr key={p.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px', fontWeight: 700 }}>#{p.id}</td>
                      <td style={{ padding: '12px' }}>
                        <div style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>{p.contact_name}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{p.company_name}</div>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <div><a href={`mailto:${p.work_email}`} style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>{p.work_email}</a></div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{p.phone_number || 'N/A'}</div>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ fontWeight: 600 }}>{p.required_service}</span>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{p.project_scale}</div>
                      </td>
                      <td style={{ padding: '12px', maxWidth: '220px' }}>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.82rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={p.project_details}>
                          {p.project_details || 'No details provided'}
                        </p>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <select
                          value={p.status}
                          onChange={(e) => handleUpdateProposalStatus(p.id, e.target.value)}
                          style={{
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            border: '1px solid #cbd5e1',
                            background:
                              p.status === 'new'
                                ? '#fef3c7'
                                : p.status === 'in_progress'
                                ? '#e0f2fe'
                                : p.status === 'contacted'
                                ? '#dcfce7'
                                : '#f1f5f9',
                            color:
                              p.status === 'new'
                                ? '#92400e'
                                : p.status === 'in_progress'
                                ? '#0369a1'
                                : p.status === 'contacted'
                                ? '#166534'
                                : '#475569',
                          }}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="in_progress">In Progress</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                      <td style={{ padding: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                        {new Date(p.created_at).toLocaleDateString()}
                      </td>
                      <td style={{ padding: '12px' }}>
                        <button
                          onClick={() => handleDeleteProposal(p.id)}
                          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }}
                          title="Delete Lead"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Tab 2: Job Applications */}
        {activeTab === 'applications' && (
          <div className="card" style={{ padding: '1.5rem', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-dark)' }}>
                Recruitment Candidate Database
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="form-control"
                  style={{ width: '160px', height: '38px', fontSize: '0.85rem' }}
                >
                  <option value="all">All Applicants</option>
                  <option value="pending">Pending</option>
                  <option value="reviewing">Reviewing</option>
                  <option value="interviewing">Interviewing</option>
                  <option value="offered">Offered</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>Querying candidate applications...</div>
            ) : applications.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                No candidate applications recorded yet.
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9', color: 'var(--primary-dark)', borderBottom: '2px solid #cbd5e1' }}>
                    <th style={{ padding: '12px' }}>ID</th>
                    <th style={{ padding: '12px' }}>Candidate</th>
                    <th style={{ padding: '12px' }}>Domain &amp; Exp</th>
                    <th style={{ padding: '12px' }}>Applied Position</th>
                    <th style={{ padding: '12px' }}>Resume / Dossier</th>
                    <th style={{ padding: '12px' }}>Applicant Notes</th>
                    <th style={{ padding: '12px' }}>Status</th>
                    <th style={{ padding: '12px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px', fontWeight: 700 }}>#{app.id}</td>
                      <td style={{ padding: '12px' }}>
                        <div style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>{app.candidate_name}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                          <a href={`mailto:${app.candidate_email}`} style={{ color: 'var(--secondary)' }}>{app.candidate_email}</a>
                        </div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{app.candidate_phone}</div>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ fontWeight: 600 }}>{app.domain_category}</span>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{app.total_experience}</div>
                      </td>
                      <td style={{ padding: '12px', fontWeight: 500 }}>
                        {app.job_title || 'General Spontaneous Application'}
                      </td>
                      <td style={{ padding: '12px' }}>
                        {app.resume_url ? (
                          <a
                            href={app.resume_url}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              background: '#f0f9ff',
                              color: 'var(--secondary)',
                              padding: '4px 8px',
                              borderRadius: '4px',
                              fontWeight: 600,
                              fontSize: '0.8rem',
                            }}
                          >
                            View CV <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span style={{ color: 'var(--text-muted)' }}>None</span>
                        )}
                      </td>
                      <td style={{ padding: '12px', maxWidth: '200px' }}>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.82rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={app.candidate_message}>
                          {app.candidate_message || 'N/A'}
                        </p>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <select
                          value={app.status}
                          onChange={(e) => handleUpdateAppStatus(app.id, e.target.value)}
                          style={{
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            border: '1px solid #cbd5e1',
                          }}
                        >
                          <option value="pending">Pending</option>
                          <option value="reviewing">Reviewing</option>
                          <option value="interviewing">Interviewing</option>
                          <option value="offered">Offered</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <button
                          onClick={() => handleDeleteApplication(app.id)}
                          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }}
                          title="Delete Applicant"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Tab 3: Job Openings Manager */}
        {activeTab === 'jobs' && (
          <div className="card" style={{ padding: '1.5rem', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem' }}>All Current Positions in SQL Database</h3>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>Loading jobs...</div>
            ) : jobs.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                No job postings found. Click "Add New Job Opening" to post one!
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: '#f1f5f9', color: 'var(--primary-dark)', borderBottom: '2px solid #cbd5e1' }}>
                    <th style={{ padding: '12px' }}>ID</th>
                    <th style={{ padding: '12px' }}>Role Title</th>
                    <th style={{ padding: '12px' }}>Department</th>
                    <th style={{ padding: '12px' }}>Location</th>
                    <th style={{ padding: '12px' }}>Experience</th>
                    <th style={{ padding: '12px' }}>Status</th>
                    <th style={{ padding: '12px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px', fontWeight: 700 }}>#{job.id}</td>
                      <td style={{ padding: '12px', fontWeight: 600, color: 'var(--primary-dark)' }}>{job.title}</td>
                      <td style={{ padding: '12px' }}>{job.department}</td>
                      <td style={{ padding: '12px' }}>{job.location}</td>
                      <td style={{ padding: '12px' }}>{job.experience}</td>
                      <td style={{ padding: '12px' }}>
                        <span
                          style={{
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            background: job.status === 'active' ? '#dcfce7' : '#f1f5f9',
                            color: job.status === 'active' ? '#166534' : '#64748b',
                          }}
                        >
                          {job.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }}
                          title="Delete Job"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      {/* Modal: Add Job */}
      {showJobModal && (
        <div className="modal-overlay" onClick={() => setShowJobModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="eyebrow eyebrow-teal">HR Admin</span>
              <h2 style={{ fontSize: '1.6rem', marginTop: '0.3rem' }}>Create New Job Opening</h2>
            </div>

            <form onSubmit={handleCreateJob}>
              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                  Position Title *
                </label>
                <input
                  type="text"
                  required
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  className="form-control"
                  placeholder="e.g. Lead DevOps Engineer"
                />
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Department *
                  </label>
                  <select
                    value={newJob.department}
                    onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                    className="form-control"
                  >
                    <option value="IT Services">IT Services</option>
                    <option value="Healthcare Operations">Healthcare Operations</option>
                    <option value="Verification Services">Verification Services</option>
                    <option value="BPO Solutions">BPO Solutions</option>
                    <option value="KPO Operations">KPO Operations</option>
                    <option value="Workforce & Staffing">Workforce & Staffing</option>
                  </select>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Location
                  </label>
                  <input
                    type="text"
                    value={newJob.location}
                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                    className="form-control"
                    placeholder="Pune / Navi Mumbai (Hybrid)"
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Experience Required
                  </label>
                  <input
                    type="text"
                    value={newJob.experience}
                    onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })}
                    className="form-control"
                    placeholder="e.g. 3-6 years"
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Employment Type
                  </label>
                  <input
                    type="text"
                    value={newJob.employment_type}
                    onChange={(e) => setNewJob({ ...newJob, employment_type: e.target.value })}
                    className="form-control"
                    placeholder="Full-time"
                  />
                </div>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                  Role Description *
                </label>
                <textarea
                  rows="3"
                  required
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  className="form-control"
                  placeholder="Primary duties and responsibilities..."
                ></textarea>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                  Key Requirements &amp; Certifications
                </label>
                <textarea
                  rows="2"
                  value={newJob.requirements}
                  onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                  className="form-control"
                  placeholder="Required skills, toolsets, or certifications..."
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Save Position to SQL DB
                </button>
                <button
                  type="button"
                  onClick={() => setShowJobModal(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
