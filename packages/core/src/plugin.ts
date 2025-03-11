export type PluginPackage = "@extkit/tailwind" | "@extkit/react" | string;

export interface Plugin {
  readonly __package: PluginPackage;
}
