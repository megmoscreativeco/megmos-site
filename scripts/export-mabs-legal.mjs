// Writes the legal texts as a TypeScript module for the MABS Privacy Center,
// so the app and megmos.com always show the same words.
// Usage: node scripts/export-mabs-legal.mjs ../mabs/lib/legalContent.ts
import { writeFileSync } from "node:fs";
import { legal, LEGAL_UPDATED } from "./legal.mjs";

const out = process.argv[2];
if (!out) { console.error("Usage: node scripts/export-mabs-legal.mjs <output .ts path>"); process.exit(1); }

const ts = `// GENERATED from megmos-site/scripts/legal.mjs by scripts/export-mabs-legal.mjs.
// Do not edit here: change the megmos-site source and re-run the export.
// Same texts as megmos.com/privacy, /terms and /cookies (EN + AR).

export type LegalBlock =
  | ["h2", string]
  | ["h3", string]
  | ["p", string]
  | ["ul", string[]]
  | ["ol", string[]]
  | ["table", string[], string[][]];
export interface LegalDoc { slug: string; title: string; desc: string; blocks: LegalBlock[] }
export interface LegalLocale {
  labels: { updated: string; back: string; legal: string; prevails: string };
  privacy: LegalDoc; terms: LegalDoc; cookies: LegalDoc;
}

export const LEGAL_UPDATED: Record<"en" | "ar", string> = ${JSON.stringify(LEGAL_UPDATED)};

export const legal: Record<"en" | "ar", LegalLocale> = ${JSON.stringify(legal, null, 2)};
`;
writeFileSync(out, ts);
console.log("wrote", out);
