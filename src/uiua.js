function s(e){const t={scope:"built_in",match:/[◠⌵+⌝’⍤∠˜◡⋯∩□⊓⊸⍩⌈⑄⊛ℂ◇⊟◴∂♭⊙÷⍢↘.∵=⍖⬚⌕⊢¤:⌊∧⊃⋅≥>⊕∘⊗∫⍚⊂▽⊣⧻≤<ₙ⦷≍↥∊∈↧◿×¯¬≠⌅⤚⟜⤸⋕⊜⊡◌ⁿ⚂⇡/⍥☇↯⇌⍏↻⁅≡\\⊏△±∿⍆√?-⨬⊞↙⸮⍉◹⍣⧅°⍜◰⊚◫⤙]/,relevance:1},a=e.HASH_COMMENT_MODE,o={scope:"number",relevance:0,variants:[{begin:/¯?\d+[eE][-+]?\d+/},{begin:/¯?\d+\/¯?\d+/},{begin:/¯?\d+(\.\d+)?/},{begin:/[ηπτ∞]/}]},c={scope:"string",relevance:2,variants:[{match:/@\\x[a-zA-Z0-9]{2}/},{match:/@\\u\{[a-zA-Z0-9]+\}/},{match:/@\\u[a-zA-Z0-9]{4}/},{match:/@\\[0snrtbfv\\]/},{match:/@./}]},n={scope:"subst",match:"_"},i={scope:"string",variants:[{begin:/^\$\$ /,end:/$/,contains:[n]},{begin:/^\$ /,end:/$/},{begin:/\$"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE]}]};return{name:"Uiua",contains:[{scope:"meta",match:/\|\d+(\.\d+)?/},{scope:"punctuation",match:/[(){}]/},{scope:"punctuation",match:/[\[\]_]/},{scope:"title.function.invoke",match:/\b[a-zA-Z]+(__\d+)?/,relevance:10},i,c,o,t,a]}}export{s as default};
