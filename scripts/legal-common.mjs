// Shared identity, contacts and date for the three legal documents
// (Terms of Use, Privacy Policy, Cookie Policy). Change here, not per document.

export const ENTITY = "Megmos LLC";
export const ADDRESS = "30 N Gould St Ste R, Sheridan, WY 82801, USA";
export const PRIVACY = "privacy@megmos.com";
export const SUPPORT = "support@megmos.com";
export const URLS = {
  site: "https://megmos.com",
  app: "https://mabs.megmos.com",
  terms: { en: "https://megmos.com/terms/", ar: "https://megmos.com/ar/terms/" },
  privacy: { en: "https://megmos.com/privacy/", ar: "https://megmos.com/ar/privacy/" },
  cookies: { en: "https://megmos.com/cookies/", ar: "https://megmos.com/ar/cookies/" },
  pricing: { en: "https://megmos.com/pricing/", ar: "https://megmos.com/ar/pricing/" },
};

// One effective date for all three documents.
export const LEGAL_UPDATED = { en: "13 November 2026", ar: "13 نوفمبر 2026" };

// Arabic text: keep Latin addresses and names readable inside right-to-left lines.
export const ltr = (s) => `⁦${s}⁩`;
export const CO_AR = "Megmos Creative Co.‎";

// Contact block used at the end of every document.
export const contactEn = [
  `**${ENTITY}**, trading as Megmos Creative Co., registered in Wyoming, United States`,
  `Mailing address: ${ADDRESS}`,
  `Website: ${URLS.site} · App: ${URLS.app}`,
  `General support: **${SUPPORT}**`,
  `Privacy inquiries: **${PRIVACY}**`,
];
export const contactAr = [
  `**${ENTITY}**، العاملة باسم ${CO_AR}، مسجّلة في ولاية وايومنغ بالولايات المتحدة`,
  `العنوان البريدي: ${ltr(ADDRESS)}`,
  `الموقع: ${URLS.site}‎ · التطبيق: ${URLS.app}`,
  `الدعم العام: **${SUPPORT}**`,
  `استفسارات الخصوصية: **${PRIVACY}**`,
];
