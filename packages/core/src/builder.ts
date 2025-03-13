import type { Config, Browser, Plugin } from ".";

export type BuilderPackage = "@extkit/vite" | string;

export interface Builder<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> {
  readonly __package: BuilderPackage;

  readonly __core: {
    config: C;
  };
}

export type BuilderFactory<
  B extends Builder<C, B, P>,
  C extends Config<C, B, P>,
  P extends Plugin<C, B, P>
> = (config: C) => B;
