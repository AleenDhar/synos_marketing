'use client';

import React, { useState, useEffect } from 'react';
import './SynosChatPreview.css';

const slides = [
  {
    title: "Talk to your agents like teammates.",
    subtitle: "A chat interface built for operators. Give instructions, get status updates, adjust on the fly. No dashboards to learn. No manuals to read.",
    image: "/chat-interface.png",
    label: "Chat Interface"
  },
  {
    title: "Build complex workflows visually.",
    subtitle: "Multi-step automations with branching logic, conditional triggers, and cron scheduling. Drag, drop, deploy.",
    image: "/workflow.png",
    label: "Visual Workflow Builder"
  }
];

export const SynosChatPreview: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="synos-chat-preview">
      <div className="synos-container">
        <div className="synos-chat-header">
          <div className="synos-slide-tabs">
            {slides.map((slide, index) => (
              <button 
                key={index} 
                className={`synos-slide-tab ${activeSlide === index ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              >
                {slide.label}
              </button>
            ))}
          </div>
          <h2 className="synos-chat-title">{slides[activeSlide].title}</h2>
          <p className="synos-chat-subtitle">{slides[activeSlide].subtitle}</p>
        </div>
        
        <div className="synos-chat-visual-container">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`synos-chat-visual ${activeSlide === index ? 'active' : ''}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="synos-chat-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
