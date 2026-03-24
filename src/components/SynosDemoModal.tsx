'use client';

import React, { useState, useMemo } from 'react';
import './SynosDemoModal.css';

interface SynosDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM',
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const SynosDemoModal: React.FC<SynosDemoModalProps> = ({ isOpen, onClose }) => {
  const today = new Date();
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'calendar' | 'form'>('calendar');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [geo, setGeo] = useState<{ ip?: string; country?: string; city?: string }>({});

  React.useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => setGeo({ ip: data.ip, country: data.country_name, city: data.city }))
      .catch(() => {});
  }, []);

  const daysInMonth = useMemo(() => getDaysInMonth(currentYear, currentMonth), [currentYear, currentMonth]);
  const firstDay = useMemo(() => getFirstDayOfMonth(currentYear, currentMonth), [currentYear, currentMonth]);

  if (!isOpen) return null;

  const isToday = (day: number) =>
    day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();

  const isPast = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const isWeekend = (day: number) => {
    const d = new Date(currentYear, currentMonth, day).getDay();
    return d === 0 || d === 6;
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const canGoPrev = () => {
    return currentYear > today.getFullYear() || (currentYear === today.getFullYear() && currentMonth > today.getMonth());
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setStep('form');
    }
  };

  const parseTime = (timeStr: string) => {
    const [time, period] = timeStr.split(' ');
    const [hourStr, minStr] = time.split(':');
    let hours = parseInt(hourStr);
    const mins = parseInt(minStr);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    return { hours, mins };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { hours, mins } = parseTime(selectedTime!);
    const dateTime = new Date(currentYear, currentMonth, selectedDate!, hours, mins);

    try {
      const res = await fetch('/api/demo-bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          company,
          dateTime: dateTime.toISOString(),
          notes,
          timezone: userTimezone,
          status: 'pending',
          ...geo,
        }),
      });

      if (res.ok) {
        setStatus('success');
        const markConversion = (window as Record<string, unknown>).__synosMarkConversion as ((type: string, email: string) => void) | undefined;
        if (markConversion) markConversion('demo', email);
      } else {
        setErrorMsg('Something went wrong. Please try again.');
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

  const formattedDate = selectedDate
    ? `${MONTH_NAMES[currentMonth]} ${selectedDate}, ${currentYear}`
    : '';

  return (
    <div className="synos-modal-overlay" onClick={handleOverlayClick}>
      <div className="synos-demo-modal">
        <button className="synos-modal-close" onClick={onClose}>&times;</button>

        {status === 'success' ? (
          <div className="synos-modal-success">
            <h2 className="synos-modal-title">Demo booked.</h2>
            <p className="synos-modal-desc">
              {formattedDate} at {selectedTime}. We&apos;ll send a confirmation to {email}.
            </p>
            <button className="synos-btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : step === 'calendar' ? (
          <>
            <h2 className="synos-demo-title">Book a Demo</h2>
            <p className="synos-demo-subtitle">Pick a date and time that works for you. Times shown in {userTimezone}.</p>

            <div className="synos-demo-layout">
              <div className="synos-calendar">
                <div className="synos-calendar-header">
                  <button
                    className="synos-calendar-nav"
                    onClick={prevMonth}
                    disabled={!canGoPrev()}
                  >
                    &larr;
                  </button>
                  <span className="synos-calendar-month">
                    {MONTH_NAMES[currentMonth]} {currentYear}
                  </span>
                  <button className="synos-calendar-nav" onClick={nextMonth}>&rarr;</button>
                </div>

                <div className="synos-calendar-grid">
                  {DAY_LABELS.map(d => (
                    <div key={d} className="synos-calendar-day-label">{d}</div>
                  ))}
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="synos-calendar-empty" />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const disabled = isPast(day) || isWeekend(day);
                    const selected = selectedDate === day;
                    return (
                      <button
                        key={day}
                        className={`synos-calendar-day ${selected ? 'selected' : ''} ${isToday(day) ? 'today' : ''} ${disabled ? 'disabled' : ''}`}
                        onClick={() => { if (!disabled) { setSelectedDate(day); setSelectedTime(null); } }}
                        disabled={disabled}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedDate && (
                <div className="synos-time-slots">
                  <p className="synos-time-label">{formattedDate}</p>
                  <div className="synos-time-list">
                    {TIME_SLOTS.map(t => (
                      <button
                        key={t}
                        className={`synos-time-slot ${selectedTime === t ? 'selected' : ''}`}
                        onClick={() => setSelectedTime(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {selectedDate && selectedTime && (
              <div className="synos-demo-actions">
                <button className="synos-btn-primary" onClick={handleContinue}>
                  Continue &rarr;
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <button className="synos-demo-back" onClick={() => setStep('calendar')}>&larr; Back</button>
            <h2 className="synos-demo-title">Your details</h2>
            <p className="synos-demo-subtitle">{formattedDate} at {selectedTime}</p>

            <form onSubmit={handleSubmit} className="synos-modal-form">
              <input
                type="text"
                placeholder="Full name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="synos-modal-input"
              />
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
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="synos-modal-input"
              />
              <textarea
                placeholder="What would you like to discuss? (optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="synos-modal-input synos-modal-textarea"
                rows={3}
              />
              {status === 'error' && <p className="synos-modal-error">{errorMsg}</p>}
              <button type="submit" className="synos-btn-primary synos-modal-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Booking...' : 'Confirm Booking'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
