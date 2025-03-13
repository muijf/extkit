import {
  type Browser,
  type Config,
  type Plugin,
  type PluginFactory,
} from "@extkit/core";

export interface MessagingPlugin<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends Plugin<C, B, P> {
  readonly __package: "@extkit/messaging";
}

export type MessagingPluginFactory<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = PluginFactory<MessagingPlugin<C, B, P>, C, P>;

export function messaging<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(
  messagingPlugin: Omit<MessagingPlugin<C, B, P>, "__package" | "__core">
): MessagingPluginFactory<C, B, P> {
  return (config) => ({
    __package: "@extkit/messaging" as const,
    __core: { config },
    ...messagingPlugin,
  });
}
