'use client';

import React from 'react';
import { PopupModal } from 'react-calendly';

interface SynosDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SynosDemoModal: React.FC<SynosDemoModalProps> = ({ isOpen, onClose }) => {
  return (
    <PopupModal
      url="https://calendly.com/dharaleen/30min"
      onModalClose={onClose}
      open={isOpen}
      rootElement={typeof document !== 'undefined' ? document.body : (undefined as unknown as HTMLElement)}
      pageSettings={{
        primaryColor: 'f04e23',
        hideGdprBanner: true,
      }}
    />
  );
};
