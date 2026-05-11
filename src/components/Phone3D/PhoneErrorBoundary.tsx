'use client';

import React from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error: Error | null };

export class PhoneErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log loud and clear so we can see exactly what is killing the phone
    console.error('[PhoneErrorBoundary] caught:', error);
    console.error('[PhoneErrorBoundary] component stack:', info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            minHeight: 600,
            color: '#fff',
            fontSize: 14,
            padding: 32,
            textAlign: 'center',
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 16,
          }}
        >
          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Phone scene crashed</div>
            <div style={{ opacity: 0.7, fontSize: 12, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
              {this.state.error?.message || 'Unknown error'}
            </div>
            <div style={{ opacity: 0.5, fontSize: 11, marginTop: 12 }}>
              Check the browser console for the full stack trace.
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
