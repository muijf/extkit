import { type Plugin } from "@extkit/core";

export interface TailwindPlugin extends Plugin {
  readonly __package: "@extkit/tailwind";
}

export function tailwind(tailwindPlugin: Omit<TailwindPlugin, "__package">) {
  return {
    __package: "@extkit/tailwind" as const,
    ...tailwindPlugin,
  };
}
