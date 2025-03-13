import {
  type Browser,
  type Config,
  type Plugin,
  type PluginFactory,
} from "@extkit/core";

export interface I18nPlugin<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> extends Plugin<C, B, P> {
  readonly __package: "@extkit/i18n";
}

export type I18nPluginFactory<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
> = PluginFactory<I18nPlugin<C, B, P>, C, P>;

export function i18n<
  C extends Config<C, B, P>,
  B extends Browser<C, B, P>,
  P extends Plugin<C, B, P>
>(
  i18nPlugin: Omit<I18nPlugin<C, B, P>, "__package" | "__core">
): I18nPluginFactory<C, B, P> {
  return (config) => ({
    __package: "@extkit/i18n" as const,
    __core: { config },
    ...i18nPlugin,
  });
}
