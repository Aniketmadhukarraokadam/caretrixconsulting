import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Sparkles,
  Send,
  X,
  ChevronRight,
  ShieldAlert,
  CheckCircle2,
  Zap,
  Terminal,
  Cpu,
  MessageSquare,
} from 'lucide-react';

/**
 * Enterprise Knowledge Base for Instant Advisory Guidance
 */
const ENTERPRISE_KB = {
  sap: {
    title: 'SAP S/4HANA Transformation',
    reply:
      'Caretrix Consulting provides end-to-end SAP S/4HANA migration, Brownfield & Greenfield transitions, BTP cloud integration, and custom ABAP on HANA development with zero operational downtime SLAs.',
  },
  bpo: {
    title: '28-State Pan-India BPO Operations',
    reply:
      'We run 24/7 multilingual BPO operations across Pune, Navi Mumbai, Bengaluru, Chennai, and Delhi NCR with AI speech analytics, omnichannel support, and 40% operating cost reductions.',
  },
  healthcare: {
    title: 'HIPAA-Compliant Healthcare RCM',
    reply:
      'Our Healthcare division guarantees 98%+ first-pass clean claims rate, ICD-10/11 medical coding, denial management, and prior authorizations compliant with SOC 2 & HIPAA standards.',
  },
  bgv: {
    title: 'Pan-India Background Verification (BGV)',
    reply:
      'Direct court API integrations, physical address verifications across 28 states & 8 UTs, education/employment checks, and automated compliance reports delivered in 24-48 hours.',
  },
  ai: {
    title: 'Agentic AI & Enterprise Automation',
    reply:
      'We build autonomous AI agents, computer vision pipelines, LLM-powered ERP workflows, and predictive analytics that integrate seamlessly into your enterprise data stack.',
  },
};

/**
 * Executive Advisory Assistant Drawer & Floating Trigger
 */
export function VengeanceCopilotDock({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Hello! I am your Caretrix Executive Advisory Assistant. How can I assist your enterprise transformation, SAP cloud migration, or global BPO operations today?',
      time: 'Just now',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    { label: 'SAP S/4HANA', key: 'sap' },
    { label: 'Global BPO Pods', key: 'bpo' },
    { label: 'Healthcare RCM', key: 'healthcare' },
    { label: 'Pan-India BGV', key: 'bgv' },
    { label: 'Enterprise AI Suite', key: 'ai' },
  ];

  const handleSend = (textToSend = inputVal) => {
    if (!textToSend.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // AI intelligent answer generation
    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let replyText =
        "Thank you for your inquiry. Caretrix Consulting's executive advisory team will configure an enterprise roadmap tailored specifically to your architecture. You can also book a direct one-on-one discovery session with our Principal Consultants.";

      if (lower.includes('sap') || lower.includes('hana') || lower.includes('erp')) {
        replyText = ENTERPRISE_KB.sap.reply;
      } else if (lower.includes('bpo') || lower.includes('call') || lower.includes('support') || lower.includes('outsourc')) {
        replyText = ENTERPRISE_KB.bpo.reply;
      } else if (lower.includes('health') || lower.includes('rcm') || lower.includes('medical') || lower.includes('billing')) {
        replyText = ENTERPRISE_KB.healthcare.reply;
      } else if (lower.includes('bgv') || lower.includes('verif') || lower.includes('background') || lower.includes('check')) {
        replyText = ENTERPRISE_KB.bgv.reply;
      } else if (lower.includes('ai') || lower.includes('agent') || lower.includes('model') || lower.includes('automat')) {
        replyText = ENTERPRISE_KB.ai.reply;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: replyText,
          time: 'Just now',
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Corporate Advisor Launcher */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9990,
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 20px',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, #123d6b 0%, #1e5a9a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            boxShadow: '0 10px 25px rgba(18, 61, 107, 0.35)',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '0.9rem',
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MessageSquare size={18} />
            <span
              style={{
                position: 'absolute',
                top: -2,
                right: -2,
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#10b981',
                display: 'inline-block',
              }}
            />
          </div>
          <span>Caretrix Advisor</span>
        </motion.button>
      </motion.div>

      {/* Corporate Advisor Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            style={{
              position: 'fixed',
              bottom: '84px',
              right: '24px',
              width: '390px',
              maxWidth: 'calc(100vw - 36px)',
              height: '520px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.22)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 9995,
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '16px 20px',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #123d6b, #1e5a9a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <Bot size={20} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#0f172a', fontWeight: 700 }}>
                    Caretrix Advisory Copilot
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.72rem', color: '#64748b' }}>Enterprise Consulting Intelligence</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick Prompt Chips */}
            <div
              style={{
                display: 'flex',
                gap: '6px',
                padding: '10px 16px',
                overflowX: 'auto',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                scrollbarWidth: 'none',
              }}
            >
              {quickPrompts.map((p) => (
                <button
                  key={p.key}
                  onClick={() => handleSend(p.label)}
                  style={{
                    whiteSpace: 'nowrap',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '16px',
                    padding: '4px 10px',
                    color: '#123d6b',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Chat Body */}
            <div
              style={{
                flex: 1,
                padding: '16px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                background: '#ffffff',
              }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    padding: '12px 16px',
                    borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                    background:
                      msg.sender === 'user'
                        ? 'linear-gradient(135deg, #123d6b 0%, #1e5a9a 100%)'
                        : '#f1f5f9',
                    color: msg.sender === 'user' ? '#ffffff' : '#0f172a',
                    border: msg.sender === 'user' ? 'none' : '1px solid #e2e8f0',
                    fontSize: '0.86rem',
                    lineHeight: '1.5',
                  }}
                >
                  {msg.text}
                </motion.div>
              ))}

              {isTyping && (
                <div
                  style={{
                    alignSelf: 'flex-start',
                    padding: '8px 14px',
                    borderRadius: '14px',
                    background: '#f1f5f9',
                    color: '#64748b',
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Sparkles size={14} color="#0052cc" /> Consulting advisory knowledge base...
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div
              style={{
                padding: '12px 16px',
                background: '#f8fafc',
                borderTop: '1px solid #e2e8f0',
                display: 'flex',
                gap: '8px',
              }}
            >
              <input
                type="text"
                placeholder="Ask about SAP, BPO, Healthcare, or BGV..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                style={{
                  flex: 1,
                  background: '#ffffff',
                  border: '1.5px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: '#0f172a',
                  fontSize: '0.86rem',
                  outline: 'none',
                }}
              />
              <button
                onClick={() => handleSend()}
                style={{
                  background: 'linear-gradient(135deg, #123d6b, #1e5a9a)',
                  border: 'none',
                  borderRadius: '10px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer',
                  fontWeight: 700,
                }}
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Modern Corporate Feature Card
 */
export function VengeanceDisplacementCard({ title, subtitle, icon: Icon, stat, description }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        position: 'relative',
        borderRadius: '16px',
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        padding: '2rem',
        boxShadow: '0 4px 6px -1px rgba(15, 23, 42, 0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'rgba(18, 61, 107, 0.08)',
            border: '1px solid rgba(18, 61, 107, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#123d6b',
          }}
        >
          {Icon && <Icon size={22} />}
        </div>
        {stat && (
          <span
            style={{
              padding: '4px 10px',
              borderRadius: '20px',
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              color: '#059669',
              fontWeight: 700,
              fontSize: '0.78rem',
            }}
          >
            {stat}
          </span>
        )}
      </div>

      <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '0.35rem', fontWeight: 700 }}>{title}</h3>
      {subtitle && <p style={{ color: '#0284c7', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.65rem' }}>{subtitle}</p>}
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>{description}</p>
    </motion.div>
  );
}
