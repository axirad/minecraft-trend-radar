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
  updated: "2026-07-20",
  weeks: ["Jun 1", "Jun 29", "Jul 6", "Jul 13", "Jul 20"],    // week-start labels, oldest -> newest

  entities: [
    // ---- CREATORS (the "make my skin look like them" names) ----
    { name: "Aphmau", type: "Creator", subs: 25.9, buzz: [8, 9, 9, 9, 9], interest: [80, 87, 89, 89, 90], rising: true,
      about: "Aphmau (Jess) is one of the biggest kid-facing Minecraft creators (~25.9M subscribers) with 29.6B+ lifetime views as of July 2026. Four concurrent blind-box waves remain active at 9+ major retailers through summer 2026 — Carnival Treats 6\" Mystery Plush, Elemental MeeMeow Mystery Plush, Celestial Cats series, and the MeeMeows Collectors Case (10\" catface case, 8 mystery surprises incl. first collectable Aphmau Animated figure) — across Amazon, Walmart, Target, Claire's, GameStop, Michaels, BoxLunch, Entertainment Earth, Smyths. Summer peak week: interest hits 90 with all four waves simultaneously on shelf — best moment of the year for complementary custom merch." },
    { name: "Maizen", type: "Creator", subs: 23, buzz: [9, 9, 9, 9, 9], interest: [78, 85, 87, 88, 89], rising: true,
      about: "Maizen (22.9M subs per Variety May 2026; 23B+ lifetime views, ranked #1 gaming channel globally) makes story-driven Minecraft skits built around its 'JJ and Mikey' characters. JJ & Mikey is now in its third week of streaming on Tubi, Roku, and Ryan and Friends Plus as of July 20, 2026 — actively driving new audience discovery. Scholastic books launch early 2027; Bonkers Toys plush + blind-boxes confirmed Spring 2027. The gap between now and the official retail toy launch is the near-term custom-merch window." },
    { name: "Mikecrack", type: "Creator", subs: 58.6, buzz: [7, 7, 7, 7, 7], interest: [72, 71, 71, 71, 71], rising: false,
      about: "Mikecrack is the most-subscribed Spanish YouTuber at ~58.6M subs (ranked #72 globally as of July 2026) and is enormous with younger and Spanish-speaking kids. The Los Compas trio (Mikecrack, ElTrollino, Timba VK) book series has sold 31M+ copies worldwide across 10+ titles. His 'Mikecrack y la superarma secreta' live spectacular — an arena show based on his animated series — is actively touring. Strong, recognizable character designs across his recurring cast." },
    { name: "Jelly", type: "Creator", subs: 23, buzz: [7, 5, 3, 3, 3], interest: [68, 59, 50, 39, 36], rising: false,
      about: "Jelly is a top kid-friendly Minecraft YouTuber (~23M subs) known for short, easy-to-watch videos. He plays challenges, mini-games and modded worlds, often with friends. Six-month slide continues into late July 2026 — no new series, hook content, or franchise announcement; interest down to 36 from a 68 peak at Jun 1, a steady-state catalog name rather than an active trend driver." },
    { name: "MrBeast Gaming", type: "Creator", subs: 42, buzz: [7, 7, 7, 7, 7], interest: [73, 71, 71, 71, 71], rising: false,
      about: "MrBeast Gaming is the gaming channel of mega-creator MrBeast — whose main channel crossed 500M subscribers on June 12, 2026, a YouTube first. The Gaming sub-channel (~42M subs) leans on big-budget Minecraft challenges, prizes, and spectacle. Less about one character and more about event-style videos kids love." },
    { name: "SSundee", type: "Creator", subs: 25.45, buzz: [8, 8, 9, 9, 9], interest: [64, 66, 72, 76, 77], rising: true,
      about: "SSundee (25.45M subs, ~4 uploads/week, 2.56% engagement) is a top US Minecraft creator known for funny commentary and pop-culture mod drops. Long-running collaboration partner Crainer (MrCrainer) officially returned in 2026 — their 'Crundee' server series launched May 17, 2026 and is actively producing content through July 2026, generating sustained excitement among fans who grew up with the duo. Zero official toy line = best open US-creator custom merch slot alongside Alan Becker." },
    { name: "LankyBox", type: "Creator", subs: 42, buzz: [7, 5, 0, 0, 0], interest: [65, 55, 20, 9, 6], rising: false,
      about: "LankyBox is a 42M-sub duo known for 'brainrot'-style Minecraft skits. Confirmed quit in mid-2026 — no uploads since ~April 2026 (18+ weeks); fan analysis videos 'I Figured Out Why LankyBox Quit!' and 'The End of LankyBox..' are the dominant narrative. The Adam McArthur / Justin Kroma partnership-split story is entrenched on TikTok. TikTok Shop (748K+ items sold historically) and retail (Target, GameStop, Amazon) remain live passively on existing SKUs. Channel is finished — do not invest in LankyBox-adjacent product for 2026-2027." },
    { name: "CaseOh", type: "Creator", subs: 10.75, buzz: [7, 8, 9, 9, 9], interest: [63, 68, 76, 82, 84], rising: true,
      about: "CaseOh has grown to ~10.75M YouTube subscribers. As of July 20, 2026, weekly subscriber growth is +100K/7 days (2.07% monthly rate, rated Good by HypeAuditor) with 5.29% engagement. A CaseOh Kitty merch drop launched July 3, 2026 (hoodies, apparel, PC accessories at caseohgames.com) and remains active. Known for 'Minecraft BUT…' challenge and reaction content. No official toy line exists = best open custom merch slot with CaseOh's continuing trajectory; audience skews slightly older (teen) but brand energy bleeds into the 8–10 demo." },
    { name: "EYstreem", type: "Creator", subs: 13.6, buzz: [8, 8, 8, 8, 8], interest: [74, 76, 76, 77, 77], rising: true,
      about: "EYstreem is Australia's most-watched global gaming YouTuber (~13.6M subs). Spawnpoint Media — his production company — now employs 100+ people generating 75–100M views/month across channels. Both the Milo collectible plush and a Chip plushie are now available at miloandchip.com as of July 2026; Milo previously sold 4,000 orders in 2 weeks with zero paid marketing. Retail footprint remains DTC and Amazon marketplace only; formal retail deals are ramping but no big-box expansion confirmed yet." },
    { name: "DanTDM", type: "Creator", subs: 29, buzz: [6, 6, 6, 6, 6], interest: [58, 58, 58, 57, 57], rising: false,
      about: "DanTDM is a long-running British Minecraft creator (~26M subs) active since 2012. Known for clean, family-friendly Let's Plays and mod showcases. In 2026 he is consulting with Mojang Studios and Merlin Entertainments on a Minecraft World theme-park development. A trusted, evergreen name with the kid audience." },
    { name: "PrestonPlayz", type: "Creator", subs: null, buzz: [7, 7, 9, 9, 9], interest: [62, 63, 72, 74, 75], rising: true,
      about: "PrestonPlayz's Bonkers Toys line is fully on shelf as of July 2026: Series 1 mini figures (Bloxton, PrestonPlayz, Preston 303, Shining Preston, Preston, Cactus Jones 6-pack), Mystery Merch Box (11 collectibles incl. limited-edition plushies, figures, posters, trading cards), plus the NAPPA Award-winning Pleb Slayer light-up sword and Mini Mystery Plush at Target and Amazon. Family of channels totals 66M combined subscribers and 22B views. Benchmark these July SKUs for format and price-point — they are live competition on shelf now." },
    { name: "Dream", type: "Creator", subs: 31.5, buzz: [5, 5, 5, 5, 5], interest: [53, 52, 50, 47, 46], rising: false,
      about: "Dream (Clay) is one of the most famous US Minecraft names (~31.5M subs), known for 'Minecraft Manhunt' and speedrun content. His day-to-day Minecraft output has slowed, but the brand and faceless smiley logo are iconic. Recognition stays high even with kids who don't watch regularly." },
    { name: "Unspeakable", type: "Creator", subs: null, buzz: [5, 5, 5, 5, 5], interest: [51, 50, 50, 50, 50], rising: false,
      about: "Unspeakable is a 'loud,' high-energy creator known for challenges, builds and real-life crossovers. The big personality and colorful thumbnails play well with younger viewers. A long-standing staple of the kid-Minecraft scene." },
    { name: "TommyInnit", type: "Creator", subs: 12, buzz: [5, 5, 5, 4, 4], interest: [49, 49, 47, 41, 39], rising: false,
      about: "TommyInnit is a hugely popular British creator (~12M subs) who rose through Minecraft SMP servers and streams. He shifted to selective content in 2026 ('100 Questions with Tom Simons' interview series, first MC Championship appearance in ~2 years). He skews slightly older-kid/teen. Gradual audience drift continues into late July 2026." },
    { name: "Wisp", type: "Creator", subs: null, buzz: [4, 4, 4, 4, 4], interest: [46, 44, 42, 37, 35], rising: false,
      about: "Wisp makes 'wild mod' Minecraft videos that are chaotic, funny and unpredictable. The light-hearted tone keeps it broadly kid-friendly. Good source of meme-y, surprising content. Slow drift as no major new hook." },
    { name: "Stampy", type: "Creator", subs: null, buzz: [4, 3, 3, 3, 3], interest: [37, 35, 33, 29, 27], rising: false,
      about: "Stampy (Stampy Cat) is the original kid-safe Minecraft creator, voiced as a cheerful cartoon cat. His long-running 'Lovely World' series is wholesome and narrative. A nostalgic classic — more grandparent-familiar than kid-current in 2026." },
    { name: "Craftee", type: "Creator", subs: 5.2, buzz: [null, 6, 2, 2, 2], interest: [null, 50, 35, 23, 18], rising: false,
      about: "Craftee is a purely Minecraft-focused creator (~5M subs, ~12M monthly views) who appears on every curated 'kid-safe' list — no profanity, challenge and creative gameplay targeting ages 5–10. The craftee.store plush lineup (Classic Plushie $29.99, Golden variant, Chester plushie $26.99) remains available but generating no new buzz. Subscriber growth stalled near zero through July 2026; no franchise deals, retail expansion, or new drops detected. Six consecutive trend score drops with no catalyst in sight — firmly catalog-only territory." },

    { name: "OMZ", type: "Creator", subs: 6.06, buzz: [null, null, 7, 7, 7], interest: [null, null, 60, 68, 69], rising: true,
      about: "OMZ (Omz Crew) is an American Minecraft roleplay YouTuber (~6.06M subscribers, 1.66B total views) generating 54M+ monthly views as of July 2026, with +80K new subscribers per month. Large recurring cast: Roxy, Crystal, Lily, Kevin, Heather, Violet, Alexa, and Luke. Merch confirmed at omzcrew.com, Amazon (ASIN B0FLLH2SR9 full crew bundle), TikTok Shop, and Walmart. OMZ Squish Plushies also available alongside standard plush and mystery boxes. Active scripted drama arcs (face reveal drama, Junior vs. Crystal storyline) driving roleplay-format engagement as of July 2026. Content tone and age target (6–10) mirror Cash & Nico." },

    // ---- FAN / ANIMATION CHARACTERS (merch-eligible — NOT Mojang's mobs) ----
    // Animated character duos — extremely high recognition w/ 6-10 y/o; CONFIRMED top sellers at Red Lava Toys shows.
    { name: "JJ & Mikey", type: "Character/Mob", subs: null, buzz: [10, 10, 10, 10, 10], interest: [96, 97, 98, 98, 98], rising: true,
      about: "JJ and Mikey are the lead characters of Maizen's animated Minecraft skits — the JJ & Mikey TV series is now in its third week of streaming on Tubi, Roku, and Ryan and Friends Plus as of July 20, 2026. The official Bonkers Toys plush + blind-boxes don't hit major retailers until Spring 2027 — the gap remains the near-term custom-merch opportunity. Maizen universe supporting characters 'Carrie' and 'Banana Kid' are being requested by name in Etsy buyer reviews with zero official product — open custom design slots. A single 'Johnny Minecraft Plush' listing previously crossed 171,600 units sold on TikTok Shop. Confirmed #1 top sellers at Red Lava Toys shows." },
    { name: "Nico & Cash", type: "Character/Mob", subs: null, buzz: [10, 9, 9, 9, 9], interest: [90, 86, 87, 88, 88], rising: true,
      about: "Nico and Cash are a paired-character Minecraft animation duo — Cash's channel hit 11M subscribers on June 8, 2026; Nico at ~4.9M and climbing. Official plush line at cashandnico.com includes Nico Superhero, Cash Superhero, Shady, Toast Miner, and Meebo plushies, plus a limited Cash+Nico+Meebo bundle; Amazon shows 2,000+ units sold per month in Kids' Plush Toy Pillows. A 'Nico: The Movie' theatrical project circulates in fan wikis but has not been confirmed by any trade publication as of July 2026 — treat as audience excitement until a signed deal is announced." },
    { name: "Chip & Milo", type: "Character/Mob", subs: 4.1, buzz: [9, 8, 9, 9, 9], interest: [85, 83, 90, 93, 94], rising: true,
      about: "Milo and Chip are an animated-Minecraft duo from EYstreem's Spawnpoint Media (4.1M subs, 231M views/month as of June/July 2026 — 4.52% monthly sub growth, 280K new subs/30 days). The Milo plush is actively shipping at miloandchip.com as of July 2026 — it previously sold out 4,000 orders in 2 weeks with zero paid marketing; Chip plushie also available. The Elemental Milo & Chip skin pack launched May 2026 (4.8/5 stars). Retail footprint remains DTC/Amazon only — no big-box expansion confirmed yet. Milo (age 6) and Chip (age 10) bracket the 5–10 demo perfectly; fastest-growing kids Minecraft IP with proven plush demand and no mass-retail competition." },
    { name: "Alan Becker (AvM)", type: "Character/Mob", subs: 33.6, buzz: [8, 8, 9, 10, 10], interest: [70, 77, 85, 98, 99], rising: true,
      about: "Alan Becker's color-coded stick figures — The Second Coming, King Orange, Yellow, Green, Blue, and Red — star in 'Animation vs. Minecraft' (33.6M subs, 9.6B+ views). 'Animation vs. Geometry Dash' released July 18, 2026 — a live reaction wave (analysis videos, fan art, TikTok/Shorts content) launched July 19+; the tied-in Geometry Dash level (Wicked VIP, Insane / 8-star) sustains player engagement alongside the video. Merch via alanbecker.shop and Youtooz only — zero mass-retail presence despite 33M+ subscribers: largest under-served retail white space in creator-Minecraft merch, with a newsletter-teased AvM Minecraft episode (Red & Blue) still ahead." },

    // ---- FORMATS / TOPICS (what kind of videos they're glued to) ----
    { name: "'Minecraft BUT…'", type: "Format", subs: null, buzz: [7, 7, 7, 7, 7], interest: [61, 62, 62, 62, 62], rising: false,
      about: "'Minecraft BUT…' is a dominant format where a normal playthrough is twisted by one wild rule or mod (e.g. 'Minecraft BUT everything is giant'). It's build/challenge/reaction content that's endlessly remixable. CaseOh's Hardcore format is the current evolution of this template." },
    { name: "Brainrot skits", type: "Format", subs: null, buzz: [7, 6, 2, 1, 1], interest: [63, 60, 42, 27, 22], rising: false,
      about: "'Brainrot' skits are chaotic, sensory-overload short videos that use Minecraft skins to act out absurd stories. LankyBox's TikTok Shop confirmed 748K+ items sold historically — this audience converts directly to buyers at high volume. LankyBox is now confirmed quit (18+ weeks, no uploads since ~April 2026) and the format's primary signal driver is offline with no returning creator and no replacement emerging as of July 20, 2026. Format buzz and interest at lowest points tracked." },
    { name: "Roleplay servers", type: "Format", subs: null, buzz: [5, 5, 5, 5, 5], interest: [46, 48, 51, 57, 58], rising: true,
      about: "Minecraft roleplay (RP) servers are fictional worlds with their own economies, governments and ongoing storylines where players act out characters. They're growing fast as a social, narrative way to play. OMZ Crew's active drama storylines (Omz & Crystal breakup arc, July 2026) are adding to format-level engagement. Popular with kids who love the 'pretend' and community side." },

    // ---- MOJANG IP — official game content (CUSTOMER AWARENESS ONLY, not merch) ----
    { name: "Baby mobs (Tiny Takeover)", type: "Character/Mob", ip: "mojang", subs: null, buzz: [4, 4, 2, 2, 1], interest: [50, 43, 28, 14, 8], rising: false,
      about: "The March 2026 'Tiny Takeover' drop redesigned every baby farm animal — puppies, kittens, piglets, calves, chicks, lambs, ocelots and bunnies — for maximum cuteness. Now 4+ months post-launch, the initial viral wave has fully settled and search interest is in sharp decline. Official Mojang content: great to know about for customer chats, but NOT something Red Lava Toys can make merch of." },
    { name: "Sulfur cube", type: "Character/Mob", ip: "mojang", subs: null, buzz: [6, 6, 6, 6, 6], interest: [54, 55, 55, 56, 56], rising: true,
      about: "The sulfur cube is a Minecraft mob that can absorb blocks — a mechanic unlike anything else in the game, driving lots of reaction/explainer videos. Official Mojang content: worth knowing for customer conversations, but not merch-eligible for Red Lava Toys." },
    { name: "A Minecraft Movie", type: "Format", ip: "mojang", subs: null, buzz: [6, 7, 9, 9, 9], interest: [62, 68, 75, 77, 78], rising: true,
      about: "The live-action/animated Warner Bros. film (April 2025) continues to drive streaming discovery; the Minecraft Summer Sale (June 30–July 28, 2026) main phase continues through end of July. Sequel 'A Minecraft Movie Squared' (July 23, 2027) filming in New Zealand — confirmed cast includes Momoa, Black, Brooks, Myers, Hansen, Coolidge returning, plus Kirsten Dunst as Alex; Matt Berry in a mystery role (fan speculation: Herobrine). Mojang/WB IP — strong customer-conversation context, not merch-eligible for Red Lava Toys." },
    { name: "Netflix Minecraft Series", type: "Format", ip: "mojang", subs: null, buzz: [null, null, 9, 9, 9], interest: [null, null, 74, 89, 90], rising: true,
      about: "WildBrain/Flying Bark CG-animated series (head writer: A.C. Bradley of Marvel's What If...?) premiered on Netflix July 9, 2026 — now 11 days of streaming as of July 20. Character names remain unrevealed in wide press; no Netflix Top 10 appearance confirmed (per research: Top 10 debut in July went to a Harlan Coben series, not Minecraft). Fan art and reaction content continue growing on TikTok and Shorts. Produced under Mojang/Netflix license — monitor for character name reveals and first Top 10 chart appearance. NOT merch-eligible for Red Lava Toys." }
  ],

  // Merch-eligible names ONLY (never Mojang IP).
  movers: {
    up:   ["Alan Becker (AvM)", "Aphmau", "CaseOh"],
    down: ["Jelly", "Brainrot skits", "Craftee"],
    new:  []
  },

  headline: "WEEK OF JUL 20 — ALAN BECKER (AvM): 'Animation vs. Geometry Dash' REACTION WAVE LIVE — video dropped Jul 18; reaction content, analysis, fan art flooding TikTok/Shorts Jul 19+; in-game GD level (Wicked VIP) sustaining player engagement; 33.6M subs, ZERO mass retail = #1 open white-space merch opportunity as spike peaks this week. APHMAU: Four concurrent MeeMeows blind-box waves at 9+ retailers hitting summer peak — interest reaches 90, best moment of year for complementary custom merch. CaseOh: +100K/week, Kitty drop active, best open US creator slot. JJ & MIKEY: TV series week 3 on Tubi/Roku, Bonkers Spring 2027 retail gap wide open. CHIP & MILO: Milo plush actively shipping, prev. 4K orders/2 wks, no big-box competition. SSundee + Crainer 'Crundee' active through July. PrestonPlayz mini figures + plush on Target/Amazon — live competition to benchmark. (Mojang IP: Netflix Minecraft Series 11 days in, character names still unrevealed, no Top 10 confirmed; Movie Summer Sale main phase through Jul 28; sequel filming NZ — not merch.)"
};
