import { type Browser } from "@extkit/core";
import { type Manifest } from ".";

export interface SafariBrowser extends Browser {
  readonly __package: "@extkit/safari";

  manifest: Manifest;
}

export function safari(
  safariBrowser: Omit<SafariBrowser, "__package">
): SafariBrowser {
  return {
    __package: "@extkit/safari" as const,
    ...safariBrowser,
  };
}
