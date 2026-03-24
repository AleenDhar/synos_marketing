import React from 'react';
import NextImage from 'next/image';
import './SynosNavbar.css';

interface SynosNavbarProps {
  onWaitlistClick: () => void;
}

export const SynosNavbar: React.FC<SynosNavbarProps> = ({ onWaitlistClick }) => {
  return (
    <nav className="synos-navbar">
      <div className="synos-nav-container">
        <div className="synos-nav-left">
          <a href="/" className="synos-logo">
            <NextImage src="/logo.png" alt="synosai" width={32} height={32} className="synos-logo-icon" />
            <span className="synos-logo-text">synosai</span>
          </a>
          <ul className="synos-nav-links">
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="#templates">Templates</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#enterprise">Enterprise</a></li>
          </ul>
        </div>
        <div className="synos-nav-right">
          <button className="synos-btn-get-started" onClick={onWaitlistClick}>Join the Waitlist</button>
        </div>
      </div>
    </nav>
  );
};
