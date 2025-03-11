import { type Browser } from "@extkit/core";
import { type Manifest } from ".";

export interface OperaBrowser extends Browser {
  readonly __package: "@extkit/opera";

  manifest: Manifest;
}

export function opera(operaBrowser: Omit<OperaBrowser, "__package">) {
  return {
    __package: "@extkit/opera",
    ...operaBrowser,
  };
}
