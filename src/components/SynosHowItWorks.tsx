import React from 'react';
import './SynosHowItWorks.css';

interface SynosHowItWorksProps {
  onWaitlistClick: () => void;
}

export const SynosHowItWorks: React.FC<SynosHowItWorksProps> = ({ onWaitlistClick }) => {
  const superpowers = [
    {
      title: 'Its Own Browser',
      description: "Your AI employee has a real browser with persistent cookie storage. Login once — it stays logged in. It navigates websites, fills forms, extracts data, and automates workflows like a human sitting at a screen."
    },
    {
      title: '1,000+ App Connections',
      description: "Connect your CRM, LinkedIn, Apollo, ZoomInfo, Seamless.ai, Stripe, Slack, and hundreds more. Wire your entire stack together and let the AI operate across all of them."
    },
    {
      title: 'Dedicated Cloud Compute',
      description: "Each AI employee runs on its own dedicated Fargate instance. Real infrastructure, not a wrapper on an API. Build apps, run scripts, host services — all within your own isolated environment."
    },
    {
      title: 'Builds & Hosts Apps',
      description: "Need a lead capture form that pushes to Salesforce? A 24/7 support bot? A customer feedback portal? Your AI employee can build it, deploy it, and host it live — no developers needed."
    }
  ];

  return (
    <section className="synos-how-it-works" id="superpowers">
      <div className="synos-container">
        <h2 className="synos-section-title">This isn&apos;t a chatbot. It&apos;s an employee.</h2>
        <div className="synos-steps-grid">
          {superpowers.map((sp, i) => (
            <div key={i} className="synos-step-card">
              <h3 className="synos-step-title">{sp.title}</h3>
              <p className="synos-step-description">{sp.description}</p>
            </div>
          ))}
        </div>
        <div className="synos-section-action">
          <button className="synos-btn-primary" onClick={onWaitlistClick}>Join the Waitlist</button>
        </div>
      </div>
    </section>
  );
};
