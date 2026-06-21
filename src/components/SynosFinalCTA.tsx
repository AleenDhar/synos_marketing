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
          <h2 className="synos-final-cta-title">You don&apos;t need a bigger team. You need a smarter one.</h2>
          <p className="synos-final-cta-subtitle">
            Founders from anywhere in the world are running operations that used to require 50 people.
            AI employees that research, sell, support, build, and ship — while you sleep.
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
