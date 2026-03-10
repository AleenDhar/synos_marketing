import React from 'react';
import './Benefits.css';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Avoid meeting overload',
      description: 'Only get booked when you want to. Set daily, weekly or monthly limits and add buffers around your events to allow you to focus or take a break.',
      visual: (
        <div className="benefit-visual b1">
          <div className="buffer-card">
            <div className="b-header">Notice and buffers</div>
            <div className="b-row">Minimum notice: 2 days</div>
            <div className="b-row">Buffer before: 0 mins / After: 10 mins</div>
          </div>
        </div>
      )
    },
    {
      title: 'Stand out with a custom booking link',
      description: 'Customize your booking link so it\'s short and easy to remember for your bookers. No more long, complicated links one can easily forget.',
      visual: (
        <div className="benefit-visual b2">
          <div className="link-badge">cal.com/cedric</div>
          <div className="link-card">
             <div className="l-header">👤 Cedric van Ravensteijn</div>
             <div className="l-sub">Partnerships & Collaborations</div>
          </div>
        </div>
      )
    },
    {
      title: 'Streamline your bookers experience',
      description: 'Let your bookers overlay their calendar, receive booking confirmations via text or email, get events added to their calendar, and allow them to reschedule with ease.',
      visual: (
        <div className="benefit-visual b3">
          <div className="cal-grid-mini">...</div>
        </div>
      )
    },
    {
      title: 'Reduce no-shows with automated meeting reminders',
      description: 'Easily send sms or meeting reminder emails about bookings, and send automated follow-ups to gather any relevant information before the meeting.',
      visual: (
        <div className="benefit-visual b4">
           <div className="notif-pill">🔔 Meeting canceled</div>
        </div>
      )
    }
  ];

  const microFeatures = [
    { name: 'Accept payments', icon: '💳' },
    { name: 'Built-in video conferencing', icon: '📹' },
    { name: 'Short booking links', icon: '🔗' },
    { name: 'Privacy first', icon: '🔒' },
    { name: '65+ languages', icon: '🌐' },
    { name: 'Easy embeds', icon: '⚙️' },
    { name: 'All your favorite apps', icon: '🧩' },
    { name: 'Simple customization', icon: '🎨' }
  ];

  return (
    <section className="benefits">
       <div className="section-header">
        <span className="section-badge">Benefits</span>
        <h2 className="section-title">Your all-purpose scheduling app</h2>
        <p className="section-subtitle">Discover a variety of our advanced features. Unlimited and free for individuals.</p>
        <div className="section-actions">
           <button className="btn-primary">Get started <span>→</span></button>
           <button className="btn-secondary">Book a demo <span>→</span></button>
        </div>
      </div>

      <div className="benefits-grid">
        {benefits.map(benefit => (
          <div key={benefit.title} className="benefit-card">
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
            <div className="benefit-visual-container">
              {benefit.visual}
            </div>
          </div>
        ))}
      </div>

      <div className="feature-grid-title">...and so much more!</div>
      <div className="micro-features-grid">
        {microFeatures.map(feature => (
          <div key={feature.name} className="micro-feature">
            <div className="mf-icon">{feature.icon}</div>
            <div className="mf-name">{feature.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
