import React from 'react';
import './SynosFeatureGrid.css';

export const SynosFeatureGrid: React.FC = () => {
  const useCases = [
    {
      title: 'Automated LinkedIn Outreach',
      description: 'Connects to LinkedIn with persistent browser sessions, finds new leads, and sends personalized connection requests with custom messages — on autopilot.',
    },
    {
      title: 'Cold Account Reactivation',
      description: "Scans your CRM for cold accounts, verifies if contacts are still at the company, finds replacements if they've left, researches the latest company news, and crafts personalized re-engagement emails.",
    },
    {
      title: 'BANT & MEDDPICC Analysis',
      description: 'Automatically qualifies leads using enterprise sales frameworks. Analyzes budget, authority, need, timeline, and buyer intent signals across your pipeline.',
    },
    {
      title: 'Full Pipeline Automation',
      description: 'Connects Apollo, ZoomInfo, or Seamless.ai to your CRM. Finds prospects, enriches contact data, scores leads, and drops qualified results into Salesforce or HubSpot.',
    },
    {
      title: 'Build & Host Live Apps',
      description: 'Need a lead capture form that pushes to your CRM? A booking page connected to Google Calendar? A status dashboard? Synos builds it and hosts it for you.',
    },
    {
      title: '24/7 Support & FAQ Bots',
      description: 'Deploy support bots that answer questions, resolve tickets, and escalate edge cases — running around the clock without breaks, holidays, or sick days.',
    },
  ];

  return (
    <section className="synos-feature-grid" id="use-cases">
      <div className="synos-container">
        <div className="synos-feature-header">
          <h2 className="synos-feature-title">If you can imagine it, Synos can build it.</h2>
          <p className="synos-feature-subtitle">Real workflows running today. Not hypothetical.</p>
        </div>
        <div className="synos-features">
          {useCases.map((uc, index) => (
            <div key={index} className="synos-feature-item">
              <h3 className="synos-feature-item-title">{uc.title}</h3>
              <p className="synos-feature-item-description">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
