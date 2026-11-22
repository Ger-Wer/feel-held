import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The kettle boiled and has gone quiet. Light is leaving the roofs, one by one. " +
  "The cat sleeps with a paw over its eyes. Your tea is still warm. " +
  "The evening is already holding it all.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
