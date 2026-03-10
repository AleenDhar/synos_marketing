import React from 'react';
import './SynosIntegrations.css';

export const SynosIntegrations: React.FC = () => {
  const logos = [
    'Gmail', 'Sheets', 'Slack', 'Notion', 'Stripe', 'HubSpot', 
    'Telegram', 'Discord', 'Teams', 'Trello', 'Airtable', 'Zapier'
  ];

  return (
    <section className="synos-integrations">
      <div className="synos-container">
        <p className="synos-integrations-label">300+ integrations. The apps you already use.</p>
        <div className="synos-logo-track">
          <div className="synos-logo-scroll">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="synos-integration-logo">
                {logo}
              </div>
            ))}
          </div>
        </div>
        <div className="synos-integrations-action">
          <a href="#all-integrations" className="synos-link-more">See all integrations →</a>
        </div>
      </div>
    </section>
  );
};
