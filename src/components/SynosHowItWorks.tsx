import React from 'react';
import './SynosHowItWorks.css';

export const SynosHowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Build your agent',
      description: 'Describe what you want in plain English. No code. No flowcharts. Just tell it what to do.'
    },
    {
      number: '2',
      title: 'Connect your apps',
      description: 'Wire up 300+ integrations — Gmail, Sheets, Slack, Notion, Stripe, CRMs, databases — whatever your work needs.'
    },
    {
      number: '3',
      title: 'Deploy & schedule',
      description: 'Send your agent to Slack, Telegram, Teams, or Discord. Set it on a schedule. Let it run. Go do something else.'
    }
  ];

  return (
    <section className="synos-how-it-works" id="how-it-works">
      <div className="synos-container">
        <h2 className="synos-section-label">How it works</h2>
        <div className="synos-steps-grid">
          {steps.map(step => (
            <div key={step.number} className="synos-step-card">
              <div className="synos-step-number">{step.number}</div>
              <h3 className="synos-step-title">{step.title}</h3>
              <p className="synos-step-description">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="synos-section-action">
          <button className="synos-btn-primary">Get Started Free</button>
        </div>
      </div>
    </section>
  );
};
