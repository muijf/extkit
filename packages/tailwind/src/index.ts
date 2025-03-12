import { type Config, type Plugin, type PluginFactory } from "@extkit/core";

export interface TailwindPlugin<C extends Config<C>> extends Plugin<C> {
  readonly __package: "@extkit/tailwind";
}

export type TailwindPluginFactory<C extends Config<C>> = PluginFactory<
  TailwindPlugin<C>,
  C
>;

export function tailwind<C extends Config<C>>(
  tailwindPlugin: Omit<TailwindPlugin<C>, "__package" | "__core">
): TailwindPluginFactory<C> {
  return (config) => ({
    __package: "@extkit/tailwind" as const,
    __core: { config },
    ...tailwindPlugin,
  });
}
