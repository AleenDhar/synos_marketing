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
}

interface Drop {
  id: number;
  x: number;
  y: number;
}

const DROP_DURATION_MS = 1400;
const DROP_SPAWN_MS = 450;
const MAX_DROPS = 3;

const PhoneShell: React.FC<PhoneShellProps> = ({ activeScreen = 'lock' }) => {
  const areaRef = useRef<HTMLDivElement>(null);
  const [scaleX, setScaleX] = useState(0);
  const [scaleY, setScaleY] = useState(0);
  const [drops, setDrops] = useState<Drop[]>([]);

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
