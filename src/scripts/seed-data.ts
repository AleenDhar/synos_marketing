import { getPayload } from 'payload'
import config from '../payload.config'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const INTEGRATIONS = [
  { name: 'Gmail', icon: 'https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png', slug: 'gmail', description: 'Google Gmail integration' },
  { name: 'Slack', icon: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg', slug: 'slack', description: 'Slack communication integration' },
  { name: 'Discord', icon: 'https://cdn.worldvectorlogo.com/logos/discord-6.svg', slug: 'discord', description: 'Discord chat integration' },
  { name: 'Teams', icon: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg', slug: 'teams', description: 'Microsoft Teams integration' },
  { name: 'Telegram', icon: 'https://cdn.worldvectorlogo.com/logos/telegram-1.svg', slug: 'telegram', description: 'Telegram messaging integration' },
  { name: 'WhatsApp', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', slug: 'whatsapp', description: 'WhatsApp messaging integration' },
  { name: 'Notion', icon: 'https://cdn.worldvectorlogo.com/logos/notion-2.svg', slug: 'notion', description: 'Notion workspace integration' },
  { name: 'Stripe', icon: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg', slug: 'stripe', description: 'Stripe payment integration' },
  { name: 'HubSpot', icon: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg', slug: 'hubspot', description: 'HubSpot CRM integration' },
  { name: 'Salesforce', icon: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', slug: 'salesforce', description: 'Salesforce CRM integration' },
  { name: 'Jira', icon: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg', slug: 'jira', description: 'Jira project management' },
  { name: 'Airtable', icon: 'https://cdn.worldvectorlogo.com/logos/airtable.svg', slug: 'airtable', description: 'Airtable database integration' },
  { name: 'Trello', icon: 'https://cdn.worldvectorlogo.com/logos/trello.svg', slug: 'trello', description: 'Trello board integration' },
  { name: 'Shopify', icon: 'https://cdn.worldvectorlogo.com/logos/shopify.svg', slug: 'shopify', description: 'Shopify e-commerce integration' },
  { name: 'QuickBooks', icon: 'https://cdn.worldvectorlogo.com/logos/quickbooks-logo.svg', slug: 'quickbooks', description: 'QuickBooks accounting integration' },
  { name: 'Zendesk', icon: 'https://cdn.worldvectorlogo.com/logos/zendesk-1.svg', slug: 'zendesk', description: 'Zendesk support integration' },
  { name: 'Intercom', icon: 'https://cdn.worldvectorlogo.com/logos/intercom-2.svg', slug: 'intercom', description: 'Intercom customer platform' },
  { name: 'Linear', icon: 'https://cdn.worldvectorlogo.com/logos/linear-1.svg', slug: 'linear', description: 'Linear issue tracking' },
  { name: 'GitHub', icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg', slug: 'github', description: 'GitHub developer platform' },
  { name: 'Zoom', icon: 'https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg', slug: 'zoom', description: 'Zoom video conferencing' },
]

const TEMPLATES = [
  { name: 'Customer Support Agent', slug: 'customer-support-agent', description: 'Answers tickets, routes issues, escalates edge cases, follows up — across email and Slack.' },
  { name: 'Lead Research & Enrichment', slug: 'lead-research-enrichment', description: 'Finds prospects, enriches contact data, scores leads, and drops results into your CRM automatically.' },
  { name: 'Content Publisher', slug: 'content-publisher', description: 'Drafts, schedules, and publishes content across channels on autopilot.' },
  { name: 'Daily Standup Collector', slug: 'daily-standup-collector', description: 'Collects async standups from your team on Slack or Teams. Summarizes. Flags blockers.' },
  { name: 'Invoice & Payment Tracker', slug: 'invoice-payment-tracker', description: 'Monitors Stripe and accounting tools. Flags overdue invoices. Sends payment reminders.' },
  { name: 'Meeting Prep Agent', slug: 'meeting-prep-agent', description: 'Pulls attendee info, past meeting notes, open action items, and relevant docs before every meeting.' },
  { name: 'IT Helpdesk Agent', slug: 'it-helpdesk-agent', description: 'Handles password resets, access requests, and common IT tickets on Teams or Slack.' },
  { name: 'Employee Onboarding Agent', slug: 'employee-onboarding-agent', description: 'Walks new hires through onboarding checklists, answers policy questions, schedules intro meetings.' }
]

const TESTIMONIALS = [
  { 
    quote: "We replaced 3 manual workflows in week one. Our ops team got 15 hours back per week.",
    role: "VP of Operations",
    company: "TechFlow"
  },
  { 
    quote: "Deployed a support agent on Teams in under 10 minutes. It resolved 40% of tickets on day one.",
    role: "Head of IT",
    company: "CloudScale"
  },
  { 
    quote: "The integration library is unreal. We connected SAP, Salesforce, and Slack in one agent.",
    role: "CTO",
    company: "EnterpriseAI"
  }
]

async function downloadImage(url: string, dest: string): Promise<void> {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  })
  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(dest))
      .on('finish', () => resolve())
      .on('error', (e: Error) => reject(e))
  })
}

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seed started...')

  // 1. Seed Integrations
  console.log('Seeding Integrations...')
  for (const item of INTEGRATIONS) {
    const ext = path.extname(item.icon) || '.png'
    const fileName = `${item.slug}${ext}`
    const filePath = path.resolve(dirname, fileName)

    try {
      await downloadImage(item.icon, filePath)
      
      const media = await payload.create({
        collection: 'media',
        data: {
          alt: item.name,
        },
        file: {
          data: fs.readFileSync(filePath),
          name: fileName,
          mimetype: ext === '.svg' ? 'image/svg+xml' : 'image/png',
        },
      })

      await payload.create({
        collection: 'integrations',
        data: {
          name: item.name,
          slug: item.slug,
          description: item.description,
          logo: media.id,
        },
      })

      fs.unlinkSync(filePath)
    } catch (error) {
      console.error(`Failed to seed integration ${item.name}:`, error)
    }
  }

  // 2. Seed Templates
  console.log('Seeding Templates...')
  for (const item of TEMPLATES) {
    await payload.create({
      collection: 'templates',
      data: {
        name: item.name,
        slug: item.slug,
        description: item.description,
      },
    })
  }

  // 3. Seed Testimonials
  console.log('Seeding Testimonials...')
  for (const item of TESTIMONIALS) {
    await payload.create({
      collection: 'testimonials',
      data: {
        name: 'Anonymous Client',
        role: item.role,
        company: item.company,
        quote: item.quote,
      },
    })
  }

  console.log('Seed completed successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
