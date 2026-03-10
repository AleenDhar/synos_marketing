import React from 'react';
import './SynosChatPreview.css';

export const SynosChatPreview: React.FC = () => {
  return (
    <section className="synos-chat-preview">
      <div className="synos-container">
        <div className="synos-chat-header">
          <h2 className="synos-chat-title">Built for people who move fast.</h2>
          <p className="synos-chat-subtitle">
            A chat interface designed for high-agency operators. <br />
            Not dumbed down. Not cluttered. <br />
            Talk to your agents like you'd talk to a teammate.
          </p>
        </div>
        <div className="synos-chat-visual">
          <img 
            src="/chat-interface.png" 
            alt="SynosAI Chat Interface" 
            className="synos-chat-img"
          />
        </div>
      </div>
    </section>
  );
};
