'use client';

import React from 'react';
import { InlineWidget } from 'react-calendly';
import './SynosDemoModal.css';

interface SynosDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SynosDemoModal: React.FC<SynosDemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="synos-modal-overlay" onClick={handleOverlayClick}>
      <div className="synos-demo-modal synos-demo-modal--calendly">
        <button className="synos-modal-close" onClick={onClose}>&times;</button>
        <InlineWidget
          url="https://calendly.com/dharaleen/30min"
          styles={{ height: '100%', minHeight: '580px' }}
          pageSettings={{
            backgroundColor: 'f5f0ea',
            primaryColor: 'f04e23',
            textColor: '1a1a1a',
            hideLandingPageDetails: false,
            hideEventTypeDetails: false,
            hideGdprBanner: true,
          }}
        />
      </div>
    </div>
  );
};
