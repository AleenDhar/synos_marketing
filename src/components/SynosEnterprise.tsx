import React from 'react';
import './SynosEnterprise.css';

export const SynosEnterprise: React.FC = () => {
  const features = [
    { title: 'SSO & SAML', desc: 'Single sign-on with your existing identity provider. Okta, Azure AD, Google Workspace — all supported.' },
    { title: 'Role-Based Access Control', desc: 'Granular permissions. Control who can build, edit, deploy, and view agents at the team, department, or org level.' },
    { title: 'Audit Logs', desc: 'Full visibility into every agent action, every user change, every deployment. Exportable. Searchable.' },
    { title: 'SOC 2 Compliance', desc: 'Your data is handled with enterprise-grade security standards. Encryption at rest and in transit.' },
    { title: 'Custom Deployment', desc: 'On-prem options. VPC peering. Dedicated instances. Whatever your infrastructure team needs.' },
    { title: 'SLA & Priority Support', desc: 'Guaranteed uptime. Dedicated account manager. Priority response times.' }
  ];

  return (
    <section className="synos-enterprise" id="enterprise">
      <div className="synos-container">
        <div className="synos-enterprise-header">
          <h2 className="synos-enterprise-title">Built for teams that don&apos;t compromise on security.</h2>
          <p className="synos-enterprise-subtitle">SynosAI is enterprise-ready out of the box. Deploy across your organization with the controls your security and compliance teams require.</p>
        </div>
        <div className="synos-enterprise-grid">
          {features.map((feature, index) => (
            <div key={index} className="synos-enterprise-card">
              <h3 className="synos-enterprise-card-title">{feature.title}</h3>
              <p className="synos-enterprise-card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="synos-enterprise-actions">
          <button className="synos-btn-primary">Book an Enterprise Demo</button>
          <button className="synos-btn-secondary">Read the Security Whitepaper</button>
        </div>
      </div>
    </section>
  );
};
