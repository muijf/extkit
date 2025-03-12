import { type Config, type Plugin, type PluginFactory } from "@extkit/core";

export interface I18nPlugin<C extends Config<C>> extends Plugin<C> {
  readonly __package: "@extkit/i18n";
}

export type I18nPluginFactory<C extends Config<C>> = PluginFactory<
  I18nPlugin<C>,
  C
>;

export function i18n<C extends Config<C>>(
  i18nPlugin: Omit<I18nPlugin<C>, "__package" | "__core">
): I18nPluginFactory<C> {
  return (config) => ({
    __package: "@extkit/i18n" as const,
    __core: { config },
    ...i18nPlugin,
  });
}
