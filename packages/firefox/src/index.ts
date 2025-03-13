import type { Browser, Config, Plugin } from "@extkit/core";

export interface ManifestV2<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends chrome.runtime.ManifestV2 {
  __core: {
    config: C;
  };
}

export interface ManifestV3<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends chrome.runtime.ManifestV3 {
  __core: {
    config: C;
  };
}

export type Manifest<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = ManifestV2<C, B, P> | ManifestV3<C, B, P>;
