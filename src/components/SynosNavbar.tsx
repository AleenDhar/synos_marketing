'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import './SynosNavbar.css';

interface SynosNavbarProps {
  onWaitlistClick: () => void;
}

export const SynosNavbar: React.FC<SynosNavbarProps> = ({ onWaitlistClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);
  // When a section with [data-navbar-theme="light"] is in view, the left
  // side of the navbar (logo + nav links) flips to dark text so it stays
  // readable against the light background.
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll('[data-navbar-theme="light"]');
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // True if any tracked section overlaps the navbar's vertical band
        const anyVisible = entries.some((e) => e.isIntersecting);
        setOnLight(anyVisible);
      },
      {
        // Trigger when the section crosses the top ~80px (navbar height area)
        rootMargin: '-80px 0px -50% 0px',
        threshold: 0,
      }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`synos-navbar ${onLight ? 'nav-on-light' : ''}`}>
      <div className="synos-nav-container">
        <div className="synos-nav-left">
          <Link href="/" className="synos-logo">
            <span className="synos-logo-text">SYNOS</span>
            <img
              src="/Gate-logo.png"
              alt=""
              className="synos-logo-mark"
              aria-hidden="true"
            />
          </Link>
          <ul className="synos-nav-links">
            <li><Link href="/#product">PRODUCT</Link></li>
            <li><Link href="/#agent-templates">AGENTS</Link></li>
            <li><Link href="/blog">BLOG</Link></li>
          </ul>
        </div>
        <div className="synos-nav-right">
          <span className="synos-nav-serial" aria-hidden="true">SYS_001 · 05.10.X</span>
          <button className="synos-nav-cta" onClick={onWaitlistClick}>
            <span className="synos-nav-cta-corners" aria-hidden="true">
              <span className="synos-nav-cta-corner synos-nav-cta-corner-tl" />
              <span className="synos-nav-cta-corner synos-nav-cta-corner-tr" />
              <span className="synos-nav-cta-corner synos-nav-cta-corner-bl" />
              <span className="synos-nav-cta-corner synos-nav-cta-corner-br" />
            </span>
            <span className="synos-nav-cta-label">START HIRING</span>
          </button>

          {/* Hamburger — visible on mobile only */}
          <button
            type="button"
            className="synos-nav-burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`synos-nav-mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="synos-nav-mobile-links">
          <li><Link href="/#product" onClick={() => setMenuOpen(false)}>PRODUCT</Link></li>
          <li><Link href="/#agent-templates" onClick={() => setMenuOpen(false)}>AGENTS</Link></li>
          <li><Link href="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link></li>
        </ul>

        <button
          type="button"
          className="synos-nav-mobile-cta"
          onClick={() => {
            setMenuOpen(false);
            onWaitlistClick();
          }}
        >
          START HIRING
        </button>

        <div className="synos-nav-mobile-footer">
          <span className="synos-nav-mobile-serial">SYS_001 · 05.10.X</span>
          <span className="synos-nav-mobile-kanji">未来を、仕組みに。</span>
        </div>
      </div>
    </nav>
  );
};
