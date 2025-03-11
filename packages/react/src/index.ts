import { type Plugin } from "@extkit/core";

export interface ReactPlugin extends Plugin {
  readonly __package: "@extkit/react";
}

export function react(
  reactPlugin: Omit<ReactPlugin, "__package">
): ReactPlugin {
  return {
    __package: "@extkit/react" as const,
    ...reactPlugin,
  };
}
