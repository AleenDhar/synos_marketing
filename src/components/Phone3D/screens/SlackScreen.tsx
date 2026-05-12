'use client';

import React, { useState } from 'react';
import { Hash, Send } from 'lucide-react';
import DynamicIsland from '../DynamicIsland';

const PHONE_W = 230;
const PHONE_H = 485;

export default function SlackScreen() {
  const [message, setMessage] = useState('');

  return (
    <div
      style={{
        width: PHONE_W,
        height: PHONE_H,
        borderRadius: 30,
        background: 'linear-gradient(180deg, #1A1D29 0%, #0F1117 100%)',
        color: '#fff',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {/* Unified status bar — same as every other screen */}
      <DynamicIsland
        autoShow={{
          title: 'Slack',
          subtitle: 'Send a message in #sales-leads',
          icon: <Hash size={13} style={{ color: '#fff' }} strokeWidth={2.5} />,
          iconBg: 'linear-gradient(135deg, #4A154B 0%, #350D36 100%)',
        }}
      />

      {/* Slack header — workspace icon + channel name */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 0,
          right: 0,
          padding: '7px 10px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          background: 'rgba(0,0,0,0.2)',
        }}
      >
        {/* Slack workspace icon */}
        <div
          style={{
            width: 18,
            height: 18,
            background: '#fff',
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <img
            src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
            alt="Slack"
            style={{ width: 12, height: 12 }}
          />
        </div>
        <Hash size={11} style={{ color: 'rgba(255,255,255,0.6)', flexShrink: 0 }} />
        <span style={{ fontSize: 11, fontWeight: 700 }}>sales-leads</span>
        <span style={{ marginLeft: 'auto', fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
          12 members
        </span>
      </div>

      {/* Messages */}
      <div
        style={{
          position: 'absolute',
          top: 70,
          left: 0,
          right: 0,
          bottom: 50,
          padding: '8px 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          overflow: 'hidden',
        }}
      >
        {/* Human message */}
        <div style={messageRow}>
          <div style={{ ...avatar, background: '#7B5FB6' }}>JM</div>
          <div style={messageBody}>
            <div style={messageHeader}>
              <span style={messageName}>John M.</span>
              <span style={messageTime}>2:14 PM</span>
            </div>
            <div style={messageText}>
              Hey @MUSASHI — got a new lead from the demo. Can you research them?
            </div>
          </div>
        </div>

        {/* Agent message */}
        <div style={messageRow}>
          <img
            src="/agents/00627030-d71d-4dc6-bef6-0d9e0dac1210.png"
            alt=""
            draggable={false}
            style={{
              ...avatar,
              background: '#E0322B',
              objectFit: 'cover',
              display: 'block',
              padding: 0,
            }}
          />
          <div style={messageBody}>
            <div style={messageHeader}>
              <span style={messageName}>MUSASHI</span>
              <span style={agentBadge}>AGENT</span>
              <span style={messageTime}>2:14 PM</span>
            </div>
            <div style={messageText}>
              On it. Pulling LinkedIn + recent funding...
            </div>
          </div>
        </div>

        {/* Agent reply with structured data */}
        <div style={messageRow}>
          <img
            src="/agents/00627030-d71d-4dc6-bef6-0d9e0dac1210.png"
            alt=""
            draggable={false}
            style={{
              ...avatar,
              background: '#E0322B',
              objectFit: 'cover',
              display: 'block',
              padding: 0,
            }}
          />
          <div style={messageBody}>
            <div style={messageHeader}>
              <span style={messageName}>MUSASHI</span>
              <span style={agentBadge}>AGENT</span>
              <span style={messageTime}>2:15 PM</span>
            </div>
            <div
              style={{
                ...messageText,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 6,
                padding: '6px 8px',
                fontSize: 9,
                lineHeight: 1.5,
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: 2 }}>Acme Corp · Series B</div>
              <div style={{ color: 'rgba(255,255,255,0.7)' }}>$24M raised · 80 employees</div>
              <div style={{ color: 'rgba(255,255,255,0.7)' }}>CEO: Sarah Chen</div>
              <div style={{ marginTop: 4, color: '#FF9D6A' }}>Strong fit · sending intro?</div>
            </div>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 12,
          left: 8,
          right: 8,
          height: 28,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          gap: 6,
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && message.trim()) {
              setMessage('');
            }
          }}
          placeholder="Message #sales-leads"
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
        <button
          type="button"
          onClick={() => message.trim() && setMessage('')}
          disabled={!message.trim()}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: message.trim() ? 'pointer' : 'default',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: message.trim() ? '#E0322B' : 'rgba(224,50,43,0.35)',
            transition: 'color 0.2s',
          }}
        >
          <Send size={11} />
        </button>
      </div>

      {/* Dock indicator */}
      <div style={dockStyle} />
    </div>
  );
}

// Shared styles
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
const dot: React.CSSProperties = {
  display: 'inline-block',
  width: 3,
  height: 3,
  borderRadius: '50%',
  background: '#fff',
  alignSelf: 'center',
  margin: 'auto 1px',
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
  bottom: 4,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 90,
  height: 3,
  borderRadius: 999,
  background: 'rgba(255,255,255,0.4)',
  zIndex: 50,
};
const messageRow: React.CSSProperties = {
  display: 'flex',
  gap: 6,
  alignItems: 'flex-start',
};
const avatar: React.CSSProperties = {
  width: 22,
  height: 22,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 8,
  fontWeight: 800,
  color: '#fff',
  flexShrink: 0,
};
const messageBody: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
};
const messageHeader: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  marginBottom: 1,
};
const messageName: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
};
const messageTime: React.CSSProperties = {
  fontSize: 8,
  color: 'rgba(255,255,255,0.4)',
};
const agentBadge: React.CSSProperties = {
  fontSize: 7,
  fontWeight: 700,
  letterSpacing: '0.05em',
  background: '#E0322B',
  padding: '1px 4px',
  borderRadius: 3,
  color: '#fff',
};
const messageText: React.CSSProperties = {
  fontSize: 9.5,
  lineHeight: 1.4,
  color: 'rgba(255,255,255,0.92)',
};
