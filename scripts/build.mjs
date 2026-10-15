// Builds the static megmos.com holding page (EN at /, AR at /ar/) into public/.
// Run: node scripts/build.mjs
import { writeFileSync, mkdirSync } from "node:fs";

const APP = "https://mabs.megmos.com";
const SITE = "https://megmos.com";

const en = {
  lang: "en", dir: "ltr", path: "/", other: "/ar/", otherLabel: "العربية", otherAria: "Switch to Arabic",
  title: "MABS by Megmos: AI marketing studio for real estate agents",
  description: "MABS turns your property facts and your brand into listing descriptions, social posts, emails, video scripts and website pages, in English or Arabic.",
  signIn: "Sign in", start: "Start free", seeWhat: "See what you can create",
  eyebrow: "AI marketing studio for real estate agents",
  heroTitle: "Create once. Market everywhere.",
  heroSub: "MABS turns your property facts and your brand into listing descriptions, social posts, emails, video scripts and website pages, in English or Arabic, with every number copied exactly as you entered it.",
  heroNote: "Free plan: 10 AI generations a month. No credit card required.",
  mockGenerator: "MLS Description", mockExample: "Example", mockProjectLabel: "Project facts",
  mockFacts: ["4 bd", "3.5 ba", "2,850 sq ft", "Pool", "Waterfront views"],
  mockOutput: "Built in 2022, this single-family home offers 4 bedrooms, 3.5 bathrooms and 2,850 square feet on a 0.25-acre lot, with waterfront views, a pool and a renovated kitchen.",
  mockRepurpose: "Repurpose as", mockTargets: ["Instagram", "Email", "Flyer", "Video script"],
  factsAria: "MABS at a glance",
  facts: [["23", "AI generators for real estate"], ["2", "Languages: English and Arabic"], ["1", "Brand profile reused everywhere"], ["0", "Invented facts: numbers copied exactly"]],
  howEyebrow: "How it works", howTitle: "Enter the facts once. Use them in every piece of marketing.",
  steps: [
    ["Set up your brand", "Add your name, brokerage, brand voice, service areas and contact details. Every generator writes in your voice."],
    ["Add a property project", "Enter the listing facts one time: bedrooms, bathrooms, square footage, lot size, features and price."],
    ["Generate and repurpose", "Create the MLS description, then turn it into a post, an email, a flyer or a video script with Repurpose."],
  ],
  genEyebrow: "What you can create", genTitle: "23 generators, one connected workflow",
  genSub: "Grouped the way agents work, from the listing itself to social content, client emails, your own brand and your website.",
  groups: [
    ["Property & listings", ["MLS Description", "Luxury Listing Description", "Listing Headlines & Highlights", "Listing Campaign", "Flyer Copy"]],
    ["Social & content", ["Instagram Caption", "Social Post", "Video Script", "Market Update", "Neighborhood Guide", "Blog Post"]],
    ["Email & clients", ["Email Marketing", "Client Follow-Up", "Lead Nurture Sequence", "Listing Presentation"]],
    ["Your brand & website", ["Agent Bio", "Website pages: Homepage, About, Services, Community, Property, Contact and FAQ"]],
  ],
  kitName: "Website Kit", kitDesc: "All your website pages in one place, ready to copy, with SEO title, description and URL for each.",
  whyEyebrow: "Why MABS", whyTitle: "Built for how real estate copy has to work",
  why: [
    ["Facts stay facts", "Numbers are copied exactly as you enter them. No invented features, prices, statistics or market claims."],
    ["English and Arabic", "Switch the interface and the content language in one click, with right-to-left layouts done properly."],
    ["Fair-housing aware", "Listing and neighborhood copy describes places and properties, never who should live there."],
    ["Your voice, every time", "Your brand voice, service areas and contact details are applied to every generator automatically."],
  ],
  finalTitle: "Your next listing, ready to market.",
  finalSub: "Create a free account, add your brand once, and generate your first MLS description today.",
  footerNav: "Footer", support: "Support",
};

const ar = {
  lang: "ar", dir: "rtl", path: "/ar/", other: "/", otherLabel: "English", otherAria: "التبديل إلى الإنجليزية",
  title: "MABS من Megmos: استوديو تسويق بالذكاء الاصطناعي لوكلاء العقارات",
  description: "يحوّل MABS بيانات عقارك وهويتك التجارية إلى أوصاف إدراج ومنشورات ورسائل بريد ونصوص فيديو وصفحات موقع، بالعربية أو الإنجليزية.",
  signIn: "تسجيل الدخول", start: "ابدأ مجانًا", seeWhat: "تعرّف على ما يمكنك إنشاؤه",
  eyebrow: "استوديو تسويق بالذكاء الاصطناعي لوكلاء العقارات",
  heroTitle: "أنشئ مرة واحدة، وسوّق في كل مكان.",
  heroSub: "يحوّل MABS بيانات عقارك وهويتك التجارية إلى أوصاف إدراج ومنشورات ورسائل بريد ونصوص فيديو وصفحات موقع، بالعربية أو الإنجليزية، مع نقل كل رقم كما أدخلته تمامًا.",
  heroNote: "الباقة المجانية: 10 عمليات إنشاء شهريًا. لا حاجة لبطاقة ائتمان.",
  mockGenerator: "وصف MLS", mockExample: "مثال", mockProjectLabel: "بيانات المشروع",
  mockFacts: ["4 غرف نوم", "3.5 حمام", "2,850 قدم مربع", "مسبح", "إطلالة مائية"],
  mockOutput: "بُني هذا المنزل المستقل عام 2022، ويضم 4 غرف نوم و3.5 حمام على مساحة 2,850 قدمًا مربعًا، ويقع على قطعة أرض مساحتها 0.25 إيكر، مع إطلالات على الواجهة المائية ومسبح ومطبخ مجدد.",
  mockRepurpose: "إعادة الاستخدام كـ", mockTargets: ["Instagram", "بريد إلكتروني", "نشرة", "نص فيديو"],
  factsAria: "MABS في لمحة",
  facts: [["23", "مولّدًا للتسويق العقاري"], ["2", "لغتان: العربية والإنجليزية"], ["1", "ملف هوية واحد يُستخدم في كل مكان"], ["0", "معلومات مختلقة: الأرقام تُنقل كما هي"]],
  howEyebrow: "كيف يعمل", howTitle: "أدخل البيانات مرة واحدة، واستخدمها في كل محتوى تسويقي.",
  steps: [
    ["جهّز هويتك", "أضف اسمك ووكالتك وأسلوب علامتك ومناطق عملك وبيانات التواصل. كل مولّد يكتب بأسلوبك."],
    ["أضف مشروع عقار", "أدخل بيانات الإدراج مرة واحدة: غرف النوم والحمامات والمساحة ومساحة الأرض والمزايا والسعر."],
    ["أنشئ وأعد الاستخدام", "أنشئ وصف MLS، ثم حوّله إلى منشور أو رسالة بريد أو نشرة أو نص فيديو بزر إعادة الاستخدام."],
  ],
  genEyebrow: "ما يمكنك إنشاؤه", genTitle: "23 مولّدًا في سير عمل واحد مترابط",
  genSub: "مرتّبة بالطريقة التي يعمل بها الوكلاء، من الإدراج نفسه إلى محتوى التواصل الاجتماعي ورسائل العملاء وهويتك وموقعك الإلكتروني.",
  groups: [
    ["العقارات والإدراجات", ["وصف MLS", "وصف إدراج فاخر", "عناوين الإدراج وأبرز مزاياه", "حملة الإدراج", "نص النشرة"]],
    ["التواصل الاجتماعي والمحتوى", ["تعليق Instagram", "منشورات التواصل الاجتماعي", "نص فيديو", "تحديث السوق", "دليل الحي", "مقال مدونة"]],
    ["البريد والعملاء", ["التسويق بالبريد الإلكتروني", "متابعة العملاء", "سلسلة رعاية العملاء المحتملين", "عرض الإدراج"]],
    ["هويتك وموقعك", ["نبذة الوكيل", "صفحات الموقع: الرئيسية، من نحن، الخدمات، المجتمع، العقار، التواصل، الأسئلة الشائعة"]],
  ],
  kitName: "حزمة الموقع", kitDesc: "كل صفحات موقعك في مكان واحد، جاهزة للنسخ، مع العنوان التعريفي والوصف ورابط الصفحة لكل صفحة.",
  whyEyebrow: "لماذا MABS", whyTitle: "مصمَّم لما يتطلبه المحتوى العقاري",
  why: [
    ["الوقائع تبقى وقائع", "تُنقل الأرقام كما أدخلتها تمامًا. لا مزايا أو أسعار أو إحصاءات أو ادعاءات سوقية مختلقة."],
    ["العربية والإنجليزية", "بدّل لغة الواجهة والمحتوى بنقرة واحدة، مع تخطيط صحيح من اليمين إلى اليسار."],
    ["مراعاة الإسكان العادل", "نصوص الإدراج والأحياء تصف الأماكن والعقارات، لا من يجب أن يسكنها."],
    ["أسلوبك في كل مرة", "يُطبَّق أسلوب علامتك ومناطق عملك وبيانات تواصلك على كل مولّد تلقائيًا."],
  ],
  finalTitle: "إدراجك القادم، جاهز للتسويق.",
  finalSub: "أنشئ حسابًا مجانيًا، وأضف هويتك مرة واحدة، وأنشئ أول وصف MLS اليوم.",
  footerNav: "تذييل الصفحة", support: "الدعم",
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function page(t) {
  const groups = t.groups.map(([title, items], i) => `
        <div class="group">
          <h3>${esc(title)}</h3>
          <ul>
            ${items.map((n) => `<li>${esc(n)}</li>`).join("\n            ")}${i === 3 ? `
            <li class="kit">${esc(t.kitName)}<small>${esc(t.kitDesc)}</small></li>` : ""}
          </ul>
        </div>`).join("");
  return `<!doctype html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.title)}</title>
<meta name="description" content="${esc(t.description)}">
<link rel="canonical" href="${SITE}${t.path}">
<link rel="alternate" hreflang="en" href="${SITE}/">
<link rel="alternate" hreflang="ar" href="${SITE}/ar/">
<link rel="alternate" hreflang="x-default" href="${SITE}/">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(t.title)}">
<meta property="og:description" content="${esc(t.description)}">
<meta property="og:url" content="${SITE}${t.path}">
<meta property="og:image" content="${SITE}/logo.png">
<link rel="icon" href="/logo.png" type="image/png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Serif:ital,wght@0,400;0,500;1,400&display=swap">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<header>
  <div class="wrap bar">
    <a class="brand" href="${t.path}"><img src="/logo.png" alt="MABS logo" width="44" height="44"><span>MABS</span></a>
    <div class="actions">
      <a class="btn btn-outline" href="${t.other}" hreflang="${t.lang === "en" ? "ar" : "en"}" aria-label="${esc(t.otherAria)}">${esc(t.otherLabel)}</a>
      <a class="btn" href="${APP}/login">${esc(t.signIn)}</a>
      <a class="btn btn-primary" href="${APP}/signup">${esc(t.start)}</a>
    </div>
  </div>
</header>
<main>
  <section class="wrap hero">
    <div class="hero-copy">
      <p class="eyebrow">${esc(t.eyebrow)}</p>
      <h1>${esc(t.heroTitle)}</h1>
      <p class="lead">${esc(t.heroSub)}</p>
      <div class="cta-row">
        <a class="btn btn-primary btn-lg" href="${APP}/signup">${esc(t.start)}</a>
        <a class="btn btn-outline btn-lg" href="#create">${esc(t.seeWhat)}</a>
      </div>
      <p class="note">${esc(t.heroNote)}</p>
    </div>
    <div class="mock" aria-hidden="true">
      <div class="mock-head"><span>${esc(t.mockGenerator)}</span><span class="tag">${esc(t.mockExample)}</span></div>
      <div class="mock-body">
        <div><span class="label">${esc(t.mockProjectLabel)}</span>
          <div class="chips">${t.mockFacts.map((f) => `<span class="chip">${esc(f)}</span>`).join("")}</div></div>
        <div class="output">${esc(t.mockOutput)}</div>
        <div class="repurpose"><span>${esc(t.mockRepurpose)}</span>${t.mockTargets.map((x) => `<span class="chip-dark">${esc(x)}</span>`).join("")}</div>
      </div>
    </div>
  </section>

  <section class="facts" aria-label="${esc(t.factsAria)}">
    <div class="wrap">${t.facts.map(([v, l]) => `
      <div class="fact"><b>${v}</b><span>${esc(l)}</span></div>`).join("")}
    </div>
  </section>

  <section class="wrap section" id="how">
    <div class="section-head"><p class="eyebrow">${esc(t.howEyebrow)}</p><h2>${esc(t.howTitle)}</h2></div>
    <div class="grid grid-3">${t.steps.map(([h, b], i) => `
      <div class="card"><span class="num">0${i + 1}</span><h3>${esc(h)}</h3><p>${esc(b)}</p></div>`).join("")}
    </div>
  </section>

  <section class="band" id="create">
    <div class="wrap section">
      <div class="section-head"><p class="eyebrow">${esc(t.genEyebrow)}</p><h2>${esc(t.genTitle)}</h2><p class="sub">${esc(t.genSub)}</p></div>
      <div class="grid grid-4">${groups}
      </div>
    </div>
  </section>

  <section class="wrap section">
    <div class="section-head"><p class="eyebrow">${esc(t.whyEyebrow)}</p><h2>${esc(t.whyTitle)}</h2></div>
    <div class="grid grid-4">${t.why.map(([h, b]) => `
      <div class="why"><h3>${esc(h)}</h3><p>${esc(b)}</p></div>`).join("")}
    </div>
  </section>

  <section class="facts">
    <div class="wrap section final" style="display:flex">
      <h2>${esc(t.finalTitle)}</h2>
      <p>${esc(t.finalSub)}</p>
      <a class="btn btn-primary btn-lg" href="${APP}/signup">${esc(t.start)}</a>
    </div>
  </section>
</main>
<footer>
  <div class="wrap">
    <div class="foot-brand"><img src="/logo.png" alt="" width="30" height="30"><span dir="ltr">MABS · Megmos AI Brand Studio</span></div>
    <nav aria-label="${esc(t.footerNav)}">
      <a href="${APP}/login">${esc(t.signIn)}</a>
      <a href="${APP}/support">${esc(t.support)}</a>
      <span dir="ltr">© 2026 Megmos Creative Co.</span>
    </nav>
  </div>
</footer>
</body>
</html>
`;
}

mkdirSync("public/ar", { recursive: true });
writeFileSync("public/index.html", page(en));
writeFileSync("public/ar/index.html", page(ar));
writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
writeFileSync("public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE}/</loc></url>
  <url><loc>${SITE}/ar/</loc></url>
</urlset>
`);
console.log("built public/index.html, public/ar/index.html");
