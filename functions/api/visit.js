// Counts visitors for the owner. All it keeps is a random id the browser made up and when it was last seen: no name, number or address.
const REPO = "mazadhussein/mazadhussein.github.io";
const ONLINE_MS = 100e3, DAY_MS = 864e5, KEEP_MS = 40 * DAY_MS;
const BOT = /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegram|preview|headless/i;

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
});

// The table is made the first time it is needed, so connecting an empty database is enough.
const withTable = async (db, run) => {
  try { return await run(); } catch (e) {
    if (!/no such table/i.test(String(e && e.message))) throw e;
    await db.batch([
      db.prepare("CREATE TABLE IF NOT EXISTS visits(vid TEXT NOT NULL,day TEXT NOT NULL,seen INTEGER NOT NULL,PRIMARY KEY(vid,day))"),
      db.prepare("CREATE INDEX IF NOT EXISTS visits_seen ON visits(seen)"),
    ]);
    return run();
  }
};

export async function onRequestPost({ request, env }) {
  if (!env.DB) return json({ error: "no database" }, 503);
  const origin = request.headers.get("Origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ error: "origin" }, 403);
  if (BOT.test(request.headers.get("User-Agent") || "")) return new Response(null, { status: 204 });
  let vid;
  try { vid = (await request.json()).v; } catch (e) { return json({ error: "body" }, 400); }
  if (!/^[a-f0-9]{32}$/.test(String(vid))) return json({ error: "id" }, 400);
  const now = Date.now(), day = new Date(now + 3 * 36e5).toISOString().slice(0, 10); // The day by Baghdad time.
  await withTable(env.DB, () => env.DB.prepare(
    "INSERT INTO visits(vid,day,seen) VALUES(?1,?2,?3) ON CONFLICT(vid,day) DO UPDATE SET seen=excluded.seen"
  ).bind(vid, day, now).run());
  if (Math.random() < 0.01) await env.DB.prepare("DELETE FROM visits WHERE seen<?1").bind(now - KEEP_MS).run();
  return new Response(null, { status: 204 });
}

// Only the owner's key opens the numbers. The key is checked with GitHub and never stored.
export async function onRequestGet({ request, env }) {
  if (!env.DB) return json({ error: "no database" }, 503);
  const auth = request.headers.get("Authorization") || "";
  if (!/^Bearer \S+$/.test(auth)) return json({ error: "key" }, 401);
  const gh = await fetch("https://api.github.com/repos/" + REPO, {
    headers: { Authorization: auth, Accept: "application/vnd.github+json", "User-Agent": "khawatim-alaqeeq", "X-GitHub-Api-Version": "2022-11-28" },
  });
  if (!gh.ok) return json({ error: "key" }, 401);
  const repo = await gh.json();
  if (!repo.permissions || !repo.permissions.push) return json({ error: "key" }, 401);
  const now = Date.now(), onlineOnly = new URL(request.url).searchParams.get("scope") === "online";
  // The live number reads only a few rows, so it can refresh often. The longer counts read more and refresh rarely.
  const row = await withTable(env.DB, () => onlineOnly
    ? env.DB.prepare("SELECT COUNT(DISTINCT vid) AS online FROM visits WHERE seen>=?1").bind(now - ONLINE_MS).first()
    : env.DB.prepare(`SELECT COUNT(DISTINCT CASE WHEN seen>=?1 THEN vid END) AS online,
        COUNT(DISTINCT CASE WHEN seen>=?2 THEN vid END) AS week,
        COUNT(DISTINCT vid) AS month FROM visits WHERE seen>=?3`).bind(now - ONLINE_MS, now - 7 * DAY_MS, now - 30 * DAY_MS).first());
  return json(row);
}
