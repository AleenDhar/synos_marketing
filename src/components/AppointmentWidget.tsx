import React from 'react';
import './AppointmentWidget.css';

export const AppointmentWidget: React.FC = () => {
  return (
    <div className="appointment-widget fade-in">
      <div className="widget-header">
        <div className="doctor-info">
          <div className="doctor-avatar">
            <img src="https://images.unsplash.com/photo-1559839734-2b71f153678c?auto=format&fit=crop&q=80&w=200&h=200" alt="Dr. Sarah Smith" />
          </div>
          <div className="doctor-details">
            <span className="doctor-name">Dr. Sarah Smith</span>
            <h3 className="appointment-type">Medical Appointment</h3>
          </div>
        </div>
      </div>
      <p className="widget-description">
        Welcome to Sacred Hearth Hospital. Please pick a time for your appointment.
      </p>
      <div className="duration-selector">
        <div className="duration-options">
          <span className="duration-label"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 15m</span>
          <span>30m</span>
          <span>45m</span>
          <span className="active">1h</span>
        </div>
      </div>
      <div className="location-info">
        <div className="info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          22 Street, Chicago
        </div>
        <div className="info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          Asia/Singapore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </div>
    </div>
  );
};
