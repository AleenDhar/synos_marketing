import React from 'react';
import './SynosFinalCTA.css';

interface SynosFinalCTAProps {
  onWaitlistClick: () => void;
  onDemoClick: () => void;
}

export const SynosFinalCTA: React.FC<SynosFinalCTAProps> = ({ onWaitlistClick, onDemoClick }) => {
  return (
    <section className="synos-final-cta">
      <div className="synos-container">
        <div className="synos-final-cta-card">
          <h2 className="synos-final-cta-title">Your next employee starts instantly.</h2>
          <p className="synos-final-cta-subtitle">
            An AI that browses the web, connects your apps, builds tools, and executes your business processes — no salary, no onboarding, no limits.
          </p>
          <div className="synos-final-cta-actions">
            <button className="synos-btn-primary" onClick={onWaitlistClick}>Join the Waitlist</button>
            <button className="synos-btn-secondary" onClick={onDemoClick}>Book a Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};
