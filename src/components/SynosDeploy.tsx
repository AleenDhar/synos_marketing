import React from 'react';
import './SynosDeploy.css';

export const SynosDeploy: React.FC = () => {
  const platforms = [
    { name: 'Slack', desc: 'Agents that respond, report, and act inside your workspace' },
    { name: 'Telegram', desc: 'Personal AI assistants in your pocket' },
    { name: 'Microsoft Teams', desc: 'Enterprise-ready agent deployment' },
    { name: 'Discord', desc: 'Community and team agents that never sleep' }
  ];

  return (
    <section className="synos-deploy">
      <div className="synos-container">
        <div className="synos-deploy-header">
          <h2 className="synos-deploy-title">Your agents live where your team works.</h2>
          <p className="synos-deploy-subtitle">
            Not in another dashboard. Not in another tab. <br />
            Right inside Slack, Telegram, Teams, and Discord.
          </p>
        </div>
        <div className="synos-platforms-grid">
          {platforms.map((p, i) => (
            <div key={i} className="synos-platform-card">
              <div className="synos-platform-icon-placeholder">{p.name[0]}</div>
              <h3 className="synos-platform-name">{p.name}</h3>
              <p className="synos-platform-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
