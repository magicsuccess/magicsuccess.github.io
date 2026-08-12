import { readFile, writeFile } from "node:fs/promises";

const file = new URL("../data/products.json", import.meta.url);
const data = JSON.parse(await readFile(file, "utf8"));
const now = new Date();
const bangkokDate = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
const day = new Date(`${bangkokDate}T00:00:00Z`);
const monday = new Date(day);
monday.setUTCDate(day.getUTCDate() - ((day.getUTCDay() + 6) % 7));
const weekKey = monday.toISOString().slice(0, 10);
const seed = [...weekKey].reduce((n, ch) => (n * 33 + ch.charCodeAt(0)) >>> 0, 5381);
const hash = (value) => [...`${seed}:${value}`].reduce((n, ch) => (n * 33 + ch.charCodeAt(0)) >>> 0, 5381);
const eligible = data.items.filter((item) => item.status === "Published" && item.complianceStatus === "approved");
const buckets = new Map();
for (const item of eligible) buckets.set(item.category, [...(buckets.get(item.category) || []), item]);
for (const bucket of buckets.values()) bucket.sort((a, b) => hash(a.id) - hash(b.id));
const ordered = [];
while (ordered.length < eligible.length) {
  let added = false;
  for (const category of data.categories.map((row) => row.id)) {
    const item = buckets.get(category)?.shift();
    if (item) { ordered.push(item.id); added = true; }
  }
  if (!added) break;
}
data.merchandising = { label: "Top 10 แนะนำประจำสัปดาห์", methodology: "editorial-weekly-rotation-v1", salesRankingClaim: false, weekOf: weekKey, updatedAt: bangkokDate, top10Ids: ordered.slice(0, 10) };
await writeFile(file, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Rotated weekly Top 10 for ${weekKey}: ${data.merchandising.top10Ids.length} items`);
