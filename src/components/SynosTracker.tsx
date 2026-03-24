'use client';

import { useEffect, useRef, useCallback } from 'react';

function generateSessionId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function getDeviceType() {
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'Tablet';
  if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

function getBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
  return 'Other';
}

function getOS() {
  const ua = navigator.userAgent;
  if (ua.includes('Win')) return 'Windows';
  if (ua.includes('Mac')) return 'macOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  return 'Other';
}

function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
  };
}

interface ClickEvent {
  x: number;
  y: number;
  element: string;
  text: string;
  timestamp: number;
}

interface SectionTime {
  id: string;
  timeSpent: number;
}

export const SynosTracker: React.FC = () => {
  const sessionId = useRef('');
  const visitorId = useRef<string | null>(null);
  const startTime = useRef(Date.now());
  const clicks = useRef<ClickEvent[]>([]);
  const maxScroll = useRef(0);
  const sectionTimers = useRef<Record<string, number>>({});
  const visibleSections = useRef<Set<string>>(new Set());
  const lastFlush = useRef(Date.now());
  const geoData = useRef<{ ip?: string; country?: string; city?: string; region?: string }>({});

  const flush = useCallback(async () => {
    if (!sessionId.current) return;

    const sectionTimes: SectionTime[] = Object.entries(sectionTimers.current).map(([id, time]) => ({
      id,
      timeSpent: Math.round(time / 1000),
    }));

    const payload: Record<string, unknown> = {
      sessionId: sessionId.current,
      timeOnSite: Math.round((Date.now() - startTime.current) / 1000),
      maxScrollDepth: Math.round(maxScroll.current),
      clicks: clicks.current.slice(-50),
      sectionsViewed: sectionTimes,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    if (geoData.current.ip) {
      payload.ip = geoData.current.ip;
      payload.country = geoData.current.country;
      payload.city = geoData.current.city;
      payload.region = geoData.current.region;
    }

    try {
      if (visitorId.current) {
        await fetch(`/api/visitors/${visitorId.current}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        const utm = getUTMParams();
        const res = await fetch('/api/visitors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...payload,
            device: getDeviceType(),
            browser: getBrowser(),
            os: getOS(),
            screenResolution: `${screen.width}x${screen.height}`,
            language: navigator.language,
            referrer: document.referrer || 'direct',
            pagesViewed: 1,
            converted: 'no',
            ...utm,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          visitorId.current = data.doc?.id;
        }
      }
    } catch {
      // silent fail
    }

    lastFlush.current = Date.now();
  }, []);

  useEffect(() => {
    sessionId.current = generateSessionId();

    // Fetch IP + geolocation
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => {
        geoData.current = {
          ip: data.ip,
          country: data.country_name,
          city: data.city,
          region: data.region,
        };
        // Initial flush with geo data
        flush();
      })
      .catch(() => {
        flush();
      });

    // Track clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      clicks.current.push({
        x: Math.round((e.clientX / window.innerWidth) * 100),
        y: Math.round((e.clientY / window.innerHeight) * 100),
        element: target.tagName.toLowerCase(),
        text: (target.textContent || '').substring(0, 50),
        timestamp: Date.now() - startTime.current,
      });
    };
    document.addEventListener('click', handleClick);

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (scrollPercent > maxScroll.current) {
        maxScroll.current = scrollPercent;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track section visibility
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections.current.add(id);
          } else {
            visibleSections.current.delete(id);
          }
        });
      },
      { threshold: 0.3 },
    );
    sections.forEach(s => observer.observe(s));

    // Tick section timers
    const timerInterval = setInterval(() => {
      visibleSections.current.forEach(id => {
        sectionTimers.current[id] = (sectionTimers.current[id] || 0) + 500;
      });
    }, 500);

    // Periodic flush every 15 seconds
    const flushInterval = setInterval(() => {
      flush();
    }, 15000);

    // Flush on page leave
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        flush();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearInterval(timerInterval);
      clearInterval(flushInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      flush();
    };
  }, [flush]);

  // Expose method to mark conversion
  useEffect(() => {
    (window as unknown as Record<string, unknown>).__synosVisitorId = () => visitorId.current;
    (window as unknown as Record<string, unknown>).__synosMarkConversion = async (type: string, email: string) => {
      if (!visitorId.current) return;
      try {
        await fetch(`/api/visitors/${visitorId.current}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ converted: type, convertedEmail: email }),
        });
      } catch {
        // silent
      }
    };
  }, []);

  return null;
};
