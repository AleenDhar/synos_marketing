'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  Code2,
  Grid3x3,
  Hash,
  Lock,
  MessageSquare,
  Monitor,
  Pause,
  Play,
} from 'lucide-react';
import { PhoneErrorBoundary } from './Phone3D/PhoneErrorBoundary';
import type { PhoneScreen } from './Phone3D/PhoneScene';
import './SynosAppsSection.css';

const PhoneScene = dynamic(() => import('./Phone3D/PhoneScene'), {
  ssr: false,
  loading: () => (
    <div className="phone-scene-fallback">
      <div className="phone-scene-fallback-pulse" />
    </div>
  ),
});

type ScreenContent = {
  key: PhoneScreen;
  pill: string;
  eyebrow: string;
  headline: React.ReactNode;
  sub: string;
  bullets: string[];
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
};

const SCREENS: ScreenContent[] = [
  {
    key: 'lock',
    pill: 'Lockscreen',
    eyebrow: 'SCREEN_01 · ALWAYS ON',
    headline: (
      <>
        YOUR AI WORKFORCE,
        <br />
        ALWAYS ON.
      </>
    ),
    sub: 'Agents work in the background 24/7. Wake them when you need answers, updates, or actions — they pick up where they left off.',
    bullets: [
      'Live status & notifications on the lockscreen.',
      'Per-agent tier, role, and availability at a glance.',
      'No idle billing — pay for outcomes, not hours.',
    ],
    icon: Lock,
  },
  {
    key: 'agents',
    pill: 'Agents chat',
    eyebrow: 'SCREEN_02 · TEAM',
    headline: (
      <>
        TALK TO YOUR TEAM.
        <br />
        GET ANSWERS.
      </>
    ),
    sub: 'Chat with each agent like a colleague. Tweak their tools, tier, and personality on the fly without touching code.',
    bullets: [
      'Persistent per-agent conversations with full memory.',
      'Tweak tools, tone, and tier in one tap.',
      'XP progression — agents level up as they ship.',
    ],
    icon: MessageSquare,
  },
  {
    key: 'slack',
    pill: 'Slack',
    eyebrow: 'SCREEN_03 · NATIVE',
    headline: (
      <>
        SHOW UP WHERE
        <br />
        WORK HAPPENS.
      </>
    ),
    sub: 'Agents drop into your Slack channels, respond to @mentions, and deliver structured data inline — not just plain replies.',
    bullets: [
      'Native presence — mentions, threads, DMs.',
      'Rich cards with structured lead data.',
      'Approvals & handoffs without leaving Slack.',
    ],
    icon: Hash,
  },
  {
    key: 'apps',
    pill: 'Apps grid',
    eyebrow: 'SCREEN_04 · 1,000+ INTEGRATIONS',
    headline: (
      <>
        CONNECT YOUR STACK
        <br />
        IN ONE TAP.
      </>
    ),
    sub: 'Salesforce, Gmail, GitHub, Notion, Linear, HubSpot — wire it up once and let the agent take it from there.',
    bullets: [
      'One-click OAuth — no API keys to wrangle.',
      'Read, write, and act — not just read-only.',
      'Tools the agent can actually use, not pretty dashboards.',
    ],
    icon: Grid3x3,
  },
  {
    key: 'device',
    pill: 'Agent device',
    eyebrow: 'SCREEN_05 · OWN MACHINE',
    headline: (
      <>
        AGENTS THAT BROWSE.
        <br />
        AGENTS THAT BUILD.
      </>
    ),
    sub: 'Every agent has its own persistent browser and code sandbox — they research, fill forms, run scripts, and ship results.',
    bullets: [
      'Persistent browser sessions — logged in, ready to work.',
      'Full Linux sandbox with file system & shell.',
      'Audit every action — replayable trace of each step.',
    ],
    icon: Monitor,
  },
  {
    key: 'build',
    pill: 'Build / Deploy',
    eyebrow: 'SCREEN_06 · SHIP',
    headline: (
      <>
        FROM IDEA TO
        <br />
        DEPLOYED APP.
      </>
    ),
    sub: 'Describe what you need. The agent writes the code, builds the dashboard, and deploys it — preview ready in minutes.',
    bullets: [
      'Natural language → working internal app.',
      'Real deploys to a live URL, not just mockups.',
      'Iterate by chatting — no rebuilds.',
    ],
    icon: Code2,
  },
];

const AUTO_ADVANCE_MS = 7000;

export const SynosAppsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeKey, setActiveKey] = useState<PhoneScreen>('lock');
  const [autoplay, setAutoplay] = useState(true);

  const activeIndex = SCREENS.findIndex((s) => s.key === activeKey);
  const active = SCREENS[activeIndex];

  // Auto-advance — only when section is in view and autoplay is on
  useEffect(() => {
    if (!autoplay || !inView) return;
    const id = setInterval(() => {
      setActiveKey((curr) => {
        const i = SCREENS.findIndex((s) => s.key === curr);
        return SCREENS[(i + 1) % SCREENS.length].key;
      });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [autoplay, inView]);

  // Pause autoplay when the user picks a screen manually
  const pick = (key: PhoneScreen) => {
    setActiveKey(key);
    setAutoplay(false);
  };

  const step = (dir: 1 | -1) => {
    setActiveKey((curr) => {
      const i = SCREENS.findIndex((s) => s.key === curr);
      const next = (i + dir + SCREENS.length) % SCREENS.length;
      return SCREENS[next].key;
    });
    setAutoplay(false);
  };

  return (
    <section ref={sectionRef} className="synos-apps-section" id="apps">
      <div className="synos-apps-bg" aria-hidden="true">
        <div className="synos-apps-bg-gradient" />
        <div className="synos-apps-bg-grain" />
      </div>

      <div className="synos-apps-inner">
        {/* Phone column */}
        <motion.div
          className="synos-apps-phone"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <PhoneErrorBoundary>
            <PhoneScene activeScreen={activeKey} />
          </PhoneErrorBoundary>
        </motion.div>

        {/* Text column */}
        <motion.div
          className="synos-apps-text"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Step counter + autoplay control */}
          <div className="synos-apps-meta">
            <span className="synos-apps-counter">
              <span className="synos-apps-counter-current">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="synos-apps-counter-divider">/</span>
              <span className="synos-apps-counter-total">
                {String(SCREENS.length).padStart(2, '0')}
              </span>
            </span>
            <button
              type="button"
              className="synos-apps-autoplay"
              onClick={() => setAutoplay((v) => !v)}
              aria-label={autoplay ? 'Pause auto-advance' : 'Resume auto-advance'}
            >
              {autoplay ? <Pause size={11} /> : <Play size={11} />}
              <span>{autoplay ? 'AUTO' : 'PAUSED'}</span>
            </button>
          </div>

          {/* Animated content per active screen */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="synos-apps-tag">
                <span className="synos-apps-tag-line" /> {active.eyebrow}
              </p>

              <h2 className="synos-apps-headline">{active.headline}</h2>

              <p className="synos-apps-sub">{active.sub}</p>

              <div className="synos-apps-bullets">
                {active.bullets.map((b, i) => (
                  <div key={i} className="synos-apps-bullet">
                    <span className="synos-apps-bullet-dot" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </motion.div>

        {/* Vertical rail — NTE-style pill on the left with circular avatar
            buttons + up/down arrows. */}
        <nav className="synos-apps-rail" role="tablist" aria-label="Screen previews">
          <button
            type="button"
            className="synos-apps-rail-arrow"
            onClick={() => step(-1)}
            aria-label="Previous screen"
          >
            <ChevronUp size={16} />
          </button>

          <div className="synos-apps-rail-list">
            {SCREENS.map((s, i) => {
              const Icon = s.icon;
              const isActive = s.key === activeKey;
              return (
                <button
                  key={s.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={s.pill}
                  title={s.pill}
                  onClick={() => pick(s.key)}
                  className={`synos-apps-rail-avatar ${isActive ? 'is-active' : ''}`}
                >
                  <span className="synos-apps-rail-avatar-inner">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <span className="synos-apps-rail-avatar-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="synos-apps-rail-arrow"
            onClick={() => step(1)}
            aria-label="Next screen"
          >
            <ChevronDown size={16} />
          </button>
        </nav>
      </div>
    </section>
  );
};
