import type { Config, Plugin } from ".";

export type BrowserPackage =
  | "@extkit/chrome"
  | "@extkit/firefox"
  | "@extkit/brave"
  | "@extkit/opera"
  | "@extkit/safari"
  | string;

export interface Browser<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> {
  readonly __package: BrowserPackage;

  readonly __core: {
    config: C;
  };
}

export type BrowserFactory<
  B extends Browser<C, B, P>,
  C extends Config<C, B, P>,
  P extends Plugin<C, B, P>
> = (config: C) => B;
