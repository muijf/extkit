import { type Config, type Plugin, type PluginFactory } from "@extkit/core";

export interface ReactPlugin<C extends Config<C>> extends Plugin<C> {
  readonly __package: "@extkit/react";
}

export type ReactPluginFactory<C extends Config<C>> = PluginFactory<
  ReactPlugin<C>,
  C
>;

export function react<C extends Config<C>>(
  reactPlugin: Omit<ReactPlugin<C>, "__package" | "__core">
): ReactPluginFactory<C> {
  return (config) => ({
    __package: "@extkit/react" as const,
    __core: { config },
    ...reactPlugin,
  });
}
