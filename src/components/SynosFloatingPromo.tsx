'use client';

import React from 'react';
import Link from 'next/link';
import './SynosFloatingPromo.css';

/**
 * Persistent promo card that floats in the bottom-right of the viewport
 * across the entire site. Always visible. Mount in the root layout.
 */
export const SynosFloatingPromo: React.FC = () => {
  return (
    <Link
      className="synos-promo"
      href="/blog/product-hunt-launch"
      aria-label="Read: we're launching on Product Hunt soon"
    >
      <div className="synos-promo-art" aria-hidden="true">
        <svg
          className="synos-promo-art-logo"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#DA552F" />
          <path
            d="M22.667 20H17.333v-6.667h5.334a3.333 3.333 0 0 1 0 6.667zm0-10h-9.334v20H17.333v-6.667h5.334a6.667 6.667 0 0 0 0-13.333z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <div className="synos-promo-body">
        <span className="synos-promo-eyebrow">NEW · DISPATCH</span>
        <h3 className="synos-promo-title">
          LAUNCHING ON
          <br />
          PRODUCT HUNT.
        </h3>
        <p className="synos-promo-desc">
          We&apos;re going live soon.
          <br />
          Be there on day one.
        </p>
      </div>
      <span className="synos-promo-cta">READ</span>
    </Link>
  );
};
