import React from 'react';
import './SynosTemplates.css';

export const SynosTemplates: React.FC = () => {
  const templates = [
    { title: 'LinkedIn Outreach Agent', desc: 'Finds new leads, sends personalized connection requests, and follows up — all through persistent browser sessions on LinkedIn.' },
    { title: 'ABM Account Reactivation', desc: 'Scans your CRM for cold accounts, finds current contacts, researches company news, and sends warm re-engagement emails.' },
    { title: 'Lead Research & Enrichment', desc: 'Connects Apollo, ZoomInfo, or Seamless.ai to your CRM. Enriches contacts, scores leads, drops them into your pipeline.' },
    { title: 'BANT / MEDDPICC Qualifier', desc: 'Automatically qualifies your pipeline using enterprise sales frameworks. Analyzes buyer intent and flags hot leads.' },
    { title: '24/7 Support Bot', desc: 'Answers customer questions around the clock. Resolves tickets, escalates edge cases, follows up — no breaks, no holidays.' },
    { title: 'Lead Capture Form Builder', desc: 'Builds a hosted form connected to your CRM or Google Sheets. New submissions become leads in Salesforce, HubSpot, or Attio instantly.' },
    { title: 'Competitor Intelligence Agent', desc: 'Monitors competitor websites, pricing pages, and news. Delivers a weekly digest of changes so you never miss a move.' },
    { title: 'Meeting Prep Agent', desc: 'Before every meeting, pulls attendee info, past notes, open action items, and relevant company news so you walk in prepared.' },
  ];

  return (
    <section className="synos-templates" id="templates">
      <div className="synos-container">
        <div className="synos-templates-header">
          <h2 className="synos-templates-title">Start in 60 seconds. Customize forever.</h2>
          <p className="synos-templates-subtitle">Pre-built AI employee templates for workflows that eat your team&apos;s time. Pick one. Tweak it. Deploy it.</p>
        </div>
        <div className="synos-templates-grid">
          {templates.map((template, index) => (
            <div key={index} className="synos-template-card">
              <h3 className="synos-template-card-title">{template.title}</h3>
              <p className="synos-template-card-desc">{template.desc}</p>
              <button className="synos-template-btn">Use Template &rarr;</button>
            </div>
          ))}
        </div>
        <div className="synos-templates-footer">
          <button className="synos-btn-secondary">Browse all templates &rarr;</button>
        </div>
      </div>
    </section>
  );
};
