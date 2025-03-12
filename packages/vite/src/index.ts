import { type Builder, type BuilderFactory, type Config } from "@extkit/core";

export interface ViteBuilder<C extends Config<C>> extends Builder<C> {
  readonly __package: "@extkit/vite";
}

export type ViteBuilderFactory<C extends Config<C>> = BuilderFactory<
  ViteBuilder<C>,
  C
>;

export function vite<C extends Config<C>>(
  viteBuilder: Omit<ViteBuilder<C>, "__package" | "__core">
): ViteBuilderFactory<C> {
  return (config) => ({
    __package: "@extkit/vite" as const,
    __core: { config },
    ...viteBuilder,
  });
}
