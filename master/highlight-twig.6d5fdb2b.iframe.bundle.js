(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[866],{35488:module=>{module.exports=function twig(hljs){var FUNCTION_NAMES="attribute block constant cycle date dump include max min parent random range source template_from_string",FUNCTIONS={beginKeywords:FUNCTION_NAMES,keywords:{name:FUNCTION_NAMES},relevance:0,contains:[{className:"params",begin:"\\(",end:"\\)"}]},FILTER={begin:/\|[A-Za-z_]+:?/,keywords:"abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode",contains:[FUNCTIONS]},TAGS="apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with";return TAGS=TAGS+" "+TAGS.split(" ").map((function(t){return"end"+t})).join(" "),{name:"Twig",aliases:["craftcms"],case_insensitive:!0,subLanguage:"xml",contains:[hljs.COMMENT(/\{#/,/#\}/),{className:"template-tag",begin:/\{%/,end:/%\}/,contains:[{className:"name",begin:/\w+/,keywords:TAGS,starts:{endsWithParent:!0,contains:[FILTER,FUNCTIONS],relevance:0}}]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:["self",FILTER,FUNCTIONS]}]}}}}]);
//# sourceMappingURL=highlight-twig.6d5fdb2b.iframe.bundle.js.map