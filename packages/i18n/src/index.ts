import { type Plugin } from "@extkit/core";

export interface I18nPlugin extends Plugin {
  readonly __package: "@extkit/i18n";
}

export function i18n(i18nPlugin: Omit<I18nPlugin, "__package">): I18nPlugin {
  return {
    __package: "@extkit/i18n" as const,
    ...i18nPlugin,
  };
}
