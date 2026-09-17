import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  X,
  Search,
  Users,
  Award,
  TrendingUp,
  Heart,
} from 'lucide-react';
import { useToast } from '../components/Toast';

export default function Careers() {
  const { addToast } = useToast();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');

  // Application Modal state
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    candidate_name: '',
    candidate_email: '',
    candidate_phone: '',
    domain_category: 'IT Services',
    total_experience: '3-5 years',
    resume_url: '',
    candidate_message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch jobs from SQL backend
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/jobs?status=active');
      if (res.ok) {
        const data = await res.json();
        setJobs(data);
      }
    } catch (err) {
      console.error('Error fetching jobs:', err);
      addToast('Could not load jobs from SQL database', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const openApplyModal = (job = null) => {
    setSelectedJob(job);
    if (job) {
      setFormData((prev) => ({
        ...prev,
        domain_category: job.department,
      }));
    }
    setIsModalOpen(true);
  };

  const closeApplyModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        job_id: selectedJob ? selectedJob.id : null,
      };

      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        addToast('Application saved to Caretrix HR SQL database!', 'success');
        closeApplyModal();
        setFormData({
          candidate_name: '',
          candidate_email: '',
          candidate_phone: '',
          domain_category: 'IT Services',
          total_experience: '3-5 years',
          resume_url: '',
          candidate_message: '',
        });
      } else {
        addToast(data.error || 'Failed to submit application', 'error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      addToast('Network error connecting to SQL backend', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    const matchDept =
      selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchKeyword =
      !searchKeyword ||
      job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.description.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchDept && matchKeyword;
  });

  const perks = [
    { icon: <TrendingUp size={24} color="#00a6c7" />, title: 'Accelerated Career Trajectory', desc: 'Promotions and role expansion based strictly on performance milestones.' },
    { icon: <Award size={24} color="#f7941d" />, title: 'Industry Certifications Sponsored', desc: 'Sponsorship for AWS, HIPAA, CPC Medical Coding, and Agile certifications.' },
    { icon: <Users size={24} color="#10b981" />, title: 'Global Exposure', desc: 'Direct interaction with international clients across the US, UK, and APAC markets.' },
    { icon: <Heart size={24} color="#ec4899" />, title: 'Comprehensive Health & Wellness', desc: 'Robust health insurance coverage, mental wellness support, and flexible shifts.' },
  ];

  return (
    <div style={{ background: '#030712', color: '#ffffff' }}>
      {/* Header */}
      <section className="page-header">
        <div className="container-fluid">
          <span className="eyebrow eyebrow-cyber">Join Caretrix</span>
          <h1>Build the Future of Global Operations</h1>
          <p>
            Explore rewarding career paths across SAP S/4HANA Consulting, 8D Motion &amp; MarTech, Healthcare RCM, Background Screening, and Global Client Management.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section style={{ background: '#060e1e', padding: '4.5rem 0', borderBottom: '1px solid rgba(0, 240, 255, 0.15)' }}>
        <div className="container-fluid">
          <div className="text-center mx-auto" style={{ maxWidth: '600px', marginBottom: '3rem' }}>
            <span className="eyebrow eyebrow-cyber">Life at Caretrix</span>
            <h2 className="section-title">Why Professionals Thrive Here</h2>
          </div>

          <div className="grid-4">
            {perks.map((p, i) => (
              <div key={i} className="card">
                <div style={{ marginBottom: '0.75rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: '1.6' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section-py" id="openings">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <span className="eyebrow eyebrow-accent">Live Openings</span>
              <h2 className="section-title">Available Positions in Pune &amp; Navi Mumbai</h2>
              <p className="section-subtitle">
                Applications submitted here are recorded instantly into our internal HR SQL recruitment portal.
              </p>
            </div>

            <button onClick={() => openApplyModal(null)} className="btn btn-primary">
              <Send size={16} /> Submit General Resume / CV
            </button>
          </div>

          {/* Search & Department Filters */}
          <div className="card" style={{ padding: '1.25rem', marginBottom: '2rem' }}>
            <div className="grid-2" style={{ gap: '1rem', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder="Search job title, keywords or technology..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="form-control"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
                {['all', 'SAP Enterprise Solutions', 'IT Services', 'Healthcare Operations', 'Verification Services', 'BPO Solutions', 'KPO Operations'].map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    style={{
                      padding: '0.45rem 0.9rem',
                      borderRadius: '8px',
                      border: selectedDepartment === dept ? '1.5px solid var(--secondary)' : '1px solid #cbd5e1',
                      background: selectedDepartment === dept ? 'rgba(0, 166, 199, 0.1)' : 'white',
                      color: selectedDepartment === dept ? 'var(--secondary)' : 'var(--text-main)',
                      fontWeight: 600,
                      fontSize: '0.82rem',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                    }}
                  >
                    {dept === 'all' ? 'All Departments' : dept}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Listings */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Fetching live job positions from SQL database...</div>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="card text-center" style={{ padding: '3rem' }}>
              <Briefcase size={48} color="#94a3b8" style={{ margin: '0 auto 1rem' }} />
              <h3>No matching positions currently active</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Try selecting another department or submit a general application for upcoming requisitions.
              </p>
              <button onClick={() => openApplyModal(null)} className="btn btn-accent">
                Submit Spontaneous Application
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filteredJobs.map((job) => (
                <div key={job.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <div style={{ maxWidth: '750px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          background: 'rgba(0, 166, 199, 0.1)',
                          color: 'var(--secondary)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                        }}
                      >
                        {job.department}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        <MapPin size={14} style={{ display: 'inline', verticalAlign: '-2px' }} /> {job.location}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        <Clock size={14} style={{ display: 'inline', verticalAlign: '-2px' }} /> {job.employment_type} &bull; {job.experience}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '0.75rem' }}>
                      {job.description}
                    </p>

                    {job.requirements && (
                      <div style={{ fontSize: '0.85rem', color: 'var(--primary-dark)', background: '#f8fafc', padding: '6px 12px', borderRadius: '6px' }}>
                        <strong>Requirements:</strong> {job.requirements}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() => openApplyModal(job)}
                      className="btn btn-primary"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      Apply Now <Send size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeApplyModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeApplyModal}>
              <X size={20} />
            </button>

            <div style={{ marginBottom: '1.5rem' }}>
              <span className="eyebrow eyebrow-teal">Job Application</span>
              <h2 style={{ fontSize: '1.6rem', marginTop: '0.3rem' }}>
                {selectedJob ? `Apply: ${selectedJob.title}` : 'Submit Career Application'}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Your submission will be immediately recorded into the Caretrix recruitment SQL database for HR evaluation.
              </p>
            </div>

            <form onSubmit={handleSubmitApplication}>
              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="candidate_name"
                    value={formData.candidate_name}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="e.g. Priya Sharma"
                    required
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="candidate_email"
                    value={formData.candidate_email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="priya.sharma@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="candidate_phone"
                    value={formData.candidate_phone}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Domain Category *
                  </label>
                  <select
                    name="domain_category"
                    value={formData.domain_category}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="SAP Enterprise Solutions">SAP Enterprise Solutions (S/4HANA, BTP, FICO, ABAP, BASIS)</option>
                    <option value="IT Services">IT Services (Software, DevOps, Cloud)</option>
                    <option value="Healthcare Operations">Healthcare Operations (RCM, Medical Coding)</option>
                    <option value="Verification Services">Verification Services (BGV Checks)</option>
                    <option value="BPO Solutions">BPO Solutions (Voice / Customer Support)</option>
                    <option value="KPO Operations">KPO Operations (Analytics, ePub, Research)</option>
                    <option value="Workforce & Staffing">Workforce &amp; Staffing</option>
                  </select>
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Total Professional Experience *
                  </label>
                  <select
                    name="total_experience"
                    value={formData.total_experience}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="Entry-level">Entry-Level / Fresher</option>
                    <option value="1-3 years">1 - 3 Years</option>
                    <option value="3-5 years">3 - 5 Years</option>
                    <option value="5-7 years">5 - 7 Years</option>
                    <option value="7+ years">7+ Years</option>
                  </select>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                    Resume Link (Drive / Dropbox / Portfolio) *
                  </label>
                  <input
                    type="url"
                    name="resume_url"
                    value={formData.resume_url}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="https://drive.google.com/file/d/..."
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>
                  Cover Note / Skills Summary
                </label>
                <textarea
                  name="candidate_message"
                  rows="3"
                  value={formData.candidate_message}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Summarize your key skills, past achievements, or current notice period..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-accent"
                style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
              >
                {isSubmitting ? 'Saving to SQL Database...' : 'Submit Application to HR'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
