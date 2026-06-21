'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import './SynosFooter.css';

type LinkItem = { label: string; href: string; external?: boolean };

const COLS: { title: string; links: LinkItem[] }[] = [
  {
    title: 'PRODUCT',
    links: [
      { label: 'Overview',    href: '/#product' },
      { label: 'Agents',      href: '/#templates' },
      { label: 'Integrations',href: '/#product' },
      { label: 'Pricing',     href: '/#pricing' },
      { label: 'Changelog',   href: '/changelog' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'Blog',         href: '/blog' },
      { label: 'Manifesto',    href: '/manifesto' },
      { label: 'Careers',      href: '/careers' },
      { label: 'Press kit',    href: '/press' },
      { label: 'Contact',      href: 'mailto:hello@synosai.com', external: true },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Docs',         href: '/docs' },
      { label: 'API reference',href: '/docs/api' },
      { label: 'Agent gallery',href: '/agents' },
      { label: 'Status',       href: 'https://status.synosai.com', external: true },
      { label: 'Security',     href: '/security' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { label: 'Terms',        href: '/legal/terms' },
      { label: 'Privacy',      href: '/legal/privacy' },
      { label: 'Acceptable use', href: '/legal/aup' },
      { label: 'DPA',          href: '/legal/dpa' },
    ],
  },
];

const SOCIAL: { label: string; href: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { label: 'X',        href: 'https://x.com/synosai',           icon: Twitter },
  { label: 'GitHub',   href: 'https://github.com/synosai',      icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/synosai', icon: Linkedin },
  { label: 'YouTube',  href: 'https://youtube.com/@synosai',    icon: Youtube },
];

export const SynosFooter: React.FC = () => {
  const [now, setNow] = useState<string>('');

  // Pixel-style live clock for the system status row
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const time = d.toLocaleTimeString('en-US', { hour12: false });
      const date = d.toISOString().slice(0, 10);
      setNow(`${date} · ${time} UTC`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="synos-footer">
      {/* Grain overlay for texture */}
      <div className="synos-footer-grain" aria-hidden="true" />

      <div className="synos-footer-inner">
        {/* TOP — pitch + columns */}
        <div className="synos-footer-top">
          <div className="synos-footer-brand">
            <Link href="/" className="synos-footer-logo" aria-label="Synos home">
              <span className="synos-footer-logo-text">SYNOS</span>
            </Link>
            <p className="synos-footer-pitch">
              One person, an entire operation. AI employees that research, sell,
              support, and build — so solo founders and small teams can compete
              with companies 100× their size.
            </p>
            <span className="synos-footer-kanji" aria-hidden="true">
              未来を、仕組みに。
            </span>
            <div className="synos-footer-newsletter">
              <span className="synos-footer-newsletter-label">
                STAY IN THE LOOP →
              </span>
              <Link href="/#waitlist" className="synos-footer-newsletter-cta">
                Join the waitlist
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="synos-footer-cols">
            {COLS.map((col) => (
              <nav key={col.title} className="synos-footer-col">
                <h4 className="synos-footer-col-title">{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="synos-footer-link"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <Link href={link.href} className="synos-footer-link">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* GIANT WORDMARK */}
        <div className="synos-footer-wordmark" aria-hidden="true">
          SYNOS
        </div>

        {/* BOTTOM — status, copyright, socials */}
        <div className="synos-footer-bottom">
          <div className="synos-footer-status">
            <span className="synos-footer-status-dot" />
            <span className="synos-footer-status-text">
              ALL SYSTEMS OPERATIONAL
            </span>
            <span className="synos-footer-status-clock">{now}</span>
          </div>

          <div className="synos-footer-meta">
            <span>© {new Date().getFullYear()} Synos AI, Inc.</span>
            <span className="synos-footer-meta-sep">·</span>
            <span>Built in San Francisco</span>
            <span className="synos-footer-meta-sep">·</span>
            <span>SYS_001 · 05.10.X</span>
          </div>

          <div className="synos-footer-socials">
            {SOCIAL.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="synos-footer-social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
