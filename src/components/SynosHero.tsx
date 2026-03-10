import React from 'react';
import './SynosHero.css';

export const SynosHero: React.FC = () => {
  return (
    <section className="synos-hero">
      <div className="synos-hero-content">
        <h1 className="synos-hero-title">
          AI agents that work. For real.
        </h1>
        <p className="synos-hero-description">
          Build AI agents in minutes. Connect 900+ apps. Deploy them on Slack, Teams, Telegram & Discord. No code required.
        </p>
        <div className="synos-hero-actions">
          <button className="synos-btn-primary">Get Started Free</button>
          <button className="synos-btn-secondary">Book a Demo</button>
        </div>
        <div className="synos-hero-proof">
          <p>900+ integrations · 5 deployment channels · Setup in under 60 seconds</p>
        </div>
      </div>
    </section>
  );
};
