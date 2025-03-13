import {
  type Browser,
  type Config,
  type Plugin,
  type PluginFactory,
} from "@extkit/core";

export interface MonkitPlugin<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends Plugin<C, B, P> {
  readonly __package: "@extkit/monkit";
}

export type MonkitPluginFactory<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = PluginFactory<MonkitPlugin<C, B, P>, C, P>;

export function monkit<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(
  monkitPlugin: Omit<MonkitPlugin<C, B, P>, "__package" | "__core">
): MonkitPluginFactory<C, B, P> {
  return (config) => ({
    __package: "@extkit/monkit" as const,
    __core: { config },
    ...monkitPlugin,
  });
}
