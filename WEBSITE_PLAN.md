# Synos Marketing Website — Plan & Design

## Brand foundation

**Positioning**
> For startups that can't hire fast enough, Synos is the AI coworker platform — you hire, you don't build.

**Single message (the only one)**
> **Many agents. One team. Yours.**

This is said zero times in copy and eight times through composition. Every section shows multiple agents on screen so the founder feels the variety before they read a word.

**Voice rules**
- Hire / coworker / teammate metaphor everywhere — never "automation," "workflow," "agent flow."
- Concrete over abstract. Show the agent doing the thing.
- Founder-to-founder tone — reader is a 2–10 person team, not an enterprise buyer.
- Banned words: *unleash, revolutionize, empower, AI-powered, supercharge, cutting-edge.*

---

## Visual system

**Aesthetic:** Neo-Edo cyber-samurai — 2D cel-shaded anime, traditional Japanese folklore archetypes (samurai, ronin, monk, oni, witch, ninja, fox-spirit, robot monk) wearing modern street elements. Detailed in `CHARACTER_PROMPTS.md`.

**Three brand anchors that carry the site**
1. **Character lock.** Same faces, outfits, line weights across every section. Locked via the canonical character sheets.
2. **Lighting language.** Warm lantern light + flat colored backgrounds. Section 5 (Comparison) deliberately breaks this with cold fluorescents to make contrast pop.
3. **Motion language.** Slow, soft, lidded. Hair drifts, single breath rises, gentle prop motion, subtle blinks. Nothing whips, spins, or fast-cuts. *Calm competence* is the visual brand — stillness with intent reads as confidence.

**Color tokens (already in `page.tsx`)**
- Background: `#f5f0ea` (warm cream)
- Card: `#eee9e2`
- Accent: `#f04e23` (YC orange)
- Text primary: `#1a1a1a`
- Text secondary: `#6b6560`

---

## Animation approach

**Modular character vignettes, not a continuous story.** Each section has its own self-contained looping video (3–4s) that plays when the section enters the viewport. Triggered via `IntersectionObserver`, autoplay + loop.

**Why modular over scrubbed-scroll story:**
- Each loop is a standalone reusable asset (socials, decks, loading screens).
- A weak section can be replaced without breaking the rest.
- Cheaper to iterate — each section is its own A/B unit.
- No story arc to manage; characters carry the brand.

**No founder character on the page.** The user's mental model should be *"I am the hirer."* Showing a stand-in for them shifts that frame. Every section shows agents only.

---

## The 8 sections

### 1. HERO — *The lineup*

**Visual:** Wide horizontal composition. **7 agents standing in a loose row** under a row of paper lanterns. Each running its own subtle idle loop in parallel — Kenji's hair drifts, Daiki's prayer beads sway, Yuna's snapback catches a glint, Goro's shoulder rises with a slow breath, Mei's broom shifts, Ren's paper crane folds and unfolds, Sora's pipe curls thin smoke. Background: deep Neo-Edo office at night, warm lantern bokeh.

**Message carried by composition:** seven distinct personas alive on screen in 0.3 seconds = "many to choose from."

**Text overlay (minimal):** *Hire AI agents.* — three words, no verbs about platforms or automation.

**Cast:** Kenji, Daiki, Yuna, Goro, Mei, Ren, Sora.

**Loop length:** 4s.

---

### 2. HOW IT WORKS — *Materialize, Equip, Seat*

**Visual:** Triptych, three side-by-side panels.
- **Panel 1 (Pick):** Hana materializes from a lantern lighting up. Empty frame → lantern flares → ninja standing.
- **Panel 2 (Equip):** Unit-8 surrounded by 4–5 floating tool icons that orbit toward him and snap onto his shoulders/wrists like equipment.
- **Panel 3 (Work):** Daiki sitting at a desk, calmly typing. Taking a seat = the moment of being hired.

**Message:** uses three *different* characters across the three steps to subliminally reinforce "many." Hiring as a three-act ritual.

**Cast:** Hana, Unit-8, Daiki.

**Loop length:** 6s (each panel runs 2s in sequence, then loops together).

---

### 3. CHAT PREVIEW — *They reply*

**Visual:** Kenji at his desk in three-quarter profile. Floating chat panel beside him. Loop: incoming message bubble appears → Kenji reads (slight head tilt) → reply types itself in the panel → message sends → next message appears.

**Multi-agent thread maintained:** show 2–3 small avatar bubbles in the chat thread (Yuna, Daiki, Hana visible as participants). Implication: *Kenji is one of many, all working in your channels.*

**Cast:** Kenji primary; Yuna + Daiki + Hana as avatar cameos in chat UI.

**Loop length:** 4s.

---

### 4. FEATURE GRID — *Different agents, different powers*

**Visual:** Four character cards, each demonstrating a distinct capability:
- **Daiki** at a glowing code terminal, lines of light scrolling
- **Yuna** unfurling a scroll with names that animate onto it
- **Mei** stirring a small glowing data bowl, particles rising
- **Kenji** with a pulsing chat panel, message bubbles floating toward him

**Message:** four distinct archetypes, four distinct visual languages, all in the same Neo-Edo style.

**Cast:** Daiki, Yuna, Mei, Kenji.

**Loop length:** 3s per card, all running in parallel.

---

### 5. COMPARISON — *One person vs. a team*

**Visual:** Hard split frame.
- **Left half (cold):** Single faceless silhouette under fluorescents, dragging boxes around a flowchart whiteboard, peeling a sticky note off and putting it back. Frustrated loop.
- **Right half (warm):** **Three agents** — Kenji, Yuna, Goro — working *in coordination*. A scroll passes from Yuna to Kenji to Goro in a smooth handoff. Loop repeats.

**Message:** *one stressed human* vs. *a coordinated team.* The handoff reinforces that agents work *together*, not just in parallel.

**Cast:** Kenji, Yuna, Goro, anonymous human silhouette.

**Loop length:** 5s.

---

### 6. TEMPLATES — *The roster*

**Visual:** Wide shot of a vast Neo-Edo grand hall. **A grid of ~20 visible agent portraits at once** standing at attention, each running its own subtle idle loop in parallel — hair drifts, smoke curls, eyes blink, props shift. As the user scrolls within the section, more rows fade in from below to imply the full 80. Grid recedes into depth with lantern light.

**Message:** the moat made visible. No headline can sell "80 pre-built roles" the way a literal grid of 80 living characters can. Screenshot bait.

**Cast:** All 9 named + as many designed Tier-2 character variants as you have.

**Loop length:** 4s; rows reveal on scroll progress within the section.

---

### 7. PRICING — *Output, not hours*

**Visual:** Wide desk shot. **Three agents seated** — Goro, Hana, Sora — each with an empty surface in front of them. Loop: each agent finishes a task, a sealed scroll lands in their stack. Stacks grow visibly higher each loop cycle. **No clocks anywhere in frame.**

**Message:** three agents producing simultaneously communicates *"more agents = more output, simple math."* Growing stacks are the price metaphor. Absence of clocks is the punchline.

**Cast:** Goro, Hana, Sora.

**Loop length:** 4s.

---

### 8. FINAL CTA — *The team photo*

**Visual:** **All 9 named characters** in a loose two-row team-photo composition, lit warmly, each running its own idle loop in parallel. Empty space above for the CTA button to land. No founder. Just the team, alive, looking calm and ready.

**Message:** closing image of the page is *the team you can hire*, full stop. Page started with 7 (Hero); ends with 9 (CTA). Subliminal scale-up. The implied caption: *"They're waiting."*

**Cast:** Kenji, Daiki, Yuna, Mei, Ren, Hana, Goro, Unit-8, Sora.

**Loop length:** 5s.

---

## Production order

| Step | Output | Tool | Why this order |
|---|---|---|---|
| 1 | 9 character canonical portraits | Midjourney v7 / Nano Banana | Lock identity before any video. Source of truth for everything downstream. |
| 2 | Section 6 (Templates) — generate first as de-risk | Veo 3.1 Ingredients to Video | Hardest shot. 20+ characters in frame. If Veo can render this coherently, every other section is easy. |
| 3 | Section 1 (Hero lineup) | Veo 3.1 | Second hardest. 7 characters, single composition. |
| 4 | Sections 4, 5, 7 (multi-character medium-density) | Veo 3.1 | 3–4 characters each, manageable. |
| 5 | Sections 2, 8 (multi-character but staged) | Veo 3.1 | Triptych and team photo — easier because characters are spatially separated. |
| 6 | Sections 3 (single character) | Veo 3.1 | Easiest. Save for last. |
| 7 | Edit, encode, integrate | CapCut/Premiere + Next.js | Encode each loop H.265 + VP9 fallback. Wire into existing section components. |

**Budget estimate:** ~$30 in image gen credits + ~$80–120 in Veo credits (4 takes × 8 sections). Total under $200 to produce v1.

---

## Technical implementation

**Per-section component pattern:**
```tsx
<section ref={sectionRef} className="synos-section">
  <video
    ref={videoRef}
    src="/animations/section-1-hero.webm"
    poster="/animations/section-1-hero-poster.jpg"
    muted
    loop
    playsInline
    preload="metadata"
  />
  <div className="synos-section-content">{/* copy + CTA */}</div>
</section>
```

**Trigger pattern:** `IntersectionObserver` plays the video when the section is ≥30% in viewport, pauses when out. Reduces battery/CPU for offscreen videos.

**Encoding targets:**
- **Primary:** H.265/HEVC, ≤2MB per loop
- **Fallback:** VP9 .webm, ≤3MB per loop
- **Poster:** WebP, ~80KB
- **Resolution:** 1920×1080 source, served at responsive sizes via `<source media>` queries

**Mobile considerations:**
- Same loops, smaller resolution variants (720p)
- Static poster image as initial paint to avoid jank
- Defer all video loading to `whenIdle` after first paint
- Section 6 (Templates roster) on mobile: scrub through still frames instead of full video — lighter on bandwidth

**Accessibility:**
- All motion respects `prefers-reduced-motion` — fall back to static poster
- Captions/labels live in copy beside the video, not in the video itself
- No critical information conveyed by motion alone

---

## Asset inventory (what you need to produce)

**Character art** (see `CHARACTER_PROMPTS.md`):
- 9 canonical portrait images (one per named character)
- Optional: 3-view sheets for the 3 most-reused characters (Kenji, Daiki, Yuna) for tighter Veo consistency

**Setting art:**
- 1 Neo-Edo office establishing still (lantern-lit night, used as setting reference for Veo)
- 1 fluorescent corporate office still (for Section 5's left half — deliberately off-brand)

**Video loops:**
- 8 looping clips, one per section (3–6s each)
- Encoded in H.265 + VP9, with WebP posters

**Tier-2 roster fillers (optional, for Section 6):**
- 10–15 additional character portraits to give the 80-agent grid visual variety. Can use the same single-portrait template with new descriptors.

---

## What to test before shipping

1. **Section 6 (Templates) Veo gen** — if 20+ distinct characters in one frame falls apart, replace with a Lottie/After Effects composite of individual portraits stitched together.
2. **Hero loop on a real founder** — show the rendered hero to 3 founders. Ask one question: *"What does this company do?"* If they can't answer in one sentence, the composition isn't communicating.
3. **Mobile Hero performance** — 7 characters at 720p must load in under 1.5s on a mid-tier Android. If not, swap autoplay video for an animated WebP or Lottie fallback on mobile.
4. **Reduced motion fallback** — every section's static poster must communicate the same message as the loop.
