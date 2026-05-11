'use client';

import React, { useEffect, useState } from 'react';
import './SynosLoadingScreen.css';

interface SynosLoadingScreenProps {
  /** Total counter duration in ms before fade-out begins (default 2400) */
  duration?: number;
  /** Fade-out duration in ms (default 600) */
  fadeOut?: number;
  /** Hold time at 100% before fading (default 350) */
  holdAtFull?: number;
}

export const SynosLoadingScreen: React.FC<SynosLoadingScreenProps> = ({
  duration = 2400,
  fadeOut = 600,
  holdAtFull = 350,
}) => {
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }

    // ── 0. Kick off downloads of heavy assets so they're cached before the
    //       loader dismisses. Browser will dedupe with the <link rel="preload">
    //       hints in <head>.
    if (typeof window !== 'undefined') {
      const imageAssets = [
        '/synos-hero.png',
        '/hand-phone.png',
        '/shrine.png',
      ];
      imageAssets.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
      // GLB model for the Phone3D scene
      fetch('/iphone.glb').catch(() => {});
    }

    // ── 1. Counter (purely visual). Tries to reach 100 on its own. ─────────
    const stepMs = 30;
    const totalSteps = Math.max(1, Math.round(duration / stepMs));
    let step = 0;
    const interval = setInterval(() => {
      if (cancelled) return;
      step += 1;
      const progress = Math.min(step / totalSteps, 1);
      const eased = 1 - Math.pow(1 - progress, 2.5);
      setPercent(Math.min(100, Math.floor(eased * 100)));
      if (step >= totalSteps) clearInterval(interval);
    }, stepMs);

    // ── 2. Absolute timers — these fire no matter what the counter does. ──
    const fadeStart = setTimeout(() => {
      if (cancelled) return;
      setPercent(100);
      setFading(true);
    }, duration + holdAtFull);

    const finalDismiss = setTimeout(() => {
      if (cancelled) return;
      setVisible(false);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    }, duration + holdAtFull + fadeOut);

    return () => {
      cancelled = true;
      clearInterval(interval);
      clearTimeout(fadeStart);
      clearTimeout(finalDismiss);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [duration, fadeOut, holdAtFull]);

  if (!visible) return null;

  return (
    <div
      className={`synos-loader ${fading ? 'is-fading' : ''}`}
      role="status"
      aria-label="Loading"
    >
      <div className="synos-loader-shrine" aria-hidden="true">
        <img src="/shrine.png" alt="" className="synos-loader-shrine-img" />
      </div>

      <div className="synos-loader-counter" aria-hidden="true">
        {String(percent).padStart(2, '0')}%
      </div>

      <span className="synos-loader-tag" aria-hidden="true">
        ENTERING SYNOS
      </span>
    </div>
  );
};
