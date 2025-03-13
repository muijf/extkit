import {
  type Browser,
  type BrowserFactory,
  type Config,
  type Plugin,
} from "@extkit/core";
import { type Manifest } from ".";

export interface SafariBrowser<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends Browser<C, B, P> {
  readonly __package: "@extkit/safari";

  manifest: Manifest;
}

export type SafariBrowserFactory<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = BrowserFactory<SafariBrowser<C, B, P>, C, P>;

export function safari<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(
  safariBrowser: Omit<SafariBrowser<C, B, P>, "__package" | "__core">
): SafariBrowserFactory<C, B, P> {
  return (config) => ({
    __package: "@extkit/safari" as const,
    __core: { config },
    ...safariBrowser,
  });
}
