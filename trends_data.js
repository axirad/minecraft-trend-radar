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
  updated: "2026-06-25",
  weeks: ["Jun 1"],            // week-start labels, oldest -> newest

  entities: [
    // ---- CREATORS (the "make my skin look like them" names) ----
    { name: "Aphmau", type: "Creator", subs: 25.9, buzz: [8], interest: [78], rising: true,
      about: "Aphmau (Jess) is one of the biggest kid-facing Minecraft creators, confirmed at ~25.9M subscribers in 2026 with 29.1B+ lifetime views. Her channel blends modded, RPG-style roleplay 'episodes' with music videos and Shorts. The bright, character-driven storytelling makes her a go-to for the 6–10 crowd — and her MeeMeows blind-box plush line (now on Series 8 'Elemental') is in Amazon, Walmart, Target, and Claire's." },
    { name: "Maizen", type: "Creator", subs: 23, buzz: [9], interest: [76], rising: true,
      about: "Maizen (22.9M subs per Variety May 2026; 267M+ monthly views) makes story-driven Minecraft skits built around its 'JJ and Mikey' characters. In 2026 it signed a Pocket.watch franchise deal — the JJ & Mikey TV series is NOW streaming on Tubi, Roku, and Ryan and Friends Plus; Scholastic books arrive early 2027; official Bonkers Toys plush + blind-boxes hit major retailers spring 2027. The CHANNEL's value to us is its CHARACTERS — the indie-merch window is at peak urgency." },
    { name: "Mikecrack", type: "Creator", subs: 58, buzz: [7], interest: [72], rising: false,
      about: "Mikecrack is the most-subscribed Spanish YouTuber at ~58M subs and is enormous with younger and Spanish-speaking kids. In 2026 he expanded his youth entertainment empire with animated gaming projects and bestselling children's books. Strong, recognizable character designs across his recurring cast." },
    { name: "Jelly", type: "Creator", subs: 23, buzz: [7], interest: [68], rising: false,
      about: "Jelly is a top kid-friendly Minecraft YouTuber (~23M subs) known for short, easy-to-watch videos. He plays challenges, mini-games and modded worlds, often with friends. The bite-sized format makes him a favorite for younger viewers." },
    { name: "MrBeast Gaming", type: "Creator", subs: 42, buzz: [7], interest: [73], rising: false,
      about: "MrBeast Gaming is the gaming channel of mega-creator MrBeast (~42M subs). Its Minecraft content leans on big-budget challenges, prizes and spectacle. It's less about one character and more about event-style videos kids love." },
    { name: "SSundee", type: "Creator", subs: 25.4, buzz: [7], interest: [62], rising: true,
      about: "SSundee (~25.4M subs, 57.7M+ monthly views in June 2026, gaining +100K subs/month) is a top US Minecraft creator known for funny commentary and constantly dropping pop-culture characters into mod games. His upbeat, kid-appropriate style and high upload frequency keep him a steady 6–10 favorite — and an underserved merch opportunity with no official toy line." },
    { name: "LankyBox", type: "Creator", subs: null, buzz: [7], interest: [65], rising: true,
      about: "LankyBox is a high-energy duo whose 'brainrot'-style skits use Minecraft (and other game) skins for chaotic comedy. The brand is heavily merch-driven with Foxy, Boxy, and Rocky plushies actively selling on TikTok Shop (Bonkers Toys line). Polarizing with parents, but enormously popular with kids ages 4–8." },
    { name: "CaseOh", type: "Creator", subs: 10.4, buzz: [7], interest: [63], rising: true,
      about: "CaseOh is a rising creator confirmed at 10.4M subscribers (June 2026), known for reaction and 'Minecraft BUT…' challenge videos with a big comedic personality. His clips spread fast across YouTube Shorts and TikTok. Multi-game creator, but his Minecraft content pulls strong kid numbers." },
    { name: "EYstreem", type: "Creator", subs: 13.6, buzz: [8], interest: [74], rising: true,
      about: "EYstreem is Australia's most-watched global gaming YouTuber (~13.6M subs), profiled in a June 2026 Tubefilter feature on Spawnpoint Media building global brands on YouTube. The Milo plush sold out in 2 weeks (4,000 orders, zero paid marketing), and the Elemental Milo & Chip skin pack launched May 2026. Spawnpoint's next stated priority is brand partnerships and merch." },
    { name: "DanTDM", type: "Creator", subs: 26, buzz: [6], interest: [58], rising: false,
      about: "DanTDM is a long-running British Minecraft creator (~26M subs) active since 2012. He's known for clean, family-friendly Let's Plays, mod showcases and challenges. A trusted, evergreen name with the kid audience." },
    { name: "PrestonPlayz", type: "Creator", subs: null, buzz: [7], interest: [60], rising: true,
      about: "PrestonPlayz's Bonkers Toys mystery plush line (Series 1) launched Spring 2026 and is already carrying Amazon's Choice and Bestseller badges in Plush Dolls — confirming strong retail demand. He runs a family of channels and is a familiar name to most kid Minecraft fans. Official retail momentum makes this a relevant name for show conversations even as the indie window tightens." },
    { name: "Dream", type: "Creator", subs: 31.5, buzz: [5], interest: [53], rising: false,
      about: "Dream (Clay) is one of the most famous US Minecraft names (~31.5M subs), known for 'Minecraft Manhunt' and speedrun content. His day-to-day Minecraft output has slowed, but the brand and faceless smiley logo are iconic. Recognition stays high even with kids who don't watch regularly." },
    { name: "Unspeakable", type: "Creator", subs: null, buzz: [5], interest: [51], rising: false,
      about: "Unspeakable is a 'loud,' high-energy creator known for challenges, builds and real-life crossovers. The big personality and colorful thumbnails play well with younger viewers. A long-standing staple of the kid-Minecraft scene." },
    { name: "TommyInnit", type: "Creator", subs: 12, buzz: [5], interest: [49], rising: false,
      about: "TommyInnit is a hugely popular British creator (~12M subs) who rose through Minecraft SMP servers and streams. His comedic, chaotic personality built a big following. He skews slightly older-kid/teen." },
    { name: "Wisp", type: "Creator", subs: null, buzz: [4], interest: [46], rising: false,
      about: "Wisp makes 'wild mod' Minecraft videos that are chaotic, funny and unpredictable. The light-hearted tone keeps it broadly kid-friendly. Good source of meme-y, surprising content." },
    { name: "Stampy", type: "Creator", subs: null, buzz: [4], interest: [37], rising: false,
      about: "Stampy (Stampy Cat) is the original kid-safe Minecraft creator, voiced as a cheerful cartoon cat. His long-running 'Lovely World' series is wholesome, narrative and genuinely funny. A trusted classic for the youngest viewers." },

    // ---- FAN / ANIMATION CHARACTERS (merch-eligible — NOT Mojang's mobs) ----
    // Animated character duos — extremely high recognition w/ 6-10 y/o; CONFIRMED top sellers at Red Lava Toys shows.
    { name: "JJ & Mikey", type: "Character/Mob", subs: null, buzz: [10], interest: [96], rising: true,
      about: "JJ and Mikey are the lead characters of Maizen's animated Minecraft skits — the JJ & Mikey TV series is NOW LIVE on Tubi, Roku, and Ryan and Friends Plus (June 2026). The Mikey Turtle plush has already sold out on the official store; official Bonkers Toys plush + blind-boxes hit major retailers spring 2027. The indie-merch window is at PEAK urgency — confirmed #1 top sellers at Red Lava Toys shows." },
    { name: "Nico & Cash", type: "Character/Mob", subs: null, buzz: [8], interest: [79], rising: true,
      about: "Nico and Cash are a paired-character Minecraft animation duo in the same skit/challenge style as JJ & Mikey — their individual channels each approach ~5M subs and both are gaining ~100K/month. Official merch is LIVE at cashandnico.com (plushies, shirts, stickers, comic books). Third-party plushes also sell on Etsy. Confirmed strong demand at Red Lava Toys shows." },
    { name: "Chip & Milo", type: "Character/Mob", subs: 4.1, buzz: [9], interest: [85], rising: true,
      about: "Milo and Chip are an animated-Minecraft duo from EYstreem's Spawnpoint Media (4.1M subs; 16B watch minutes May–Oct 2025). The Milo plush sold out in 2 weeks (4,000 orders, zero paid marketing), and the Elemental Milo & Chip skin pack launched May 2026. Their Minecraft Marketplace skin pack remains the #1 best-seller (outsold Star Wars). Spawnpoint's next priority is brand partnerships — indie demand at peak." },
    { name: "Alan Becker (AvM)", type: "Character/Mob", subs: 33.6, buzz: [8], interest: [70], rising: true,
      about: "Alan Becker's color-coded stick figures — Orange (The Second Coming), Yellow, Green, Blue, and Red — star in 'Animation vs. Minecraft' (33.6M subs, 9.6B+ views; hit 33M milestone May 2026). These are Becker's own original characters, not Mojang IP. Already merchandised through Youtooz blind boxes and alanbecker.shop plushies. Broad kids 6–14 appeal with strong name recognition at shows." },

    // ---- FORMATS / TOPICS (what kind of videos they're glued to) ----
    { name: "'Minecraft BUT…'", type: "Format", subs: null, buzz: [7], interest: [61], rising: false,
      about: "'Minecraft BUT…' is a dominant format where a normal playthrough is twisted by one wild rule or mod (e.g. 'Minecraft BUT everything is giant'). It's build/challenge/reaction content that's endlessly remixable. Huge across the entire kid-creator space." },
    { name: "Brainrot skits", type: "Format", subs: null, buzz: [7], interest: [63], rising: true,
      about: "'Brainrot' skits are chaotic, sensory-overload short videos that use Minecraft skins to act out absurd stories. LankyBox's active TikTok Shop merch sales confirm this audience converts to buyers. Fast, loud and meme-driven — controversial with parents, irresistible to kids." },
    { name: "Roleplay servers", type: "Format", subs: null, buzz: [5], interest: [46], rising: true,
      about: "Minecraft roleplay (RP) servers are fictional worlds with their own economies, governments and ongoing storylines where players act out characters. They're growing fast as a social, narrative way to play. Popular with kids who love the 'pretend' and community side." },

    // ---- MOJANG IP — official game content (CUSTOMER AWARENESS ONLY, not merch) ----
    { name: "Baby mobs (Tiny Takeover)", type: "Character/Mob", ip: "mojang", subs: null, buzz: [5], interest: [58], rising: false,
      about: "The March 2026 'Tiny Takeover' drop redesigned every baby farm animal — puppies, kittens, piglets, calves, chicks, lambs, ocelots and bunnies — for maximum cuteness. Now ~4 months post-launch the initial viral wave has fully settled. Official Mojang content: great to know about for customer chats, but NOT something Red Lava Toys can make merch of." },
    { name: "Sulfur cube", type: "Character/Mob", ip: "mojang", subs: null, buzz: [6], interest: [54], rising: true,
      about: "The sulfur cube is a Minecraft mob that can absorb blocks — a mechanic unlike anything else in the game, driving lots of reaction/explainer videos. Official Mojang content: worth knowing for customer conversations, but not merch-eligible for Red Lava Toys." },
    { name: "A Minecraft Movie", type: "Format", ip: "mojang", subs: null, buzz: [6], interest: [65], rising: false,
      about: "The live-action/animated Warner Bros. film (2025) continues to drive merchandise sales on TikTok Shop, with Steve, Alex, and character plushies actively selling as kids discover it on streaming. Mojang/WB IP — excellent context for customer conversations about what kids are excited about, but not merch-eligible for Red Lava Toys." }
  ],

  // Merch-eligible names ONLY (never Mojang IP).
  movers: {
    up:   ["JJ & Mikey", "Chip & Milo", "EYstreem", "Maizen", "SSundee", "PrestonPlayz"],
    down: [],
    new:  ["Alan Becker (AvM)"]
  },

  headline: "JJ & Mikey TV series NOW LIVE (Tubi/Roku/Ryan+) — indie-merch window at peak urgency before Bonkers Toys hits major retail spring 2027; Mikey Turtle plush already sold out. Chip & Milo Milo plush sold out (4,000 orders, zero marketing) + Elemental skin pack live May 2026. Alan Becker's AvM stick figures newly tracked: 33.6M subs, Youtooz blind box already exists — underserved in show merch. SSundee surging (57M+ monthly views, +100K/month). (Mojang content tracked for awareness only — not merch.)"
};
