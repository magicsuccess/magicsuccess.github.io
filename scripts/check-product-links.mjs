import { readFile, writeFile } from "node:fs/promises";
const catalog = JSON.parse(await readFile(new URL("../data/products.json", import.meta.url), "utf8"));
const check = async (url) => {
  if (!url) return { ok: false, status: null, error: "missing-url" };
  try {
    const response = await fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(15000), headers: { "user-agent": "MagicSuccess-Catalog-Monitor/1.0" } });
    await response.body?.cancel();
    return { ok: response.ok, status: response.status, finalUrl: response.url };
  } catch (error) { return { ok: false, status: null, error: error.name || "request-error" }; }
};
const results = [];
for (const item of catalog.items.filter((row) => row.status === "Published")) results.push({ id: item.id, affiliate: await check(item.affiliateUrl), image: await check(item.imageUrl) });
const report = { schemaVersion: 1, checkedAt: new Date().toISOString(), advisoryOnly: true, note: "ผลตรวจอัตโนมัติใช้แจ้งเตือนเท่านั้น ไม่ถอดสินค้าอัตโนมัติ เพราะ marketplace อาจป้องกัน bot", summary: { total: results.length, affiliateFailures: results.filter((row) => !row.affiliate.ok).length, imageFailures: results.filter((row) => !row.image.ok).length }, results };
await writeFile(new URL("../data/product-health.json", import.meta.url), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report.summary));
