import { type Browser, type BrowserFactory, type Config } from "@extkit/core";
import { type Manifest } from ".";

export interface OperaBrowser<C extends Config<C>> extends Browser<C> {
  readonly __package: "@extkit/opera";

  manifest: Manifest<C>;
}

export type OperaBrowserFactory<C extends Config<C>> = BrowserFactory<
  OperaBrowser<C>,
  C
>;

export function opera<C extends Config<C>>(
  operaBrowser: Omit<OperaBrowser<C>, "__package" | "__core">
): OperaBrowserFactory<C> {
  return (config) => ({
    __package: "@extkit/opera" as const,
    __core: { config },
    ...operaBrowser,
  });
}
