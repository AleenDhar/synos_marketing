'use client';

import React, { useState, useEffect } from 'react';
import NextImage from 'next/image';
import './SynosChatPreview.css';

const slides = [
  {
    title: "Talk to your AI employee like a teammate.",
    subtitle: "Give instructions in plain English. Get status updates. Adjust on the fly. Your AI employee lives in a chat interface — no dashboards to learn, no manuals to read.",
    image: "/chat-interface.png",
    label: "Chat Interface"
  },
  {
    title: "Build complex workflows visually.",
    subtitle: "Multi-step automations with branching logic, conditional triggers, and scheduling. Drag, drop, deploy. Your AI employee follows the playbook.",
    image: "/workflow.png",
    label: "Workflow Builder"
  },
  {
    title: "Your AI gets its own browser.",
    subtitle: "Synos agents browse the web like a human — navigating sites, filling forms, extracting data, and interacting with tools that don't have APIs. No extensions, no workarounds.",
    image: "/own-browser.png",
    label: "Own Browser"
  },
  {
    title: "Dedicated cloud compute for every agent.",
    subtitle: "Each AI employee runs on its own isolated AWS Fargate instance. No shared resources, no cold starts, no limits. Enterprise-grade infrastructure that scales with your workload.",
    image: "/cloud-compute.png",
    label: "Cloud Compute"
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
              <NextImage
                src={slide.image}
                alt={slide.title}
                className="synos-chat-img"
                fill
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
