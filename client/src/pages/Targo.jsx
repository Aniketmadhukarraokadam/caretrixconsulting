import React, { useState, useEffect, useRef } from 'react';

export default function Targo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 700 : false
  );

  const heroVideoRef = useRef(null);
  const aboutVideoRef = useRef(null);

  // Set page title for Targo
  useEffect(() => {
    document.title = 'Targo — Scaling the Platform for Your Business';
  }, []);

  // Mobile breakpoint listener (700px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Robust video playback & retry logic (every 1s + on click/touchstart)
  useEffect(() => {
    const playVideo = (videoEl) => {
      if (!videoEl) return;
      videoEl.muted = true;
      const promise = videoEl.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Swallow rejections as required
        });
      }
    };

    // Initial attempt
    playVideo(heroVideoRef.current);
    playVideo(aboutVideoRef.current);

    // Retry every 1s if paused
    const interval = setInterval(() => {
      if (heroVideoRef.current && heroVideoRef.current.paused) {
        playVideo(heroVideoRef.current);
      }
      if (aboutVideoRef.current && aboutVideoRef.current.paused) {
        playVideo(aboutVideoRef.current);
      }
    }, 1000);

    // Play on first document click or touchstart
    const handleUserInteraction = () => {
      playVideo(heroVideoRef.current);
      playVideo(aboutVideoRef.current);
    };

    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

    return () => {
      clearInterval(interval);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: '#F2F1F0',
        color: '#6b6f72',
        fontFamily: "'Quantico', 'Arial Narrow', sans-serif",
        overflowX: 'hidden',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      {/* ── SECTION 1 — HERO ───────────────────────────────────────────── */}
      <section
        id="home"
        style={{
          minHeight: '100svh',
          backgroundColor: '#F2F1F0',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        {/* Background Video (absolutely positioned, pointer-events none, no crop — objectFit: contain, height auto) */}
        <video
          ref={heroVideoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_050407_500d0339-ab28-41c1-9688-132a74a3b5aa.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            objectFit: 'contain',
            height: 'auto',
            zIndex: 0,
            ...(isMobile
              ? {
                  top: 0,
                  left: '-12%',
                  width: '119%',
                }
              : {
                  top: 0,
                  right: '-20%',
                  width: '99%',
                }),
          }}
        />

        {/* Desktop-only Scrim Overlay (left 70% of the section) */}
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '70%',
              height: '100%',
              background:
                'linear-gradient(90deg, #F2F1F0 0%, #F2F1F0 55%, rgba(242,241,240,0.85) 78%, rgba(242,241,240,0) 100%)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
        )}

        {/* Navbar */}
        <header
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(20px, 5vw, 56px)',
            padding: 'clamp(20px, 3vw, 38px) clamp(20px, 4vw, 48px) 0',
            boxSizing: 'border-box',
          }}
        >
          {/* Logo: 38px dark (#111) circle containing white 20x8px ellipse rotated -25°, next to lowercase "targo" */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" style={{ display: 'block' }}>
                <ellipse
                  cx="12"
                  cy="12"
                  rx="10"
                  ry="4"
                  fill="#ffffff"
                  transform="rotate(-25 12 12)"
                />
              </svg>
            </div>
            <span
              style={{
                fontSize: 'clamp(22px, 5vw, 30px)',
                fontWeight: 400,
                color: '#111',
                letterSpacing: '-0.5px',
                lineHeight: 1,
                textTransform: 'lowercase',
                fontFamily: "'Quantico', 'Arial Narrow', sans-serif",
              }}
            >
              targo
            </span>
          </div>

          {/* Desktop Nav Links (HOME / ABOUT / CONTACT US: bold 700, clamp(12px,2.4vw,15px), letter-spacing 0.06em, #3a3a3a, nowrap, gap 34px) */}
          {!isMobile && (
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '34px',
              }}
            >
              <a
                href="#home"
                className="targo-nav-link"
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(12px, 2.4vw, 15px)',
                  letterSpacing: '0.06em',
                  color: '#3a3a3a',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                }}
              >
                HOME
              </a>
              <a
                href="#about"
                className="targo-nav-link"
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(12px, 2.4vw, 15px)',
                  letterSpacing: '0.06em',
                  color: '#3a3a3a',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                }}
              >
                ABOUT
              </a>
              <a
                href="#contact"
                className="targo-nav-link"
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(12px, 2.4vw, 15px)',
                  letterSpacing: '0.06em',
                  color: '#3a3a3a',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                }}
              >
                CONTACT US
              </a>
            </nav>
          )}

          {/* Desktop Right-aligned "Contact us" button (transparent, no border, white text, uppercase, letter-spacing 0.14em, padding 14px 26px, chamfered corners, white stroked envelope SVG icon 17x13, stroke-width 1.4) */}
          {!isMobile && (
            <a
              href="#contact"
              className="targo-contact-btn"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                textTransform: 'uppercase',
                fontWeight: 700,
                letterSpacing: '0.14em',
                fontSize: 'clamp(12px, 2vw, 14px)',
                padding: '14px 26px',
                clipPath:
                  'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background 0.25s ease',
              }}
            >
              <svg
                width="17"
                height="13"
                viewBox="0 0 17 13"
                fill="none"
                stroke="#fff"
                strokeWidth="1.4"
                style={{ display: 'block', flexShrink: 0 }}
              >
                <rect x="0.7" y="0.7" width="15.6" height="11.6" rx="1" />
                <path d="M1 1.5L8.5 7.5L16 1.5" />
              </svg>
              <span>Contact us</span>
            </a>
          )}

          {/* Mobile Hamburger Button (3 white 22x2px bars, gap 5px) */}
          {isMobile && (
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: '#1a1c1e',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 10px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <span style={{ width: '22px', height: '2px', backgroundColor: '#ffffff', display: 'block' }} />
              <span style={{ width: '22px', height: '2px', backgroundColor: '#ffffff', display: 'block' }} />
              <span style={{ width: '22px', height: '2px', backgroundColor: '#ffffff', display: 'block' }} />
            </button>
          )}
        </header>

        {/* Mobile Stacked Menu (dark #1a1c1e, bold, gap 18px) */}
        {isMobile && mobileMenuOpen && (
          <nav
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              padding: '18px 24px',
              backgroundColor: 'rgba(242, 241, 240, 0.98)',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#1a1c1e',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#1a1c1e',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              ABOUT
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#1a1c1e',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              CONTACT US
            </a>
          </nav>
        )}

        {/* Headline (h1, 6 staircase lines, uppercase, weight 700, last three lines indented by min(238px, 28vw)) */}
        <h1
          style={{
            position: 'relative',
            zIndex: 5,
            margin: 0,
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: '0.01em',
            lineHeight: 0.98,
            color: '#2b3033',
            boxSizing: 'border-box',
            ...(isMobile
              ? {
                  marginTop: '360px',
                  padding: '0 20px 28px 20px',
                  fontSize: 'clamp(34px, 10vw, 56px)',
                }
              : {
                  padding:
                    'min(clamp(40px,9vw,120px),9vh) 20px min(clamp(24px,4vw,44px),5vh) clamp(20px,9vw,118px)',
                  fontSize: 'min(clamp(34px,7.6vw,80px), 9.2vh)',
                }),
          }}
        >
          <span style={{ display: 'block' }}>SCALING</span>
          <span style={{ display: 'block' }}>THE</span>
          <span style={{ display: 'block' }}>PLATFORM</span>
          <span
            style={{
              display: 'block',
              marginLeft: 'min(238px, 28vw)',
            }}
          >
            FOR
          </span>
          <span
            style={{
              display: 'block',
              marginLeft: 'min(238px, 28vw)',
            }}
          >
            YOUR
          </span>
          <span
            style={{
              display: 'block',
              marginLeft: 'min(238px, 28vw)',
              color: '#15BCDF',
            }}
          >
            BUSINESS
          </span>
        </h1>

        {/* CTA Button "GET STARTED" under headline, left edge aligned with the FOR/YOUR/BUSINESS indent */}
        <div
          style={{
            position: 'relative',
            zIndex: 5,
            paddingLeft: isMobile
              ? 'calc(20px + min(238px, 28vw))'
              : 'calc(clamp(20px,9vw,118px) + min(238px,28vw))',
            paddingBottom: 'min(clamp(36px,6vw,80px),7vh)',
            boxSizing: 'border-box',
          }}
        >
          <a
            href="#about"
            className="targo-cta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#15BCDF',
              border: '1px solid #0fa3c2',
              color: '#1a1c1e',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.14em',
              padding: '18px 34px',
              fontSize: 'clamp(13px, 2.2vw, 16px)',
              clipPath:
                'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
              boxShadow:
                '0 0 0 1px rgba(21,188,223,0.35), 0 10px 30px -12px rgba(15,163,194,0.6)',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background 0.25s ease, box-shadow 0.25s ease',
            }}
          >
            <span>GET STARTED</span>
            <span
              style={{
                display: 'inline-block',
                width: '22px',
                height: '1px',
                backgroundColor: '#1a1c1e',
                marginLeft: '14px',
                verticalAlign: 'middle',
              }}
            />
          </a>
        </div>
      </section>

      {/* ── SECTION 2 — ABOUT ──────────────────────────────────────────── */}
      <section
        id="about"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '40px',
          background: 'linear-gradient(180deg, #F2F1F0 0%, #F7F6F8 18%, #F7F6F8 100%)',
          padding: 'clamp(60px,10vw,140px) 0 clamp(30px,5vw,70px) clamp(20px,9vw,118px)',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Left Column (flex 1 1 420px, min-width 300px) */}
        <div
          style={{
            flex: '1 1 420px',
            minWidth: '300px',
            paddingRight: '20px',
            boxSizing: 'border-box',
          }}
        >
          {/* h2, two staircase lines: "ABOUT" then "BUSINESS" in #15BCDF indented by min(160px,18vw) */}
          <h2
            style={{
              margin: 0,
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.01em',
              lineHeight: 0.98,
              fontSize: 'clamp(34px, 6.5vw, 72px)',
              color: '#2b3033',
            }}
          >
            <span style={{ display: 'block' }}>ABOUT</span>
            <span
              style={{
                display: 'block',
                marginLeft: 'min(160px, 18vw)',
                color: '#15BCDF',
              }}
            >
              BUSINESS
            </span>
          </h2>

          {/* Paragraph (max-width 520px, margin 32px 0 0 min(160px,18vw), font-size clamp(14px,1.6vw,17px), line-height 1.7, color #6b6f72), verbatim text */}
          <p
            style={{
              maxWidth: '520px',
              margin: '32px 0 0 min(160px, 18vw)',
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              lineHeight: 1.7,
              color: '#6b6f72',
              fontWeight: 400,
            }}
          >
            Targo builds the testing infrastructure modern teams rely on. From automated pipelines to full-scale QA audits, we make sure your software ships fast and breaks nothing. Hundreds of releases, zero surprises.
          </p>

          {/* "LEARN MORE" button, identical style to the hero CTA, margin 36px 0 0 min(160px,18vw) */}
          <div style={{ margin: '36px 0 0 min(160px, 18vw)' }}>
            <a
              href="#home"
              className="targo-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#15BCDF',
                border: '1px solid #0fa3c2',
                color: '#1a1c1e',
                textTransform: 'uppercase',
                fontWeight: 700,
                letterSpacing: '0.14em',
                padding: '18px 34px',
                fontSize: 'clamp(13px, 2.2vw, 16px)',
                clipPath:
                  'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                boxShadow:
                  '0 0 0 1px rgba(21,188,223,0.35), 0 10px 30px -12px rgba(15,163,194,0.6)',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              <span>LEARN MORE</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '22px',
                  height: '1px',
                  backgroundColor: '#1a1c1e',
                  marginLeft: '14px',
                  verticalAlign: 'middle',
                }}
              />
            </a>
          </div>
        </div>

        {/* Right Column (flex 1 1 360px, min-width 280px, justify-content flex-end, position relative) */}
        <div
          style={{
            flex: '1 1 360px',
            minWidth: '280px',
            justifyContent: 'flex-end',
            position: 'relative',
            display: 'flex',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '644px' }}>
            {/* Video (width 100%, max-width 644px, height auto, flush to right edge) */}
            <video
              ref={aboutVideoRef}
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_063501_2e2c8971-de1e-473a-8611-a0c9ae7ee186.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                width: '100%',
                maxWidth: '644px',
                height: 'auto',
                display: 'block',
                position: 'relative',
                zIndex: 0,
              }}
            />

            {/* Overlay rectangle exactly covering the video: background #15BCDF with mix-blend-mode: hue, pointer-events none, z-index 1 (tints video cyan) */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#15BCDF',
                mixBlendMode: 'hue',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </section>

      {/* Scoped CSS for exact hover states & global styling rules */}
      <style>{`
        .targo-nav-link:hover {
          color: #000000 !important;
        }
        .targo-contact-btn:hover {
          background: rgba(255, 255, 255, 0.14) !important;
        }
        .targo-cta-btn:hover {
          background-color: #3fd0ef !important;
          box-shadow: 0 0 0 1px rgba(21,188,223,0.5), 0 12px 35px -8px rgba(15,163,194,0.8) !important;
        }

        /* Enforce exact font and background on body when Targo is active */
        body {
          margin: 0 !important;
          background: #F2F1F0 !important;
          font-family: 'Quantico', 'Arial Narrow', sans-serif !important;
        }
      `}</style>
    </div>
  );
}
