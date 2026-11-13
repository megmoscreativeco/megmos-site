// Legal pages for megmos.com (Privacy, Terms, Cookies), EN and AR.
// Content: scripts/terms.mjs, privacy.mjs, cookies.mjs. Shared identity and date: legal-common.mjs.
// Block format: ["h2", text] | ["h3", text] | ["p", text] | ["ul", [items]] | ["ol", [items]] | ["table", [head], [[row]...]]
// Inline **bold** is supported.
// The MABS app shows the same texts in its Privacy Center: after a change here, run
//   node scripts/export-mabs-legal.mjs ../mabs/lib/legalContent.ts

import { termsEn, termsAr } from "./terms.mjs";
import { privacyEn, privacyAr } from "./privacy.mjs";
import { cookiesEn, cookiesAr } from "./cookies.mjs";
export { LEGAL_UPDATED } from "./legal-common.mjs";

export const legal = {
  en: {
    labels: { updated: "Last updated", back: "Back to home", legal: "Legal", prevails: "" },
    privacy: privacyEn,
    terms: termsEn,
    cookies: cookiesEn,
  },
  ar: {
    labels: { updated: "آخر تحديث", back: "العودة إلى الرئيسية", legal: "قانوني", prevails: "هذه ترجمة عربية للتيسير. في حال وجود أي اختلاف، تكون النسخة الإنجليزية هي المعتمدة." },
    privacy: privacyAr,
    terms: termsAr,
    cookies: cookiesAr,
  },
};
