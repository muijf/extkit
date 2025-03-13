import {
  type Browser,
  type Config,
  type Plugin,
  type PluginFactory,
} from "@extkit/core";

export interface TailwindPlugin<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends Plugin<C, B, P> {
  readonly __package: "@extkit/tailwind";
}

export type TailwindPluginFactory<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = PluginFactory<TailwindPlugin<C, B, P>, C, P>;

export function tailwind<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(
  tailwindPlugin: Omit<TailwindPlugin<C, B, P>, "__package" | "__core">
): TailwindPluginFactory<C, B, P> {
  return (config) => ({
    __package: "@extkit/tailwind" as const,
    __core: { config },
    ...tailwindPlugin,
  });
}
