import { type Browser, type BrowserFactory, type Config } from "@extkit/core";
import { type Manifest } from ".";

export interface SafariBrowser<C extends Config<C>> extends Browser<C> {
  readonly __package: "@extkit/safari";

  manifest: Manifest;
}

export type SafariBrowserFactory<C extends Config<C>> = BrowserFactory<
  SafariBrowser<C>,
  C
>;

export function safari<C extends Config<C>>(
  safariBrowser: Omit<SafariBrowser<C>, "__package" | "__core">
): SafariBrowserFactory<C> {
  return (config) => ({
    __package: "@extkit/safari" as const,
    __core: { config },
    ...safariBrowser,
  });
}
