/**
 * Unified path resolution for scripts
 * Single source of truth for project paths
 */

import * as path from "node:path";
import { fileURLToPath } from "node:url";

// Get script directory
const __filename = fileURLToPath(import.meta.url);
const scriptDir = path.dirname(path.dirname(__filename)); // scripts/core/paths.ts -> scripts
const compilerRoot = path.dirname(scriptDir); // scripts -> packages/compiler-ts
const packagesRoot = path.dirname(compilerRoot); // packages/compiler-ts -> packages
const projectRoot = path.dirname(packagesRoot); // packages -> root

// Project paths
export const paths = {
  // Project root
  root: projectRoot,

  // Common directories
  scripts: scriptDir,
  docs: path.resolve(projectRoot, "content", "docs"),
  src: path.resolve(projectRoot, "apps", "web", "src"),
  dist: path.resolve(projectRoot, "dist"),

  // Generated files
  generated: path.resolve(projectRoot, "apps", "web", "src", "generated"),
  generatedDocs: path.resolve(projectRoot, "apps", "web", "src", "generated", "docs"),

  // Config files
  packageJson: path.resolve(projectRoot, "package.json"),
  biomeJson: path.resolve(projectRoot, "biome.json"),
  tsconfigJson: path.resolve(projectRoot, "tsconfig.json"),
} as const;

export function resolvePath(...segments: string[]): string {
  return path.resolve(paths.root, ...segments);
}

export function ensureDir(dir: string): void {
  const fs = require("node:fs");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}
