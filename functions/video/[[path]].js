// Cloudflare Pages answers static files in full, and iPhones won't play a video unless they can ask for parts of it.
export async function onRequestGet({ request, next }) {
  const res = await next();
  if (!res.ok) return res;
  const headers = new Headers(res.headers);
  headers.set("Accept-Ranges", "bytes");
  headers.set("Cache-Control", "public, max-age=604800");
  const m = (request.headers.get("Range") || "").match(/^bytes=(\d*)-(\d*)$/);
  if (!m || (!m[1] && !m[2])) return new Response(res.body, { status: 200, headers });
  const buf = await res.arrayBuffer(), size = buf.byteLength;
  const start = m[1] === "" ? Math.max(size - Number(m[2]), 0) : Number(m[1]);
  const end = m[1] === "" || !m[2] ? size - 1 : Math.min(Number(m[2]), size - 1);
  if (start >= size || start > end) return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  return new Response(buf.slice(start, end + 1), { status: 206, headers });
}
