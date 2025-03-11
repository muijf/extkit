import { type Browser } from "@extkit/core";
import { type Manifest } from ".";

export interface BraveBrowser extends Browser {
  readonly __package: "@extkit/brave";

  manifest: Manifest;
}

export function brave(braveBrowser: Omit<BraveBrowser, "__package">) {
  return {
    __package: "@extkit/brave",
    ...braveBrowser,
  };
}
