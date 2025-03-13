import {
  type Browser,
  type Config,
  type Plugin,
  type PluginFactory,
} from "@extkit/core";

export interface ReactPlugin<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends Plugin<C, B, P> {
  readonly __package: "@extkit/react";
}

export type ReactPluginFactory<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = PluginFactory<ReactPlugin<C, B, P>, C, P>;

export function react<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(
  reactPlugin: Omit<ReactPlugin<C, B, P>, "__package" | "__core">
): ReactPluginFactory<C, B, P> {
  return (config) => ({
    __package: "@extkit/react" as const,
    __core: { config },
    ...reactPlugin,
  });
}
