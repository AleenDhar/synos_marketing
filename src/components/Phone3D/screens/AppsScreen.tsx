'use client';

import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import DynamicIsland from '../DynamicIsland';
import '../styles.css';

const PHONE_W = 230;
const PHONE_H = 485;

type App = { name: string; icon: string };

const APPS: App[] = [
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
  { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { name: 'Linear', icon: 'https://cdn.simpleicons.org/linear/5E6AD2' },
  { name: 'Zendesk', icon: 'https://cdn.worldvectorlogo.com/logos/zendesk-1.svg' },
  { name: 'Asana', icon: 'https://cdn.worldvectorlogo.com/logos/asana-logo.svg' },
  // Row 6+
  { name: 'Trello', icon: 'https://cdn.simpleicons.org/trello/0079BF' },
  { name: 'Intercom', icon: 'https://cdn.simpleicons.org/intercom/1F8DED' },
  { name: 'Mailchimp', icon: 'https://cdn.simpleicons.org/mailchimp/FFE01B' },
  { name: 'Airtable', icon: 'https://cdn.simpleicons.org/airtable/18BFFF' },
  { name: 'Dropbox', icon: 'https://cdn.simpleicons.org/dropbox/0061FF' },
  { name: 'Calendly', icon: 'https://cdn.simpleicons.org/calendly/006BFF' },
  { name: 'Typeform', icon: 'https://cdn.simpleicons.org/typeform/262627' },
  { name: 'Segment', icon: 'https://api.iconify.design/simple-icons:segment.svg?color=%2352BD94' },
  { name: 'Mixpanel', icon: 'https://api.iconify.design/simple-icons:mixpanel.svg?color=%237856FF' },
  { name: 'Amplitude', icon: 'https://api.iconify.design/simple-icons:amplitude.svg?color=%231D63FF' },
  { name: 'Twilio', icon: 'https://api.iconify.design/simple-icons:twilio.svg?color=%23F22F46' },
  { name: 'SendGrid', icon: 'https://api.iconify.design/simple-icons:sendgrid.svg?color=%231A82E2' },
  { name: 'Zapier', icon: 'https://cdn.simpleicons.org/zapier/FF4A00' },
  { name: 'Webflow', icon: 'https://cdn.simpleicons.org/webflow/146EF5' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
  { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/7AB55C' },
  { name: 'Monday', icon: 'https://api.iconify.design/simple-icons:mondaydotcom.svg?color=%23FF3D57' },
  { name: 'ClickUp', icon: 'https://cdn.simpleicons.org/clickup/7B68EE' },
  { name: 'Atlassian', icon: 'https://cdn.simpleicons.org/atlassian/0052CC' },
  { name: 'GitLab', icon: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
  { name: 'Buffer', icon: 'https://cdn.simpleicons.org/buffer/231F20' },
  { name: 'Pipedrive', icon: 'https://api.iconify.design/simple-icons:pipedrive.svg?color=%23000000' },
  { name: 'Hootsuite', icon: 'https://api.iconify.design/simple-icons:hootsuite.svg?color=%23143059' },
  { name: 'Heroku', icon: 'https://api.iconify.design/simple-icons:heroku.svg?color=%23430098' },
];

export default function AppsScreen() {
  const [query, setQuery] = useState('');
  const [activeApp, setActiveApp] = useState<App | null>(null);

  const filteredApps = query.trim()
    ? APPS.filter((a) => a.name.toLowerCase().includes(query.toLowerCase().trim()))
    : APPS;

  // Auto-dismiss the notification after 4 seconds
  useEffect(() => {
    if (!activeApp) return;
    const t = setTimeout(() => setActiveApp(null), 4000);
    return () => clearTimeout(t);
  }, [activeApp]);

  return (
    <div
      style={{
        width: PHONE_W,
        height: PHONE_H,
        borderRadius: 30,
        background: 'linear-gradient(180deg, #1A0606 0%, #2A0808 35%, #3A0B0B 70%, #1A0606 100%)',
        color: '#fff',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {/* Dynamic island — same animation as the lockscreen notch */}
      <DynamicIsland
        show={!!activeApp}
        onDismiss={() => setActiveApp(null)}
        iconBg="#fff"
        icon={
          activeApp ? (
            <img
              src={activeApp.icon}
              alt=""
              style={{ width: 20, height: 20, objectFit: 'contain' }}
            />
          ) : null
        }
        title={activeApp?.name ?? ''}
        subtitle="Join the platform"
      />

      {/* Section label */}
      <div
        style={{
          position: 'absolute',
          top: 38,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 9,
          letterSpacing: '0.16em',
          color: 'rgba(255,255,255,0.7)',
          fontWeight: 700,
          textTransform: 'uppercase',
        }}
      >
        1,000+ Connected Apps
      </div>

      {/* Inline scrollbar — same look as the lockscreen About panel.
          Injected as a <style> tag so it always applies inside drei's <Html>. */}
      <style>{`
        .apps-grid-scroll {
          scrollbar-width: thin !important;
          scrollbar-color: #e0cbcb transparent !important;
        }
        .apps-grid-scroll::-webkit-scrollbar {
          width: 4px !important;
          height: 4px !important;
          background: transparent !important;
        }
        .apps-grid-scroll::-webkit-scrollbar-track {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
        .apps-grid-scroll::-webkit-scrollbar-thumb {
          background: #e0cbcb !important;
          border-radius: 100vh !important;
          border: none !important;
          min-height: 24px !important;
        }
        .apps-grid-scroll::-webkit-scrollbar-thumb:hover {
          background: #c0a0b9 !important;
        }
        .apps-grid-scroll::-webkit-scrollbar-corner,
        .apps-grid-scroll::-webkit-scrollbar-button {
          display: none !important;
          background: transparent !important;
        }
      `}</style>

      {/* Apps grid — scrollable, scrollbar hidden completely */}
      <div
        className="apps-grid-scroll"
        style={{
          position: 'absolute',
          top: 60,
          bottom: 56,
          left: 8,
          right: 8,
          overflowY: 'auto',
          overflowX: 'hidden',
          /* Soft fade at bottom edge so the cut isn't abrupt — implies scrollability */
          maskImage: 'linear-gradient(180deg, #000 0%, #000 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, #000 0%, #000 90%, transparent 100%)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px 6px',
            paddingBottom: 4,
          }}
        >
          {filteredApps.length === 0 ? (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '32px 16px',
                fontSize: 9,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.5,
              }}
            >
              No apps match
              <div style={{ fontSize: 10, fontWeight: 700, color: '#fff', marginTop: 2 }}>
                "{query}"
              </div>
            </div>
          ) : (
          filteredApps.map((app) => (
            <button
              key={app.name}
              type="button"
              onClick={() => setActiveApp(app)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: 'inherit',
                fontFamily: 'inherit',
                transition: 'transform 0.15s',
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.92)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
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
            </button>
          ))
          )}
        </div>
      </div>

      {/* Search bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          left: 12,
          right: 12,
          height: 26,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 999,
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          gap: 6,
          backdropFilter: 'blur(6px)',
        }}
      >
        <Search size={11} style={{ color: 'rgba(255,255,255,0.55)', flexShrink: 0 }} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search 1,000+ apps..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#fff',
            fontSize: 9,
            fontFamily: 'inherit',
            fontWeight: 500,
            padding: 0,
            minWidth: 0,
            userSelect: 'auto',
          }}
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              borderRadius: '50%',
              width: 14,
              height: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 0,
              flexShrink: 0,
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            <X size={9} />
          </button>
        )}
      </div>

      {/* Dock indicator */}
      <div style={dockStyle} />
    </div>
  );
}

const statusBarStyle: React.CSSProperties = {
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
};
const notchStyle: React.CSSProperties = {
  position: 'absolute',
  top: 6,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 70,
  height: 20,
  background: '#000',
  borderRadius: 999,
  zIndex: 40,
};
const dockStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: 8,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 90,
  height: 3,
  borderRadius: 999,
  background: 'rgba(255,255,255,0.4)',
  zIndex: 50,
};
