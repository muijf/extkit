import type { Config, Browser, Plugin } from "@extkit/core";

export interface ManifestV2<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends chrome.runtime.ManifestV2 {}

export interface ManifestV3<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends chrome.runtime.ManifestV3 {
  action: {
    default_popup: C["plugins"] extends (infer P)[]
      ? P extends { __package: "@extkit/react" }
        ? string | number
        : string
      : string;
  };
}

export type Manifest<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = ManifestV2<C, B, P> | ManifestV3<C, B, P>;

export * from "./browser";
