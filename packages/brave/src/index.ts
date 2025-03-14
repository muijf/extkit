import type { Config } from "@extkit/core";

export interface ManifestV2<C extends Config>
  extends chrome.runtime.ManifestV2 {
  __core: {
    config: C;
  };
}

export interface ManifestV3<C extends Config>
  extends chrome.runtime.ManifestV3 {
  __core: {
    config: C;
  };
}

export type Manifest<C extends Config> = ManifestV2<C> | ManifestV3<C>;

export * from "./browser";
