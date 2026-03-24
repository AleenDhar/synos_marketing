import React from 'react';
import './SynosComparison.css';

export const SynosComparison: React.FC = () => {
  const rows = [
    { feature: 'Generates text & answers questions', chatgpt: true, zapier: false, synos: true },
    { feature: 'Browses the web autonomously', chatgpt: false, zapier: false, synos: true },
    { feature: 'Persistent browser with cookie storage', chatgpt: false, zapier: false, synos: true },
    { feature: 'Connects 1,000+ business apps', chatgpt: false, zapier: true, synos: true },
    { feature: 'Dedicated cloud compute per agent', chatgpt: false, zapier: false, synos: true },
    { feature: 'Builds & hosts live web apps', chatgpt: false, zapier: false, synos: true },
    { feature: 'Deploys to Slack, Teams, Discord', chatgpt: false, zapier: false, synos: true },
    { feature: 'Remembers context across sessions', chatgpt: false, zapier: false, synos: true },
    { feature: 'Runs background jobs for hours', chatgpt: false, zapier: true, synos: true },
    { feature: 'No code required', chatgpt: true, zapier: true, synos: true },
  ];

  return (
    <section className="synos-comparison" id="comparison">
      <div className="synos-container">
        <div className="synos-comparison-header">
          <h2 className="synos-comparison-title">Not another AI toy.</h2>
          <p className="synos-comparison-subtitle">ChatGPT talks. Zapier connects. Synos does both — and actually executes.</p>
        </div>
        <div className="synos-comparison-table-wrap">
          <table className="synos-comparison-table">
            <thead>
              <tr>
                <th className="synos-comp-feature-col">Capability</th>
                <th>ChatGPT / Copilot</th>
                <th>Zapier / Make</th>
                <th className="synos-comp-highlight">synosai</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className="synos-comp-feature">{row.feature}</td>
                  <td className="synos-comp-cell">{row.chatgpt ? '✓' : '—'}</td>
                  <td className="synos-comp-cell">{row.zapier ? '✓' : '—'}</td>
                  <td className="synos-comp-cell synos-comp-cell-highlight">{row.synos ? '✓' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
