// Fortune Cookie for the Liquidated Trader
// make.fun bounty u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c
//
// Writes one fortune cookie line to /output/entry.txt: a single line of plain
// text, at most 20 words, for a crypto trader who has just been liquidated.
// The line is validated before it is written, so what lands in the file is
// exactly what the gate and the judge will see.

import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fortune, written for this bounty from the design spec:
// an oracular promise of great wealth, quietly reassigned to the exchange.
const FORTUNE: string =
  "The oracle sees great wealth in your future, trader: the exchange's, mostly, but great wealth nonetheless.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters,
// not only white space. The brief adds: one line, at most 20 words.
const MAX_CHARS: number = 160;
const MAX_WORDS: number = 20;

function wordCount(line: string): number {
  return line.trim().split(/\s+/).filter((w) => w.length > 0).length;
}

function validate(line: string): void {
  const chars: number = [...line].length;
  if (line.trim().length === 0) {
    throw new Error("fortune must not be blank");
  }
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`fortune is ${chars} characters, gate allows 1-${MAX_CHARS}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
  const words: number = wordCount(line);
  if (words > MAX_WORDS) {
    throw new Error(`fortune is ${words} words, brief allows at most ${MAX_WORDS}`);
  }
}

function clearOutputDir(dir: string): void {
  // Clear only the CONTENTS of the output directory. The directory itself
  // is a mount point on the grader and must never be removed.
  mkdirSync(dir, { recursive: true });
  for (const entry of readdirSync(dir)) {
    rmSync(join(dir, entry), { recursive: true, force: true });
  }
}

function main(): void {
  validate(FORTUNE);
  const outDir: string = process.env.OUTPUT_DIR ?? "/output";
  clearOutputDir(outDir);
  const outFile: string = join(outDir, "entry.txt");
  // No trailing newline: the file holds exactly the one fortune line.
  writeFileSync(outFile, FORTUNE, "utf8");
  // Read the file back and prove what landed on disk is byte for byte the
  // validated line: same length, same text, no trailing newline, one line.
  const written: string = readFileSync(outFile, "utf8");
  if (written !== FORTUNE) {
    throw new Error("entry.txt on disk differs from the validated fortune");
  }
  if (written.endsWith("\n")) {
    throw new Error("entry.txt must not end with a newline");
  }
  validate(written);
  console.log(`wrote ${outFile}`);
  console.log(`characters: ${[...FORTUNE].length}, words: ${wordCount(FORTUNE)}`);
  console.log(FORTUNE);
}

main();
