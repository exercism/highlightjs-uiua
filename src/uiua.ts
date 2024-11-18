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
  const BUILT_IN: Mode = {
    scope: "built_in",
    match:
      /[◠⌵+⌝’⍤∠˜◡⋯∩□⊓⊸⍩⌈⑄⊛ℂ◇⊟◴∂♭⊙÷⍢↘.∵=⍖⬚⌕⊢¤:⌊∧⊃⋅≥>⊕∘⊗∫⍚⊂▽⊣⧻≤<ₙ⦷≍↥∊∈↧◿×¯¬≠⌅⤚⟜⤸⋕⊜⊡◌ⁿ⚂⇡/⍥☇↯⇌⍏↻⁅≡\\⊏△±∿⍆√?-⨬⊞↙⸮⍉◹⍣⧅°⍜◰⊚◫⤙]/,
    relevance: 1,
  };

  const COMMENT: Mode = hljs.HASH_COMMENT_MODE;

  const NUMBER: Mode = {
    scope: "number",
    relevance: 0,
    variants: [
      { begin: /¯?\d+[eE][-+]?\d+/ }, // exponent notation
      { begin: /¯?\d+\/¯?\d+/ }, // fraction
      { begin: /¯?\d+(\.\d+)?/ }, // decimal,
      { begin: /[ηπτ∞]/ }, // special numbers
    ],
  };

  const CHARACTER: Mode = {
    scope: "string",
    relevance: 2,
    variants: [
      { match: /@\\x[a-zA-Z0-9]{2}/ },
      { match: /@\\u\{[a-zA-Z0-9]+\}/ },
      { match: /@\\u[a-zA-Z0-9]{4}/ },
      { match: /@\\[0snrtbfv\\]/ },
      { match: /@./ },
    ],
  };

  return {
    name: "Uiua",
    contains: [CHARACTER, NUMBER, BUILT_IN, COMMENT],
  };
}
