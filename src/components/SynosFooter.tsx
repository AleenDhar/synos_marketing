import React from 'react';
import NextImage from 'next/image';
import './SynosFooter.css';

export const SynosFooter: React.FC = () => {
  return (
    <footer className="synos-footer">
      <div className="synos-container">
        <div className="synos-footer-main">
          <div className="synos-footer-brand">
            <div className="synos-footer-logo">
              <NextImage src="/logo.png" alt="synosai" width={24} height={24} className="synos-logo-icon" />
              <span className="synos-logo-text">synosai</span>
            </div>
            <p className="synos-footer-tagline">AI employees for modern teams.</p>
          </div>
        </div>

        <div className="synos-footer-bottom">
          <div className="synos-footer-info">
            <p>&copy; {new Date().getFullYear()} synosai. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
