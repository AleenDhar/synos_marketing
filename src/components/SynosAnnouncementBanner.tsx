'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import './SynosAnnouncementBanner.css';

type BannerStyle = 'accent' | 'dark' | 'success' | 'warning' | 'info';

export interface SynosAnnouncementBannerProps {
  enabled?: boolean | null;
  message?: string | null;
  style?: BannerStyle | string | null;
  dismissible?: boolean | null;
  link?: {
    label?: string | null;
    url?: string | null;
    newTab?: boolean | null;
  } | null;
}

// localStorage key tracks the dismissed message hash so the banner
// reappears whenever admins update the text.
const DISMISS_KEY = 'synos-announcement-dismissed';

function hashMessage(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i) | 0;
  return String(h);
}

export const SynosAnnouncementBanner: React.FC<SynosAnnouncementBannerProps> = ({
  enabled,
  message,
  style,
  dismissible,
  link,
}) => {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!message) return;
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(DISMISS_KEY);
    if (stored && stored === hashMessage(message)) setDismissed(true);
  }, [message]);

  if (!enabled || !message || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    if (message && typeof window !== 'undefined') {
      window.localStorage.setItem(DISMISS_KEY, hashMessage(message));
    }
  };

  const variant = (style ?? 'accent') as BannerStyle;

  return (
    <div className={`synos-banner synos-banner-${variant}`} role="region" aria-label="Site announcement">
      <div className="synos-banner-inner">
        <span className="synos-banner-tag" aria-hidden="true">SYS_BCAST</span>
        <span className="synos-banner-divider" aria-hidden="true" />
        <span className="synos-banner-message">{message}</span>
        {link?.url && link?.label && (
          <a
            className="synos-banner-link"
            href={link.url}
            target={link.newTab ? '_blank' : undefined}
            rel={link.newTab ? 'noopener noreferrer' : undefined}
          >
            {link.label}
            <span className="synos-banner-link-arrow" aria-hidden="true">→</span>
          </a>
        )}
      </div>
      {dismissible && (
        <button
          type="button"
          className="synos-banner-dismiss"
          aria-label="Dismiss announcement"
          onClick={handleDismiss}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};
