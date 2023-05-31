export enum PointerType {
  mouse = 0,
  pen = 1,
  touch = 2,
}

/**
 * Converts keyboard input -> a number that can be stored in the ECS
 * There is probably a better way to do this lol
 */
export enum Key {
  // 0-9 are the numbers 0-9

  // 10-35 are the letters a-z (lowercase and uppercase)
  a = 10,
  b = 11,
  c = 12,
  d = 13,
  e = 14,
  f = 15,
  g = 16,
  h = 17,
  i = 18,
  j = 19,
  k = 20,
  l = 21,
  m = 22,
  n = 23,
  o = 24,
  p = 25,
  q = 26,
  r = 27,
  s = 28,
  t = 29,
  u = 30,
  v = 31,
  w = 32,
  x = 33,
  y = 34,
  z = 35,

  A = 10,
  B = 11,
  C = 12,
  D = 13,
  E = 14,
  F = 15,
  G = 16,
  H = 17,
  I = 18,
  J = 19,
  K = 20,
  L = 21,
  M = 22,
  N = 23,
  O = 24,
  P = 25,
  Q = 26,
  R = 27,
  S = 28,
  T = 29,
  U = 30,
  V = 31,
  W = 32,
  X = 33,
  Y = 34,
  Z = 35,

  // 36-56 are special keys
  Backspace = 36,
  Tab = 37,
  Enter = 38,
  Shift = 39,
  Control = 40,
  Alt = 41,
  Meta = 42,
  Pause = 43,
  CapsLock = 44,
  Escape = 45,
  Space = 46,
  " " = 46,
  PageUp = 47,
  PageDown = 48,
  End = 49,
  Home = 50,
  ArrowLeft = 51,
  ArrowUp = 52,
  ArrowRight = 53,
  ArrowDown = 54,
  Insert = 55,
  Delete = 56,

  // Unsupported key
  Unknown = 57,
}

export const NUM_KEYS = 58;
