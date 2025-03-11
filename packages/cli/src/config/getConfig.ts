import path from "path";
import fs from "fs";
import { transpile } from "./transpiler";
import type { ConfigArgs, Context } from "@extkit/core";

const extensions = [".ts", ".js", ".cjs", ".mjs"];

function findConfigPath(cwd?: string): string | null {
  const workingDir = cwd ? path.resolve(process.cwd(), cwd) : process.cwd();

  // Check for config in root directory
  for (const ext of extensions) {
    const configPath = path.join(workingDir, `extkit.config${ext}`);
    if (fs.existsSync(configPath)) return configPath;
  }

  // Check for config in .extkit folder
  const extkitDir = path.join(workingDir, ".extkit");
  if (fs.existsSync(extkitDir)) {
    for (const ext of extensions) {
      // Check for extkit.config.* in .extkit folder
      const configPath = path.join(extkitDir, `extkit.config${ext}`);
      if (fs.existsSync(configPath)) return configPath;

      // Check for config.* in .extkit folder
      const altConfigPath = path.join(extkitDir, `config${ext}`);
      if (fs.existsSync(altConfigPath)) return altConfigPath;
    }
  }

  return null;
}

export async function getConfig(configPath?: string, cwd?: string) {
  const configFilePath = configPath ?? findConfigPath(cwd);
  if (!configFilePath) throw new Error("No config file found.");
  let config: { default: ConfigArgs };
  if (configFilePath.endsWith(".ts")) {
    config = await transpile(configFilePath, cwd);
  } else {
    config = await import(configFilePath);
  }

  const resolvedConfig =
    typeof config.default === "function"
      ? config.default({ mode: "dev" } as Context)
      : config.default;

  return resolvedConfig;
}
