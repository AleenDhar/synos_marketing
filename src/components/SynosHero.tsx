'use client'

import React from 'react';
import NextImage from 'next/image';
import { SplineScene } from './SplineScene';
import './SynosHero.css';

const INTEGRATIONS_ROW_1 = [
  { name: 'Gmail', icon: 'https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png' },
  { name: 'Slack', icon: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
  { name: 'Salesforce', icon: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
  { name: 'HubSpot', icon: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg' },
  { name: 'LinkedIn', icon: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' },
  { name: 'Notion', icon: 'https://cdn.worldvectorlogo.com/logos/notion-2.svg' },
  { name: 'Stripe', icon: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
  { name: 'Discord', icon: 'https://cdn.worldvectorlogo.com/logos/discord-6.svg' },
  { name: 'Teams', icon: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg' },
  { name: 'Telegram', icon: 'https://cdn.worldvectorlogo.com/logos/telegram-1.svg' },
];

const INTEGRATIONS_ROW_2 = [
  { name: 'Apollo', icon: 'https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg' },
  { name: 'Jira', icon: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
  { name: 'Airtable', icon: 'https://asset.brandfetch.io/idVfYwcuQz/idZ2GePD8A.svg' },
  { name: 'Shopify', icon: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { name: 'QuickBooks', icon: 'https://asset.brandfetch.io/idAftH_a4R/idVqvMcAgz.svg' },
  { name: 'Zendesk', icon: 'https://cdn.worldvectorlogo.com/logos/zendesk-1.svg' },
  { name: 'Attio', icon: 'https://asset.brandfetch.io/idxMj03vbL/idwmNhL4Ya.svg' },
  { name: 'GitHub', icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
  { name: 'Google Sheets', icon: 'https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png' },
  { name: 'Zoom', icon: 'https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg' },
];

interface SynosHeroProps {
  onWaitlistClick: () => void;
  onDemoClick: () => void;
}

export const SynosHero: React.FC<SynosHeroProps> = ({ onWaitlistClick, onDemoClick }) => {
  return (
    <section className="synos-hero">
      <div className="synos-hero-split">
        <div className="synos-hero-content">
          <h1 className="synos-hero-title">
            Hire an AI that actually does the work.
          </h1>
          <p className="synos-hero-description">
            Not a chatbot. Not a copilot. An AI employee that executes your business processes, connects your apps, builds tools, and browses the web — autonomously.
          </p>
          <div className="synos-hero-actions">
            <button className="synos-btn-primary" onClick={onWaitlistClick}>Join the Waitlist</button>
            <button className="synos-btn-secondary" onClick={onDemoClick}>Book a Demo</button>
          </div>
        </div>
        <div className="synos-hero-robot">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="synos-spline-scene"
          />
        </div>
      </div>

      <div className="synos-hero-integrations">
        <div className="synos-container">
          <p className="synos-hero-integrations-label">Connects to the tools you already use</p>
          <div className="synos-logo-track-container">
            <div className="synos-logo-track">
              <div className="synos-logo-scroll">
                {INTEGRATIONS_ROW_1.concat(INTEGRATIONS_ROW_1).map((item, index) => (
                  <div key={index} className="synos-integration-item">
                    <NextImage src={item.icon} alt={item.name} className="synos-integration-icon" width={32} height={32} />
                    <span className="synos-integration-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="synos-logo-track reverse">
              <div className="synos-logo-scroll">
                {INTEGRATIONS_ROW_2.concat(INTEGRATIONS_ROW_2).map((item, index) => (
                  <div key={index} className="synos-integration-item">
                    <NextImage src={item.icon} alt={item.name} className="synos-integration-icon" width={32} height={32} />
                    <span className="synos-integration-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
