// Builds megmos.com (EN at /, AR at /ar/) into public/. Run: node scripts/build.mjs
// Copy lives in scripts/content.mjs; styles in public/styles.css; behaviour in public/site.js.
import { writeFileSync, mkdirSync } from "node:fs";
import { en, ar, APP, SITE } from "./content.mjs";
import { legal, LEGAL_UPDATED } from "./legal.mjs";
import { pages, COMPANY } from "./pages.mjs";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const br = (s) => esc(s).replace(/\n/g, "<br>");

// Stroke icons, 24px grid, currentColor.
const P = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  gem: '<path d="M6 3h12l3 6-9 12L3 9z"/><path d="M3 9h18"/><path d="m9 3-1.5 6L12 21l4.5-12L15 3"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/>',
  chart: '<path d="M4 20V4"/><path d="M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
  film: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
  browser: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 8.5h18"/><path d="M6 6.3h.01M8.5 6.3h.01"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  repeat: '<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12"/><path d="M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/>',
  unlink: '<path d="M9 7H7a5 5 0 0 0 0 10h2"/><path d="M15 7h2a5 5 0 0 1 0 10h-2"/><path d="M3 3l18 18"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 13.5a7 7 0 0 1 4 6.5"/>',
  building: '<path d="M4 21V5l8-2v18"/><path d="M12 9h8v12"/><path d="M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2"/><path d="M2 21h20"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m6 6 2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="1.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
};
const icon = (name, size = 20, cls = "") =>
  `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name]}</svg>`;

const SIGNUP = `${APP}/signup`;
const LOGIN = `${APP}/login`;

/* ---------- product mockups (HTML/CSS, replaceable with real screenshots) ---------- */

function appSidebar(t, active = 0) {
  return `<div class="app-side" aria-hidden="true">
      <div class="app-logo"><img src="/logo.png" alt="" width="28" height="28"><span>MABS</span></div>
      ${t.app.navItems.map((n, i) => `<div class="app-nav${i === active ? " on" : ""}">${esc(n)}</div>`).join("")}
    </div>`;
}

function generatorGrid(t, highlight = "") {
  const icons = [["home", "gem", "layers"], ["chat", "chat", "film"], ["mail", "repeat"], ["user", "browser"]];
  return t.app.sections.map(([title, gens], si) => `
        <div class="app-sec">
          <div class="app-sec-title">${esc(title)}</div>
          <div class="app-gens">${gens.map((g, gi) => `<div class="app-gen${g === highlight ? " on" : ""}">${icon(icons[si][gi] || "sparkle", 16)}<span>${esc(g)}</span></div>`).join("")}</div>
        </div>`).join("");
}

function outputCard(t, extraCls = "") {
  return `<div class="app-output ${extraCls}">
        <div class="app-output-head"><div><strong>${esc(t.app.outputTitle)}</strong><small>${esc(t.app.outputMeta)}</small></div><span class="tag">${esc(t.app.sampleTag)}</span></div>
        <p>${esc(t.brand.sample.mls)}</p>
        <div class="app-actions"><span class="mini-btn">${icon("copy", 14)}${esc(t.app.copy)}</span><span class="mini-btn">${esc(t.app.save)}</span><span class="mini-btn solid">${esc(t.app.repurpose)}</span></div>
      </div>`;
}

function heroMock(t) {
  return `<div class="hero-visual" aria-hidden="true">
    <div class="window">
      <div class="window-bar"><i></i><i></i><i></i><span>mabs.megmos.com</span></div>
      <div class="app">
        ${appSidebar(t)}
        <div class="app-main">
          <div class="app-title">${esc(t.app.workspace)}</div>
          ${generatorGrid(t, t.app.sections[0][1][0])}
        </div>
      </div>
    </div>
    ${outputCard(t, "floating")}
  </div>`;
}

function featurePreview(t, kind) {
  const pv = t.features.previews;
  switch (kind) {
    case "mls": return `<div class="pv pv-text"><span class="pv-chip">4 bd</span><span class="pv-chip">3.5 ba</span><span class="pv-chip">2,850 sq ft</span><p>${esc(t.brand.sample.mls.slice(0, 118))}…</p></div>`;
    case "luxury": return `<div class="pv pv-text lux"><p>${esc(pv.luxury)}</p></div>`;
    case "social": return `<div class="pv pv-tags">${pv.social.map((s, i) => `<span class="${i === 0 ? "on" : ""}">${esc(s)}</span>`).join("")}</div>`;
    case "email": return `<div class="pv pv-mail"><div><b>${esc(t.brand.labels.subject)}:</b> ${esc(t.brand.sample.emailSubject)}</div><p>${esc(t.brand.sample.email.slice(0, 90))}…</p></div>`;
    case "market": return `<div class="pv pv-stats">${pv.market.map(([l, v]) => `<div><b>${v}</b><span>${esc(l)}</span></div>`).join("")}<em>${esc(pv.marketNote)}</em></div>`;
    case "video": return `<div class="pv pv-lines">${pv.videoLines.map((l) => `<span>${esc(l)}</span>`).join("")}</div>`;
    case "web": return `<div class="pv pv-tags">${pv.web.map((s) => `<span>${esc(s)}</span>`).join("")}</div>`;
    case "lang": return `<div class="pv pv-lang"><span dir="ltr" lang="en">${esc(pv.langEn)}</span><span dir="rtl" lang="ar">${esc(pv.langAr)}</span></div>`;
    default: return "";
  }
}

function demoPanels(t) {
  const f = t.demo.form;
  const panel1 = `<div class="app">
      ${appSidebar(t)}
      <div class="app-main"><div class="app-title">${esc(t.app.workspace)}</div>${generatorGrid(t, t.app.sections[0][1][0])}</div>
    </div>`;
  const field = ([l, v], wide = false, badge = "") => `<div class="f${wide ? " wide" : ""}"><label>${esc(l)}${badge ? ` <span class="badge">${esc(badge)}</span>` : ""}</label><div class="in">${esc(v)}</div></div>`;
  const panel2 = `<div class="app">
      ${appSidebar(t, 1)}
      <div class="app-main">
        <div class="app-title">${icon("home", 18)} ${esc(f.title)}</div>
        <div class="form">
          ${field(f.project, true)}
          ${f.fields.map((x) => field(x)).join("")}
          ${field(f.features, true)}
          ${field(f.tone)}${field(f.language)}
          ${field(f.brand, true, f.brandBadge)}
          <div class="f wide"><span class="mini-btn solid big">${icon("sparkle", 14)}${esc(f.button)}</span></div>
        </div>
      </div>
    </div>`;
  const panel3 = `<div class="app">
      ${appSidebar(t, 1)}
      <div class="app-main">${outputCard(t)}</div>
    </div>`;
  return [panel1, panel2, panel3];
}


/* ---------- shared footer ---------- */
function footerHtml(t) {
  const otherLang = t.lang === "en" ? "ar" : "en";
  const L = legal[t.lang];
  const base = t.lang === "ar" ? "/ar/" : "/";
  return `<footer class="site-footer">
  <div class="wrap foot-grid">
    <div class="foot-brand">
      <a class="brand" href="${t.path}"><img src="/logo.png" alt="" width="36" height="36"><span class="brand-text"><b>MABS</b><small>${esc(t.brandSub)}</small></span></a>
      <p>${esc(t.footer.desc)}</p>
    </div>
    <nav aria-label="${esc(t.footer.navLabel)}" class="foot-cols">
      <div><h3>${esc(t.footer.navTitle)}</h3><a href="${t.path}#product">${esc(t.nav.product)}</a><a href="${t.path}#features">${esc(t.nav.features)}</a><a href="${t.path}#how">${esc(t.nav.how)}</a><a href="${t.path}#faq">${esc(t.nav.faq)}</a></div>
      <div><h3>${esc(t.footer.accountTitle)}</h3><a href="${LOGIN}">${esc(t.nav.login)}</a><a href="${SIGNUP}">${esc(t.nav.start)}</a><a href="${APP}/support">${esc(t.footer.support)}</a></div>
      <div><h3>${esc(L.labels.legal)}</h3><a href="${base}privacy/">${esc(L.privacy.title)}</a><a href="${base}terms/">${esc(L.terms.title)}</a><a href="${base}cookies/">${esc(L.cookies.title)}</a></div>
      <div><h3>${esc(t.footer.companyTitle)}</h3><span>${esc(t.footer.company)}</span><a href="${base}about/">${esc(pages[t.lang].nav.about)}</a><a href="${base}contact/">${esc(t.nav.contact)}</a><a href="${t.other}" hreflang="${otherLang}" lang="${otherLang}">${esc(t.otherLabel)}</a></div>
    </nav>
  </div>
  <div class="wrap foot-base"><span dir="ltr">© ${new Date().getFullYear()} Megmos LLC · Megmos Creative Co.</span></div>
</footer>`;
}

/* ---------- legal pages ---------- */
const inline = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
function legalBody(blocks) {
  return blocks.map(([type, a, b]) => {
    if (type === "h2") return `<h2>${inline(a)}</h2>`;
    if (type === "p") return `<p>${inline(a)}</p>`;
    if (type === "ul") return `<ul>${a.map((li) => `<li>${inline(li)}</li>`).join("")}</ul>`;
    if (type === "table") return `<div class="table-wrap"><table><thead><tr>${a.map((h) => `<th scope="col">${inline(h)}</th>`).join("")}</tr></thead><tbody>${b.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    return "";
  }).join("\n      ");
}

function legalPage(t, key) {
  const L = legal[t.lang];
  const doc = L[key];
  const otherLang = t.lang === "en" ? "ar" : "en";
  const enPath = `/${doc.slug}/`, arPath = `/ar/${doc.slug}/`;
  const self = t.lang === "en" ? enPath : arPath;
  const other = t.lang === "en" ? arPath : enPath;
  const others = ["privacy", "terms", "cookies"].filter((k) => k !== key);
  return `<!doctype html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(doc.title)} | MABS</title>
<meta name="description" content="${esc(doc.desc)}">
<link rel="canonical" href="${SITE}${self}">
<link rel="alternate" hreflang="en" href="${SITE}${enPath}">
<link rel="alternate" hreflang="ar" href="${SITE}${arPath}">
<link rel="alternate" hreflang="x-default" href="${SITE}${enPath}">
<meta name="theme-color" content="#f8f8f8">
<link rel="icon" href="/logo.png" type="image/png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Serif:ital,wght@0,400;0,500;1,400&display=swap">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<a class="skip" href="#main">${esc(t.skip)}</a>
${headerHtml(t, other)}
<main id="main" class="legal">
  <div class="wrap legal-wrap">
    <a class="text-link back" href="${t.path}">${icon("arrow", 16, "back-ic")} ${esc(L.labels.back)}</a>
    <p class="eyebrow">${esc(L.labels.legal)}</p>
    <h1>${esc(doc.title)}</h1>
    <p class="legal-date">${esc(L.labels.updated)}: ${esc(LEGAL_UPDATED[t.lang])}</p>
    ${L.labels.prevails ? `<p class="legal-note">${esc(L.labels.prevails)}</p>` : ""}
    <article class="legal-body">
      ${legalBody(doc.blocks)}
    </article>
    <nav class="legal-more" aria-label="${esc(L.labels.legal)}">${others.map((k) => `<a href="${t.lang === "ar" ? "/ar/" : "/"}${L[k].slug}/">${esc(L[k].title)}</a>`).join("")}</nav>
  </div>
</main>
${footerHtml(t)}
<script src="/site.js" defer></script>
</body>
</html>
`;
}

/* ---------- shared header (home, legal, about, contact) ---------- */
function headerHtml(t, otherHref, current = "") {
  const otherLang = t.lang === "en" ? "ar" : "en";
  const base = t.lang === "ar" ? "/ar/" : "/";
  const P = pages[t.lang];
  const cur = (k) => (current === k ? ' aria-current="page"' : "");
  return `<header class="site-header" id="top">
  <div class="wrap bar">
    <a class="brand" href="${t.path}" aria-label="MABS · ${esc(t.brandSub)}">
      <img src="/logo.png" alt="" width="40" height="40">
      <span class="brand-text"><b>MABS</b><small>${esc(t.brandSub)}</small></span>
    </a>
    <nav class="nav" id="site-nav" aria-label="${esc(t.nav.label)}">
      <a href="${t.path}#product">${esc(t.nav.product)}</a>
      <a href="${t.path}#features">${esc(t.nav.features)}</a>
      <a href="${t.path}#faq">${esc(t.nav.faq)}</a>
      <a href="${base}about/"${cur("about")}>${esc(P.nav.about)}</a>
      <a href="${base}contact/"${cur("contact")}>${esc(t.nav.contact)}</a>
      <div class="nav-mobile-actions">
        <a class="btn btn-outline" href="${LOGIN}">${esc(t.nav.login)}</a>
        <a class="btn btn-primary" href="${SIGNUP}">${esc(t.nav.start)}</a>
      </div>
    </nav>
    <div class="bar-actions">
      <a class="lang" href="${otherHref}" hreflang="${otherLang}" lang="${otherLang}" aria-label="${esc(t.otherAria)}">${icon("globe", 16)}<span>${esc(t.otherLabel)}</span></a>
      <a class="link-login" href="${LOGIN}">${esc(t.nav.login)}</a>
      <a class="btn btn-primary btn-sm" href="${SIGNUP}">${esc(t.nav.start)}</a>
      <button class="menu-btn" type="button" aria-controls="site-nav" aria-expanded="false" data-open="${esc(t.nav.menu)}" data-close="${esc(t.nav.close)}" aria-label="${esc(t.nav.menu)}">${icon("menu", 22)}</button>
    </div>
  </div>
</header>`;
}

/* ---------- about & contact pages ---------- */
function pageHead(t, title, desc, enPath, arPath) {
  const self = t.lang === "en" ? enPath : arPath;
  return `<!doctype html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${self}">
<link rel="alternate" hreflang="en" href="${SITE}${enPath}">
<link rel="alternate" hreflang="ar" href="${SITE}${arPath}">
<link rel="alternate" hreflang="x-default" href="${SITE}${enPath}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE}${self}">
<meta property="og:image" content="${SITE}/logo.png">
<meta name="theme-color" content="#f8f8f8">
<link rel="icon" href="/logo.png" type="image/png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Serif:ital,wght@0,400;0,500;1,400&display=swap">
<link rel="stylesheet" href="/styles.css">
<script>document.documentElement.classList.add('js')</script>`;
}

const ORG_ADDRESS = { "@type": "PostalAddress", streetAddress: COMPANY.street, addressLocality: "Sheridan", addressRegion: "WY", postalCode: "82801", addressCountry: "US" };

function addressHtml() {
  return `<address class="addr" dir="ltr" lang="en">${esc(COMPANY.entity)}<br>${esc(COMPANY.street)}<br>${esc(COMPANY.city)}<br>${esc(COMPANY.country)}</address>`;
}

function aboutPage(t) {
  const A = pages[t.lang].about;
  const L = legal[t.lang];
  const base = t.lang === "ar" ? "/ar/" : "/";
  const enPath = "/about/", arPath = "/ar/about/";
  return `${pageHead(t, A.seoTitle, A.desc, enPath, arPath)}
<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org", "@type": "Organization",
    name: COMPANY.trading, legalName: COMPANY.entity, url: SITE, logo: `${SITE}/logo.png`, email: COMPANY.support,
    address: { "@type": "PostalAddress", addressRegion: "WY", addressCountry: "US" },
    makesOffer: { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "MABS (Megmos AI Brand Studio)", url: APP, applicationCategory: "BusinessApplication" } },
  })}</script>
</head>
<body>
<a class="skip" href="#main">${esc(t.skip)}</a>
${headerHtml(t, t.lang === "en" ? arPath : enPath, "about")}
<main id="main">
  <section class="page-hero">
    <div class="wrap page-hero-inner reveal">
      <p class="eyebrow">${esc(A.eyebrow)}</p>
      <h1>${esc(A.h1)}</h1>
      <p class="lead">${esc(A.lead)}</p>
      <div class="cta-row"><a class="btn btn-primary btn-lg" href="${SIGNUP}">${esc(A.heroCta)}</a><a class="btn btn-outline btn-lg" href="${t.path}#how">${esc(A.heroCta2)}</a></div>
    </div>
  </section>

  <section class="section band" aria-labelledby="ab-name">
    <div class="wrap two-col">
      <div class="reveal">
        <h2 id="ab-name">${esc(A.nameTitle)}</h2>
        <div class="acronym" dir="ltr" lang="en">${A.nameParts.map(([l, w]) => `<div><b>${l}</b><span>${esc(w)}</span></div>`).join("")}</div>
      </div>
      <div class="prose reveal">${A.nameText.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
    </div>
  </section>

  <section class="section" aria-labelledby="ab-story">
    <div class="wrap two-col">
      <div class="reveal"><h2 id="ab-story">${esc(A.storyTitle)}</h2></div>
      <div class="prose reveal">${A.story.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
    </div>
  </section>

  <section class="section band" aria-labelledby="ab-today">
    <div class="wrap">
      <div class="section-head reveal"><h2 id="ab-today">${esc(A.todayTitle)}</h2><p class="sub">${esc(A.todayIntro)}</p></div>
      <div class="grid g2">${A.today.map(([h, b], i) => `
        <article class="card reveal">${icon(["sparkle", "layers", "browser", "globe"][i], 22, "card-ic")}<h3>${esc(h)}</h3><p>${esc(b)}</p></article>`).join("")}
      </div>
    </div>
  </section>

  <section class="section" aria-label="${esc(A.missionTitle)} · ${esc(A.visionTitle)}">
    <div class="wrap mv">
      <div class="mv-card reveal"><p class="eyebrow">${esc(A.missionTitle)}</p><p class="mv-text">${esc(A.mission)}</p></div>
      <div class="mv-card soft reveal"><p class="eyebrow">${esc(A.visionTitle)}</p><p class="mv-text">${esc(A.vision)}</p></div>
    </div>
  </section>

  <section class="section band" aria-labelledby="ab-who">
    <div class="wrap two-col">
      <div class="reveal"><h2 id="ab-who">${esc(A.whoTitle)}</h2><p class="sub mt-s">${esc(A.whoNote)}</p></div>
      <ul class="checklist reveal">${A.who.map((w) => `<li>${icon("check", 18)}<span>${esc(w)}</span></li>`).join("")}</ul>
    </div>
  </section>

  <section class="section" aria-labelledby="ab-diff">
    <div class="wrap">
      <div class="section-head reveal"><h2 id="ab-diff">${esc(A.diffTitle)}</h2></div>
      <div class="grid g5">${A.diff.map(([h, b]) => `
        <div class="why reveal"><h3>${esc(h)}</h3><p>${esc(b)}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="philosophy" aria-labelledby="ab-approach">
    <div class="wrap philo-grid">
      <div class="reveal"><p class="eyebrow light">MABS</p><h2 id="ab-approach">${esc(A.approachTitle)}</h2></div>
      <div class="reveal">${A.approach.map((p) => `<p class="sub light-p">${esc(p)}</p>`).join("")}</div>
    </div>
  </section>

  <section class="section" aria-labelledby="ab-company">
    <div class="wrap two-col">
      <div class="reveal"><h2 id="ab-company">${esc(A.companyTitle)}</h2></div>
      <div class="reveal">
        <p class="prose-p">${esc(A.companyIntro)}</p>
        <dl class="roles">${A.companyRoles.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      </div>
    </div>
  </section>

  <section class="final">
    <div class="wrap final-inner reveal">
      <h2>${esc(A.ctaTitle)}</h2>
      <p class="sub">${esc(A.ctaSub)}</p>
      <div class="cta-row center">
        <a class="btn btn-primary btn-lg" href="${SIGNUP}">${esc(A.cta)}</a>
        <a class="text-link" href="${base}contact/">${esc(A.cta2)} ${icon("arrow", 16, "flip")}</a>
      </div>
      <p class="note">${icon("check", 16)} ${esc(t.hero.plan)}</p>
    </div>
  </section>

  <section class="section details" aria-labelledby="ab-details">
    <div class="wrap two-col">
      <div class="reveal"><h2 id="ab-details">${esc(A.detailsTitle)}</h2></div>
      <div class="reveal">
        <dl class="facts-list">${A.details.map(([k, v]) => {
          const val = v.endsWith(".com") ? `<a href="https://${v}" dir="ltr">${esc(v)}</a>` : `<span${/^[A-Za-z(]/.test(v) ? ' dir="ltr"' : ""}>${esc(v)}</span>`;
          return `<div><dt>${esc(k)}</dt><dd>${val}</dd></div>`;
        }).join("")}</dl>
        <p class="links-row"><b>${esc(A.legalTitle)}:</b> <a href="${base}privacy/">${esc(L.privacy.title)}</a> · <a href="${base}terms/">${esc(L.terms.title)}</a> · <a href="${base}cookies/">${esc(L.cookies.title)}</a></p>
      </div>
    </div>
  </section>
</main>
${footerHtml(t)}
<script src="/site.js" defer></script>
</body>
</html>
`;
}

function contactPage(t) {
  const C = pages[t.lang].contact;
  const F = C.form;
  const L = legal[t.lang];
  const base = t.lang === "ar" ? "/ar/" : "/";
  const enPath = "/contact/", arPath = "/ar/contact/";
  const field = (id, label, input, { required = false, hint = "" } = {}) => `
          <div class="cf-field" data-field="${id}">
            <label for="cf-${id}">${esc(label)}${required ? ' <span class="req" aria-hidden="true">*</span>' : ` <span class="opt">(${esc(F.optional)})</span>`}</label>
            ${input}
            ${hint ? `<p class="cf-hint" id="cf-${id}-hint">${esc(hint)}</p>` : ""}
            <p class="cf-error" id="cf-${id}-error" hidden></p>
          </div>`;
  const msgs = {
    required: F.errRequired, email: F.errEmail, messageShort: F.errMessageShort, tooLong: F.errTooLong,
    summary: F.errSummary, send: F.errSend, rate: F.errRate, sending: F.sending, submit: F.submit, counter: F.counter,
  };
  return `${pageHead(t, C.seoTitle, C.desc, enPath, arPath)}
<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE}${t.lang === "en" ? enPath : arPath}`,
    mainEntity: {
      "@type": "Organization", name: COMPANY.trading, legalName: COMPANY.entity, url: SITE, email: COMPANY.support,
      contactPoint: [{ "@type": "ContactPoint", contactType: "customer support", email: COMPANY.support, availableLanguage: ["English", "Arabic"] }],
    },
  })}</script>
</head>
<body>
<a class="skip" href="#main">${esc(t.skip)}</a>
${headerHtml(t, t.lang === "en" ? arPath : enPath, "contact")}
<main id="main">
  <section class="page-hero compact">
    <div class="wrap page-hero-inner">
      <p class="eyebrow">${esc(C.eyebrow)}</p>
      <h1>${esc(C.h1)}</h1>
      <p class="lead">${esc(C.lead)}</p>
      <div class="cta-row"><a class="btn btn-primary btn-lg" href="#contact-form" data-focus-form>${esc(C.cta)}</a></div>
    </div>
  </section>

  <section class="section band cf-section">
    <div class="wrap cf-grid">
      <aside class="cf-aside">
        <div class="cf-info">
          <h2>${esc(C.emailTitle)}</h2>
          <p>${esc(C.emailText)}</p>
          <a class="contact-mail" href="mailto:${COMPANY.support}" dir="ltr">${COMPANY.support}</a>
        </div>
        <div class="cf-info">
          <h2>${esc(C.privacyTitle)}</h2>
          <p>${esc(C.privacyText)}</p>
          <a class="contact-mail" href="mailto:${COMPANY.privacy}" dir="ltr">${COMPANY.privacy}</a>
        </div>
        <div class="cf-info">
          <h2>${esc(C.memberTitle)}</h2>
          <p>${esc(C.memberText)}</p>
          <a class="text-link" href="${APP}/support">${esc(C.memberLink)} ${icon("arrow", 16, "flip")}</a>
        </div>
      </aside>

      <div class="cf-card" id="contact-form">
        <h2>${esc(F.title)}</h2>
        <form class="cf" novalidate data-endpoint="${APP}/api/v1/contact" data-locale="${t.lang}" aria-describedby="cf-status">
          <script type="application/json" class="cf-i18n">${JSON.stringify(msgs)}</script>
          <div class="cf-row">${field("name", F.name, `<input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="200">`, { required: true })}${field("email", F.email, `<input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="320" dir="ltr">`, { required: true })}</div>
          <div class="cf-row">${field("company", F.company, `<input id="cf-company" name="company" type="text" autocomplete="organization" maxlength="200">`)}${field("inquiryType", F.inquiry, `<select id="cf-inquiryType" name="inquiryType">${F.inquiryTypes.map(([v, l]) => `<option value="${v}">${esc(l)}</option>`).join("")}</select>`)}</div>
          ${field("subject", F.subject, `<input id="cf-subject" name="subject" type="text" required maxlength="300">`, { required: true })}
          ${field("message", F.message, `<textarea id="cf-message" name="message" rows="7" required minlength="10" maxlength="5000" aria-describedby="cf-message-hint cf-message-count"></textarea><p class="cf-count" id="cf-message-count" aria-live="polite">0 / 5000</p>`, { required: true, hint: F.messageHint })}
          <div class="cf-hp" aria-hidden="true"><label for="cf-website">Website</label><input id="cf-website" name="website" type="text" tabindex="-1" autocomplete="off"></div>
          <p class="cf-privacy">${esc(F.privacyBefore)}<a href="${base}privacy/" target="_blank" rel="noopener">${esc(F.privacyLink)}</a>${esc(F.privacyAfter)}</p>
          <p class="cf-status" id="cf-status" role="status" aria-live="polite"></p>
          <button class="btn btn-primary btn-lg cf-submit" type="submit">${esc(F.submit)}</button>
        </form>
        <div class="cf-success" hidden tabindex="-1">
          ${icon("check", 28)}
          <p>${esc(F.success)}</p>
          <button type="button" class="btn btn-outline cf-again">${esc(F.sendAnother)}</button>
        </div>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="cf-team">
    <div class="wrap two-col">
      <div><h2 id="cf-team">${esc(C.teamTitle)}</h2><p class="prose-p mt-s">${esc(C.teamText)}</p></div>
      <dl class="facts-list">${C.teamDetails.map(([k, v]) => {
        const val = v.startsWith("https://") ? `<a href="${v}" dir="ltr">${esc(v.replace("https://", ""))}</a>`
          : v.includes("@") ? `<a href="mailto:${v}" dir="ltr">${esc(v)}</a>`
          : `<span${/^[A-Za-z(]/.test(v) ? ' dir="ltr"' : ""}>${esc(v)}</span>`;
        return `<div><dt>${esc(k)}</dt><dd>${val}</dd></div>`;
      }).join("")}</dl>
    </div>
  </section>

  <section class="section band" aria-labelledby="cf-faq">
    <div class="wrap faq-grid">
      <div class="section-head"><h2 id="cf-faq">${esc(C.faqTitle)}</h2><a class="text-link" href="${t.path}#faq">${esc(C.faqMore)} ${icon("arrow", 16, "flip")}</a></div>
      <div class="faq">${C.faq.map(([q, a]) => `<details><summary><span>${esc(q)}</span><i aria-hidden="true"></i></summary><p>${esc(a)}</p></details>`).join("")}</div>
    </div>
  </section>
</main>
${footerHtml(t)}
<script src="/site.js" defer></script>
<script src="/contact.js" defer></script>
</body>
</html>
`;
}

/* ---------- page ---------- */

function page(t) {
  const otherLang = t.lang === "en" ? "ar" : "en";
  const panels = demoPanels(t);
  const s = t.brand.sample;
  const L = t.brand.labels;
  return `<!doctype html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.seoTitle)}</title>
<meta name="description" content="${esc(t.seoDesc)}">
<link rel="canonical" href="${SITE}${t.path}">
<link rel="alternate" hreflang="en" href="${SITE}/">
<link rel="alternate" hreflang="ar" href="${SITE}/ar/">
<link rel="alternate" hreflang="x-default" href="${SITE}/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="MABS · Megmos AI Brand Studio">
<meta property="og:title" content="${esc(t.seoTitle)}">
<meta property="og:description" content="${esc(t.seoDesc)}">
<meta property="og:url" content="${SITE}${t.path}">
<meta property="og:image" content="${SITE}/logo.png">
<meta name="theme-color" content="#f8f8f8">
<link rel="icon" href="/logo.png" type="image/png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Serif:ital,wght@0,400;0,500;1,400&display=swap">
<link rel="stylesheet" href="/styles.css">
<script>document.documentElement.classList.add('js')</script>
<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MABS (Megmos AI Brand Studio)",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE}${t.path}`,
    description: t.seoDesc,
    inLanguage: t.lang,
    publisher: { "@type": "Organization", name: "Megmos Creative Co." },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: t.hero.plan },
  })}</script>
<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  })}</script>
</head>
<body>
<a class="skip" href="#main">${esc(t.skip)}</a>

${headerHtml(t, t.other)}

<main id="main">

<!-- 2. Hero -->
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy reveal">
      <p class="eyebrow">${esc(t.hero.eyebrow)}</p>
      <h1>${esc(t.hero.title)}</h1>
      <p class="lead">${esc(t.hero.sub)}</p>
      <div class="cta-row">
        <a class="btn btn-primary btn-lg" href="${SIGNUP}">${esc(t.hero.cta)}</a>
        <a class="btn btn-outline btn-lg" href="#product">${esc(t.hero.cta2)}</a>
      </div>
      <p class="hero-line">${esc(t.hero.line)}</p>
      <p class="note">${icon("check", 16)} ${esc(t.hero.plan)}</p>
    </div>
    <div class="reveal">${heroMock(t)}</div>
  </div>
</section>

<!-- 3. Problem -->
<section class="section" aria-labelledby="problem-title">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(t.problem.eyebrow)}</p>
      <h2 id="problem-title">${esc(t.problem.title)}</h2>
      <p class="sub">${esc(t.problem.sub)}</p>
    </div>
    <div class="grid g4">
      ${t.problem.cards.map(([h, b], i) => `<article class="card problem reveal">${icon(["layers", "repeat", "unlink", "list"][i], 22, "card-ic")}<h3>${esc(h)}</h3><p>${esc(b)}</p></article>`).join("\n      ")}
    </div>
  </div>
</section>

<!-- 4. Solution -->
<section class="section band" aria-labelledby="solution-title">
  <div class="wrap">
    <div class="section-head center reveal">
      <p class="eyebrow">${esc(t.solution.eyebrow)}</p>
      <h2 id="solution-title">${esc(t.solution.title)}</h2>
      <p class="sub">${esc(t.solution.sub)}</p>
    </div>
    <ol class="pillars">
      ${t.solution.pillars.map(([h, b], i) => `<li class="pillar reveal"><span class="num">0${i + 1}</span><h3>${esc(h)}</h3><p>${esc(b)}</p></li>`).join("\n      ")}
    </ol>
  </div>
</section>

<!-- 5. Features -->
<section class="section" id="features" aria-labelledby="features-title">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(t.features.eyebrow)}</p>
      <h2 id="features-title">${esc(t.features.title)}</h2>
      <p class="sub">${esc(t.features.sub)}</p>
    </div>
    <div class="grid g4 features">
      ${t.features.cards.map((c) => `<article class="card feature reveal">
        <div class="feature-top">${icon(c.icon, 20, "tile")}<h3>${esc(c.name)}</h3></div>
        <p>${esc(c.desc)}</p>
        <div class="feature-pv" aria-hidden="true">${featurePreview(t, c.preview)}</div>
      </article>`).join("\n      ")}
    </div>
    <p class="fine reveal">${esc(t.features.note)}</p>
  </div>
</section>

<!-- 6. How it works -->
<section class="section band" id="how" aria-labelledby="how-title">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(t.how.eyebrow)}</p>
      <h2 id="how-title">${esc(t.how.title)}</h2>
    </div>
    <ol class="steps">
      ${t.how.steps.map(([h, b], i) => `<li class="step reveal"><span class="step-num">0${i + 1}</span><div><h3>${esc(h)}</h3><p>${esc(b)}</p></div></li>`).join("\n      ")}
    </ol>
    <p class="center-cta reveal"><a class="text-link" href="#product">${esc(t.how.cta)} ${icon("arrow", 16, "flip")}</a></p>
  </div>
</section>

<!-- 7. Product demo -->
<section class="section" id="product" aria-labelledby="product-title">
  <div class="wrap">
    <div class="section-head center reveal">
      <p class="eyebrow">${esc(t.demo.eyebrow)}</p>
      <h2 id="product-title">${esc(t.demo.title)}</h2>
      <p class="sub">${esc(t.demo.sub)}</p>
    </div>
    <div class="demo reveal">
      <div class="tabs" role="tablist" aria-label="${esc(t.demo.tabsLabel)}">
        ${t.demo.tabs.map((x, i) => `<button type="button" role="tab" id="tab-${i}" aria-controls="panel-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(x)}</button>`).join("")}
      </div>
      ${panels.map((p, i) => `<div class="demo-panel" role="tabpanel" id="panel-${i}" aria-labelledby="tab-${i}"${i === 0 ? "" : " hidden"}>
        <div class="demo-stage">
          <div class="window"><div class="window-bar"><i></i><i></i><i></i><span>mabs.megmos.com</span></div><div aria-hidden="true">${p}</div></div>
          <aside class="annot"><span class="annot-num">${i + 1}</span><h3>${esc(t.demo.annotations[i][0])}</h3><p>${esc(t.demo.annotations[i][1])}</p></aside>
        </div>
      </div>`).join("\n      ")}
      <p class="fine">${esc(t.demo.disclaimer)}</p>
    </div>
    <p class="center-cta reveal"><a class="btn btn-primary btn-lg" href="${SIGNUP}">${esc(t.demo.cta)}</a></p>
  </div>
</section>

<!-- 8. Brand consistency -->
<section class="section band" aria-labelledby="brand-title">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(t.brand.eyebrow)}</p>
      <h2 id="brand-title">${esc(t.brand.title)}</h2>
      <p class="sub">${esc(t.brand.sub)}</p>
    </div>
    <div class="suite reveal" aria-label="${esc(t.brand.sampleTag)}">
      <article class="piece p-mls"><header><span>${esc(L.mls)}</span><span class="tag">${esc(t.brand.sampleTag)}</span></header><p>${esc(s.mls)}</p><footer>${esc(s.agent)} · ${esc(s.brokerage)}</footer></article>
      <article class="piece p-social"><header><span>${esc(L.social)}</span></header><div class="ph" aria-hidden="true"><span>${esc(s.address)}</span></div><p>${br(s.instagram)}</p></article>
      <article class="piece p-email"><header><span>${esc(L.email)}</span></header><div class="mail-subj"><b>${esc(L.subject)}:</b> ${esc(s.emailSubject)}</div><p>${esc(s.email)}</p><footer>${esc(s.agent)} · ${esc(s.brokerage)}</footer></article>
      <article class="piece p-market"><header><span>${esc(L.market)}</span></header><p>${esc(s.market)}</p><footer>${esc(s.agent)} · ${esc(s.brokerage)}</footer></article>
      <article class="piece p-video"><header><span>${esc(L.video)}</span></header><p class="mono">${br(s.video)}</p></article>
    </div>
    <p class="fine reveal">${esc(t.brand.caption)}</p>
  </div>
</section>

<!-- 9. Who -->
<section class="section" aria-labelledby="who-title">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(t.who.eyebrow)}</p>
      <h2 id="who-title">${esc(t.who.title)}</h2>
    </div>
    <div class="grid g4">
      ${t.who.cards.map(([h, b], i) => `<article class="card who reveal">${icon(["user", "gem", "users", "building"][i], 22, "card-ic")}<h3>${esc(h)}</h3><p>${esc(b)}</p></article>`).join("\n      ")}
    </div>
  </div>
</section>

<!-- 10. Philosophy -->
<section class="philosophy" aria-labelledby="philo-title">
  <div class="wrap philo-grid">
    <div class="reveal">
      <p class="eyebrow light">${esc(t.philosophy.eyebrow)}</p>
      <h2 id="philo-title">${esc(t.philosophy.title)}</h2>
      <p class="sub">${esc(t.philosophy.sub)}</p>
    </div>
    <ul class="principles">
      ${t.philosophy.principles.map(([h, b]) => `<li class="reveal">${icon("check", 20)}<div><h3>${esc(h)}</h3><p>${esc(b)}</p></div></li>`).join("\n      ")}
    </ul>
  </div>
</section>

<!-- 11. FAQ -->
<section class="section" id="faq" aria-labelledby="faq-title">
  <div class="wrap faq-grid">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(t.faq.eyebrow)}</p>
      <h2 id="faq-title">${esc(t.faq.title)}</h2>
    </div>
    <div class="faq reveal">
      ${t.faq.items.map(([q, a]) => `<details><summary><span>${esc(q)}</span><i aria-hidden="true"></i></summary><p>${esc(a)}</p></details>`).join("\n      ")}
    </div>
  </div>
</section>

<!-- 12. Final CTA -->
<section class="final" aria-labelledby="final-title">
  <div class="wrap final-inner reveal">
    <h2 id="final-title">${esc(t.final.title)}</h2>
    <p class="sub">${esc(t.final.sub)}</p>
    <div class="cta-row center">
      <a class="btn btn-primary btn-lg" href="${SIGNUP}">${esc(t.final.cta)}</a>
      <a class="text-link" href="#product">${esc(t.final.cta2)} ${icon("arrow", 16, "flip")}</a>
    </div>
    <p class="note">${icon("check", 16)} ${esc(t.final.plan)}</p>
  </div>
</section>

<!-- 12b. Contact -->
<section class="section contact" id="contact" aria-labelledby="contact-title">
  <div class="wrap">
    <div class="section-head center reveal">
      <p class="eyebrow">${esc(t.contact.eyebrow)}</p>
      <h2 id="contact-title">${esc(t.contact.title)}</h2>
      <p class="sub">${esc(t.contact.sub)}</p>
    </div>
    <div class="contact-grid">
      ${t.contact.cards.map((c) => `<article class="card contact-card reveal">${icon(c.icon, 22, "card-ic")}<h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p><a class="contact-mail" href="mailto:${c.email}" dir="ltr">${esc(c.email)}</a></article>`).join("\n      ")}
    </div>
    <p class="contact-member reveal">${esc(t.contact.member)} <a class="text-link" href="${APP}/support">${esc(t.contact.memberLink)} ${icon("arrow", 16, "flip")}</a></p>
  </div>
</section>

</main>

<!-- 13. Footer -->
${footerHtml(t)}
<script src="/site.js" defer></script>
</body>
</html>
`;
}

mkdirSync("public/ar", { recursive: true });
writeFileSync("public/index.html", page(en));
writeFileSync("public/ar/index.html", page(ar));
writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
for (const t of [en, ar]) {
  for (const key of ["privacy", "terms", "cookies"]) {
    const dir = `public${t.lang === "ar" ? "/ar" : ""}/${legal[t.lang][key].slug}`;
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/index.html`, legalPage(t, key));
  }
}
for (const t of [en, ar]) {
  const pre = t.lang === "ar" ? "public/ar" : "public";
  mkdirSync(`${pre}/about`, { recursive: true });
  mkdirSync(`${pre}/contact`, { recursive: true });
  writeFileSync(`${pre}/about/index.html`, aboutPage(t));
  writeFileSync(`${pre}/contact/index.html`, contactPage(t));
}
const urls = ["/", "/about/", "/contact/", "/privacy/", "/terms/", "/cookies/"];
writeFileSync("public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map((u) => `  <url><loc>${SITE}${u}</loc><xhtml:link rel="alternate" hreflang="ar" href="${SITE}/ar${u}"/></url>
  <url><loc>${SITE}/ar${u}</loc><xhtml:link rel="alternate" hreflang="en" href="${SITE}${u}"/></url>`).join("\n")}
</urlset>
`);
console.log("built home + legal pages (EN/AR)");
