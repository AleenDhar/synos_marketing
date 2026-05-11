import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getBlogPosts } from '@/lib/blog-posts';
import { SynosBlogShell } from '@/components/SynosBlogShell';
import '@/components/SynosBlog.css';

export const metadata: Metadata = {
  title: 'Blog · Synos',
  description: 'Updates, launches, and stories from the Synos team.',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <SynosBlogShell>
      <header className="synos-blog-header">
        <span className="synos-blog-eyebrow">SYS_LOG · BROADCAST</span>
        <h1 className="synos-blog-title">DISPATCHES.</h1>
        <p className="synos-blog-lede">
          Field notes from the Synos team — launches, agents, ideas worth shipping.
        </p>
      </header>

      <ul className="synos-blog-list">
        {posts.map((post) => (
          <li key={post.slug} className="synos-blog-card">
            <Link href={`/blog/${post.slug}`} className="synos-blog-card-link">
              <div className="synos-blog-card-meta">
                <span className="synos-blog-card-tag">{post.tag}</span>
                <span className="synos-blog-card-date">{formatDate(post.publishedAt)}</span>
                <span className="synos-blog-card-read">{post.readMinutes} MIN READ</span>
              </div>
              <h2 className="synos-blog-card-title">{post.title}</h2>
              <p className="synos-blog-card-excerpt">{post.excerpt}</p>
              <span className="synos-blog-card-arrow">READ →</span>
            </Link>
          </li>
        ))}
      </ul>
    </SynosBlogShell>
  );
}
