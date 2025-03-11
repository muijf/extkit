export interface Config {
  browsers: Omit<Browser, "__package">[];
}

export type BrowserPackage =
  | "@extkit/chrome"
  | "@extkit/firefox"
  | "@extkit/brave"
  | "@extkit/opera"
  | "@extkit/safari";

export interface Browser {
  readonly __package: BrowserPackage;
}

export interface Context {
  mode: "development" | "production";
}

export function defineConfig(config: Config | ((ctx: Context) => Config)) {
  return config;
}
