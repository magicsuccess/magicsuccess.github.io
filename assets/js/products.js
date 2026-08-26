const grid = document.querySelector("#product-grid"),
  form = document.querySelector("#product-form");
let items = [],
  compare = new Set(),
  compareNotice = "",
  merchandising = null;
const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const facebookShare = (url) =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
const renderComparison = (selected, price) => {
  if (selected.length < 2) return "";
  const cells = (renderCell) => selected.map(renderCell).join("");
  return `<section class="comparison-panel" id="product-comparison" tabindex="-1" aria-labelledby="comparison-title"><div class="comparison-heading"><div><p class="eyebrow">COMPARE · ${selected.length} ITEMS</p><h2 id="comparison-title">ตารางเปรียบเทียบสินค้า</h2></div><button class="button secondary" type="button" data-clear-compare>ล้างรายการ</button></div><p class="comparison-help">เลื่อนตารางไปทางซ้าย–ขวาบนมือถือเพื่อดูสินค้าทุกรายการ</p><div class="comparison-scroll"><table class="comparison-table"><thead><tr><th scope="col">ข้อมูล</th>${cells(
    (x) =>
      `<th scope="col">${x.imageUrl ? `<img src="${esc(x.imageUrl)}" alt="${esc(x.name)}" loading="lazy">` : ""}<strong>${esc(x.name)}</strong></th>`,
  )}</tr></thead><tbody><tr><th scope="row">ราคา</th>${cells((x) => `<td class="comparison-price">${price(x)}</td>`)}</tr><tr><th scope="row">จุดเด่น</th>${cells((x) => `<td><ul>${x.highlights.map((value) => `<li>${esc(value)}</li>`).join("")}</ul></td>`)}</tr><tr><th scope="row">ข้อควรตรวจ</th>${cells((x) => `<td><ul>${x.limitations.map((value) => `<li>${esc(value)}</li>`).join("")}</ul></td>`)}</tr><tr><th scope="row">เหมาะกับ</th>${cells((x) => `<td><ul>${x.suitableFor.map((value) => `<li>${esc(value)}</li>`).join("")}</ul></td>`)}</tr><tr><th scope="row">ไม่เหมาะกับ</th>${cells((x) => `<td><ul>${x.notSuitableFor.map((value) => `<li>${esc(value)}</li>`).join("")}</ul></td>`)}</tr><tr><th scope="row">ตรวจราคาล่าสุด</th>${cells((x) => `<td><a class="button affiliate-link" target="_blank" rel="sponsored nofollow noopener" data-product-id="${esc(x.id)}" href="${esc(x.affiliateUrl)}">ดูใน Shopee</a></td>`)}</tr></tbody></table></div></section>`;
};
const render = () => {
  const q = form?.querySelector("#pq")?.value.toLocaleLowerCase("th") || "",
    category = form?.querySelector("#pc")?.value || "";
  const rows = items.filter(
    (x) =>
      (!q ||
        `${x.name} ${x.description} ${(x.tags || []).join(" ")}`
          .toLocaleLowerCase("th")
          .includes(q)) &&
      (!category || x.category === category),
  );
  const ranks = new Map(
    (merchandising?.top10Ids || []).map((id, index) => [id, index + 1]),
  );
  rows.sort(
    (a, b) =>
      (ranks.get(a.id) || Number.MAX_SAFE_INTEGER) -
      (ranks.get(b.id) || Number.MAX_SAFE_INTEGER),
  );
  const price = (x) =>
    x.price
      ? `฿${Number(x.price.min).toLocaleString("th-TH")} <small>ณ วันที่ตรวจ</small>`
      : "ตรวจราคาล่าสุดใน Shopee";
  const selected = items.filter((x) => compare.has(x.id)).slice(0, 4);
  const limitReached = selected.length >= 4;
  grid.innerHTML = rows.length
    ? `${rows.map((x) => {
        const itemUrl = new URL(`products/${x.slug}/`, location.href).href;
        return `<article class="product-card" id="${esc(x.slug)}"><p class="eyebrow">${ranks.has(x.id) ? `อันดับแนะนำ #${ranks.get(x.id)}` : "สินค้าเพิ่มเติม"}</p>${x.imageUrl ? `<img class="product-image" src="${esc(x.imageUrl)}" alt="${esc(x.name)}" loading="lazy">` : ""}<p class="meta">ตรวจล่าสุด ${esc(x.checkedAt)} · ร้าน ${esc(x.shopName || "ตรวจใน Shopee")}</p><h2>${esc(x.name)}</h2><p>${esc(x.description)}</p><p class="product-price">${price(x)}</p><h3>จุดเด่น</h3><p>${esc(x.highlights.join(" · "))}</p><h3>ข้อควรตรวจ</h3><p>${esc(x.limitations.join(" · "))}</p><label><input type="checkbox" data-compare="${esc(x.id)}" ${compare.has(x.id) ? "checked" : ""} ${limitReached && !compare.has(x.id) ? "disabled" : ""}> เปรียบเทียบ</label><div class="share-actions">${x.status === "Published" && x.affiliateUrl ? `<a class="button affiliate-link" target="_blank" rel="sponsored nofollow noopener" data-product-id="${esc(x.id)}" href="${esc(x.affiliateUrl)}">ดูราคาใน Shopee</a>` : ""}<a class="button secondary facebook-share" target="_blank" rel="noopener noreferrer" data-track="facebook_share" href="${esc(facebookShare(itemUrl))}">แชร์ไป Facebook</a></div>${x.status === "Published" && x.affiliateUrl ? `<small>ลิงก์ Affiliate — เว็บไซต์อาจได้รับค่าคอมมิชชัน โดยผู้ซื้อไม่เสียค่าใช้จ่ายเพิ่ม</small>` : ""}</article>`;
      }).join("")}<div class="compare-bar" aria-live="polite"><span><strong>เลือกแล้ว ${selected.length}/4 รายการ</strong>${compareNotice ? ` · ${esc(compareNotice)}` : selected.length < 2 ? " · เลือกอย่างน้อย 2 รายการ" : " · พร้อมเปรียบเทียบ"}</span><div><button class="button compare-action" type="button" data-show-compare ${selected.length < 2 ? "disabled" : ""}>ดูตารางเปรียบเทียบ</button>${selected.length ? '<button class="button compare-clear" type="button" data-clear-compare>ล้างรายการ</button>' : ""}</div></div>${renderComparison(selected, price)}`
    : '<div class="empty-box"><h2>ยังไม่มีรายการสินค้าที่ผ่านการตรวจ</h2><p>โครงสร้างรองรับค้นหา กรอง และเลือกเปรียบเทียบแล้ว แต่เราไม่สร้างชื่อสินค้า ราคา คะแนน รีวิว ร้านค้า หรือลิงก์ Affiliate ขึ้นเอง รายการจะปรากฏหลังผ่าน validation และ compliance review</p></div>';
};
try {
  const data = await fetch("data/products.json").then((r) => {
    if (!r.ok) throw Error();
    return r.json();
  });
  items = data.items;
  merchandising = data.merchandising || null;
  let summary = document.querySelector("#product-ranking-summary");
  if (!summary && form) {
    summary = document.createElement("div");
    summary.id = "product-ranking-summary";
    summary.className = "notice";
    form.before(summary);
  }
  if (summary && merchandising)
    summary.innerHTML = `<strong>${esc(merchandising.label)}</strong> · รอบสัปดาห์ ${esc(merchandising.weekOf)} · เป็นลำดับแนะนำเชิงบรรณาธิการ ไม่ใช่อันดับยอดขายจาก Shopee`;
  const category = form?.querySelector("#pc");
  for (const row of data.categories)
    category?.add(new Option(row.label, row.id));
  for (const control of form?.elements || []) control.disabled = !items.length;
  render();
  form?.addEventListener("input", render);
  grid.addEventListener("change", (e) => {
    const id = e.target.dataset.compare;
    if (!id) return;
    if (e.target.checked && compare.size >= 4) {
      e.target.checked = false;
      compareNotice = "เลือกได้สูงสุด 4 รายการ";
    } else {
      e.target.checked ? compare.add(id) : compare.delete(id);
      compareNotice = "";
    }
    render();
  });
  grid.addEventListener("click", (e) => {
    const clear = e.target.closest("[data-clear-compare]");
    if (clear) {
      compare.clear();
      compareNotice = "";
      render();
      return;
    }
    const show = e.target.closest("[data-show-compare]");
    if (show && !show.disabled) {
      const panel = document.querySelector("#product-comparison");
      panel?.scrollIntoView({ behavior: "smooth", block: "start" });
      panel?.focus({ preventScroll: true });
    }
  });
} catch {
  grid.innerHTML =
    '<p class="notice">โหลดแคตตาล็อกไม่สำเร็จ กรุณาลองใหม่ภายหลัง</p>';
}
