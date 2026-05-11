'use client';

import React, { useState, useEffect } from 'react';
import { Code, Play, Check, Rocket, Loader, TrendingUp, TrendingDown, Users, DollarSign, Sparkles, X } from 'lucide-react';
import DynamicIsland from '../DynamicIsland';

const PHONE_W = 230;
const PHONE_H = 485;

export default function BuildScreen() {
  const [deployState, setDeployState] = useState<'idle' | 'deploying'>('idle');
  const [showWaitlist, setShowWaitlist] = useState(false);

  const handleDeploy = () => {
    if (deployState === 'deploying') return;
    setDeployState('deploying');
    setTimeout(() => {
      setDeployState('idle');
      setShowWaitlist(true);
    }, 1200);
  };

  // Any dashboard item click triggers the same waitlist notification
  const triggerWaitlist = () => setShowWaitlist(true);

  // Auto-dismiss the waitlist notification after 5 seconds
  useEffect(() => {
    if (!showWaitlist) return;
    const t = setTimeout(() => setShowWaitlist(false), 5000);
    return () => clearTimeout(t);
  }, [showWaitlist]);

  return (
    <div
      style={{
        width: PHONE_W,
        height: PHONE_H,
        borderRadius: 30,
        background: 'linear-gradient(180deg, #0E0F14 0%, #1A1B22 100%)',
        color: '#fff',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {/* Dynamic island — same animation as the lockscreen notch */}
      <DynamicIsland
        show={showWaitlist}
        onDismiss={() => setShowWaitlist(false)}
        iconBg="linear-gradient(135deg, #FF3D7F 0%, #E0322B 100%)"
        icon={<Sparkles size={14} style={{ color: '#fff' }} />}
        title="Synos"
        subtitle="Join the waitlist"
      />

      {/* App preview header */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 8,
          right: 8,
          height: 18,
          fontSize: 8,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          whiteSpace: 'nowrap',
        }}
      >
        <Play size={9} fill="currentColor" style={{ color: 'rgba(255,255,255,0.5)' }} />
        <span style={{ color: 'rgba(255,255,255,0.5)' }}>Live preview</span>
        <span style={{ flex: 1 }} />

        {/* Deploy button — text only, green */}
        <button
          type="button"
          onClick={handleDeploy}
          disabled={deployState === 'deploying'}
          style={{
            padding: '4px 12px',
            borderRadius: 999,
            border: '1px solid rgba(84,194,138,0.4)',
            background: 'rgba(84,194,138,0.18)',
            color: '#54C28A',
            fontSize: 7,
            fontWeight: 800,
            letterSpacing: '0.1em',
            cursor: deployState === 'deploying' ? 'wait' : 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'inherit',
            textTransform: 'uppercase',
            animation: deployState === 'deploying' ? 'deployPulse 1.2s ease-in-out infinite' : undefined,
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            if (deployState !== 'deploying') {
              e.currentTarget.style.background = 'rgba(84,194,138,0.28)';
              e.currentTarget.style.borderColor = '#54C28A';
            }
          }}
          onMouseLeave={(e) => {
            if (deployState !== 'deploying') {
              e.currentTarget.style.background = 'rgba(84,194,138,0.18)';
              e.currentTarget.style.borderColor = 'rgba(84,194,138,0.4)';
            }
          }}
        >
          {deployState === 'deploying' ? (
            <>
              Deploying<span className="deploy-dots" />
            </>
          ) : (
            'Deploy'
          )}
        </button>

        <style>{`
          @keyframes deployPulse {
            0%, 100% {
              background: rgba(84,194,138,0.18);
              border-color: rgba(84,194,138,0.4);
              box-shadow: 0 0 0 0 rgba(84,194,138,0);
            }
            50% {
              background: rgba(84,194,138,0.32);
              border-color: rgba(84,194,138,0.85);
              box-shadow: 0 0 8px 0 rgba(84,194,138,0.45);
            }
          }
          .deploy-dots::after {
            content: '';
            display: inline-block;
            width: 12px;
            text-align: left;
            animation: deployDots 1.2s steps(4) infinite;
          }
          @keyframes deployDots {
            0%   { content: ''; }
            25%  { content: '.'; }
            50%  { content: '..'; }
            75%  { content: '...'; }
            100% { content: ''; }
          }
        `}</style>
      </div>

      {/* Inline keyframe so the loader can spin */}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

      {/* DASHBOARD APP PREVIEW — top */}
      <div
        style={{
          position: 'absolute',
          top: 68,
          left: 8,
          right: 8,
          height: 200,
          background: '#fff',
          borderRadius: 8,
          padding: 8,
          color: '#1a1a1a',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        {/* Dashboard title */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 800, lineHeight: 1.1 }}>Sales Dashboard</div>
            <div style={{ fontSize: 6.5, color: '#888', marginTop: 1 }}>This week · Q4 2026</div>
          </div>
          <div
            style={{
              fontSize: 6,
              fontWeight: 700,
              padding: '2px 5px',
              borderRadius: 999,
              background: '#E6F4EA',
              color: '#1E7E34',
              letterSpacing: '0.04em',
            }}
          >
            ● LIVE
          </div>
        </div>

        {/* KPI cards row — clickable */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
          <KpiCard
            icon={DollarSign}
            label="Revenue"
            value="$84.2K"
            delta="+12.3%"
            up
            tint="#10B981"
            onClick={triggerWaitlist}
          />
          <KpiCard
            icon={Users}
            label="New leads"
            value="142"
            delta="+8"
            up
            tint="#3B82F6"
            onClick={triggerWaitlist}
          />
          <KpiCard
            icon={TrendingUp}
            label="Close rate"
            value="34%"
            delta="-2%"
            up={false}
            tint="#E0322B"
            onClick={triggerWaitlist}
          />
        </div>

        {/* Bar chart */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div
            style={{
              fontSize: 7,
              fontWeight: 700,
              color: '#666',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Pipeline · last 7 days
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'flex-end',
              gap: 3,
              padding: '0 2px',
            }}
          >
            {[42, 65, 38, 78, 55, 88, 72].map((h, i) => (
              <button
                key={i}
                type="button"
                onClick={triggerWaitlist}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  background:
                    i === 5
                      ? 'linear-gradient(180deg, #FF3D7F 0%, #E0322B 100%)'
                      : 'linear-gradient(180deg, #6E7CE8 0%, #4F5FCF 100%)',
                  borderRadius: '3px 3px 1px 1px',
                  position: 'relative',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'transform 0.15s, filter 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scaleY(1.04)';
                  e.currentTarget.style.filter = 'brightness(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scaleY(1)';
                  e.currentTarget.style.filter = 'none';
                }}
              >
                {i === 5 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: 6,
                      fontWeight: 800,
                      color: '#E0322B',
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                    }}
                  >
                    $18K
                  </div>
                )}
              </button>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 6,
              color: '#aaa',
              padding: '0 2px',
            }}
          >
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </div>
        </div>

        {/* Top leads strip — clickable */}
        <button
          type="button"
          onClick={triggerWaitlist}
          style={{
            background: '#F5F6F8',
            borderRadius: 5,
            padding: '4px 6px',
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 7,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'background 0.15s',
            width: '100%',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#E8EAEE';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#F5F6F8';
          }}
        >
          <span style={{ fontWeight: 800, color: '#444', letterSpacing: '0.04em' }}>
            TOP LEAD
          </span>
          <span style={{ flex: 1, color: '#222', fontWeight: 600, textAlign: 'left' }}>
            Sarah Chen · Acme
          </span>
          <span
            style={{
              fontSize: 6.5,
              fontWeight: 800,
              padding: '1.5px 4px',
              borderRadius: 3,
              background: '#E0322B',
              color: '#fff',
              letterSpacing: '0.05em',
            }}
          >
            HOT
          </span>
        </button>
      </div>

      {/* CODE EDITOR — bottom */}
      <div
        style={{
          position: 'absolute',
          top: 280,
          left: 0,
          right: 0,
          bottom: 14,
          background: '#0B0D12',
          padding: '6px 8px 6px 22px',
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", monospace',
          fontSize: 7.5,
          lineHeight: 1.5,
          color: '#C9D1D9',
          overflow: 'hidden',
          position: 'absolute',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Code tab bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            padding: '4px 8px',
            background: 'rgba(255,255,255,0.04)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            fontFamily: 'Inter, sans-serif',
            zIndex: 5,
          }}
        >
          <Code size={9} style={{ color: '#7BB3FF' }} />
          <span style={{ fontSize: 8, fontWeight: 600 }}>dashboard.tsx</span>
        </div>

        {/* Line numbers gutter */}
        <div
          style={{
            position: 'absolute',
            top: 22,
            left: 0,
            width: 16,
            color: 'rgba(255,255,255,0.25)',
            fontSize: 7,
            lineHeight: 1.5,
            textAlign: 'right',
            paddingRight: 3,
          }}
        >
          {Array.from({ length: 13 }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        <div style={{ paddingTop: 16 }}>
          <CodeLine>
            <Token color="#FF7B72">import</Token>{' '}
            <Token color="#C9D1D9">{'{ KPI, BarChart }'}</Token>{' '}
            <Token color="#FF7B72">from</Token>{' '}
            <Token color="#A5D6FF">{`'./ui'`}</Token>;
          </CodeLine>
          <CodeLine>
            <Token color="#FF7B72">import</Token>{' '}
            <Token color="#C9D1D9">{'{ supabase }'}</Token>{' '}
            <Token color="#FF7B72">from</Token>{' '}
            <Token color="#A5D6FF">{`'./db'`}</Token>;
          </CodeLine>
          <CodeLine />
          <CodeLine>
            <Token color="#FF7B72">export default function</Token>{' '}
            <Token color="#D2A8FF">Dashboard</Token>() {'{'}
          </CodeLine>
          <CodeLine indent={1}>
            <Token color="#FF7B72">const</Token>{' '}
            <Token color="#79C0FF">stats</Token> ={' '}
            <Token color="#FF7B72">await</Token>{' '}
            <Token color="#79C0FF">supabase</Token>.<Token color="#D2A8FF">rpc</Token>(
            <Token color="#A5D6FF">{`'sales_kpis'`}</Token>);
          </CodeLine>
          <CodeLine />
          <CodeLine indent={1}>
            <Token color="#FF7B72">return</Token> (
          </CodeLine>
          <CodeLine indent={2}>
            <Token color="#7EE787">{'<Layout>'}</Token>
          </CodeLine>
          <CodeLine indent={3}>
            <Token color="#7EE787">{'<KPI'}</Token>{' '}
            <Token color="#79C0FF">data</Token>=
            <Token color="#7EE787">{'{stats.revenue}'}</Token>{' '}
            <Token color="#7EE787">{'/>'}</Token>
          </CodeLine>
          <CodeLine indent={3}>
            <Token color="#7EE787">{'<BarChart'}</Token>{' '}
            <Token color="#79C0FF">series</Token>=
            <Token color="#7EE787">{'{stats.weekly}'}</Token>{' '}
            <Token color="#7EE787">{'/>'}</Token>
          </CodeLine>
          <CodeLine indent={2}>
            <Token color="#7EE787">{'</Layout>'}</Token>
          </CodeLine>
          <CodeLine indent={1}>);</CodeLine>
          <CodeLine>{'}'}</CodeLine>
        </div>
      </div>

      <div style={dockStyle} />
    </div>
  );
}

function KpiCard({
  icon: Icon,
  label,
  value,
  delta,
  up,
  tint,
  onClick,
}: {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
  value: string;
  delta: string;
  up: boolean;
  tint: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: '#F5F6F8',
        borderRadius: 5,
        padding: '4px 5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        position: 'relative',
        overflow: 'hidden',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'inherit',
        transition: 'all 0.15s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#E8EAEE';
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#F5F6F8';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 4,
          right: 4,
          width: 12,
          height: 12,
          borderRadius: 3,
          background: `${tint}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size={7} style={{ color: tint }} />
      </div>
      <div
        style={{
          fontSize: 6,
          fontWeight: 700,
          color: '#666',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 11, fontWeight: 900, color: '#1a1a1a', lineHeight: 1 }}>
        {value}
      </div>
      <div
        style={{
          fontSize: 6.5,
          fontWeight: 700,
          color: up ? '#10B981' : '#E0322B',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {up ? '▲' : '▼'} {delta}
      </div>
    </button>
  );
}

function CodeLine({ children, indent = 0 }: { children?: React.ReactNode; indent?: number }) {
  return (
    <div style={{ paddingLeft: indent * 8, whiteSpace: 'nowrap', overflow: 'hidden' }}>
      {children || ' '}
    </div>
  );
}

function Token({ children, color }: { children: React.ReactNode; color: string }) {
  return <span style={{ color }}>{children}</span>;
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
  bottom: 4,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 90,
  height: 3,
  borderRadius: 999,
  background: 'rgba(255,255,255,0.4)',
  zIndex: 50,
};
