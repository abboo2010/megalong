/* Megalong Cineplex page: sample movies and showtimes (dummy data) */
ML.extend({
  en: { "d6.nav.stores": "Stores", "d6.nav.dining": "Dining", "d6.nav.events": "Events", "d6.nav.plan": "Floor Guide", "d6.nav.visit": "Visit Us", "d6.f.explore": "Explore", "d6.f.contact": "Contact", "d6.nav.cinema": "Cinema", "d9.eye": "Megalong Cineplex · 3rd Floor", "d9.h": "Now showing", "d9.sub": "Pick a day, choose a movie and tap a showtime. Sample movies and times for design preview.",
    "d9.today": "Today", "d9.tom": "Tomorrow", "d9.all": "All formats", "d9.none": "No movies for this format today", "d9.soon.eye": "Coming soon", "d9.soon.h": "Next on the big screen",
    "d9.pr.eye": "Ticket prices", "d9.pr.h": "Simple, clear pricing", "d9.note": "All movies, times, halls and prices on this page are sample data. Online booking is not available yet.",
    "d9.enq": "Enquire on WhatsApp", "d9.soonbook": "Online booking is coming soon.", "d9.min": "min", "d9.hall": "Hall", "d9.date": "Date", "d9.time": "Showtime", "d9.price": "Ticket price", "d9.seats": "Seats", "d9.fmt": "Format",
    "d9.s.ok": "Available", "d9.s.fill": "Filling fast", "d9.s.low": "Almost full", "d9.past": "Showing finished", "d9.wd": "Weekday", "d9.we": "Weekend & holiday", "d9.std": "Standard 2D", "d9.d3": "3D", "d9.prem": "Premium Hall", "d9.rel": "Opens", "d9.rate": "Rating",
    "g.Action": "Action", "g.Family": "Family", "g.Comedy": "Comedy", "g.Romance": "Romance", "g.Animation": "Animation", "g.Horror": "Horror", "g.Drama": "Drama", "g.Adventure": "Adventure", "g.Sci-Fi": "Sci-Fi" },
  ms: { "d6.nav.stores": "Kedai", "d6.nav.dining": "Makan", "d6.nav.events": "Acara", "d6.nav.plan": "Panduan Tingkat", "d6.nav.visit": "Lawati", "d6.f.explore": "Teroka", "d6.f.contact": "Hubungi", "d6.nav.cinema": "Pawagam", "d9.eye": "Megalong Cineplex · Tingkat 3", "d9.h": "Sedang ditayangkan", "d9.sub": "Pilih hari, pilih filem dan ketik waktu tayangan. Filem dan waktu contoh untuk pratonton reka bentuk.",
    "d9.today": "Hari ini", "d9.tom": "Esok", "d9.all": "Semua format", "d9.none": "Tiada filem untuk format ini hari ini", "d9.soon.eye": "Akan datang", "d9.soon.h": "Seterusnya di skrin besar",
    "d9.pr.eye": "Harga tiket", "d9.pr.h": "Harga mudah dan jelas", "d9.note": "Semua filem, waktu, dewan dan harga di halaman ini ialah data contoh. Tempahan dalam talian belum tersedia.",
    "d9.enq": "Tanya melalui WhatsApp", "d9.soonbook": "Tempahan dalam talian akan datang.", "d9.min": "min", "d9.hall": "Dewan", "d9.date": "Tarikh", "d9.time": "Waktu tayangan", "d9.price": "Harga tiket", "d9.seats": "Tempat duduk", "d9.fmt": "Format",
    "d9.s.ok": "Ada", "d9.s.fill": "Cepat penuh", "d9.s.low": "Hampir penuh", "d9.past": "Tayangan tamat", "d9.wd": "Hari biasa", "d9.we": "Hujung minggu & cuti", "d9.std": "2D Standard", "d9.d3": "3D", "d9.prem": "Dewan Premium", "d9.rel": "Mula", "d9.rate": "Penarafan",
    "g.Action": "Aksi", "g.Family": "Keluarga", "g.Comedy": "Komedi", "g.Romance": "Romantik", "g.Animation": "Animasi", "g.Horror": "Seram", "g.Drama": "Drama", "g.Adventure": "Pengembaraan", "g.Sci-Fi": "Sains Fiksyen" },
  zh: { "d6.nav.stores": "商店", "d6.nav.dining": "美食", "d6.nav.events": "活动", "d6.nav.plan": "楼层指南", "d6.nav.visit": "到访", "d6.f.explore": "探索", "d6.f.contact": "联系我们", "d6.nav.cinema": "电影院", "d9.eye": "Megalong 影城 · 3 楼", "d9.h": "热映中", "d9.sub": "选择日期，挑选电影，点击场次。示例电影与场次，仅供设计预览。",
    "d9.today": "今天", "d9.tom": "明天", "d9.all": "所有格式", "d9.none": "今天没有此格式的电影", "d9.soon.eye": "即将上映", "d9.soon.h": "大银幕新片",
    "d9.pr.eye": "票价", "d9.pr.h": "简单清晰的票价", "d9.note": "本页所有电影、场次、影厅和票价均为示例数据。暂不提供网上订票。",
    "d9.enq": "通过 WhatsApp 查询", "d9.soonbook": "网上订票即将推出。", "d9.min": "分钟", "d9.hall": "影厅", "d9.date": "日期", "d9.time": "场次", "d9.price": "票价", "d9.seats": "座位", "d9.fmt": "格式",
    "d9.s.ok": "有座位", "d9.s.fill": "座位紧张", "d9.s.low": "几乎满座", "d9.past": "已结束", "d9.wd": "平日", "d9.we": "周末与假日", "d9.std": "标准 2D", "d9.d3": "3D", "d9.prem": "高级影厅", "d9.rel": "上映日期", "d9.rate": "分级",
    "g.Action": "动作", "g.Family": "家庭", "g.Comedy": "喜剧", "g.Romance": "爱情", "g.Animation": "动画", "g.Horror": "恐怖", "g.Drama": "剧情", "g.Adventure": "冒险", "g.Sci-Fi": "科幻" }
});
(function () {
const { $, $$ } = ML;

/* Sample movies (fictional titles). times = base showtimes, hall = hall number, fmt = 2D | 3D | PREM */
const MOVIES = [
  { id: 1, title: "Kinabalu Dreams", genres: ["Family", "Adventure"], rate: "U", min: 112, lang: "English / BM subs", fmt: "2D", hall: 1, c: ["#12a79b", "#0e2a47"], times: ["10:30", "13:00", "15:30", "18:00"],
    syn: "Two cousins climb Mount Kinabalu to find a lost family secret. A warm, sample adventure for all ages." },
  { id: 2, title: "Midnight Express KK", genres: ["Action"], rate: "P13", min: 128, lang: "English / BM subs", fmt: "2D", hall: 2, c: ["#ff6a1f", "#3a0d00"], times: ["11:15", "14:00", "16:45", "19:30", "22:15"],
    syn: "A night train, a stolen briefcase and one very long ride across Sabah. Sample action thriller." },
  { id: 3, title: "Starbound Racers", genres: ["Animation", "Family"], rate: "U", min: 98, lang: "BM / English", fmt: "3D", hall: 3, c: ["#7a5cff", "#1a0f4d"], times: ["10:00", "12:30", "15:00", "17:30"],
    syn: "A band of tiny robots races across the galaxy to win the Golden Cup. Sample 3D animation." },
  { id: 4, title: "The Last Pasar Malam", genres: ["Comedy", "Drama"], rate: "P13", min: 105, lang: "BM / Chinese subs", fmt: "2D", hall: 4, c: ["#ffc93c", "#7a4d00"], times: ["12:00", "14:45", "17:15", "20:00"],
    syn: "When the town's night market is about to close, one grumpy stallholder rallies the neighbours. Sample comedy." },
  { id: 5, title: "Tides of Tanjung", genres: ["Romance", "Drama"], rate: "P13", min: 118, lang: "English / Chinese subs", fmt: "PREM", hall: 5, c: ["#ff5c7a", "#4a0a1e"], times: ["13:30", "16:15", "19:00", "21:45"],
    syn: "Two strangers meet at a sunset in Tanjung Aru and keep missing each other. Sample romance." },
  { id: 6, title: "Haunted Kopitiam", genres: ["Horror"], rate: "18", min: 101, lang: "BM / English subs", fmt: "2D", hall: 2, c: ["#2d2d3a", "#000"], times: ["21:00", "23:15"], late: true,
    syn: "The coffee is hot. The regulars are not alive. Sample horror, for adults only." }
];
const SOON = [
  { title: "Borneo Skies", genres: ["Sci-Fi", "Adventure"], rate: "P13", c: ["#2d8fe0", "#06203d"], off: 9 },
  { title: "Uncle Wong's Big Wedding", genres: ["Comedy"], rate: "U", c: ["#0fa36b", "#02301d"], off: 16 },
  { title: "Echoes of Kadazan Hills", genres: ["Drama"], rate: "P13", c: ["#c58b1a", "#3d2800"], off: 23 }
];
const PRICE = { "2D": [14, 17], "3D": [18, 21], "PREM": [28, 32] };
const FMT_KEY = { "2D": "d9.std", "3D": "d9.d3", "PREM": "d9.prem" };

/* Kuala Lumpur "now" */
const klNow = () => { const p = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kuala_Lumpur", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date()).reduce((o, x) => (o[x.type] = x.value, o), {}); return { y: +p.year, m: +p.month, d: +p.day, h: +p.hour % 24, n: +p.minute }; };
const NOW = klNow();
const dayDate = off => new Date(Date.UTC(NOW.y, NOW.m - 1, NOW.d + off));
const isWeekend = off => { const w = dayDate(off).getUTCDay(); return w === 0 || w === 5 || w === 6; };
const LOC = { en: "en-GB", ms: "ms-MY", zh: "zh-CN" };
const fmtDay = (off, o) => dayDate(off).toLocaleDateString(LOC[ML.lang] || "en-GB", Object.assign({ timeZone: "UTC" }, o));

let day = 0, fmt = "all", sel = null;
const price = (m, off) => PRICE[m.fmt][isWeekend(off) ? 1 : 0];
const seatState = (m, t, off) => { const n = (m.id * 7 + t.charCodeAt(0) + t.charCodeAt(1) * 3 + off * 5) % 10; return n < 5 ? "ok" : n < 8 ? "fill" : "low"; };
const timesFor = (m, off) => { const t = m.times.slice(); if (isWeekend(off) && !m.late) t.unshift(m.times[0] < "11:00" ? "09:30" : "10:00"); return Array.from(new Set(t)).sort(); };
const past = (t, off) => off === 0 && (+t.slice(0, 2) * 60 + +t.slice(3)) <= NOW.h * 60 + NOW.n;
const t12 = t => { const h = +t.slice(0, 2); return ((h + 11) % 12 + 1) + ":" + t.slice(3) + " " + (h < 12 ? "AM" : "PM"); };
const poster = (m, big) => `<div class="poster" style="--a:${m.c[0]};--b:${m.c[1]}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4zM8 6v12M16 6v12M4 10h4M16 10h4M4 14h4M16 14h4"/></svg><b>${m.title.split(" ").slice(0, 3).map(w => w[0]).join("")}</b>${big ? "" : `<span class="rate r${m.rate}">${m.rate}</span>`}</div>`;
const genreText = m => m.genres.map(g => ML.t("g." + g)).join(" · ");

function renderDays() {
  $("#daybar").innerHTML = [0, 1, 2, 3, 4, 5, 6].map(o => `<button class="dbtn${o === day ? " on" : ""}" data-day="${o}"><small>${o === 0 ? ML.t("d9.today") : o === 1 ? ML.t("d9.tom") : fmtDay(o, { weekday: "short" })}</small><b>${fmtDay(o, { day: "numeric" })}</b><em>${fmtDay(o, { month: "short" })}</em></button>`).join("");
  $("#fmtbar").innerHTML = ["all", "2D", "3D", "PREM"].map(f => `<button class="chip${fmt === f ? " on" : ""}" data-fmt="${f}">${f === "all" ? ML.t("d9.all") : ML.t(FMT_KEY[f])}</button>`).join("");
}
function renderMovies() {
  const list = MOVIES.filter(m => fmt === "all" || m.fmt === fmt);
  $("#mnone").hidden = list.length > 0;
  $("#movies").innerHTML = list.map(m => `<article class="movie">${poster(m)}<div class="mi"><h3>${m.title}</h3>
    <p class="mm">${genreText(m)} · ${m.min} ${ML.t("d9.min")} · ${m.lang}</p><p class="ms">${m.syn}</p>
    <div class="mtags"><span class="tag f${m.fmt}">${ML.t(FMT_KEY[m.fmt])}</span><span class="tag">${ML.t("d9.hall")} ${m.hall}</span><span class="tag pr">RM ${price(m, day)}</span></div>
    <div class="times">${timesFor(m, day).map(t => { const dis = past(t, day); return `<button class="tbtn${dis ? " off" : ""}" data-m="${m.id}" data-t="${t}"${dis ? " disabled" : ""}>${t12(t)}</button>`; }).join("")}</div></div></article>`).join("");
}
function renderSoon() {
  $("#soon").innerHTML = SOON.map(m => `<article class="movie sm">${poster(m)}<div class="mi"><h3>${m.title}</h3><p class="mm">${genreText(m)}</p><p class="rel">${ML.t("d9.rel")} ${fmtDay(m.off, { day: "numeric", month: "short", year: "numeric" })}</p></div></article>`).join("");
}
function renderPrices() {
  $("#prices").innerHTML = Object.keys(PRICE).map(k => `<div class="pcard f${k}"><h3>${ML.t(FMT_KEY[k])}</h3><div class="prow"><span>${ML.t("d9.wd")}</span><b>RM ${PRICE[k][0]}</b></div><div class="prow"><span>${ML.t("d9.we")}</span><b>RM ${PRICE[k][1]}</b></div></div>`).join("");
}
function openShow(id, t) {
  const m = MOVIES.find(x => x.id === +id); sel = { id, t };
  $("#tmPoster").innerHTML = poster(m, true); $("#tmTitle").textContent = m.title;
  $("#tmMeta").textContent = `${genreText(m)} · ${m.min} ${ML.t("d9.min")} · ${m.rate}`;
  const st = seatState(m, t, day), dateTxt = fmtDay(day, { weekday: "long", day: "numeric", month: "long" });
  $("#tmInfo").innerHTML = [[ML.t("d9.date"), dateTxt], [ML.t("d9.time"), t12(t)], [ML.t("d9.hall"), `${m.hall} · ${ML.t(FMT_KEY[m.fmt])}`], [ML.t("d9.price"), `RM ${price(m, day)}`], [ML.t("d9.seats"), ML.t("d9.s." + st)]].map(r => `<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join("");
  $("#tmWa").href = "https://wa.me/60120000000?text=" + encodeURIComponent(`Hi, I'd like to ask about tickets: ${m.title}, ${dateTxt}, ${t12(t)}, Hall ${m.hall}, Megalong Cineplex`);
  $("#tmodal").hidden = false; $("#tclose").focus();
}
const closeShow = () => { $("#tmodal").hidden = true; };

ML.onRender(() => { renderDays(); renderMovies(); renderSoon(); renderPrices(); if (!$("#tmodal").hidden && sel) openShow(sel.id, sel.t); });
document.addEventListener("click", e => {
  const d = e.target.closest("[data-day]"); if (d) { day = +d.dataset.day; renderDays(); return renderMovies(); }
  const f = e.target.closest("[data-fmt]"); if (f) { fmt = f.dataset.fmt; renderDays(); return renderMovies(); }
  const t = e.target.closest("[data-t]"); if (t && !t.disabled) return openShow(t.dataset.m, t.dataset.t);
  if (e.target.id === "tclose" || e.target.id === "tmodal") closeShow();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeShow(); });
})();
