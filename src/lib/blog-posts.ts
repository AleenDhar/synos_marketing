/**
 * Local blog post store. Edit this file to add or update posts.
 * Move to Payload's Posts collection later if you want CMS-managed.
 */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date
  readMinutes: number;
  author: string;
  tag: string;
  /** Body is an array of typed blocks rendered by SynosBlogPost. */
  body: BlogBlock[];
};

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'callout'; text: string };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'product-hunt-launch',
    title: "We're launching on Product Hunt soon — and we'd love your support.",
    excerpt:
      "After months heads-down building Synos, we're getting ready to ship to the world. Here's what we're launching with, why we built it, and how you can be there on day one.",
    publishedAt: '2026-05-12',
    readMinutes: 4,
    author: 'The Synos Team',
    tag: 'LAUNCH',
    body: [
      {
        type: 'p',
        text: "We've been building Synos in semi-public for a while now — talking to early users, breaking things, fixing things, breaking them again. Today we're telling you: we're going on Product Hunt soon, and we want you there.",
      },
      { type: 'h2', text: 'What is Synos?' },
      {
        type: 'p',
        text: "Synos lets you hire AI agents that work like real employees. Not chatbots. Not workflow builders that take a weekend to wire up. Real teammates that join your Slack, log into Gmail, click around Salesforce, run scripts in their own sandbox, and ship work while you sleep.",
      },
      {
        type: 'p',
        text: "You give them a role and a goal. They do the rest — autonomously, with full audit trails, across the same tools your humans already use.",
      },
      { type: 'h2', text: "What we're launching with" },
      {
        type: 'ul',
        items: [
          '80+ pre-built agent templates — sales SDRs, lead researchers, support agents, recruiters, and more.',
          '1,000+ integrations. Connect Slack, Gmail, GitHub, Notion, your CRM, anything. One-click OAuth.',
          'Each agent gets its own persistent browser + Linux sandbox — they research, fill forms, run code.',
          'Native Slack presence — @mention an agent, get a structured reply with the data, not just a summary.',
          "Build-by-talking — describe an internal app, your agent ships a live deployed URL.",
          'Tier system — every agent has XP and levels up as it ships. Hire the ones that earn their badge.',
        ],
      },
      { type: 'h2', text: 'Why we built this' },
      {
        type: 'p',
        text: 'We were tired of AI products that promised everything and shipped chatbots. Tired of "agent" frameworks that needed a week of glue code before they could do anything useful. Tired of waiting for someone else to build the thing we actually wanted to use ourselves.',
      },
      {
        type: 'quote',
        text: 'Agents should hire like employees, work like employees, and be paid for outcomes — not for tokens consumed.',
        cite: "Synos's founding thesis",
      },
      {
        type: 'p',
        text: "So we built Synos. Not a chat wrapper. Not another framework. A platform where you can stand up a real AI workforce in minutes — with the same hiring, briefing, and reviewing patterns you'd use with humans.",
      },
      { type: 'h2', text: "How you can support us" },
      {
        type: 'ol',
        items: [
          'Subscribe to the waitlist on synosai.com — we\'ll DM you the Product Hunt link 24 hours before launch.',
          "Tag a friend who's drowning in repetitive work. They probably need an AI employee or two.",
          "Show up on launch day and tell us what you actually want to hire next.",
        ],
      },
      {
        type: 'callout',
        text: "Be there on launch day. We'll send the PH link to the waitlist 24h before it goes live.",
      },
      { type: 'h2', text: 'Where we go from here' },
      {
        type: 'p',
        text: "Product Hunt is a milestone, not the destination. We have a long list of agents we want to ship next — finance ops, recruiting, customer success, devrel. If you have an agent you wish existed, tell us. We're listening.",
      },
      {
        type: 'p',
        text: "未来を、仕組みに。 Engineer the future. See you on launch day.",
      },
    ],
  },
];

export function getBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
