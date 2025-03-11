import { type Builder } from "@extkit/core";

export interface ViteBuilder extends Builder {
  readonly __package: "@extkit/vite";
}

export function vite(viteBuilder: Omit<ViteBuilder, "__package">): ViteBuilder {
  return {
    __package: "@extkit/vite" as const,
    ...viteBuilder,
  };
}
