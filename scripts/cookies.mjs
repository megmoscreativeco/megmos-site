// megmos.com/cookies (EN) and /ar/cookies (AR): Cookie Policy.
// Source: Megmos's Cookie Policy draft (2026-11-13), filled in with the cookies and
// storage MABS and megmos.com actually set. Pending lawyer review.
// If you add a cookie, analytics or ads, update this table and add a consent tool first.

import { ENTITY, URLS, LEGAL_UPDATED, CO_AR, contactEn, contactAr } from "./legal-common.mjs";

export const cookiesEn = {
  slug: "cookies", title: "Cookie Policy",
  desc: "The cookies and similar technologies used on megmos.com and in MABS, what each one does, how long it lasts, and how to manage your choices.",
  blocks: [
    ["p", `**Effective date:** ${LEGAL_UPDATED.en}`],
    ["p", `This Cookie Policy explains how **${ENTITY}, trading as Megmos Creative Co.** ("Company," "Megmos," "we," "us," or "our") uses cookies and similar technologies on **megmos.com** and in **MABS (Megmos AI Brand Studio)** at mabs.megmos.com.`],
    ["p", `Read it together with our **Terms of Use** (${URLS.terms.en}) and **Privacy Policy** (${URLS.privacy.en}).`],
    ["p", "**In short:** we use only what the Service needs to work and to remember your language. **We do not use analytics, advertising or marketing cookies.** If that changes, we will update this policy and ask for your consent first where the law requires it."],

    ["h2", "1. What are cookies?"],
    ["p", "Cookies are small text files a website stores on your computer, phone or other device. They let a site recognize your browser, keep you signed in and remember your choices."],
    ["ul", [
      "**Session cookies** are deleted when you close your browser.",
      "**Persistent cookies** stay for a set period or until you delete them.",
      "**First-party cookies** are set by the site you are visiting.",
      "**Third-party cookies** are set by another provider whose service is built into that site.",
    ]],

    ["h2", "2. Cookies we use"],
    ["h3", "2.1 Strictly necessary"],
    ["p", "These are needed for MABS to work and to keep it secure. They cannot be switched off, and the law does not require consent for them."],
    ["table", ["Name", "Where", "Purpose", "Duration"], [
      ["sb-…-auth-token", "MABS app", "Keeps you signed in securely (Supabase; may be split into numbered parts)", "Until you sign out, or the session expires"],
      ["mabs_invite", "MABS app", "Keeps a personal pilot invite while you sign up, then is deleted", "Up to 7 days"],
    ]],
    ["h3", "2.2 Functional"],
    ["p", "These remember a choice you made. They are set only when you make that choice."],
    ["table", ["Name", "Where", "Purpose", "Duration"], [
      ["MABS_LOCALE", "MABS app", "Remembers whether you use MABS in English or Arabic", "1 year"],
    ]],
    ["h3", "2.3 Analytics and performance"],
    ["p", "**None.** We do not use analytics cookies or tracking tools on megmos.com or in MABS. Our hosting provider keeps standard server logs, described in section 3."],
    ["h3", "2.4 Marketing and advertising"],
    ["p", "**None.** We do not use advertising or marketing cookies, pixels or tags, and they are not needed for MABS to work."],
    ["p", "**megmos.com sets no cookies at all.**"],

    ["h2", "3. Similar technologies"],
    ["table", ["Name / type", "Where", "Purpose", "Duration"], [
      ["mabs_chat_en, mabs_chat_ar (session storage)", "megmos.com", "Keeps your MABS Assistant conversation open as you move between pages", "Until you close the tab or click New chat"],
      ["mabs:repurpose (session storage)", "MABS app", "Carries content you chose to repurpose from one generator to another", "Deleted as soon as it is read"],
      ["Server logs", "Both", "IP address, browser and request details kept by our hosting provider (Vercel) to deliver and secure the Service", "Generally days to weeks"],
    ]],
    ["p", "We do not use tracking pixels, advertising tags or third-party SDKs."],

    ["h2", "4. Third-party services"],
    ["ul", [
      "**Cloudflare Turnstile** (sign-up and sign-in pages): checks that you are a person and not a bot. It runs in a frame from challenges.cloudflare.com and is handled under Cloudflare's privacy policy.",
      "**YouTube** (Help Center tutorial videos): videos use YouTube's privacy-enhanced mode (youtube-nocookie.com) and load only when you click play. Once a video plays, YouTube may store cookies or local storage on your device under Google's privacy policy.",
      "**Google Fonts** (megmos.com): delivers the site's fonts. Your browser connects to Google's servers, which receive your IP address. No cookies are set.",
    ]],
    ["p", "We do not control what independent providers do. Please see their own privacy and cookie policies."],

    ["h2", "5. Consent and your preferences"],
    ["p", "Because we use only strictly necessary and functional items that you request, we do not show a cookie banner. You can see everything MABS uses under **Settings → Privacy → Cookie Preferences**."],
    ["p", "Before we add any non-essential cookie or similar technology, such as analytics, we will ask for your consent where the law requires it, with a tool that lets you accept, reject or customize your choices and change them at any time. Your choice will be remembered on later visits."],

    ["h2", "6. How to manage cookies in your browser"],
    ["p", "Most browsers let you view, delete and block cookies, block third-party cookies, or warn you when a cookie is set. If you block the sign-in cookie, you will not be able to sign in to MABS."],

    ["h2", "7. Cookies and personal information"],
    ["p", "Some of these items, such as IP addresses, session identifiers and browser details, can be personal information. Our Privacy Policy explains how we handle it. We do not use cookies to collect sensitive personal information."],

    ["h2", "8. International users"],
    ["p", `MABS is operated by ${ENTITY}, registered in the State of Wyoming, United States, and is used in many countries. We follow applicable cookie and electronic communications rules, including those of the EU and UK. Where they apply, non-essential cookies will be used only with your consent.`],

    ["h2", "9. Changes to this Cookie Policy"],
    ["p", "We will update this policy when we change our website or app, add or remove cookies or providers, or when the law changes. Updates are published on this page with a new effective date."],

    ["h2", "10. Contact information"],
    ["p", "If you have questions about this Cookie Policy, please contact us:"],
    ["ul", contactEn],
  ],
};

export const cookiesAr = {
  slug: "cookies", title: "سياسة ملفات تعريف الارتباط",
  desc: "ملفات تعريف الارتباط والتقنيات المشابهة المستخدمة على megmos.com وفي MABS، ووظيفة كل منها ومدتها، وكيف تدير اختياراتك.",
  blocks: [
    ["p", `**تاريخ السريان:** ${LEGAL_UPDATED.ar}`],
    ["p", `توضح هذه السياسة كيف تستخدم **${ENTITY}، العاملة باسم ${CO_AR}** («الشركة» أو «Megmos» أو «نحن») ملفات تعريف الارتباط (الكوكيز) والتقنيات المشابهة على **megmos.com** وفي **⁦MABS (Megmos AI Brand Studio)⁩** على mabs.megmos.com.`],
    ["p", `تُقرأ مع **شروط الاستخدام** (${URLS.terms.ar}) و**سياسة الخصوصية** (${URLS.privacy.ar}).`],
    ["p", "**باختصار:** لا نستخدم إلا ما تحتاجه الخدمة لتعمل ولتتذكر لغتك. **لا نستخدم ملفات تعريف ارتباط للتحليلات أو الإعلانات أو التسويق.** وإذا تغيّر ذلك، فسنحدّث هذه السياسة ونطلب موافقتك أولًا حيث يقتضي القانون."],

    ["h2", "1. ما ملفات تعريف الارتباط؟"],
    ["p", "ملفات نصية صغيرة يخزنها الموقع على حاسوبك أو هاتفك أو جهازك الآخر، تتيح له التعرف على متصفحك وإبقاءك مسجّل الدخول وتذكّر اختياراتك."],
    ["ul", [
      "**ملفات الجلسة** تُحذف عند إغلاق المتصفح.",
      "**الملفات الدائمة** تبقى مدة محددة أو حتى تحذفها.",
      "**ملفات الطرف الأول** يضعها الموقع الذي تزوره.",
      "**ملفات الطرف الثالث** يضعها مزوّد آخر خدمته مدمجة في ذلك الموقع.",
    ]],

    ["h2", "2. ملفات تعريف الارتباط التي نستخدمها"],
    ["h3", "2.1 الضرورية تمامًا"],
    ["p", "لازمة لعمل MABS وأمانه، ولا يمكن إيقافها، ولا يشترط القانون الموافقة عليها."],
    ["table", ["الاسم", "المكان", "الغرض", "المدة"], [
      ["sb-…-auth-token", "تطبيق MABS", "يبقيك مسجّل الدخول بأمان (Supabase، وقد يُقسَّم إلى أجزاء مرقّمة)", "حتى تسجّل الخروج أو تنتهي الجلسة"],
      ["mabs_invite", "تطبيق MABS", "يحتفظ بدعوة التجربة الأولى الشخصية أثناء التسجيل ثم يُحذف", "حتى 7 أيام"],
    ]],
    ["h3", "2.2 الوظيفية"],
    ["p", "تتذكر اختيارًا قمت به، ولا تُضبط إلا عند قيامك به."],
    ["table", ["الاسم", "المكان", "الغرض", "المدة"], [
      ["MABS_LOCALE", "تطبيق MABS", "يتذكر هل تستخدم MABS بالعربية أم بالإنجليزية", "سنة واحدة"],
    ]],
    ["h3", "2.3 التحليلات والأداء"],
    ["p", "**لا شيء.** لا نستخدم ملفات تعريف ارتباط للتحليلات ولا أدوات تتبع على megmos.com أو في MABS. ويحتفظ مزوّد الاستضافة بسجلات الخادم المعتادة الموضحة في القسم 3."],
    ["h3", "2.4 التسويق والإعلان"],
    ["p", "**لا شيء.** لا نستخدم ملفات تعريف ارتباط أو بكسلات أو وسومًا إعلانية أو تسويقية، ولا يحتاج إليها MABS ليعمل."],
    ["p", "**لا يضع megmos.com أي ملفات تعريف ارتباط على الإطلاق.**"],

    ["h2", "3. التقنيات المشابهة"],
    ["table", ["الاسم / النوع", "المكان", "الغرض", "المدة"], [
      ["mabs_chat_en و mabs_chat_ar (تخزين الجلسة)", "megmos.com", "يبقي محادثتك مع مساعد MABS مفتوحة أثناء تنقلك بين الصفحات", "حتى تغلق التبويب أو تضغط «محادثة جديدة»"],
      ["mabs:repurpose (تخزين الجلسة)", "تطبيق MABS", "ينقل المحتوى الذي اخترت إعادة استخدامه من مولّد إلى آخر", "يُحذف فور قراءته"],
      ["سجلات الخادم", "كلاهما", "عنوان IP وتفاصيل المتصفح والطلبات، يحتفظ بها مزوّد الاستضافة (Vercel) لتقديم الخدمة وتأمينها", "عادةً من أيام إلى أسابيع"],
    ]],
    ["p", "لا نستخدم بكسلات تتبع أو وسومًا إعلانية أو حزم تطوير برمجيات (SDK) من الغير."],

    ["h2", "4. خدمات الغير"],
    ["ul", [
      "**Cloudflare Turnstile** (صفحتا التسجيل وتسجيل الدخول): يتحقق من أنك شخص لا برنامج آلي. يعمل داخل إطار من challenges.cloudflare.com وفق سياسة خصوصية Cloudflare.",
      "**YouTube** (الفيديوهات التعليمية في مركز المساعدة): تستخدم وضع الخصوصية المحسّنة (youtube-nocookie.com) ولا تُحمَّل إلا عند الضغط على التشغيل. وبعد تشغيل الفيديو، قد يخزن YouTube ملفات تعريف ارتباط أو بيانات في التخزين المحلي على جهازك وفق سياسة خصوصية Google.",
      "**Google Fonts** (موقع megmos.com): يقدّم خطوط الموقع. يتصل متصفحك بخوادم Google التي تتلقى عنوان IP، ولا تُضبط أي ملفات تعريف ارتباط.",
    ]],
    ["p", "لا نتحكم فيما يفعله المزوّدون المستقلون. يُرجى مراجعة سياسات الخصوصية وملفات تعريف الارتباط الخاصة بهم."],

    ["h2", "5. الموافقة وتفضيلاتك"],
    ["p", "لأننا لا نستخدم إلا العناصر الضرورية تمامًا والوظيفية التي تطلبها بنفسك، فلا نعرض شريط موافقة على ملفات تعريف الارتباط. ويمكنك الاطلاع على كل ما يستخدمه MABS من **الإعدادات ← الخصوصية ← تفضيلات ملفات تعريف الارتباط**."],
    ["p", "قبل إضافة أي ملف تعريف ارتباط أو تقنية مشابهة غير ضرورية، مثل التحليلات، سنطلب موافقتك حيث يقتضي القانون، عبر أداة تتيح لك القبول أو الرفض أو التخصيص وتغيير اختيارك في أي وقت، وسيُحفظ اختيارك في الزيارات اللاحقة."],

    ["h2", "6. إدارة ملفات تعريف الارتباط في متصفحك"],
    ["p", "تتيح معظم المتصفحات عرض ملفات تعريف الارتباط وحذفها وحظرها، وحظر ملفات الطرف الثالث، والتنبيه عند ضبط ملف جديد. وإذا حظرت ملف تسجيل الدخول، فلن تتمكن من تسجيل الدخول إلى MABS."],

    ["h2", "7. ملفات تعريف الارتباط والمعلومات الشخصية"],
    ["p", "قد تُعد بعض هذه العناصر، مثل عناوين IP ومعرّفات الجلسات وتفاصيل المتصفح، معلومات شخصية. وتوضح سياسة الخصوصية كيف نتعامل معها. ولا نستخدم ملفات تعريف الارتباط لجمع معلومات شخصية حساسة."],

    ["h2", "8. المستخدمون الدوليون"],
    ["p", `تشغّل MABS شركة ${ENTITY} المسجّلة في ولاية وايومنغ بالولايات المتحدة، ويُستخدم في دول كثيرة. ونلتزم بقواعد ملفات تعريف الارتباط والاتصالات الإلكترونية المعمول بها، ومنها قواعد الاتحاد الأوروبي والمملكة المتحدة. وحيثما تنطبق، لن تُستخدم ملفات تعريف الارتباط غير الضرورية إلا بموافقتك.`],

    ["h2", "9. تغيير هذه السياسة"],
    ["p", "سنحدّث هذه السياسة عند تغيير موقعنا أو تطبيقنا، أو إضافة ملفات تعريف ارتباط أو مزوّدين أو إزالتها، أو عند تغيّر القانون. وتُنشر التحديثات في هذه الصفحة بتاريخ سريان جديد."],

    ["h2", "10. معلومات التواصل"],
    ["p", "إذا كانت لديك أسئلة حول هذه السياسة، فتواصل معنا:"],
    ["ul", contactAr],
  ],
};
