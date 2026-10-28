/* One menu item = one page. Hash decides which page is shown (e.g. #cinema). */
(function () {
  var main = document.getElementById("top");
  var MAP = { "": "home", top: "home", home: "home", stores: "stores", featured: "stores", dining: "dining", cinema: "cinema",
    events: "events", plan: "plan", visit: "visit", leasing: "visit" };
  var SUB = { featured: 1, leasing: 1 };   // anchors inside a page that should be scrolled to
  var TITLE = { home: "", stores: "Stores", dining: "Dining", cinema: "Cinema", events: "Events", plan: "Floor Guide", visit: "Visit Us" };
  var orig = document.title, base = orig.split(" | ")[0] || orig;
  try { history.scrollRestoration = "manual"; } catch (e) {}
  function show() {
    var id = decodeURIComponent(location.hash.replace("#", ""));
    var page = MAP[id] || "home";
    main.setAttribute("data-v", page);
    document.querySelectorAll("[data-page]").forEach(function (el) { el.hidden = el.getAttribute("data-page") !== page; });
    document.querySelectorAll(".menu a").forEach(function (a) {
      var h = a.getAttribute("href").replace("#", "");
      a.classList.toggle("on", MAP[h] === page && page !== "home");
    });
    document.title = TITLE[page] ? TITLE[page] + " | " + base : orig;
    var t = SUB[id] && document.getElementById(id);
    if (t) t.scrollIntoView(); else window.scrollTo(0, 0);
    document.querySelectorAll(".rv:not(.in)").forEach(function (e) { var r = e.getBoundingClientRect(); if (r.top < innerHeight) e.classList.add("in"); });
  }
  window.addEventListener("hashchange", show);
  show();
})();
