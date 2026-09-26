import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Phone, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Cloud & SAP', href: '/services?cat=sap' },
  { label: 'Global Hubs', href: '/global' },
];

const MOBILE_LINKS = [
  { label: 'Services Directory', href: '/services' },
  { label: 'Industries & Verticals', href: '/industries' },
  { label: 'SAP & Cloud Engineering', href: '/services?cat=sap' },
  { label: 'Global Delivery Hubs', href: '/global' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About Caretrix', href: '/about' },
  { label: 'Contact Advisory Desk', href: '/contact' },
];

// Content Strategy aligned with Caretrix Consulting
const STATS = [
  {
    prefix: '+',
    value: '150',
    label: 'GLOBAL\nCLIENTS',
  },
  {
    prefix: '+',
    value: '75',
    label: 'MANAGED\nSERVICES',
  },
  {
    prefix: '+',
    value: '250',
    label: 'ENTERPRISE\nPROJECTS',
  },
];

const HEADING_WORDS = ['Enterprise', 'Solutions', 'Delivered'];

// Animation Variants according to exact specs
const fadeDownVariant = {
  initial: { opacity: 0, y: -20 },
  animate: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeUpVariant = {
  initial: { opacity: 0, y: 32 },
  animate: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const headingWordVariant = {
  initial: { y: '110%' },
  animate: (wordIndex = 0) => ({
    y: 0,
    transition: {
      delay: 0.4 + wordIndex * 0.14,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function FullScreenHero({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCtaClick = (e) => {
    if (onOpenModal) {
      e.preventDefault();
      onOpenModal();
    }
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden text-black font-semibold uppercase tracking-widest select-none"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── BACKGROUND FULL-SCREEN VIDEO ────────────────────────────────────── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
      />

      {/* Subtle overlay ensuring sharp contrast & reading comfort */}
      <div className="absolute inset-0 bg-white/[0.04] backdrop-contrast-105 -z-10 pointer-events-none" />

      {/* ── 1. NAVIGATION BAR (Top, fixed height) ───────────────────────────── */}
      <header className="w-full flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6 z-20">
        {/* Left: Caretrix Consulting Circular Logo + Identity */}
        <motion.div
          custom={0}
          initial="initial"
          animate="animate"
          variants={fadeDownVariant}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-8 h-8 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center bg-white/80 backdrop-blur-sm cursor-pointer transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <div className="w-[10px] h-[10px] rounded-full bg-[#5E0ED7]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.16em] text-black leading-tight">
                CARETRIX
              </span>
              <span className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.24em] text-[#5E0ED7] leading-none">
                CONSULTING
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Center: Four Nav Links aligned with Caretrix Services (Hidden on mobile, visible md+) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map((link, idx) => (
            <motion.div
              key={link.label}
              custom={idx + 1}
              initial="initial"
              animate="animate"
              variants={fadeDownVariant}
            >
              <Link
                to={link.href}
                className="text-[14px] font-semibold tracking-widest uppercase text-black hover:text-[#5E0ED7] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right: 36px round black button with hamburger icon */}
        <motion.button
          type="button"
          aria-label="Open Navigation Menu"
          custom={5}
          initial="initial"
          animate="animate"
          variants={fadeDownVariant}
          onClick={() => setMobileMenuOpen(true)}
          className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-neutral-800 transition-colors duration-200 shadow-sm"
        >
          <span className="w-4 h-0.5 bg-white block rounded-full" />
          <span className="w-4 h-0.5 bg-white block rounded-full" />
          <span className="w-4 h-0.5 bg-white block rounded-full" />
        </motion.button>
      </header>

      {/* ── MOBILE MENU OVERLAY (Full-screen, white background, z-50) ──────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-white flex flex-col justify-between px-5 sm:px-8 pt-5 md:pt-6 pb-8 sm:pb-10 overflow-y-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {/* Top row: Caretrix logo (left) and 36px round black close button with X icon (right) */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#5E0ED7]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold tracking-[0.16em] text-black leading-tight">CARETRIX</span>
                  <span className="text-[9.5px] font-bold tracking-[0.24em] text-[#5E0ED7] leading-none">CONSULTING</span>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close Navigation Menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:bg-neutral-800 transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Middle: vertical list of Caretrix nav links */}
            <div className="flex flex-col gap-6 mt-12 text-2xl sm:text-3xl font-semibold tracking-widest uppercase text-black">
              {MOBILE_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#5E0ED7] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Bottom (mt-auto): Proposal CTA in accent color with ArrowUpRight icon */}
            <div className="mt-auto pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleCtaClick(e);
                }}
                className="inline-flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-widest uppercase text-[#5E0ED7] hover:opacity-80 transition-opacity"
              >
                <span>Request Proposal</span>
                <ArrowUpRight size={22} />
              </a>

              <a
                href="tel:+917758088438"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-600 hover:text-black"
              >
                <Phone size={14} color="#5E0ED7" /> +91 77580 88438
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 2. STATS ROW (Middle section: flex-1, vertically centered, right-aligned) ── */}
      <section className="flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0 z-10">
        <div className="flex items-start gap-5 sm:gap-8 md:gap-10">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              custom={idx + 2}
              initial="initial"
              animate="animate"
              variants={fadeUpVariant}
              className="text-right"
            >
              {/* Number styling: fontSize clamp(1.5rem, 5vw, 3.5rem), weight 600, '+' in accent color */}
              <div
                style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', lineHeight: 1 }}
                className="font-semibold text-black tracking-tight"
              >
                <span
                  className="text-[#5E0ED7] align-top inline-block mr-0.5 sm:mr-1 font-semibold select-none"
                  style={{ fontSize: '0.5em' }}
                >
                  {stat.prefix}
                </span>
                <span>{stat.value}</span>
              </div>
              {/* Label: text-[10px] sm:text-xs md:text-sm, font-semibold, tracking-widest, uppercase, black */}
              <div className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black whitespace-pre-line leading-tight mt-1 sm:mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. BOTTOM SECTION (Pinned to bottom with padding) ───────────────── */}
      <footer className="w-full px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12 z-10">
        {/* Row A (tagline + CTA): Flex row, items-center, justify-between, gap-4 */}
        <div className="flex items-center justify-between gap-4">
          {/* Left: Small uppercase Caretrix enterprise tagline */}
          <motion.p
            custom={5}
            initial="initial"
            animate="animate"
            variants={fadeUpVariant}
            className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black max-w-[140px] sm:max-w-[180px] md:max-w-xs leading-normal"
          >
            Accelerating Cloud <br />
            Enterprise IT &amp; BPO <br />
            For Global Scale
          </motion.p>

          {/* Right: CTA link "Request Proposal" with ArrowUpRight icon */}
          <motion.div
            custom={6}
            initial="initial"
            animate="animate"
            variants={fadeUpVariant}
          >
            <a
              href="#contact"
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-1.5 sm:gap-2 text-base sm:text-xl md:text-2xl text-[#5E0ED7] font-semibold whitespace-nowrap tracking-widest uppercase hover:opacity-85 transition-opacity"
            >
              <span>Request Proposal</span>
              <ArrowUpRight className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Row B (description + main heading): Flex row, items-end, justify-between, gap-3 sm:gap-4 */}
        <div className="flex items-end justify-between gap-3 sm:gap-4">
          {/* Left: Fixed-width container containing Caretrix strategic mission paragraph */}
          <motion.div
            custom={7}
            initial="initial"
            animate="animate"
            variants={fadeUpVariant}
            className="w-[125px] sm:w-[190px] md:w-[300px] shrink-0"
          >
            <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black text-left md:text-right leading-relaxed">
              Global IT Consulting, SAP Cloud Architecture, and 24/7 Enterprise Managed Services Engineered for Fortune-500 Scale.
            </p>
          </motion.div>

          {/* Right: The main heading — three words stacked vertically: "Enterprise", "Solutions", "Delivered" */}
          <div className="flex flex-col items-end text-right">
            {HEADING_WORDS.map((word, wordIndex) => (
              <div key={word} className="overflow-hidden">
                <motion.h1
                  custom={wordIndex}
                  initial="initial"
                  animate="animate"
                  variants={headingWordVariant}
                  style={{
                    fontSize: 'clamp(2rem, 9vw, 9rem)',
                    lineHeight: 0.88,
                  }}
                  className="font-semibold uppercase text-black text-right m-0 p-0 block tracking-tight sm:tracking-normal"
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
