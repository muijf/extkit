import { type Plugin } from "@extkit/core";

export interface MonkitPlugin extends Plugin {
  readonly __package: "@extkit/monkit";
}

export function monkit(
  monkitPlugin: Omit<MonkitPlugin, "__package">
): MonkitPlugin {
  return {
    __package: "@extkit/monkit" as const,
    ...monkitPlugin,
  };
}
