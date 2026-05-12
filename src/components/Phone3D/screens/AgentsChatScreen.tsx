'use client';

import React, { useState } from 'react';
import DynamicIsland from '../DynamicIsland';
import {
  Send,
  SlidersHorizontal,
  ArrowLeft,
  MoreHorizontal,
  Brain,
  Wrench,
  Database,
  MessageSquare,
  Clock,
  Radio,
  History,
  Lock,
  FileText,
  Target,
  Play,
  RotateCcw,
  Save,
  Power,
  Info,
} from 'lucide-react';
import '../styles.css';

const PHONE_W = 230;
const PHONE_H = 485;

type Message = { from: 'agent' | 'me'; text: string };

type Agent = {
  name: string;
  role: string;
  tier: number;
  xp: number;
  xpMax: number;
  unread?: number;
  status?: 'online' | 'working' | 'idle';
  avatar: string;
  messages: Message[];
};

const AGENTS: Agent[] = [
  {
    name: 'MUSASHI',
    role: 'Sales Agent',
    tier: 3,
    xp: 4820,
    xpMax: 5000,
    status: 'working',
    avatar: '/agents/00627030-d71d-4dc6-bef6-0d9e0dac1210.png',
    messages: [
      { from: 'agent', text: 'Researching Acme Corp now...' },
      { from: 'me', text: 'how big is their team?' },
      { from: 'agent', text: '80 ppl, Series B last March. CEO is Sarah Chen.' },
      { from: 'agent', text: 'Drafting intro email — sending in 2.' },
    ],
  },
  {
    name: 'NEKO',
    role: 'Community Manager',
    tier: 2,
    xp: 3420,
    xpMax: 5000,
    unread: 3,
    status: 'online',
    avatar: '/agents/02151c29-c1c9-4832-9e79-37c7fb5953bd.png',
    messages: [
      { from: 'agent', text: 'Closed all the L1 tickets in your queue 🎉' },
      { from: 'me', text: 'How many?' },
      { from: 'agent', text: '12. Want me to summarize?' },
    ],
  },
  {
    name: 'KAEDE',
    role: 'Strategist',
    tier: 3,
    xp: 4100,
    xpMax: 5000,
    status: 'online',
    avatar: '/agents/385c2d4f-6731-46d6-acd4-2349db75c532.png',
    messages: [
      { from: 'agent', text: 'Q3 strategy doc is ready.' },
      { from: 'agent', text: 'Reviewed 4 competitors, 2 white-space wins flagged.' },
      { from: 'me', text: 'send it' },
      { from: 'agent', text: 'Sent to you and the leadership channel.' },
    ],
  },
  {
    name: 'YUI',
    role: 'Coordinator',
    tier: 1,
    xp: 1240,
    xpMax: 2500,
    status: 'online',
    avatar: '/agents/1c11436d-dfcf-436f-bad1-dcc0916ed547.png',
    messages: [
      { from: 'agent', text: 'Calendar synced! 📅' },
      { from: 'me', text: 'any conflicts?' },
      { from: 'agent', text: 'Resolved 2 conflicts for tomorrow.' },
      { from: 'agent', text: "You're free 2-4pm if you want a deep work block." },
    ],
  },
  {
    name: 'DUKE',
    role: 'Operations',
    tier: 2,
    xp: 2890,
    xpMax: 5000,
    status: 'working',
    avatar: '/agents/649bb8f6-bff3-48a0-be63-4f5c9590a654.png',
    messages: [
      { from: 'agent', text: 'Operations report attached for the week.' },
      { from: 'me', text: 'summary?' },
      { from: 'agent', text: 'Costs down 12%, throughput up 8%, 0 incidents.' },
      { from: 'agent', text: 'Recommending we promote the staging rollout.' },
    ],
  },
  {
    name: 'UNIT-8',
    role: 'DevOps',
    tier: 3,
    xp: 4990,
    xpMax: 5000,
    status: 'online',
    avatar: '/agents/7c134037-41ad-4f9f-b742-134a23cdd7a2.png',
    messages: [
      { from: 'agent', text: 'Deploy complete · v2.4.1' },
      { from: 'me', text: 'tests?' },
      { from: 'agent', text: 'All green. 1,247 / 1,247 ✓' },
      { from: 'agent', text: 'Latency p95 dropped 18ms. Solid release.' },
    ],
  },
];

export default function AgentsChatScreen() {
  const [selected, setSelected] = useState<string>('NEKO');
  const [message, setMessage] = useState('');
  const [showTweak, setShowTweak] = useState(false);

  const activeAgent = AGENTS.find((a) => a.name === selected) ?? AGENTS[0];

  return (
    <div
      style={{
        width: PHONE_W,
        height: PHONE_H,
        borderRadius: 30,
        background: 'linear-gradient(180deg, #161618 0%, #0E0E10 100%)',
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
          title: 'Musashi',
          subtitle: 'Type a message to chat with your agent',
          icon: <MessageSquare size={14} style={{ color: '#fff' }} />,
          iconBg: 'linear-gradient(135deg, #E63D3D 0%, #7a0e0e 100%)',
        }}
      />

      {/* Inline scrollbar — same look as the lockscreen About panel.
          Injected as a <style> tag so it always applies inside drei's <Html>. */}
      <style>{`
        .agents-scroll {
          scrollbar-width: thin !important;
          scrollbar-color: #e0cbcb transparent !important;
        }
        .agents-scroll::-webkit-scrollbar {
          width: 4px !important;
          height: 4px !important;
          background: transparent !important;
        }
        .agents-scroll::-webkit-scrollbar-track {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
        .agents-scroll::-webkit-scrollbar-thumb {
          background: #e0cbcb !important;
          border-radius: 100vh !important;
          border: none !important;
          min-height: 24px !important;
        }
        .agents-scroll::-webkit-scrollbar-thumb:hover {
          background: #c0a0b9 !important;
        }
        .agents-scroll::-webkit-scrollbar-corner,
        .agents-scroll::-webkit-scrollbar-button {
          display: none !important;
          background: transparent !important;
        }
      `}</style>

      {/* TWEAK PAGE — full-screen overlay */}
      {showTweak && (
        <TweakPage agent={activeAgent} onClose={() => setShowTweak(false)} />
      )}

      {/* CHAT VIEW */}
      {!showTweak && (
        <>
          {/* Title */}
          <div
            style={{
              position: 'absolute',
              top: 36,
              left: 0,
              right: 0,
              textAlign: 'center',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.04em',
            }}
          >
            Messages
          </div>

          {/* Split: avatar-only sidebar + chat pane */}
          <div
            style={{
              position: 'absolute',
              top: 56,
              left: 6,
              right: 6,
              bottom: 14,
              display: 'flex',
              gap: 6,
            }}
          >
            {/* AGENT SIDEBAR */}
            <div
              className="agents-scroll"
              style={{
                width: 36,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 7,
                overflowY: 'auto',
                paddingTop: 2,
              }}
            >
              {AGENTS.map((agent) => {
                const isSelected = agent.name === selected;
                return (
                  <button
                    key={agent.name}
                    type="button"
                    title={agent.name}
                    onClick={() => setSelected(agent.name)}
                    style={{
                      position: 'relative',
                      width: 30,
                      height: 30,
                      alignSelf: 'center',
                      flexShrink: 0,
                      padding: 0,
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={agent.avatar}
                      alt=""
                      draggable={false}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.08)',
                        border: isSelected
                          ? '2px solid #FF3D7F'
                          : '1px solid rgba(255,255,255,0.12)',
                        boxShadow: isSelected ? '0 0 10px rgba(255,61,127,0.45)' : 'none',
                        transition: 'all 0.2s',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    {agent.unread && agent.name !== selected && (
                      <span
                        style={{
                          position: 'absolute',
                          top: -3,
                          right: -3,
                          minWidth: 13,
                          height: 13,
                          borderRadius: 999,
                          background: '#FF3D7F',
                          color: '#fff',
                          fontSize: 7,
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '0 3px',
                          lineHeight: 1,
                        }}
                      >
                        {agent.unread}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* CHAT PANE */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              {/* Chat header */}
              <div
                style={{
                  padding: '5px 8px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <div style={{ position: 'relative', width: 18, height: 18, flexShrink: 0 }}>
                  <img
                    src={activeAgent.avatar}
                    alt=""
                    draggable={false}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -1,
                      right: -1,
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: activeAgent.status === 'working' ? '#FFB454' : '#54C28A',
                      border: '1.5px solid #161618',
                      boxShadow:
                        activeAgent.status === 'working'
                          ? '0 0 4px rgba(255,180,84,0.6)'
                          : '0 0 4px rgba(84,194,138,0.6)',
                    }}
                  />
                </div>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.02em' }}>
                  {activeAgent.name}
                </span>

                {/* Tweak button */}
                <button
                  type="button"
                  title="Tweak agent"
                  onClick={() => setShowTweak(true)}
                  style={{
                    marginLeft: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 22,
                    height: 22,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '50%',
                    color: '#fff',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.15s',
                    padding: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,61,127,0.15)';
                    e.currentTarget.style.borderColor = '#FF3D7F';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  }}
                >
                  <SlidersHorizontal size={11} />
                </button>
              </div>

              {/* Messages */}
              <div
                className="agents-scroll"
                style={{
                  flex: 1,
                  padding: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  overflowY: 'auto',
                }}
              >
                {activeAgent.messages.map((m, i) => (
                  <div
                    key={`${activeAgent.name}-${i}`}
                    style={{
                      display: 'flex',
                      justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start',
                      gap: 3,
                      alignItems: 'flex-end',
                    }}
                  >
                    {m.from === 'agent' && (
                      <img
                        src={activeAgent.avatar}
                        alt=""
                        draggable={false}
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.08)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          flexShrink: 0,
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    )}
                    <div
                      style={{
                        maxWidth: '78%',
                        background: m.from === 'me' ? '#FF3D7F' : 'rgba(255,255,255,0.08)',
                        color: '#fff',
                        borderRadius:
                          m.from === 'me' ? '10px 10px 2px 10px' : '10px 10px 10px 2px',
                        padding: '4px 7px',
                        fontSize: 8.5,
                        lineHeight: 1.35,
                        fontWeight: 500,
                      }}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input bar */}
              <div
                style={{
                  margin: 4,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12,
                  padding: '4px 6px 4px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
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
                  placeholder={`Message ${activeAgent.name}`}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontSize: 8.5,
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    padding: 0,
                    userSelect: 'auto',
                    minWidth: 0,
                  }}
                />
                <button
                  type="button"
                  onClick={() => message.trim() && setMessage('')}
                  style={{
                    background: message.trim() ? '#FF3D7F' : 'rgba(255,255,255,0.08)',
                    border: 'none',
                    borderRadius: '50%',
                    width: 18,
                    height: 18,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: message.trim() ? 'pointer' : 'default',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                  }}
                >
                  <Send
                    size={9}
                    style={{
                      color: message.trim() ? '#fff' : 'rgba(255,255,255,0.3)',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <div style={dockStyle} />
    </div>
  );
}

/* ─── TWEAK PAGE ───────────────────────────────────────────────── */

function TweakPage({ agent, onClose }: { agent: Agent; onClose: () => void }) {
  const xpPercent = Math.min(100, (agent.xp / agent.xpMax) * 100);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, #1A0606 0%, #0E0E10 100%)',
        zIndex: 100,
        paddingTop: 30,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Unified status bar */}
      <DynamicIsland
        autoShow={{
          title: 'Musashi',
          subtitle: 'Type a message to chat with your agent',
          icon: <MessageSquare size={14} style={{ color: '#fff' }} />,
          iconBg: 'linear-gradient(135deg, #E63D3D 0%, #7a0e0e 100%)',
        }}
      />

      {/* Top bar */}
      <div
        style={{
          padding: '6px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={iconBtnStyle}
        >
          <ArrowLeft size={11} />
        </button>
        <button type="button" style={iconBtnStyle}>
          <MoreHorizontal size={11} />
        </button>
      </div>

      {/* PROFILE CARD */}
      <div
        style={{
          margin: '4px 8px 0',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 12,
          padding: '8px 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          {/* Big avatar with status dot */}
          <div style={{ position: 'relative', width: 46, height: 46, flexShrink: 0 }}>
            <img
              src={agent.avatar}
              alt=""
              draggable={false}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid rgba(255,255,255,0.18)',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: 1,
                right: 1,
                width: 11,
                height: 11,
                borderRadius: '50%',
                background: agent.status === 'working' ? '#FFB454' : '#54C28A',
                border: '2px solid #1A0606',
                boxShadow:
                  agent.status === 'working'
                    ? '0 0 6px rgba(255,180,84,0.6)'
                    : '0 0 6px rgba(84,194,138,0.6)',
              }}
            />
          </div>

          {/* Name + role */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 900,
                letterSpacing: '0.02em',
                lineHeight: 1.1,
              }}
            >
              {agent.name}
            </div>
            <div
              style={{
                fontSize: 8.5,
                color: 'rgba(255,255,255,0.65)',
                marginTop: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              {agent.role}
              <span style={{ color: '#FF3D7F', fontWeight: 700 }}>
                Tier {agent.tier}
              </span>
              <Info size={8} style={{ color: 'rgba(255,255,255,0.35)' }} />
            </div>
          </div>
        </div>

        {/* XP progress */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 7.5,
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginBottom: 3,
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            <span>
              {agent.xp.toLocaleString()} / {agent.xpMax.toLocaleString()}
            </span>
            <span style={{ color: '#FF3D7F' }}>Tier {agent.tier + 1} ▸</span>
          </div>
          <div
            style={{
              height: 6,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.06)',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div
              style={{
                width: `${xpPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #FF3D7F 0%, #F58A52 100%)',
                boxShadow: '0 0 6px rgba(255,61,127,0.5)',
              }}
            />
          </div>
        </div>
      </div>

      {/* TWEAK GRID */}
      <div
        className="no-scrollbar"
        style={{
          flex: 1,
          padding: '10px 8px 4px',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px 4px',
          }}
        >
          <TweakTile icon={Brain} label="Persona" />
          <TweakTile icon={Wrench} label="Tools" />
          <TweakTile icon={Database} label="Memory" />
          <TweakTile icon={MessageSquare} label="Voice" />
          <TweakTile icon={Clock} label="Schedule" />
          <TweakTile icon={Radio} label="Channels" />
          <TweakTile icon={History} label="History" />
          <TweakTile icon={Lock} label="Access" />
          <TweakTile icon={FileText} label="Templates" />
          <TweakTile icon={Target} label="Skills" />
        </div>
      </div>

      {/* BOTTOM ACTION DOCK */}
      <div
        style={{
          margin: '4px 8px 14px',
          padding: '6px 4px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 12,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <DockBtn icon={Play} label="Test" />
        <DockBtn icon={RotateCcw} label="Reset" />
        <DockBtn icon={Save} label="Save" accent />
        <DockBtn icon={Power} label="Power" />
      </div>
    </div>
  );
}

function TweakTile({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
}) {
  return (
    <button
      type="button"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: 0,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: '#fff',
        fontFamily: 'inherit',
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.15s',
        }}
      >
        <Icon size={16} style={{ color: 'rgba(255,255,255,0.85)' }} />
      </div>
      <span
        style={{
          fontSize: 7,
          fontWeight: 600,
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '0.01em',
        }}
      >
        {label}
      </span>
    </button>
  );
}

function DockBtn({
  icon: Icon,
  label,
  accent,
}: {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
  accent?: boolean;
}) {
  return (
    <button
      type="button"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        padding: '2px 4px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: '#fff',
        fontFamily: 'inherit',
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: accent ? '#FF3D7F' : 'rgba(255,255,255,0.06)',
          border: accent ? 'none' : '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: accent ? '0 0 10px rgba(255,61,127,0.5)' : 'none',
        }}
      >
        <Icon size={12} style={{ color: '#fff' }} />
      </div>
      <span
        style={{
          fontSize: 6.5,
          fontWeight: 700,
          color: accent ? '#FF3D7F' : 'rgba(255,255,255,0.6)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </button>
  );
}

const iconBtnStyle: React.CSSProperties = {
  width: 24,
  height: 24,
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: '#fff',
  padding: 0,
  fontFamily: 'inherit',
};

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
  zIndex: 51,
};
