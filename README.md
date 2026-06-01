# Minecraft Trend Radar

A single-page dashboard tracking what the ~8-year-old crowd is watching and talking
about in Minecraft — top/rising YouTubers, hot characters & mobs, and video formats —
built as market intel for **FunSun** (Minecraft character merch).

**Live:** _(add URL once GitHub Pages is enabled)_

## Files
- **`index.html`** — the dashboard (presentation). Opens by double-click; no server needed.
- **`trends_data.js`** — the data. This is the only file that changes week to week.

## What it shows
- **Hot Now** — names ranked by a 0–10 "buzz" score.
- **This Week's Movers** — who's climbing / new on the radar.
- **Heat Map** — every tracked name × week, colored cold→hot, with subscriber counts
  and a Google-Trends-style search-interest bar. Every name links out for more info.

## Updating
Edit `trends_data.js` only — add the new week label to `weeks`, push one new number
onto each entity's `buzz` and `interest` arrays, refresh `subs` / `movers` / `headline`.
The instructions are at the top of that file. (A weekly agent does this automatically.)

## Hosting
Static site — GitHub Pages (`main` / root). To add a custom domain later, drop a `CNAME`
file in the repo root containing the bare domain and add a DNS record (see FunSun memory:
ChipBuddy deploy pattern).
