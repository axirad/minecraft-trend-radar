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
  updated: "2026-06-22",
  weeks: ["Jun 1"],            // week-start labels, oldest -> newest

  entities: [
    // ---- CREATORS (the "make my skin look like them" names) ----
    { name: "Aphmau", type: "Creator", subs: 25, buzz: [8], interest: [78], rising: true,
      about: "Aphmau (Jess) is one of the biggest kid-facing Minecraft creators, now at 25M+ subscribers and pulling 257M+ monthly views. Her channel blends modded, RPG-style roleplay 'episodes' with music videos and Shorts. The bright, character-driven storytelling makes her a go-to for the 6–10 crowd." },
    { name: "Maizen", type: "Creator", subs: 4, buzz: [9], interest: [74], rising: true,
      about: "Maizen (~4M subs, 2.8B+ views) makes story-driven Minecraft skits built around its 'JJ and Mikey' characters and viral challenges. In 2026 it signed a Pocket.watch franchise deal — the JJ & Mikey TV series is NOW streaming on Tubi, Roku, and Ryan and Friends Plus; Scholastic books arrive early 2027; official Bonkers Toys plush + blind-boxes hit major retailers spring 2027. The CHANNEL's value to us is its CHARACTERS — the indie-merch window is at peak urgency." },
    { name: "Mikecrack", type: "Creator", subs: 58, buzz: [7], interest: [72], rising: false,
      about: "Mikecrack is the most-subscribed Spanish YouTuber at ~58M subs and is enormous with younger and Spanish-speaking kids. In 2026 he expanded his youth entertainment empire with animated gaming projects and bestselling children's books. Strong, recognizable character designs across his recurring cast." },
    { name: "Jelly", type: "Creator", subs: 23, buzz: [7], interest: [69], rising: false,
      about: "Jelly is a top kid-friendly Minecraft YouTuber (~23M subs) known for short, easy-to-watch videos. He plays challenges, mini-games and modded worlds, often with friends. The bite-sized format makes him a favorite for younger viewers." },
    { name: "MrBeast Gaming", type: "Creator", subs: 42, buzz: [7], interest: [74], rising: false,
      about: "MrBeast Gaming is the gaming channel of mega-creator MrBeast (~42M subs). Its Minecraft content leans on big-budget challenges, prizes and spectacle. It's less about one character and more about event-style videos kids love." },
    { name: "SSundee", type: "Creator", subs: 25, buzz: [6], interest: [60], rising: true,
      about: "SSundee (~25M subs, 57M+ monthly views, 3,700+ videos) is a top US Minecraft creator known for funny commentary and constantly dropping pop-culture characters into mod games. His upbeat, broadly kid-appropriate style and high upload frequency keep him a steady 6–10 favorite in 2026." },
    { name: "LankyBox", type: "Creator", subs: null, buzz: [7], interest: [66], rising: true,
      about: "LankyBox is a high-energy duo whose 'brainrot'-style skits use Minecraft (and other game) skins for chaotic comedy. The brand is heavily merch-driven with Foxy, Boxy, and Rocky plushies actively selling on TikTok Shop. Polarizing with parents, but enormously popular with kids." },
    { name: "CaseOh", type: "Creator", subs: 10, buzz: [7], interest: [64], rising: true,
      about: "CaseOh is a rising creator at 10.4M subscribers gaining ~200K/month, known for reaction and 'Minecraft BUT…' challenge videos with a big comedic personality. His clips spread fast across YouTube Shorts and TikTok. Multi-game creator, but his Minecraft content pulls strong kid numbers." },
    { name: "DanTDM", type: "Creator", subs: 26, buzz: [6], interest: [60], rising: false,
      about: "DanTDM is a long-running British Minecraft creator (~26M subs) active since 2012. He's known for clean, family-friendly Let's Plays, mod showcases and challenges. A trusted, evergreen name with the kid audience." },
    { name: "PrestonPlayz", type: "Creator", subs: null, buzz: [6], interest: [55], rising: false,
      about: "PrestonPlayz built his following on parkour maps, challenges and an upbeat, positive style. He runs a family of channels and is a familiar name to most kid Minecraft fans. His content stays broadly kid-appropriate." },
    { name: "Dream", type: "Creator", subs: 31.5, buzz: [5], interest: [55], rising: false,
      about: "Dream (Clay) is one of the most famous US Minecraft names (~31.5M subs), known for 'Minecraft Manhunt' and speedrun content. His day-to-day Minecraft output has slowed, but the brand and faceless smiley logo are iconic. Recognition stays high even with kids who don't watch regularly." },
    { name: "Unspeakable", type: "Creator", subs: null, buzz: [5], interest: [52], rising: false,
      about: "Unspeakable is a 'loud,' high-energy creator known for challenges, builds and real-life crossovers. The big personality and colorful thumbnails play well with younger viewers. A long-standing staple of the kid-Minecraft scene." },
    { name: "TommyInnit", type: "Creator", subs: 12, buzz: [5], interest: [50], rising: false,
      about: "TommyInnit is a hugely popular British creator (~12M subs) who rose through Minecraft SMP servers and streams. His comedic, chaotic personality built a big following. He skews slightly older-kid/teen." },
    { name: "Wisp", type: "Creator", subs: null, buzz: [5], interest: [48], rising: false,
      about: "Wisp makes 'wild mod' Minecraft videos that are chaotic, funny and unpredictable. The light-hearted tone keeps it broadly kid-friendly. Good source of meme-y, surprising content." },
    { name: "Stampy", type: "Creator", subs: null, buzz: [4], interest: [38], rising: false,
      about: "Stampy (Stampy Cat) is the original kid-safe Minecraft creator, voiced as a cheerful cartoon cat. His long-running 'Lovely World' series is wholesome, narrative and genuinely funny. A trusted classic for the youngest viewers." },

    // ---- FAN / ANIMATION CHARACTERS (merch-eligible — NOT Mojang's mobs) ----
    // Animated character duos — extremely high recognition w/ 6-10 y/o; CONFIRMED top sellers at Red Lava Toys shows.
    { name: "JJ & Mikey", type: "Character/Mob", subs: null, buzz: [9], interest: [93], rising: true,
      about: "JJ and Mikey are the lead characters of Maizen's animated Minecraft skits — the JJ & Mikey TV series is NOW streaming on Tubi, Roku, and Ryan and Friends Plus (summer 2026). The Mikey Turtle plush has already sold out on the official store; official Bonkers Toys plush + blind-boxes hit major retailers spring 2027. The indie-merch window is at PEAK urgency — confirmed #1 top sellers at Red Lava Toys shows." },
    { name: "Nico & Cash", type: "Character/Mob", subs: null, buzz: [8], interest: [80], rising: true,
      about: "Nico and Cash are a paired-character Minecraft animation duo in the same skit/challenge style as JJ & Mikey, part of the broader Maizen-style universe. Recognition with younger kids is extremely high and third-party plushes already sell on Etsy. Confirmed strong demand at Red Lava Toys shows." },
    { name: "Chip & Milo", type: "Character/Mob", subs: null, buzz: [8], interest: [78], rising: true,
      about: "Milo and Chip are another popular animated-Minecraft character duo in the JJ-&-Mikey vein of challenge and story skits. They have an official merch store (miloandchip.com) with plushies now shipping, plus an active Etsy and Amazon presence. Confirmed big at Red Lava Toys shows." },

    // ---- FORMATS / TOPICS (what kind of videos they're glued to) ----
    { name: "'Minecraft BUT…'", type: "Format", subs: null, buzz: [7], interest: [62], rising: false,
      about: "'Minecraft BUT…' is a dominant format where a normal playthrough is twisted by one wild rule or mod (e.g. 'Minecraft BUT everything is giant'). It's build/challenge/reaction content that's endlessly remixable. Huge across the entire kid-creator space." },
    { name: "Brainrot skits", type: "Format", subs: null, buzz: [7], interest: [62], rising: true,
      about: "'Brainrot' skits are chaotic, sensory-overload short videos that use Minecraft skins to act out absurd stories. LankyBox's active TikTok Shop merch sales confirm this audience converts to buyers. Fast, loud and meme-driven — controversial with parents, irresistible to kids." },
    { name: "Roleplay servers", type: "Format", subs: null, buzz: [5], interest: [45], rising: true,
      about: "Minecraft roleplay (RP) servers are fictional worlds with their own economies, governments and ongoing storylines where players act out characters. They're growing fast as a social, narrative way to play. Popular with kids who love the 'pretend' and community side." },

    // ---- MOJANG IP — official game content (CUSTOMER AWARENESS ONLY, not merch) ----
    { name: "Baby mobs (Tiny Takeover)", type: "Character/Mob", ip: "mojang", subs: null, buzz: [8], interest: [80], rising: true,
      about: "The 2026 'Tiny Takeover' drop redesigned every baby farm animal — puppies, kittens, piglets, calves, chicks, lambs, ocelots and bunnies — for maximum cuteness. Initial viral wave is settling slightly but still drives significant cute-content traffic. Official Mojang content: great to know about for customer chats, but NOT something Red Lava Toys can make merch of." },
    { name: "Sulfur cube", type: "Character/Mob", ip: "mojang", subs: null, buzz: [6], interest: [52], rising: true,
      about: "The sulfur cube is a newly revealed Minecraft mob that can absorb blocks — a mechanic unlike anything else in the game, driving lots of reaction/explainer videos. Official Mojang content: worth knowing for customer conversations, but not merch-eligible for Red Lava Toys." }
  ],

  // Merch-eligible names ONLY (never Mojang IP).
  movers: {
    up:   ["JJ & Mikey", "Maizen", "Nico & Cash", "Chip & Milo", "CaseOh"],
    down: [],
    new:  ["SSundee"]
  },

  headline: "JJ & Mikey TV series is NOW streaming on Tubi, Roku & Ryan and Friends Plus — the indie-merch window for JJ & Mikey, Nico & Cash, and Chip & Milo is at peak urgency ahead of Bonkers Toys hitting major retailers spring 2027; Mikey Turtle plush already sold out. Maizen channel hits buzz 9. Aphmau at 25M subs (257M monthly views); Mikecrack expanded to 58M. (Mojang game content tracked separately for awareness — not merch.)"
};
