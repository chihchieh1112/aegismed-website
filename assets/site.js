/* ============================================================
   醫盾 AegisMed AI co. 官網 — 共用腳本（v2 六大方案版）
   功能：頁首頁尾注入、三語切換、依 content.js / data.js 產生各頁內容、燈箱、表單
   ============================================================ */
(function () {
  "use strict";

  /* 草稿階段顯示「待補」標記；正式上線前改成 false */
  const SHOW_PLACEHOLDER_MARKS = true;

  const D = window.SITE_DATA || {};
  const C = window.CONTENT || {};
  const LANG_ATTR = { zh: "zh-Hant", en: "en", vi: "vi" };
  const LANG_LABEL = { zh: "繁中", en: "EN", vi: "VI" };
  let lang = detectLang();
  const state = { board: "his", scenario: "hospital", caseTab: "exchange" };

  function detectLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && LANG_ATTR[q]) { try { localStorage.setItem("lang", q); } catch (e) {} return q; }
    try { const s = localStorage.getItem("lang"); if (s && LANG_ATTR[s]) return s; } catch (e) {}
    return "zh";
  }
  const L = (o) => (o && typeof o === "object" && !Array.isArray(o)) ? (o[lang] || o.zh || "") : (o || "");
  const LA = (o) => (o && typeof o === "object" && !Array.isArray(o)) ? (o[lang] || o.zh || []) : (o || []);
  const T = (key) => ((window.I18N || {})[lang] || {})[key];
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const zhOr = (key, zh) => esc(lang === "zh" ? zh : (T(key) || zh));

  function fmtDate(iso) {
    const [y, m, d] = iso.split("-");
    if (lang === "zh") return `${y}.${m}.${d}`;
    if (lang === "vi") return `${d}/${m}/${y}`;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${parseInt(d, 10)} ${months[parseInt(m, 10) - 1]} ${y}`;
  }

  const ARROW = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const EXT = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const PIN = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';

  /* ---------- 頁首與頁尾（所有頁面共用，只需在此修改一次） ---------- */
  const HEADER_HTML = `
    <div class="container nav">
      <a class="brand" href="index.html" aria-label="AegisMed AI co. 醫盾人工智慧">
        <img src="assets/img/icon.svg?v=3" alt="" width="200" height="210">
        <span class="brand-text">
          <span class="brand-en">AegisMed <b>AI</b> <small>co.</small></span>
          <span class="brand-zh">醫盾人工智慧</span>
        </span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" data-i18n="nav.home">首頁</a></li>
        <li><a href="solutions.html" data-i18n="nav.solutions">核心解決方案</a></li>
        <li><a href="platform.html" data-i18n="nav.platform">平台與整合</a></li>
        <li><a href="cooperation.html" data-i18n="nav.cooperation">導入與合作</a></li>
        <li><a href="cases.html" data-i18n="nav.cases">公司案例</a></li>
        <li><a href="news.html" data-i18n="nav.news">洞察與動態</a></li>
        <li><a href="about.html" data-i18n="nav.about">關於醫盾</a></li>
        <li><a href="contact.html" class="nav-cta" data-i18n="nav.contact">聯絡我們</a></li>
      </ul>
      <div class="nav-right">
        <div class="lang-switch" role="group" aria-label="Language"></div>
        <button class="nav-toggle" type="button" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>`;

  const FOOTER_HTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html" aria-label="AegisMed AI co. 醫盾人工智慧">
            <img src="assets/img/logo-dark.svg?v=3" alt="AegisMed AI co. 醫盾人工智慧" width="740" height="230">
          </a>
          <p class="small" data-i18n="footer.about">醫盾 AegisMed AI co. 聚焦新一代智慧化 HIS 轉換、臨床工作平台、原生 AI 與 AI 輔助，說清楚服務方式與合作邊界。</p>
        </div>
        <div>
          <h4 data-i18n="footer.links">網站導覽</h4>
          <ul>
            <li><a href="platform.html" data-i18n="nav.platform">平台與整合</a></li>
            <li><a href="cooperation.html" data-i18n="nav.cooperation">導入與合作</a></li>
            <li><a href="cases.html" data-i18n="nav.cases">公司案例</a></li>
            <li><a href="news.html" data-i18n="nav.news">洞察與動態</a></li>
            <li><a href="about.html" data-i18n="nav.about">關於醫盾</a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="footer.solutions">核心解決方案</h4>
          <ul data-render="footer-solutions"></ul>
        </div>
        <div>
          <h4 data-i18n="footer.contact">聯絡我們</h4>
          <ul>
            <li data-render="company-email" data-placeholder></li>
            <li data-render="company-phone" data-placeholder></li>
            <li data-render="company-address" data-placeholder></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span data-render="year"></span> <span data-render="company-fullname">醫盾人工智慧股份有限公司</span> AegisMed AI co. <span data-i18n="footer.rights">版權所有</span></span>
        <span><a href="privacy.html#privacy" data-i18n="footer.privacy">隱私政策</a><a href="privacy.html#cookie" data-i18n="footer.cookie">Cookie</a><a href="privacy.html#terms" data-i18n="footer.terms">網站使用說明</a></span>
      </div>
    </div>`;

  function injectChrome() {
    const h = document.querySelector("header.site-header");
    if (h && !h.innerHTML.trim()) h.innerHTML = HEADER_HTML;
    const f = document.querySelector("footer.site-footer");
    if (f && !f.innerHTML.trim()) f.innerHTML = FOOTER_HTML;
    /* 右下角固定按鈕：內頁＝回到首頁，首頁＝回到頂端 */
    const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const isHome = here === "index.html";
    const fab = document.createElement("a");
    fab.className = "fab-home" + (isHome ? " fab-top" : "");
    fab.href = isHome ? "#top" : "index.html";
    fab.innerHTML = (isHome
      ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg><span data-i18n="fab.top">回到頂端</span>'
      : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg><span data-i18n="fab.home">回到首頁</span>');
    document.body.appendChild(fab);
    if (isHome) {
      fab.addEventListener("click", (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
      const toggle = () => fab.classList.toggle("show", window.scrollY > 600);
      window.addEventListener("scroll", toggle, { passive: true }); toggle();
    } else {
      fab.classList.add("show");
    }
  }

  /* ---------- 導覽列 ---------- */
  function initNav() {
    const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".nav-links a").forEach((a) => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === here || (here.startsWith("solution-") && href === "solutions.html")) a.classList.add("active");
    });
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (toggle && links) toggle.addEventListener("click", () => links.classList.toggle("open"));
    document.querySelectorAll(".lang-switch").forEach((sw) => {
      sw.innerHTML = Object.keys(LANG_ATTR).map((k) =>
        `<button type="button" data-lang="${k}" class="${k === lang ? "active" : ""}" aria-label="${LANG_ATTR[k]}">${LANG_LABEL[k]}</button>`).join("");
      sw.addEventListener("click", (e) => { const b = e.target.closest("button[data-lang]"); if (b) setLang(b.dataset.lang); });
    });
  }

  function setLang(l) {
    if (!LANG_ATTR[l]) return;
    lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    document.querySelectorAll(".lang-switch button").forEach((b) => b.classList.toggle("active", b.dataset.lang === l));
    applyI18n();
    renderAll();
  }

  /* ---------- 靜態文字翻譯（data-i18n） ---------- */
  function applyI18n() {
    document.documentElement.lang = LANG_ATTR[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el.__zh === undefined) el.__zh = el.innerHTML;
      const tr = lang === "zh" ? null : T(el.dataset.i18n);
      el.innerHTML = tr != null ? tr : el.__zh;
    });
  }

  /* ---------- 共用片段 ---------- */
  const sectionHead = (eyebrow, title, lead, cls = "") =>
    cls.includes("split")
      ? `<div class="section-head ${cls}"><div><div class="eyebrow">${esc(L(eyebrow))}</div><h2 style="margin:0">${esc(L(title))}</h2></div>${lead ? `<p class="lead">${esc(L(lead))}</p>` : "<div></div>"}</div>`
      : `<div class="section-head ${cls}"><div class="eyebrow">${esc(L(eyebrow))}</div><h2>${esc(L(title))}</h2>${lead ? `<p class="lead">${esc(L(lead))}</p>` : ""}</div>`;
  const chips = (list, cls = "") => `<div class="chips">${LA(list) && list.map((c) => `<span class="chip ${cls}">${esc(L(c))}</span>`).join("")}</div>`;
  const solutionById = (id) => (C.solutions.items || []).find((s) => s.id === id);

  /* ---------- 渲染器 ---------- */
  const R = {};
  R["year"] = (el) => { el.textContent = new Date().getFullYear(); };
  R["company-fullname"] = (el) => { el.textContent = L(D.company.fullName); };
  R["company-email"] = (el) => { el.innerHTML = `<a href="mailto:${esc(D.company.email)}">${esc(D.company.email)}</a>`; };
  R["company-phone"] = (el) => { el.textContent = D.company.phone; };
  R["company-address"] = (el) => { el.textContent = L(D.company.address); };
  R["footer-solutions"] = (el) => { el.innerHTML = C.solutions.items.map((s) => `<li><a href="${s.page}">${esc(L(s.name))}</a></li>`).join(""); };
  R["contact-title"] = (el) => { el.textContent = L(C.contact.title); };
  R["contact-lead"] = (el) => { el.textContent = L(C.contact.lead); };

  /* 內頁標題區 */
  const HERO_MAP = {
    solutions: () => [C.solutions.eyebrow, C.solutions.title, C.solutions.lead],
    platform: () => [C.platform.eyebrow, C.platform.title, C.platform.p1],
    cooperation: () => [C.implementation.eyebrow, C.implementation.title, C.implementation.lead],
    cases: () => [C.cases.eyebrow, C.cases.title, C.cases.lead],
    news: () => [C.insights.eyebrow, C.insights.title, C.insights.lead],
    about: () => [C.about.eyebrow, C.about.title, C.about.p1],
    contact: () => [C.contact.eyebrow, C.contact.title, C.contact.lead],
    privacy: () => [C.privacy.eyebrow, C.privacy.title, C.privacy.lead]
  };
  R["page-hero"] = (el) => {
    const f = HERO_MAP[el.dataset.key]; if (!f) return;
    const [eyebrow, title, lead] = f();
    el.innerHTML = `<div class="container"><div class="eyebrow">${esc(L(eyebrow))}</div><h1>${esc(L(title))}</h1><p>${esc(L(lead))}</p></div>`;
  };

  /* 首頁主視覺 + 方案關係示意 */
  R["hero"] = (el) => {
    const h = C.hero, b = h.board;
    const explain = (id) => { const n = b.notes[id]; return `<b>${esc(L(n.t))}</b><span>${esc(L(n.d))}</span>`; };
    el.innerHTML = `
      <div class="container">
        <div>
          <div class="eyebrow">${esc(L(h.eyebrow))}</div>
          <h1>${LA(h.title).map((s) => `<span>${esc(s)}</span>`).join("")}</h1>
          <p class="lead">${esc(L(h.lead))}</p>
          <div class="hero-actions">
            <a class="btn btn-light" href="solutions.html">${esc(L(h.cta1))}</a>
            <a class="btn btn-ghost" href="cooperation.html#paths">${esc(L(h.cta2))}</a>
          </div>
          <div class="hero-tags">${h.tags.map((t) => `<span>${esc(L(t))}</span>`).join("")}</div>
        </div>
        <div class="board" role="group" aria-label="${esc(L(b.title))}">
          <div class="label">${esc(b.label)}</div>
          <h3>${esc(L(b.title))}</h3>
          <p class="sub">${esc(L(b.sub))}</p>
          <div class="row top">${b.top.map((t) => `<div class="cell">${esc(L(t))}</div>`).join("")}</div>
          <div class="down">↓</div>
          <div class="mid"><b>${esc(L(b.mid.title))}</b><span>${esc(L(b.mid.line))}</span></div>
          <div class="down">↓</div>
          <div class="row bottom">${b.items.map((it) => `<button type="button" class="cell item ${it.id === state.board ? "active" : ""}" data-id="${it.id}"><b>${esc(L(it.name))}</b><span>${esc(L(it.sub))}</span></button>`).join("")}</div>
          <div class="explain">${explain(state.board)}</div>
          <div class="foot">${esc(L(b.line))}</div>
        </div>
      </div>`;
    el.querySelector(".row.bottom").addEventListener("click", (e) => {
      const btn = e.target.closest(".item"); if (!btn) return;
      state.board = btn.dataset.id;
      el.querySelectorAll(".item").forEach((x) => x.classList.toggle("active", x === btn));
      el.querySelector(".explain").innerHTML = explain(state.board);
    });
  };

  R["points"] = (el) => {
    el.innerHTML = `<div class="container points">${C.hero.points.map((p) => `<div class="point"><div class="num">${p.num}</div><h3>${esc(L(p.title))}</h3><p>${esc(L(p.text))}</p></div>`).join("")}</div>`;
  };

  /* 六大方案卡（首頁與總覽頁共用） */
  R["solutions-grid"] = (el) => {
    const s = C.solutions;
    const head = el.dataset.head === "none" ? "" : sectionHead(s.eyebrow, s.title, s.lead, "split");
    el.innerHTML = `
      ${head}
      <div class="sol-grid">${s.items.map((it, i) => `
        <a class="card sol-card ${i === 0 ? "featured" : ""}" href="${it.page}">
          <div class="head"><span class="num">${it.num}</span><span class="tag">${esc(it.tag)}</span></div>
          <h3>${esc(L(it.name))}</h3>
          <div class="pos">${esc(L(it.position))}</div>
          <p class="desc">${esc(L(it.desc))}</p>
          <span class="more"><span>${esc(L(s.more))}</span>${EXT}</span>
        </a>`).join("")}</div>
      <div class="band"><div><b>${esc(L(s.band.title))}</b><p>${esc(L(s.band.text))}</p></div><a class="btn btn-primary" href="platform.html">${esc(L(s.band.cta))} ${ARROW}</a></div>`;
  };

  /* HIS 三條路徑 */
  R["paths"] = (el) => {
    const p = C.paths;
    el.innerHTML = `
      ${sectionHead(p.eyebrow, p.title, p.lead, "split")}
      <div class="paths">${p.items.map((it) => `<div class="card path"><div class="tag">${esc(L(it.tag))}</div><h3>${esc(L(it.title))}</h3><p>${esc(L(it.text))}</p><div class="foot">${esc(L(it.foot))}</div></div>`).join("")}</div>
      <div class="must"><b>${esc(L(p.must.title))}</b>${chips(p.must.items, "mint")}</div>
      <p class="note">${esc(L(p.note))}</p>`;
  };

  /* 應用情境 */
  R["scenarios"] = (el) => {
    const s = C.scenarios;
    const render = () => {
      const it = s.items.find((x) => x.id === state.scenario) || s.items[0];
      el.querySelector(".scen-panel").innerHTML = `
        <div class="scen-flow">
          <div class="label">${esc(L(s.flowTitle))}</div>
          <h3>${esc(L(it.flow))}</h3>
          <ol>${it.steps.map((st) => `<li>${esc(L(st))}</li>`).join("")}</ol>
        </div>
        <div class="card scen-card">
          <div class="label">${esc(L(s.label))}</div>
          <h3>${esc(L(it.title))}</h3>
          <p>${esc(L(it.text))}</p>
          ${chips(it.tags, "mint")}
          <a class="arrow-link" href="contact.html">${esc(L(s.cta))} ${ARROW}</a>
        </div>`;
      el.querySelectorAll(".scen-tabs button").forEach((b) => b.classList.toggle("active", b.dataset.id === it.id));
    };
    el.innerHTML = `
      ${sectionHead(s.eyebrow, s.title, s.lead, "split")}
      <div class="scen-tabs">${s.items.map((it) => `<button type="button" data-id="${it.id}">${esc(L(it.tab))}</button>`).join("")}</div>
      <div class="scen-panel"></div>`;
    el.querySelector(".scen-tabs").addEventListener("click", (e) => { const b = e.target.closest("button[data-id]"); if (!b) return; state.scenario = b.dataset.id; render(); });
    render();
  };

  /* 平台五層 */
  const layersHTML = () => `<div class="layers">${C.platform.layers.map((l) => `<div class="layer ${l.num === "04" ? "accent" : ""}"><div class="num">${l.num}</div><div><b>${esc(L(l.title))}</b>${l.lines.map((x) => `<span>${esc(L(x))}</span>`).join("")}</div></div>`).join("")}</div><p class="note">${esc(L(C.platform.note))}</p>`;
  R["platform-brief"] = (el) => {
    const p = C.platform;
    el.innerHTML = `
      <div class="platform-grid">
        <div>
          <div class="eyebrow">${esc(L(p.eyebrow))}</div>
          <h2>${esc(L(p.title))}</h2>
          <p class="lead">${esc(L(p.p1))}</p>
          <p>${esc(L(p.p2))}</p>
          <a class="btn btn-outline" href="platform.html#compare">${esc(L(p.cta))} ${EXT}</a>
        </div>
        ${layersHTML()}
      </div>`;
  };
  R["layers"] = (el) => { el.innerHTML = layersHTML(); };
  R["platform-intro"] = (el) => {
    const p = C.platform;
    el.innerHTML = `<div class="platform-grid"><div><p class="lead">${esc(L(p.p1))}</p><p>${esc(L(p.p2))}</p></div>${layersHTML()}</div>`;
  };
  R["compare"] = (el) => {
    const c = C.platform.compare;
    el.innerHTML = `
      ${sectionHead(c.eyebrow, C.platform.title, c.lead)}
      <div class="compare-grid">${c.blocks.map((b) => `<div class="card"><h3>${esc(L(b.t))}</h3><p>${esc(L(b.d))}</p></div>`).join("")}</div>
      <div class="card" style="margin-top:20px;border-left:4px solid var(--teal)"><h3 style="margin-top:0">${esc(L(c.chain.t))}</h3><p>${esc(L(c.chain.d))}</p></div>`;
  };
  R["trust"] = (el) => {
    const t = C.platform.trust;
    el.innerHTML = `${sectionHead(t.eyebrow, t.title, null)}<div class="grid grid-4">${t.items.map((i) => `<div class="card"><h3 style="margin-top:0">${esc(L(i.t))}</h3><p>${esc(L(i.d))}</p></div>`).join("")}</div>`;
  };

  /* 導入四步驟 */
  R["implementation"] = (el) => {
    const m = C.implementation;
    el.innerHTML = `
      ${el.dataset.head === "none" ? "" : sectionHead(m.eyebrow, m.title, m.lead, "split")}
      <div class="steps-4">${m.steps.map((s) => `<div class="step4"><div class="num">${s.num}</div><h3>${esc(L(s.title))}</h3><p>${esc(L(s.text))}</p></div>`).join("")}</div>
      <div class="band"><div><p style="color:var(--navy);font-weight:600">${esc(L(m.note))}</p></div><a class="btn btn-primary" href="contact.html">${esc(L(m.cta))} ${ARROW}</a></div>`;
  };

  /* 合作兩卡 + 案例版位 */
  R["cooperation-cards"] = (el) => {
    const c = C.cooperation;
    const card = (x, topic) => `<div class="card coop-card"><h3>${esc(L(x.title))}</h3><p>${esc(L(x.text))}</p>${chips(x.tags)}<a class="arrow-link" href="contact.html?topic=${topic}">${esc(L(x.cta))} ${ARROW}</a></div>`;
    el.innerHTML = `
      ${sectionHead(c.eyebrow, c.title, c.lead, "split")}
      <div class="coop-cards">${card(c.hospital, 6)}${card(c.partner, 7)}</div>
      <div class="case-note"><div><b>${esc(L(c.cases.title))}</b><p>${esc(L(c.cases.text))}</p></div><a class="btn btn-mint" href="cases.html">${esc(L(c.cases.cta))} ${ARROW}</a></div>`;
  };

  /* 導入過程中的服務（人才交流、數據培訓） */
  R["services"] = (el) => {
    const s = C.cooperation.services;
    const list = (D.services || []).filter((x) => x.id === "talent-exchange" || x.id === "data-training");
    el.innerHTML = `
      ${sectionHead(s.eyebrow, s.title, s.lead)}
      <div class="grid grid-2">${list.map((x) => `
        <div class="card"><h3 style="margin-top:0">${esc(L(x.title))}</h3><p class="lead" style="font-size:1rem">${esc(L(x.tagline))}</p>
          <ul class="feature-list" style="list-style:none;padding:0;margin:14px 0 0;display:grid;gap:8px;color:var(--ink)">${x.features.map((f) => `<li>· ${esc(L(f))}</li>`).join("")}</ul>
        </div>`).join("")}</div>`;
  };

  /* 新聞 */
  function newsItem(n) {
    const showOrig = n.original && n.original !== L(n.title);
    return `
      <article class="news-item" data-lang-src="${n.lang}">
        <div class="date">${fmtDate(n.date)}</div>
        <div>
          <div class="source"><span class="lang-badge">${n.lang.toUpperCase()}</span>${esc(L(n.source))}</div>
          <h3><a href="${esc(n.url)}" target="_blank" rel="noopener">${esc(L(n.title))}</a></h3>
          ${showOrig ? `<p class="orig">${esc(n.original)}</p>` : ""}
        </div>
        <a class="btn btn-outline" href="${esc(n.url)}" target="_blank" rel="noopener">${zhOr("common.readMore", "閱讀報導")}</a>
      </article>`;
  }
  R["news-latest"] = (el) => {
    const i = C.insights;
    const list = [...D.news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
    el.innerHTML = `
      <div class="section-head" style="display:flex;justify-content:space-between;align-items:flex-end;gap:20px;max-width:none;flex-wrap:wrap">
        <div><div class="eyebrow">${esc(L(i.eyebrow))}</div><h2 style="margin:0">${esc(L(i.title))}</h2></div>
        <a class="btn btn-outline" href="news.html">${zhOr("common.learnMore", "所有動態")} ${ARROW}</a>
      </div>
      <div class="news-list">${list.map(newsItem).join("")}</div>`;
  };
  R["news-list"] = (el) => {
    const list = [...D.news].sort((a, b) => b.date.localeCompare(a.date));
    const filters = [["all", zhOr("news.filter.all", "全部")], ["zh", zhOr("news.filter.zh", "台灣媒體")], ["vi", zhOr("news.filter.vi", "越南媒體")]];
    const articles = C.insights.showArticles ? `
      <div class="section-head"><div class="eyebrow">${esc(L(C.insights.articlesEyebrow))}</div></div>
      <div class="grid grid-3" style="margin-bottom:48px">${C.insights.articles.map((a) => `<div class="card"><div class="eyebrow">${esc(L(a.tag))}</div><h3 style="margin-top:4px">${esc(L(a.title))}</h3></div>`).join("")}</div>` : "";
    el.innerHTML = `${articles}
      <div class="news-filter">${filters.map(([k, t]) => `<button type="button" data-f="${k}" class="${k === "all" ? "active" : ""}">${t}</button>`).join("")}</div>
      <div class="news-list">${list.map(newsItem).join("")}</div>`;
    el.querySelector(".news-filter").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-f]"); if (!b) return;
      el.querySelectorAll(".news-filter button").forEach((x) => x.classList.toggle("active", x === b));
      el.querySelectorAll(".news-item").forEach((it) => { it.style.display = (b.dataset.f === "all" || it.dataset.langSrc === b.dataset.f) ? "" : "none"; });
    });
  };

  /* 關於：首頁簡版 */
  R["about-brief"] = (el) => {
    const a = C.about, ld = a.leader;
    el.innerHTML = `
      <div class="about-grid">
        <div>
          <div class="eyebrow">${esc(L(a.eyebrow))}</div>
          <h2>${esc(L(a.title))}</h2>
          <p class="lead">${esc(L(a.p1))}</p>
          <p>${esc(L(a.p2))}</p>
          ${chips(a.tags)}
        </div>
        <div class="card" style="padding:30px">
          <div class="eyebrow">${esc(L(a.leadershipTitle))}</div>
          <h3 style="margin:4px 0 2px;font-size:1.5rem">${esc(L(ld.name))}</h3>
          <div style="color:var(--teal-dark);font-weight:600;margin-bottom:10px">${esc(L(ld.role))}</div>
          <p>${esc(L(ld.summary))}</p>
          <a class="arrow-link" href="about.html#leader">${esc(L(ld.cta))} ${EXT}</a>
        </div>
      </div>`;
  };

  /* 關於：執行長完整卡（正式體例，暫不放照片） */
  R["leader"] = (el) => {
    const a = C.about, ld = a.leader;
    el.innerHTML = `
      ${sectionHead(a.leadershipTitle, ld.name, null)}
      <div class="card leader-card" id="leader">
        <div class="role">${esc(L(ld.role))}</div>
        <div class="bio">${ld.bio.map((p) => `<p>${esc(L(p))}</p>`).join("")}</div>
        <div class="leader-detail">
          <div><h4>${esc(L(ld.careerTitle))}</h4><ul>${ld.career.map((c) => `<li>${esc(L(c))}</li>`).join("")}</ul></div>
          <div><h4>${esc(L(ld.eduTitle))}</h4><ul>${ld.edu.map((c) => `<li>${esc(L(c))}</li>`).join("")}</ul></div>
        </div>
      </div>`;
  };

  R["organizations"] = (el) => {
    const a = C.about;
    el.innerHTML = `
      ${sectionHead(a.orgsEyebrow, a.orgsTitle, a.orgsLead)}
      <div class="grid grid-2">${D.organizations.map((o) => `<div class="card org-card"><div class="abbr">${esc(o.abbr)}</div><div><h3>${esc(L(o.name))}</h3><p>${esc(L(o.desc))}</p></div></div>`).join("")}</div>`;
  };

  R["company-facts"] = (el) => {
    const f = (k, zhL, zhV, ph) => `<div class="fact" ${ph ? "data-placeholder" : ""}><b>${zhOr("about.company." + k, zhL)}</b><span>${zhOr("about.company." + k + "Value", zhV)}</span></div>`;
    el.innerHTML = `${sectionHead(C.about.companyTitle, L(D.company.fullName), null)}<div class="facts">${f("legal", "法定名稱", "醫盾人工智慧股份有限公司 AegisMed AI co.", false)}${f("founded", "成立年份", "待補", true)}${f("hq", "總部", "台北市（地址待補）", true)}${f("regions", "服務地區", "台灣、越南", false)}</div>`;
  };

  R["partners"] = (el) => {
    const group = (title, list, cls) => `<div class="partner-group"><h3>${esc(title)}</h3><div class="chips">${list.map((p) => `<span class="chip ${cls}">${esc(L(p))}</span>`).join("")}</div></div>`;
    el.innerHTML = group(zhOr("partners.vn", "越南"), D.partners.vn, "vn") + group(zhOr("partners.tw", "台灣"), D.partners.tw, "tw");
  };

  /* 聯絡表單（首頁與聯絡頁共用） */
  R["contact-form"] = (el) => {
    const c = C.contact, f = c.fields;
    const pre = new URLSearchParams(location.search).get("topic");
    el.innerHTML = `
      <form class="form contact-form" novalidate>
        <h2 style="margin-bottom:6px">${esc(L(c.formTitle))}</h2>
        <p class="small muted" style="margin-bottom:18px">${esc(L(c.privacyNote))}</p>
        <div class="form-row">
          <div class="field"><label for="f-org">${esc(L(f.org))}</label><input id="f-org" name="org" required></div>
          <div class="field"><label for="f-name">${esc(L(f.name))}</label><input id="f-name" name="name" required></div>
        </div>
        <div class="form-row">
          <div class="field"><label for="f-country">${esc(L(f.country))}</label><input id="f-country" name="country"></div>
          <div class="field"><label for="f-email">${esc(L(f.email))}</label><input id="f-email" name="email" type="email" required></div>
        </div>
        <div class="field"><label for="f-topic">${esc(L(f.topic))}</label>
          <select id="f-topic" name="topic"><option value="">${esc(L(f.topicPlaceholder))}</option>${c.topics.map((t, i) => `<option ${String(i) === pre ? "selected" : ""}>${esc(L(t))}</option>`).join("")}</select></div>
        <div class="field"><label for="f-need">${esc(L(f.need))}</label><textarea id="f-need" name="message" rows="6" required></textarea></div>
        <button class="btn btn-primary" type="submit">${esc(L(c.submit))} ${ARROW}</button>
        <p class="form-note">${esc(L(c.formNote))}</p>
      </form>`;
    el.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      const v = (n) => (el.querySelector(`[name="${n}"]`) || {}).value || "";
      const subject = encodeURIComponent(`[AegisMed AI co.] ${v("topic") || "合作洽詢"} - ${v("org")}`);
      const body = encodeURIComponent(`${v("name")}\n${v("org")} / ${v("country")}\n${v("email")}\n\n${v("message")}`);
      location.href = `mailto:${D.company.email}?subject=${subject}&body=${body}`;
    });
  };

  /* 方案架構圖：純 HTML/CSS，文字依語言自 content.js 的 figure 欄位取得 */
  const figureHTML = (f) => {
    if (!f) return "";
    const cell = (c) => `<div class="cell">${esc(L(c))}</div>`;
    const cells = (arr) => `<div class="cells" style="--n:${arr.length}">${arr.map(cell).join("")}</div>`;
    let body = "";
    if (f.type === "stack") {
      body = f.rows.map((r) => `${r.arrow ? `<div class="arrow">${esc(r.arrow)}</div>` : ""}<div class="fig-row${r.accent ? " accent" : ""}">${r.label ? `<div class="row-label">${esc(L(r.label))}</div>` : ""}${cells(r.cells)}</div>`).join("");
    } else if (f.type === "hub") {
      const n = f.nodes.map(cell);
      body = `<div class="hub">${n.slice(0, 4).join("")}<div class="center">${esc(L(f.center))}</div>${n.slice(4).join("")}</div>`;
    } else if (f.type === "steps") {
      body = `<ol class="steps">${f.steps.map((s, i) => `<li${s.accent ? ' class="accent"' : ""}><span class="n">${i + 1}</span><div><b>${esc(L(s.t))}</b>${s.d ? `<span>${esc(L(s.d))}</span>` : ""}</div></li>`).join("")}</ol>`;
    } else if (f.type === "grid") {
      body = `<div class="groups">${f.groups.map((g) => `<div class="group"><b>${esc(L(g.t))}</b>${g.items.map((x) => `<span>${esc(L(x))}</span>`).join("")}</div>`).join("")}</div>`;
    }
    return `<div class="fig fig-${f.type}" role="img" aria-label="${esc(L(f.label))}"><div class="fig-label">${esc(L(f.label))}</div>${body}${f.foot ? `<div class="fig-foot">${esc(L(f.foot))}</div>` : ""}</div>`;
  };

  /* 方案內頁 */
  R["solution"] = (el) => {
    const s = solutionById(el.dataset.id); if (!s) return;
    const S = C.solutions;
    document.title = `${L(s.name)}｜${lang === "zh" ? "醫盾 " : ""}AegisMed AI co.`;
    el.innerHTML = `
      <section class="page-hero"><div class="container">
        <div class="num">${s.num} · ${esc(s.tag)}</div>
        <h1>${esc(L(s.name))}</h1>
        <p>${esc(L(s.headline))}</p>
      </div></section>
      <section class="section" style="padding-top:36px"><div class="container">
        <div class="sol-nav">${S.items.map((x) => `<a href="${x.page}" class="${x.id === s.id ? "active" : ""}">${x.num} ${esc(L(x.name))}</a>`).join("")}</div>
      </div></section>
      <section class="section" style="padding-top:0"><div class="container sol-intro">
        <div><div class="eyebrow">${esc(L(s.position))}</div><h2>${esc(L(s.headline))}</h2><p class="lead">${esc(L(s.intro))}</p></div>
        ${figureHTML(s.figure)}
      </div></section>
      <section class="section alt"><div class="container">
        <div class="pts">${s.points.map((p) => `<div class="pt"><h3>${esc(L(p.t))}</h3><p>${esc(L(p.d))}</p></div>`).join("")}</div>
      </div></section>
      <section class="section"><div class="container">
        <div class="extra">${s.extra.map((x) => `<div class="card"><h3>${esc(L(x.t))}</h3><p>${esc(L(x.d))}</p></div>`).join("")}</div>
      </div></section>
      <section class="section alt"><div class="container">
        <div class="cta"><div><h2>${esc(L(C.implementation.title))}</h2><p>${esc(L(C.implementation.note))}</p></div><a class="btn btn-light" href="contact.html?topic=${S.items.indexOf(s)}">${esc(L(S.cta))} ${ARROW}</a></div>
      </div></section>`;
  };

  /* 隱私政策等 */
  R["privacy"] = (el) => {
    const ids = ["privacy", "cookie", "terms", "ip"];
    el.innerHTML = C.privacy.sections.map((s, i) => `<section class="section" id="${ids[i]}" style="padding:36px 0"><div class="container" style="max-width:860px"><h2 style="font-size:1.4rem">${esc(L(s.t))}</h2><p>${esc(L(s.d))}</p></div></section>`).join("") +
      `<div class="container" style="max-width:860px"><p class="note" data-placeholder>${esc(L(C.privacy.lead))}</p></div>`;
  };

  /* ---------- 公司案例：合作交流 ---------- */
  let flat = [];
  const EXCL = new Set(D.excludePhotos || []);
  R["cases"] = (el) => {
    const K = C.cases;
    const tabs = [["live", K.tabs.live], ["pilot", K.tabs.pilot], ["exchange", K.tabs.exchange]];
    const institutions = `<div class="section-head" style="margin-top:56px"><h2 style="font-size:1.3rem">${lang === "zh" ? "合作交流網絡" : (lang === "vi" ? "Mạng lưới giao lưu hợp tác" : "Cooperation network")}</h2></div><div class="grid grid-2" data-render="partners"></div>`;
    const exchange = () => {
      flat = [];
      const evs = [...D.events].sort((a, b) => a.date.localeCompare(b.date));
      const phases = D.phases.map((p) => {
        const list = evs.filter((e) => e.phase === p.id);
        return `
        <section class="phase" id="${p.id}">
          <div class="phase-head"><span class="badge">${esc(p.period)}</span><h2>${esc(L(p.title))}</h2></div>
          <div class="case-list">${list.map((e) => {
            const files = e.slides.flatMap((s) => D.photos[s] || []).filter((f) => !EXCL.has(f));
            const start = flat.length;
            files.forEach((f) => flat.push({ file: f, cap: `${fmtDate(e.date)} · ${L(e.title)}` }));
            const shown = files.slice(0, 4);
            const strip = shown.map((f, i) => {
              const more = (i === 3 && files.length > 4) ? `class="more-photos" data-more="+${files.length - 4}"` : "";
              return `<a href="assets/photos/${f}" data-idx="${start + i}" ${more}><img src="assets/photos/thumbs/${f}" alt="${esc(L(e.title))}" loading="lazy"></a>`;
            }).join("");
            const news = (e.news || []).map((i) => D.news[i]).filter(Boolean).map((n) => `<a href="${esc(n.url)}" target="_blank" rel="noopener">${esc(L(n.source))} ${EXT}</a>`).join("");
            return `
            <article class="case-card" id="${e.id}">
              <div>
                <div class="date">${fmtDate(e.date)}<span class="status">${esc(L(K.status))}</span></div>
                <h3>${esc(L(e.title))}</h3>
                <div class="place">${PIN}${esc(L(e.place))}</div>
                <div class="case-fields">
                  <div><b>${esc(L(K.fields.background))}</b><span>${esc(L(e.desc))}</span></div>
                  <div><b>${esc(L(K.fields.role))}</b><span>${esc(L(e.mou ? K.roleMou : K.roleText))}</span></div>
                  <div class="links"><b>${esc(L(K.fields.result))}</b><span>${files.length} ${esc(L(K.resultPhotos))}</span>${news}</div>
                  <div><b>${esc(L(K.fields.permission))}</b><span>${esc(L(K.permissionText))}</span></div>
                </div>
              </div>
              <div class="photo-strip">${strip}</div>
            </article>`;
          }).join("")}</div>
        </section>`;
      }).join("");
      return `<p class="lead" style="margin-bottom:36px">${esc(L(K.exchangeIntro))}</p>${phases}${institutions}
        <div class="lightbox" role="dialog" aria-modal="true"><button type="button" class="close" aria-label="Close">×</button><button type="button" class="prev" aria-label="Previous">‹</button><img alt=""><div class="cap"></div><button type="button" class="next" aria-label="Next">›</button></div>`;
    };
    const render = () => {
      const panel = el.querySelector(".case-panel");
      panel.innerHTML = state.caseTab === "exchange" ? exchange() : `<div class="pending-panel">${esc(L(K.pending))}</div>`;
      el.querySelectorAll(".tabs button").forEach((b) => b.classList.toggle("active", b.dataset.id === state.caseTab));
      panel.querySelectorAll("[data-render]").forEach((x) => { const fn = R[x.dataset.render]; if (fn) fn(x); });
      initLightbox(panel);
    };
    el.innerHTML = `<div class="tabs">${tabs.map(([id, t]) => `<button type="button" data-id="${id}">${esc(L(t))}</button>`).join("")}</div><div class="case-panel"></div>`;
    el.querySelector(".tabs").addEventListener("click", (e) => { const b = e.target.closest("button[data-id]"); if (!b) return; state.caseTab = b.dataset.id; render(); });
    render();
    if (location.hash) { const t = document.querySelector(location.hash); if (t) setTimeout(() => t.scrollIntoView({ behavior: "smooth", block: "start" }), 80); }
  };

  function initLightbox(root) {
    const lb = root.querySelector(".lightbox"); if (!lb) return;
    const img = lb.querySelector("img"), cap = lb.querySelector(".cap");
    let cur = 0;
    const show = (i) => { if (!flat.length) return; cur = (i + flat.length) % flat.length; img.src = "assets/photos/" + flat[cur].file; cap.textContent = flat[cur].cap; lb.classList.add("open"); document.body.style.overflow = "hidden"; };
    const hide = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
    root.addEventListener("click", (e) => { const a = e.target.closest(".photo-strip a"); if (!a) return; e.preventDefault(); show(parseInt(a.dataset.idx, 10)); });
    lb.querySelector(".close").addEventListener("click", hide);
    lb.querySelector(".prev").addEventListener("click", () => show(cur - 1));
    lb.querySelector(".next").addEventListener("click", () => show(cur + 1));
    lb.addEventListener("click", (e) => { if (e.target === lb) hide(); });
    document.addEventListener("keydown", (e) => { if (!lb.classList.contains("open")) return; if (e.key === "Escape") hide(); else if (e.key === "ArrowLeft") show(cur - 1); else if (e.key === "ArrowRight") show(cur + 1); });
  }

  function renderAll() {
    document.querySelectorAll("[data-render]").forEach((el) => { const fn = R[el.dataset.render]; if (fn && !el.closest(".case-panel")) fn(el); });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.toggle("no-placeholder-marks", !SHOW_PLACEHOLDER_MARKS);
    injectChrome();
    initNav();
    applyI18n();
    renderAll();
    if (location.hash && !document.querySelector("[data-render='cases']")) {
      const target = document.querySelector(location.hash);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  });
})();
