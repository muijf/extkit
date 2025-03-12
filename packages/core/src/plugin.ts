import type { Config } from ".";

export type PluginPackage =
  | "@extkit/tailwind"
  | "@extkit/react"
  | "@extkit/storage"
  | "@extkit/i18n"
  | "@extkit/messaging"
  | "@extkit/monkit"
  | string;

export interface Plugin<C extends Config<C>> {
  readonly __package: PluginPackage;

  readonly __core: {
    config: C;
  };
}

export type PluginFactory<P extends Plugin<C>, C extends Config<C>> = (
  config: C
) => P;
