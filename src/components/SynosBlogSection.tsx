import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getBlogPosts } from '@/lib/blog-posts';
import './SynosBlogSection.css';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export const SynosBlogSection: React.FC = () => {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section className="synos-blog-section" id="dispatches">
      <div className="synos-blog-section-bg" aria-hidden="true">
        <div className="synos-blog-section-bg-gradient" />
        <div className="synos-blog-section-bg-grain" />
      </div>

      <div className="synos-container synos-blog-section-inner">
        <header className="synos-blog-section-header">
          <span className="synos-blog-section-eyebrow">SYS_LOG · DISPATCHES</span>
          <div className="synos-blog-section-headline-row">
            <h2 className="synos-blog-section-headline">
              FIELD NOTES FROM
              <br />
              THE SYNOS TEAM.
            </h2>
            <Link href="/blog" className="synos-blog-section-all">
              <span className="synos-blog-section-all-corners" aria-hidden="true">
                <span className="synos-blog-section-all-corner synos-blog-section-all-corner-tl" />
                <span className="synos-blog-section-all-corner synos-blog-section-all-corner-tr" />
                <span className="synos-blog-section-all-corner synos-blog-section-all-corner-bl" />
                <span className="synos-blog-section-all-corner synos-blog-section-all-corner-br" />
              </span>
              <span className="synos-blog-section-all-label">All dispatches</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </header>

        <ul className="synos-blog-section-list">
          {posts.map((post) => (
            <li key={post.slug} className="synos-blog-section-card">
              <Link
                href={`/blog/${post.slug}`}
                className="synos-blog-section-card-link"
              >
                <div className="synos-blog-section-card-meta">
                  <span className="synos-blog-section-card-tag">{post.tag}</span>
                  <span className="synos-blog-section-card-date">
                    {formatDate(post.publishedAt)}
                  </span>
                </div>

                <h3 className="synos-blog-section-card-title">{post.title}</h3>

                <p className="synos-blog-section-card-excerpt">{post.excerpt}</p>

                <div className="synos-blog-section-card-footer">
                  <span className="synos-blog-section-card-read">
                    {post.readMinutes} MIN READ
                  </span>
                  <span className="synos-blog-section-card-arrow">
                    READ <ArrowUpRight size={12} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
