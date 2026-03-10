import React from 'react';
import './SynosFeatureGrid.css';

export const SynosFeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'Natural language instructions',
      description: 'Tell your agent what to do in plain English. It figures out the rest.'
    },
    {
      title: '300+ app integrations',
      description: 'Connect every tool your business runs on. Not toy integrations — real, working connections.'
    },
    {
      title: 'Workflow builder',
      description: 'Build multi-step workflows visually. Set cron schedules. Trigger on events.'
    },
    {
      title: 'Multi-channel deployment',
      description: 'Deploy agents to Slack, Telegram, Microsoft Teams, and Discord.'
    },
    {
      title: 'Scheduling & cron jobs',
      description: 'Agents run on your schedule — daily reports, weekly cleanups, hourly checks. Autopilot.'
    },
    {
      title: 'Knowledge & context',
      description: 'Give agents access to your docs, data, and SOPs. They learn your business.'
    },
    {
      title: 'Zero code required',
      description: 'If you can describe what you want, you can build an agent. Period.'
    }
  ];

  return (
    <section className="synos-feature-grid">
      <div className="synos-container">
        <div className="synos-feature-header">
          <h2 className="synos-feature-title">Everything a great employee does.</h2>
          <p className="synos-feature-subtitle">Nothing a great employee complains about.</p>
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
