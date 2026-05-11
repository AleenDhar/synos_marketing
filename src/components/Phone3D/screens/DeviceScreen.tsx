'use client';

import React, { useState, useEffect } from 'react';
import {
  Lock,
  Globe,
  FileText,
  FolderOpen,
  Terminal,
  MoreHorizontal,
  Linkedin,
  Check,
} from 'lucide-react';
import DynamicIsland from '../DynamicIsland';

const PHONE_W = 230;
const PHONE_H = 485;

type Tab = 'browser' | 'sandbox';

export default function DeviceScreen() {
  const [tab, setTab] = useState<Tab>('browser');
  const [showConnect, setShowConnect] = useState(false);

  // Auto-dismiss the connection notification after 4 seconds
  useEffect(() => {
    if (!showConnect) return;
    const t = setTimeout(() => setShowConnect(false), 4000);
    return () => clearTimeout(t);
  }, [showConnect]);

  return (
    <div
      style={{
        width: PHONE_W,
        height: PHONE_H,
        borderRadius: 30,
        background: 'linear-gradient(180deg, #0E1116 0%, #161922 100%)',
        color: '#fff',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      <DynamicIsland
        show={showConnect}
        onDismiss={() => setShowConnect(false)}
        iconBg="#0A66C2"
        icon={<Linkedin size={14} fill="#fff" strokeWidth={0} />}
        title="Request sent"
        subtitle="Aleen Dhar will be notified"
      />

      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '0.16em',
          color: 'rgba(255,255,255,0.55)',
          textTransform: 'uppercase',
        }}
      >
        Agent Workspace
      </div>

      {/* Tab switcher */}
      <div
        style={{
          position: 'absolute',
          top: 56,
          left: 8,
          right: 8,
          display: 'flex',
          gap: 4,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          padding: 3,
        }}
      >
        <TabButton active={tab === 'browser'} onClick={() => setTab('browser')} icon={Globe} label="Browser" />
        <TabButton active={tab === 'sandbox'} onClick={() => setTab('sandbox')} icon={Terminal} label="Sandbox" />
      </div>

      {/* Tab content */}
      <div
        style={{
          position: 'absolute',
          top: 86,
          bottom: 14,
          left: 8,
          right: 8,
        }}
      >
        {tab === 'browser' ? (
          <BrowserView onConnect={() => setShowConnect(true)} connectSent={showConnect} />
        ) : (
          <SandboxView />
        )}
      </div>

      {/* Dock indicator — bottom home bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 4,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 90,
          height: 3,
          borderRadius: 999,
          background: 'rgba(255,255,255,0.4)',
          zIndex: 50,
        }}
      />
    </div>
  );
}

function TabButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        padding: '5px 6px',
        borderRadius: 6,
        border: 'none',
        background: active ? '#fff' : 'transparent',
        color: active ? '#0E1116' : 'rgba(255,255,255,0.65)',
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: '0.04em',
        cursor: 'pointer',
        fontFamily: 'inherit',
        transition: 'all 0.15s',
        boxShadow: active ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <Icon size={11} />
      {label}
    </button>
  );
}

/* ─── BROWSER TAB ─────────────────────────────────────────────── */

function BrowserView({ onConnect, connectSent }: { onConnect: () => void; connectSent: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#1B1F23',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      }}
    >
      {/* Browser address bar (light Chrome chrome) */}
      <div
        style={{
          padding: '5px 8px',
          background: '#fff',
          borderBottom: '1px solid #DADCE0',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          flexShrink: 0,
        }}
      >
        <Lock size={9} style={{ color: '#5F6368' }} />
        <span style={{ fontSize: 8.5, color: '#202124', flex: 1 }}>
          linkedin.com/in/aleendhar
        </span>
      </div>

      {/* LinkedIn mobile page — viewing someone ELSE's profile */}
      <div
        className="linkedin-scroll"
        style={{
          flex: 1,
          background: '#1B1F23',
          color: '#fff',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        <style>{`
          .linkedin-scroll::-webkit-scrollbar { width: 0 !important; display: none !important; }
          .linkedin-scroll { scrollbar-width: none !important; }
        `}</style>

        {/* Cover banner */}
        <div
          style={{
            height: 44,
            overflow: 'hidden',
          }}
        >
          <img
            src="/linkedin-banner.png"
            alt=""
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        {/* Avatar overlap + 3-dot menu */}
        <div
          style={{
            position: 'relative',
            padding: '0 8px',
            marginTop: -20,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <img
            src="/aleen-pfp.png"
            alt=""
            draggable={false}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '3px solid #1B1F23',
              objectFit: 'cover',
              display: 'block',
              background: '#1B1F23',
            }}
          />
          <button
            type="button"
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 2,
            }}
          >
            <MoreHorizontal size={13} />
          </button>
        </div>

        {/* Name + degree + headline */}
        <div style={{ padding: '5px 8px 6px' }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              lineHeight: 1.15,
              display: 'flex',
              alignItems: 'baseline',
              gap: 4,
            }}
          >
            Aleen Dhar
            <span
              style={{
                fontSize: 8,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              · He/Him
            </span>
          </div>
          <div
            style={{
              fontSize: 8,
              color: 'rgba(255,255,255,0.92)',
              marginTop: 2,
              lineHeight: 1.35,
            }}
          >
            Founder @Synos | Building the best AI employee for the business team
          </div>
          <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>
            Pune District, Maharashtra, India
          </div>
          <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.55)', marginTop: 1 }}>
            10,989 followers · 500+ connections
          </div>

          {/* Action buttons: Connect (filled) + Message (outlined) */}
          <div style={{ display: 'flex', gap: 5, marginTop: 6 }}>
            <button
              type="button"
              onClick={() => {
                onConnect();
                if (typeof window !== 'undefined') {
                  window.open('https://www.linkedin.com/in/aleendhar', '_blank', 'noopener,noreferrer');
                }
              }}
              disabled={connectSent}
              style={{
                background: connectSent ? 'transparent' : '#71B7FB',
                color: connectSent ? '#71B7FB' : '#0A0E12',
                border: connectSent ? '1px solid #71B7FB' : 'none',
                borderRadius: 999,
                padding: '4px 12px',
                fontSize: 8.5,
                fontWeight: 700,
                cursor: connectSent ? 'default' : 'pointer',
                fontFamily: 'inherit',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 3,
                transition: 'all 0.2s',
              }}
            >
              {connectSent && <Check size={9} />}
              {connectSent ? 'Pending' : 'Connect'}
            </button>
            <button
              type="button"
              style={{
                background: 'transparent',
                color: '#71B7FB',
                border: '1px solid #71B7FB',
                borderRadius: 999,
                padding: '4px 10px',
                fontSize: 8.5,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <Lock size={8} />
              Message
            </button>
          </div>
        </div>

        <SectionDivider />

        {/* About section */}
        <div style={{ padding: '8px' }}>
          <div style={{ fontSize: 10, fontWeight: 800, marginBottom: 4 }}>About</div>
          <div
            style={{
              fontSize: 8,
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.4,
            }}
          >
            Building Synos — the AI employee platform that gets your job done.
            Previously AI Consultant @ Zycus, AI Engineer Intern @ FlytBase.
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>...See more</span>
          </div>
        </div>

        <SectionDivider />

        {/* Activity */}
        <div style={{ padding: '8px' }}>
          <div style={{ fontSize: 10, fontWeight: 800 }}>Activity</div>
          <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.55)', marginTop: 1 }}>
            10,989 followers
          </div>

          <div
            style={{
              display: 'flex',
              gap: 6,
              marginTop: 6,
              padding: '6px 0',
              borderTop: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 4,
                background: 'linear-gradient(135deg, #E0322B 0%, #6B1F1A 100%)',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 8,
                fontWeight: 800,
                color: '#fff',
              }}
            >
              SYNOS
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 8.5,
                  color: '#fff',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                We&apos;re launching on Product Hunt soon 🚀 Be there on day one.
              </div>
              <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>
                Aleen Dhar · 2d ago
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: 8.5,
              fontWeight: 700,
              color: '#71B7FB',
              textAlign: 'center',
              padding: '4px 0',
              borderTop: '1px solid rgba(255,255,255,0.04)',
              marginTop: 4,
            }}
          >
            See all
          </div>
        </div>

        <SectionDivider />

        {/* Experience */}
        <div style={{ padding: '8px 8px 16px' }}>
          <div style={{ fontSize: 10, fontWeight: 800, marginBottom: 6 }}>Experience</div>

          <ExperienceRow
            badge="S"
            badgeBg="#E0322B"
            title="Founder"
            sub="Synos · Full-time"
            date="Oct 2025 - Present · 8 mos"
          />
          <ExperienceRow
            badge="Z"
            badgeBg="#3B82F6"
            title="AI Consultant"
            sub="Zycus · Freelance"
            date="Aug 2025 - Present · 10 mos · Remote"
          />
          <ExperienceRow
            badge="F"
            badgeBg="#7B5FB6"
            title="AI Engineer Intern"
            sub="FlytBase · Internship"
            date="Jan 2025 - Jul 2025 · 7 mos"
          />
        </div>
      </div>
    </div>
  );
}

function ExperienceRow({
  badge,
  badgeBg,
  title,
  sub,
  date,
}: {
  badge: string;
  badgeBg: string;
  title: string;
  sub: string;
  date: string;
}) {
  return (
    <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: 4,
          background: badgeBg,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 7,
          fontWeight: 800,
          color: '#fff',
        }}
      >
        {badge}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 9, fontWeight: 700, lineHeight: 1.2 }}>{title}</div>
        <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.78)', marginTop: 1 }}>
          {sub}
        </div>
        <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.55)', marginTop: 1 }}>
          {date}
        </div>
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div
      style={{
        height: 6,
        background: 'rgba(0,0,0,0.35)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    />
  );
}

const iconBtn: React.CSSProperties = {
  width: 22,
  height: 22,
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

/* ─── SANDBOX TAB ─────────────────────────────────────────────── */

function SandboxView() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      {/* Terminal */}
      <div
        style={{
          background: '#0B0D12',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 6,
          padding: '6px 8px',
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", monospace',
          fontSize: 8,
          lineHeight: 1.5,
          flex: 1,
          minHeight: 0,
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            paddingBottom: 4,
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            marginBottom: 4,
          }}
        >
          <Terminal size={9} style={{ color: '#54C28A' }} />
          <span style={{ fontSize: 8, fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
            zsh · ~/agent-sandbox
          </span>
        </div>

        <TermLine prompt="$" cmd="python research.py 'Sarah Chen'" />
        <TermLine output="✓ Found LinkedIn profile" color="#7BB3FF" />
        <TermLine output="✓ Cross-referenced Crunchbase" color="#7BB3FF" />
        <TermLine output="✓ Pulled recent press mentions" color="#7BB3FF" />
        <TermLine output="" />
        <TermLine prompt="$" cmd="cat acme-research.md | head -20" />
        <TermLine output="# Acme Corp · Series B" color="#FF7B72" />
        <TermLine output="$24M raised · 80 employees" color="#C9D1D9" />
        <TermLine output="..." color="#C9D1D9" />
        <TermLine output="" />
        <TermLine prompt="$" cmd="" cursor />
      </div>

      {/* Files panel */}
      <div
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 6,
          padding: '6px 7px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontSize: 8,
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            marginBottom: 4,
          }}
        >
          <FolderOpen size={9} />
          <span>Files · /agent-sandbox</span>
        </div>
        <FileRow icon="terminal" name="research.py" meta="5m ago" />
        <FileRow icon="text" name="acme-research.md" meta="just now" highlight />
        <FileRow icon="text" name="lead-summary.json" meta="just now" />
        <FileRow icon="text" name="email-draft.txt" meta="just now" />
      </div>
    </div>
  );
}

function TermLine({
  prompt,
  cmd,
  output,
  color,
  cursor,
}: {
  prompt?: string;
  cmd?: string;
  output?: string;
  color?: string;
  cursor?: boolean;
}) {
  if (output !== undefined) {
    return (
      <div style={{ color: color ?? '#9DA7B0', whiteSpace: 'nowrap' }}>{output || ' '}</div>
    );
  }
  return (
    <div style={{ display: 'flex', gap: 5, color: '#C9D1D9', whiteSpace: 'nowrap' }}>
      <span style={{ color: '#54C28A', fontWeight: 700 }}>{prompt}</span>
      <span>{cmd}</span>
      {cursor && (
        <span
          style={{
            display: 'inline-block',
            width: 4,
            height: 9,
            background: '#54C28A',
            animation: 'blink 1s steps(2) infinite',
          }}
        />
      )}
      {cursor && (
        <style>{`@keyframes blink { 0%,50% { opacity: 1 } 51%,100% { opacity: 0 } }`}</style>
      )}
    </div>
  );
}

function FileRow({
  icon,
  name,
  meta,
  highlight,
}: {
  icon: 'terminal' | 'text';
  name: string;
  meta: string;
  highlight?: boolean;
}) {
  const Icon = icon === 'terminal' ? Terminal : FileText;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        padding: '3px 5px',
        borderRadius: 4,
        background: highlight ? 'rgba(224,50,43,0.15)' : 'transparent',
        border: highlight ? '1px solid rgba(224,50,43,0.3)' : '1px solid transparent',
        marginBottom: 2,
      }}
    >
      <Icon size={9} style={{ color: highlight ? '#FF6A6A' : 'rgba(255,255,255,0.55)' }} />
      <span style={{ fontSize: 8.5, fontWeight: 500, flex: 1 }}>{name}</span>
      <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)' }}>{meta}</span>
    </div>
  );
}
