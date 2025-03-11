import { type Browser } from "@extkit/core";
import { type Manifest } from ".";

export interface ChromeBrowser extends Browser {
  readonly __package: "@extkit/chrome";

  manifest: Manifest;
}

export function chrome(
  chromeBrowser: Omit<ChromeBrowser, "__package">
): ChromeBrowser {
  return {
    __package: "@extkit/chrome" as const,
    ...chromeBrowser,
  };
}
