'use client';

import React from 'react';

const APPS = [
  { name: 'Gmail', icon: 'https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png' },
  { name: 'Slack', icon: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
  { name: 'Salesforce', icon: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
  { name: 'GitHub', icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
  { name: 'HubSpot', icon: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg' },
  { name: 'Notion', icon: 'https://cdn.worldvectorlogo.com/logos/notion-2.svg' },
  { name: 'Discord', icon: 'https://cdn.worldvectorlogo.com/logos/discord-6.svg' },
  { name: 'Stripe', icon: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
  { name: 'Teams', icon: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg' },
  { name: 'LinkedIn', icon: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg' },
  { name: 'Telegram', icon: 'https://cdn.worldvectorlogo.com/logos/telegram-1.svg' },
  { name: 'Zoom', icon: 'https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg' },
  { name: 'Jira', icon: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
  { name: 'Sheets', icon: 'https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png' },
  { name: 'Calendar', icon: 'https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png' },
  { name: 'Drive', icon: 'https://www.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png' },
  { name: 'Figma', icon: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg' },
  { name: 'Linear', icon: 'https://cdn.worldvectorlogo.com/logos/linear-app.svg' },
  { name: 'Zendesk', icon: 'https://cdn.worldvectorlogo.com/logos/zendesk-1.svg' },
  { name: 'Asana', icon: 'https://cdn.worldvectorlogo.com/logos/asana-logo.svg' },
];

export default function PhoneScreenUI() {
  return (
    <div
      className="phone-screen-ui"
      style={{
        width: 230,
        height: 485,
        borderRadius: 30,
        border: '1px solid #000',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(180deg, #1A0606 0%, #2A0808 35%, #3A0B0B 70%, #1A0606 100%)',
        color: '#fff',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        userSelect: 'none',
      }}
    >
      {/* Status bar */}
      <div
        style={{
          position: 'absolute',
          top: 8,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 16px',
          fontSize: 10,
          fontWeight: 600,
          zIndex: 50,
        }}
      >
        <span>9:41</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8 }}>
          <span>● ● ●</span>
          <span>5G</span>
        </span>
      </div>

      {/* Notch */}
      <div
        style={{
          position: 'absolute',
          top: 6,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 70,
          height: 20,
          background: '#000',
          borderRadius: 999,
          zIndex: 40,
        }}
      />

      {/* Brand */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 0,
          right: 0,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 8, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
          POWERED BY
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 900,
            letterSpacing: '0.03em',
            marginTop: 1,
            fontFamily: '"Archivo Black", "Arial Black", sans-serif',
          }}
        >
          SYNOS
        </div>
      </div>

      {/* Section label */}
      <div
        style={{
          position: 'absolute',
          top: 84,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 8,
          letterSpacing: '0.18em',
          color: 'rgba(255,255,255,0.5)',
          fontWeight: 600,
          textTransform: 'uppercase',
        }}
      >
        Connected Apps
      </div>

      {/* Apps grid — 4 columns */}
      <div
        style={{
          position: 'absolute',
          top: 110,
          left: 12,
          right: 12,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px 8px',
        }}
      >
        {APPS.map((app) => (
          <div
            key={app.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={app.icon}
                alt=""
                draggable={false}
                style={{ width: 24, height: 24, objectFit: 'contain' }}
              />
            </div>
            <span
              style={{
                fontSize: 7,
                color: 'rgba(255,255,255,0.85)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}
            >
              {app.name}
            </span>
          </div>
        ))}
      </div>

      {/* Dock indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 90,
          height: 4,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.4)',
          zIndex: 50,
        }}
      />
    </div>
  );
}
