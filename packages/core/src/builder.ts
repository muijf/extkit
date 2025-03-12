import type { Config } from ".";

export type BuilderPackage = "@extkit/vite" | string;

export interface Builder<C extends Config<C>> {
  readonly __package: BuilderPackage;

  readonly __core: {
    config: C;
  };
}

export type BuilderFactory<B extends Builder<C>, C extends Config<C>> = (
  config: C
) => B;
