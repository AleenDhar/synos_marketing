# Synos Character Sheets — Locked Cast

This is the source of truth for every character on the marketing site and in every Veo generation. **Each character has a full 3-view sheet (front / three-quarter / profile) used as the canonical reference for all downstream generations.**

---

## How to use this file

1. **Generate the 3-view sheet for each character first.** Use Midjourney v7 (best aesthetic) or Nano Banana (best identity lock). Run 4 takes per character, pick the one with the strongest pose-to-pose consistency.
2. **Once locked, save 3 separate crops:** front view 512×512, three-quarter view 512×512, profile view 512×512. These are your Veo "ingredient" references.
3. **Paste the consistency token** (italicized line under each character) into every Veo / image prompt that uses that character. Treat it as the character's name in the system from now on.
4. **Apply the sheet framing block (below) at the top of every character prompt.** This is what fixes the bottom-cut problem and locks the 3-view layout.

---

## SHEET FRAMING BLOCK (v3) — paste at the top of every character prompt

> ### CHARACTER REFERENCE SHEET — FRAMING & FORM
> Character reference sheet, three views side by side in a single composition: front-facing portrait on the left, shallow three-quarter profile facing left in the center, side profile facing left on the right. Same character in all three views with identical features, hair, wardrobe, accessories, and prop.
>
> Each view rendered as a mid-torso portrait framed from the top of the hair down to the upper waist, with 15–20% empty background space below the lowest visible point of the garment in every view. Identical scale, headroom, and baseline across all three views. The character's primary garment falls in soft loose folds with the bottommost edge at roughly 80–85% down each view, clear background visible below. No flat horizontal cut, no straight bottom hem, no character ending at the chest in any view. Both shoulders fully visible per view. Headroom 5–10% above the highest point of hair or headwear.
>
> 2D cel-shaded anime, bold black ink linework with weight variation, hard-edged two-tone cel shading, glossy single hair highlight band per view, no gradients, no airbrush. Even neutral studio lighting from upper-left across all three views, soft consistent shadows, identical light direction in every view. Flat single-color background filling all three views uniformly. Sheet aspect ratio 3:1 horizontal (three roughly-square views laid out side by side), sharp 90-degree corners on the overall sheet boundary.
>
> Photo-quality identity consistency between the three poses — same face, same eyes, same wardrobe details, same color values, same prop position. Neutral closed-mouth focused expression in every view — alert, not sleepy, not smug. Neo-Edo cyber-samurai aesthetic.
>
> No background scenery, no full body in any view, no front-facing action pose, no modern brand logos, no photorealism, no Western cartoon proportions, no chibi, no oversized eyes, no hard horizontal cut at the bottom of any view, no prop crossing the face in any view, no view drifting in style or color from the others.
>
> ### CHARACTER
> *[paste character-specific descriptor below]*

---

## Universal style rules (already encoded above)

- **Linework:** clean vector-like ink lines, fully closed shapes. Weight variation: thicker outer silhouette (~2.5px equiv), medium internal forms, thin interior details. Line color near-black `#0F0F12`.
- **Shading:** cel-shading only. Two tones per surface max (base + one shadow). Hard-edged shadows, no gradients, no airbrush.
- **Hair:** stylized chunky strands. Single glossy highlight band per character, identical position across the 3 views.
- **Light source:** consistent — top-left, soft. Shadows fall lower-right.
- **Expression:** narrow alert focused eyes, neutral closed-mouth. *Calm and focused, not sleepy, not smug.*
- **Wardrobe rule:** every character mixes one traditional element + one modern element.
- **Prop rule:** every character carries one prop, held at chest or resting on shoulder, never in front of the face. Same prop in same position across all 3 views.
- **Palette rule:** 3–4 dominant colors max + neutral background + one bold accent.

**Approved background palette:**
- Warm off-white `#E8E6DD`
- Cool light gray `#C8C9C5`
- Neutral mid-gray `#9BA0A2`
- Deep navy `#1F2C45`
- Oxblood red `#A02828`
- Charcoal `#2A2A2A`

---

## THE CAST — 9 LOCKED CHARACTERS (3-VIEW SHEETS)

---

### 1. KENJI — Samurai BDR (Sales)

**Appears in:** Hero, Chat Preview, Feature Grid, Comparison, Final CTA. **Highest-leverage character — lock him first and hardest.**

**Full sheet prompt:**

> *(sheet framing block at top — see above)*
>
> Male, late twenties, lean build, warm tan skin tone `#D9A77E` with cool shadow tone in all three views. Short undercut hairstyle, ink-black hair with a single platinum-silver streak running through the front, glossy hard-edged anime hair highlight band visible in the same position across all three views. Sharp jawline, narrow alert eyes — calm and focused, not sleepy, not smug — with deep indigo irises and a single highlight dot. One small thin scar bisecting the left eyebrow, visible in front and three-quarter views, partially visible in profile.
>
> Wearing a deep indigo haori with oxblood-red interior lining visible at the open collar, layered over a flat black hoodie. The haori hangs open with two visible front panels falling asymmetrically into the lower portion of each view in soft loose folds. Black hachimaki headband tied across the forehead with a small red kanji "営" stamped on the front, kanji visible in front and three-quarter views, the headband knot visible at the side in profile.
>
> Red-cloth-wrapped katana resting diagonally over the right shoulder in all three views, identical wrapping pattern across views, the wrapping textured but flat-shaded.
>
> Background: warm off-white `#E8E6DD` filling all three views uniformly. Accent color: oxblood red.

**Consistency token:**
> *Kenji, late-20s lean man, warm tan skin, ink-black undercut with single platinum streak, narrow alert indigo eyes, small scar on left eyebrow, indigo haori with oxblood lining over black hoodie, black hachimaki with red kanji 営, red-wrapped katana on right shoulder, neutral closed-mouth expression.*

**Avoid:** smug expression, sleepy expression, identity drift between views, multiple hair highlights per view, gradient shading, action pose, oversized eyes, Western cartoon proportions, modern brand logos, photorealism, hard horizontal cut at bottom of any view.

---

### 2. DAIKI — Monk Code Reviewer (Engineering)

**Appears in:** How It Works, Chat Preview (cameo), Feature Grid, Final CTA.

**Full sheet prompt:**

> *(sheet framing block at top)*
>
> Male, mid-thirties, calm broad face, peach-warm skin tone `#EBC4A4` with soft cool shadow in all three views. Shaved bald head with a faint stubble shadow, no hair highlight needed, dome of the head visible in all three views with consistent shape. Modern minimalist black wireframe round glasses sitting low on the nose, visible in front and three-quarter views, side temple-arm visible in profile. Narrow contemplative eyes, neutral closed-mouth expression, alert focused gaze — not sleepy.
>
> Wearing a saffron-orange monk robe with one shoulder bare (the right shoulder), layered over a flat black graphic t-shirt with a small white mon family crest printed at the collarbone, crest visible in front and three-quarter views. The robe drapes in soft folds into the lower portion of each view, fabric falling asymmetrically with visible drape lines.
>
> Oversized matte-black wireless headphones resting around his neck in all three views, cushions visible, headphone band passing behind the back of the head visible in profile. Wooden prayer beads with dark amber stones wrapped around the right wrist, partially visible at the lower edge of front and three-quarter views.
>
> Background: cool light gray `#C8C9C5` filling all three views uniformly. Accent color: saffron orange.

**Consistency token:**
> *Daiki, mid-30s monk, peach-warm skin, shaved bald head, black round wireframe glasses, narrow alert eyes, saffron robe with right shoulder bare over black t-shirt with white mon crest, oversized matte-black headphones around neck, amber prayer beads on right wrist, neutral closed-mouth expression.*

**Avoid:** stereotyped religious caricature, smiling broadly, hair on head in any view, ornate robes, identity drift between views, modern brand logos, photorealism, soft gradients, hard horizontal cut at bottom of any view.

---

### 3. YUNA — Ronin Recruiter (HR)

**Appears in:** How It Works (cameo), Chat Preview (cameo), Feature Grid, Comparison, Final CTA.

**Full sheet prompt:**

> *(sheet framing block at top)*
>
> Female, late twenties, slim build, pale cool skin tone `#F2D9C2` with subtle cool gray shadow across all three views. Short messy bob hairstyle in saturated mint-green, glossy hard-edged anime hair highlight band visible in matching position across views, two longer strands framing the face in front and three-quarter views, hairline visible in profile.
>
> Sharp narrow alert eyes — focused and direct, not sleepy — with bright teal irises and a single highlight dot per eye. A single small red kanji "雇" face tattoo just below the outer corner of the right eye, visible in front and three-quarter views, partially visible in profile.
>
> Wearing a fur-lined dark gray mantle draped over the shoulders, layered over an oversized flat black hoodie. The mantle falls into soft folds in the lower portion of each view with the fur trim visible along the drape line. Black snapback cap worn slightly tilted back, with a small white mon family crest embroidered on the front of the cap, crest visible in front view, cap brim visible in three-quarter and profile views.
>
> Holding a rolled paper scroll horizontally at chest level with both hands in all three views, scroll wrapped with a red ribbon, scroll position identical across views.
>
> Background: deep navy `#1F2C45` filling all three views uniformly. Accent color: mint-green hair / red ribbon.

**Consistency token:**
> *Yuna, late-20s slim woman, pale cool skin, mint-green messy bob with face-framing strands, sharp teal eyes, small red kanji 雇 tattoo under right eye, gray fur-lined mantle over black hoodie, black snapback with white mon crest, holding red-ribboned scroll horizontally at chest with both hands, neutral closed-mouth expression.*

**Avoid:** chibi proportions, oversized eyes, exaggerated cuteness, multiple hair highlights, sexualization, identity drift between views, modern brand logos, photorealism, gradient hair, hard horizontal cut at bottom of any view.

---

### 4. MEI — Witch (Data / Analytics)

**Appears in:** Feature Grid, Final CTA, Templates roster.

**Full sheet prompt:**

> *(sheet framing block at top)*
>
> Female, early twenties, slender, pale cool skin tone `#F2D9C2` with subtle violet shadow across all three views. Lavender hair in two long low braids draped over the shoulders, each tied with a violet ribbon, glossy single hair highlight along the top of the head visible across views, both braids visible in front and three-quarter views, the rear braid silhouette visible in profile. Anime-narrow violet eyes (slightly larger than other characters but not chibi), single highlight dot per eye, neutral closed-mouth expression.
>
> Wearing a dark plum kosode robe layered under a chunky cream cable-knit oversized cardigan that drapes in soft heavy folds into the lower portion of each view, knit texture visible in the line work, drape lines asymmetric per view. Small black witch's pointed hat tilted forward on the head with a violet hat band matching the ribbons, hat tip visible in all three views, brim shape consistent.
>
> Holding a worn straw broom diagonally over the right shoulder in all three views, broom handle textured wood, bristles cleanly ink-lined, broom angle identical across views.
>
> Background: deep navy `#1F2C45` filling all three views uniformly. Accent color: lavender.

**Consistency token:**
> *Mei, early-20s slender woman, pale cool skin, lavender hair in two long low braids with violet ribbons, anime-narrow violet eyes, dark plum kosode under cream cable-knit oversized cardigan, small black witch's hat tilted forward with violet band, straw broom diagonally over right shoulder, neutral closed-mouth expression.*

**Avoid:** chibi proportions, oversized eyes beyond anime narrow, sexualization, identity drift between views, soft gradients, modern brand logos, photorealism, hard horizontal cut at bottom of any view.

---

### 5. REN — Fox-spirit (Customer Success)

**Appears in:** Hero, Final CTA, Templates roster.

**Full sheet prompt:**

> *(sheet framing block at top)*
>
> Androgynous, early twenties, slim build, soft pale skin tone `#F2D9C2` with a faint pink fox-mark blush dusted across the bridge of the nose visible in front and three-quarter views, three small whisker dots per cheek inked finely visible across views. White-silver shoulder-length hair with one glossy hard-edged highlight band, hair parted to one side, hair silhouette consistent across views.
>
> Two small auburn fox ears emerging from the top of the hair, ears tipped in white, both ears visible in front view, the near ear and partial far ear visible in three-quarter, near ear visible in profile.
>
> Anime-narrow amber eyes with a single highlight dot per eye, neutral closed-mouth expression with a faint hint of curiosity.
>
> Wearing a white kosode underlayer, layered beneath a burnt-orange varsity bomber jacket with cream sleeve cuffs. The jacket falls in soft folds into the lower portion of each view with visible drape and the cream cuffs catching light.
>
> Holding a folded paper crane in one cupped hand at chest level in all three views, crane finely line-worked, paper crane angle identical across views.
>
> Background: warm off-white `#E8E6DD` filling all three views uniformly. Accent color: burnt orange.

**Consistency token:**
> *Ren, early-20s androgynous fox-spirit, soft pale skin with pink fox-mark blush across nose and three whisker dots per cheek, white-silver shoulder-length hair, two small auburn fox ears tipped white, narrow amber eyes, white kosode under burnt-orange varsity bomber jacket with cream cuffs, folded paper crane in cupped hand at chest, neutral closed-mouth expression.*

**Avoid:** full furry body, exaggerated animal features, chibi proportions, oversized eyes, sexualization, identity drift between views, soft gradients, modern brand logos, hard horizontal cut at bottom of any view.

---

### 6. HANA — Ninja (Security / Access Control)

**Appears in:** How It Works, Chat Preview (cameo), Pricing, Final CTA, Templates roster.

**Full sheet prompt:**

> *(sheet framing block at top)*
>
> Female, mid-twenties, athletic build, deep brown skin tone `#8B5A3C` with cool slate shadow across all three views. Jet-black hair pulled into a tight high ponytail wrapped in a black ribbon, glossy hard-edged hair highlight along the top of the head, ponytail silhouette visible behind the head in front view, falling to the side in three-quarter, fully visible in profile.
>
> Sharp narrow alert eyes with dark brown irises and a single highlight dot per eye. Black cloth half-mask covering the nose and mouth, tied at the back of the head with visible knot in three-quarter and profile views, mask front visible in front view with subtle fabric folds.
>
> Wearing a charcoal ninja gi underlayer, layered beneath a cropped black bomber jacket. The jacket and gi drape in soft folds into the lower portion of each view, asymmetric drape lines visible.
>
> Holding the curved sickle-blade of a kusarigama at chest level with the right hand in all three views, blade pointed downward and inward toward the body and away from the face, weighted iron chain coiling loosely over her left shoulder, ink-lined chain links visible. Blade and chain position identical across views. Blade never crosses the face in any view.
>
> Background: charcoal `#2A2A2A` filling all three views uniformly. Accent color: cold steel-gray.

**Consistency token:**
> *Hana, mid-20s athletic woman, deep brown skin, jet-black high ponytail with black ribbon, sharp dark eyes, black cloth half-mask covering nose and mouth tied at back, charcoal ninja gi under cropped black bomber jacket, holding kusarigama sickle-blade at chest with chain coiling over left shoulder, blade pointed downward and inward, neutral focused expression.*

**Avoid:** sexualization, exposed midriff, oversized eyes, blade crossing face in any view, identity drift between views, modern brand logos, soft gradients, hard horizontal cut at bottom of any view.

---

### 7. GORO — Oni (Operations / Heavy Lifting)

**Appears in:** Hero, Comparison, Pricing, Final CTA, Templates roster.

**Full sheet prompt:**

> *(sheet framing block at top)*
>
> Male, large powerful frame visible in the mid-torso crop, blue-gray spirit skin tone `#5E7886` with cool slate shadow across all three views. Two short black ceremonial horns emerging from a wild messy mane of fire-orange hair, both horns visible in front view, both horns visible at offset angles in three-quarter, near horn fully visible and far horn partially visible in profile. Hair sweeping back from the forehead with a glossy hard-edged highlight band, hair silhouette consistent across views.
>
> A single small white fang visible at the corner of the closed mouth in front and three-quarter views, partially visible in profile. Narrow alert eyes with bright gold irises and a single highlight dot per eye, neutral focused expression.
>
> Wearing an open oxblood-red haori with black trim worn loosely over a bare muscular chest, with a single black hand-wrap binding across the right shoulder and bicep, hand-wrap visible across all three views in matching position. The haori hangs open and drapes in soft heavy folds into the lower portion of each view, fabric falling asymmetrically.
>
> A studded iron kanabō (spiked club) resting diagonally over the right shoulder in all three views, studs ink-lined cleanly, club position identical across views.
>
> Background: cool light gray `#C8C9C5` filling all three views uniformly. Accent color: oxblood red.

**Consistency token:**
> *Goro, large-frame oni man, blue-gray spirit skin, two short black horns in fire-orange messy hair, narrow gold eyes, single small white fang at mouth corner, open oxblood-red haori with black trim over bare chest with black hand-wrap on right shoulder, studded iron kanabō over right shoulder, neutral focused expression.*

**Avoid:** aggressive snarl, glowing eyes, demonic exaggeration, full muscle realism, identity drift between views, modern brand logos, photorealism, hard horizontal cut at bottom of any view.

---

### 8. UNIT-8 — Robot Monk (DevOps / Infrastructure)

**Appears in:** How It Works, Final CTA, Templates roster.

**Full sheet prompt:**

> *(sheet framing block at top)*
>
> Genderless humanoid robot, brushed-steel skin plating with subtle visible panel lines along the jaw, neck, and shoulders consistent across all three views, no hair. Smooth domed head with two short black ceremonial horns mounted in the position an oni's would be, both horns visible in front view, both visible at offset angles in three-quarter, near horn visible in profile.
>
> A single horizontal visor slit running across the eye line, glowing faint cyan with a single highlight dot, visor visible as a horizontal band in front view, visible at angle in three-quarter, visible as a short edge segment in profile.
>
> Modern matte-black surgical face mask covering the lower face and tied behind the head where the ears would be, fabric folds visible at the cheek line in front and three-quarter views, knot visible at the back in profile.
>
> Draped saffron-orange monk shawl falling diagonally across the chest from the left shoulder down past the right side, exposing the right shoulder plating in all three views, shawl drape direction consistent. The shawl drapes in soft folds into the lower portion of each view, fabric falling asymmetrically with visible drape lines.
>
> Wooden prayer beads with dark amber stones hanging around the neck in all three views, beads cleanly ink-lined.
>
> Background: deep navy `#1F2C45` filling all three views uniformly. Accent color: cyan visor glow.

**Consistency token:**
> *Unit-8, genderless humanoid robot, brushed-steel plating with panel lines, smooth domed head with two short black horns, horizontal cyan visor slit across eyes, matte-black surgical face mask covering lower face, saffron monk shawl draped diagonally exposing right shoulder, amber prayer beads around neck, calm neutral pose.*

**Avoid:** humanoid skin or facial features beyond visor, glowing eyes beyond cyan slit, full mecha rendering, exposed wires, identity drift between views, modern brand logos, photorealism, hard horizontal cut at bottom of any view.

---

### 9. SORA — Kiseru-pipe agent (Strategy / Senior Advisor)

**Appears in:** Hero, Pricing, Final CTA, Templates roster.

**Full sheet prompt:**

> *(sheet framing block at top)*
>
> Male, late thirties, weathered warm tan skin tone `#D9A77E` with strong jaw stubble shaded as soft dotted texture across all three views, faint thin scar running along the right side of the jawline visible in front and three-quarter views. Slate-gray hair tied in a small low topknot at the back of the head with a few stray strands at the temple, glossy hard-edged hair highlight along the top, topknot silhouette visible at the back in front view, visible at angle in three-quarter, fully resolved in profile.
>
> Narrow tired-but-alert eyes with dark teal irises and a single highlight dot per eye, neutral closed-mouth expression with a faint world-weary calm.
>
> Wearing a dark teal kosode underlayer, layered beneath a brown haori with thick cream-colored fur trim along the collar that frames the neck in all three views. The haori drapes in soft heavy folds into the lower portion of each view, fur trim visible along the drape line, fabric falling asymmetrically.
>
> A long thin brass kiseru pipe held lightly between the teeth at the corner of the mouth in all three views, a single thin curl of pale gray smoke rising upward from the bowl, smoke fading before it reaches the top edge of any view, smoke never crossing the face. Pipe position identical across views.
>
> Background: warm off-white `#E8E6DD` filling all three views uniformly. Accent color: teal.

**Consistency token:**
> *Sora, late-30s weathered man, warm tan skin with jaw stubble and thin scar along right jawline, slate-gray hair in small low topknot with temple strands, narrow tired-but-alert dark teal eyes, dark teal kosode under brown haori with thick cream fur collar trim, brass kiseru pipe at corner of mouth with thin curl of smoke rising, neutral closed-mouth expression.*

**Avoid:** smiling, exaggerated cool-guy posing, smoke crossing face or filling frame, identity drift between views, modern brand logos, photorealism, soft gradients, hard horizontal cut at bottom of any view.

---

## Quality checklist (before approving any sheet)

- [ ] Three views side by side: front / three-quarter (facing left) / profile (facing left)
- [ ] Identical scale, headroom, and baseline across all three views
- [ ] Same face, same eyes, same wardrobe in every view (no identity drift)
- [ ] Same prop in same position across all three views
- [ ] Mid-torso crop with 15–20% empty background below the lowest garment edge in every view
- [ ] No flat horizontal cut at bottom of any view
- [ ] Both shoulders fully visible in every view
- [ ] Headroom 5–10% above hair/headwear in every view
- [ ] Flat single-color background filling all three views uniformly
- [ ] Clean ink linework with weighted outer silhouette, consistent across views
- [ ] Two-tone cel shading, no gradients, consistent shadow direction across views
- [ ] One traditional + one modern wardrobe element present in every view
- [ ] Neutral closed-mouth focused expression in every view — alert, not sleepy, not smug
- [ ] One bold accent color carrying the composition
- [ ] Sheet aspect ratio roughly 3:1 horizontal with sharp 90° corners on the overall boundary
- [ ] Reads as part of the same set when placed next to other character sheets

---

## Surgical fix recipes

**If one view drifts in identity (different face, wrong wardrobe):**
In Nano Banana, paste the sheet image and use:
> Regenerate the [front/three-quarter/profile] view only so that the character's face, hair, wardrobe, and prop match the other two views exactly. Same skin tone, same eye shape, same hair color, same garment colors and patterns, same prop in the same position. Do not change the other two views.

**If the bottom is cut flat in one or more views:**
> Extend the bottom of the [garment] downward in [view name] so it drapes naturally and tapers off in soft folds rather than ending in a flat horizontal cut. Add 15–20% empty background space below the lowest point of the garment. Keep everything else identical — same character, same pose, same colors, same line weight, same accessories, same background color. Do not change the other views.

**If the prop drifts in position:**
> In all three views, place the [prop] in the same position relative to the character's body — [specify exact position from the consistency token]. Keep the prop angle, size, and styling identical across views.

---

## How the sheet feeds Veo

Once a sheet is approved, this is the standard handoff to Veo 3.1 *Ingredients to Video*:

1. Crop the front-view, three-quarter, and profile views into three separate 512×512 PNGs.
2. For any Veo prompt featuring this character, attach **all three crops** as ingredients (Veo 3.1 supports up to 3 references per generation).
3. Paste the consistency token into the prompt text alongside the scene-specific instructions.
4. Add to the prompt: *"Character must match the attached reference sheet exactly — same face, hair, skin tone, wardrobe, accessories, and prop."*

This combination (3 reference views + token + explicit match instruction) is what locks identity across all 8 marketing site loops.

---

## Tier-2 roster fillers (single-portrait only — for Templates grid background)

For Section 6 (Templates) you'll want 10–15 more characters to populate the 80-agent grid visually. These don't need full 3-view sheets because they appear small in the background. Use the **single-portrait variant** of the framing block (drop the "three views side by side" instruction, keep everything else; aspect 1:1 instead of 3:1).

| Role | Descriptor |
|---|---|
| BD agent | Female ronin, charcoal hair in a high topknot, pale cool skin, dark green haori over a red turtleneck, scroll case strapped to chest, scarred lip. |
| Marketing agent | Male yokai with two-tone skin (left half pale, right half navy), shaved temples and a long lavender braid, gold tooth, embroidered haori with kanji "宣". |
| Finance agent | Older female monk, deep brown skin, white shaved head, gold-rim monocle, dark robe over a white henley, abacus prop at chest. |
| Legal agent | Male oni, deep crimson skin, single horn, slick black hair pulled back, black haori with white pinstripe, unfurled scroll at chest. |
| Research agent | Androgynous yokai with long jet-black hair partially covering one eye, pale skin, dark academic-style hakama, stack of books at chest. |
| QA agent | Female ninja, olive skin, twin braids, red mask, dark gi with reflective metallic threads, holding a small lantern at chest. |
| Design agent | Female witch with rose-gold hair, freckles, pastel kimono with paint-splatter pattern, ink brush in hand. |
| Growth agent | Male fox-spirit with three tails (visible behind shoulders), platinum hair, athletic-style haori, holding a bow but no arrow. |
| Support agent | Female monk, peach skin, soft smile (rare exception), saffron robe with hoodie, headphones around neck, holding a teacup at chest. |
| PM agent | Male ronin, gray-streaked hair, calm expression, navy haori over white turtleneck, holding a clipboard-style scroll. |

These can be generated as single 1:1 portraits using the descriptor + the framing block in single-view mode. Identity drift matters less for these because they appear at small scale in the background of the roster grid.
