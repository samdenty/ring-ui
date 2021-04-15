(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[1534],{23874:module=>{const TAGS=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],MEDIA_FEATURES=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],PSEUDO_CLASSES=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],PSEUDO_ELEMENTS=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],ATTRIBUTES=["align-content","align-items","align-self","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","auto","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","clip-path","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-variant","font-variant-ligatures","font-variation-settings","font-weight","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inherit","initial","justify-content","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","max-height","max-width","min-height","min-width","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","perspective","perspective-origin","pointer-events","position","quotes","resize","right","src","tab-size","table-layout","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","white-space","widows","width","word-break","word-spacing","word-wrap","z-index"].reverse(),PSEUDO_SELECTORS=PSEUDO_CLASSES.concat(PSEUDO_ELEMENTS);module.exports=function less(hljs){const modes=(hljs=>({IMPORTANT:{className:"meta",begin:"!important"},HEXCOLOR:{className:"number",begin:"#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"},ATTRIBUTE_SELECTOR_MODE:{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE]}}))(hljs),PSEUDO_SELECTORS$1=PSEUDO_SELECTORS,RULES=[],VALUE_MODES=[],STRING_MODE=function(c){return{className:"string",begin:"~?"+c+".*?"+c}},IDENT_MODE=function(name,begin,relevance){return{className:name,begin,relevance}},AT_KEYWORDS={$pattern:/[a-z-]+/,keyword:"and or not only",attribute:MEDIA_FEATURES.join(" ")},PARENS_MODE={begin:"\\(",end:"\\)",contains:VALUE_MODES,keywords:AT_KEYWORDS,relevance:0};VALUE_MODES.push(hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,STRING_MODE("'"),STRING_MODE('"'),hljs.CSS_NUMBER_MODE,{begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",excludeEnd:!0}},modes.HEXCOLOR,PARENS_MODE,IDENT_MODE("variable","@@?[\\w-]+",10),IDENT_MODE("variable","@\\{[\\w-]+\\}"),IDENT_MODE("built_in","~?`[^`]*?`"),{className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0},modes.IMPORTANT);const VALUE_WITH_RULESETS=VALUE_MODES.concat({begin:/\{/,end:/\}/,contains:RULES}),MIXIN_GUARD_MODE={beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"}].concat(VALUE_MODES)},RULE_MODE={begin:"([\\w-]+|@\\{[\\w-]+\\})\\s*:",returnBegin:!0,end:/[;}]/,relevance:0,contains:[{begin:/-(webkit|moz|ms|o)-/},{className:"attribute",begin:"\\b("+ATTRIBUTES.join("|")+")\\b",end:/(?=:)/,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:VALUE_MODES}}]},AT_RULE_MODE={className:"keyword",begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{end:"[;{}]",keywords:AT_KEYWORDS,returnEnd:!0,contains:VALUE_MODES,relevance:0}},VAR_RULE_MODE={className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:VALUE_WITH_RULESETS}},SELECTOR_MODE={variants:[{begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:"([\\w-]+|@\\{[\\w-]+\\})",end:/\{/}],returnBegin:!0,returnEnd:!0,illegal:"[<='$\"]",relevance:0,contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,MIXIN_GUARD_MODE,IDENT_MODE("keyword","all\\b"),IDENT_MODE("variable","@\\{[\\w-]+\\}"),{begin:"\\b("+TAGS.join("|")+")\\b",className:"selector-tag"},IDENT_MODE("selector-tag","([\\w-]+|@\\{[\\w-]+\\})%?",0),IDENT_MODE("selector-id","#([\\w-]+|@\\{[\\w-]+\\})"),IDENT_MODE("selector-class","\\.([\\w-]+|@\\{[\\w-]+\\})",0),IDENT_MODE("selector-tag","&",0),modes.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",begin:":("+PSEUDO_CLASSES.join("|")+")"},{className:"selector-pseudo",begin:"::("+PSEUDO_ELEMENTS.join("|")+")"},{begin:"\\(",end:"\\)",contains:VALUE_WITH_RULESETS},{begin:"!important"}]},PSEUDO_SELECTOR_MODE={begin:`[\\w-]+:(:)?(${PSEUDO_SELECTORS$1.join("|")})`,returnBegin:!0,contains:[SELECTOR_MODE]};return RULES.push(hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,AT_RULE_MODE,VAR_RULE_MODE,PSEUDO_SELECTOR_MODE,RULE_MODE,SELECTOR_MODE),{name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:RULES}}}}]);
//# sourceMappingURL=highlight-less.4568828f.iframe.bundle.js.map