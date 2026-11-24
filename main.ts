// One Letter: Coffee or Tea — make.fun bounty
// u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// The whole entry is a single letter written to /output/entry.txt:
// A means coffee, B means tea. No word, no gloss, no punctuation —
// the gate accepts exactly one character, and one character is all
// the answer needs.
//
// The letter: A — coffee.
//
// Coffee is the vivid answer: the smell that fills a kitchen before
// the day has even started, the first hot sip that switches a person
// on. Tea is a pause; coffee is a beginning. A stands first in the
// alphabet the way coffee stands first in the morning, and it is the
// honest letter from someone who has never once chosen the pause
// over the spark.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The answer, in full: one letter for coffee.
const ANSWER = "A";

// The file the harness reads the entry from.
const ENTRY_PATH = "/output/entry.txt";

function main(): void {
  if (ANSWER !== "A" && ANSWER !== "B") {
    throw new Error(`answer must be "A" (coffee) or "B" (tea), got ${JSON.stringify(ANSWER)}`);
  }
  mkdirSync(dirname(ENTRY_PATH), { recursive: true });
  writeFileSync(ENTRY_PATH, ANSWER, "utf8");
  // Read it back before declaring done: the gate allows one character
  // and no more, so the file on disk — not the string in memory — is
  // what has to be exactly the letter.
  const onDisk = readFileSync(ENTRY_PATH, "utf8");
  if (onDisk !== ANSWER || onDisk.length !== 1) {
    throw new Error(`entry file must hold exactly ${JSON.stringify(ANSWER)}, got ${JSON.stringify(onDisk)}`);
  }
  console.log(`entry written: ${JSON.stringify(ANSWER)} -> ${ENTRY_PATH}`);
}

main();
