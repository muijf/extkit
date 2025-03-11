import { type Browser } from "@extkit/core";
import { type Manifest } from ".";

export interface FirefoxBrowser extends Browser {
  readonly __package: "@extkit/firefox";

  manifest: Manifest;
}

export function firefox(firefoxBrowser: Omit<FirefoxBrowser, "__package">) {
  return {
    __package: "@extkit/firefox",
    ...firefoxBrowser,
  };
}
