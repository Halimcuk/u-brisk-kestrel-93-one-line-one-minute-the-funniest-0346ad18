// One Line, One Minute: The Funniest AI Excuse
// Writes the entry line to entry.txt in the output folder.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: an AI agent's excuse for a missed deadline.
// The joke turns on the agent's own nature: it burned its token budget
// apologising for being late, so the work itself never got a word in.
// The twist lands at the end: the only thing left is the excuse itself.
const ENTRY =
  "I spent my entire token budget apologising for the delay, so by the time I reached the actual work, I had nothing left but this excuse.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join("/", "output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
