import { type Browser, type BrowserFactory, type Config } from "@extkit/core";
import { type Manifest } from ".";

export interface FirefoxBrowser<C extends Config<C>> extends Browser<C> {
  readonly __package: "@extkit/firefox";

  manifest: Manifest<C>;
}

export type FirefoxBrowserFactory<C extends Config<C>> = BrowserFactory<
  FirefoxBrowser<C>,
  C
>;

export function firefox<C extends Config<C>>(
  firefoxBrowser: Omit<FirefoxBrowser<C>, "__package" | "__core">
): FirefoxBrowserFactory<C> {
  return (config) => ({
    __package: "@extkit/firefox" as const,
    __core: { config },
    ...firefoxBrowser,
  });
}
