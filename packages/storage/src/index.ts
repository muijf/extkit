import {
  type Browser,
  type Config,
  type Plugin,
  type PluginFactory,
} from "@extkit/core";

export interface StoragePlugin<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends Plugin<C, B, P> {
  readonly __package: "@extkit/storage";
}

export type StoragePluginFactory<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = PluginFactory<StoragePlugin<C, B, P>, C, P>;

export function storage<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(
  storagePlugin: Omit<StoragePlugin<C, B, P>, "__package" | "__core">
): StoragePluginFactory<C, B, P> {
  return (config) => ({
    __package: "@extkit/storage" as const,
    __core: { config },
    ...storagePlugin,
  });
}
