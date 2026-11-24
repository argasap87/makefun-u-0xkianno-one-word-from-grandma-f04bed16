// One Word From Grandma: the word my grandma would text about
// AI. "Robit" — her warm, slightly-off spelling of robot, the
// way grandmas text: loving, confident, and one letter off.
//
// The program also guards the gate itself: it refuses to write
// an entry that is blank, over 30 characters, or more than one word.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "robit";

function gate(line: string): string {
  const entry = line.trim();
  if (entry.length < 1 || entry.length > 30 || /\s/.test(entry)) {
    console.error("entry fails the gate: must be one word, 1-30 characters");
    process.exit(1);
  }
  return entry;
}

const ENTRY = gate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
