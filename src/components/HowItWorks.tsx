import React from 'react';
import './HowItWorks.css';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect your calendar',
      description: "We'll handle all the cross-referencing, so you don't have to worry about double bookings.",
      visual: (
        <div className="step-visual v1">
          <div className="cal-dot">Cal.com</div>
          <div className="orbit-item i1">G</div>
          <div className="orbit-item i2">O</div>
          <div className="orbit-item i3">I</div>
        </div>
      )
    },
    {
      number: '02',
      title: 'Set your availability',
      description: 'Want to block off weekends? Set up any buffers? We make that easy.',
      visual: (
        <div className="step-visual v2">
          <div className="avail-row">
            <div className="toggle-box"></div> Mon 8:30 am - 5:00 pm +
          </div>
          <div className="avail-row">
            <div className="toggle-box active"></div> Tue 9:00 am - 6:30 pm +
          </div>
          <div className="avail-row">
            <div className="toggle-box active"></div> Wed 10:00 am - 7:00 pm +
          </div>
        </div>
      )
    },
    {
      number: '03',
      title: 'Choose how to meet',
      description: 'It could be a video chat, phone call, or a walk in the park!',
      visual: (
        <div className="step-visual v3">
          <div className="meet-window">
             <div className="meet-header">...</div>
             <div className="meet-body">
                <div className="profile-icon">👤</div>
                <div className="profile-icon">👤</div>
             </div>
             <div className="meet-footer">
                <span>📹</span> <span>🎙️</span> <span>💬</span> <span>🖥️</span> <span>🔴</span>
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="how-it-works">
      <div className="section-header">
        <span className="section-badge">How it works</span>
        <h2 className="section-title">With us, appointment scheduling is easy</h2>
        <p className="section-subtitle">Effortless scheduling for business and individuals, powerful solutions for fast-growing modern companies.</p>
        <div className="section-actions">
           <button className="btn-primary">Get started <span>→</span></button>
           <button className="btn-secondary">Book a demo <span>→</span></button>
        </div>
      </div>
      <div className="steps-container">
        {steps.map(step => (
          <div key={step.number} className="step-card">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
            <div className="step-visual-container">
              {step.visual}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
