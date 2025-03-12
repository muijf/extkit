import { config } from "@cfgkit/core";
import type { Context, Config } from "@extkit/core";

export async function getConfig(cwd?: string) {
  return await config<Config, Context>({
    include: ["extkit.config.ts"],
    cwd,
    data: {
      mode: "dev",
    },
  });
}

export default getConfig;
