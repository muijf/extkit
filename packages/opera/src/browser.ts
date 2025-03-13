import {
  type Browser,
  type BrowserFactory,
  type Config,
  type Plugin,
} from "@extkit/core";
import { type Manifest } from ".";

export interface OperaBrowser<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends Browser<C, B, P> {
  readonly __package: "@extkit/opera";

  manifest: Manifest<C>;
}

export type OperaBrowserFactory<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = BrowserFactory<OperaBrowser<C, B, P>, C, P>;

export function opera<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(
  operaBrowser: Omit<OperaBrowser<C, B, P>, "__package" | "__core">
): OperaBrowserFactory<C, B, P> {
  return (config) => ({
    __package: "@extkit/opera" as const,
    __core: { config },
    ...operaBrowser,
  });
}
