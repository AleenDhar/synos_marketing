import React from 'react';
import './SynosFooter.css';

export const SynosFooter: React.FC = () => {
  return (
    <footer className="synos-footer">
      <div className="synos-container">
        <div className="synos-footer-main">
          <div className="synos-footer-brand">
            <div className="synos-logo">SynosAI</div>
            <p className="synos-footer-tagline">The AI agent platform for modern teams.</p>
          </div>
          
          <div className="synos-footer-links">
            <div className="synos-footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#templates">Templates</a></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#workflow">Workflow Builder</a></li>
              </ul>
            </div>
            <div className="synos-footer-col">
              <h4>Enterprise</h4>
              <ul>
                <li><a href="#security">Security</a></li>
                <li><a href="#compliance">Compliance</a></li>
                <li><a href="#sla">SLA</a></li>
                <li><a href="#sales">Contact Sales</a></li>
              </ul>
            </div>
            <div className="synos-footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#changelog">Changelog</a></li>
                <li><a href="#status">Status Page</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="synos-footer-bottom">
          <div className="synos-footer-info">
            <p>© 2025 SynosAI. All rights reserved.</p>
            <div className="synos-legal">
              <a href="#privacy">Privacy Policy</a>
              <span>·</span>
              <a href="#terms">Terms of Service</a>
              <span>·</span>
              <a href="#security">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
