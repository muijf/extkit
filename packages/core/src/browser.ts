export type BrowserPackage =
  | "@extkit/chrome"
  | "@extkit/firefox"
  | "@extkit/brave"
  | "@extkit/opera"
  | "@extkit/safari"
  | string;

export interface Browser {
  readonly __package: BrowserPackage;
}
