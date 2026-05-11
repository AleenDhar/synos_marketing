'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import './SynosWaitlistCTA.css';

interface SynosWaitlistCTAProps {
  onWaitlistClick: () => void;
}

export const SynosWaitlistCTA: React.FC<SynosWaitlistCTAProps> = ({ onWaitlistClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="synos-cta-section"
      id="waitlist"
      data-navbar-theme="light"
    >
      <div className="synos-cta-bg" aria-hidden="true">
        <div className="synos-cta-bg-gradient" />
        <div className="synos-cta-bg-grain" />
      </div>

      <motion.div
        className="synos-cta-inner"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="synos-cta-eyebrow">
          <Sparkles size={12} />
          PRIVATE BETA · LIMITED SLOTS
        </span>

        <h2 className="synos-cta-headline">
          BE THERE WHEN
          <br />
          THE GATES OPEN.
        </h2>

        <p className="synos-cta-sub">
          Synos is rolling out to a small batch of teams first. Drop your email
          and we&apos;ll send the Product Hunt link 24 hours before launch — plus
          your early-access invite when slots open.
        </p>

        <div className="synos-cta-actions">
          <button
            type="button"
            className="synos-cta-primary"
            onClick={onWaitlistClick}
          >
            <span className="synos-cta-primary-corners" aria-hidden="true">
              <span className="synos-cta-primary-corner synos-cta-primary-corner-tl" />
              <span className="synos-cta-primary-corner synos-cta-primary-corner-tr" />
              <span className="synos-cta-primary-corner synos-cta-primary-corner-bl" />
              <span className="synos-cta-primary-corner synos-cta-primary-corner-br" />
            </span>
            <span className="synos-cta-primary-label">JOIN THE WAITLIST</span>
            <ArrowUpRight size={16} />
          </button>

          <a
            className="synos-cta-secondary"
            href="https://calendly.com/dharaleen/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Book a demo instead</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Decorative serial */}
        <span className="synos-cta-serial" aria-hidden="true">
          SYS_004 · WAITLIST · 未来を、仕組みに。
        </span>
      </motion.div>
    </section>
  );
};
