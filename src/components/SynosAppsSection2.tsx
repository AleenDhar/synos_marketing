'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp, MousePointerClick } from 'lucide-react';
import PhoneShell from './Phone2D/PhoneShell';
import type { PhoneScreen } from './Phone3D/PhoneScene';
import './SynosAppsSection.css';

type ScreenContent = {
  // Left-anchor headline + sub (changes per active screen)
  anchorHeadline: React.ReactNode;
  anchorSub: string;
  // Right-side: user-facing instructions, 1-3 short steps
  instructions: string[];
};

const SCREENS_ORDER: PhoneScreen[] = ['agents', 'slack', 'apps', 'device', 'build'];

const SCREEN_INFO: Record<PhoneScreen, ScreenContent> = {
  // Kept for the PhoneShell default — never actually selected
  lock: {
    anchorHeadline: <>YOUR AI TEAM, ALWAYS ON.</>,
    anchorSub: 'Agents stay live in the background.',
    instructions: ['Unlock to interact with your agents.'],
  },
  agents: {
    anchorHeadline: (
      <>
        CHAT WITH{' '}
        <br />
        YOUR AI TEAM.
      </>
    ),
    anchorSub:
      'Treat them like colleagues. Open a thread, give context, refine the brief — and watch them get to work.',
    instructions: [
      'Type a message to chat with your agent.',
      'Tap the slider icon to edit and configure them.',
    ],
  },
  slack: {
    anchorHeadline: (
      <>
        SHOW UP WHERE{' '}
        <br />
        WORK HAPPENS.
      </>
    ),
    anchorSub:
      'Native Slack presence — mentions, threads, rich cards. Your agents work alongside the team, not in a separate app.',
    instructions: [
      'Send a message in #sales-leads.',
      'Watch your agent respond with structured data.',
    ],
  },
  apps: {
    anchorHeadline: (
      <>
        GIVE THEM TOOLS.{' '}
        <br />
        1,000+ OF THEM.
      </>
    ),
    anchorSub:
      'Gmail, Salesforce, GitHub, Notion, your CRM — search the drawer and tap to connect. Agents inherit the access in seconds.',
    instructions: [
      'Search for an app you use in your stack.',
      'Tap Connect to wire it up to your agent.',
    ],
  },
  device: {
    anchorHeadline: (
      <>
        THEY USE THE WEB{' '}
        <br />
        LIKE YOU DO.
      </>
    ),
    anchorSub:
      'Persistent sessions, real cookies, real clicks. Agents go beyond APIs and use the same tools any human would.',
    instructions: [
      'Switch between Browser and Sandbox.',
      'Watch the agent work autonomously.',
    ],
  },
  build: {
    anchorHeadline: (
      <>
        BUILD APPS BY{' '}
        <br />
        TALKING TO THEM.
      </>
    ),
    anchorSub:
      'Dashboards, internal tools, full-stack apps. Describe it in plain English — your agent writes the code and ships a deployable URL.',
    instructions: [
      'Tap Deploy to ship the app.',
      'Get a live URL in seconds.',
    ],
  },
};

const AUTO_ADVANCE_MS = 7000;

export const SynosAppsSection2: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeKey, setActiveKey] = useState<PhoneScreen>('agents');
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!inView || !autoplay) return;
    const id = setInterval(() => {
      setActiveKey((curr) => {
        const i = SCREENS_ORDER.indexOf(curr);
        return SCREENS_ORDER[(i + 1) % SCREENS_ORDER.length];
      });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [inView, autoplay]);

  const pick = (key: PhoneScreen) => {
    setActiveKey(key);
    setAutoplay(false);
  };

  const step = (dir: 1 | -1) => {
    setActiveKey((curr) => {
      const i = SCREENS_ORDER.indexOf(curr);
      const next = (i + dir + SCREENS_ORDER.length) % SCREENS_ORDER.length;
      return SCREENS_ORDER[next];
    });
    setAutoplay(false);
  };

  const activeIndex = SCREENS_ORDER.indexOf(activeKey);
  const active = SCREEN_INFO[activeKey];

  return (
    <section ref={sectionRef} className="synos-apps-section" id="product">
      <div className="synos-apps-bg" aria-hidden="true">
        <div className="synos-apps-bg-gradient" />
        <div className="synos-apps-bg-grain" />
        <div className="synos-hero-rain" aria-hidden="true">
          {Array.from({ length: 80 }).map((_, i) => (
            <span key={`drop-${i}`} className={`synos-hero-raindrop synos-hero-raindrop-${i}`} />
          ))}
        </div>
      </div>

      <div className="synos-apps-inner">
        {/* Vertical rail with numbered circles + up/down arrows */}
        <motion.nav
          className="synos-apps-rail"
          role="tablist"
          aria-label="Phone screens"
          initial={{ opacity: 0, x: -20, y: '-50%' }}
          animate={inView ? { opacity: 1, x: 0, y: '-50%' } : { opacity: 0, x: -20, y: '-50%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <button
            type="button"
            className="synos-apps-rail-arrow"
            onClick={() => step(-1)}
            aria-label="Previous screen"
          >
            <ChevronUp size={18} />
          </button>

          <div className="synos-apps-rail-list">
            {SCREENS_ORDER.map((key, i) => {
              const isActive = key === activeKey;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={key}
                  title={key}
                  onClick={() => pick(key)}
                  className={`synos-apps-rail-avatar ${isActive ? 'is-active' : ''}`}
                >
                  {String(i + 1).padStart(2, '0')}
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
            <ChevronDown size={18} />
          </button>
        </motion.nav>

        {/* Vertical kanji decoration — between rail and content */}
        <motion.aside
          className="synos-apps-side synos-apps-side-left"
          aria-hidden="true"
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        >
          <span className="synos-apps-side-kanji">未来を、仕組みに。</span>
        </motion.aside>

        {/* Section anchor — bottom-left text block, dynamic per active screen */}
        <motion.div
          className="synos-apps-anchor"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <span className="synos-apps-anchor-eyebrow">YOUR AI OPERATIONS CENTER</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="synos-apps-anchor-headline">{active.anchorHeadline}</h2>
              <p className="synos-apps-anchor-sub">{active.anchorSub}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Phone — original position, untouched */}
        <div className="synos-apps-phone">
          <PhoneShell activeScreen={activeKey} />
        </div>

        {/* Right side — user instructions for the current screen */}
        <motion.aside
          className="synos-apps-content-right"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        >
          <span className="synos-apps-content-right-eyebrow">
            <MousePointerClick size={12} />
            TRY IT
          </span>
          <AnimatePresence mode="wait">
            <motion.ol
              key={activeKey}
              className="synos-apps-instructions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {active.instructions.map((step, i) => (
                <li key={i} className="synos-apps-instruction">
                  <span className="synos-apps-instruction-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="synos-apps-instruction-text">{step}</span>
                </li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </motion.aside>
      </div>
    </section>
  );
};
