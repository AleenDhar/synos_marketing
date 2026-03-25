import React from 'react';
import './SynosComparison.css';

export const SynosComparison: React.FC = () => {
  const competitors = ['ChatGPT / Copilot', 'Claude', 'Replit', 'OpenClaw', 'Zapier / Make'];

  const rows = [
    { feature: 'Generates text & answers questions', values: [true, true, true, true, false, true] },
    { feature: 'Browses the web autonomously', values: [false, true, false, true, false, true] },
    { feature: 'Persistent browser with cookie storage', values: [false, false, false, true, false, true] },
    { feature: 'Connects 1,000+ business apps', values: [false, false, false, false, true, true] },
    { feature: 'Dedicated cloud compute per agent', values: [false, false, true, false, false, true] },
    { feature: 'Builds & hosts live web apps', values: [false, false, true, false, false, true] },
    { feature: 'Deploys to Slack, Teams, Discord', values: [false, true, false, true, false, true] },
    { feature: 'Remembers context across sessions', values: [false, true, false, true, false, true] },
    { feature: 'Runs background jobs for hours', values: [false, false, true, true, true, true] },
    { feature: 'No code required', values: [true, true, true, false, true, true] },
    { feature: 'Visual workflow builder', values: [false, false, true, true, true, true] },
  ];

  return (
    <section className="synos-comparison" id="comparison">
      <div className="synos-container">
        <div className="synos-comparison-header">
          <h2 className="synos-comparison-title">Not another AI toy.</h2>
          <p className="synos-comparison-subtitle">Others do one thing. Synos does everything — and actually executes.</p>
        </div>
        <div className="synos-comparison-table-wrap">
          <table className="synos-comparison-table">
            <thead>
              <tr>
                <th className="synos-comp-feature-col">Capability</th>
                {competitors.map((name) => (
                  <th key={name}>{name}</th>
                ))}
                <th className="synos-comp-highlight">SynosAI</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className="synos-comp-feature">{row.feature}</td>
                  {row.values.slice(0, competitors.length).map((val, j) => (
                    <td key={j} className={`synos-comp-cell ${val ? 'synos-comp-cell-check' : ''}`}>
                      {val ? '✓' : '—'}
                    </td>
                  ))}
                  <td className="synos-comp-cell synos-comp-cell-highlight">
                    {row.values[row.values.length - 1] ? '✓' : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
