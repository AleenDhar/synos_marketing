import React from 'react';
import './SynosFinalCTA.css';

export const SynosFinalCTA: React.FC = () => {
  return (
    <section className="synos-final-cta">
      <div className="synos-container">
        <div className="synos-final-cta-card">
          <h2 className="synos-final-cta-title">Your next hire doesn&apos;t need a salary.</h2>
          <p className="synos-final-cta-subtitle">
            Build an AI agent that works 24/7, connects to 900+ apps, and deploys in minutes. For any AI-related task — Synos can do it.
          </p>
          <div className="synos-final-cta-actions">
            <button className="synos-btn-primary">Get Started Free</button>
            <button className="synos-btn-secondary">Book a Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};
