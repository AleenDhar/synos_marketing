import React from 'react';
import './SynosPricing.css';

interface SynosPricingProps {
  onWaitlistClick: () => void;
}

export const SynosPricing: React.FC<SynosPricingProps> = ({ onWaitlistClick }) => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'For individuals exploring AI automation.',
      features: [
        '1 AI employee',
        '100 task executions / month',
        '50+ app connections',
        'Community support',
        'Shared compute',
      ],
      cta: 'Join the Waitlist',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/ month',
      description: 'For teams ready to automate real workflows.',
      features: [
        '5 AI employees',
        'Unlimited task executions',
        '1,000+ app connections',
        'Persistent browser sessions',
        'Dedicated Fargate instance',
        'Build & host apps',
        'Priority support',
      ],
      cta: 'Join the Waitlist',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For organizations that need control and scale.',
      features: [
        'Unlimited AI employees',
        'Unlimited everything',
        'SSO / SAML',
        'Role-based access control',
        'Audit logs',
        'Custom deployment (VPC, on-prem)',
        'Dedicated account manager',
        'SLA & priority support',
      ],
      cta: 'Book a Demo',
      highlighted: false,
    },
  ];

  return (
    <section className="synos-pricing" id="pricing">
      <div className="synos-container">
        <div className="synos-pricing-header">
          <h2 className="synos-pricing-title">Simple pricing. Start free.</h2>
          <span className="synos-pricing-coming-soon">Coming Soon</span>
          <p className="synos-pricing-subtitle">No credit card required. Upgrade when you&apos;re ready.</p>
        </div>
        <div className="synos-pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`synos-pricing-card ${plan.highlighted ? 'synos-pricing-highlighted' : ''}`}>
              {plan.highlighted && <div className="synos-pricing-badge">Most Popular</div>}
              <h3 className="synos-pricing-plan-name">{plan.name}</h3>
              <div className="synos-pricing-price">
                <span className="synos-pricing-amount">{plan.price}</span>
                {plan.period && <span className="synos-pricing-period">{plan.period}</span>}
              </div>
              <p className="synos-pricing-plan-desc">{plan.description}</p>
              <ul className="synos-pricing-features">
                {plan.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <button
                className={plan.highlighted ? 'synos-btn-primary synos-pricing-cta' : 'synos-btn-secondary synos-pricing-cta'}
                onClick={onWaitlistClick}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
