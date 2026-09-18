import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import ConsultationModal from './components/ConsultationModal';
import { ToastProvider } from './components/Toast';

// Keep Home directly imported for instant First Contentful Paint
import Home from './pages/Home';

// Lazy load all secondary routes to minimize initial bundle size
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Industries = lazy(() => import('./pages/Industries'));
const Projects = lazy(() => import('./pages/Projects'));
const Global = lazy(() => import('./pages/Global'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));
const VengeanceCopilotDock = lazy(() =>
  import('./components/extensions/VengeanceAI').then((m) => ({ default: m.VengeanceCopilotDock }))
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        background: '#f8fafc',
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '3px solid #e2e8f0',
          borderTopColor: '#0052cc',
          animation: 'spin 0.6s linear infinite',
        }}
      />
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ToastProvider>
      <div className="app-container">
        <ScrollToTop />
        <ParticleCanvas />
        <Navbar onOpenModal={openModal} />

        <main className="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home onOpenModal={openModal} />} />
              <Route path="/about" element={<About onOpenModal={openModal} />} />
              <Route path="/services" element={<Services onOpenModal={openModal} />} />
              <Route path="/industries" element={<Industries onOpenModal={openModal} />} />
              <Route path="/projects" element={<Projects onOpenModal={openModal} />} />
              <Route path="/global" element={<Global onOpenModal={openModal} />} />
              <Route path="/case-studies" element={<CaseStudies onOpenModal={openModal} />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              {/* Fallback route */}
              <Route path="*" element={<Home onOpenModal={openModal} />} />
            </Routes>
          </Suspense>
        </main>

        <Footer onOpenModal={openModal} />
        <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
        <Suspense fallback={null}>
          <VengeanceCopilotDock onOpenModal={openModal} />
        </Suspense>
      </div>
    </ToastProvider>
  );
}
