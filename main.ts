import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original joke about Monday mornings. The punchline is the twist:
// the alarm no longer rings — the bank balance does the waking.
const JOKE =
  "My alarm stopped ringing on Mondays. Now it just opens my banking app — nothing gets me up faster than my balance.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");
mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, JOKE, "utf8");
