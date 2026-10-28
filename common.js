/* Megalong shared engine: data, translations, saved list, open badge, language.
   Every design loads this first, then registers its own renderers with ML.onRender() and calls ML.start(). */
(function () {
  "use strict";

  /* ===== SAMPLE DATA ===== replace with real data from the mall (Excel -> JSON later) */
  const ZONES = [
    { id: "A", sub: { en: "Main Entrance & Anchor", ms: "Pintu Masuk & Anchor", zh: "主入口与主力店" } },
    { id: "B", sub: { en: "Fashion Row", ms: "Deretan Fesyen", zh: "时尚街" } },
    { id: "C", sub: { en: "Family & Kids", ms: "Keluarga & Kanak-kanak", zh: "家庭与儿童" } },
    { id: "D", sub: { en: "Tech & Gadgets", ms: "Teknologi & Gajet", zh: "科技与电子" } },
    { id: "E", sub: { en: "Food Street", ms: "Lorong Makanan", zh: "美食街" } },
    { id: "F", sub: { en: "Services & Wellness", ms: "Perkhidmatan & Kesihatan", zh: "服务与健康" } }
  ];
  const STORES = [
    { id: 1, name: "Giant Hypermarket", cat: "Supermarket", zone: "A", lvl: "G" },
    { id: 11, name: "Home & Living", cat: "Home", zone: "A", lvl: "1" },
    { id: 2, name: "Sample Fashion House", cat: "Fashion", zone: "B", lvl: "1" },
    { id: 3, name: "Shoe Palace", cat: "Fashion", zone: "B", lvl: "G" },
    { id: 18, name: "Mega Gift Shop", cat: "Home", zone: "B", lvl: "2" },
    { id: 4, name: "Kids Corner", cat: "Kids", zone: "C", lvl: "1" },
    { id: 5, name: "Toy Kingdom", cat: "Kids", zone: "C", lvl: "2" },
    { id: 12, name: "Book & Stationery", cat: "Home", zone: "C", lvl: "G" },
    { id: 6, name: "Phone Zone", cat: "Electronics", zone: "D", lvl: "G" },
    { id: 7, name: "Gadget Hub", cat: "Electronics", zone: "D", lvl: "1" },
    { id: 13, name: "Kopitiam Megalong", cat: "Food", zone: "E", lvl: "G" },
    { id: 14, name: "Mee Kolok Corner", cat: "Food", zone: "E", lvl: "G" },
    { id: 15, name: "Burger Bay", cat: "Food", zone: "E", lvl: "1" },
    { id: 16, name: "Sip & Chill Cafe", cat: "Food", zone: "E", lvl: "G" },
    { id: 17, name: "Family Seafood House", cat: "Food", zone: "E", lvl: "2" },
    { id: 8, name: "Health Plus Pharmacy", cat: "Health", zone: "F", lvl: "G" },
    { id: 9, name: "Glow Beauty Studio", cat: "Health", zone: "F", lvl: "1" },
    { id: 10, name: "Optical Vision", cat: "Health", zone: "F", lvl: "G" }
  ];
  const EVENTS = [
    { tag: { en: "This month", ms: "Bulan ini", zh: "本月" },
      title: { en: "Weekend Mega Sale", ms: "Jualan Mega Hujung Minggu", zh: "周末大特卖" },
      body: { en: "Sample promotion: up to 50% off selected stores.", ms: "Contoh promosi: diskaun sehingga 50% di kedai terpilih.", zh: "示例促销：指定商店最高五折。" } },
    { tag: { en: "Coming soon", ms: "Akan datang", zh: "即将举行" },
      title: { en: "Festive Shopping Fair", ms: "Pameran Membeli-belah Perayaan", zh: "节庆购物展" },
      body: { en: "Sample event: seasonal bazaar, activities and lucky draws.", ms: "Contoh acara: bazar bermusim, aktiviti dan cabutan bertuah.", zh: "示例活动：节庆市集、活动与幸运抽奖。" } },
    { tag: { en: "Every weekend", ms: "Setiap hujung minggu", zh: "每个周末" },
      title: { en: "Kids Fun Day", ms: "Hari Ceria Kanak-kanak", zh: "儿童欢乐日" },
      body: { en: "Sample event: games, performances and treats for the little ones.", ms: "Contoh acara: permainan, persembahan dan hidangan untuk si kecil.", zh: "示例活动：为小朋友准备的游戏、表演和美食。" } }
  ];
  const CATS = ["Supermarket", "Food", "Fashion", "Kids", "Electronics", "Health", "Home"];
  const CAT_ICO = { Supermarket: "🛒", Food: "🍜", Fashion: "👗", Kids: "🧸", Electronics: "📱", Health: "💊", Home: "🏠" };

  /* ===== TRANSLATIONS (core keys shared by all designs) ===== */
  const T = {
    en: {
      "tagline": "A bit of everything, for everyday shopping.",
      "hero.pill": "Donggongon • Penampang • Sabah", "hero.cap": "Artist's impression", "hero.stamp1": "Sabah's", "hero.stamp2": "Longest Mall",
      "open.now": "Open now · closes", "open.closed": "Closed now · opens", "open.tomorrow": "tomorrow",
      "zone.word": "Zone", "zone.count": "stores", "level": "Level", "level.all": "All levels",
      "dir.all": "All", "dir.none": "No stores match your search.", "dir.search": "Search stores, e.g. phone, pharmacy, noodles",
      "around.h2": "Around Megalong", "around.p": "Megalong sits in the middle of Penampang's busiest town. Step outside for more.",
      "around.c1h": "Donggongon Tamu", "around.c1p": "The weekly open-air market with fresh produce, crafts and local delicacies, just next door.",
      "around.c2h": "Local Eats", "around.c2p": "Try Sabah favourites such as mee kolok and laksa at the eateries around the mall.",
      "around.c3h": "Night Market", "around.c3p": "Evening food, drinks and live music at the Donggongon night market (days to be confirmed).",
      "events.h2": "What's On", "events.p": "Sample promotions. Real dates and details to be supplied by the mall.",
      "visit.h2": "Visit Us", "visit.addr": "Address", "visit.hours": "Opening hours", "visit.phone": "Phone", "visit.maps": "Open in Google Maps",
      "addr.v": "Megalong Shopping Mall, Donggongon, Penampang, Sabah, Malaysia",
      "tbc": "(sample, to be confirmed)", "sample": "(sample)", "hoursText": "Daily, 10:00 AM to 10:00 PM", "hoursShort": "Daily 10AM – 10PM",
      "foot.p": "A bit of everything for everyday shopping. Donggongon, Penampang, Sabah.",
      "my.title": "My shopping list", "my.empty": "Tap the star on any store to save it here.", "my.share": "Send to my WhatsApp", "my.clear": "Clear", "my.remove": "Remove",
      "my.msg": "My Megalong shopping plan", "my.where": "Megalong Shopping Mall, Donggongon, Penampang",
      "bar.call": "Call", "bar.go": "Directions", "myList": "My list",
      "cat.Supermarket": "Supermarket", "cat.Fashion": "Fashion", "cat.Kids": "Kids", "cat.Electronics": "Electronics", "cat.Health": "Health & Beauty", "cat.Home": "Home & Lifestyle", "cat.Food": "Food & Drink",
      "int.Supermarket": "Groceries", "int.Food": "Eat & Drink", "int.Fashion": "Fashion", "int.Kids": "Kids", "int.Electronics": "Phones & Tech", "int.Health": "Health & Beauty", "int.Home": "Home"
    },
    ms: {
      "tagline": "Sedikit semua perkara, untuk beli-belah harian.",
      "hero.pill": "Donggongon • Penampang • Sabah", "hero.cap": "Lakaran artis", "hero.stamp1": "Pusat beli-belah", "hero.stamp2": "Terpanjang di Sabah",
      "open.now": "Dibuka sekarang · tutup", "open.closed": "Ditutup · dibuka", "open.tomorrow": "esok",
      "zone.word": "Zon", "zone.count": "kedai", "level": "Tingkat", "level.all": "Semua tingkat",
      "dir.all": "Semua", "dir.none": "Tiada kedai sepadan.", "dir.search": "Cari kedai, cth. telefon, farmasi, mi",
      "around.h2": "Sekitar Megalong", "around.p": "Megalong terletak di tengah pekan tersibuk Penampang. Jelajah lebih jauh di luar.",
      "around.c1h": "Tamu Donggongon", "around.c1p": "Pasar terbuka mingguan dengan hasil segar, kraf dan juadah tempatan, betul-betul bersebelahan.",
      "around.c2h": "Makanan Tempatan", "around.c2p": "Cuba kegemaran Sabah seperti mee kolok dan laksa di gerai sekitar pusat beli-belah.",
      "around.c3h": "Pasar Malam", "around.c3p": "Makanan, minuman dan muzik langsung pada waktu malam di pasar malam Donggongon (hari akan disahkan).",
      "events.h2": "Apa Yang Berlaku", "events.p": "Contoh promosi. Tarikh dan butiran sebenar akan dibekalkan oleh pihak pusat beli-belah.",
      "visit.h2": "Lawati Kami", "visit.addr": "Alamat", "visit.hours": "Waktu operasi", "visit.phone": "Telefon", "visit.maps": "Buka di Google Maps",
      "addr.v": "Megalong Shopping Mall, Donggongon, Penampang, Sabah, Malaysia",
      "tbc": "(contoh, akan disahkan)", "sample": "(contoh)", "hoursText": "Setiap hari, 10:00 pagi hingga 10:00 malam", "hoursShort": "Setiap hari 10 pagi – 10 malam",
      "foot.p": "Sedikit semua perkara untuk beli-belah harian. Donggongon, Penampang, Sabah.",
      "my.title": "Senarai beli-belah saya", "my.empty": "Ketik bintang pada mana-mana kedai untuk simpan di sini.", "my.share": "Hantar ke WhatsApp saya", "my.clear": "Kosongkan", "my.remove": "Buang",
      "my.msg": "Pelan beli-belah Megalong saya", "my.where": "Megalong Shopping Mall, Donggongon, Penampang",
      "bar.call": "Telefon", "bar.go": "Arah", "myList": "Senarai saya",
      "cat.Supermarket": "Pasar raya", "cat.Fashion": "Fesyen", "cat.Kids": "Kanak-kanak", "cat.Electronics": "Elektronik", "cat.Health": "Kesihatan & Kecantikan", "cat.Home": "Rumah & Gaya Hidup", "cat.Food": "Makanan & Minuman",
      "int.Supermarket": "Barangan runcit", "int.Food": "Makan & Minum", "int.Fashion": "Fesyen", "int.Kids": "Kanak-kanak", "int.Electronics": "Telefon & Teknologi", "int.Health": "Kesihatan & Kecantikan", "int.Home": "Rumah"
    },
    zh: {
      "tagline": "样样齐全，为您的日常购物。",
      "hero.pill": "东港 • 本南旁 • 沙巴", "hero.cap": "艺术效果图", "hero.stamp1": "沙巴", "hero.stamp2": "最长购物中心",
      "open.now": "营业中 · 打烊时间", "open.closed": "休息中 · 开门时间", "open.tomorrow": "明天",
      "zone.word": "区域", "zone.count": "家商店", "level": "楼层", "level.all": "所有楼层",
      "dir.all": "全部", "dir.none": "找不到符合的商店。", "dir.search": "搜索商店，例如：手机、药房、面",
      "around.h2": "Megalong 周边", "around.p": "Megalong 位于本南旁最热闹的市镇中心，走出大门还有更多精彩。",
      "around.c1h": "东港 Tamu 市集", "around.c1p": "每周举行的露天市集，有新鲜农产、手工艺品和地道美食，就在隔壁。",
      "around.c2h": "地道美食", "around.c2p": "在购物中心周边品尝沙巴名吃，如 mee kolok 和叻沙。",
      "around.c3h": "夜市", "around.c3p": "东港夜市有夜间美食、饮品和现场音乐（日期待确认）。",
      "events.h2": "最新活动", "events.p": "示例优惠。实际日期和详情由购物中心提供。",
      "visit.h2": "欢迎光临", "visit.addr": "地址", "visit.hours": "营业时间", "visit.phone": "电话", "visit.maps": "在 Google 地图中打开",
      "addr.v": "Megalong Shopping Mall，东港，本南旁，沙巴，马来西亚",
      "tbc": "（示例，待确认）", "sample": "（示例）", "hoursText": "每天上午10:00至晚上10:00", "hoursShort": "每天 上午10点 – 晚上10点",
      "foot.p": "样样齐全，为您的日常购物。东港，本南旁，沙巴。",
      "my.title": "我的购物清单", "my.empty": "点击任何商店的星号即可保存在这里。", "my.share": "发送到我的 WhatsApp", "my.clear": "清空", "my.remove": "移除",
      "my.msg": "我的 Megalong 购物计划", "my.where": "Megalong Shopping Mall, Donggongon, Penampang",
      "bar.call": "致电", "bar.go": "导航", "myList": "我的清单",
      "cat.Supermarket": "超市", "cat.Fashion": "时尚", "cat.Kids": "儿童", "cat.Electronics": "电子产品", "cat.Health": "健康与美容", "cat.Home": "家居与生活", "cat.Food": "餐饮",
      "int.Supermarket": "买杂货", "int.Food": "吃喝", "int.Fashion": "时尚", "int.Kids": "儿童", "int.Electronics": "手机与科技", "int.Health": "健康美容", "int.Home": "家居"
    }
  };

  const ML = { ZONES, STORES, EVENTS, CATS, CAT_ICO, OPEN_H: 10, CLOSE_H: 22, MAPS: "https://www.google.com/maps/search/?api=1&query=Megalong+Mall+Donggongon+Penampang" };
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  ML.$ = $; ML.$$ = $$;

  /* ===== STATE ===== */
  let lang = "en";
  try { lang = localStorage.getItem("ml-lang") || "en"; } catch (e) {}
  if (!T[lang]) lang = "en";
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem("ml-list") || "[]"); } catch (e) { saved = []; }
  const renderers = [];
  const persist = () => { try { localStorage.setItem("ml-list", JSON.stringify(saved)); } catch (e) {} };

  Object.defineProperty(ML, "lang", { get: () => lang });
  ML.t = k => (T[lang] && T[lang][k]) || T.en[k] || k;
  ML.extend = ex => { for (const l in ex) T[l] = Object.assign(T[l] || {}, ex[l]); };
  ML.lvl = l => l === "G" ? (lang === "zh" ? "地面层" : lang === "ms" ? "Aras Bawah" : "Ground") : `${ML.t("level")} ${l}`;
  ML.zone = id => ZONES.find(z => z.id === id);
  ML.sub = z => z.sub[lang];
  ML.store = id => STORES.find(s => s.id === +id);
  ML.ev = (e, k) => e[k][lang];
  ML.initials = n => n.split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  ML.where = s => `${ML.t("zone.word")} ${s.zone} · ${ML.lvl(s.lvl)}`;
  ML.isSaved = id => saved.includes(id);
  ML.savedCount = () => saved.length;
  ML.star = id => `<button class="star${saved.includes(id) ? " on" : ""}" data-id="${id}" aria-label="Save">&#9733;</button>`;
  ML.search = (list, q) => {
    q = (q || "").trim().toLowerCase();
    return !q ? list : list.filter(s => s.name.toLowerCase().includes(q) || s.cat.toLowerCase().includes(q) || ML.t("cat." + s.cat).toLowerCase().includes(q));
  };
  ML.onRender = fn => renderers.push(fn);
  ML.drag = el => {  /* click-and-drag horizontal scrolling for mouse users */
    let down = false, sx = 0, sl = 0, moved = false;
    el.addEventListener("mousedown", e => { if (e.target.closest("input,iframe")) return; down = true; moved = false; sx = e.pageX; sl = el.scrollLeft; });
    window.addEventListener("mouseup", () => { down = false; });
    window.addEventListener("mousemove", e => { if (!down) return; const dx = e.pageX - sx; if (Math.abs(dx) > 4) moved = true; el.scrollLeft = sl - dx; });
    el.addEventListener("click", e => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
  };
  ML.reveal = (sel) => {
    const els = $$(sel || ".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
    els.forEach(e => io.observe(e));
  };

  /* ===== OPEN STATUS (Kota Kinabalu time) ===== */
  function openStatus() {
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kuala_Lumpur", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
    const h = +parts.find(p => p.type === "hour").value % 24, m = +parts.find(p => p.type === "minute").value;
    const mins = h * 60 + m, fmt = hh => `${hh % 12 || 12}:00 ${hh >= 12 ? "PM" : "AM"}`;
    if (mins >= ML.OPEN_H * 60 && mins < ML.CLOSE_H * 60) return { open: true, text: `${ML.t("open.now")} ${fmt(ML.CLOSE_H)}` };
    const when = mins < ML.OPEN_H * 60 ? "" : ` ${ML.t("open.tomorrow")}`;
    return { open: false, text: `${ML.t("open.closed")}${when} ${fmt(ML.OPEN_H)}` };
  }
  ML.openStatus = openStatus;
  function renderOpen() {
    const b = $("#openBadge"), tx = $("#openText"); if (!b || !tx) return;
    const s = openStatus();
    b.classList.remove("open", "closed"); b.classList.add(s.open ? "open" : "closed");
    tx.textContent = s.text;
  }

  /* ===== SHARED DRAWER (restyle with --ml-* CSS variables) ===== */
  const css = `
  .ml-scrim{position:fixed;inset:0;background:rgba(0,0,0,.55);opacity:0;pointer-events:none;transition:.2s;z-index:9000}
  .ml-scrim.on{opacity:1;pointer-events:auto}
  .ml-drawer{position:fixed;top:0;right:0;bottom:0;width:min(400px,92vw);background:var(--ml-bg,#fff);color:var(--ml-text,#111);border-left:1px solid var(--ml-line,#ddd);z-index:9100;transform:translateX(105%);transition:.28s;display:flex;flex-direction:column;font-family:var(--ml-font,inherit);box-shadow:-12px 0 40px rgba(0,0,0,.25)}
  .ml-drawer.on{transform:none}
  .ml-dh{display:flex;justify-content:space-between;align-items:center;padding:20px 22px;border-bottom:1px solid var(--ml-line,#ddd)}
  .ml-dh h3{font-size:1.2rem;font-weight:700}
  .ml-dh button{border:0;background:none;font-size:2rem;line-height:1;color:inherit;cursor:pointer}
  .ml-dl{list-style:none;overflow:auto;padding:8px 22px;flex:1}
  .ml-dl li{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:13px 0;border-bottom:1px solid var(--ml-line,#ddd)}
  .ml-dl li b{display:block}
  .ml-dl li small{opacity:.65}
  .ml-dl li button{border:0;background:none;color:var(--ml-accent,#ff6a1f);font-weight:600;cursor:pointer}
  .ml-de{padding:0 22px;opacity:.65}
  .ml-df{padding:18px 22px;display:flex;gap:10px;border-top:1px solid var(--ml-line,#ddd)}
  .ml-btn{display:inline-block;background:var(--ml-accent,#ff6a1f);color:var(--ml-accent-text,#fff);border:2px solid var(--ml-accent,#ff6a1f);border-radius:var(--ml-radius,8px);padding:11px 18px;font-weight:600;cursor:pointer;font-family:inherit;font-size:.95rem}
  .ml-btn.line{background:transparent;color:var(--ml-accent,#ff6a1f)}
  .ml-btn[aria-disabled="true"]{opacity:.4;pointer-events:none}
  `;
  let drawerBuilt = false;
  function buildDrawer() {
    if (drawerBuilt) return; drawerBuilt = true;
    const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    document.body.insertAdjacentHTML("beforeend", `
      <aside class="ml-drawer" id="mlDrawer" aria-hidden="true">
        <div class="ml-dh"><h3 data-i18n="my.title"></h3><button id="mlClose" aria-label="Close">&times;</button></div>
        <ul class="ml-dl" id="mlList"></ul>
        <p class="ml-de" id="mlEmpty" data-i18n="my.empty"></p>
        <div class="ml-df"><a class="ml-btn" id="mlShare" target="_blank" rel="noopener" data-i18n="my.share"></a><button class="ml-btn line" id="mlClear" data-i18n="my.clear"></button></div>
      </aside><div class="ml-scrim" id="mlScrim"></div>`);
    const open = o => { $("#mlDrawer").classList.toggle("on", o); $("#mlScrim").classList.toggle("on", o); $("#mlDrawer").setAttribute("aria-hidden", !o); };
    ML.openList = () => open(true);
    $("#mlClose").addEventListener("click", () => open(false));
    $("#mlScrim").addEventListener("click", () => open(false));
    $("#mlClear").addEventListener("click", () => { saved = []; persist(); ML.render(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") open(false); });
    const lb = $("#listBtn"); if (lb) lb.addEventListener("click", () => open(true));
  }
  function renderDrawer() {
    const items = saved.map(ML.store).filter(Boolean);
    $$("#listCount, .listCount").forEach(el => { el.textContent = items.length; });
    $("#mlList").innerHTML = items.map(s => `<li><div><b>${s.name}</b><small>${ML.where(s)}</small></div><button data-rm="${s.id}">${ML.t("my.remove")}</button></li>`).join("");
    $("#mlEmpty").hidden = items.length > 0;
    const sh = $("#mlShare");
    if (items.length) {
      const lines = items.map(s => `• ${s.name} (${ML.where(s)})`).join("\n");
      sh.href = "https://wa.me/?text=" + encodeURIComponent(`${ML.t("my.msg")}:\n${lines}\n\n${ML.t("my.where")}`);
      sh.removeAttribute("aria-disabled");
    } else { sh.removeAttribute("href"); sh.setAttribute("aria-disabled", "true"); }
  }

  /* ===== RENDER LOOP ===== */
  ML.render = function () {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
    $$("[data-i18n]").forEach(el => { el.textContent = ML.t(el.dataset.i18n); });
    $$("[data-i18n-ph]").forEach(el => { el.placeholder = ML.t(el.dataset.i18nPh); });
    $$(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    renderers.forEach(fn => fn());
    renderDrawer(); renderOpen();
    /* dynamic content may add data-i18n nodes */
    $$("[data-i18n]").forEach(el => { el.textContent = ML.t(el.dataset.i18n); });
  };

  ML.start = function () {
    buildDrawer();
    document.addEventListener("click", e => {
      const star = e.target.closest(".star");
      if (star) { const id = +star.dataset.id; saved = saved.includes(id) ? saved.filter(x => x !== id) : [...saved, id]; persist(); ML.render(); return; }
      const rm = e.target.closest("[data-rm]");
      if (rm) { saved = saved.filter(x => x !== +rm.dataset.rm); persist(); ML.render(); return; }
      const lb = e.target.closest(".lang button");
      if (lb) { lang = lb.dataset.lang; try { localStorage.setItem("ml-lang", lang); } catch (x) {} ML.render(); }
    });
    const yr = $("#yr"); if (yr) yr.textContent = new Date().getFullYear();
    ML.render();
    setInterval(renderOpen, 60000);
  };

  window.ML = ML;
})();
