/* =============================================================================
   Minecraft Trend Radar — DATA FILE
   -----------------------------------------------------------------------------
   This is the ONLY file the daily/weekly trend agent edits. The dashboard
   (index.html) reads window.TREND_DATA and renders it. Don't rename the keys.

   HOW TO ADD A WEEK:
   1. Add the new week label (week-start, e.g. "Jun 8") to `weeks` (end of list).
   2. For every entity, push ONE new number onto its `buzz` and `interest`
      arrays (same order as `weeks`). Update `subs` if it changed.
   3. Update `updated`, and refresh `movers` (up / down / new) for the week.
   4. Add any brand-new name as a new entity object (fill earlier weeks with
      null so the chart shows it starting partway in).

   SCALES / FIELDS:
     buzz     0-10  editorial "how much are kids talking about this" score
     interest 0-100 Google Trends search interest (objective; est. until wired)
     subs     subscriber count in millions (number) or null if unknown
     about    ~3-sentence blurb shown in the click-through detail panel
     ip       "mojang" = official Mojang game content. Shown in a SEPARATE
              awareness-only group and EXCLUDED from the merch "Hot Now" list
              and from movers. Red Lava Toys cannot make merch of Mojang IP;
              we track it only so we can talk to customers about it.
     link     OPTIONAL exact URL (e.g. the creator's YouTube channel).
   ============================================================================= */

window.TREND_DATA = {
  updated: "2026-07-09",
  weeks: ["Jun 1", "Jun 29", "Jul 6"],    // week-start labels, oldest -> newest

  entities: [
    // ---- CREATORS (the "make my skin look like them" names) ----
    { name: "Aphmau", type: "Creator", subs: 25.9, buzz: [8, 9, 9], interest: [80, 87, 89], rising: true,
      about: "Aphmau (Jess) is one of the biggest kid-facing Minecraft creators (~25.9M subscribers) with 29.1B+ lifetime views and 257M monthly views as of July 2026. Summer 2026 retail: THREE concurrent SKUs — the Carnival Treats 6\" Mystery Plush (ASIN B0DFMSLZ4C), the Elemental Mystery Mini Figures (ASIN B0FK4J6DSW), and the new MeeMeows Collectors Case (10\" catface case, 8 mystery surprises incl. first collectable Aphmau Animated figure) — across 9+ major retailers (Amazon, Walmart, Target, Claire's, GameStop, Michaels, BoxLunch, Entertainment Earth, Smyths). MyStreet Season 8 'One Last Time' in production in 2026." },
    { name: "Maizen", type: "Creator", subs: 23, buzz: [9, 9, 9], interest: [78, 85, 87], rising: true,
      about: "Maizen (22.9M subs per Variety May 2026; 23B+ lifetime views, ranked #1 gaming channel globally) makes story-driven Minecraft skits built around its 'JJ and Mikey' characters. Pocket.watch announced a full global franchise deal: TV series streaming NOW on Tubi, Roku, and Ryan and Friends Plus; Scholastic books (early 2027); Bonkers Toys plush + blind-boxes (Spring 2027). The streaming launch is actively driving new audience discovery — the gap between now and the official retail toy launch is the near-term custom-merch window." },
    { name: "Mikecrack", type: "Creator", subs: 58, buzz: [7, 7, 7], interest: [72, 71, 71], rising: false,
      about: "Mikecrack is the most-subscribed Spanish YouTuber at ~58.5M subs and is enormous with younger and Spanish-speaking kids. The Los Compas trio (Mikecrack, ElTrollino, Timba VK) book series has sold 31M+ copies worldwide across 10+ titles. His 'Mikecrack y la superarma secreta' live spectacular — an arena show based on his animated series — is actively touring. Strong, recognizable character designs across his recurring cast." },
    { name: "Jelly", type: "Creator", subs: 23, buzz: [7, 5, 4], interest: [68, 59, 54], rising: false,
      about: "Jelly is a top kid-friendly Minecraft YouTuber (~23M subs) known for short, easy-to-watch videos. He plays challenges, mini-games and modded worlds, often with friends. Slide continues into July 2026 — no new series, hook content, or franchise announcement to arrest the decline; a steady-state catalog name rather than an active trend driver." },
    { name: "MrBeast Gaming", type: "Creator", subs: 42, buzz: [7, 7, 7], interest: [73, 71, 71], rising: false,
      about: "MrBeast Gaming is the gaming channel of mega-creator MrBeast — whose main channel crossed 500M subscribers on June 12, 2026, a YouTube first. The Gaming sub-channel (~42M subs) leans on big-budget Minecraft challenges, prizes, and spectacle. Less about one character and more about event-style videos kids love." },
    { name: "SSundee", type: "Creator", subs: 25.4, buzz: [8, 8, 8], interest: [64, 66, 67], rising: true,
      about: "SSundee (25.4M confirmed subs) is a top US Minecraft creator known for funny commentary and constantly dropping pop-culture characters into mod games. His July 2026 engagement rate is 2.57% (excellent vs. peers) with consistent upload frequency and steady subscriber growth. His upbeat, kid-appropriate style and high upload frequency keep him a steady 6–10 favorite — and the best open merch slot on the radar with zero competing official toy line." },
    { name: "LankyBox", type: "Creator", subs: 42, buzz: [7, 5, 1], interest: [65, 55, 40], rising: false,
      about: "LankyBox is a high-energy duo with 42M subscribers known for 'brainrot'-style skits using Minecraft skins for chaotic comedy. 3+ months into a posting hiatus (no new YouTube uploads since ~April 2026) with zero return signal as of July 9, 2026 — community commentary videos titled 'The End of LankyBox' and 'Why LankyBox Quit' now actively circulating. TikTok Shop storefront (748,700+ items sold) remains live passively. Product line (Foxy, Boxy, Thicc Shark, Ghosty) at Target, GameStop, Amazon with no new activations. Do not re-engage until posting resumes and sustains." },
    { name: "CaseOh", type: "Creator", subs: 10.6, buzz: [7, 8, 9], interest: [63, 68, 73], rising: true,
      about: "CaseOh has grown to 10.6M YouTube subscribers and 8.54M Twitch followers. As of July 8, 2026, he is in the top 1% by weekly subscriber growth (100K subs in the past 7 days). His Casemart merchandise line is a major and growing revenue stream (~$80K–$150K/month); engagement rate 2.57% (excellent). Known for 'Minecraft BUT…' challenge and reaction content with a big comedic personality — clips spread fast on Shorts and TikTok. No official toy line exists = best open custom merch slot on the radar; audience skews slightly older (teen) but brand energy bleeds into the 8–10 demo." },
    { name: "EYstreem", type: "Creator", subs: 13.6, buzz: [8, 8, 8], interest: [74, 76, 76], rising: true,
      about: "EYstreem is Australia's most-watched global gaming YouTuber (~13.6M subs). Spawnpoint Media — his production company — now employs 100+ people generating 75–100M views/month across channels. The Milo collectible plush (which sold out in 2 weeks, 4,000 orders, zero paid marketing) is back in stock and shipping at miloandchip.com as of July 2026. Retail footprint remains DTC and Amazon marketplace only; formal retail deals are ramping but no big-box expansion confirmed yet." },
    { name: "DanTDM", type: "Creator", subs: 29, buzz: [6, 6, 6], interest: [58, 58, 58], rising: false,
      about: "DanTDM is a long-running British Minecraft creator (~26M subs) active since 2012. Known for clean, family-friendly Let's Plays and mod showcases. In 2026 he is consulting with Mojang Studios and Merlin Entertainments on a Minecraft World theme-park development. A trusted, evergreen name with the kid audience." },
    { name: "PrestonPlayz", type: "Creator", subs: null, buzz: [7, 7, 8], interest: [62, 63, 66], rising: true,
      about: "PrestonPlayz's Bonkers Toys line is expanding at retail: Target (March 2026) and Amazon (April 2026) carry the Mini Mystery Plush and Pleb Slayer light-up sword (NAPPA Award winner). New SKUs — mini figures and additional plush — began hitting retail shelves in July 2026, broadening the footprint. Family of channels totals 66M combined subscribers and 22B views. Rising trajectory as new SKUs widen the licensed line's shelf presence this month." },
    { name: "Dream", type: "Creator", subs: 31.5, buzz: [5, 5, 5], interest: [53, 52, 51], rising: false,
      about: "Dream (Clay) is one of the most famous US Minecraft names (~31.5M subs), known for 'Minecraft Manhunt' and speedrun content. His day-to-day Minecraft output has slowed, but the brand and faceless smiley logo are iconic. Recognition stays high even with kids who don't watch regularly." },
    { name: "Unspeakable", type: "Creator", subs: null, buzz: [5, 5, 5], interest: [51, 50, 50], rising: false,
      about: "Unspeakable is a 'loud,' high-energy creator known for challenges, builds and real-life crossovers. The big personality and colorful thumbnails play well with younger viewers. A long-standing staple of the kid-Minecraft scene." },
    { name: "TommyInnit", type: "Creator", subs: 12, buzz: [5, 5, 5], interest: [49, 49, 47], rising: false,
      about: "TommyInnit is a hugely popular British creator (~12M subs) who rose through Minecraft SMP servers and streams. He shifted to selective content in 2026 ('100 Questions with Tom Simons' interview series, first MC Championship appearance in ~2 years). He skews slightly older-kid/teen." },
    { name: "Wisp", type: "Creator", subs: null, buzz: [4, 4, 4], interest: [46, 44, 43], rising: false,
      about: "Wisp makes 'wild mod' Minecraft videos that are chaotic, funny and unpredictable. The light-hearted tone keeps it broadly kid-friendly. Good source of meme-y, surprising content." },
    { name: "Stampy", type: "Creator", subs: null, buzz: [4, 3, 3], interest: [37, 35, 33], rising: false,
      about: "Stampy (Stampy Cat) is the original kid-safe Minecraft creator, voiced as a cheerful cartoon cat. His long-running 'Lovely World' series is wholesome and narrative. A nostalgic classic — more grandparent-familiar than kid-current in 2026." },
    { name: "Craftee", type: "Creator", subs: 5.2, buzz: [null, 6, 2], interest: [null, 50, 38], rising: false,
      about: "Craftee is a purely Minecraft-focused creator (~5M subs, ~12M monthly views) who appears on every curated 'kid-safe' list — no profanity, challenge and creative gameplay targeting ages 5–10. The craftee.store plush lineup (Classic Plushie $29.99, Golden variant, Chester plushie $26.99) remains available but generating no new buzz. Subscriber growth stalled near zero through July 2026; no franchise deals, retail expansion, or new drops detected. Firmly in catalog-only territory — four consecutive trend score drops with no catalyst in sight." },

    { name: "OMZ", type: "Creator", subs: 6.1, buzz: [null, null, 5], interest: [null, null, 52], rising: true,
      about: "OMZ (Omz Crew) is an American Minecraft roleplay YouTuber (~6.1M subscribers) who posts daily content with a recurring friend cast — Roxy, Crystal, Lily, Megan, and Kevin. Channel launched January 2023 and has grown steadily at ~80K subs/month. Official plushies at omzcrew.com are surfacing in TikTok Shop searches alongside JJ & Mikey — early commercial signal. Content tone and age target (6–10) mirror Cash & Nico. No mass-retail toy line yet; custom merch slot is fully open." },

    // ---- FAN / ANIMATION CHARACTERS (merch-eligible — NOT Mojang's mobs) ----
    // Animated character duos — extremely high recognition w/ 6-10 y/o; CONFIRMED top sellers at Red Lava Toys shows.
    { name: "JJ & Mikey", type: "Character/Mob", subs: null, buzz: [10, 10, 10], interest: [96, 97, 98], rising: true,
      about: "JJ and Mikey are the lead characters of Maizen's animated Minecraft skits — the JJ & Mikey TV series is streaming NOW on Tubi, Roku, and Ryan and Friends Plus (Summer 2026), actively driving new audience discovery. The official Bonkers Toys plush + blind-boxes don't hit major retailers until Spring 2027 — the gap is the near-term custom-merch opportunity. A single 'Johnny Minecraft Plush' listing previously crossed 171,600 units sold on TikTok Shop; Etsy third-party sellers are actively filling the gap. Confirmed #1 top sellers at Red Lava Toys shows." },
    { name: "Nico & Cash", type: "Character/Mob", subs: null, buzz: [10, 9, 9], interest: [90, 86, 85], rising: true,
      about: "Nico and Cash are a paired-character Minecraft animation duo — Cash's channel at ~11M subscribers, Nico at ~4.9M and climbing. Official merch at cashandnico.com (Nico Superhero, Cash Superhero, and Shady plushies, plus shirts, stickers, and comics); confirmed strong demand at Red Lava Toys shows. A 'Nico: The Movie' theatrical project circulates in fan wikis but has not been confirmed by any trade publication (Variety/Deadline) as of July 2026 — treat as audience excitement until a signed deal is announced. Channels remain active and the merch slot is open." },
    { name: "Chip & Milo", type: "Character/Mob", subs: 4.1, buzz: [9, 8, 8], interest: [85, 83, 83], rising: true,
      about: "Milo and Chip are an animated-Minecraft duo from EYstreem's Spawnpoint Media (4.1M subs on the animation channel). The Milo collectible plush — which sold out in 2 weeks (4,000 orders, zero paid marketing) — is back in stock and now shipping at miloandchip.com as of July 2026. The Elemental Milo & Chip skin pack launched May 2026; T-shirts, stickers, and water bottles also available. Retail footprint remains DTC/Amazon only with no big-box expansion confirmed yet; niche but loyal following." },
    { name: "Alan Becker (AvM)", type: "Character/Mob", subs: 33.6, buzz: [8, 8, 9], interest: [70, 77, 82], rising: true,
      about: "Alan Becker's color-coded stick figures — The Second Coming, King Orange, Yellow, Green, Blue, and Red — star in 'Animation vs. Minecraft' (33.6M subs, 9.6B+ views). AvM Shorts Season 5 continues: 'AvGDash' (Animation vs. Geometry Dash, Hot & Cold characters) is confirmed to drop this month, with the release date locked to one of four July windows (4th, 11th, 18th, or 25th); Ep 40 (Red & Blue duo) follows. Anticipation is building fan community engagement ahead of the drop. These are entirely Becker's own original characters, not Mojang IP. Merch available only through alanbecker.shop and Youtooz blind boxes — zero mass-retail presence despite 33M+ subscribers: the biggest under-served retail white space in creator-Minecraft merch." },

    // ---- FORMATS / TOPICS (what kind of videos they're glued to) ----
    { name: "'Minecraft BUT…'", type: "Format", subs: null, buzz: [7, 7, 7], interest: [61, 62, 62], rising: false,
      about: "'Minecraft BUT…' is a dominant format where a normal playthrough is twisted by one wild rule or mod (e.g. 'Minecraft BUT everything is giant'). It's build/challenge/reaction content that's endlessly remixable. CaseOh's Hardcore format is the current evolution of this template." },
    { name: "Brainrot skits", type: "Format", subs: null, buzz: [7, 6, 2], interest: [63, 60, 50], rising: false,
      about: "'Brainrot' skits are chaotic, sensory-overload short videos that use Minecraft skins to act out absurd stories. LankyBox's TikTok Shop confirmed 748K+ items sold — this audience converts directly to buyers at high volume. With LankyBox's posting hiatus now past 3 months and community commentary videos titled 'The End of LankyBox' actively circulating, the format's primary signal driver is silent and trend is in continued decline. Fast, loud and meme-driven — controversial with parents, irresistible to kids. Monitor LankyBox resumption; the format can reactivate quickly if posting returns." },
    { name: "Roleplay servers", type: "Format", subs: null, buzz: [5, 5, 5], interest: [46, 48, 50], rising: true,
      about: "Minecraft roleplay (RP) servers are fictional worlds with their own economies, governments and ongoing storylines where players act out characters. They're growing fast as a social, narrative way to play. Popular with kids who love the 'pretend' and community side." },

    // ---- MOJANG IP — official game content (CUSTOMER AWARENESS ONLY, not merch) ----
    { name: "Baby mobs (Tiny Takeover)", type: "Character/Mob", ip: "mojang", subs: null, buzz: [4, 4, 3], interest: [50, 43, 33], rising: false,
      about: "The March 2026 'Tiny Takeover' drop redesigned every baby farm animal — puppies, kittens, piglets, calves, chicks, lambs, ocelots and bunnies — for maximum cuteness. Now ~4 months post-launch the initial viral wave has fully settled and search interest continues to decline. Official Mojang content: great to know about for customer chats, but NOT something Red Lava Toys can make merch of." },
    { name: "Sulfur cube", type: "Character/Mob", ip: "mojang", subs: null, buzz: [6, 6, 6], interest: [54, 55, 55], rising: true,
      about: "The sulfur cube is a Minecraft mob that can absorb blocks — a mechanic unlike anything else in the game, driving lots of reaction/explainer videos. Official Mojang content: worth knowing for customer conversations, but not merch-eligible for Red Lava Toys." },
    { name: "A Minecraft Movie", type: "Format", ip: "mojang", subs: null, buzz: [6, 7, 9], interest: [62, 68, 74], rising: true,
      about: "The live-action/animated Warner Bros. film (April 2025) continues to drive streaming discovery; the Minecraft Summer Sale (June 30–July 28, 2026) adds platform-level discoverability through end of July. Sequel 'A Minecraft Movie Squared' (July 23, 2027) is filming in New Zealand — confirmed cast includes Momoa, Black, Brooks, Coolidge returning, plus Kirsten Dunst as Alex. Matt Berry is confirmed for a mystery role; fans and press widely speculate he plays Herobrine (he was handed a Steve-like vest at Minecraft Live while declining to name his character), but the studio has not officially confirmed this. Mojang/WB IP — strong customer-conversation context, not merch-eligible for Red Lava Toys." }
  ],

  // Merch-eligible names ONLY (never Mojang IP).
  movers: {
    up:   ["Alan Becker (AvM)", "PrestonPlayz", "JJ & Mikey", "CaseOh"],
    down: ["LankyBox", "Brainrot skits", "Craftee"],
    new:  ["OMZ"]
  },

  headline: "WEEK OF JUL 6 (REFINED Jul 9) — JJ & Mikey on Tubi/Roku/Ryan+ NOW; Bonkers Toys retail Spring 2027 — custom-merch gap wide open. Alan Becker AvGDash drops this month (Jul 4/11/18/25) + Ep 40 next — 33.6M subs, zero mass retail. Aphmau adds MeeMeows Collectors Case (THREE summer SKUs). PrestonPlayz new SKUs live at Target & Amazon Jul 2026. CaseOh top 1% YouTube growth, zero toy line. NEW TRACK: OMZ Crew plushies on TikTok Shop (~6.1M subs, rising). LankyBox: 'End of LankyBox' community videos circulating — buzz drops to 1. (Mojang/WB IP: Summer Sale through Jul 28; Movie Squared filming NZ — not merch.)"
};
