import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist/server", { recursive: true });
cpSync("out", "dist/assets", { recursive: true });

writeFileSync(
  "dist/server/index.js",
  `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
`,
);
