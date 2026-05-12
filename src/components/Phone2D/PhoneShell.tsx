'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { PhoneScreen } from '../Phone3D/PhoneScene';
import AgentsChatScreen from '../Phone3D/screens/AgentsChatScreen';
import SlackScreen from '../Phone3D/screens/SlackScreen';
import AppsScreen from '../Phone3D/screens/AppsScreen';
import DeviceScreen from '../Phone3D/screens/DeviceScreen';
import BuildScreen from '../Phone3D/screens/BuildScreen';
import LockscreenScreen from './screens/LockscreenScreen';
import './PhoneShell.css';

// Native size of the existing screen UIs — keep these in sync with the
// PHONE_W / PHONE_H constants inside each screen component.
const NATIVE_W = 230;
const NATIVE_H = 485;

interface PhoneShellProps {
  activeScreen?: PhoneScreen;
  notifications?: string[];
}

interface Drop {
  id: number;
  x: number;
  y: number;
}

interface Banner {
  id: number;
  text: string;
  leaving: boolean;
}

const DROP_DURATION_MS = 1400;
const DROP_SPAWN_MS = 450;
const MAX_DROPS = 3;

const SCREEN_TITLES: Record<PhoneScreen, string> = {
  lock: 'SYNOS',
  agents: 'MUSASHI',
  slack: 'SLACK',
  apps: 'APP STORE',
  device: 'BROWSER',
  build: 'BUILD',
};

const NOTIF_ENTER_AT_MS = 350;
const NOTIF_STAGGER_MS = 1200;
const NOTIF_VISIBLE_MS = 3800;
const NOTIF_EXIT_MS = 320;

const PhoneShell: React.FC<PhoneShellProps> = ({
  activeScreen = 'lock',
  notifications,
}) => {
  const areaRef = useRef<HTMLDivElement>(null);
  const [scaleX, setScaleX] = useState(0);
  const [scaleY, setScaleY] = useState(0);
  const [drops, setDrops] = useState<Drop[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const banIdRef = useRef(0);

  // Measure the screen-area's actual rendered size and compute scale
  // factors for each axis so height can be tuned independently of width.
  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0) setScaleX(width / NATIVE_W);
      if (height > 0) setScaleY(height / NATIVE_H);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Spawn water drops at random positions. Max 3 visible at a time. Each
  // drop lives for DROP_DURATION_MS then is removed from the DOM.
  useEffect(() => {
    let nextId = 0;
    let activeCount = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const spawn = () => {
      if (activeCount >= MAX_DROPS) return;
      const drop: Drop = {
        id: nextId++,
        x: 12 + Math.random() * 76, // 12% – 88%
        y: 8 + Math.random() * 78,  // 8%  – 86%
      };
      activeCount++;
      setDrops((prev) => [...prev, drop]);
      const t = setTimeout(() => {
        activeCount--;
        setDrops((prev) => prev.filter((d) => d.id !== drop.id));
      }, DROP_DURATION_MS);
      timers.push(t);
    };

    // Fire one immediately so something is visible without waiting for the
    // first interval tick.
    spawn();
    const interval = setInterval(spawn, DROP_SPAWN_MS);

    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, []);

  // Notification banners: each time the active screen changes, spawn the
  // screen's instructions as iOS-style banner cards staggered in.
  useEffect(() => {
    setBanners([]);
    if (!notifications || notifications.length === 0) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    notifications.forEach((text, idx) => {
      const enterAt = NOTIF_ENTER_AT_MS + idx * NOTIF_STAGGER_MS;
      timers.push(
        setTimeout(() => {
          const id = ++banIdRef.current;
          setBanners((prev) => [...prev, { id, text, leaving: false }]);
          timers.push(
            setTimeout(() => {
              setBanners((prev) =>
                prev.map((b) => (b.id === id ? { ...b, leaving: true } : b)),
              );
              timers.push(
                setTimeout(() => {
                  setBanners((prev) => prev.filter((b) => b.id !== id));
                }, NOTIF_EXIT_MS),
              );
            }, NOTIF_VISIBLE_MS),
          );
        }, enterAt),
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [activeScreen, notifications]);

  const renderScreen = () => {
    switch (activeScreen) {
      case 'agents':
        return <AgentsChatScreen />;
      case 'slack':
        return <SlackScreen />;
      case 'apps':
        return <AppsScreen />;
      case 'device':
        return <DeviceScreen />;
      case 'build':
        return <BuildScreen />;
      case 'lock':
      default:
        return <LockscreenScreen />;
    }
  };

  return (
    <div className="phone-shell">
      {/* Frame locks the image + screen overlay to a single 3:2 aspect-ratio
          box. The two are siblings inside the same box and therefore
          translate/scale as one unit — they can never drift apart. */}
      <div className="phone-shell-frame">
        <img
          src="/hand-phone.png"
          alt=""
          className="phone-shell-img"
          aria-hidden="true"
          draggable={false}
        />
        <div ref={areaRef} className="phone-shell-screen-area">
          <div
            className="phone-shell-screen-content"
            style={{
              transform: `scale(${scaleX || 0}, ${scaleY || 0})`,
              width: NATIVE_W,
              height: NATIVE_H,
              opacity: scaleX > 0 && scaleY > 0 ? 1 : 0,
            }}
          >
            {renderScreen()}

            {/* iOS-style notification banners — overlay the active screen */}
            <div className="phone-shell-notifications" aria-hidden="true">
              {banners.map((b) => (
                <div
                  key={b.id}
                  className={`phone-shell-notification ${b.leaving ? 'is-leaving' : ''}`}
                >
                  <div className="phone-shell-notification-icon">S</div>
                  <div className="phone-shell-notification-body">
                    <div className="phone-shell-notification-head">
                      <span className="phone-shell-notification-app">
                        {SCREEN_TITLES[activeScreen]}
                      </span>
                      <span className="phone-shell-notification-time">now</span>
                    </div>
                    <div className="phone-shell-notification-text">{b.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Water drops — JS-spawned at random positions, max 3 at a time. */}
          <div className="phone-shell-drops" aria-hidden="true">
            {drops.map((d) => (
              <span
                key={d.id}
                className="phone-shell-drop"
                style={{ left: `${d.x}%`, top: `${d.y}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneShell;
