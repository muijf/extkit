import { type Plugin } from "@extkit/core";

export interface MessagingPlugin extends Plugin {
  readonly __package: "@extkit/messaging";
}

export function messaging(
  messagingPlugin: Omit<MessagingPlugin, "__package">
): MessagingPlugin {
  return {
    __package: "@extkit/messaging" as const,
    ...messagingPlugin,
  };
}
