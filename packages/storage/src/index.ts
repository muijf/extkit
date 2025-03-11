import { type Plugin } from "@extkit/core";

export interface StoragePlugin extends Plugin {
  readonly __package: "@extkit/storage";
}

export function storage(
  storagePlugin: Omit<StoragePlugin, "__package">
): StoragePlugin {
  return {
    __package: "@extkit/storage" as const,
    ...storagePlugin,
  };
}
