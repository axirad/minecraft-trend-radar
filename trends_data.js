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
  updated: "2026-07-31",
  weeks: ["Jun 1", "Jun 29", "Jul 6", "Jul 13", "Jul 20", "Jul 27"],    // week-start labels, oldest -> newest

  entities: [
    // ---- CREATORS (the "make my skin look like them" names) ----
    { name: "Aphmau", type: "Creator", subs: 25.1, buzz: [8, 9, 9, 9, 10, 10], interest: [80, 87, 89, 89, 95, 98], rising: true,
      about: "Aphmau (Jess) is one of the biggest kid-facing Minecraft creators (~25.1M subscribers, 29.65B+ lifetime views). The 'I Wouldn't Change A Thing' lyric video (MyStreet: One Last Time theme) had an accidental early release July 27-28 before being taken private; it was officially re-published today, July 31, driving a second fan engagement wave — TikTok content around the lyrics is actively circulating. Bonkers Toys nationwide retail launch is IMMINENT in August 2026 (PR Newswire July 21 confirmed; SDCC 2026 was Aphmau's first-ever Comic-Con booth debut for the line) — products include MyStreet Classic Plushes, MeeMeows Collector Figures (8-mystery), and Cat Café Surprise Set (SRP $49.99); no specific retail chains publicly confirmed yet. The custom merch window is CLOSING — the gap between now and full retail saturation this August is the last high-value opening of the year." },
    { name: "Maizen", type: "Creator", subs: 23, buzz: [9, 9, 9, 9, 9, 9], interest: [78, 85, 87, 88, 90, 92], rising: true,
      about: "Maizen (22.9M subs per Variety May 2026; 23B+ lifetime views, ranked #1 gaming channel globally) makes story-driven Minecraft skits built around its 'JJ and Mikey' characters. The JJ & Mikey TV series is in its active summer 2026 streaming window on Tubi, Roku, and Ryan and Friends Plus. The Pocket.watch franchise deal (announced May 2026) confirms Scholastic books early 2027 and Bonkers Toys plush + blind-boxes Spring 2027 — the gap between now and the official retail toy launch remains the near-term custom-merch window." },
    { name: "Mikecrack", type: "Creator", subs: 58.6, buzz: [7, 7, 7, 7, 7, 7], interest: [72, 71, 71, 71, 71, 72], rising: false,
      about: "Mikecrack is the most-subscribed Spanish YouTuber at ~58.6M subs (ranked #72 globally as of July 2026) and is enormous with younger and Spanish-speaking kids. The Los Compas trio (Mikecrack, ElTrollino, Timba VK) book series has sold 31M+ copies worldwide across 10+ titles. 'Mikecrack y la Superarma Secreta' — his animated-series live spectacular — has 2026/2027 tour dates on Ticketmaster Mexico, keeping the IP visibly in market." },
    { name: "Jelly", type: "Creator", subs: 23, buzz: [7, 5, 3, 3, 3, 3], interest: [68, 59, 50, 39, 30, 22], rising: false,
      about: "Jelly is a top kid-friendly Minecraft YouTuber (~23M subs) known for short, easy-to-watch videos. He plays challenges, mini-games and modded worlds, often with friends. Eight-plus month slide continues into late July 2026 — no new series, hook content, or franchise announcement; interest now at 22, a steady-state catalog name with no active trend drivers." },
    { name: "MrBeast Gaming", type: "Creator", subs: 42, buzz: [7, 7, 7, 7, 7, 7], interest: [73, 71, 71, 71, 71, 70], rising: false,
      about: "MrBeast Gaming is the gaming channel of mega-creator MrBeast — whose main channel crossed 500M subscribers on June 12, 2026, a YouTube first. The Gaming sub-channel (~42M subs) leans on big-budget Minecraft challenges, prizes, and spectacle. Less about one character and more about event-style videos kids love." },
    { name: "SSundee", type: "Creator", subs: 25.45, buzz: [8, 8, 9, 9, 9, 9], interest: [64, 66, 72, 76, 79, 83], rising: true,
      about: "SSundee (25.45M subs, ~4 uploads/week, 2.56% engagement) is a top US Minecraft creator known for funny commentary and pop-culture mod drops. The Crundee server series with Crainer (launched May 17, 2026) continues to produce content actively — the Crundee Craft modpack was updated July 19, 2026 (206K+ CurseForge downloads). The reunion generates sustained excitement among fans who grew up with the duo. Zero official toy line = best open US-creator custom merch slot alongside Alan Becker." },
    { name: "LankyBox", type: "Creator", subs: 42, buzz: [7, 5, 0, 0, 0, 0], interest: [65, 55, 20, 9, 5, 1], rising: false,
      about: "LankyBox is a 42M-sub duo known for 'brainrot'-style Minecraft skits. Confirmed quit — no uploads since ~April 2026 (27+ weeks); fan analysis videos and the Adam McArthur / Justin Kroma partnership-split story are the dominant narrative on TikTok. TikTok Shop (748K+ items sold historically) and retail remain live passively on existing SKUs but declining rapidly. Channel is finished — do not invest in LankyBox-adjacent product for 2026-2027." },
    { name: "CaseOh", type: "Creator", subs: 10.75, buzz: [7, 8, 9, 9, 9, 9], interest: [63, 68, 76, 82, 85, 86], rising: true,
      about: "CaseOh has grown to ~10.75M YouTube subscribers with 5%+ engagement. The Summer Collection (launched July 3, 2026) sold out — 'Restock coming soon' across hoodies and sweatsuits; items have moved to 'Sold Out — Previous Drops.' The 'New — Coming Soon' section signals the next drop is in preparation; the prior drop cadence (Winter → March → Summer) suggests fall 2026 for the next major release. No official toy line exists = open US creator slot alongside Alan Becker; audience skews slightly older (teen) but brand energy bleeds into the 8–10 demo." },
    { name: "EYstreem", type: "Creator", subs: 13.76, buzz: [8, 8, 8, 8, 8, 8], interest: [74, 76, 76, 77, 77, 82], rising: true,
      about: "EYstreem is Australia's most-watched global gaming YouTuber (~13.76M subs). Spawnpoint Media — his production company — now employs 100+ people generating 75–100M views/month across channels; a June 2026 Tubefilter feature quoted: 'We didn't anticipate how strong the IP had become.' The Milo plush sold out (4,000 orders in ~2 weeks with zero paid marketing); Chip plushie and EYstreem creator plushie remain available at miloandchip.com / eystreem.store with Milo restock TBA. Retail footprint remains DTC and Amazon marketplace only — no big-box expansion confirmed yet." },
    { name: "DanTDM", type: "Creator", subs: 29, buzz: [6, 6, 6, 6, 6, 6], interest: [58, 58, 58, 57, 57, 54], rising: false,
      about: "DanTDM is a long-running British Minecraft creator (~26M subs) active since 2012. Known for clean, family-friendly Let's Plays and mod showcases. In 2026 he is consulting with Mojang Studios and Merlin Entertainments on a Minecraft World theme-park development. A trusted, evergreen name with the kid audience." },
    { name: "PrestonPlayz", type: "Creator", subs: null, buzz: [7, 7, 9, 9, 9, 9], interest: [62, 63, 72, 74, 75, 76], rising: true,
      about: "PrestonPlayz's Bonkers Toys line is fully on shelf as of July 2026: Series 1 mini figures (Bloxton, PrestonPlayz, Preston 303, Shining Preston, Preston, Cactus Jones 6-pack), Mystery Merch Box (11 collectibles incl. limited-edition plushies, figures, posters, trading cards), plus the NAPPA Award-winning Pleb Slayer light-up sword and Mini Mystery Plush at Target and Amazon. Family of channels totals 66M combined subscribers and 22B views. Benchmark these July SKUs for format and price-point — they are live competition on shelf now." },
    { name: "Dream", type: "Creator", subs: 31.5, buzz: [5, 5, 5, 5, 5, 5], interest: [53, 52, 50, 47, 46, 38], rising: false,
      about: "Dream (Clay) is one of the most famous US Minecraft names (~31.5M subs), known for 'Minecraft Manhunt' and speedrun content. His day-to-day Minecraft output has slowed, but the brand and faceless smiley logo are iconic. Recognition stays high even with kids who don't watch regularly." },
    { name: "Unspeakable", type: "Creator", subs: null, buzz: [5, 5, 5, 5, 5, 5], interest: [51, 50, 50, 50, 50, 49], rising: false,
      about: "Unspeakable is a 'loud,' high-energy creator known for challenges, builds and real-life crossovers. The big personality and colorful thumbnails play well with younger viewers. A long-standing staple of the kid-Minecraft scene." },
    { name: "TommyInnit", type: "Creator", subs: 12, buzz: [5, 5, 5, 4, 4, 4], interest: [49, 49, 47, 41, 34, 26], rising: false,
      about: "TommyInnit is a hugely popular British creator (~12M subs) who rose through Minecraft SMP servers and streams. He shifted to selective content in 2026 ('100 Questions with Tom Simons' interview series, first MC Championship appearance in ~2 years). He skews slightly older-kid/teen. Gradual audience drift continues into late July 2026." },
    { name: "Wisp", type: "Creator", subs: null, buzz: [4, 4, 4, 4, 4, 4], interest: [46, 44, 42, 37, 34, 25], rising: false,
      about: "Wisp makes 'wild mod' Minecraft videos that are chaotic, funny and unpredictable. The light-hearted tone keeps it broadly kid-friendly. Good source of meme-y, surprising content. Slow drift as no major new hook." },
    { name: "Stampy", type: "Creator", subs: null, buzz: [4, 3, 3, 3, 3, 3], interest: [37, 35, 33, 29, 25, 15], rising: false,
      about: "Stampy (Stampy Cat) is the original kid-safe Minecraft creator, voiced as a cheerful cartoon cat. His long-running 'Lovely World' series is wholesome and narrative. A nostalgic classic — more grandparent-familiar than kid-current in 2026." },
    { name: "Craftee", type: "Creator", subs: 5.2, buzz: [null, 6, 2, 2, 2, 2], interest: [null, 50, 35, 23, 15, 5], rising: false,
      about: "Craftee is a purely Minecraft-focused creator (~5M subs, ~12M monthly views) who appears on every curated 'kid-safe' list — no profanity, challenge and creative gameplay targeting ages 5–10. The craftee.store plush lineup (Classic Plushie $29.99, Golden variant, Chester plushie $26.99) remains available but generating no buzz. Subscriber growth stalled near zero; no franchise deals, retail expansion, or new drops detected through late July 2026. Consecutive trend score drops with no catalyst in sight — firmly catalog-only territory." },

    { name: "OMZ", type: "Creator", subs: 6.06, buzz: [null, null, 7, 7, 7, 7], interest: [null, null, 60, 68, 72, 80], rising: true,
      about: "OMZ (Omz Crew) is an American Minecraft roleplay YouTuber (~6.06M subscribers, 1.66B total views) generating 54M+ monthly views. 'Crystal's EX BOYFRIEND' is the active story arc as of late July 2026 — now extended cross-platform into Roblox ('Meeting Crystal's Ex Boyfriend In Roblox Rivals'), a cross-game narrative strategy sustaining broad engagement. Merch confirmed at omzcrew.com, Amazon (full crew bundle), TikTok Shop, and Walmart; OMZ Squish Plushies available alongside standard plush and mystery boxes." },

    { name: "Yarik Paw", type: "Creator", subs: 4.6, buzz: [null, null, null, null, 7, 8], interest: [null, null, null, null, 57, 70], rising: true,
      about: "Yarik Paw (@YarikPawGames) is a Ukrainian creator pioneering 'cinematic Minecraft' — episodic stories with emotional arcs and cliffhangers — at ~4.6M subscribers and 2.9B lifetime views (confirmed in active July 2026 press via StreetInsider/MSN). His YarikPawShorts channel hit 500M views in just 75 days (LA Weekly July 2026) — the fastest-growing Minecraft Shorts milestone on the board. An active PR campaign around both milestones is driving search interest to 70 heading into August; no toy or licensing deal found as of late July 2026 — notable white space given the defined character roster and proven appetite for story-Minecraft product." },

    // ---- FAN / ANIMATION CHARACTERS (merch-eligible — NOT Mojang's mobs) ----
    // Animated character duos — extremely high recognition w/ 6-10 y/o; CONFIRMED top sellers at Red Lava Toys shows.
    { name: "JJ & Mikey", type: "Character/Mob", subs: null, buzz: [10, 10, 10, 10, 10, 10], interest: [96, 97, 98, 98, 98, 98], rising: true,
      about: "JJ and Mikey are the lead characters of Maizen's animated Minecraft skits — the JJ & Mikey TV series is in its active summer 2026 streaming window on Tubi, Roku, and Ryan and Friends Plus. The Pocket.watch franchise deal confirms Scholastic books early 2027 and Bonkers Toys plush + blind-boxes Spring 2027 — the retail gap remains the near-term custom-merch opportunity. Maizen universe supporting characters 'Carrie' and 'Banana Kid' are being requested by name in Etsy buyer reviews with zero official product — open custom design slots. Confirmed #1 top sellers at Red Lava Toys shows." },
    { name: "Nico & Cash", type: "Character/Mob", subs: null, buzz: [10, 9, 9, 9, 9, 9], interest: [90, 86, 87, 88, 88, 89], rising: true,
      about: "Nico and Cash are a paired-character Minecraft animation duo — Cash's channel hit 11M subscribers on June 8, 2026; Nico at ~4.9M and climbing. Official plush line at cashandnico.com includes Nico Superhero, Cash Superhero, Shady, Toast Miner, Cash, and Nico plushies (9in Youtooz variant also available); Amazon shows 2,000+ units sold per month in Kids' Plush Toy Pillows. A 'Nico: The Movie' theatrical project circulates in fan wikis but has not been confirmed by any trade publication as of late July 2026 — treat as audience excitement until a signed deal is announced." },
    { name: "Chip & Milo", type: "Character/Mob", subs: 4.1, buzz: [9, 8, 9, 9, 9, 9], interest: [85, 83, 90, 93, 94, 96], rising: true,
      about: "Milo and Chip are an animated-Minecraft duo from EYstreem's Spawnpoint Media (4.1M subs, 231M views/month). The Milo plush sold out (4,000 orders in ~2 weeks with zero paid marketing) — Tubefilter June 2026: 'We didn't anticipate how strong the IP had become'; Chip plushie still available at miloandchip.com with Milo restock TBA. The Elemental Milo & Chip skin pack launched May 2026 (4.8/5 stars). Retail footprint remains DTC/Amazon only — no big-box expansion confirmed yet. Milo (age 6) and Chip (age 10) bracket the 5–10 demo perfectly; proven sell-out plush demand with no mass-retail competition." },
    { name: "Alan Becker (AvM)", type: "Character/Mob", subs: 33.7, buzz: [8, 8, 9, 10, 10, 10], interest: [70, 77, 85, 98, 99, 95], rising: true,
      about: "Alan Becker's color-coded stick figures — The Second Coming, King Orange, Yellow, Green, Blue, and Red — star in 'Animation vs. Minecraft' (~33.7M subs, 112M views in the past 30 days). 'Animation vs. Geometry Dash' (released July 18, 2026) continues to circulate widely; the July 2026 newsletter included a sneak peek of AVM Shorts Episode 40 featuring Red and Blue, with an August 2026 release anticipated per the AvM fandom wiki. Merch via alanbecker.shop and Youtooz (Couch Figures set, Blind Box) only — zero mass-retail presence despite 33.7M+ subscribers: largest under-served retail white space in creator-Minecraft merch." },

    // ---- FORMATS / TOPICS (what kind of videos they're glued to) ----
    { name: "'Minecraft BUT…'", type: "Format", subs: null, buzz: [7, 7, 7, 7, 7, 7], interest: [61, 62, 62, 62, 62, 62], rising: false,
      about: "'Minecraft BUT…' is a dominant format where a normal playthrough is twisted by one wild rule or mod (e.g. 'Minecraft BUT everything is giant'). It's build/challenge/reaction content that's endlessly remixable. CaseOh's Hardcore format is the current evolution of this template." },
    { name: "Brainrot skits", type: "Format", subs: null, buzz: [7, 6, 2, 1, 1, 1], interest: [63, 60, 42, 27, 16, 7], rising: false,
      about: "'Brainrot' skits are chaotic, sensory-overload short videos that use Minecraft skins to act out absurd stories. LankyBox's TikTok Shop confirmed 748K+ items sold historically — this audience converts directly to buyers at high volume. LankyBox is now confirmed quit (27+ weeks, no uploads since ~April 2026) and the format's primary signal driver is offline with no returning creator and no replacement emerging as of late July 2026. Format interest at lowest point tracked." },
    { name: "Roleplay servers", type: "Format", subs: null, buzz: [5, 5, 5, 5, 6, 6], interest: [46, 48, 51, 57, 64, 70], rising: true,
      about: "Minecraft roleplay (RP) servers are fictional worlds with their own economies, governments and ongoing storylines where players act out characters. They're growing fast as a social, narrative way to play. OMZ Crew's 'Crystal's EX BOYFRIEND' arc has now extended cross-platform into Roblox, sustaining engagement and driving interest to 70 into late July 2026. Popular with kids who love the 'pretend' and community side." },

    // ---- MOJANG IP — official game content (CUSTOMER AWARENESS ONLY, not merch) ----
    { name: "Baby mobs (Tiny Takeover)", type: "Character/Mob", ip: "mojang", subs: null, buzz: [4, 4, 2, 2, 1, 0], interest: [50, 43, 28, 14, 5, 1], rising: false,
      about: "The March 2026 'Tiny Takeover' drop redesigned every baby farm animal — puppies, kittens, piglets, calves, chicks, lambs, ocelots and bunnies — for maximum cuteness. Now 4+ months post-launch, the initial viral wave has fully settled and interest is near zero. Official Mojang content: great to know about for customer chats, but NOT something Red Lava Toys can make merch of." },
    { name: "Sulfur cube", type: "Character/Mob", ip: "mojang", subs: null, buzz: [6, 6, 6, 6, 6, 6], interest: [54, 55, 55, 56, 56, 57], rising: true,
      about: "The sulfur cube is a Minecraft mob that can absorb blocks — a mechanic unlike anything else in the game, driving lots of reaction/explainer videos. Official Mojang content: worth knowing for customer conversations, but not merch-eligible for Red Lava Toys." },
    { name: "A Minecraft Movie", type: "Format", ip: "mojang", subs: null, buzz: [6, 7, 9, 9, 9, 9], interest: [62, 68, 75, 77, 78, 70], rising: false,
      about: "The live-action/animated Warner Bros. film (April 2025) continues to drive streaming discovery; the Minecraft Summer Sale (June 30–July 28, 2026) concluded July 28. Sequel 'A Minecraft Movie Squared' (July 23, 2027) filming in New Zealand — confirmed cast includes Momoa, Black, Brooks, Myers, Hansen, Coolidge returning, plus Kirsten Dunst as Alex; Matt Berry in a mystery role. Mojang/WB IP — strong customer-conversation context, not merch-eligible for Red Lava Toys." },
    { name: "Netflix Minecraft Series", type: "Format", ip: "mojang", subs: null, buzz: [null, null, 9, 9, 9, 7], interest: [null, null, 74, 89, 86, 72], rising: false,
      about: "WildBrain/Flying Bark CG-animated series (head writer: A.C. Bradley of Marvel's What If...?) is streaming on Netflix in summer 2026. Confirmed quiet rollout: no Netflix Top 10 appearance after 6+ weeks on platform, no character names publicly revealed in wide press, no Season 2 announcement — interest settling to 72 confirms moderate-only reception. Fan art and reaction content continue at lower velocity. Produced under Mojang/Netflix license — monitor for character name reveals and a first Top 10 appearance; those milestones will signal when mainstream demand peaks. NOT merch-eligible for Red Lava Toys." }
  ],

  // Merch-eligible names ONLY (never Mojang IP).
  movers: {
    up:   ["Aphmau", "Alan Becker (AvM)", "Yarik Paw"],
    down: ["Jelly", "Brainrot skits", "Craftee"],
    new:  []
  },

  headline: "JUL 31 — APHMAU: 'I Wouldn't Change A Thing' lyric video officially live TODAY (re-released Jul 31 after accidental Jul 27-28 drop); Bonkers nationwide retail DAYS away (August 2026) — custom window CLOSING NOW. ALAN BECKER (AvM): July newsletter sneak peek for Ep 40 (Red & Blue) confirmed; August release imminent; 33.7M subs + 112M views/30 days, ZERO mass retail = #1 white-space slot. CHIP & MILO: Milo plush SOLD OUT (4,000 units/2 weeks, zero paid marketing); Tubefilter: 'stronger than anyone anticipated' — restock TBA, no big-box competition. CASEOH: July 3 Summer drop SOLD OUT; 'Restock coming soon'; next drop TBD (fall cadence) — anticipation building. YARIK PAW: Active PR push — 2.9B views + 500M Shorts views press live; interest rising to 70, no toy deal = open white space. JJ & MIKEY: TV series in active summer streaming window on Tubi/Roku/Ryan Friends Plus; Bonkers Spring 2027 = custom gap wide open NOW. OMZ: Crystal arc extended cross-platform into Roblox; interest 80, rising. (Mojang IP context: Netflix Series 6+ weeks on platform — NO Top 10, no character reveals, interest settling at 72, quiet rollout confirmed — not merch; A Minecraft Movie Summer Sale ended Jul 28; sequel filming NZ for Jul 2027 — not merch.)"
};
