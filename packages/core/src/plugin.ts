export type PluginPackage =
  | "@extkit/tailwind"
  | "@extkit/react"
  | "@extkit/storage"
  | "@extkit/i18n"
  | "@extkit/messaging"
  | "@extkit/monkit"
  | string;

export interface Plugin {
  readonly __package: PluginPackage;
}
