import React from 'react';
import './SynosTemplates.css';

export const SynosTemplates: React.FC = () => {
  const templates = [
    { title: 'Customer Support Agent', desc: 'Answers tickets, routes issues, escalates edge cases, follows up — across email and Slack.' },
    { title: 'Lead Research & Enrichment', desc: 'Finds prospects, enriches contact data, scores leads, and drops results into your CRM automatically.' },
    { title: 'Content Publisher', desc: 'Drafts, schedules, and publishes content across channels on autopilot.' },
    { title: 'Daily Standup Collector', desc: 'Collects async standups from your team on Slack or Teams. Summarizes. Flags blockers.' },
    { title: 'Invoice & Payment Tracker', desc: 'Monitors Stripe and accounting tools. Flags overdue invoices. Sends payment reminders.' },
    { title: 'Meeting Prep Agent', desc: 'Pulls attendee info, past meeting notes, open action items, and relevant docs before every meeting.' },
    { title: 'IT Helpdesk Agent', desc: 'Handles password resets, access requests, and common IT tickets on Teams or Slack.' },
    { title: 'Employee Onboarding Agent', desc: 'Walks new hires through onboarding checklists, answers policy questions, schedules intro meetings.' }
  ];

  return (
    <section className="synos-templates" id="templates">
      <div className="synos-container">
        <div className="synos-templates-header">
          <h2 className="synos-templates-title">Start in 60 seconds. Customize forever.</h2>
          <p className="synos-templates-subtitle">Pre-built agent templates for the workflows that eat your team&apos;s time. Pick one. Tweak it. Deploy it.</p>
        </div>
        <div className="synos-templates-grid">
          {templates.map((template, index) => (
            <div key={index} className="synos-template-card">
              <h3 className="synos-template-card-title">{template.title}</h3>
              <p className="synos-template-card-desc">{template.desc}</p>
              <button className="synos-template-btn">Use Template</button>
            </div>
          ))}
        </div>
        <div className="synos-templates-footer">
          <button className="synos-btn-secondary">Browse all templates →</button>
        </div>
      </div>
    </section>
  );
};
