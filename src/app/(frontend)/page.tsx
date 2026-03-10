'use client';

import React from 'react';
import { SynosNavbar } from '@/components/SynosNavbar';
import { SynosHero } from '@/components/SynosHero';
import { SynosHowItWorks } from '@/components/SynosHowItWorks';
import { SynosChatPreview } from '@/components/SynosChatPreview';
import { SynosFeatureGrid } from '@/components/SynosFeatureGrid';
import { SynosIntegrations } from '@/components/SynosIntegrations';
import { SynosTemplates } from '@/components/SynosTemplates';
import { SynosEnterprise } from '@/components/SynosEnterprise';
import { SynosDeploy } from '@/components/SynosDeploy';
import { SynosSocialProof } from '@/components/SynosSocialProof';
import { SynosFinalCTA } from '@/components/SynosFinalCTA';
import { SynosFooter } from '@/components/SynosFooter';

export default function LandingPage() {
  return (
    <div className="synos-landing">
      <SynosNavbar />
      <main>
        <SynosHero />
        <SynosHowItWorks />
        <SynosChatPreview />
        <SynosFeatureGrid />
        <SynosIntegrations />
        <SynosTemplates />
        <SynosEnterprise />
        <SynosDeploy />
        <SynosSocialProof />
        <SynosFinalCTA />
      </main>
      <SynosFooter />
      
      <style jsx global>{`
        :root {
          --text-primary: #000;
          --text-secondary: #666;
          --border: #f0f0f0;
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
        }

        .synos-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .synos-btn-primary {
          background: black;
          color: white;
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .synos-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .synos-btn-secondary {
          border: 1.5px solid var(--border);
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
        }

        .synos-btn-secondary:hover {
          border-color: black;
          background: #f9f9f9;
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
