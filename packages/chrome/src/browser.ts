import {
  type Browser,
  type BrowserFactory,
  type Config,
  type Plugin,
} from "@extkit/core";
import { type Manifest } from ".";

export interface ChromeBrowser<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends Browser<C, B, P> {
  readonly __package: "@extkit/chrome";

  manifest: Omit<Manifest<C, B, P>, "__core">;
}

export type ChromeBrowserFactory<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = BrowserFactory<ChromeBrowser<C, B, P>, C, P>;

export function chrome<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(
  chromeBrowser: Omit<ChromeBrowser<C, B, P>, "__package" | "__core">
): ChromeBrowserFactory<C, B, P> {
  return (config) => ({
    __package: "@extkit/chrome" as const,
    __core: { config },
    ...chromeBrowser,
  });
}
