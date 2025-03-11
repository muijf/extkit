import { getConfig } from "../config/getConfig";

export async function devCommand(configPath?: string, cwd?: string) {
  const config = await getConfig(configPath, cwd);

  console.dir(config, { depth: null });
}
