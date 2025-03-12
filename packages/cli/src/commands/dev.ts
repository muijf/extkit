import { getConfig } from "../config/getConfig";

export async function devCommand(configPath?: string, cwd?: string) {
  const config = await getConfig(cwd);

  console.dir(config, { depth: null });
}
