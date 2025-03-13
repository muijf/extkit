import {
  type Browser,
  type BrowserFactory,
  type Config,
  type Plugin,
} from "@extkit/core";
import { type Manifest } from ".";

export interface FirefoxBrowser<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends Browser<C, B, P> {
  readonly __package: "@extkit/firefox";

  manifest: Manifest<C, B, P>;
}

export type FirefoxBrowserFactory<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = BrowserFactory<FirefoxBrowser<C, B, P>, C, P>;

export function firefox<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(
  firefoxBrowser: Omit<FirefoxBrowser<C, B, P>, "__package" | "__core">
): FirefoxBrowserFactory<C, B, P> {
  return (config) => ({
    __package: "@extkit/firefox" as const,
    __core: { config },
    ...firefoxBrowser,
  });
}
