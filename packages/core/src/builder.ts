export type BuilderPackage = "@extkit/vite" | string;

export interface Builder {
  readonly __package: BuilderPackage;
}
