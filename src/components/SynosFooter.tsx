import React from 'react';
import './SynosFooter.css';

export const SynosFooter: React.FC = () => {
  return (
    <footer className="synos-footer">
      <div className="synos-container">
        <div className="synos-final-cta">
          <h2 className="synos-cta-title">Employees that never get tired.</h2>
          <p className="synos-cta-subtitle">Yours in minutes.</p>
          <button className="synos-btn-get-started-large">Get Started Free</button>
        </div>
        
        <div className="synos-footer-main">
          <div className="synos-footer-brand">
            <div className="synos-logo">SynosAI</div>
            <p className="synos-footer-tagline">The high-agency operator's choice.</p>
          </div>
          
          <div className="synos-footer-links">
            <div className="synos-footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#templates">Templates</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#integrations">Integrations</a></li>
              </ul>
            </div>
            <div className="synos-footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#twitter">Twitter/X</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="synos-footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#docs">Docs</a></li>
                <li><a href="#changelog">Changelog</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="synos-footer-bottom">
          <p>© 2025 SynosAI. All rights reserved.</p>
          <div className="synos-legal">
            <a href="#privacy">Privacy Policy</a>
            <span>·</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
