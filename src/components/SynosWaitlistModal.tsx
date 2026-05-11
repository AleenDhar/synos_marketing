'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
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
    if (process.env.NODE_ENV !== 'production') return;
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
        const markConversion = (window as unknown as Record<string, unknown>).__synosMarkConversion as ((type: string, email: string) => void) | undefined;
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
      <div className="synos-modal" role="dialog" aria-modal="true" aria-labelledby="waitlist-modal-title">
        <button className="synos-modal-close" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>

        <div className="synos-modal-corners" aria-hidden="true">
          <span className="synos-modal-corner synos-modal-corner-tl" />
          <span className="synos-modal-corner synos-modal-corner-tr" />
          <span className="synos-modal-corner synos-modal-corner-bl" />
          <span className="synos-modal-corner synos-modal-corner-br" />
        </div>

        {status === 'success' ? (
          <div className="synos-modal-success">
            <span className="synos-modal-eyebrow">SYS_002 · ACCESS GRANTED</span>
            <h2 id="waitlist-modal-title" className="synos-modal-title">You&apos;re on the list.</h2>
            <p className="synos-modal-desc">We&apos;ll reach out when it&apos;s your turn. Get ready to hire your first AI employee.</p>
            <button className="synos-modal-cta" onClick={onClose}>
              <span className="synos-modal-cta-icon" aria-hidden="true">▶</span>
              DONE
            </button>
          </div>
        ) : (
          <>
            <span className="synos-modal-eyebrow">SYS_002 · WAITLIST ACCESS</span>
            <h2 id="waitlist-modal-title" className="synos-modal-title">JOIN THE<br />WAITLIST.</h2>
            <p className="synos-modal-desc">Be among the first to hire an AI employee. We&apos;ll notify you when access opens up.</p>
            <form onSubmit={handleSubmit} className="synos-modal-form">
              <label className="synos-modal-field">
                <span className="synos-modal-label">Work Email *</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="synos-modal-input"
                />
              </label>
              <div className="synos-modal-row">
                <label className="synos-modal-field">
                  <span className="synos-modal-label">Full Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="synos-modal-input"
                  />
                </label>
                <label className="synos-modal-field">
                  <span className="synos-modal-label">Company</span>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="synos-modal-input"
                  />
                </label>
              </div>
              <label className="synos-modal-field">
                <span className="synos-modal-label">Role</span>
                <input
                  type="text"
                  placeholder="Founder, Head of Sales, etc."
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="synos-modal-input"
                />
              </label>
              <label className="synos-modal-field">
                <span className="synos-modal-label">What kind of AI employee do you need?</span>
                <textarea
                  placeholder="e.g. SDR for outbound, customer support, lead research…"
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="synos-modal-input synos-modal-textarea"
                  rows={3}
                />
              </label>
              {status === 'error' && <p className="synos-modal-error">{errorMsg}</p>}
              <button type="submit" className="synos-modal-cta synos-modal-submit" disabled={status === 'loading'}>
                <span className="synos-modal-cta-icon" aria-hidden="true">▶</span>
                {status === 'loading' ? 'SUBMITTING…' : 'JOIN THE WAITLIST'}
              </button>
              <p className="synos-modal-fineprint">No spam. We&apos;ll only email when your slot opens.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
