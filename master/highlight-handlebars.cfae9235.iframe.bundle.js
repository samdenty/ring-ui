(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[4284],{83512:module=>{function source(re){return re?"string"==typeof re?re:re.source:null}function concat(...args){return args.map((x=>source(x))).join("")}module.exports=function handlebars(hljs){const BUILT_INS={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},BRACKET_QUOTED_ID_REGEX=/\[\]|\[[^\]]+\]/,PLAIN_ID_REGEX=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,ANY_ID=function either(...args){return"("+args.map((x=>source(x))).join("|")+")"}(/""|"[^"]+"/,/''|'[^']+'/,BRACKET_QUOTED_ID_REGEX,PLAIN_ID_REGEX),IDENTIFIER_REGEX=concat(function optional(re){return concat("(",re,")?")}(/\.|\.\/|\//),ANY_ID,function anyNumberOfTimes(re){return concat("(",re,")*")}(concat(/(\.|\/)/,ANY_ID))),HASH_PARAM_REGEX=concat("(",BRACKET_QUOTED_ID_REGEX,"|",PLAIN_ID_REGEX,")(?==)"),HELPER_NAME_OR_PATH_EXPRESSION={begin:IDENTIFIER_REGEX,lexemes:/[\w.\/]+/},HELPER_PARAMETER=hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION,{keywords:{literal:["true","false","undefined","null"]}}),SUB_EXPRESSION={begin:/\(/,end:/\)/},HASH={className:"attr",begin:HASH_PARAM_REGEX,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[hljs.NUMBER_MODE,hljs.QUOTE_STRING_MODE,hljs.APOS_STRING_MODE,HELPER_PARAMETER,SUB_EXPRESSION]}}},HELPER_PARAMETERS={contains:[hljs.NUMBER_MODE,hljs.QUOTE_STRING_MODE,hljs.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},HASH,HELPER_PARAMETER,SUB_EXPRESSION],returnEnd:!0},SUB_EXPRESSION_CONTENTS=hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION,{className:"name",keywords:BUILT_INS,starts:hljs.inherit(HELPER_PARAMETERS,{end:/\)/})});SUB_EXPRESSION.contains=[SUB_EXPRESSION_CONTENTS];const OPENING_BLOCK_MUSTACHE_CONTENTS=hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION,{keywords:BUILT_INS,className:"name",starts:hljs.inherit(HELPER_PARAMETERS,{end:/\}\}/})}),CLOSING_BLOCK_MUSTACHE_CONTENTS=hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION,{keywords:BUILT_INS,className:"name"}),BASIC_MUSTACHE_CONTENTS=hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION,{className:"name",keywords:BUILT_INS,starts:hljs.inherit(HELPER_PARAMETERS,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},hljs.COMMENT(/\{\{!--/,/--\}\}/),hljs.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[OPENING_BLOCK_MUSTACHE_CONTENTS],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[CLOSING_BLOCK_MUSTACHE_CONTENTS]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[OPENING_BLOCK_MUSTACHE_CONTENTS]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[CLOSING_BLOCK_MUSTACHE_CONTENTS]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[BASIC_MUSTACHE_CONTENTS]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[BASIC_MUSTACHE_CONTENTS]}]}}}}]);
//# sourceMappingURL=highlight-handlebars.cfae9235.iframe.bundle.js.map