'use client';

import React, { useState } from 'react';
import './SynosWaitlistModal.css';

interface SynosWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SynosWaitlistModal: React.FC<SynosWaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [useCase, setUseCase] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [geo, setGeo] = useState<{ ip?: string; country?: string; city?: string }>({});

  React.useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => setGeo({ ip: data.ip, country: data.country_name, city: data.city }))
      .catch(() => {});
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, company, role, useCase, ...geo }),
      });

      if (res.ok) {
        setStatus('success');
        const markConversion = (window as Record<string, unknown>).__synosMarkConversion as ((type: string, email: string) => void) | undefined;
        if (markConversion) markConversion('waitlist', email);
      } else {
        const data = await res.json();
        const isDuplicate = data?.errors?.some((err: { message?: string }) =>
          err.message?.toLowerCase().includes('unique') || err.message?.toLowerCase().includes('duplicate')
        );
        if (isDuplicate) {
          setErrorMsg('You\'re already on the waitlist!');
        } else {
          setErrorMsg('Something went wrong. Please try again.');
        }
        setStatus('error');
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="synos-modal-overlay" onClick={handleOverlayClick}>
      <div className="synos-modal">
        <button className="synos-modal-close" onClick={onClose}>&times;</button>

        {status === 'success' ? (
          <div className="synos-modal-success">
            <h2 className="synos-modal-title">You&apos;re on the list.</h2>
            <p className="synos-modal-desc">We&apos;ll reach out when it&apos;s your turn. Get ready to hire your first AI employee.</p>
            <button className="synos-btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <h2 className="synos-modal-title">Join the Waitlist</h2>
            <p className="synos-modal-desc">Be among the first to hire an AI employee. We&apos;ll notify you when access opens up.</p>
            <form onSubmit={handleSubmit} className="synos-modal-form">
              <input
                type="email"
                placeholder="Work email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="synos-modal-input"
              />
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="synos-modal-input"
              />
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="synos-modal-input"
              />
              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="synos-modal-input"
              />
              <textarea
                placeholder="What type of AI employee do you want? (optional)"
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                className="synos-modal-input synos-modal-textarea"
                rows={3}
              />
              {status === 'error' && <p className="synos-modal-error">{errorMsg}</p>}
              <button type="submit" className="synos-btn-primary synos-modal-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Submitting...' : 'Join the Waitlist'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
