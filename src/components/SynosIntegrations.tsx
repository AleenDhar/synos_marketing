import React from 'react';
import NextImage from 'next/image';
import './SynosIntegrations.css';

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
  { name: 'Airtable', icon: 'https://cdn.worldvectorlogo.com/logos/airtable.svg' },
  { name: 'Shopify', icon: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { name: 'QuickBooks', icon: 'https://cdn.worldvectorlogo.com/logos/quickbooks-logo.svg' },
  { name: 'Zendesk', icon: 'https://cdn.worldvectorlogo.com/logos/zendesk-1.svg' },
  { name: 'Attio', icon: 'https://cdn.worldvectorlogo.com/logos/attio.svg' },
  { name: 'GitHub', icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
  { name: 'Google Sheets', icon: 'https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png' },
  { name: 'Zoom', icon: 'https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg' },
];

export const SynosIntegrations: React.FC = () => {
  return (
    <section className="synos-integrations" id="integrations">
      <div className="synos-container">
        <div className="synos-integrations-header">
          <h2 className="synos-integrations-title">Connects to the tools you already use.</h2>
          <p className="synos-integrations-subtitle">CRMs, sales tools, communication platforms, databases, payment systems — your AI employee plugs into your entire stack.</p>
        </div>

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

        <div className="synos-integrations-action">
          <a href="#all-integrations" className="synos-link-more">See all 500+ connections &rarr;</a>
        </div>
      </div>
    </section>
  );
};
