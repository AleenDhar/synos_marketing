'use client';

import React, { useState } from 'react';
import { SynosNavbar } from './SynosNavbar';
import { SynosFooter } from './SynosFooter';
import { SynosWaitlistModal } from './SynosWaitlistModal';

/**
 * Lightweight wrapper for blog pages — provides the same navbar, footer,
 * and waitlist modal as the landing page without dragging in the heavy
 * landing sections.
 */
export const SynosBlogShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="synos-blog-shell">
      <SynosNavbar onWaitlistClick={() => setWaitlistOpen(true)} />
      <main className="synos-blog-main">{children}</main>
      <SynosFooter />
      <SynosWaitlistModal isOpen={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
};
