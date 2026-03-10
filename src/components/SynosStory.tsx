import React from 'react';
import './SynosStory.css';

export const SynosStory: React.FC = () => {
  return (
    <section className="synos-story">
      <div className="synos-container">
        <div className="synos-story-layout">
          <div className="synos-story-content">
            <h2 className="synos-story-quote">&quot;I built this platform. Then I fired my need for a team.&quot;</h2>
            <p className="synos-story-text">
              I&apos;m the founder of SynosAI. I&apos;m running this entire company — product, marketing, support, operations — solo. No employees. No contractors. Just me and the AI agents I built on this platform.
            </p>
            <p className="synos-story-text">
              Every workflow, every customer email, every scheduled task — handled by agents I created in minutes.
            </p>
            <p className="synos-story-text">
              This isn&apos;t a pitch. It&apos;s proof. Follow along as I build in public and show what one person can do with the right tools.
            </p>
            <div className="synos-story-actions">
              <button className="synos-btn-primary">Watch the announcement</button>
              <button className="synos-btn-secondary">Follow the journey</button>
            </div>
          </div>
          <div className="synos-story-visual">
            <div className="synos-founder-image-placeholder">
              {/* This would be the founder's photo */}
              <div className="synos-avatar-overlay">Solo Founder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
