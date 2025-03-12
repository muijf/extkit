import type { Config } from ".";

export type BrowserPackage =
  | "@extkit/chrome"
  | "@extkit/firefox"
  | "@extkit/brave"
  | "@extkit/opera"
  | "@extkit/safari"
  | string;

export interface Browser<C extends Config<C>> {
  readonly __package: BrowserPackage;

  readonly __core: {
    config: C;
  };
}

export type BrowserFactory<B extends Browser<C>, C extends Config<C>> = (
  config: C
) => B;
