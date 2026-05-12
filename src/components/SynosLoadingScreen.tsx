'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import './SynosLoadingScreen.css';

interface SynosLoadingScreenProps {
  /** Total counter duration in ms on initial page load (default 2400) */
  duration?: number;
  /** Total counter duration on client-side route changes (default 900).
   *  Shorter than the first load because assets are already cached. */
  navDuration?: number;
  /** Fade-out duration in ms (default 600) */
  fadeOut?: number;
  /** Hold time at 100% before fading (default 350) */
  holdAtFull?: number;
}

export const SynosLoadingScreen: React.FC<SynosLoadingScreenProps> = ({
  duration = 2400,
  navDuration = 900,
  fadeOut = 600,
  holdAtFull = 350,
}) => {
  const pathname = usePathname();
  const isFirstRunRef = useRef(true);
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Reset state on every route change (including initial mount).
    setPercent(0);
    setVisible(true);
    setFading(false);
    const activeDuration = isFirstRunRef.current ? duration : navDuration;
    isFirstRunRef.current = false;
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
    const totalSteps = Math.max(1, Math.round(activeDuration / stepMs));
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
    }, activeDuration + holdAtFull);

    const finalDismiss = setTimeout(() => {
      if (cancelled) return;
      setVisible(false);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    }, activeDuration + holdAtFull + fadeOut);

    return () => {
      cancelled = true;
      clearInterval(interval);
      clearTimeout(fadeStart);
      clearTimeout(finalDismiss);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [pathname, duration, navDuration, fadeOut, holdAtFull]);

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
