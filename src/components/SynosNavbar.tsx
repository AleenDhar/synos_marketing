import React from 'react';
import './SynosNavbar.css';

export const SynosNavbar: React.FC = () => {
  return (
    <nav className="synos-navbar">
      <div className="synos-nav-container">
        <div className="synos-nav-left">
          <div className="synos-logo">SynosAI</div>
          <ul className="synos-nav-links">
            <li><a href="#templates">Templates</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#enterprise">Enterprise</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className="synos-nav-right">
          <a href="/login" className="synos-login-link">Login</a>
          <button className="synos-btn-get-started">Get Started Free</button>
        </div>
      </div>
    </nav>
  );
};
