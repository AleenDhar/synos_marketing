import React from 'react';
import './CalendarWidget.css';

export const CalendarWidget: React.FC = () => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  const startOffset = 4; // To align dates correctly for May 2025 (fake)

  return (
    <div className="calendar-widget fade-in">
      <div className="calendar-header">
        <span className="current-month">May 2025</span>
      </div>
      <div className="calendar-grid">
        {days.map(day => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
        {Array.from({ length: startOffset }).map((_, i) => (
          <div key={`empty-${i}`} className="calendar-date empty"></div>
        ))}
        {dates.map(date => {
          let className = "calendar-date";
          if (date === 27) className += " selected";
          if ([6, 7, 8, 9, 13, 14, 15, 16, 20, 21, 22, 23, 27, 28, 29, 30].includes(date)) className += " available";
          
          return (
            <div key={date} className={className}>
              {date}
              {date === 1 && <span className="dot">.</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
