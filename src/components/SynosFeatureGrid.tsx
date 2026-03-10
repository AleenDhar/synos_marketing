import React from 'react';
import './SynosFeatureGrid.css';

export const SynosFeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'Natural Language Instructions',
      description: 'Tell your agent what to do in plain English. It interprets, plans, and executes. No syntax. No configuration files. No training required.'
    },
    {
      title: '900+ Integrations',
      description: 'Connect every tool your business runs on. CRMs, ERPs, databases, communication tools, payment systems, dev tools, cloud storage — real integrations, not toy connectors.'
    },
    {
      title: 'Visual Workflow Builder',
      description: 'Build multi-step workflows with a drag-and-drop builder. Add conditions, loops, API calls, and human-in-the-loop checkpoints. Set cron schedules. Trigger on webhooks.'
    },
    {
      title: 'Multi-Channel Deployment',
      description: 'Deploy agents to Slack, Microsoft Teams, Telegram, and Discord. Your agents live where your team already works — not in another tab.'
    },
    {
      title: 'Scheduling & Automation',
      description: 'Daily reports. Weekly digests. Hourly monitoring. Event-triggered workflows. Your agents run on your schedule, 24/7/365.'
    },
    {
      title: 'Knowledge & Context',
      description: 'Upload documents, SOPs, product specs, and internal data. Your agents learn your business and respond with context — not generic answers.'
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'SOC 2 compliant. SSO/SAML. Role-based access control. Audit logs. Data encryption at rest and in transit. Your compliance team will approve this.'
    },
    {
      title: 'Zero Code Required',
      description: "If you can describe what you want, you can build an agent. That's the bar. No developers. No consultants. No 6-month implementation."
    }
  ];

  return (
    <section className="synos-feature-grid">
      <div className="synos-container">
        <div className="synos-feature-header">
          <h2 className="synos-feature-title">Everything you need. Nothing you don't.</h2>
        </div>
        <div className="synos-features">
          {features.map((feature, index) => (
            <div key={index} className="synos-feature-item">
              <h3 className="synos-feature-item-title">{feature.title}</h3>
              <p className="synos-feature-item-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
