'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * DynamicIsland — replicates the lockscreen notch animation pattern.
 * Same variants, same easing as the original PhoneModel.
 * Renders the entire status bar (time + notch + 5G/100%) — drop into any screen.
 */

type DynamicIslandProps = {
  show?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
  iconBg?: string;
  title?: string;
  subtitle?: string;
  /** When set, auto-fires on mount: expands to notification, holds, collapses. */
  autoShow?: {
    title: string;
    subtitle: string;
    icon?: React.ReactNode;
    iconBg?: string;
    /** Delay before expanding (ms). Default 400. */
    delay?: number;
    /** How long the expanded notification stays visible (ms). Default 4000. */
    duration?: number;
  };
};

const dIVariants = {
  initialDi: { width: 70, height: 20, borderRadius: 20 },
  Notification: { width: 210, height: 58, borderRadius: 24 },
};
const notiLeft = {
  initialDi: { width: 56, scale: 1, opacity: 1 },
  Notification: { width: 0, scale: 0, opacity: 0 },
};
const notiRight = {
  initialDi: { width: 56, scale: 1, opacity: 1 },
  Notification: { width: 0, scale: 0, opacity: 0 },
};
const notiContent = {
  initialDi: { scale: 0, opacity: 0 },
  Notification: { scale: 1, opacity: 1 },
};

export default function DynamicIsland({
  show: showProp,
  onDismiss,
  icon: iconProp,
  iconBg: iconBgProp = '#fff',
  title: titleProp = '',
  subtitle: subtitleProp = '',
  autoShow,
}: DynamicIslandProps) {
  const controls = useAnimation();
  const [time, setTime] = useState<string>('');
  const [autoShowing, setAutoShowing] = useState(false);

  // Parent-driven `show` always wins over autoShow so existing screens
  // that already drive the notch from interaction state aren't clobbered.
  const useAuto = !showProp && !!autoShow && autoShowing;
  const show = !!showProp || useAuto;
  const title = useAuto ? autoShow!.title : titleProp;
  const subtitle = useAuto ? autoShow!.subtitle : subtitleProp;
  const icon = useAuto ? (autoShow!.icon ?? iconProp) : iconProp;
  const iconBg = useAuto ? (autoShow!.iconBg ?? iconBgProp) : iconBgProp;

  const handleDismiss = () => {
    if (autoShow) setAutoShowing(false);
    onDismiss?.();
  };

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (show) {
      controls.start('Notification');
    } else {
      controls.start('initialDi');
    }
  }, [show, controls]);

  // autoShow: on mount, expand → hold → collapse.
  useEffect(() => {
    if (!autoShow) return;
    const delay = autoShow.delay ?? 400;
    const duration = autoShow.duration ?? 4000;
    const openT = setTimeout(() => setAutoShowing(true), delay);
    const closeT = setTimeout(() => setAutoShowing(false), delay + duration);
    return () => {
      clearTimeout(openT);
      clearTimeout(closeT);
    };
  }, [autoShow]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 8,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '0 22px',
        zIndex: 50,
      }}
    >
      {/* Time (fades to width 0 when notch expands) */}
      <motion.div
        variants={notiLeft}
        initial="initialDi"
        animate={controls}
        transition={{ duration: 0.3, type: 'tween', ease: [0.14, 0.13, 0.25, 1] }}
        style={{
          display: 'flex',
          width: 56,
          fontSize: 10,
          alignItems: 'center',
          justifyContent: 'flex-start',
          fontWeight: 600,
          color: '#fff',
        }}
      >
        {time}
      </motion.div>

      {/* The notch */}
      <motion.div
        initial={{ width: 70, height: 20, borderRadius: 20 }}
        variants={dIVariants}
        animate={controls}
        transition={{ duration: 0.3, type: 'tween', ease: [0.14, 0.13, 0.25, 1] }}
        onClick={() => show && handleDismiss()}
        style={{
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 14px',
          overflow: 'hidden',
          cursor: show ? 'pointer' : 'default',
        }}
      >
        <AnimatePresence>
          <motion.div
            variants={notiContent}
            initial="initialDi"
            animate={controls}
            transition={{ duration: 0.25, type: 'tween', ease: [0.14, 0.13, 0.25, 1] }}
            style={{ width: '100%', display: 'flex', alignItems: 'center' }}
          >
            {show && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  width: '100%',
                }}
              >
                <div
                  style={{
                    height: 24,
                    width: 24,
                    background: iconBg,
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    minWidth: 0,
                    lineHeight: 1.15,
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 800,
                      color: '#fff',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {title}
                  </span>
                  <span
                    style={{
                      fontSize: 8,
                      color: 'rgba(255,255,255,0.7)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {subtitle}
                  </span>
                </div>
                <X
                  size={11}
                  style={{ color: '#fff', cursor: 'pointer', flexShrink: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDismiss();
                  }}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Right side: 5G / 100% (fades to width 0 when notch expands) */}
      <motion.div
        variants={notiRight}
        initial="initialDi"
        animate={controls}
        transition={{ duration: 0.3, type: 'tween', ease: [0.14, 0.13, 0.25, 1] }}
        style={{
          width: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 4,
          fontSize: 9,
          fontWeight: 600,
          color: '#fff',
          letterSpacing: '0.02em',
        }}
      >
        <span>5G</span>
        <span>100%</span>
      </motion.div>
    </div>
  );
}
