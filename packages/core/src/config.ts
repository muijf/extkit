import type { OneOrArray, OneOrNonEmptyArray } from "@extkit/utils";
import type { BrowserFactory } from "./browser";
import type { PluginFactory } from "./plugin";
import type { BuilderFactory } from "./builder";

export interface Config<C extends Config<C>> {
  builder: BuilderFactory<any, C>;
  browsers: OneOrNonEmptyArray<Omit<BrowserFactory<any, C>, "__package">>;
  plugins?: OneOrArray<PluginFactory<any, C>>;
}

export interface Context {
  mode: "dev" | "prod";
}

export type ConfigArgs<C extends Config<C>> =
  | Config<C>
  | ((ctx: Context) => Config<C>);

export function config<C extends Config<C>>(config: ConfigArgs<C>) {
  if (typeof config === "function") {
    return config({ mode: "dev" });
  }
  return config;
}
