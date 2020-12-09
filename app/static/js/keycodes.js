"use strict";

//TODO: Fix these mappings.

// Mappings of characters to codes that are shared among different keyboard
// layouts.
const commonKeyCodes = {
  "\t": "Tab",
  "\n": "Enter",
  " ": "Space",
  1: "Digit1",
  2: "Digit2",
  3: "Digit3",
  4: "Digit4",
  5: "Digit5",
  6: "Digit6",
  7: "Digit7",
  8: "Digit8",
  9: "Digit9",
  0: "Digit0",
  $: "Digit4",
  "!": "Digit1",
  "%": "Digit5",
  "^": "Digit6",
  "&": "Digit7",
  "*": "Digit8",
  "(": "Digit9",
  ")": "Digit0",
  _: "Minus",
  "-": "Minus",
  "+": "Equal",
  "=": "Equal",
  ":": "Semicolon",
  ";": "Semicolon",
  a: "KeyA",
  b: "KeyB",
  c: "KeyC",
  d: "KeyD",
  e: "KeyE",
  f: "KeyF",
  g: "KeyG",
  h: "KeyH",
  i: "KeyI",
  j: "KeyJ",
  k: "KeyK",
  l: "KeyL",
  m: "KeyM",
  n: "KeyN",
  o: "KeyO",
  p: "KeyP",
  q: "KeyQ",
  r: "KeyR",
  s: "KeyS",
  t: "KeyT",
  u: "KeyU",
  v: "KeyV",
  w: "KeyW",
  x: "KeyX",
  y: "KeyY",
  z: "KeyZ",
  ",": "Comma",
  "<": "Comma",
  ".": "Period",
  ">": "Period",
  "/": "Slash",
  "?": "Slash",
  "[": "BracketLeft",
  "{": "BracketLeft",
  "]": "BracketRight",
  "}": "BracketRight",
  "'": "Quote",
};

// Given a character and a browser language, finds the matching code.
export function findKeyCode(character, browserLanguage) {
  if (browserLanguage === "en-GB") {
    return findKeyCodeEnGb(character);
  }
  // Default to en-US if no other language matches.
  return findKeyCodeEnUs(character);
}

function joinDictionaries(a, b) {
  return Object.assign({}, a, b);
}

function findKeyCodeEnUs(character) {
  const usSpecificKeys = {
    "@": "Digit2",
    "#": "Digit3",
    "~": "Backquote",
    "`": "Backquote",
    "\\": "Backslash",
    "|": "Backslash",
    '"': "Quote",
  };
  const lookup = joinDictionaries(commonKeyCodes, usSpecificKeys);
  return lookup[character];
}

function findKeyCodeEnGb(character) {
  const gbSpecificKeys = {
    '"': "Digit2",
    "£": "Digit3",
    "\\": "IntlBackslash",
    "|": "IntlBackslash",
    "~": "Backslash",
    "#": "Backslash",
    "`": "Backquote",
    "¬": "Backquote",
    "@": "Quote",
  };
  const lookup = joinDictionaries(commonKeyCodes, gbSpecificKeys);
  return lookup[character];
}
