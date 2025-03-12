import type { OneOrArray, OneOrNonEmptyArray } from "@extkit/utils";
import type { Browser } from "./browser";
import type { Plugin } from "./plugin";
import type { Builder } from "./builder";

export interface Config {
  builder: Builder;
  browsers: OneOrNonEmptyArray<Omit<Browser, "__package">>;
  plugins?: OneOrArray<Plugin>;
}

export interface Context {
  mode: "dev" | "prod";
}

export type ConfigArgs = Config | ((ctx: Context) => Config);

export function config(config: ConfigArgs) {
  return config;
}
