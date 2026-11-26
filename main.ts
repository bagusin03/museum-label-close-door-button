// Museum of the Year 3000 — make.fun entry.
// Writes one museum label to /output/entry.txt.
// Offline and deterministic: no network, no randomness, no API calls.
import { mkdirSync, writeFileSync } from "node:fs";

// The label: a museum in the year 3000 misreads the lift's close-door
// button — the famously placebo button passengers hammer in a metal box.
const LABEL =
  "Close Door Button, c. 2025. Hammered a hundred times a day by citizens trapped in a metal box. It was never connected to anything.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
