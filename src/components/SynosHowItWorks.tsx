import React from 'react';
import './SynosHowItWorks.css';

export const SynosHowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Describe it',
      description: "Tell your agent what to do in plain English. No code. No flowcharts. No prompt engineering. Just describe the job like you'd describe it to a new hire."
    },
    {
      number: '2',
      title: 'Connect it',
      description: "Wire up any combination of 900+ integrations — Gmail, Salesforce, Slack, Notion, HubSpot, Stripe, Jira, SAP, databases, ERPs, and hundreds more. If your company uses it, SynosAI connects to it."
    },
    {
      number: '3',
      title: 'Deploy it',
      description: "Push your agent to Slack, Microsoft Teams, Telegram, or Discord. Set a schedule. Trigger on events. Let it run autonomously. Check in when you want — not because you have to."
    }
  ];

  return (
    <section className="synos-how-it-works" id="how-it-works">
      <div className="synos-container">
        <h2 className="synos-section-title">Three steps. No engineering team required.</h2>
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
