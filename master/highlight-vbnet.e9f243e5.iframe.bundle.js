(self.webpackChunk_jetbrains_ring_ui=self.webpackChunk_jetbrains_ring_ui||[]).push([[2908],{86479:module=>{function source(re){return re?"string"==typeof re?re:re.source:null}function concat(...args){return args.map((x=>source(x))).join("")}function either(...args){return"("+args.map((x=>source(x))).join("|")+")"}module.exports=function vbnet(hljs){const MM_DD_YYYY=/\d{1,2}\/\d{1,2}\/\d{4}/,YYYY_MM_DD=/\d{4}-\d{1,2}-\d{1,2}/,TIME_12H=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,TIME_24H=/\d{1,2}(:\d{1,2}){1,2}/,DATE={className:"literal",variants:[{begin:concat(/# */,either(YYYY_MM_DD,MM_DD_YYYY),/ *#/)},{begin:concat(/# */,TIME_24H,/ *#/)},{begin:concat(/# */,TIME_12H,/ *#/)},{begin:concat(/# */,either(YYYY_MM_DD,MM_DD_YYYY),/ +/,either(TIME_12H,TIME_24H),/ *#/)}]},DOC_COMMENT=hljs.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]}),COMMENT=hljs.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]});return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,classNameAliases:{label:"symbol"},keywords:{keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",literal:"true false nothing"},illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[{className:"string",begin:/"(""|[^/n])"C\b/},{className:"string",begin:/"/,end:/"/,illegal:/\n/,contains:[{begin:/""/}]},DATE,{className:"number",relevance:0,variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/},{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},{className:"label",begin:/^\w+:/},DOC_COMMENT,COMMENT,{className:"meta",begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,end:/$/,keywords:{"meta-keyword":"const disable else elseif enable end externalsource if region then"},contains:[COMMENT]}]}}}}]);
//# sourceMappingURL=highlight-vbnet.e9f243e5.iframe.bundle.js.map