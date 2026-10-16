// Page copy for megmos.com, English and Arabic.
// Rules: no invented stats, testimonials, prices, integrations or guarantees.
// Sample content uses a fictional brand (Harbor & Stone Realty) and is labelled as a sample.

export const APP = "https://mabs.megmos.com";
export const SITE = "https://megmos.com";

const sampleEn = {
  agent: "Avery Lane",
  brokerage: "Harbor & Stone Realty",
  address: "123 Harbor Lane",
  mls: "Built in 2022, this single-family home at 123 Harbor Lane offers 4 bedrooms, 3.5 bathrooms and 2,850 square feet on a 0.25-acre lot. Waterfront views frame the open living area, the renovated kitchen opens onto the pool terrace, and the primary suite includes a walk-in closet. Contact Avery Lane, Harbor & Stone Realty, at (555) 014-2290 to arrange a private showing.",
  instagram: "Waterfront mornings at 123 Harbor Lane. 4 bedrooms, 3.5 baths, 2,850 sq ft and a pool terrace, built in 2022. Message me to book a private showing.\n#HarborLane #WaterfrontHomes #JustListed",
  emailSubject: "Just listed: 123 Harbor Lane",
  email: "A 2022 waterfront home with 4 bedrooms, a pool and a renovated kitchen is now on the market. Reply to this email to schedule a private showing.",
  market: "Harbor District, September. From the figures in your report: 42 new listings and a median of 31 days on market. Thinking about a move? Let's review what these numbers mean for your home.",
  video: "0–3s · Aerial shot over the water toward the house. On screen: 123 Harbor Lane.\n3–10s · Kitchen to pool terrace. Voice-over: “Built in 2022, made for waterfront living.”\n10–15s · Agent to camera: “Message me to book a private showing.”",
};

const sampleAr = {
  agent: "أفيري لين",
  brokerage: "هاربر آند ستون العقارية",
  address: "123 هاربر لين",
  mls: "بُني هذا المنزل المستقل في 123 هاربر لين عام 2022، ويضم 4 غرف نوم و3.5 حمام على مساحة 2,850 قدمًا مربعًا، على قطعة أرض مساحتها 0.25 إيكر. تحيط الإطلالات المائية بمنطقة المعيشة المفتوحة، ويُفتح المطبخ المجدد على شرفة المسبح، ويضم الجناح الرئيسي خزانة ملابس واسعة. تواصل مع أفيري لين، هاربر آند ستون العقارية، على الرقم ‎(555) 014-2290 لترتيب معاينة خاصة.",
  instagram: "صباحات على الواجهة المائية في 123 هاربر لين. 4 غرف نوم و3.5 حمام و2,850 قدمًا مربعًا وشرفة مسبح، بُني عام 2022. راسلني لحجز معاينة خاصة.\n#هاربر_لين #منازل_على_الماء #معروض_حديثًا",
  emailSubject: "معروض حديثًا: 123 هاربر لين",
  email: "منزل على الواجهة المائية بُني عام 2022، يضم 4 غرف نوم ومسبحًا ومطبخًا مجددًا، أصبح الآن معروضًا للبيع. رُدّ على هذه الرسالة لتحديد موعد معاينة خاصة.",
  market: "حي هاربر، سبتمبر. من الأرقام الواردة في تقريرك: 42 إدراجًا جديدًا، ومتوسط 31 يومًا في السوق. تفكر في الانتقال؟ لنراجع ما تعنيه هذه الأرقام لمنزلك.",
  video: "0–3 ث · لقطة جوية فوق الماء باتجاه المنزل. على الشاشة: 123 هاربر لين.\n3–10 ث · من المطبخ إلى شرفة المسبح. تعليق صوتي: «بُني عام 2022 للحياة على الواجهة المائية».\n10–15 ث · الوكيل أمام الكاميرا: «راسلني لحجز معاينة خاصة».",
};

export const en = {
  lang: "en", dir: "ltr", path: "/", other: "/ar/", otherLabel: "العربية", otherAria: "View this page in Arabic",
  seoTitle: "MABS | AI-Powered Real Estate Marketing Tools",
  seoDesc: "Create property descriptions, social media content, email campaigns, and more with MABS, an AI-powered marketing toolkit built for real estate professionals.",
  skip: "Skip to content",
  brandSub: "Megmos AI Brand Studio",
  nav: { label: "Main", product: "Product", how: "How It Works", features: "Features", faq: "FAQ", contact: "Contact", login: "Log In", start: "Get Started", menu: "Menu", close: "Close menu" },

  hero: {
    eyebrow: "AI-powered real estate marketing",
    title: "Your Real Estate Brand. One Smarter Marketing System.",
    sub: "MABS helps real estate professionals create brand-aligned property descriptions, social content, email campaigns, and marketing materials with AI-powered tools designed for the way real estate works.",
    cta: "Get Started", cta2: "Explore the Platform",
    line: "Less time starting from scratch. More consistency across your marketing.",
    plan: "Free plan: 10 AI generations a month. No credit card required.",
  },

  app: {
    navItems: ["AI Content", "My Projects", "Content Library", "Brand Context"],
    workspace: "AI Content",
    sections: [
      ["Property", ["MLS Description", "Luxury Listing", "Listing Campaign"]],
      ["Social media", ["Instagram Caption", "Social Post", "Video Script"]],
      ["Email & leads", ["Email Marketing", "Client Follow-Up"]],
      ["Personal brand", ["Agent Bio", "Website Kit"]],
    ],
    outputTitle: "MLS Description",
    outputMeta: "123 Harbor Lane · English",
    copy: "Copy", save: "Save to Project", repurpose: "Repurpose as…",
    sampleTag: "Sample",
  },

  problem: {
    eyebrow: "The problem",
    title: "Your Real Estate Marketing Shouldn't Start From Scratch Every Time.",
    sub: "Every listing, social post, email, and market update creates another marketing task. Without a repeatable process, your messaging becomes inconsistent, content creation takes longer, and keeping everything aligned with your brand becomes difficult.",
    cards: [
      ["Inconsistent Branding", "Your marketing looks and sounds different from one piece of content to the next."],
      ["Too Much Repetitive Work", "Writing property descriptions, captions, and emails from scratch takes time away from other business priorities."],
      ["Disconnected Marketing", "Each piece of content is created independently instead of supporting a consistent marketing approach."],
      ["No Repeatable Process", "When every new listing or campaign requires a new starting point, marketing becomes harder to organize and maintain."],
    ],
  },

  solution: {
    eyebrow: "The MABS solution",
    title: "One Brand System. Endless Marketing Possibilities.",
    sub: "MABS brings AI-powered content creation and real estate marketing workflows into one focused workspace, helping you create content around your brand, your business, and your properties.",
    pillars: [
      ["Create With Purpose", "Generate marketing content for real estate activities using specialized tools designed for specific content types and objectives."],
      ["Stay Brand-Aligned", "Your Brand Context (name, brokerage, voice, service areas and contact details) guides every generator, so your content keeps one consistent voice."],
      ["Build a Repeatable Workflow", "Enter a property's facts once in a project, then create the listing, the posts and the emails from the same details."],
    ],
  },

  features: {
    eyebrow: "Features",
    title: "Everything Starts With What You Need to Create.",
    sub: "Choose the marketing task, provide the relevant details, and use AI to develop content tailored to your real estate business.",
    cards: [
      { icon: "home", name: "Property Description Generator", desc: "Create an MLS-ready listing description from the property details and your brand voice.", preview: "mls" },
      { icon: "gem", name: "Luxury Listing Description Generator", desc: "Develop polished property descriptions with a more refined tone suited to luxury real estate marketing, without invented features.", preview: "luxury" },
      { icon: "chat", name: "Social Media Content Generator", desc: "Create Instagram captions and Facebook, LinkedIn and X posts for listings, announcements and audience engagement.", preview: "social" },
      { icon: "mail", name: "Email Marketing Generator", desc: "Draft professional marketing emails for announcements, invitations and newsletters.", preview: "email" },
      { icon: "chart", name: "Market Update Content", desc: "Turn the market figures and local insights you supply into organized, audience-specific content. MABS never invents statistics.", preview: "market" },
      { icon: "film", name: "Video and Blog Content", desc: "Develop timed video scripts for reels and longer SEO blog posts, ready to repurpose into other formats.", preview: "video" },
      { icon: "browser", name: "Website Pages and Website Kit", desc: "Write your homepage, about, services, community, property, contact and FAQ pages, then copy them from one place with SEO titles and descriptions.", preview: "web" },
      { icon: "globe", name: "English and Arabic", desc: "Generate any content in English or Arabic, with right-to-left layouts handled properly.", preview: "lang" },
    ],
    previews: {
      luxury: "Set on the water’s edge, 123 Harbor Lane pairs open living spaces with uninterrupted views…",
      social: ["Instagram", "Facebook", "LinkedIn", "X"],
      market: [["New listings", "42"], ["Median days on market", "31"]],
      marketNote: "Your figures",
      videoLines: ["0–3s · Aerial shot", "3–10s · Kitchen to terrace", "10–15s · Call to action"],
      web: ["Homepage", "About", "Services", "Community", "Property", "Contact", "FAQ"],
      langEn: "English", langAr: "العربية",
    },
    note: "MABS creates content for you to review and use. It does not publish to your social accounts or other platforms.",
  },

  how: {
    eyebrow: "How it works",
    title: "From Marketing Idea to Ready-to-Use Content.",
    steps: [
      ["Choose Your Tool", "Select the generator for your objective, such as promoting a listing, writing a social caption, or preparing an email."],
      ["Add Your Details", "Provide the property information, audience, tone, platform and other requested inputs. Your Brand Context fills in your business details."],
      ["Generate and Refine", "Review the generated content, make adjustments where necessary, and use it in your marketing workflow."],
    ],
    cta: "See the product",
  },

  demo: {
    eyebrow: "Product",
    title: "See Your Marketing Workflow in Action.",
    sub: "A walk through the MABS workspace, from choosing a generator to reviewing the result.",
    tabs: ["1. Choose a generator", "2. Complete the form", "3. Review the content"],
    tabsLabel: "Workflow steps",
    annotations: [
      ["Generators grouped by task", "Property, social media, email and personal brand: pick the content you need."],
      ["Project facts and Brand Context", "Property details come from your project. Your name, brokerage and contact details come from your Brand Context."],
      ["Ready to review", "Copy it, save it to the project, or repurpose it as a post, an email or a video script."],
    ],
    form: {
      title: "MLS Description Generator",
      project: ["Project", "123 Harbor Lane"],
      fields: [["Property type", "Single-family"], ["Bedrooms", "4"], ["Bathrooms", "3.5"], ["Square feet", "2,850"], ["Year built", "2022"], ["Lot size", "0.25 acre"]],
      features: ["Key features", "Waterfront views, pool terrace, renovated kitchen, walk-in closet"],
      tone: ["Tone", "Warm and professional"],
      language: ["Output language", "English"],
      brand: ["Agent", "Avery Lane · Harbor & Stone Realty"],
      brandBadge: "from Brand Context",
      button: "Generate MLS Description",
    },
    cta: "Explore MABS",
    disclaimer: "Interface preview with a sample brand and property. Wording may differ slightly in the app.",
  },

  brand: {
    eyebrow: "Brand consistency",
    title: "Your Brand Should Be Recognizable Everywhere.",
    sub: "Your brand is more than a logo. It's the voice, presentation, and consistency behind every interaction with your audience.",
    caption: "One sample property, five pieces of content, one voice. All written by MABS from the same project facts and Brand Context.",
    labels: { mls: "Listing description", social: "Instagram post", email: "Email campaign", market: "Market update", video: "Video script", subject: "Subject" },
    sample: sampleEn,
    sampleTag: "Sample brand",
  },

  who: {
    eyebrow: "Who MABS is for",
    title: "Built for the Business Behind Every Property.",
    cards: [
      ["Independent Agents", "Create professional marketing content without needing to build every asset from scratch."],
      ["Luxury Real Estate Professionals", "Maintain a polished, sophisticated communication style across listings and marketing channels."],
      ["Real Estate Teams", "Develop a more consistent approach to creating content across properties and campaigns."],
      ["Brokerages", "Explore a more organized approach to supporting agent marketing and brand consistency."],
    ],
  },

  philosophy: {
    eyebrow: "The MABS philosophy",
    title: "Stop Creating From Scratch. Start Marketing With a System.",
    sub: "Effective real estate marketing is not just about producing more content. It's about having a repeatable process that helps every piece of content serve a purpose and fit within a consistent brand.",
    principles: [
      ["Strategy before random activity", "Every generator starts from an objective, not a blank page."],
      ["Consistency before disconnected content", "One Brand Context and one set of property facts behind everything you create."],
      ["Systems that support sustainable marketing", "A process you can repeat for every listing and every campaign."],
      ["Facts stay facts", "Numbers are copied exactly as you enter them. No invented features, prices or statistics."],
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      ["What is MABS?", "MABS, or Megmos AI Brand Studio, is an AI-powered marketing and growth toolkit designed for real estate professionals. It provides specialized generators for property descriptions, social media content, emails, market updates, video scripts, blog posts, website pages and more."],
      ["Who can use MABS?", "Independent real estate agents, luxury agents, real estate teams, and brokers looking for a more structured approach to marketing content creation."],
      ["What can I create with MABS?", "Property and luxury listing descriptions, listing campaigns, flyer copy, Instagram captions, social posts, video scripts, market updates, neighborhood guides, blog posts, marketing emails, client follow-ups, lead nurture sequences, listing presentations, an agent bio and your website pages. Some generators are part of paid plans."],
      ["How does MABS work?", "Set up your Brand Context once. Choose a generator, provide the requested information, and generate content that you can review, edit and adapt to your marketing needs."],
      ["Do I need technical experience?", "No. MABS is form-based: you fill in the fields a generator asks for and click Generate. There is nothing to install."],
      ["Does MABS automatically publish content to my social media accounts?", "No. MABS creates the content; you review it and publish it wherever you choose. It does not connect to or post on your social accounts."],
      ["Does MABS invent property details?", "No. Generators use only the facts you provide, and numbers are copied exactly as you enter them. If a detail is missing, it is left out rather than made up."],
      ["Can I use MABS for luxury real estate?", "Yes. MABS includes a Luxury Listing Description generator for a more refined tone, still built only from your property facts."],
      ["Which languages does MABS support?", "English and Arabic, for both the interface and the content you generate."],
      ["How can I get started?", "Create a free account. The free plan includes 10 AI generations a month and the Starter generators, with no credit card required. Paid plans with more generators and higher limits are coming soon."],
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Talk to Us",
    sub: "Questions about MABS, a demo for your team, or a partnership? Email us, or use the contact form.",
    cards: [
      { icon: "mail", title: "General and support", desc: "Product questions, help with your account, or working with your brokerage.", email: "support@megmos.com" },
      { icon: "check", title: "Privacy", desc: "Data requests, such as access, export or deletion, and privacy questions.", email: "privacy@megmos.com" },
    ],
    member: "Already using MABS? You can also send a message from Support inside the app.",
    memberLink: "Open Support",
  },
  final: {
    title: "Make Every Piece of Your Marketing Work Together.",
    sub: "Bring more structure to your real estate marketing with AI-powered tools built around the way you work.",
    cta: "Get Started With MABS", cta2: "Explore the Platform",
    plan: "Free plan: 10 AI generations a month. No credit card required.",
  },

  footer: {
    desc: "AI-powered marketing tools for real estate professionals who want a stronger brand and a more consistent marketing process.",
    navTitle: "Product", accountTitle: "Account", companyTitle: "Company",
    support: "Support", company: "Megmos Creative Co.",
    navLabel: "Footer",
  },
};

export const ar = {
  lang: "ar", dir: "rtl", path: "/ar/", other: "/", otherLabel: "English", otherAria: "عرض هذه الصفحة بالإنجليزية",
  seoTitle: "MABS | أدوات تسويق عقاري بالذكاء الاصطناعي",
  seoDesc: "أنشئ أوصاف العقارات ومحتوى التواصل الاجتماعي وحملات البريد الإلكتروني وأكثر مع MABS، مجموعة أدوات تسويق بالذكاء الاصطناعي مصممة لمحترفي العقارات.",
  skip: "انتقل إلى المحتوى",
  brandSub: "Megmos AI Brand Studio",
  nav: { label: "القائمة الرئيسية", product: "المنتج", how: "كيف يعمل", features: "المزايا", faq: "الأسئلة الشائعة", contact: "تواصل معنا", login: "تسجيل الدخول", start: "ابدأ الآن", menu: "القائمة", close: "إغلاق القائمة" },

  hero: {
    eyebrow: "تسويق عقاري بالذكاء الاصطناعي",
    title: "علامتك العقارية. نظام تسويق واحد أذكى.",
    sub: "يساعد MABS محترفي العقارات على إنشاء أوصاف عقارات ومحتوى للتواصل الاجتماعي وحملات بريد إلكتروني ومواد تسويقية متوافقة مع هويتهم، بأدوات ذكاء اصطناعي مصممة لطريقة عمل القطاع العقاري.",
    cta: "ابدأ الآن", cta2: "استكشف المنصة",
    line: "وقت أقل في البدء من الصفر. واتساق أكبر في كل تسويقك.",
    plan: "الباقة المجانية: 10 عمليات إنشاء شهريًا. لا حاجة لبطاقة ائتمان.",
  },

  app: {
    navItems: ["المحتوى بالذكاء الاصطناعي", "مشاريعي", "مكتبة المحتوى", "سياق العلامة"],
    workspace: "المحتوى بالذكاء الاصطناعي",
    sections: [
      ["العقارات", ["وصف MLS", "إدراج فاخر", "حملة الإدراج"]],
      ["التواصل الاجتماعي", ["تعليق Instagram", "منشور اجتماعي", "نص فيديو"]],
      ["البريد والعملاء", ["التسويق بالبريد", "متابعة العملاء"]],
      ["العلامة الشخصية", ["نبذة الوكيل", "حزمة الموقع"]],
    ],
    outputTitle: "وصف MLS",
    outputMeta: "123 هاربر لين · العربية",
    copy: "نسخ", save: "حفظ في المشروع", repurpose: "إعادة الاستخدام كـ…",
    sampleTag: "مثال",
  },

  problem: {
    eyebrow: "المشكلة",
    title: "لا ينبغي أن يبدأ تسويقك العقاري من الصفر في كل مرة.",
    sub: "كل إدراج ومنشور ورسالة بريد وتحديث للسوق يضيف مهمة تسويقية جديدة. ومن دون عملية قابلة للتكرار، تصبح رسائلك غير متسقة، ويستغرق إنشاء المحتوى وقتًا أطول، ويصعب الحفاظ على توافق كل شيء مع علامتك.",
    cards: [
      ["هوية غير متسقة", "يبدو تسويقك ويُقرأ بشكل مختلف من محتوى إلى آخر."],
      ["عمل متكرر أكثر من اللازم", "كتابة أوصاف العقارات والتعليقات ورسائل البريد من الصفر تأخذ وقتًا من أولويات عملك الأخرى."],
      ["تسويق غير مترابط", "يُنشأ كل محتوى بمعزل عن غيره بدلًا من أن يخدم نهجًا تسويقيًا متسقًا."],
      ["لا توجد عملية قابلة للتكرار", "عندما يتطلب كل إدراج أو حملة جديدة نقطة بداية جديدة، يصبح تنظيم التسويق والحفاظ عليه أصعب."],
    ],
  },

  solution: {
    eyebrow: "الحل مع MABS",
    title: "نظام علامة واحد. إمكانات تسويقية لا حدود لها.",
    sub: "يجمع MABS إنشاء المحتوى بالذكاء الاصطناعي وسير عمل التسويق العقاري في مساحة عمل واحدة مركّزة، تساعدك على إنشاء المحتوى حول علامتك وعملك وعقاراتك.",
    pillars: [
      ["أنشئ بهدف", "أنشئ محتوى تسويقيًا لأنشطة العقارات بأدوات متخصصة مصممة لأنواع محتوى وأهداف محددة."],
      ["حافظ على هويتك", "يوجّه سياق علامتك (الاسم والوكالة والأسلوب ومناطق العمل وبيانات التواصل) كل مولّد، فيحافظ محتواك على صوت واحد متسق."],
      ["ابنِ سير عمل قابلًا للتكرار", "أدخل بيانات العقار مرة واحدة في مشروع، ثم أنشئ الإدراج والمنشورات ورسائل البريد من البيانات نفسها."],
    ],
  },

  features: {
    eyebrow: "المزايا",
    title: "كل شيء يبدأ بما تحتاج إلى إنشائه.",
    sub: "اختر المهمة التسويقية، وأدخل التفاصيل المطلوبة، ودع الذكاء الاصطناعي يطوّر محتوى مخصصًا لعملك العقاري.",
    cards: [
      { icon: "home", name: "مولّد أوصاف العقارات", desc: "أنشئ وصف إدراج جاهزًا لـ MLS من بيانات العقار وأسلوب علامتك.", preview: "mls" },
      { icon: "gem", name: "مولّد أوصاف الإدراجات الفاخرة", desc: "اكتب أوصافًا راقية بأسلوب يناسب تسويق العقارات الفاخرة، دون مزايا مختلقة.", preview: "luxury" },
      { icon: "chat", name: "مولّد محتوى التواصل الاجتماعي", desc: "أنشئ تعليقات Instagram ومنشورات Facebook وLinkedIn وX للإدراجات والإعلانات والتفاعل مع جمهورك.", preview: "social" },
      { icon: "mail", name: "مولّد التسويق بالبريد الإلكتروني", desc: "اكتب رسائل تسويقية احترافية للإعلانات والدعوات والنشرات الإخبارية.", preview: "email" },
      { icon: "chart", name: "محتوى تحديثات السوق", desc: "حوّل أرقام السوق والمعلومات المحلية التي تقدّمها إلى محتوى منظم يناسب جمهورك. لا يختلق MABS أي إحصاءات.", preview: "market" },
      { icon: "film", name: "محتوى الفيديو والمدونة", desc: "اكتب نصوص فيديو موقّتة للمقاطع القصيرة ومقالات مدونة أطول محسّنة لمحركات البحث، جاهزة لإعادة الاستخدام.", preview: "video" },
      { icon: "browser", name: "صفحات الموقع وحزمة الموقع", desc: "اكتب صفحات الرئيسية ومن نحن والخدمات والمجتمع والعقار والتواصل والأسئلة الشائعة، وانسخها من مكان واحد مع العناوين والأوصاف التعريفية.", preview: "web" },
      { icon: "globe", name: "العربية والإنجليزية", desc: "أنشئ أي محتوى بالعربية أو الإنجليزية، مع تخطيط صحيح من اليمين إلى اليسار.", preview: "lang" },
    ],
    previews: {
      luxury: "على حافة الماء، يجمع 123 هاربر لين بين مساحات معيشة مفتوحة وإطلالات لا تنقطع…",
      social: ["Instagram", "Facebook", "LinkedIn", "X"],
      market: [["إدراجات جديدة", "42"], ["متوسط الأيام في السوق", "31"]],
      marketNote: "أرقامك",
      videoLines: ["0–3 ث · لقطة جوية", "3–10 ث · من المطبخ إلى الشرفة", "10–15 ث · دعوة لاتخاذ إجراء"],
      web: ["الرئيسية", "من نحن", "الخدمات", "المجتمع", "العقار", "التواصل", "الأسئلة الشائعة"],
      langEn: "English", langAr: "العربية",
    },
    note: "ينشئ MABS المحتوى لتراجعه وتستخدمه بنفسك. لا ينشر على حساباتك في وسائل التواصل أو أي منصة أخرى.",
  },

  how: {
    eyebrow: "كيف يعمل",
    title: "من فكرة تسويقية إلى محتوى جاهز للاستخدام.",
    steps: [
      ["اختر أداتك", "اختر المولّد المناسب لهدفك، مثل الترويج لإدراج أو كتابة تعليق أو إعداد رسالة بريد."],
      ["أضف التفاصيل", "أدخل بيانات العقار والجمهور والأسلوب والمنصة وغيرها مما يُطلب. ويملأ سياق علامتك بيانات عملك تلقائيًا."],
      ["أنشئ وحسّن", "راجع المحتوى الناتج، وعدّله عند الحاجة، واستخدمه في سير عملك التسويقي."],
    ],
    cta: "شاهد المنتج",
  },

  demo: {
    eyebrow: "المنتج",
    title: "شاهد سير عملك التسويقي على أرض الواقع.",
    sub: "جولة في مساحة عمل MABS، من اختيار المولّد إلى مراجعة النتيجة.",
    tabs: ["1. اختر مولّدًا", "2. أكمل النموذج", "3. راجع المحتوى"],
    tabsLabel: "خطوات سير العمل",
    annotations: [
      ["مولّدات مرتبة حسب المهمة", "العقارات والتواصل الاجتماعي والبريد والعلامة الشخصية: اختر المحتوى الذي تحتاجه."],
      ["بيانات المشروع وسياق العلامة", "تأتي بيانات العقار من مشروعك، ويأتي اسمك ووكالتك وبيانات تواصلك من سياق علامتك."],
      ["جاهز للمراجعة", "انسخه، أو احفظه في المشروع، أو أعد استخدامه كمنشور أو رسالة بريد أو نص فيديو."],
    ],
    form: {
      title: "مولّد وصف MLS",
      project: ["المشروع", "123 هاربر لين"],
      fields: [["نوع العقار", "منزل مستقل"], ["غرف النوم", "4"], ["الحمامات", "3.5"], ["المساحة (قدم مربع)", "2,850"], ["سنة البناء", "2022"], ["مساحة الأرض", "0.25 إيكر"]],
      features: ["أبرز المزايا", "إطلالات مائية، شرفة مسبح، مطبخ مجدد، خزانة ملابس واسعة"],
      tone: ["الأسلوب", "ودّي ومهني"],
      language: ["لغة المحتوى", "العربية"],
      brand: ["الوكيل", "أفيري لين · هاربر آند ستون العقارية"],
      brandBadge: "من سياق العلامة",
      button: "إنشاء وصف MLS",
    },
    cta: "استكشف MABS",
    disclaimer: "معاينة للواجهة بعلامة وعقار على سبيل المثال. قد تختلف الصياغة قليلًا داخل التطبيق.",
  },

  brand: {
    eyebrow: "اتساق العلامة",
    title: "يجب أن تكون علامتك مميزة في كل مكان.",
    sub: "علامتك أكثر من مجرد شعار. إنها الصوت والأسلوب والاتساق وراء كل تواصل مع جمهورك.",
    caption: "عقار واحد على سبيل المثال، وخمسة أنواع من المحتوى، وصوت واحد. كتبها MABS كلها من بيانات المشروع وسياق العلامة نفسها.",
    labels: { mls: "وصف الإدراج", social: "منشور Instagram", email: "حملة بريد إلكتروني", market: "تحديث السوق", video: "نص فيديو", subject: "الموضوع" },
    sample: sampleAr,
    sampleTag: "علامة على سبيل المثال",
  },

  who: {
    eyebrow: "لمن صُمّم MABS",
    title: "مصمَّم للعمل الذي يقف وراء كل عقار.",
    cards: [
      ["الوكلاء المستقلون", "أنشئ محتوى تسويقيًا احترافيًا دون الحاجة إلى بناء كل مادة من الصفر."],
      ["محترفو العقارات الفاخرة", "حافظ على أسلوب تواصل راقٍ ومتقن في جميع إدراجاتك وقنواتك التسويقية."],
      ["فرق العقارات", "طوّر نهجًا أكثر اتساقًا لإنشاء المحتوى عبر العقارات والحملات."],
      ["الوساطات العقارية", "استكشف نهجًا أكثر تنظيمًا لدعم تسويق الوكلاء واتساق العلامة."],
    ],
  },

  philosophy: {
    eyebrow: "فلسفة MABS",
    title: "توقّف عن الإنشاء من الصفر. وابدأ التسويق بنظام.",
    sub: "التسويق العقاري الفعّال لا يعني إنتاج محتوى أكثر فحسب، بل امتلاك عملية قابلة للتكرار تجعل كل محتوى يخدم هدفًا وينسجم مع علامة متسقة.",
    principles: [
      ["الاستراتيجية قبل النشاط العشوائي", "كل مولّد يبدأ من هدف، لا من صفحة فارغة."],
      ["الاتساق قبل المحتوى المتفرق", "سياق علامة واحد ومجموعة واحدة من بيانات العقار وراء كل ما تنشئه."],
      ["أنظمة تدعم تسويقًا مستدامًا", "عملية يمكنك تكرارها مع كل إدراج وكل حملة."],
      ["الوقائع تبقى وقائع", "تُنقل الأرقام كما أدخلتها تمامًا. لا مزايا أو أسعار أو إحصاءات مختلقة."],
    ],
  },

  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "الأسئلة الشائعة",
    items: [
      ["ما هو MABS؟", "MABS، أو Megmos AI Brand Studio، مجموعة أدوات تسويق ونمو بالذكاء الاصطناعي مصممة لمحترفي العقارات. يوفر مولّدات متخصصة لأوصاف العقارات ومحتوى التواصل الاجتماعي ورسائل البريد وتحديثات السوق ونصوص الفيديو ومقالات المدونة وصفحات المواقع وغيرها."],
      ["من يمكنه استخدام MABS؟", "وكلاء العقارات المستقلون، ووكلاء العقارات الفاخرة، وفرق العقارات، والوسطاء الذين يبحثون عن نهج أكثر تنظيمًا لإنشاء المحتوى التسويقي."],
      ["ماذا يمكنني أن أنشئ مع MABS؟", "أوصاف العقارات والإدراجات الفاخرة، وحملات الإدراج، ونصوص النشرات، وتعليقات Instagram، والمنشورات الاجتماعية، ونصوص الفيديو، وتحديثات السوق، وأدلة الأحياء، ومقالات المدونة، ورسائل التسويق، ومتابعة العملاء، وسلاسل رعاية العملاء المحتملين، وعروض الإدراج، ونبذة الوكيل، وصفحات موقعك. بعض المولّدات ضمن الباقات المدفوعة."],
      ["كيف يعمل MABS؟", "جهّز سياق علامتك مرة واحدة. اختر مولّدًا، وأدخل المعلومات المطلوبة، وأنشئ محتوى يمكنك مراجعته وتعديله وتكييفه مع احتياجاتك التسويقية."],
      ["هل أحتاج إلى خبرة تقنية؟", "لا. يعتمد MABS على النماذج: تملأ الحقول التي يطلبها المولّد ثم تنقر «إنشاء». لا شيء يحتاج إلى تثبيت."],
      ["هل ينشر MABS المحتوى تلقائيًا على حساباتي في وسائل التواصل؟", "لا. ينشئ MABS المحتوى، وأنت تراجعه وتنشره حيث تشاء. لا يتصل بحساباتك في وسائل التواصل ولا ينشر عليها."],
      ["هل يختلق MABS تفاصيل عن العقار؟", "لا. تستخدم المولّدات الوقائع التي تقدّمها فقط، وتُنقل الأرقام كما أدخلتها تمامًا. وإذا غابت معلومة، تُترك بدلًا من اختلاقها."],
      ["هل يمكنني استخدام MABS للعقارات الفاخرة؟", "نعم. يتضمن MABS مولّدًا لأوصاف الإدراجات الفاخرة بأسلوب أكثر رقيًا، مبنيًا على بيانات عقارك فقط."],
      ["ما اللغات التي يدعمها MABS؟", "العربية والإنجليزية، للواجهة وللمحتوى الذي تنشئه."],
      ["كيف أبدأ؟", "أنشئ حسابًا مجانيًا. تتضمن الباقة المجانية 10 عمليات إنشاء شهريًا ومولّدات Starter، دون الحاجة إلى بطاقة ائتمان. والباقات المدفوعة بمولّدات أكثر وحدود أعلى قادمة قريبًا."],
    ],
  },

  contact: {
    eyebrow: "تواصل معنا",
    title: "تحدّث إلينا",
    sub: "لديك أسئلة عن MABS، أو تريد عرضًا لفريقك، أو شراكة؟ راسلنا بالبريد الإلكتروني أو استخدم نموذج التواصل.",
    cards: [
      { icon: "mail", title: "الاستفسارات العامة والدعم", desc: "أسئلة عن المنتج، أو مساعدة في حسابك، أو العمل مع وكالتك.", email: "support@megmos.com" },
      { icon: "check", title: "الخصوصية", desc: "طلبات البيانات مثل الاطلاع أو التصدير أو الحذف، وأسئلة الخصوصية.", email: "privacy@megmos.com" },
    ],
    member: "تستخدم MABS بالفعل؟ يمكنك أيضًا إرسال رسالة من صفحة الدعم داخل التطبيق.",
    memberLink: "افتح صفحة الدعم",
  },
  final: {
    title: "اجعل كل جزء من تسويقك يعمل معًا.",
    sub: "أضف مزيدًا من التنظيم إلى تسويقك العقاري بأدوات ذكاء اصطناعي مبنية حول طريقة عملك.",
    cta: "ابدأ مع MABS", cta2: "استكشف المنصة",
    plan: "الباقة المجانية: 10 عمليات إنشاء شهريًا. لا حاجة لبطاقة ائتمان.",
  },

  footer: {
    desc: "أدوات تسويق بالذكاء الاصطناعي لمحترفي العقارات الذين يريدون علامة أقوى وعملية تسويق أكثر اتساقًا.",
    navTitle: "المنتج", accountTitle: "الحساب", companyTitle: "الشركة",
    support: "الدعم", company: "Megmos Creative Co.",
    navLabel: "تذييل الصفحة",
  },
};
