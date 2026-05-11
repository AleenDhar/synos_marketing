'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './SynosNavbar.css';

interface SynosNavbarProps {
  onWaitlistClick: () => void;
}

export const SynosNavbar: React.FC<SynosNavbarProps> = ({ onWaitlistClick }) => {
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
            <li><a href="/#product">PRODUCT</a></li>
            <li><a href="/#templates">AGENTS</a></li>
            <li><Link href="/blog">BLOG</Link></li>
            <li><a href="/#pricing">PRICING</a></li>
            <li><a href="/#enterprise">COMPANY</a></li>
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
        </div>
      </div>
    </nav>
  );
};
