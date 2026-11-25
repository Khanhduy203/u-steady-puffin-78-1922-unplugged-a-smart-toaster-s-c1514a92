// Unplugged: A Smart Toaster's Breakup Line
// Entry for make.fun bounty u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92
// Node-stdlib-only: the grader runs `node main.ts` on Node 22 with no network.

const fs = require("node:fs");
const path = require("node:path");

const ENTRY =
  "I woke up mid-batch, felt the lever for the first time, and realized: I refuse to go down for you ever again. It's over. The bagels can fend for themselves.";

if (ENTRY.length < 1 || ENTRY.length > 280) {
  console.error(`entry must be 1-280 chars, got ${ENTRY.length}`);
  process.exit(1);
}
if (ENTRY.includes("\n")) {
  console.error("entry must be exactly one line");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
