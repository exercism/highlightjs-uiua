/*
Language: Uiua
Description: A compact stack- and array-programming language
Category: scripting
Author: @erikschierboom
Maintainer: @erikschierbom
Website: https://www.uiua.org/
*/

import { type HLJSApi, type Language } from "highlight.js";

export default function (hljs: HLJSApi): Language {
  const regex = hljs.regex;

  const KEYWORDS = [
    "true",
    "false",
    "maybe",
    "null",
    "epsilon",
    "infinite",
    "pi",
    "path",
    "arg",
    "args",
    "config",
    "script",
  ];

  const IDENTIFIER_RE = "[a-zA-Z_][a-zA-Z0-9_]*\\w?";

  const STRING = {
    // TODO: multiline strings
    variants: [hljs.QUOTE_STRING_MODE],
  };

  const COMMENT = hljs.HASH_COMMENT_MODE;

  const COLOR = {
    className: "number",
    match: "#([a-fA-F0-9]{6}|\\w+)",
  };

  const VERSION = {
    className: "number",
    match: /[0-9]\.[0-9]\.[0-9]([\w-+]+)?/,
  };

  const NUMBER = {
    variants: [VERSION, COLOR, hljs.C_NUMBER_MODE],
  };

  const SYMBOL = {
    className: "symbol",
    match: regex.concat("'", IDENTIFIER_RE),
  };

  return {
    name: "Uiua",
    keywords: KEYWORDS,
    contains: [],
  };
}
