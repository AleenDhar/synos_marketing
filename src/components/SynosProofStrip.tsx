'use client';

import React from 'react';
import './SynosProofStrip.css';

const METRICS = [
  { value: '900+', label: 'App Integrations' },
  { value: '<60s', label: 'Agent Setup Time' },
  { value: '24/7', label: 'Always Running' },
  { value: '5', label: 'Deploy Channels' },
];

export const SynosProofStrip: React.FC = () => {
  return (
    <section className="synos-proof-strip" aria-label="Key metrics">
      <div className="synos-proof-strip-inner">
        {METRICS.map((m) => (
          <div key={m.label} className="synos-proof-strip-item">
            <span className="synos-proof-strip-value">{m.value}</span>
            <span className="synos-proof-strip-label">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
