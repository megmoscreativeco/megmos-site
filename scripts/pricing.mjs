// megmos.com/pricing (EN) and /ar/pricing (AR).
// Prices must match MABS: mabs/lib/pricing.ts (decided 2026-11-04). Change both together.

export const PLANS = [
  { key: "starter", monthly: 0, yearlyMonthly: null, gens: "10", credits: 0, contact: false },
  { key: "professional", monthly: 49, yearlyMonthly: 39, gens: "200", credits: 4, contact: false, popular: true },
  { key: "elite", monthly: 99, yearlyMonthly: 79, gens: "1,000", credits: 40, contact: false },
  { key: "brokerage", monthly: 249, yearlyMonthly: null, gens: null, credits: 150, contact: true },
];
export const TOPUP = { credits: 10, price: 9 };
export const FOUNDING = { professional: 29, elite: 59, months: 12 };

export const pricing = {
  en: {
    seoTitle: "MABS Pricing | AI Real Estate Marketing Plans from $0",
    desc: "MABS plans for real estate agents: Starter free, Professional $49/month, Elite $99/month, Brokerage from $249/month. Yearly billing saves 20%.",
    eyebrow: "Pricing",
    title: "Simple plans for real estate marketing.",
    lead: "Start free. Upgrade when you need the studios, more AI generations and video.",
    names: { starter: "Starter", professional: "Professional", elite: "Elite", brokerage: "Brokerage" },
    tags: { starter: "Try MABS and write everyday listing content.", professional: "The full studio for an active agent.", elite: "For agents who market with video.", brokerage: "For teams and offices." },
    per: "/ month", from: "From", free: "Free, no card needed", yearly: (m, y) => `or $${m}/month billed yearly ($${y} a year)`, monthlyOnly: "Billed monthly", contactPrice: "Price agreed with each office",
    popular: "Most popular",
    features: {
      starter: ["Starter generators: listing descriptions, captions, emails and more", "10 AI generations a month", "English and Arabic"],
      professional: ["Everything in Starter", "All Professional generators, including website pages and the Website Kit", "Design Studio, Brand Kit and Image Studio", "200 AI generations a month", "4 video credits a month (one 60-second video)"],
      elite: ["Everything in Professional", "Video Studio with voice-over", "1,000 AI generations a month", "40 video credits a month (about 10 minutes of video)"],
      brokerage: ["Everything in Elite", "Unlimited AI generations", "150 video credits a month", "For teams and offices"],
    },
    cta: { starter: "Start free", paid: "Get started", contact: "Contact us" },
    extrasTitle: "Video top-ups and founding members",
    topup: `Video top-up: ${TOPUP.credits} credits for $${TOPUP.price}. Top-up credits don't expire at the end of the month. One credit is 15 seconds of video.`,
    founding: `Founding members: agents invited to the MABS pilot can keep Professional at $${FOUNDING.professional} or Elite at $${FOUNDING.elite} a month for their first ${FOUNDING.months} months.`,
    note: "Online payment opens soon. Prices are in US dollars; taxes may apply.",
    faqTitle: "Questions about pricing",
    faq: [
      ["Is there a free plan?", "Yes. Starter is free with no credit card: the Starter generators and 10 AI generations a month, in English and Arabic."],
      ["What counts as an AI generation?", "Each time you create content with a generator, including Regenerate. Editing, copying and downloading don't count. The count starts again on the 1st of each month."],
      ["How do video credits work?", "One credit pays for up to 15 seconds of video, so a 60-second video uses 4 credits. If a video fails to render, its credits come back. Professional includes 4 credits a month and Elite 40."],
      ["How much do I save with yearly billing?", "20%. Professional is $468 a year instead of $588, and Elite is $948 a year instead of $1,188."],
      ["What is the Brokerage plan?", "For teams and offices that need more volume: everything in Elite, unlimited AI generations and 150 video credits a month. The price is agreed with each office, from $249 a month."],
      ["Does every plan work in Arabic?", "Yes. Every plan, including Starter, works in English and Arabic, for both the app and the content you create."],
    ],
    finalTitle: "Start with the free plan today.",
    finalSub: "Set up your brand once and create your first listing description in minutes.",
    navLabel: "Pricing",
  },
  ar: {
    seoTitle: "أسعار MABS | باقات التسويق العقاري بالذكاء الاصطناعي تبدأ من 0$",
    desc: "باقات MABS للوكلاء العقاريين: البداية مجانية، الاحترافية 49$ شهريًا، النخبة 99$ شهريًا، وشركات الوساطة تبدأ من 249$ شهريًا. وفّر 20% بالدفع السنوي.",
    eyebrow: "الأسعار",
    title: "باقات بسيطة للتسويق العقاري.",
    lead: "ابدأ مجانًا، ثم رقِّ باقتك عندما تحتاج إلى الاستوديوهات ومزيد من عمليات التوليد والفيديو.",
    names: { starter: "البداية", professional: "الاحترافية", elite: "النخبة", brokerage: "شركات الوساطة" },
    tags: { starter: "جرّب MABS واكتب محتوى العقارات اليومي.", professional: "الاستوديو الكامل للوكيل النشط.", elite: "للوكلاء الذين يسوّقون بالفيديو.", brokerage: "للفرق والمكاتب." },
    per: "/ شهريًا", from: "تبدأ من", free: "مجانية، دون بطاقة", yearly: (m, y) => `أو ${m}$ شهريًا عند الدفع السنوي (${y}$ في السنة)`, monthlyOnly: "تُدفع شهريًا", contactPrice: "سعر يُتفق عليه مع كل مكتب",
    popular: "الأكثر اختيارًا",
    features: {
      starter: ["مولّدات البداية: أوصاف العقارات والتعليقات والرسائل وغيرها", "10 عمليات توليد بالذكاء الاصطناعي شهريًا", "العربية والإنجليزية"],
      professional: ["كل ما في باقة البداية", "جميع المولّدات الاحترافية، ومنها صفحات الموقع وحزمة الموقع", "استوديو التصميم وطقم العلامة واستوديو الصور", "200 عملية توليد بالذكاء الاصطناعي شهريًا", "4 أرصدة فيديو شهريًا (فيديو واحد مدته 60 ثانية)"],
      elite: ["كل ما في الباقة الاحترافية", "استوديو الفيديو مع التعليق الصوتي", "1,000 عملية توليد بالذكاء الاصطناعي شهريًا", "40 رصيد فيديو شهريًا (نحو 10 دقائق من الفيديو)"],
      brokerage: ["كل ما في باقة النخبة", "عمليات توليد غير محدودة", "150 رصيد فيديو شهريًا", "للفرق والمكاتب"],
    },
    cta: { starter: "ابدأ مجانًا", paid: "ابدأ الآن", contact: "تواصل معنا" },
    extrasTitle: "رصيد الفيديو الإضافي والأعضاء المؤسسون",
    topup: `رصيد فيديو إضافي: ${TOPUP.credits} أرصدة مقابل ${TOPUP.price}$. لا تنتهي الأرصدة الإضافية بنهاية الشهر. الرصيد الواحد يساوي 15 ثانية من الفيديو.`,
    founding: `الأعضاء المؤسسون: يمكن للوكلاء المدعوّين إلى التجربة الأولى لـ MABS الاحتفاظ بالباقة الاحترافية مقابل ${FOUNDING.professional}$ أو بباقة النخبة مقابل ${FOUNDING.elite}$ شهريًا خلال أول ${FOUNDING.months} شهرًا.`,
    note: "الدفع الإلكتروني متاح قريبًا. الأسعار بالدولار الأمريكي وقد تُضاف الضرائب.",
    faqTitle: "أسئلة حول الأسعار",
    faq: [
      ["هل توجد باقة مجانية؟", "نعم. باقة البداية مجانية دون بطاقة: مولّدات البداية و10 عمليات توليد شهريًا، بالعربية والإنجليزية."],
      ["ما الذي يُحتسب عملية توليد؟", "كل مرة تنشئ فيها محتوى بأحد المولّدات، ويشمل ذلك «إعادة التوليد». أما التعديل والنسخ والتنزيل فلا تُحتسب. يبدأ العدّ من جديد في اليوم الأول من كل شهر."],
      ["كيف تعمل أرصدة الفيديو؟", "الرصيد الواحد يغطي حتى 15 ثانية من الفيديو، فيستهلك فيديو مدته 60 ثانية 4 أرصدة. إذا تعذّر إنشاء الفيديو تعود أرصدته. تشمل الاحترافية 4 أرصدة شهريًا والنخبة 40."],
      ["كم أوفّر بالدفع السنوي؟", "20%. الباقة الاحترافية 468$ في السنة بدلًا من 588$، وباقة النخبة 948$ في السنة بدلًا من 1,188$."],
      ["ما هي باقة شركات الوساطة؟", "للفرق والمكاتب التي تحتاج إلى حجم أكبر: كل ما في باقة النخبة، وعمليات توليد غير محدودة، و150 رصيد فيديو شهريًا. يُتفق على السعر مع كل مكتب بدءًا من 249$ شهريًا."],
      ["هل تعمل كل الباقات بالعربية؟", "نعم. كل الباقات، بما فيها باقة البداية، تعمل بالعربية والإنجليزية، في التطبيق وفي المحتوى الذي تنشئه."],
    ],
    finalTitle: "ابدأ بالباقة المجانية اليوم.",
    finalSub: "أعدّ علامتك مرة واحدة وأنشئ أول وصف لعقارك في دقائق.",
    navLabel: "الأسعار",
  },
};
