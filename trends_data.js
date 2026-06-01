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

   SCALES:
     buzz     0-10  editorial "how much are kids talking about this" score
     interest 0-100 Google Trends search interest (objective; est. until wired)
     subs     subscriber count in millions (number) or null if unknown
     link     OPTIONAL exact URL (e.g. the creator's YouTube channel). If
              omitted, the dashboard auto-links: creators -> YouTube search,
              everything else -> Google search. Add real channel URLs when known.
   ============================================================================= */

window.TREND_DATA = {
  updated: "2026-06-01",
  weeks: ["Jun 1"],            // week-start labels, oldest -> newest

  entities: [
    // ---- CREATORS (the "make my skin look like them" names) ----
    { name: "Aphmau",        type: "Creator", channel: "Aphmau",        subs: 20,   buzz: [8], interest: [78], rising: true,  note: "Modded RPG-style play + music videos + shorts. Top pick for the 8-y/o set." },
    { name: "Maizen",        type: "Creator", channel: "Maizen",        subs: null, buzz: [8], interest: [68], rising: true,  note: "Viral challenges turned into playable adventures (Maizencraft – Slime Caverns). One to watch." },
    { name: "Mikecrack",     type: "Creator", channel: "Mikecrack",     subs: 50,   buzz: [7], interest: [72], rising: false, note: "Most-subscribed Minecraft creator. Animations + RPG. Huge w/ younger & Spanish-speaking kids." },
    { name: "Jelly",         type: "Creator", channel: "Jelly",         subs: 23,   buzz: [7], interest: [70], rising: false, note: "Short, digestible, very kid-friendly." },
    { name: "MrBeast Gaming", type: "Creator", channel: "MrBeast Gaming", subs: 42, buzz: [7], interest: [75], rising: false, note: "Challenge/spectacle format." },
    { name: "LankyBox",      type: "Creator", channel: "LankyBox",      subs: null, buzz: [7], interest: [66], rising: true,  note: "High-energy 'brainrot' skits using Minecraft skins. Polarizing w/ parents, huge w/ kids." },
    { name: "CaseOh",        type: "Creator", channel: "CaseOh",        subs: null, buzz: [7], interest: [64], rising: true,  note: "'Minecraft BUT…' build/challenge/reaction format." },
    { name: "DanTDM",        type: "Creator", channel: "DanTDM",        subs: 26,   buzz: [6], interest: [60], rising: false, note: "Long-running, still huge since 2012." },
    { name: "PrestonPlayz",  type: "Creator", channel: "PrestonPlayz",  subs: null, buzz: [6], interest: [58], rising: false, note: "Parkour maps, positive attitude." },
    { name: "Dream",         type: "Creator", channel: "Dream / Clay",  subs: 32,   buzz: [5], interest: [55], rising: false, note: "Big US name; less day-to-day Minecraft output." },
    { name: "Unspeakable",   type: "Creator", channel: "Unspeakable",   subs: null, buzz: [5], interest: [52], rising: false, note: "'Loud' category." },
    { name: "TommyInnit",    type: "Creator", channel: "TommyInnit",    subs: 12,   buzz: [5], interest: [50], rising: false, note: "Big over the past couple years." },
    { name: "Wisp",          type: "Creator", channel: "Wisp",          subs: null, buzz: [5], interest: [48], rising: false, note: "Wild-mod chaos, light-hearted." },
    { name: "Stampy",        type: "Creator", channel: "Stampy",        subs: null, buzz: [4], interest: [38], rising: false, note: "OG kid-safe 'Lovely World'. Wholesome staple." },

    // ---- CHARACTERS & MOBS (cute/iconic = direct merch fuel) ----
    { name: "Baby mobs (Tiny Takeover)", type: "Character/Mob", channel: null, subs: null, buzz: [9], interest: [85], rising: true,  note: "Mojang's 'cutest drop ever' — redesigned baby pups, kittens, piglets, calves, chicks, lambs, ocelots, bunnies. Dominating cute content." },
    { name: "Sulfur cube",               type: "Character/Mob", channel: null, subs: null, buzz: [6], interest: [50], rising: true,  note: "New mob that absorbs blocks. Novel mechanic, getting explainer videos." },

    // ---- FORMATS / TOPICS (what kind of videos they're glued to) ----
    { name: "'Minecraft BUT…'", type: "Format", channel: null, subs: null, buzz: [7], interest: [62], rising: false, note: "Build/challenge/reaction. Still a dominant kid format." },
    { name: "Brainrot skits",   type: "Format", channel: null, subs: null, buzz: [6], interest: [58], rising: true,  note: "Chaotic sensory-overload skits w/ Minecraft skins." },
    { name: "Roleplay servers", type: "Format", channel: null, subs: null, buzz: [5], interest: [45], rising: true,  note: "Fictional worlds w/ economies & storylines. Growing fast." }
  ],

  // This week's narrative — keep it to a few names each.
  movers: {
    up:   ["Baby mobs (Tiny Takeover)", "Maizen", "Aphmau", "CaseOh"],
    down: [],
    new:  ["Baby mobs (Tiny Takeover)", "Sulfur cube", "Maizen", "CaseOh"]
  },

  // One-line takeaway shown at the top of the dashboard.
  headline: "Baby-mob 'Tiny Takeover' drop is the hottest thing in kid-Minecraft right now — adorable, iconic, and a clear merch signal. Aphmau still leads creators; Maizen & CaseOh are the rising names to watch."
};
