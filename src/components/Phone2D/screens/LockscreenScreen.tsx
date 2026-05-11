'use client';

import React, { useEffect, useState } from 'react';
import DynamicIsland from '../../Phone3D/DynamicIsland';

const PHONE_W = 230;
const PHONE_H = 485;

export default function LockscreenScreen() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const timeStr = time
    ? time.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false })
    : '00:00';
  const dateStr = time
    ? time.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })
    : '';

  return (
    <div
      style={{
        width: PHONE_W,
        height: PHONE_H,
        background:
          'radial-gradient(ellipse 120% 80% at 50% 20%, #4A0E0E 0%, #2A0808 60%, #0F0303 100%)',
        color: '#fff',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      <DynamicIsland />

      {/* Time + date block */}
      <div
        style={{
          position: 'absolute',
          top: 70,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.04em' }}>
          {dateStr}
        </span>
        <span
          style={{
            fontFamily: "'Anton', 'Bebas Neue', sans-serif",
            fontSize: 64,
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '0.01em',
            color: '#fff',
          }}
        >
          {timeStr}
        </span>
      </div>

      {/* Notification cards from agents */}
      <div
        style={{
          position: 'absolute',
          top: 200,
          left: 10,
          right: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <Notif
          color="#E0322B"
          initials="MS"
          title="MUSASHI"
          subtitle="Acme Corp · Series B · sending intro?"
          time="now"
        />
        <Notif
          color="#F58A52"
          initials="NK"
          title="NEKO"
          subtitle="Closed all the L1 tickets in your queue 🎉"
          time="2m"
        />
        <Notif
          color="#54C28A"
          initials="KA"
          title="KAEDE"
          subtitle="Pipeline up 12.3% week-over-week."
          time="14m"
        />
      </div>

      {/* Bottom dock indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 90,
          height: 3,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.5)',
        }}
      />
    </div>
  );
}

function Notif({
  color,
  initials,
  title,
  subtitle,
  time,
}: {
  color: string;
  initials: string;
  title: string;
  subtitle: string;
  time: string;
}) {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 12,
        padding: '8px 10px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 6,
          background: color,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 9,
          fontWeight: 800,
          flexShrink: 0,
        }}
      >
        {initials}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#fff' }}>{title}</span>
          <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>{time}</span>
        </div>
        <div
          style={{
            fontSize: 9.5,
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.35,
            marginTop: 2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
