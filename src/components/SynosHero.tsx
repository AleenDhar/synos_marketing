'use client'

import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import './SynosHero.css';

interface SynosHeroProps {
  onWaitlistClick: () => void;
  onDemoClick: () => void;
}

export const SynosHero: React.FC<SynosHeroProps> = ({ onWaitlistClick, onDemoClick }) => {
  return (
    <section className="synos-hero">
      <div className="synos-hero-bg" aria-hidden="true">
        <div className="synos-hero-bg-gradient" />
        <div className="synos-hero-bg-text" aria-hidden="true">
          <span className="synos-hero-bg-text-fill">SYNOS</span>
          <span className="synos-hero-bg-text-reveal">SYNOS</span>
        </div>
        {/* <img
          src="/car1.png"
          alt=""
          className="synos-hero-flying-car"
          aria-hidden="true"
        /> */}
        <div className="synos-hero-bg-grain" />
        <div className="synos-hero-rain" aria-hidden="true">
          {Array.from({ length: 80 }).map((_, i) => (
            <span key={`drop-${i}`} className={`synos-hero-raindrop synos-hero-raindrop-${i}`} />
          ))}
        </div>
      </div>

      <div className="synos-hero-inner">
        {/* Vertical kanji + hex mark — far left rail */}
        <aside className="synos-hero-rail" aria-hidden="true">
          <span className="synos-hero-kanji">未来を、仕組みに。</span>
          <svg
            className="synos-hero-hex"
            viewBox="0 0 24 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <polygon points="12,2 22,8 22,20 12,26 2,20 2,8" />
            <circle cx="12" cy="14" r="2.5" />
          </svg>
        </aside>

        {/* Left content block — headline, sub, CTAs */}
        <div className="synos-hero-content">
          <h1 className="synos-hero-headline">
            AI AGENTS THAT
            <br />
            WORK LIKE <span className="synos-hero-headline-accent">YOU</span> DO.
          </h1>
          <p className="synos-hero-sub">
            SYNOS builds autonomous AI agents that execute, adapt, and scale —
            so you can focus on what matters.
          </p>

          <div className="synos-hero-actions">
            <button
              type="button"
              className="synos-hero-cta synos-hero-cta-primary"
              onClick={onWaitlistClick}
            >
              <span className="synos-hero-cta-corners" aria-hidden="true">
                <span className="synos-hero-cta-corner synos-hero-cta-corner-tl" />
                <span className="synos-hero-cta-corner synos-hero-cta-corner-tr" />
                <span className="synos-hero-cta-corner synos-hero-cta-corner-bl" />
                <span className="synos-hero-cta-corner synos-hero-cta-corner-br" />
              </span>
              <span className="synos-hero-cta-label">START BUILDING</span>
              <ArrowUpRight size={16} className="synos-hero-cta-arrow" />
            </button>
            <button
              type="button"
              className="synos-hero-cta synos-hero-cta-secondary"
              onClick={onDemoClick}
            >
              <span className="synos-hero-cta-corners" aria-hidden="true">
                <span className="synos-hero-cta-corner synos-hero-cta-corner-tl" />
                <span className="synos-hero-cta-corner synos-hero-cta-corner-tr" />
                <span className="synos-hero-cta-corner synos-hero-cta-corner-bl" />
                <span className="synos-hero-cta-corner synos-hero-cta-corner-br" />
              </span>
              <span className="synos-hero-cta-label">BOOK A DEMO</span>
              <ArrowUpRight size={16} className="synos-hero-cta-arrow" />
            </button>
          </div>

        </div>

        {/* Character — pushed to the right */}
        <div className="synos-hero-character" aria-hidden="true">
          <img
            src="/synos-hero.png"
            alt=""
            className="synos-hero-character-img"
          />
        </div>

      </div>

      <a className="synos-hero-scroll" href="#product" aria-label="Scroll to next section">
        <span className="synos-hero-scroll-label">SCROLL FOR MORE</span>
        <ChevronDown size={16} className="synos-hero-scroll-icon" aria-hidden="true" />
      </a>
    </section>
  );
};
