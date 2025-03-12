import { type Browser, type BrowserFactory, type Config } from "@extkit/core";
import { type Manifest } from ".";

export interface BraveBrowser<C extends Config<C>> extends Browser<C> {
  readonly __package: "@extkit/brave";

  manifest: Manifest<C>;
}

export type BraveBrowserFactory<C extends Config<C>> = BrowserFactory<
  BraveBrowser<C>,
  C
>;

export function brave<C extends Config<C>>(
  braveBrowser: Omit<BraveBrowser<C>, "__package" | "__core">
): BraveBrowserFactory<C> {
  return (config) => ({
    __package: "@extkit/brave" as const,
    __core: { config },
    ...braveBrowser,
  });
}
