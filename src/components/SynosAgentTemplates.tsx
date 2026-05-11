'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import './SynosAgentTemplates.css';

type Agent = {
  name: string;
  role: string;
  tier: string;
  img: string;
  initials: string;
  accent: string;
};

const AGENTS: Agent[] = [
  { name: 'MUSASHI', role: 'Strategist · Lead Research',       tier: 'S-Tier', img: '/agents/00627030-d71d-4dc6-bef6-0d9e0dac1210.png', initials: 'MS', accent: '#E0322B' },
  { name: 'NEKO',  role: 'Outbound · Cold Email & DMs',         tier: 'A-Tier', img: '/agents/02151c29-c1c9-4832-9e79-37c7fb5953bd.png', initials: 'NK', accent: '#F58A52' },
  { name: 'YUI',   role: 'Support · 24/7 Customer Care',        tier: 'A-Tier', img: '/agents/1c11436d-dfcf-436f-bad1-dcc0916ed547.png', initials: 'YU', accent: '#7B5FB6' },
  { name: 'KAEDE', role: 'Analyst · Pipeline & Reporting',      tier: 'B-Tier', img: '/agents/385c2d4f-6731-46d6-acd4-2349db75c532.png', initials: 'KA', accent: '#54C28A' },
  { name: 'DUKE',  role: 'Closer · Demo Booking & Negotiation', tier: 'S-Tier', img: '/agents/649bb8f6-bff3-48a0-be63-4f5c9590a654.png', initials: 'DK', accent: '#3B82F6' },
  { name: 'UNIT-8',role: 'Ops · Workflow Automation',           tier: 'A-Tier', img: '/agents/7c134037-41ad-4f9f-b742-134a23cdd7a2.png', initials: 'U8', accent: '#9CA3AF' },
  { name: 'HANA',  role: 'Marketing · Content & Campaigns',     tier: 'B-Tier', img: '/agents/88f64fa1-573d-41c9-9040-5579bb748066.png', initials: 'HA', accent: '#EC4899' },
  { name: 'REN',   role: 'Recruiter · Talent Sourcing',         tier: 'B-Tier', img: '/agents/9e993a23-64ea-49a7-9567-1798a6630b59.png', initials: 'RE', accent: '#0EA5E9' },
];

export const SynosAgentTemplates: React.FC = () => {
  return (
    <section className="synos-agents" id="agent-templates" data-navbar-theme="light">
      <div className="synos-container">
        <div className="synos-agents-header">
          <span className="synos-agents-eyebrow">Agent Templates</span>
          <h2 className="synos-agents-title">Hire your starting roster.</h2>
          <p className="synos-agents-subtitle">
            Pre-built agents you can drop into Slack, your CRM, or your inbox in
            minutes. Tweak their tools, tone, and tier whenever you like.
          </p>
        </div>

        <div className="synos-agents-grid">
          {AGENTS.map((agent) => (
            <button
              key={agent.name}
              className="synos-agent-card"
              type="button"
              style={{ ['--agent-accent' as string]: agent.accent }}
            >
              <div
                className="synos-agent-card-fallback"
                style={{
                  background: `linear-gradient(160deg, ${agent.accent}, #1a1a1a)`,
                }}
              >
                <span>{agent.initials}</span>
              </div>
              <img
                src={agent.img}
                alt=""
                className="synos-agent-card-img"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="synos-agent-card-tier">{agent.tier}</span>
              <div className="synos-agent-card-overlay">
                <h3 className="synos-agent-card-name">{agent.name}</h3>
                <p className="synos-agent-card-role">{agent.role}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="synos-agents-footer">
          <a className="synos-agents-link" href="#all-agents">
            <span>See all the agents</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
