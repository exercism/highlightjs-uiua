/*
Language: Uiua
Description: A compact stack- and array-programming language
Category: scripting
Author: @erikschierboom
Maintainer: @erikschierbom
Website: https://www.uiua.org/
*/

import { type HLJSApi, type Language, type Mode } from "highlight.js";

export default function (hljs: HLJSApi): Language {
  const regex = hljs.regex;

  // TODO: get keywords
  const KEYWORDS: string[] = [];

  const COMMENT = hljs.HASH_COMMENT_MODE;

  const NUMBER: Mode = {
    scope: "number",
    relevance: 0,
    variants: [
      { begin: /¯?\d+[eE][-+]?\d+/ }, // exponent notation
      { begin: /¯?\d+\/\d+/ }, // fraction
      { begin: /¯?\d+(\.\d+)?/ }, // decimal,
      { begin: /[ηπτ∞]/ }, // special numbers
    ],
  };

  return {
    name: "Uiua",
    keywords: KEYWORDS,
    contains: [COMMENT, NUMBER],
  };
}
