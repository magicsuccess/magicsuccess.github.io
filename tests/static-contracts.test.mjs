import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const json = async (path) =>
  JSON.parse(await readFile(new URL(`../${path}`, import.meta.url), "utf8"));
test("FAQ expansion is balanced, cautious, and deep-linkable", async () => {
  const data = await json("data/faqs.json"),
    counts = Object.groupBy(data.items, (x) => x.category);
  assert.equal(data.items.length, 180);
  assert.deepEqual(
    Object.values(counts).map((x) => x.length),
    [30, 30, 30, 30, 30, 30],
  );
  assert.equal(
    data.items.every(
      (x) => x.related.length === 2 && x.sourceStatus && x.limitations,
    ),
    true,
  );
  const risk = counts["Risk Management"];
  assert.equal(risk.length, 30);
  assert.equal(
    risk.every(
      (x) => x.sourceStatus === "general-practice-needs-context-review",
    ),
    true,
  );
});
test("public website content does not reference restricted organization names", async () => {
  const files = [
    "data/faqs.json",
    "faqs.html",
    "governance.html",
  ];
  const restricted = /(กฟผ\.?|การไฟฟ้าฝ่ายผลิต(?:แห่งประเทศไทย)?|EGAT|PPRM)/i;
  for (const file of files) {
    const body = await readFile(
      new URL(`../${file}`, import.meta.url),
      "utf8",
    );
    assert.equal(
      restricted.test(body),
      false,
      `${file} contains a restricted organization reference`,
    );
  }
});
test("catalog publishes only reviewed affiliate listings", async () => {
  const data = await json("data/products.json");
  assert.equal(data.items.length, 12);
  assert.equal(data.status, "published-reviewed-batch");
  assert.equal(
    data.items.every(
      (x) =>
        x.status === "Published" &&
        x.complianceStatus === "approved" &&
        x.affiliateUrl.startsWith("https://s.shopee.co.th/"),
    ),
    true,
  );
  assert.deepEqual(data.importPolicy.prohibitedCategories, [
    "medicine",
    "controlled-product",
  ]);
});
test("FAQ usage examples stay explicit and every FAQ has a ready prompt", async () => {
  const faqs = await json("data/faqs.json"),
    item = faqs.items.find((x) => x.id === "FAQ-MKT-002");
  assert.match(item.usageExample.prompt, /Role:/);
  assert.match(item.usageExample.prompt, /Constraints:/);
  assert.match(item.usageExample.note, /ข้อมูลสาธิต/);
  assert.equal(
    faqs.items.every(
      (x) =>
        x.readyPrompt.includes("Role:") &&
        x.readyPrompt.includes("Task:") &&
        x.readyPrompt.includes("Context:") &&
        x.readyPrompt.includes("Constraints:"),
    ),
    true,
  );
});
test("member navigation is hidden from public pages", async () => {
  const pages = [
    "index.html",
    "youtube.html",
    "content.html",
    "faqs.html",
    "products.html",
    "search.html",
    "legal.html",
    "governance.html",
  ];
  for (const file of pages) {
    const body = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
    assert.doesNotMatch(body, /href=["']services\.html["'][^>]*>สมาชิก</);
  }
});
test("service worker never serves 404 HTML for failed subresources", async () => {
  const source = await readFile(new URL("../sw.js", import.meta.url), "utf8");
  assert.match(source, /request\.mode===\"navigate\"/);
  assert.doesNotMatch(source, /hit\|\|caches\.match\("\/404\.html"\)/);
  assert.match(source, /freshAsset/);
  assert.match(source, /pathname\.startsWith\("\/data\/"\)/);
});
test("products show recommendations by default and public content has Facebook sharing", async () => {
  const productsPage = await readFile(new URL("../products.html", import.meta.url), "utf8");
  assert.match(productsPage, /<option value="">ทุกหมวด<\/option>/);
  for (const file of [
    "assets/js/products.js",
    "assets/js/content.js",
    "assets/js/youtube.js",
    "assets/js/article.js",
  ]) {
    const source = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
    assert.match(source, /facebook\.com\/sharer\/sharer\.php/);
    assert.match(source, /data-track=["']facebook_share["']/);
  }
});
test("every published product has a crawlable share page with its own image", async () => {
  const products = await json("data/products.json");
  for (const item of products.items) {
    const html = await readFile(
      new URL(`../products/${item.slug}/index.html`, import.meta.url),
      "utf8",
    );
    assert.match(html, new RegExp(`<meta property="og:title" content="${item.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
    assert.match(html, new RegExp(`<meta property="og:image" content="${item.imageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
    assert.match(html, new RegExp(`products/${item.slug}/`));
  }
  const productJs = await readFile(new URL("../assets/js/products.js", import.meta.url), "utf8");
  assert.match(productJs, /products\/\$\{x\.slug\}\//);
});
test("article, product, and market-report detail pages expose the complete primary navigation", async () => {
  const expectedLabels = ["หน้าแรก", "ค้นหา", "YouTube", "บทความ", "รายงานตลาด", "FAQs", "สินค้า"];
  const articles = await json("data/articles.json");
  const products = await json("data/products.json");
  const files = [
    "article.html",
    `articles/${articles.items[0].slug}/index.html`,
    `products/${products.items[0].slug}/index.html`,
    "reports/2026-08-gold-forex.html",
  ];
  for (const file of files) {
    const html = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
    const nav = html.match(/<nav id="nav"[^>]*>([\s\S]*?)<\/nav>/)?.[1] || "";
    for (const label of expectedLabels) assert.match(nav, new RegExp(`>${label}<`), `${file} misses ${label}`);
  }
});
test("Shopee affiliate clicks use one consent-aware GA4 event with useful dimensions", async () => {
  const mainJs = await readFile(new URL("../assets/js/main.js", import.meta.url), "utf8");
  const productsJs = await readFile(new URL("../assets/js/products.js", import.meta.url), "utf8");
  assert.match(mainJs, /shopee_affiliate_click/);
  assert.match(mainJs, /product_id:/);
  assert.match(mainJs, /product_title:/);
  assert.match(mainJs, /content_slug:/);
  assert.match(mainJs, /link_domain:/);
  assert.match(mainJs, /page_path:/);
  assert.match(mainJs, /localStorage\.getItem\(consentKey\)==="granted"/);
  assert.doesNotMatch(productsJs, /magicTrack\?\.\("affiliate_click"/);
});
test("GA4 groups page views and click events by public page category", async () => {
  const mainJs = await readFile(new URL("../assets/js/main.js", import.meta.url), "utf8");
  for (const group of [
    "homepage",
    "products",
    "articles",
    "faqs",
    "market_reports",
    "youtube",
  ]) assert.match(mainJs, new RegExp(`return ["']${group}["']`));
  assert.match(mainJs, /page_view[^\n]*content_group:contentGroup/);
  assert.match(mainJs, /groupedDetails=\{content_group:contentGroup,\.\.\.details\}/);
});
test("homepage exposes mobile product access and data-backed discovery sections", async () => {
  const home = await readFile(new URL("../index.html", import.meta.url), "utf8");
  const homeJs = await readFile(new URL("../assets/js/home.js", import.meta.url), "utf8");
  assert.match(home, /class="mobile-product-shortcut"/);
  assert.match(home, /id="home-product-grid"/);
  assert.match(home, /id="home-faq-preview"/);
  assert.match(home, /id="home-article-preview"/);
  assert.match(home, /id="home-report-preview"/);
  assert.match(homeJs, /magic_product_interest_v1/);
  assert.match(homeJs, /data-product-title/);
  assert.match(homeJs, /ยังไม่อ้างว่าเป็น “สินค้าขายดี”/);
  assert.match(homeJs, /data\/reports\.json/);
});

test("seeded rotation is stable for one seed and changes across seeds", async () => {
  const { seededShuffle } = await import("../assets/js/rotation.js");
  const rows = Array.from({ length: 20 }, (_, index) => `item-${index}`);
  const first = seededShuffle(rows, "2026-08-26");
  const repeated = seededShuffle(rows, "2026-08-26");
  const nextDay = seededShuffle(rows, "2026-08-27");
  assert.deepEqual(first, repeated);
  assert.notDeepEqual(first.slice(0, 10), nextDay.slice(0, 10));
  assert.deepEqual([...first].sort(), [...rows].sort());
});

test("YouTube manual shuffle preserves the newly shuffled order", async () => {
  const youtubeJs = await readFile(new URL("../assets/js/youtube.js", import.meta.url), "utf8");
  assert.match(youtubeJs, /render\(shuffle\(items\),true\)/);
  assert.match(youtubeJs, /preserveOrder\?source:dailyOrder\(source\)/);
  assert.doesNotMatch(youtubeJs, /sort\(\(\)=>Math\.random\(\)-\.5\)/);
});

test("homepage data sections fail independently", async () => {
  const homeJs = await readFile(new URL("../assets/js/home.js", import.meta.url), "utf8");
  assert.match(homeJs, /for\(const \[url,render,roots\] of sections\)/);
  assert.doesNotMatch(homeJs, /Promise\.all\(/);
});
