// How It Works page for megmos.com, EN and AR.
// Every claim is checked against the MABS app (2026-10-16):
// - 23 active generators; 9 Starter (free plan), 14 Professional (paid plans, not yet on sale).
// - Brand Context (Settings) is optional and available to every generator template;
//   form input always overrides it. Generation works with or without a project.
// - Output editor: edit, copy, save to project (Content Library), regenerate, repurpose.
// - No publishing or platform integrations. Output language follows the interface (EN/AR).
// Keep it in sync with lib/siteAssistant.ts in the app when the product changes.

const FREE = "free";
const PAID = "paid";

export const how = {
  en: {
    slug: "how-it-works",
    seoTitle: "How MABS Works | From Your Brand to Your Marketing",
    desc: "See how MABS turns your brand context, property facts and a short generator form into real estate marketing content you review, refine and use.",
    nav: "How It Works",

    eyebrow: "How it works",
    h1: "From Your Brand to Your Marketing. Simplified.",
    lead: "MABS helps real estate professionals turn business information, property details, and brand context into practical marketing content. Choose a generator, provide the relevant details, and create content designed for your business.",
    cta: "Get Started with MABS",
    cta2: "Explore What You Can Create",

    stepsEyebrow: "The workflow",
    stepsTitle: "Four Steps From Your Details to Your Draft.",
    stepsSub: "Every generator in MABS follows the same path, so once you've used one, you know how they all work.",
    stepWord: "Step",
    rail: ["Bring your brand context", "Choose your generator", "Add the relevant details", "Generate, review and use"],
    steps: [
      {
        h: "Start with Your Business",
        body: "Save your business details once in Brand Context, inside Settings. MABS makes them available to its generators, so you don't retype your name, voice or service areas for every piece. Brand Context is optional: you can generate content without completing it, and add to it at any time.",
        listTitle: "Brand Context can include",
        list: ["Your business or agency name and brokerage", "Your services and a short company description", "Your target audience", "Your brand voice and style", "Your service areas", "Contact details and social profiles"],
        micro: "Give MABS the context it needs. The more relevant the information, the better the starting point for your marketing content.",
      },
      {
        h: "Choose What You Need to Create",
        body: "MABS organizes marketing tasks into specialized generators, so you never start from a blank prompt. Each generator is built for one job, and your choice decides which fields you see and what kind of content you get.",
        listTitle: "For example",
        chips: [["MLS Description", FREE], ["Luxury Listing Description", FREE], ["Instagram Caption", FREE], ["Email Marketing", FREE], ["Website Page Copy", PAID]],
        micro: "Whether you're preparing a property listing, writing a social caption, planning an email, or developing website copy, choose the workflow that matches your goal.",
      },
      {
        h: "Tell Us About the Property or Campaign",
        body: "Complete a short, structured form. Required fields are marked, and the rest are optional. When you work inside a project, the property facts you saved there are ready to use.",
        listTitle: "Depending on the generator, fields can include",
        list: ["Property address and type", "Bedrooms, bathrooms and size", "Key or standout features", "Listing price, saved in your project", "Post type, key message and call to action", "Tone, and a focus keyword for website pages"],
        note: "Fields differ by generator. MABS never fills in property facts you didn't provide: missing details are left out.",
        micro: "Provide the facts that matter. MABS uses the information you supply to prepare a relevant first draft, while leaving you in control of what gets included.",
      },
      {
        h: "Create Content You Can Work With",
        body: "MABS runs your details through its AI generation workflow and returns a draft for you to review. From there, the content is yours to shape.",
        listTitle: "With every draft you can",
        list: ["Edit the text directly in MABS", "Copy it and use it wherever you need it", "Save it to the project and find it in your Content Library", "Regenerate for a fresh version", "Repurpose it as another format, such as a post, an email or a video script"],
        note: "A draft is a starting point. Check it for accuracy and suitability before you publish. MABS does not publish to websites or social media.",
        micro: "Review the result, verify the details, refine the message, and put your content to work.",
      },
    ],
    livesTitle: "Where your information lives",
    lives: [
      ["Brand Context", "Saved once, in Settings", "Your business details, voice and service areas."],
      ["Projects", "Saved once per property", "Property facts such as bedrooms, bathrooms, size, features and price."],
      ["Generator form", "Entered for each piece", "What this piece needs: the message, tone, call to action and other fields."],
    ],
    livesNote: "Anything you type in a form takes priority over your saved details.",

    contextEyebrow: "Brand-aware by design",
    contextTitle: "More Context. More Relevant Content.",
    contextSub: "A general AI tool only knows what you type into a single prompt. MABS works from a structured workflow that can draw on what you've already told it.",
    compare: [
      { title: "A single prompt in a general AI tool", items: ["You re-explain your business every time", "You decide which details to include, and what gets missed", "Results depend on how the prompt is written", "Facts and assumptions can mix unless you check closely"] },
      { title: "A MABS generator", items: ["Your Brand Context is available to the generator", "A form asks for the details this task needs", "Property facts come from your project or the form", "Each generator is focused on one marketing goal"] },
    ],
    principlesTitle: "What this means for your content",
    principles: [
      "Business context can make content more relevant to your services and audience.",
      "Brand voice and style, when you supply them, help keep a more consistent tone.",
      "Property details keep listing content grounded in the facts you provide.",
      "Specialized generators organize the work around one marketing goal.",
      "You review and approve the final content.",
    ],
    contextNote: "Each generator uses the parts of your Brand Context that fit its task, and results vary from one generation to the next. That's why every draft is yours to review.",

    createEyebrow: "What you can create",
    createTitle: "One Platform. Different Marketing Needs.",
    createSub: "Generators are grouped by marketing task. The free plan includes the Starter generators; the rest will come with paid plans.",
    legendFree: "Included in the free plan",
    legendPaid: "Paid plans, coming soon",
    exampleLabel: "Example output",
    cats: [
      {
        icon: "home", title: "Property Marketing",
        desc: "Create listing descriptions, headlines and highlights from the property facts you provide.",
        gens: [["MLS Description", FREE], ["Luxury Listing Description", FREE], ["Listing Headlines & Highlights", FREE], ["Listing Campaign", PAID], ["Flyer Copy", PAID]],
        example: "Built in 2022, this single-family home at 123 Harbor Lane offers 4 bedrooms, 3.5 bathrooms and 2,850 square feet…",
      },
      {
        icon: "chat", title: "Social Media Content",
        desc: "Prepare captions, posts and short video scripts, plus longer local and market content.",
        gens: [["Instagram Caption", FREE], ["Social Post", FREE], ["Video Script", FREE], ["Market Update", PAID], ["Neighborhood Guide", PAID], ["Blog Post", PAID]],
        example: "Waterfront mornings at 123 Harbor Lane. 4 bedrooms, 3.5 baths and a pool terrace. Message me to book a private showing.",
      },
      {
        icon: "mail", title: "Email Marketing",
        desc: "Draft marketing emails and follow-ups for clients, prospects and campaigns.",
        gens: [["Email Marketing", FREE], ["Client Follow-Up", FREE], ["Lead Nurture Sequence", PAID], ["Listing Presentation", PAID]],
        example: "Subject: Just listed: 123 Harbor Lane. A 2022 waterfront home with 4 bedrooms and a pool is now on the market…",
      },
      {
        icon: "browser", title: "Website Copy & Personal Brand",
        desc: "Write your agent bio and structured copy for Home, About, Services, Community, Property, Contact and FAQ pages, with SEO titles, meta descriptions and URL slugs, gathered in the Website Kit.",
        gens: [["Agent Bio", FREE], ["Website pages (7)", PAID], ["Website Kit", PAID]],
        example: "SEO title: Harbor District Homes | Avery Lane, Harbor & Stone Realty",
      },
    ],
    createNote: "Examples use a fictional agent and property. MABS writes copy only: it does not host, build or publish websites.",

    exEyebrow: "Illustrative example",
    exTitle: "See How It Works in Practice",
    exSub: "A fictional agent prepares a luxury listing. The property and the draft below are illustrative, not a customer result.",
    exGoalLabel: "The goal", exGoal: "Prepare a luxury property description.",
    exProcessLabel: "The process", exProcess: "Select the Luxury Listing Description generator, complete the form, and generate a draft.",
    exInputsLabel: "The inputs",
    exInputs: [
      ["Property address", "8 Cliffside Way"],
      ["Property type", "Single-family estate"],
      ["Bedrooms", "5"], ["Bathrooms", "4.5"], ["Square feet", "4,200"],
      ["Architectural style", "Contemporary"],
      ["Standout features", "Floor-to-ceiling windows, infinity pool, chef's kitchen, wine room"],
      ["Tone", "Refined"],
    ],
    exBlank: "Location prestige and lifestyle highlights: optional, left blank",
    exResultLabel: "The result",
    exResultTag: "Illustrative draft",
    exResult: "Floor-to-ceiling windows define this contemporary estate at 8 Cliffside Way, where 4,200 square feet of living space unfolds across five bedrooms and four and a half baths. A chef's kitchen anchors the home, a dedicated wine room sets the stage for entertaining, and an infinity pool carries the living space outdoors. Contact Avery Lane, Harbor & Stone Realty, to arrange a private viewing.",
    exBrandBadge: "Name and brokerage from Brand Context",
    exCallout: "Every fact in the draft comes from the inputs. The optional location and lifestyle fields were left blank, so the draft makes no claims about views, the neighborhood or nearby amenities.",

    readyEyebrow: "Getting started",
    readyTitle: "You Don't Need Everything Ready.",
    readySub: "Begin with what your immediate task needs. You can add more context whenever you like.",
    ready: [
      ["For a property listing", "Start with the essential facts: address, property type, bedrooms, bathrooms and key features.", FREE],
      ["For a social caption", "Choose the post type, write the key message and pick a tone. An address and a call to action are optional.", FREE],
      ["For website copy", "Choose the page's focus. A target keyword and call to action are optional, and some business details fill in from your Brand Context.", PAID],
    ],
    readyNo: "No complete brand identity, professional photography, finished website or marketing strategy required.",
    readyNote: "Less information usually means a more general draft. Never rely on AI to fill in property facts you don't know: MABS leaves missing details out, and you should check that every draft says only what's true.",

    trustEyebrow: "Your role",
    trustTitle: "AI Does the Drafting. You Make the Final Call.",
    trustText: "MABS helps you create a practical starting point for your marketing, but your professional judgment remains essential. Review every result, verify property details and claims, and make sure your final content reflects your business, complies with applicable rules, and is appropriate for your audience.",
    trustList: [
      ["Verify the facts", "Property details, prices, measurements and contact information."],
      ["Check every claim", "Descriptions, comparisons and anything about the area."],
      ["Follow the rules", "Fair housing, MLS and brokerage requirements where you work."],
      ["Make it yours", "Adjust the message so it fits your audience and your brand."],
    ],
    trustNote: "MABS does not guarantee legal compliance, accuracy, leads or sales.",

    faqTitle: "Frequently Asked Questions",
    faq: [
      ["What is MABS?", "MABS, short for Megmos AI Brand Studio, is an AI-powered marketing platform focused on helping real estate professionals create content through specialized generators and structured workflows."],
      ["Do I need to provide all my business information first?", "No. Start with the information the generator you choose asks for. Adding your Brand Context in Settings can make results more specific, and you can do that at any time."],
      ["Can I use MABS for different marketing tasks?", "Yes. MABS has specialized generators for property descriptions, social content, email marketing and website copy. The free plan includes the Starter generators; the others will come with paid plans, which are coming soon."],
      ["Can I publish the generated content immediately?", "Generated content should be reviewed and verified before publication. Check all property facts, contact details, claims, and other important information."],
      ["Does MABS automatically publish content to my website or social media?", "No. MABS generates content for you to review, and you copy it wherever you need it. It does not publish to websites or social media, or connect to other platforms."],
      ["Can I generate content in Arabic and English?", "Yes. MABS works in English and Arabic, with a right-to-left layout for Arabic, and generators write content in the language you're using in the app."],
    ],
    faqMore: "More questions",

    finalTitle: "Your Next Marketing Piece Starts Here.",
    finalText: "Choose your goal, bring the relevant details, and let MABS help you create content for your real estate business.",
    finalCta: "Start Creating with MABS",
    finalCta2: "Explore the Platform",
  },

  ar: {
    slug: "how-it-works",
    seoTitle: "كيف يعمل MABS | من علامتك التجارية إلى تسويقك",
    desc: "تعرّف كيف يحوّل MABS سياق علامتك التجارية وبيانات العقار ونموذج مولّد قصير إلى محتوى تسويق عقاري تراجعه وتحسّنه وتستخدمه.",
    nav: "كيف يعمل",

    eyebrow: "كيف يعمل",
    h1: "من علامتك التجارية إلى تسويقك. ببساطة.",
    lead: "يساعد MABS المتخصصين في العقارات على تحويل معلومات أعمالهم وبيانات العقارات وسياق علامتهم التجارية إلى محتوى تسويقي عملي. اختر مولّدًا، وأدخل التفاصيل ذات الصلة، وأنشئ محتوى مصممًا لأعمالك.",
    cta: "ابدأ مع MABS",
    cta2: "اكتشف ما يمكنك إنشاؤه",

    stepsEyebrow: "مسار العمل",
    stepsTitle: "أربع خطوات من تفاصيلك إلى مسودتك.",
    stepsSub: "تتبع جميع المولّدات في MABS المسار نفسه، فإذا استخدمت واحدًا منها عرفت كيف تعمل كلها.",
    stepWord: "الخطوة",
    rail: ["أضف سياق علامتك التجارية", "اختر المولّد", "أدخل التفاصيل ذات الصلة", "أنشئ وراجع واستخدم"],
    steps: [
      {
        h: "ابدأ بأعمالك",
        body: "احفظ تفاصيل أعمالك مرة واحدة في «سياق العلامة التجارية» داخل الإعدادات. يتيحها MABS لمولّداته، فلا تحتاج إلى إعادة كتابة اسمك وأسلوبك ومناطق خدمتك مع كل محتوى. سياق العلامة التجارية اختياري: يمكنك إنشاء المحتوى دون إكماله، والإضافة إليه في أي وقت.",
        listTitle: "يمكن أن يتضمن سياق العلامة التجارية",
        list: ["اسم نشاطك أو وكالتك والوساطة التي تعمل معها", "خدماتك ووصفًا مختصرًا لشركتك", "جمهورك المستهدف", "أسلوب علامتك التجارية وطابعها", "مناطق خدمتك", "بيانات التواصل والحسابات الاجتماعية"],
        micro: "امنح MABS السياق الذي يحتاجه. كلما كانت المعلومات أكثر صلة، كانت نقطة البداية لمحتواك التسويقي أفضل.",
      },
      {
        h: "اختر ما تحتاج إلى إنشائه",
        body: "ينظّم MABS مهام التسويق في مولّدات متخصصة، فلا تبدأ أبدًا من خانة أوامر فارغة. كل مولّد مصمم لمهمة واحدة، واختيارك يحدد الحقول التي تظهر لك ونوع المحتوى الذي تحصل عليه.",
        listTitle: "على سبيل المثال",
        chips: [["وصف MLS", FREE], ["وصف العقارات الفاخرة", FREE], ["تعليقات Instagram", FREE], ["رسائل التسويق بالبريد الإلكتروني", FREE], ["نصوص صفحات الموقع", PAID]],
        micro: "سواء كنت تُعدّ إعلان عقار، أو تكتب تعليقًا لمنشور، أو تخطط لرسالة بريد إلكتروني، أو تطوّر نصوص موقعك، اختر مسار العمل الذي يناسب هدفك.",
      },
      {
        h: "أخبرنا عن العقار أو الحملة",
        body: "أكمل نموذجًا قصيرًا ومنظمًا. الحقول المطلوبة موضّحة، والباقي اختياري. وعندما تعمل داخل مشروع، تكون بيانات العقار التي حفظتها فيه جاهزة للاستخدام.",
        listTitle: "بحسب المولّد، قد تشمل الحقول",
        list: ["عنوان العقار ونوعه", "عدد غرف النوم والحمامات والمساحة", "المزايا الرئيسية أو البارزة", "سعر العرض، المحفوظ في مشروعك", "نوع المنشور والرسالة الرئيسية والدعوة إلى الإجراء", "النبرة، وكلمة مفتاحية لصفحات الموقع"],
        note: "تختلف الحقول من مولّد إلى آخر. لا يضيف MABS أبدًا بيانات عقار لم تقدّمها: التفاصيل الناقصة تُترك ببساطة.",
        micro: "قدّم الحقائق المهمة. يستخدم MABS المعلومات التي تقدّمها لإعداد مسودة أولى مناسبة، مع إبقاء القرار بيدك فيما يُضاف إليها.",
      },
      {
        h: "أنشئ محتوى يمكنك العمل عليه",
        body: "يمرّر MABS تفاصيلك عبر مسار الإنشاء بالذكاء الاصطناعي ويعيد إليك مسودة لمراجعتها. ومن هنا، المحتوى لك لتشكّله كما تريد.",
        listTitle: "مع كل مسودة يمكنك",
        list: ["تعديل النص مباشرة داخل MABS", "نسخه واستخدامه أينما احتجت", "حفظه في المشروع والعثور عليه في مكتبة المحتوى", "إعادة الإنشاء للحصول على نسخة جديدة", "إعادة استخدامه بصيغة أخرى، مثل منشور أو رسالة بريد إلكتروني أو نص فيديو"],
        note: "المسودة نقطة بداية. راجعها للتأكد من دقتها وملاءمتها قبل النشر. لا ينشر MABS على المواقع أو وسائل التواصل الاجتماعي.",
        micro: "راجع النتيجة، وتحقق من التفاصيل، وحسّن الرسالة، ثم ضع محتواك موضع التنفيذ.",
      },
    ],
    livesTitle: "أين تُحفظ معلوماتك",
    lives: [
      ["سياق العلامة التجارية", "يُحفظ مرة واحدة في الإعدادات", "تفاصيل أعمالك وأسلوبك ومناطق خدمتك."],
      ["المشاريع", "تُحفظ مرة واحدة لكل عقار", "بيانات العقار مثل غرف النوم والحمامات والمساحة والمزايا والسعر."],
      ["نموذج المولّد", "يُعبّأ لكل محتوى", "ما يحتاجه هذا المحتوى تحديدًا: الرسالة والنبرة والدعوة إلى الإجراء وحقول أخرى."],
    ],
    livesNote: "ما تكتبه في النموذج تكون له الأولوية على تفاصيلك المحفوظة.",

    contextEyebrow: "مصمم ليعرف علامتك",
    contextTitle: "سياق أكثر. محتوى أكثر صلة.",
    contextSub: "أداة الذكاء الاصطناعي العامة لا تعرف إلا ما تكتبه في أمر واحد. أما MABS فيعمل وفق مسار منظم يمكنه الاستفادة مما أخبرته به مسبقًا.",
    compare: [
      { title: "أمر واحد في أداة ذكاء اصطناعي عامة", items: ["تعيد شرح أعمالك في كل مرة", "أنت من يقرر التفاصيل التي تُذكر، وقد يفوتك بعضها", "تعتمد النتائج على طريقة صياغة الأمر", "قد تختلط الحقائق بالافتراضات ما لم تراجع بعناية"] },
      { title: "مولّد في MABS", items: ["سياق علامتك التجارية متاح للمولّد", "نموذج يطلب التفاصيل التي تحتاجها هذه المهمة", "بيانات العقار تأتي من مشروعك أو من النموذج", "كل مولّد يركّز على هدف تسويقي واحد"] },
    ],
    principlesTitle: "ماذا يعني ذلك لمحتواك",
    principles: [
      "يمكن لسياق أعمالك أن يجعل المحتوى أكثر صلة بخدماتك وجمهورك.",
      "أسلوب علامتك وطابعها، عند تقديمهما، يساعدان على الحفاظ على نبرة أكثر اتساقًا.",
      "بيانات العقار تُبقي محتوى الإعلانات مرتبطًا بالحقائق التي تقدّمها.",
      "المولّدات المتخصصة تنظّم العمل حول هدف تسويقي واحد.",
      "أنت من يراجع المحتوى النهائي ويعتمده.",
    ],
    contextNote: "يستخدم كل مولّد الأجزاء المناسبة لمهمته من سياق علامتك التجارية، وتختلف النتائج من مرة إلى أخرى. لهذا تبقى مراجعة كل مسودة بيدك.",

    createEyebrow: "ما يمكنك إنشاؤه",
    createTitle: "منصة واحدة. احتياجات تسويقية متعددة.",
    createSub: "المولّدات مجمّعة حسب مهمة التسويق. تتضمن الباقة المجانية مولّدات Starter، وستتوفر البقية مع الباقات المدفوعة.",
    legendFree: "ضمن الباقة المجانية",
    legendPaid: "الباقات المدفوعة، قريبًا",
    exampleLabel: "مثال على الناتج",
    cats: [
      {
        icon: "home", title: "تسويق العقارات",
        desc: "أنشئ أوصاف الإعلانات والعناوين وأبرز المزايا من بيانات العقار التي تقدّمها.",
        gens: [["وصف MLS", FREE], ["وصف العقارات الفاخرة", FREE], ["عناوين العقار وأبرز مزاياه", FREE], ["حملات العقارات", PAID], ["نصوص المنشورات المطبوعة", PAID]],
        example: "بُني هذا المنزل المستقل في 123 هاربر لين عام 2022، ويضم 4 غرف نوم و3.5 حمام على مساحة 2,850 قدمًا مربعًا…",
      },
      {
        icon: "chat", title: "محتوى وسائل التواصل",
        desc: "جهّز التعليقات والمنشورات ونصوص الفيديو القصيرة، إضافة إلى محتوى أطول عن المنطقة والسوق.",
        gens: [["تعليقات Instagram", FREE], ["منشورات التواصل الاجتماعي", FREE], ["نصوص الفيديو", FREE], ["تحديثات السوق", PAID], ["أدلة الأحياء", PAID], ["مقالات المدونة", PAID]],
        example: "صباحات على الواجهة المائية في 123 هاربر لين. 4 غرف نوم و3.5 حمام وشرفة مسبح. راسلني لحجز معاينة خاصة.",
      },
      {
        icon: "mail", title: "التسويق بالبريد الإلكتروني",
        desc: "اكتب رسائل تسويقية ورسائل متابعة للعملاء والمهتمين والحملات.",
        gens: [["رسائل التسويق بالبريد الإلكتروني", FREE], ["رسائل متابعة العملاء", FREE], ["سلسلة رعاية العملاء المحتملين", PAID], ["عروض الإدراج", PAID]],
        example: "الموضوع: معروض حديثًا: 123 هاربر لين. منزل على الواجهة المائية بُني عام 2022 يضم 4 غرف نوم ومسبحًا…",
      },
      {
        icon: "browser", title: "نصوص الموقع والعلامة الشخصية",
        desc: "اكتب سيرتك المهنية ونصوصًا منظمة لصفحات الرئيسية ونبذة عني والخدمات والحي والعقار والتواصل والأسئلة الشائعة، مع عناوين SEO والأوصاف التعريفية وروابط الصفحات، مجمّعة في مجموعة الموقع الإلكتروني.",
        gens: [["السيرة المهنية للوكيل", FREE], ["صفحات الموقع (7)", PAID], ["مجموعة الموقع الإلكتروني", PAID]],
        example: "عنوان SEO: منازل حي هاربر | أفيري لين، هاربر آند ستون العقارية",
      },
    ],
    createNote: "تستخدم الأمثلة وكيلًا وعقارًا خياليين. يكتب MABS النصوص فقط: لا يستضيف المواقع ولا يبنيها ولا ينشرها.",

    exEyebrow: "مثال توضيحي",
    exTitle: "شاهد كيف يعمل على أرض الواقع",
    exSub: "وكيل خيالي يُعدّ إعلانًا لعقار فاخر. العقار والمسودة أدناه للتوضيح فقط، وليسا نتيجة لعميل حقيقي.",
    exGoalLabel: "الهدف", exGoal: "إعداد وصف لعقار فاخر.",
    exProcessLabel: "الطريقة", exProcess: "اختر مولّد وصف العقارات الفاخرة، وأكمل النموذج، ثم أنشئ مسودة.",
    exInputsLabel: "المدخلات",
    exInputs: [
      ["عنوان العقار", "8 كليفسايد واي"],
      ["نوع العقار", "فيلا مستقلة"],
      ["غرف النوم", "5"], ["الحمامات", "4.5"], ["المساحة بالقدم المربع", "4,200"],
      ["الطراز المعماري", "معاصر"],
      ["المزايا البارزة", "نوافذ ممتدة من الأرض إلى السقف، مسبح لا متناهي الحافة، مطبخ احترافي، غرفة للنبيذ"],
      ["النبرة", "راقية"],
    ],
    exBlank: "مكانة الموقع وأبرز ملامح نمط الحياة: اختياريان، تُركا فارغين",
    exResultLabel: "النتيجة",
    exResultTag: "مسودة توضيحية",
    exResult: "تمنح النوافذ الممتدة من الأرض إلى السقف هذه الفيلا المعاصرة في 8 كليفسايد واي طابعها المميز، حيث تمتد مساحة معيشة تبلغ 4,200 قدم مربع عبر خمس غرف نوم وأربعة حمامات ونصف. يتوسط المنزلَ مطبخٌ احترافي، وتهيّئ غرفة النبيذ المخصصة أجواءً مثالية للاستقبال، فيما يمدّ المسبح اللامتناهي الحافة مساحة المعيشة إلى الخارج. تواصل مع أفيري لين، هاربر آند ستون العقارية، لترتيب معاينة خاصة.",
    exBrandBadge: "الاسم والوساطة من سياق العلامة التجارية",
    exCallout: "كل معلومة في المسودة مأخوذة من المدخلات. تُرك حقلا الموقع ونمط الحياة الاختياريان فارغين، لذلك لا تتضمن المسودة أي ادعاء عن الإطلالات أو الحي أو المرافق القريبة.",

    readyEyebrow: "للبدء",
    readyTitle: "لست بحاجة إلى تجهيز كل شيء.",
    readySub: "ابدأ بما تحتاجه مهمتك الحالية، ويمكنك إضافة مزيد من السياق متى شئت.",
    ready: [
      ["لإعلان عقار", "ابدأ بالحقائق الأساسية: العنوان ونوع العقار وعدد غرف النوم والحمامات والمزايا الرئيسية.", FREE],
      ["لتعليق على منشور", "اختر نوع المنشور، واكتب الرسالة الرئيسية، وحدد النبرة. العنوان والدعوة إلى الإجراء اختياريان.", FREE],
      ["لنصوص الموقع", "اختر محور الصفحة. الكلمة المفتاحية والدعوة إلى الإجراء اختياريتان، وتُملأ بعض تفاصيل أعمالك من سياق العلامة التجارية.", PAID],
    ],
    readyNo: "لا تحتاج إلى هوية تجارية مكتملة أو تصوير احترافي أو موقع جاهز أو استراتيجية تسويق.",
    readyNote: "المعلومات الأقل تعني غالبًا مسودة أعم. لا تعتمد أبدًا على الذكاء الاصطناعي لملء بيانات عقار لا تعرفها: يترك MABS التفاصيل الناقصة، وعليك التأكد من أن كل مسودة لا تقول إلا ما هو صحيح.",

    trustEyebrow: "دورك",
    trustTitle: "الذكاء الاصطناعي يكتب المسودة. والقرار الأخير لك.",
    trustText: "يساعدك MABS على إعداد نقطة بداية عملية لتسويقك، لكن حكمك المهني يبقى أساسيًا. راجع كل نتيجة، وتحقق من بيانات العقار والادعاءات، وتأكد من أن المحتوى النهائي يعكس أعمالك، ويلتزم بالقواعد المعمول بها، ويناسب جمهورك.",
    trustList: [
      ["تحقق من الحقائق", "بيانات العقار والأسعار والمساحات ومعلومات التواصل."],
      ["راجع كل ادعاء", "الأوصاف والمقارنات وكل ما يتعلق بالمنطقة."],
      ["التزم بالقواعد", "متطلبات الإسكان العادل وMLS والوساطة حيث تعمل."],
      ["اجعله بأسلوبك", "عدّل الرسالة لتناسب جمهورك وعلامتك التجارية."],
    ],
    trustNote: "لا يضمن MABS الامتثال القانوني أو الدقة أو العملاء المحتملين أو المبيعات.",

    faqTitle: "الأسئلة الشائعة",
    faq: [
      ["ما هو MABS؟", "‏MABS، اختصار لـ Megmos AI Brand Studio، منصة تسويق مدعومة بالذكاء الاصطناعي تركّز على مساعدة المتخصصين في العقارات على إنشاء المحتوى عبر مولّدات متخصصة ومسارات عمل منظمة."],
      ["هل أحتاج إلى تقديم جميع معلومات أعمالي أولًا؟", "لا. ابدأ بالمعلومات التي يطلبها المولّد الذي تختاره. إضافة سياق علامتك التجارية في الإعدادات قد تجعل النتائج أكثر تحديدًا، ويمكنك فعل ذلك في أي وقت."],
      ["هل يمكنني استخدام MABS لمهام تسويقية مختلفة؟", "نعم. يضم MABS مولّدات متخصصة لأوصاف العقارات ومحتوى وسائل التواصل والتسويق بالبريد الإلكتروني ونصوص المواقع. تتضمن الباقة المجانية مولّدات Starter، وستتوفر البقية مع الباقات المدفوعة التي ستُطلق قريبًا."],
      ["هل يمكنني نشر المحتوى المُنشأ فورًا؟", "يجب مراجعة المحتوى المُنشأ والتحقق منه قبل النشر. تحقق من جميع بيانات العقار وتفاصيل التواصل والادعاءات وغيرها من المعلومات المهمة."],
      ["هل ينشر MABS المحتوى تلقائيًا على موقعي أو حساباتي الاجتماعية؟", "لا. يُنشئ MABS المحتوى لتراجعه، ثم تنسخه وتستخدمه أينما احتجت. لا ينشر على المواقع أو وسائل التواصل الاجتماعي، ولا يتصل بمنصات أخرى."],
      ["هل يمكنني إنشاء المحتوى بالعربية والإنجليزية؟", "نعم. يعمل MABS بالعربية والإنجليزية، مع تخطيط من اليمين إلى اليسار للعربية، وتكتب المولّدات المحتوى باللغة التي تستخدمها في التطبيق."],
    ],
    faqMore: "مزيد من الأسئلة",

    finalTitle: "محتواك التسويقي القادم يبدأ من هنا.",
    finalText: "اختر هدفك، وأحضر التفاصيل ذات الصلة، ودع MABS يساعدك على إنشاء محتوى لأعمالك العقارية.",
    finalCta: "ابدأ الإنشاء مع MABS",
    finalCta2: "استكشف المنصة",
  },
};
