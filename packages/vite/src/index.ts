import {
  type Browser,
  type Builder,
  type BuilderFactory,
  type Config,
  type Plugin,
} from "@extkit/core";

export interface ViteBuilder<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends Builder<C, B, P> {
  readonly __package: "@extkit/vite";
}

export type ViteBuilderFactory<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = BuilderFactory<ViteBuilder<C, B, P>, C, P>;

export function vite<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(
  viteBuilder: Omit<ViteBuilder<C, B, P>, "__package" | "__core">
): ViteBuilderFactory<C, B, P> {
  return (config) => ({
    __package: "@extkit/vite" as const,
    __core: { config },
    ...viteBuilder,
  });
}
