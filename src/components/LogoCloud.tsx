import React from 'react';
import './LogoCloud.css';

export const LogoCloud: React.FC = () => {
  const logos = [
    { name: 'PlanetScale', icon: 'P' },
    { name: 'Coinbase', icon: 'C' },
    { name: 'Storyblok', icon: 'S' },
    { name: 'AngelList', icon: 'A' },
    { name: 'Raycast', icon: 'R' },
    { name: 'Vercel', icon: 'V' }
  ];

  return (
    <section className="logo-cloud">
      <div className="logo-cloud-container">
        <p className="logo-cloud-text">Trusted by fast-growing companies around the world</p>
        <div className="logos-grid">
          {logos.map(logo => (
            <div key={logo.name} className="logo-item">
              <span className="logo-icon">{logo.icon}</span>
              <span className="logo-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
