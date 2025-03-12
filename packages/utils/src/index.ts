export type NonEmptyArray<T> = [T, ...T[]];
export type OneOrNonEmptyArray<T> = T | NonEmptyArray<T>;
export type OneOrArray<T> = T | T[];
