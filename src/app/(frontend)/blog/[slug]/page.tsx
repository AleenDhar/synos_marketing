import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts, type BlogBlock } from '@/lib/blog-posts';
import { SynosBlogShell } from '@/components/SynosBlogShell';
import '@/components/SynosBlog.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Blog · Synos' };
  return {
    title: `${post.title} · Synos`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderBlock(block: BlogBlock, i: number) {
  switch (block.type) {
    case 'p':
      return (
        <p key={i} className="synos-blog-post-p">
          {block.text}
        </p>
      );
    case 'h2':
      return (
        <h2 key={i} className="synos-blog-post-h2">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={i} className="synos-blog-post-h3">
          {block.text}
        </h3>
      );
    case 'ul':
      return (
        <ul key={i} className="synos-blog-post-ul">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i} className="synos-blog-post-ol">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      );
    case 'quote':
      return (
        <blockquote key={i} className="synos-blog-post-quote">
          <p>{block.text}</p>
          {block.cite && <cite>— {block.cite}</cite>}
        </blockquote>
      );
    case 'callout':
      return (
        <aside key={i} className="synos-blog-post-callout">
          {block.text}
        </aside>
      );
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <SynosBlogShell>
      <article className="synos-blog-post">
        <Link href="/blog" className="synos-blog-post-back">
          ← All dispatches
        </Link>

        <header className="synos-blog-post-header">
          <div className="synos-blog-post-meta">
            <span className="synos-blog-post-tag">{post.tag}</span>
            <span className="synos-blog-post-date">{formatDate(post.publishedAt)}</span>
            <span className="synos-blog-post-read">{post.readMinutes} MIN READ</span>
          </div>
          <h1 className="synos-blog-post-title">{post.title}</h1>
          <p className="synos-blog-post-lede">{post.excerpt}</p>
          <span className="synos-blog-post-author">By {post.author}</span>
        </header>

        <div className="synos-blog-post-body">
          {post.body.map((block, i) => renderBlock(block, i))}
        </div>
      </article>
    </SynosBlogShell>
  );
}
