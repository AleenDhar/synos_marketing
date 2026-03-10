import React from 'react';
import './SynosSocialProof.css';

export const SynosSocialProof: React.FC = () => {
  const testimonials = [
    { 
      quote: "We replaced 3 manual workflows in week one. Our ops team got 15 hours back per week.",
      author: "VP of Operations",
      company: "[Company]"
    },
    { 
      quote: "Deployed a support agent on Teams in under 10 minutes. It resolved 40% of tickets on day one.",
      author: "Head of IT",
      company: "[Company]"
    },
    { 
      quote: "The integration library is unreal. We connected SAP, Salesforce, and Slack in one agent.",
      author: "CTO",
      company: "[Company]"
    }
  ];

  const metrics = [
    { label: "Average setup time", value: "Under 60 seconds" },
    { label: "Integrations available", value: "900+" },
    { label: "Deployment channels", value: "5" },
    { label: "Avg. workflow time saved", value: "12+ hours/week" }
  ];

  return (
    <section className="synos-social-proof">
      <div className="synos-container">
        <h2 className="synos-social-proof-title">What teams are doing with SynosAI</h2>
        
        <div className="synos-testimonials">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="synos-testimonial-item">
              <p className="synos-testimonial-quote">"{t.quote}"</p>
              <footer className="synos-testimonial-author">— <strong>{t.author}</strong>, {t.company}</footer>
            </blockquote>
          ))}
        </div>

        <div className="synos-metrics">
          <table className="synos-metrics-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((m, i) => (
                <tr key={i}>
                  <td className="synos-metric-label">{m.label}</td>
                  <td className="synos-metric-value">{m.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
