import React from 'react';
import './SynosDeploy.css';

export const SynosDeploy: React.FC = () => {
  const platforms = [
    { 
      name: 'Slack', 
      desc: 'Agents that respond, report, automate, and act — right inside your workspace channels.',
      icon: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg'
    },
    { 
      name: 'Microsoft Teams', 
      desc: 'Enterprise-grade agent deployment for Teams-first organizations. IT-approved.',
      icon: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg'
    },
    { 
      name: 'Telegram', 
      desc: 'Lightweight personal agents. Access your AI workforce from anywhere.',
      icon: 'https://cdn.worldvectorlogo.com/logos/telegram-1.svg'
    },
    { 
      name: 'Discord', 
      desc: 'Community management, moderation, support — agents that never go offline.',
      icon: 'https://cdn.worldvectorlogo.com/logos/discord-6.svg'
    }
  ];

  return (
    <section className="synos-deploy" id="deployment">
      <div className="synos-container">
        <div className="synos-deploy-header">
          <h2 className="synos-deploy-title">Your agents live where your team works.</h2>
          <p className="synos-deploy-subtitle">
            Not in another dashboard. Not in another tab. Inside the tools your team already has open.
          </p>
        </div>
        <div className="synos-platforms-grid">
          {platforms.map((p, i) => (
            <div key={i} className="synos-platform-card">
              <div className="synos-platform-icon">
                <img src={p.icon} alt={p.name} />
              </div>
              <h3 className="synos-platform-name">{p.name}</h3>
              <p className="synos-platform-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
