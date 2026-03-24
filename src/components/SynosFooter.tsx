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

          <div className="synos-footer-links">
            <div className="synos-footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#use-cases">Use Cases</a></li>
                <li><a href="#templates">Templates</a></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div className="synos-footer-col">
              <h4>Enterprise</h4>
              <ul>
                <li><a href="#enterprise">Security</a></li>
                <li><a href="#enterprise">Compliance</a></li>
                <li><a href="#enterprise">SLA</a></li>
                <li><a href="#enterprise">Contact Sales</a></li>
              </ul>
            </div>
            <div className="synos-footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#changelog">Changelog</a></li>
                <li><a href="#status">Status Page</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="synos-footer-bottom">
          <div className="synos-footer-info">
            <p>&copy; 2025 synosai. All rights reserved.</p>
            <div className="synos-legal">
              <a href="#privacy">Privacy Policy</a>
              <span>&middot;</span>
              <a href="#terms">Terms of Service</a>
              <span>&middot;</span>
              <a href="#security">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
