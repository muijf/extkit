import type { OneOrArray, OneOrNonEmptyArray } from "@extkit/utils";
import type { Browser, BrowserFactory } from "./browser";
import type { Plugin, PluginFactory } from "./plugin";
import type { Builder, BuilderFactory } from "./builder";

export interface Config<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> {
  builder: BuilderFactory<Builder<C, B, P>, C, P>;
  browsers: OneOrNonEmptyArray<BrowserFactory<B, C, P>>;
  plugins?: OneOrArray<PluginFactory<P, C, B>>;
}

export interface Context {
  mode: "dev" | "prod";
}

export type ConfigArgs<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = C | ((ctx: Context) => C);

export function config<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(config: ConfigArgs<C, B, P>): C {
  if (typeof config === "function") {
    return config({ mode: "dev" });
  }
  return config;
}
