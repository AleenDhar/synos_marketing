import React from 'react';
import './SynosFounderBanner.css';

export const SynosFounderBanner: React.FC = () => {
  return (
    <div className="synos-founder-banner">
      <div className="synos-banner-content">
        <span className="synos-live-dot"></span>
        <span className="synos-banner-text">
          <strong>LIVE EXPERIMENT</strong> — One founder. Zero employees. Running an entire company with AI agents built on synosai.
        </span>
        <a href="#journey" className="synos-banner-link">Follow the journey →</a>
      </div>
    </div>
  );
};
