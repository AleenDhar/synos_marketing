import React from 'react';
import './SynosTemplates.css';

export const SynosTemplates: React.FC = () => {
  const templates = [
    { title: 'Customer Support Agent', desc: 'Answers tickets, routes issues, follows up — across Slack and email' },
    { title: 'Content Publisher', desc: 'Writes, schedules, and posts content on your behalf' },
    { title: 'Lead Research Agent', desc: 'Finds prospects, enriches data, drops results into your CRM' },
    { title: 'Daily Standup Bot', desc: 'Collects team updates on Slack/Discord, summarizes them' },
    { title: 'Invoice & Payment Tracker', desc: 'Monitors Stripe, flags overdue payments, sends reminders' },
    { title: 'Meeting Prep Agent', desc: 'Pulls context before meetings — attendee info, past notes' }
  ];

  return (
    <section className="synos-templates" id="templates">
      <div className="synos-container">
        <div className="synos-templates-header">
          <h2 className="synos-templates-title">Hire an agent in 60 seconds.</h2>
          <p className="synos-templates-subtitle">Pick a template. Customize it. Deploy it. Done.</p>
        </div>
        <div className="synos-templates-grid">
          {templates.map((template, index) => (
            <div key={index} className="synos-template-card">
              <h3 className="synos-template-card-title">{template.title}</h3>
              <p className="synos-template-card-desc">{template.desc}</p>
              <button className="synos-template-btn">Use template</button>
            </div>
          ))}
        </div>
        <div className="synos-templates-footer">
          <button className="synos-btn-secondary">Browse all templates</button>
        </div>
      </div>
    </section>
  );
};
