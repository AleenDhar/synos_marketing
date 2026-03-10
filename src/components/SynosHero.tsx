import React from 'react';
import './SynosHero.css';

export const SynosHero: React.FC = () => {
  return (
    <section className="synos-hero">
      <div className="synos-hero-content">
        <h1 className="synos-hero-title">
          Employees that never get tired.
        </h1>
        <p className="synos-hero-description">
          Build AI agents in minutes. Connect 300+ apps. <br />
          Deploy them on Slack, Telegram, Teams & Discord. <br />
          No code. No technical skills. Just results.
        </p>
        <div className="synos-hero-actions">
          <button className="synos-btn-primary">Get Started Free</button>
          <button className="synos-btn-secondary">Watch the Story <span>→</span></button>
        </div>
        <p className="synos-hero-founder-meta">
          Built and run by one founder. Using only SynosAI.
        </p>
      </div>
    </section>
  );
};
