// pipe/tap operators like the rust tap crate :)

// deno-lint-ignore-file no-explicit-any

function tap<T>(this: T, f: (value: T) => any): T {
  f(this);
  return this;
}

function pipe<T, R>(this: T, f: (value: T) => R): R {
  return f(this);
}

declare global {
  interface Object {
    tap<T>(this: T, f: (value: T) => any): T;
    pipe<T, R>(this: T, f: (value: T) => R): R;
  }
}

Object.defineProperty(Object.prototype, "tap", { get(){return tap;}, set(){}, enumerable: false });
Object.defineProperty(Object.prototype, "pipe", { get(){return pipe;}, set(){}, enumerable: false });
