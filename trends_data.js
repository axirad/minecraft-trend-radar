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
  updated: "2026-06-30",
  weeks: ["Jun 1", "Jun 29"],    // week-start labels, oldest -> newest

  entities: [
    // ---- CREATORS (the "make my skin look like them" names) ----
    { name: "Aphmau", type: "Creator", subs: 25.9, buzz: [8, 9], interest: [80, 85], rising: true,
      about: "Aphmau (Jess) is one of the biggest kid-facing Minecraft creators (~25.9M subscribers) with 29.1B+ lifetime views. Her MeeMeows Litter 7 Elemental — 8 elemental cat variants — shipped to the widest retail footprint yet in June 2026, confirmed live at Amazon, Walmart, Target, Entertainment Earth, and ToyWiz simultaneously (plus a companion 6-inch Carnival Treats plush line in 9 variants). A parallel Litter 7 Carnival Treats plush line adds 9 more SKUs. The broadest retail placement in her toy line's history sustains peak summer demand with the 6–10 audience." },
    { name: "Maizen", type: "Creator", subs: 23, buzz: [9, 9], interest: [78, 82], rising: true,
      about: "Maizen (22.9M subs per Variety May 2026; 267M+ monthly views) makes story-driven Minecraft skits built around its 'JJ and Mikey' characters. The JJ & Mikey TV series is streaming on Tubi, Roku, and Ryan and Friends Plus; Scholastic books arrive early 2027; official Bonkers Toys plush + blind-boxes hit major retailers spring 2027. The TikTok Shop Summer Sale (June 17–July 2, 2026) is boosting indie sell-through — the indie-merch window is at peak urgency." },
    { name: "Mikecrack", type: "Creator", subs: 58, buzz: [7, 7], interest: [72, 71], rising: false,
      about: "Mikecrack is the most-subscribed Spanish YouTuber at ~58.5M subs (0.18% monthly growth in June 2026 — a consolidation phase) and is enormous with younger and Spanish-speaking kids. The Los Compas trio (Mikecrack, ElTrollino, Timba VK) book series has sold 31M+ copies worldwide across 10+ titles. His 'Mikecrack y la superarma secreta' live spectacular — an arena show based on his animated series — is actively touring. Strong, recognizable character designs across his recurring cast." },
    { name: "Jelly", type: "Creator", subs: 23, buzz: [7, 6], interest: [68, 65], rising: false,
      about: "Jelly is a top kid-friendly Minecraft YouTuber (~23M subs) known for short, easy-to-watch videos. He plays challenges, mini-games and modded worlds, often with friends. Interest softened slightly in late June 2026 with no standout new hook content." },
    { name: "MrBeast Gaming", type: "Creator", subs: 42, buzz: [7, 7], interest: [73, 72], rising: false,
      about: "MrBeast Gaming is the gaming channel of mega-creator MrBeast (~42M subs). Its Minecraft content leans on big-budget challenges, prizes and spectacle. It's less about one character and more about event-style videos kids love." },
    { name: "SSundee", type: "Creator", subs: 25.4, buzz: [8, 8], interest: [64, 66], rising: true,
      about: "SSundee (~25.4M subs, 57.7M+ monthly views in June 2026, gaining +100K subs/month) is a top US Minecraft creator known for funny commentary and constantly dropping pop-culture characters into mod games. His upbeat, kid-appropriate style and high upload frequency keep him a steady 6–10 favorite — and the best open merch slot on the radar with zero competing official toy line." },
    { name: "LankyBox", type: "Creator", subs: null, buzz: [7, 7], interest: [65, 67], rising: true,
      about: "LankyBox is a high-energy duo whose 'brainrot'-style skits use Minecraft (and other game) skins for chaotic comedy. The TikTok Shop storefront has crossed 748,700+ items sold (4.8-star rating, 81,900+ followers) — a verified high-volume commerce signal. Product line includes Foxy, Boxy, Thicc Shark, and Ghosty in reversible, scented, and mini mystery formats; also at Target, GameStop, and Amazon. The TikTok Shop Summer Sale (ends July 2, 2026) is in its FINAL 2 DAYS — peak convert-now window. Polarizing with parents, irresistible to kids ages 4–8." },
    { name: "CaseOh", type: "Creator", subs: 10.6, buzz: [7, 8], interest: [63, 68], rising: true,
      about: "CaseOh has grown to 10.6M subscribers as of June 2026 — gaining 200K subs in the most recent month with an excellent 4.13% engagement rate. His 'Minecraft Solo Hardcore Day 1' video hit 12.8M views. Known for reaction and 'Minecraft BUT…' challenge content with a big comedic personality, his clips spread fast on Shorts and TikTok. No official toy line yet — the window is open." },
    { name: "EYstreem", type: "Creator", subs: 13.6, buzz: [8, 8], interest: [74, 76], rising: true,
      about: "EYstreem is Australia's most-watched global gaming YouTuber (~13.6M subs). Spawnpoint Media — his production company — now employs 100+ people generating 75–100M views/month across channels. The Milo collectible plush sold out in 2 weeks (4,000 orders, zero paid marketing) and remained sold out through June 2026. The June 2026 Tubefilter profile confirmed merch and brand partnerships are 'significantly bigger businesses than our content business' — formal retail deals are ramping, indie window narrowing." },
    { name: "DanTDM", type: "Creator", subs: 26, buzz: [6, 6], interest: [58, 58], rising: false,
      about: "DanTDM is a long-running British Minecraft creator (~26M subs) active since 2012. Known for clean, family-friendly Let's Plays and mod showcases. In 2026 he is consulting with Mojang Studios and Merlin Entertainments on a Minecraft World theme-park development. A trusted, evergreen name with the kid audience." },
    { name: "PrestonPlayz", type: "Creator", subs: null, buzz: [7, 7], interest: [62, 63], rising: true,
      about: "PrestonPlayz's Bonkers Toys line is fully at retail: Target (March 2026) and Amazon (April 2026) both carry the Mini Mystery Plush, Pleb Slayer light-up sword, and full plush lineup — and the line won a NAPPA Award. He runs a large family of channels and is a familiar name to most kid Minecraft fans. Official retail placement makes this a relevant name for show conversations even as the indie window tightens." },
    { name: "Dream", type: "Creator", subs: 31.5, buzz: [5, 5], interest: [53, 52], rising: false,
      about: "Dream (Clay) is one of the most famous US Minecraft names (~31.5M subs), known for 'Minecraft Manhunt' and speedrun content. His day-to-day Minecraft output has slowed, but the brand and faceless smiley logo are iconic. Recognition stays high even with kids who don't watch regularly." },
    { name: "Unspeakable", type: "Creator", subs: null, buzz: [5, 5], interest: [51, 50], rising: false,
      about: "Unspeakable is a 'loud,' high-energy creator known for challenges, builds and real-life crossovers. The big personality and colorful thumbnails play well with younger viewers. A long-standing staple of the kid-Minecraft scene." },
    { name: "TommyInnit", type: "Creator", subs: 12, buzz: [5, 5], interest: [49, 49], rising: false,
      about: "TommyInnit is a hugely popular British creator (~12M subs) who rose through Minecraft SMP servers and streams. He shifted to selective content in 2026 ('100 Questions with Tom Simons' interview series, first MC Championship appearance in ~2 years). He skews slightly older-kid/teen." },
    { name: "Wisp", type: "Creator", subs: null, buzz: [4, 4], interest: [46, 45], rising: false,
      about: "Wisp makes 'wild mod' Minecraft videos that are chaotic, funny and unpredictable. The light-hearted tone keeps it broadly kid-friendly. Good source of meme-y, surprising content." },
    { name: "Stampy", type: "Creator", subs: null, buzz: [4, 3], interest: [37, 36], rising: false,
      about: "Stampy (Stampy Cat) is the original kid-safe Minecraft creator, voiced as a cheerful cartoon cat. His long-running 'Lovely World' series is wholesome and narrative. A nostalgic classic — more grandparent-familiar than kid-current in 2026." },

    // ---- FAN / ANIMATION CHARACTERS (merch-eligible — NOT Mojang's mobs) ----
    // Animated character duos — extremely high recognition w/ 6-10 y/o; CONFIRMED top sellers at Red Lava Toys shows.
    { name: "JJ & Mikey", type: "Character/Mob", subs: null, buzz: [10, 10], interest: [96, 96], rising: true,
      about: "JJ and Mikey are the lead characters of Maizen's animated Minecraft skits — the JJ & Mikey TV series is streaming on Tubi, Roku, and Ryan and Friends Plus. TikTok Shop Summer Sale (June 17–July 2, 2026) is the peak indie sell-through window; a single 'Johnny Minecraft Plush' listing previously crossed 171,600 units sold. Official Bonkers Toys plush + blind-boxes hit major retailers spring 2027 — indie window is at PEAK urgency. Confirmed #1 top sellers at Red Lava Toys shows." },
    { name: "Nico & Cash", type: "Character/Mob", subs: null, buzz: [10, 10], interest: [90, 88], rising: true,
      about: "Nico and Cash are a paired-character Minecraft animation duo — Cash's channel at ~11M subscribers, Nico at ~4.9M and climbing. Both characters have strong dedicated fanbases and official merch at cashandnico.com (plushies including Nico Superhero, Cash Superhero, and Shady plushies, plus shirts, stickers, and comic books); Etsy sellers consistently active. Confirmed strong demand at Red Lava Toys shows — the duo competes directly with JJ & Mikey for top spots. No official toy licensing deal announced yet, keeping the indie window open." },
    { name: "Chip & Milo", type: "Character/Mob", subs: 4.1, buzz: [9, 9], interest: [85, 87], rising: true,
      about: "Milo and Chip are an animated-Minecraft duo from EYstreem's Spawnpoint Media (4.1M subs; 16B watch minutes May–Oct 2025). The Milo collectible plush sold out in 2 weeks (4,000 orders, zero paid marketing) and remained sold out through June 2026. The Elemental Milo & Chip skin pack launched May 2026. T-shirts, stickers, and water bottles are still available — the sold-out collectibles signal strong demand for custom alternatives while formal retail deals ramp up." },
    { name: "Alan Becker (AvM)", type: "Character/Mob", subs: 33.6, buzz: [8, 8], interest: [70, 72], rising: true,
      about: "Alan Becker's color-coded stick figures — Orange (The Second Coming), Yellow, Green, Blue, and Red — star in 'Animation vs. Minecraft' (33.6M subs, 9.6B+ views). The new episode 'The Machine — Animator vs Animation 13' released May 30, 2026, injecting fresh energy into the fanbase. These are Becker's own original characters, not Mojang IP. Merchandised through Youtooz blind boxes and alanbecker.shop plushies. Broad kids 6–14 appeal." },

    // ---- FORMATS / TOPICS (what kind of videos they're glued to) ----
    { name: "'Minecraft BUT…'", type: "Format", subs: null, buzz: [7, 7], interest: [61, 62], rising: false,
      about: "'Minecraft BUT…' is a dominant format where a normal playthrough is twisted by one wild rule or mod (e.g. 'Minecraft BUT everything is giant'). It's build/challenge/reaction content that's endlessly remixable. CaseOh's Hardcore format is the current evolution of this template." },
    { name: "Brainrot skits", type: "Format", subs: null, buzz: [7, 7], interest: [63, 64], rising: true,
      about: "'Brainrot' skits are chaotic, sensory-overload short videos that use Minecraft skins to act out absurd stories. LankyBox's active TikTok Shop presence and Summer Sale sell-through confirm this audience converts to buyers. Fast, loud and meme-driven — controversial with parents, irresistible to kids." },
    { name: "Roleplay servers", type: "Format", subs: null, buzz: [5, 5], interest: [46, 47], rising: true,
      about: "Minecraft roleplay (RP) servers are fictional worlds with their own economies, governments and ongoing storylines where players act out characters. They're growing fast as a social, narrative way to play. Popular with kids who love the 'pretend' and community side." },

    // ---- MOJANG IP — official game content (CUSTOMER AWARENESS ONLY, not merch) ----
    { name: "Baby mobs (Tiny Takeover)", type: "Character/Mob", ip: "mojang", subs: null, buzz: [4, 4], interest: [50, 48], rising: false,
      about: "The March 2026 'Tiny Takeover' drop redesigned every baby farm animal — puppies, kittens, piglets, calves, chicks, lambs, ocelots and bunnies — for maximum cuteness. Now ~4 months post-launch the initial viral wave has fully settled. Official Mojang content: great to know about for customer chats, but NOT something Red Lava Toys can make merch of." },
    { name: "Sulfur cube", type: "Character/Mob", ip: "mojang", subs: null, buzz: [6, 6], interest: [54, 55], rising: true,
      about: "The sulfur cube is a Minecraft mob that can absorb blocks — a mechanic unlike anything else in the game, driving lots of reaction/explainer videos. Official Mojang content: worth knowing for customer conversations, but not merch-eligible for Red Lava Toys." },
    { name: "A Minecraft Movie", type: "Format", ip: "mojang", subs: null, buzz: [6, 6], interest: [62, 63], rising: false,
      about: "The live-action/animated Warner Bros. film (April 2025) continues to drive TikTok Shop movie-character plush sales and a streaming discovery wave in summer 2026. A sequel — 'A Minecraft Movie Squared' — has been announced for July 23, 2027, with Kirsten Dunst cast as Alex (the female-coded Steve character), already generating early buzz with girls ages 6–10. A separate untitled Netflix animated Minecraft series is also in production (announced June 2025; showrunners Kevin Adams & Joe Ksander). Mojang/WB IP — strong customer-conversation context, not merch-eligible for Red Lava Toys." }
  ],

  // Merch-eligible names ONLY (never Mojang IP).
  movers: {
    up:   ["Aphmau", "CaseOh"],
    down: ["Jelly", "Stampy"],
    new:  []
  },

  headline: "WEEK OF JUN 29 — FINAL 2 DAYS: TikTok Shop Summer Sale ends July 2 — JJ & Mikey and LankyBox (748K+ TikTok Shop units sold, 4.8★) at peak convert-now urgency. Aphmau's MeeMeows Litter 7 Elemental confirmed live at Amazon, Walmart, Target, Entertainment Earth, ToyWiz + a parallel Carnival Treats plush line (9 variants) — widest retail footprint in the line's history. CaseOh: 10.6M subs, 200K/month growth, 4.13% engagement, zero toy line — fastest-rising open slot on the radar. SSundee (25.4M subs, zero official line) remains the best long-term no-competition opportunity. (Mojang/WB/Netflix IP tracked for awareness only — not merch.)"
};
