import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import ConsultationModal from './components/ConsultationModal';
import { ToastProvider } from './components/Toast';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Global from './pages/Global';
import CaseStudies from './pages/CaseStudies';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { VengeanceCopilotDock } from './components/extensions/VengeanceAI';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
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
        </main>

        <Footer onOpenModal={openModal} />
        <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
        <VengeanceCopilotDock onOpenModal={openModal} />
      </div>
    </ToastProvider>
  );
}

