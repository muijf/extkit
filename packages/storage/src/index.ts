import { type Config, type Plugin, type PluginFactory } from "@extkit/core";

export interface StoragePlugin<C extends Config<C>> extends Plugin<C> {
  readonly __package: "@extkit/storage";
}

export type StoragePluginFactory<C extends Config<C>> = PluginFactory<
  StoragePlugin<C>,
  C
>;

export function storage<C extends Config<C>>(
  storagePlugin: Omit<StoragePlugin<C>, "__package" | "__core">
): StoragePluginFactory<C> {
  return (config) => ({
    __package: "@extkit/storage" as const,
    __core: { config },
    ...storagePlugin,
  });
}
