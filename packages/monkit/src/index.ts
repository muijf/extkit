import { type Config, type Plugin, type PluginFactory } from "@extkit/core";

export interface MonkitPlugin<C extends Config<C>> extends Plugin<C> {
  readonly __package: "@extkit/monkit";
}

export type MonkitPluginFactory<C extends Config<C>> = PluginFactory<
  MonkitPlugin<C>,
  C
>;

export function monkit<C extends Config<C>>(
  monkitPlugin: Omit<MonkitPlugin<C>, "__package" | "__core">
): MonkitPluginFactory<C> {
  return (config) => ({
    __package: "@extkit/monkit" as const,
    __core: { config },
    ...monkitPlugin,
  });
}
