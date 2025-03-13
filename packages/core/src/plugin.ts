import type { Config, Browser } from ".";

export type PluginPackage =
  | "@extkit/tailwind"
  | "@extkit/react"
  | "@extkit/storage"
  | "@extkit/i18n"
  | "@extkit/messaging"
  | "@extkit/monkit"
  | string;

export interface Plugin<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> {
  readonly __package: PluginPackage;

  readonly __core: {
    config: C;
  };
}

export type PluginFactory<
  P extends Plugin<C, B, P>,
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>
> = (config: C) => P;
