import { type Browser, type BrowserFactory, type Config } from "@extkit/core";
import { type Manifest } from ".";

export interface ChromeBrowser<C extends Config<C>> extends Browser<C> {
  readonly __package: "@extkit/chrome";

  manifest: Omit<Manifest<C>, "__core">;
}

export type ChromeBrowserFactory<C extends Config<C>> = BrowserFactory<
  ChromeBrowser<C>,
  C
>;

export function chrome<C extends Config<C>>(
  chromeBrowser: Omit<ChromeBrowser<C>, "__package" | "__core">
): ChromeBrowserFactory<C> {
  return (config) => ({
    __package: "@extkit/chrome" as const,
    __core: { config },
    ...chromeBrowser,
  });
}
