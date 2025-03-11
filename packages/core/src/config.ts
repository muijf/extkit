import type { NonEmptyArray } from "@extkit/utils";
import type { Browser } from "./browser";
import type { Plugin } from "./plugin";

export interface Config {
  browsers: NonEmptyArray<Omit<Browser, "__package">>;
  plugins?: Plugin[];
}

export interface Context {
  mode: "dev" | "prod";
}

export function defineConfig(config: Config | ((ctx: Context) => Config)) {
  return config;
}
