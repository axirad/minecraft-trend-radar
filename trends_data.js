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

   HEADLINE + SUMMARY (plain English -- this is what Thad actually reads):
     headline  ONE short sentence, plain English, no scores. The single thing to
               do this week. e.g. "JJ & Mikey is the biggest open window right now."
     summary   { priority[], worth[], keep[], deprioritize[], notes[], background }
       priority     (fire) make these first (names, best first)
       worth        (green) worth having on the table
       keep         (yellow) keep, but don't chase
       deprioritize (red) don't put effort here right now
       notes        one per merch-eligible name, ordered like the tiers:
                    { name, take, why }
                    take = 2-5 words ("BIG opportunity", "popular, but narrowing")
                    why  = 1-3 plain sentences: what happened + what it means
                           for Red Lava Toys figures. NO "interest 100", NO
                           "buzz 9", NO "day 20", NO jargon like "open custom
                           slot" -- say "little toy competition" instead.
       background   1-2 sentences on Mojang/official items -- context only,
                    never framed as a recommendation.
   ============================================================================= */

window.TREND_DATA = {
  updated: "2026-10-22",
  weeks: ["Jun 1", "Jun 29", "Jul 6", "Jul 13", "Jul 20", "Jul 27", "Aug 3", "Aug 10", "Aug 17", "Aug 24", "Aug 31", "Sep 7", "Sep 14", "Sep 21", "Sep 28", "Oct 5", "Oct 12", "Oct 19"],    // week-start labels, oldest -> newest

  entities: [
    // ---- CREATORS (the "make my skin look like them" names) ----
    { name: "Aphmau", type: "Creator", subs: 25.3, buzz: [8, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], interest: [80, 87, 89, 89, 95, 98, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], rising: true,
      about: "Aphmau (Jess) has ~25.2M subscribers and 29.9B+ lifetime views. Bonkers Toys retail launched August 2026 — debuted at SDCC (July) before nationwide rollout to Walmart, Target, Amazon, and Claire's: MyStreet 11\" plush characters, MyStreet Mini Mystery Plush, MeeMeow Collector Figures mystery blind packs, Cat Café Surprise Set, and the Aphmau MyStreet Collector Figure 4-Pack. Dragon MeeMeow ranked #19 in Plush Figure Toys on Amazon; the My Street MeeMeow Mystery Plush (Series 10 Bakery) saw 2,000+ units sold in the past 30 days on a single SKU — strong active velocity. MyStreet Season 7 'Faded Memories' premieres November 30, 2026, opening a short complementary custom window for anything the Bonkers line doesn't cover. Season 8 ('One Last Time') confirmed as the series finale." },
    { name: "Maizen", type: "Creator", subs: 23, buzz: [9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], interest: [78, 85, 87, 88, 90, 92, 97, 98, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100], rising: true,
      about: "Maizen (22.9M subs, 23B+ lifetime views, ranked #1 gaming channel globally) makes story-driven Minecraft skits built around the 'JJ and Mikey' characters. The JJ & Mikey series streams live on Tubi, The Roku Channel, and Ryan and Friends Plus (pocket.watch global franchise deal, May 2026). Juniper worldwide merch window fully closed September 15, 2026 — full cast sold out; the Juniper domain is now offline. Bonkers Toys plush + blind-boxes Spring 2027 and Scholastic books early 2027 confirmed — that Spring 2027 retail gap is the custom-merch window; the Juniper sell-through is the demand signal." },
    { name: "Mikecrack", type: "Creator", subs: 58.6, buzz: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], interest: [72, 71, 71, 71, 71, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72], rising: false,
      about: "Mikecrack is the most-subscribed Spanish YouTuber at ~58.6M subs (ranked #68 globally as of September 2026) and is enormous with younger and Spanish-speaking kids. The channel generated 93M+ views in the last 30 days and gained 100K subs in that period. The Los Compas trio (Mikecrack, ElTrollino, Timba VK) book series has sold 31M+ copies worldwide across 10+ titles. 'Mikecrack y la Superarma Secreta' — his animated-series live spectacular — has 2026/2027 tour dates on Ticketmaster Mexico, keeping the IP visibly in market." },
    { name: "Jelly", type: "Creator", subs: 23, buzz: [7, 5, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], interest: [68, 59, 50, 39, 30, 22, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], rising: false,
      about: "Jelly is a top kid-friendly Minecraft YouTuber (~23M subs) known for short, easy-to-watch videos. Year-long slide is at floor as of August 2026 — no new series, hook content, or franchise announcement; interest at 1, effectively catalog-only with no active trend drivers and no recovery signals." },
    { name: "MrBeast Gaming", type: "Creator", subs: 42, buzz: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 5, 3, 2, 2, 2, 2, 2], interest: [73, 71, 71, 71, 71, 70, 67, 63, 57, 42, 34, 17, 9, 5, 5, 4, 4, 3], rising: false,
      about: "MrBeast Gaming is the gaming channel of mega-creator MrBeast — whose main channel crossed 500M subscribers on June 12, 2026, a YouTube first. The Gaming sub-channel (~42M subs) leans on big-budget Minecraft challenges, prizes, and spectacle. Less about one character and more about event-style videos kids love; interest now at 3 — down from 73 at the Jun 1 start of this tracker — with no recovery signal. Steepest sustained decline on the board." },
    { name: "SSundee", type: "Creator", subs: 25.45, buzz: [8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], interest: [64, 66, 72, 76, 79, 83, 93, 98, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100], rising: true,
      about: "SSundee (25.45M subs, ~4 uploads/week, 2.56% engagement) is a top US Minecraft creator known for funny commentary and pop-culture mod drops. SkyFactory Season 7 with Crainer launched September 13, 2026 — now six-plus weeks in; a community controversy surfaced and was addressed directly in a video on October 12, with the series continuing to produce new episodes through late October. TikTok discovery pages for 'Ssundee Sky Factory' remain active; Pixelmon Season 1 and SSundee Plus channel continue. Zero official toy line = strongest open US-creator custom merch slot alongside Alan Becker." },
    { name: "LankyBox", type: "Creator", subs: 42, buzz: [7, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], interest: [65, 55, 20, 9, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], rising: false,
      about: "LankyBox is a 42M-sub duo known for 'brainrot'-style Minecraft skits. Confirmed quit — no uploads since ~April 2026 (50+ weeks); fan analysis videos and the Adam McArthur / Justin Kroma partnership-split story are the dominant narrative on TikTok. TikTok Shop (748K+ items sold historically) and retail remain live passively on existing SKUs at effectively zero interest. Channel is finished — do not invest in LankyBox-adjacent product for 2026-2027." },
    { name: "CaseOh", type: "Creator", subs: 10.95, buzz: [7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], interest: [63, 68, 76, 82, 85, 86, 91, 92, 93, 95, 96, 97, 100, 100, 100, 100, 100, 100], rising: true,
      about: "CaseOh has ~10.95M YouTube subscribers with 89M+ views in the last 30 days. 'I've Never Been This Scared In Minecraft…' ranked #1 on YouTube Gaming trending as of October 14, 2026 with 778K+ views — the channel is still producing high-velocity Minecraft content. Spooky Time Halloween Drop live at caseohgames.com; Winter Drop launched with 27 products — initial SKUs confirmed sold out with 'Restock coming soon!' notice live, confirming real demand velocity. Cicis Pizza 'Mac & CaseOh Pizza' nationwide collab ongoing; Starforge Systems gaming-PC collab confirmed. No official toy line = open creator slot; core audience skews teen/young-adult but massive older-sibling influence on younger kids." },
    { name: "EYstreem", type: "Creator", subs: 13.9, buzz: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], interest: [74, 76, 76, 77, 77, 82, 87, 91, 95, 99, 100, 100, 100, 100, 100, 100, 100, 100], rising: true,
      about: "EYstreem is Australia's most-watched global gaming YouTuber (~13.76M subs). The Milo and Chip channel (4.1M subs) generates ~231.93M monthly views — extraordinary algorithmic reach relative to sub count. Rainbow Designs named global master toy partner for Milo (announced Licensing Expo Las Vegas, May 2026; retail launch autumn/winter 2027) — the first master toy deal for the IP, covering soft toys rolling into playsets and collectibles. Milo plush restocked at miloandchip.com ($29.99); Chip Second PRE-ORDER for October still open at miloandchip.com ($29.99), confirming repeat demand cycle. The custom-merch window remains fully open through early 2027 — Rainbow Designs products won't hit retail until late 2027." },
    { name: "DanTDM", type: "Creator", subs: 29, buzz: [6, 6, 6, 6, 6, 6, 6, 5, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1], interest: [58, 58, 58, 57, 57, 54, 47, 36, 14, 3, 2, 2, 2, 2, 2, 2, 2, 2], rising: false,
      about: "DanTDM is a long-running British Minecraft creator (~29M subs) active since 2012. Known for clean, family-friendly Let's Plays and mod showcases. In 2026 he is consulting with Mojang Studios and Merlin Entertainments on a Minecraft World theme-park development. Interest at 2 — holding at floor; a trusted evergreen name but generating zero kid-audience interest; catalog-only territory with no recovery signals." },
    { name: "PrestonPlayz", type: "Creator", subs: 17.5, buzz: [7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8], interest: [62, 63, 72, 74, 75, 76, 78, 81, 84, 90, 91, 92, 95, 96, 96, 96, 96, 96], rising: true,
      about: "PrestonPlayz (~17.5M subs on main channel; 66M combined across all channels, 22B views) Bonkers Toys line is fully on shelf at Target and Amazon: Series 1 mini figures (Bloxton, PrestonPlayz, Preston 303, Shining Preston, Preston, Cactus Jones 6-pack), Mystery Merch Box (11 collectibles), plus the NAPPA Award-winning Pleb Slayer light-up sword and Mini Mystery Plush. Subscriber growth has flattened (near-zero net adds in the last 30 days, engagement rate 1.06% rated 'low' by analytics tools) — the channel is established but momentum has plateaued. Benchmark these SKUs for format and price-point — they are live competition on shelf now." },
    { name: "Dream", type: "Creator", subs: 31.5, buzz: [5, 5, 5, 5, 5, 5, 5, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1], interest: [53, 52, 50, 47, 46, 38, 19, 10, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1], rising: false,
      about: "Dream (Clay) is one of the most famous US Minecraft names (~31.5M subs), known for 'Minecraft Manhunt' and speedrun content. More active in 2026 than his interest score suggests: Minecraft Manhunt 2 is an ongoing series, and his MCPVP server expanded to 38 worldwide locations in April 2026. However, his audience has drifted to teens — the 5–10 age group is largely not watching — and interest for that cohort is at 1, at absolute floor with no recovery signal." },
    { name: "Unspeakable", type: "Creator", subs: null, buzz: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 2, 2, 2, 2, 2], interest: [51, 50, 50, 50, 50, 49, 45, 40, 32, 18, 12, 6, 3, 1, 1, 1, 1, 1], rising: false,
      about: "Unspeakable is a 'loud,' high-energy creator known for challenges, builds and real-life crossovers. The big personality and colorful thumbnails play well with younger viewers. A long-standing staple of the kid-Minecraft scene — now at interest 1, effectively at floor — with no new content hook in sight and no recovery signals." },
    { name: "TommyInnit", type: "Creator", subs: 12, buzz: [5, 5, 5, 4, 4, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], interest: [49, 49, 47, 41, 34, 26, 8, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], rising: false,
      about: "TommyInnit is a hugely popular British creator (~12M subs) who rose through Minecraft SMP servers and streams. He shifted to selective content in 2026 ('100 Questions with Tom Simons' interview series, first MC Championship appearance in ~2 years). Interest at 1 — steady drift to teens continues with no recovery signal for the 5–10 cohort." },
    { name: "Wisp", type: "Creator", subs: null, buzz: [4, 4, 4, 4, 4, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], interest: [46, 44, 42, 37, 34, 25, 7, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], rising: false,
      about: "Wisp makes 'wild mod' Minecraft videos that are chaotic, funny and unpredictable. The light-hearted tone keeps it broadly kid-friendly. Interest at 1 with no major new hook to reverse the trend — effectively at floor." },
    { name: "Stampy", type: "Creator", subs: null, buzz: [4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], interest: [37, 35, 33, 29, 25, 15, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], rising: false,
      about: "Stampy (Stampy Cat) is the original kid-safe Minecraft creator, voiced as a cheerful cartoon cat. His long-running 'Lovely World' series is wholesome and narrative. A nostalgic classic — more grandparent-familiar than kid-current in 2026; interest at 1 and holding at floor." },
    { name: "Craftee", type: "Creator", subs: 5.2, buzz: [null, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], interest: [null, 50, 35, 23, 15, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], rising: false,
      about: "Craftee is a purely Minecraft-focused creator (~5M subs, ~12M monthly views) who appears on every curated 'kid-safe' list — no profanity, challenge and creative gameplay targeting ages 5–10. The craftee.store plush lineup (Classic Plushie $29.99, Golden variant, Chester plushie $26.99) remains available but generating no buzz. Subscriber growth stalled near zero; no franchise deals, retail expansion, or new drops detected through October 2026. Firmly catalog-only territory — interest at floor." },

    { name: "OMZ", type: "Creator", subs: 6.08, buzz: [null, null, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], interest: [null, null, 60, 68, 72, 80, 85, 91, 94, 96, 97, 98, 100, 100, 100, 100, 100, 100], rising: true,
      about: "OMZ (Omz Crew) is an American Minecraft roleplay YouTuber (~6.08M subscribers, 80K subs/month, 54.44M monthly views as of Sep 2026). The 'new member' narrative arc continues to sustain engagement; the full Crew (Omz, Roxy, Crystal, Lily, Megan, Kevin) remains active. Multiple Amazon bundle configurations active: Omz Crew Plushies Bundle, Omz & Crystal Plush & Hoodie Bundle, Omz & Roxy Plush & Shirt Bundle — sold-out cycling on core SKUs confirms sustained active demand. No exclusive toy or big-box retail deal yet = open slot in the RP-server niche." },

    { name: "Yarik Paw", type: "Creator", subs: 4.8, buzz: [null, null, null, null, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], interest: [null, null, null, null, 57, 70, 76, 78, 82, 84, 85, 86, 87, 88, 89, 90, 92, 92], rising: true,
      about: "Yarik Paw (@YarikPawGames) is a Ukrainian creator pioneering 'cinematic Minecraft' — episodic stories with emotional arcs and cliffhangers — at ~4.8M subscribers on his main Minecraft channel, 2.9B lifetime views. His secondary channel YarikPawReal (toy/food testing in reaction style) hit 500M+ views in its first 75 days (Aug–Oct 2025) — one of the fastest-growing YouTube projects of 2025. No licensing deal or franchise announcement found as of October 2026 — notable white space given the defined character roster and proven appetite for story-Minecraft product, but no confirmed catalyst." },

    { name: "ItsFunneh", type: "Creator", subs: 12.1, buzz: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 7, 7, 7], interest: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 63, 70, 73], rising: true,
      about: "ItsFunneh leads the KREW — a five-sibling Canadian YouTube group (Kat, Betty, Kim, Wenny, and Allen La) with 12.1M subscribers and 16.1B+ lifetime views (October 2026). Content is kid-safe family Minecraft and Roblox, directly in the 5–10 demo sweet spot; approximately 764K average views per video and 12 uploads in the last 30 days confirm consistent output. Merch is through KREW DISTRICT (equity partnership with Warren James) — DTC apparel and limited plush drops through their own store; no mass-retail blind-box, mystery-pack, or figure toy program at Target/Walmart/Amazon, leaving the physical toy shelf wide open." },

    // ---- FAN / ANIMATION CHARACTERS (merch-eligible — NOT Mojang's mobs) ----
    // Animated character duos — extremely high recognition w/ 6-10 y/o; CONFIRMED top sellers at Red Lava Toys shows.
    { name: "JJ & Mikey", type: "Character/Mob", subs: null, buzz: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], interest: [96, 97, 98, 98, 98, 98, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], rising: true,
      about: "JJ and Mikey are the lead characters of Maizen's animated Minecraft skits — streaming live on Tubi, The Roku Channel, and Ryan and Friends Plus (pocket.watch franchise deal, May 2026). Juniper worldwide merch window fully closed September 15, 2026 — full cast sold out; the Juniper domain is now offline. No dedicated licensed toy program is on any shelf. Bonkers Toys plush + blind-boxes Spring 2027 and Scholastic books early 2027 confirmed — the Holiday 2026 gap is the wide-open custom-merch window. Confirmed #1 top sellers at Red Lava Toys shows." },
    { name: "Nico & Cash", type: "Character/Mob", subs: null, buzz: [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 7, 5], interest: [90, 86, 87, 88, 88, 89, 90, 92, 94, 96, 97, 98, 100, 100, 100, 95, 85, 62], rising: false,
      about: "Nico and Cash are a paired-character Minecraft animation duo — Cash's channel hit 11M subscribers on June 8, 2026; Nico at ~4.9M. Official store at cashandnico.com active with in-stock SKUs: Cash Skeleton Plushie and 'Set Sail Comic Book' alongside plushies, shirts, and a skate toy line. Youtooz collab: Cash Plush (9in), Nico Plush (9in), and Meebo Plush all sold out on Youtooz.com — third-party resellers now clearing them at steep discounts (~$6, down from $29.99 MSRP), confirming the initial demand rush has fully passed. No new franchise announcement; channel upload pace stays high but the hype peak is clearly behind this IP." },
    { name: "Chip & Milo", type: "Character/Mob", subs: 4.1, buzz: [9, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], interest: [85, 83, 90, 93, 94, 96, 98, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], rising: true,
      about: "Milo and Chip are an animated-Minecraft duo from EYstreem's Spawnpoint Media (4.1M subs). The Milo and Chip channel generates ~231.93M monthly views — algorithmic reach comparable to established TV franchises; 16B watch minutes in the year since launch. Rainbow Designs appointed global master toy partner for Milo (announced Licensing Expo Las Vegas, May 2026) — soft toys, playsets, and collectible role-play products launching at retail autumn/winter 2027. Milo plush restocked at miloandchip.com ($29.99); Chip Second PRE-ORDER for October still open at miloandchip.com ($29.99), confirming repeat demand cycle. Three seasons streaming: S1 Amazon Prime Video; S2–S3 Roku/Tubi. Custom-merch window fully open through early 2027 — Rainbow Designs products won't arrive at retail until late 2027." },
    { name: "Alan Becker (AvM)", type: "Character/Mob", subs: 33.7, buzz: [8, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9], interest: [70, 77, 85, 98, 99, 95, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 97, 97], rising: true,
      about: "Alan Becker's color-coded stick figures — The Second Coming, King Orange, Yellow, Green, Blue, and Red — star in 'Animation vs. Minecraft' (~33.7M subs, 9.68B total views, 190M+ monthly views). AVM Shorts Episode 40 'Creeper Clan' (released August 29, 2026) is now nearly eight weeks out — community attention has fully shifted to anticipating Episode 41; fan speculation now places it in 2027, extending the window but removing a near-term catalyst. 3rd Annual Popularity Poll closed September 4: SC #1 (254,160 votes), Red #2 (176K votes) — print priorities confirmed by fan vote. Youtooz 9-character blind box plush run officially ended after June 10, 2026; 9\" plush appearing on eBay secondary market at $129.99, confirming sustained fan demand after the official run closed. Zero mass-retail toy line despite 33.7M+ subs: the largest open merch slot in creator-Minecraft." },

    { name: "Verity", type: "Character/Mob", subs: 2.8, buzz: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 9, 10], interest: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 90, 100], rising: true,
      about: "Verity is the signature character from ThatMob's viral Minecraft horror web series — a cheerful yellow orb with wide black eyes and a curved smile. The series premiered May 30, 2026 and the first video passed 22M+ views. Confirmed #7 on Google's 2026 trending Halloween costumes list (with 'Verity mod outfits' the top related search) — Halloween is 9 days away and costume demand is at its absolute peak right now. ThatMob has ~2.8M YouTube subscribers; the Bedrock mod exceeded 4.9M downloads on CurseForge. The official Youtooz 'Your Personal Helper Friend' shoulder-rider plush drops tomorrow, October 23, adding a fresh wave of attention at peak demand. Etsy has 30+ fan-made designs and plushes (~$15 each). Demand will drop sharply after October 31 — the window is open right now and closes with Halloween." },

    // ---- FORMATS / TOPICS (what kind of videos they're glued to) ----
    { name: "'Minecraft BUT…'", type: "Format", subs: null, buzz: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], interest: [61, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 62], rising: false,
      about: "'Minecraft BUT…' is a dominant format where a normal playthrough is twisted by one wild rule or mod (e.g. 'Minecraft BUT everything is giant'). It's build/challenge/reaction content that's endlessly remixable. CaseOh's Hardcore format is the current evolution of this template." },
    { name: "Brainrot skits", type: "Format", subs: null, buzz: [7, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], interest: [63, 60, 42, 27, 16, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], rising: false,
      about: "'Brainrot' skits are chaotic, sensory-overload short videos using Minecraft skins to act out absurd stories. LankyBox's TikTok Shop confirmed 748K+ items sold historically — this audience converts directly to buyers at high volume. LankyBox confirmed quit (50+ weeks, no uploads since ~April 2026) and no replacement creator has emerged as of October 2026. Format interest at floor (1) — no recovery signals." },
    { name: "Roleplay servers", type: "Format", subs: null, buzz: [5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], interest: [46, 48, 51, 57, 64, 70, 79, 83, 88, 92, 94, 95, 100, 100, 100, 100, 100, 100], rising: true,
      about: "Minecraft roleplay (RP) servers are fictional worlds with their own economies, governments and ongoing storylines. OMZ Crew's active storylines, expanding character roster, and bundle demand confirm the format's commercial strength. Interest at 100 — at peak, the strongest rising format on the board. Popular with kids who love the 'pretend' and community side." },

    // ---- MOJANG IP — official game content (CUSTOMER AWARENESS ONLY, not merch) ----
    { name: "Baby mobs (Tiny Takeover)", type: "Character/Mob", ip: "mojang", subs: null, buzz: [4, 4, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], interest: [50, 43, 28, 14, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], rising: false,
      about: "The March 2026 'Tiny Takeover' drop redesigned every baby farm animal — puppies, kittens, piglets, calves, chicks, lambs, ocelots and bunnies — for maximum cuteness. Now 7+ months post-launch, the initial viral wave has fully settled and interest is at floor. Official Mojang content: great to know about for customer chats, but NOT something Red Lava Toys can make merch of." },
    { name: "Sulfur cube", type: "Character/Mob", ip: "mojang", subs: null, buzz: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 10, 10, 10, 4, 1, 1], interest: [54, 55, 55, 56, 56, 57, 60, 62, 65, 68, 70, 79, 100, 100, 100, 50, 10, 4], rising: false,
      about: "The sulfur cube is a Minecraft mob found in Sulfur Caves (added in the June 2026 'Chaos Cubed' update). Interest peaked around the Dungeons II launch in late September, then fell sharply; now three-plus weeks post-launch with no new October TikTok activity at scale, interest continues its decline toward baseline. Official Mojang content: worth knowing for customer conversations, but not merch-eligible for Red Lava Toys." },
    { name: "A Minecraft Movie", type: "Format", ip: "mojang", subs: null, buzz: [6, 7, 9, 9, 9, 9, 6, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], interest: [62, 68, 75, 77, 78, 70, 50, 31, 13, 5, 4, 3, 3, 3, 3, 3, 3, 3], rising: false,
      about: "The live-action/animated Warner Bros. film (April 2025) continues to drive streaming discovery; interest holding at 3. Sequel 'A Minecraft Movie Squared' (officially titled at Minecraft Live, May 2026; releasing July 23, 2027) — production in New Zealand (filming began May 2026). Confirmed cast: Momoa, Black, Brooks, Hansen, Coolidge; Kirsten Dunst as Alex (replacing Kate McKinnon); Matt Berry reprising Nitwit villager. Mojang/WB IP — strong customer-conversation context, not merch-eligible for Red Lava Toys." },
    { name: "Netflix Minecraft Series", type: "Format", ip: "mojang", subs: null, buzz: [null, null, 9, 9, 9, 7, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], interest: [null, null, 74, 89, 86, 72, 47, 22, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1], rising: false,
      about: "WildBrain/Flying Bark CG-animated series (head writer: A.C. Bradley) — premiered June 24, 2026 on Netflix; now 17+ weeks live. Features entirely new characters (no official character names publicly revealed). Series has NOT appeared in Netflix Top 10 and no Season 2 announcement has been made — a soft launch that has not broken through culturally. Interest at 1 and at floor with no recovery signals. NOT merch-eligible for Red Lava Toys." },
    { name: "Minecraft Dungeons II", type: "Format", ip: "mojang", subs: null, buzz: [null, null, null, null, 5, 6, 10, 10, 10, 10, 10, 10, 10, 10, 10, 4, 1, 1], interest: [null, null, null, null, 42, 55, 91, 99, 100, 100, 100, 100, 100, 100, 100, 55, 12, 5], rising: false,
      about: "Minecraft Dungeons II launched September 29, 2026 on PS5, Xbox Series X|S, Switch, Switch 2, and PC (Xbox Game Pass day-one). Standard $29.99, Deluxe $49.99. Three-plus weeks post-launch: Metacritic 75 (Xbox/PC); Steam reviews 63% positive (Mixed) — the label has cemented as the dominant public narrative; IGN 6/10. TikTok never broke through virally; post-launch interest declining steadily. Mattel: Twisted Warden, Blub, and Baby Sifter Plush (8-inch) live on shop.mattel.com; LEGO 21591 'The Twisted Warden Battle' ($59.99) on shelf. Official Mojang content — NOT merch-eligible for Red Lava Toys." }
  ],

  // Merch-eligible names ONLY (never Mojang IP).
  movers: {
    up:   ["Verity", "ItsFunneh"],
    down: ["Nico & Cash"],
    new:  []
  },

  headline: "Verity is at peak Halloween demand right now — the Youtooz plush drops tomorrow and the window closes October 31.",

  summary: {
    priority:     ["JJ & Mikey", "Verity", "Alan Becker (AvM)", "SSundee"],
    worth:        ["Chip & Milo", "Aphmau", "CaseOh", "OMZ"],
    keep:         ["ItsFunneh", "PrestonPlayz"],
    deprioritize: ["Nico & Cash", "MrBeast Gaming", "Unspeakable"],
    notes: [
      { name: "JJ & Mikey", take: "BIG open holiday window",
        why: "No licensed JJ & Mikey toys exist anywhere on shelf — the Juniper store has closed and Bonkers Toys doesn't arrive until Spring 2027. That's the full holiday shopping season, from now through Christmas, completely yours with no official competition." },
      { name: "Verity", take: "Halloween peak — window closes October 31",
        why: "Confirmed #7 on Google's 2026 trending Halloween costumes list and Halloween is 9 days away. The official Youtooz shoulder-rider plush drops tomorrow (October 23), which will pull a fresh wave of attention to the character right at the peak. The yellow smiley-face design works across age groups, which is why it plays at Halloween even for younger kids. Demand drops sharply on November 1 — the window is open right now." },
      { name: "Alan Becker (AvM)", take: "Large open slot, Episode 41 likely 2027",
        why: "No new catalyst since Episode 40 — fan community now places Episode 41 in 2027, so no near-term demand spike is coming. The Popularity Poll (Second Coming #1, Red #2) still gives your print priorities. With no mass-retail toys for 33.7M subscribers, the opportunity is large and durable." },
      { name: "SSundee", take: "VERY attractive opportunity",
        why: "SkyFactory Season 7 is past six weeks in and still producing episodes. A community controversy surfaced in mid-October and SSundee addressed it directly on October 12 — the series weathered it and continues running. Still no official toy line — sustained momentum with no competition on shelf." },
      { name: "Chip & Milo", take: "Window defined through 2027",
        why: "Rainbow Designs' global toy line doesn't hit retail until autumn/winter 2027. The Chip preorder cycle confirms fans keep buying in repeat cycles. Custom figures and prints are uncontested until then." },
      { name: "Aphmau", take: "Holiday season building",
        why: "MyStreet Season 7 'Faded Memories' premieres November 30 — right in the heart of the holiday gift window — adding another demand spike. Dragon MeeMeow keeps moving on Amazon and custom work fills whatever the Bonkers line doesn't cover." },
      { name: "CaseOh", take: "Active content and sell-through confirmed",
        why: "New Minecraft video ranked #1 on YouTube Gaming trending October 14. Multiple Winter Drop SKUs are sold out with a restock notice live. No official toy line means no direct shelf competition this holiday season." },
      { name: "OMZ", take: "Strong demand, more competition",
        why: "Amazon bundles are still cycling through sold-out states and the roleplay-server format is at its all-time peak. Good fundamentals, but their own Amazon storefront is where fans already shop." },
      { name: "ItsFunneh", take: "Big audience, open toy shelf",
        why: "12M subscribers and 16B+ lifetime views targeting the 5–10 demo with kid-safe Minecraft and Roblox content. No mass-retail blind-box or figure toy program anywhere — the physical toy shelf at Target and Amazon is still wide open for this IP." },
      { name: "PrestonPlayz", take: "Popular, but narrowing",
        why: "Bonkers Toys are live at Target and Amazon — direct competition on shelf now. Subscriber growth has flatlined and engagement has softened." },
      { name: "Nico & Cash", take: "Past its peak",
        why: "The Youtooz plushes are clearing on secondary markets at steep discounts (around $6, down from $29.99 MSRP) — the initial demand rush has clearly passed. The official store is still active but not worth chasing right now." },
      { name: "MrBeast Gaming", take: "Falling sharply",
        why: "Effectively at floor with no recovery signal. Not worth the effort right now." },
      { name: "Unspeakable", take: "At floor",
        why: "Nothing driving attention. Skip for now." }
    ],
    background: "Minecraft Dungeons II is three-plus weeks post-launch and settled into a 'Mixed' Steam reception — interest continues to decline with no new TikTok activity. The Sulfur cube (from the June Chaos Cubed update) is fading on the same curve. Both are Mojang-owned IP Red Lava Toys cannot make merch of; the Movie sequel (A Minecraft Movie Squared, July 2027) and Netflix series (still no Season 2 announced) remain background context only."
  }
};
