'use client';

import { useState } from 'react';
import { SynosNavbar } from '@/components/SynosNavbar';
import { SynosHero } from '@/components/SynosHero';
import { SynosHowItWorks } from '@/components/SynosHowItWorks';
import { SynosChatPreview } from '@/components/SynosChatPreview';
import { SynosFeatureGrid } from '@/components/SynosFeatureGrid';
import { SynosComparison } from '@/components/SynosComparison';
import { SynosTemplates } from '@/components/SynosTemplates';
import { SynosEnterprise } from '@/components/SynosEnterprise';
import { SynosPricing } from '@/components/SynosPricing';
import { SynosFinalCTA } from '@/components/SynosFinalCTA';
import { SynosFooter } from '@/components/SynosFooter';
import { SynosWaitlistModal } from '@/components/SynosWaitlistModal';
import { SynosTracker } from '@/components/SynosTracker';

export default function LandingPage() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const openWaitlist = () => setWaitlistOpen(true);
  const openDemo = () => window.open('https://calendly.com/dharaleen/30min', '_blank');

  return (
    <div className="synos-landing">
      <SynosNavbar onWaitlistClick={openWaitlist} />
      <main>
        <SynosHero onWaitlistClick={openWaitlist} onDemoClick={openDemo} />
        <SynosHowItWorks onWaitlistClick={openWaitlist} />
        <SynosChatPreview />
        <SynosFeatureGrid />
        <SynosComparison />
        <SynosTemplates onDemoClick={openDemo} />
        {/* <SynosEnterprise onDemoClick={openDemo} /> */}
        <SynosPricing onWaitlistClick={openWaitlist} />
        <SynosFinalCTA onWaitlistClick={openWaitlist} onDemoClick={openDemo} />
      </main>
      <SynosFooter />
      <SynosWaitlistModal isOpen={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
      <SynosTracker />

      <style jsx global>{`
        :root {
          --bg: #f5f0ea;
          --bg-card: #eee9e2;
          --text-primary: #1a1a1a;
          --text-secondary: #6b6560;
          --border: #ddd6cd;
          --accent: #f04e23;
          --accent-hover: #d94420;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          color: var(--text-primary);
          background: var(--bg);
        }

        .synos-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .synos-btn-primary {
          background: var(--accent);
          color: white;
          padding: 12px 28px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .synos-btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(240, 78, 35, 0.25);
        }

        .synos-btn-secondary {
          border: 1.5px solid var(--border);
          padding: 12px 28px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          background: transparent;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s;
        }

        .synos-btn-secondary:hover {
          border-color: var(--text-primary);
          background: rgba(0,0,0,0.03);
        }

        @media (max-width: 768px) {
          .synos-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
}
