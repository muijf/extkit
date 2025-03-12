import { type Config, type Plugin, type PluginFactory } from "@extkit/core";

export interface MessagingPlugin<C extends Config<C>> extends Plugin<C> {
  readonly __package: "@extkit/messaging";
}

export type MessagingPluginFactory<C extends Config<C>> = PluginFactory<
  MessagingPlugin<C>,
  C
>;

export function messaging<C extends Config<C>>(
  messagingPlugin: Omit<MessagingPlugin<C>, "__package" | "__core">
): MessagingPluginFactory<C> {
  return (config) => ({
    __package: "@extkit/messaging" as const,
    __core: { config },
    ...messagingPlugin,
  });
}
