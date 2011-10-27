YUI.add("handlebars-compiler",function(e){
/*!
Handlebars.js - Copyright (C) 2011 Yehuda Katz
https://raw.github.com/wycats/handlebars.js/master/LICENSE
*/
var d=e.Handlebars;var a=(function(){var k={trace:function h(){},yy:{},symbols_:{"error":2,"root":3,"program":4,"EOF":5,"statements":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"OPEN_PARTIAL":24,"params":25,"hash":26,"param":27,"STRING":28,"INTEGER":29,"BOOLEAN":30,"hashSegments":31,"hashSegment":32,"ID":33,"EQUALS":34,"pathSegments":35,"SEP":36,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"STRING",29:"INTEGER",30:"BOOLEAN",33:"ID",34:"EQUALS",36:"SEP"},productions_:[0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[25,2],[25,1],[27,1],[27,1],[27,1],[27,1],[26,1],[31,2],[31,1],[32,3],[32,3],[32,3],[32,3],[21,1],[35,3],[35,1]],performAction:function g(l,o,p,s,r,n,q){var m=n.length-1;switch(r){case 1:return n[m-1];break;case 2:this.$=new s.ProgramNode(n[m-2],n[m]);break;case 3:this.$=new s.ProgramNode(n[m]);break;case 4:this.$=new s.ProgramNode([]);break;case 5:this.$=[n[m]];break;case 6:n[m-1].push(n[m]);this.$=n[m-1];break;case 7:this.$=new s.InverseNode(n[m-2],n[m-1],n[m]);break;case 8:this.$=new s.BlockNode(n[m-2],n[m-1],n[m]);break;case 9:this.$=n[m];break;case 10:this.$=n[m];break;case 11:this.$=new s.ContentNode(n[m]);break;case 12:this.$=new s.CommentNode(n[m]);break;case 13:this.$=new s.MustacheNode(n[m-1][0],n[m-1][1]);break;case 14:this.$=new s.MustacheNode(n[m-1][0],n[m-1][1]);break;case 15:this.$=n[m-1];break;case 16:this.$=new s.MustacheNode(n[m-1][0],n[m-1][1]);break;case 17:this.$=new s.MustacheNode(n[m-1][0],n[m-1][1],true);break;case 18:this.$=new s.PartialNode(n[m-1]);break;case 19:this.$=new s.PartialNode(n[m-2],n[m-1]);break;case 20:break;case 21:this.$=[[n[m-2]].concat(n[m-1]),n[m]];break;case 22:this.$=[[n[m-1]].concat(n[m]),null];break;case 23:this.$=[[n[m-1]],n[m]];break;case 24:this.$=[[n[m]],null];break;case 25:n[m-1].push(n[m]);this.$=n[m-1];break;case 26:this.$=[n[m]];break;case 27:this.$=n[m];break;case 28:this.$=new s.StringNode(n[m]);break;case 29:this.$=new s.IntegerNode(n[m]);break;case 30:this.$=new s.BooleanNode(n[m]);break;case 31:this.$=new s.HashNode(n[m]);break;case 32:n[m-1].push(n[m]);this.$=n[m-1];break;case 33:this.$=[n[m]];break;case 34:this.$=[n[m-2],n[m]];break;case 35:this.$=[n[m-2],new s.StringNode(n[m])];break;case 36:this.$=[n[m-2],new s.IntegerNode(n[m])];break;case 37:this.$=[n[m-2],new s.BooleanNode(n[m])];break;case 38:this.$=new s.IdNode(n[m]);break;case 39:n[m-2].push(n[m]);this.$=n[m-2];break;case 40:this.$=[n[m]];break;}},table:[{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,33:[1,25],35:24},{17:26,21:23,33:[1,25],35:24},{17:27,21:23,33:[1,25],35:24},{17:28,21:23,33:[1,25],35:24},{21:29,33:[1,25],35:24},{1:[2,1]},{6:30,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,31],21:23,33:[1,25],35:24},{10:32,20:[1,33]},{10:34,20:[1,33]},{18:[1,35]},{18:[2,24],21:40,25:36,26:37,27:38,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,38],28:[2,38],29:[2,38],30:[2,38],33:[2,38],36:[1,46]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],36:[2,40]},{18:[1,47]},{18:[1,48]},{18:[1,49]},{18:[1,50],21:51,33:[1,25],35:24},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:52,33:[1,25],35:24},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:40,26:53,27:54,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,23]},{18:[2,26],28:[2,26],29:[2,26],30:[2,26],33:[2,26]},{18:[2,31],32:55,33:[1,56]},{18:[2,27],28:[2,27],29:[2,27],30:[2,27],33:[2,27]},{18:[2,28],28:[2,28],29:[2,28],30:[2,28],33:[2,28]},{18:[2,29],28:[2,29],29:[2,29],30:[2,29],33:[2,29]},{18:[2,30],28:[2,30],29:[2,30],30:[2,30],33:[2,30]},{18:[2,33],33:[2,33]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],34:[1,57],36:[2,40]},{33:[1,58]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,59]},{18:[1,60]},{18:[2,21]},{18:[2,25],28:[2,25],29:[2,25],30:[2,25],33:[2,25]},{18:[2,32],33:[2,32]},{34:[1,57]},{21:61,28:[1,62],29:[1,63],30:[1,64],33:[1,25],35:24},{18:[2,39],28:[2,39],29:[2,39],30:[2,39],33:[2,39],36:[2,39]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,34],33:[2,34]},{18:[2,35],33:[2,35]},{18:[2,36],33:[2,36]},{18:[2,37],33:[2,37]}],defaultActions:{16:[2,1],37:[2,23],53:[2,21]},parseError:function i(m,l){throw new Error(m);
},parse:function j(v){var C=this,s=[0],L=[null],x=[],M=this.table,m="",w=0,J=0,o=0,u=2,z=1;this.lexer.setInput(v);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={};}var n=this.lexer.yylloc;x.push(n);if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError;}function B(p){s.length=s.length-2*p;L.length=L.length-p;x.length=x.length-p;}function A(){var p;p=C.lexer.lex()||1;if(typeof p!=="number"){p=C.symbols_[p]||p;}return p;}var I,E,q,H,N,y,G={},D,K,l,t;while(true){q=s[s.length-1];if(this.defaultActions[q]){H=this.defaultActions[q];}else{if(I==null){I=A();}H=M[q]&&M[q][I];}if(typeof H==="undefined"||!H.length||!H[0]){if(!o){t=[];for(D in M[q]){if(this.terminals_[D]&&D>2){t.push("'"+this.terminals_[D]+"'");}}var F="";if(this.lexer.showPosition){F="Parse error on line "+(w+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+t.join(", ");}else{F="Parse error on line "+(w+1)+": Unexpected "+(I==1?"end of input":("'"+(this.terminals_[I]||I)+"'"));}this.parseError(F,{text:this.lexer.match,token:this.terminals_[I]||I,line:this.lexer.yylineno,loc:n,expected:t});}if(o==3){if(I==z){throw new Error(F||"Parsing halted.");}J=this.lexer.yyleng;m=this.lexer.yytext;w=this.lexer.yylineno;n=this.lexer.yylloc;I=A();}while(1){if((u.toString()) in M[q]){break;}if(q==0){throw new Error(F||"Parsing halted.");}B(1);q=s[s.length-1];}E=I;I=u;q=s[s.length-1];H=M[q]&&M[q][u];o=3;}if(H[0] instanceof Array&&H.length>1){throw new Error("Parse Error: multiple actions possible at state: "+q+", token: "+I);}switch(H[0]){case 1:s.push(I);L.push(this.lexer.yytext);x.push(this.lexer.yylloc);s.push(H[1]);I=null;if(!E){J=this.lexer.yyleng;m=this.lexer.yytext;w=this.lexer.yylineno;n=this.lexer.yylloc;if(o>0){o--;}}else{I=E;E=null;}break;case 2:K=this.productions_[H[1]][1];G.$=L[L.length-K];G._$={first_line:x[x.length-(K||1)].first_line,last_line:x[x.length-1].last_line,first_column:x[x.length-(K||1)].first_column,last_column:x[x.length-1].last_column};y=this.performAction.call(G,m,J,w,this.yy,H[1],L,x);if(typeof y!=="undefined"){return y;}if(K){s=s.slice(0,-1*K*2);L=L.slice(0,-1*K);x=x.slice(0,-1*K);}s.push(this.productions_[H[1]][0]);L.push(G.$);x.push(G._$);l=M[s[s.length-2]][s[s.length-1]];s.push(l);break;case 3:return true;}}return true;}};var f=(function(){var o=({EOF:1,parseError:function q(t,s){if(this.yy.parseError){this.yy.parseError(t,s);}else{throw new Error(t);}},setInput:function(s){this._input=s;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};return this;},input:function(){var t=this._input[0];this.yytext+=t;this.yyleng++;this.match+=t;this.matched+=t;var s=t.match(/\n/);if(s){this.yylineno++;}this._input=this._input.slice(1);return t;},unput:function(s){this._input=s+this._input;return this;},more:function(){this._more=true;return this;},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"");},upcomingInput:function(){var s=this.match;if(s.length<20){s+=this._input.substr(0,20-s.length);}return(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"");},showPosition:function(){var s=this.pastInput();var t=new Array(s.length+1).join("-");return s+this.upcomingInput()+"\n"+t+"^";},next:function(){if(this.done){return this.EOF;}if(!this._input){this.done=true;}var w,u,t,s;if(!this._more){this.yytext="";this.match="";}var x=this._currentRules();for(var v=0;v<x.length;v++){u=this._input.match(this.rules[x[v]]);if(u){s=u[0].match(/\n.*/g);if(s){this.yylineno+=s.length;}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-1:this.yylloc.last_column+u[0].length};this.yytext+=u[0];this.match+=u[0];this.matches=u;this.yyleng=this.yytext.length;this._more=false;this._input=this._input.slice(u[0].length);this.matched+=u[0];w=this.performAction.call(this,this.yy,this,x[v],this.conditionStack[this.conditionStack.length-1]);if(w){return w;}else{return;}}}if(this._input===""){return this.EOF;}else{this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno});}},lex:function l(){var s=this.next();if(typeof s!=="undefined"){return s;}else{return this.lex();}},begin:function m(s){this.conditionStack.push(s);},popState:function r(){return this.conditionStack.pop();},_currentRules:function p(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;}});o.performAction=function n(w,t,v,s){var u=s;switch(v){case 0:this.begin("mu");if(t.yytext){return 14;}break;case 1:return 14;break;case 2:return 24;break;case 3:return 16;break;case 4:return 20;break;case 5:return 19;break;case 6:return 19;break;case 7:return 23;break;case 8:return 23;break;case 9:t.yytext=t.yytext.substr(3,t.yyleng-5);this.begin("INITIAL");return 15;break;case 10:return 22;break;case 11:return 34;break;case 12:return 33;break;case 13:return 33;break;case 14:return 36;break;case 15:break;case 16:this.begin("INITIAL");return 18;break;case 17:this.begin("INITIAL");return 18;break;case 18:t.yytext=t.yytext.substr(1,t.yyleng-2).replace(/\\"/g,'"');return 28;break;case 19:return 30;break;case 20:return 30;break;case 21:return 29;break;case 22:return 33;break;case 23:t.yytext=t.yytext.substr(1,t.yyleng-2);return 33;break;case 24:return"INVALID";break;case 25:return 5;break;}};o.rules=[/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^\{\{>/,/^\{\{#/,/^\{\{\//,/^\{\{\^/,/^\{\{\s*else\b/,/^\{\{\{/,/^\{\{&/,/^\{\{![\s\S]*?\}\}/,/^\{\{/,/^=/,/^\.(?=[} ])/,/^\.\./,/^[/.]/,/^\s+/,/^\}\}\}/,/^\}\}/,/^"(\\["]|[^"])*"/,/^true(?=[}\s])/,/^false(?=[}\s])/,/^[0-9]+(?=[}\s])/,/^[a-zA-Z0-9_$-]+(?=[=}\s/.])/,/^\[.*\]/,/^./,/^$/];o.conditions={"mu":{"rules":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"inclusive":false},"INITIAL":{"rules":[0,1,25],"inclusive":true}};
return o;})();k.lexer=f;return k;})();if(typeof require!=="undefined"&&typeof exports!=="undefined"){exports.parser=a;exports.parse=function(){return a.parse.apply(a,arguments);};exports.main=function b(f){if(!f[1]){throw new Error("Usage: "+f[0]+" FILE");}if(typeof process!=="undefined"){var h=require("fs").readFileSync(require("path").join(process.cwd(),f[1]),"utf8");}else{var g=require("file").path(require("file").cwd());var h=g.join(f[1]).read({charset:"utf-8"});}return exports.parser.parse(h);};if(typeof module!=="undefined"&&require.main===module){exports.main(typeof process!=="undefined"?process.argv.slice(1):require("system").args);}}d.Parser=a;d.parse=function(f){d.Parser.yy=d.AST;return d.Parser.parse(f);};d.print=function(f){return new d.PrintVisitor().accept(f);};d.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(g,f){}};d.log=function(g,f){d.logger.log(g,f);};(function(){d.AST={};d.AST.ProgramNode=function(h,g){this.type="program";this.statements=h;if(g){this.inverse=new d.AST.ProgramNode(g);}};d.AST.MustacheNode=function(i,h,g){this.type="mustache";this.id=i[0];this.params=i.slice(1);this.hash=h;this.escaped=!g;};d.AST.PartialNode=function(h,g){this.type="partial";this.id=h;this.context=g;};var f=function(g,h){if(g.original!==h.original){throw new d.Exception(g.original+" doesn't match "+h.original);}};d.AST.BlockNode=function(h,g,i){f(h.id,i);this.type="block";this.mustache=h;this.program=g;};d.AST.InverseNode=function(h,g,i){f(h.id,i);this.type="inverse";this.mustache=h;this.program=g;};d.AST.ContentNode=function(g){this.type="content";this.string=g;};d.AST.HashNode=function(g){this.type="hash";this.pairs=g;};d.AST.IdNode=function(m){this.type="ID";this.original=m.join(".");var j=[],n=0;for(var k=0,g=m.length;k<g;k++){var h=m[k];if(h===".."){n++;}else{if(h==="."||h==="this"){this.isScoped=true;}else{j.push(h);}}}this.parts=j;this.string=j.join(".");this.depth=n;this.isSimple=(j.length===1)&&(n===0);};d.AST.StringNode=function(g){this.type="STRING";this.string=g;};d.AST.IntegerNode=function(g){this.type="INTEGER";this.integer=g;};d.AST.BooleanNode=function(g){this.type="BOOLEAN";this.bool=g;};d.AST.CommentNode=function(g){this.type="comment";this.comment=g;};})();d.Compiler=function(){};d.JavaScriptCompiler=function(){};(function(m,k){m.OPCODE_MAP={appendContent:1,getContext:2,lookupWithHelpers:3,lookup:4,append:5,invokeMustache:6,appendEscaped:7,pushString:8,truthyOrFallback:9,functionOrFallback:10,invokeProgram:11,invokePartial:12,push:13,assignToHash:15,pushStringParam:16};m.MULTI_PARAM_OPCODES={appendContent:1,getContext:1,lookupWithHelpers:2,lookup:1,invokeMustache:3,pushString:1,truthyOrFallback:1,functionOrFallback:1,invokeProgram:3,invokePartial:1,push:1,assignToHash:1,pushStringParam:1};m.DISASSEMBLE_MAP={};for(var o in m.OPCODE_MAP){var n=m.OPCODE_MAP[o];m.DISASSEMBLE_MAP[n]=o;}m.multiParamSize=function(i){return m.MULTI_PARAM_OPCODES[m.DISASSEMBLE_MAP[i]];};m.prototype={compiler:m,disassemble:function(){var x=this.opcodes,v,r;var u=[],z,q,A;for(var w=0,s=x.length;w<s;w++){v=x[w];if(v==="DECLARE"){q=x[++w];A=x[++w];u.push("DECLARE "+q+" = "+A);}else{z=m.DISASSEMBLE_MAP[v];var y=m.multiParamSize(v);var p=[];for(var t=0;t<y;t++){r=x[++w];if(typeof r==="string"){r='"'+r.replace("\n","\\n")+'"';}p.push(r);}z=z+" "+p.join(" ");u.push(z);}}return u.join("\n");},guid:0,compile:function(i,p){this.children=[];this.depths={list:[]};this.options=p;var q=this.options.knownHelpers;this.options.knownHelpers={"helperMissing":true,"blockHelperMissing":true,"each":true,"if":true,"unless":true,"with":true,"log":true};if(q){for(var l in q){this.options.knownHelpers[l]=q[l];}}return this.program(i);},accept:function(i){return this[i.type](i);},program:function(r){var q=r.statements,t;this.opcodes=[];for(var s=0,p=q.length;s<p;s++){t=q[s];this[t.type](t);}this.isSimple=p===1;this.depths.list=this.depths.list.sort(function(l,i){return l-i;});return this;},compileProgram:function(r){var p=new this.compiler().compile(r,this.options);var s=this.guid++;this.usePartial=this.usePartial||p.usePartial;this.children[s]=p;for(var t=0,q=p.depths.list.length;t<q;t++){depth=p.depths.list[t];if(depth<2){continue;}else{this.addDepth(depth-1);}}return s;},block:function(t){var q=t.mustache;var s,u,l,p;var r=this.setupStackForMustache(q);var i=this.compileProgram(t.program);if(t.program.inverse){p=this.compileProgram(t.program.inverse);this.declare("inverse",p);}this.opcode("invokeProgram",i,r.length,!!q.hash);this.declare("inverse",null);this.opcode("append");},inverse:function(p){var l=this.setupStackForMustache(p.mustache);var i=this.compileProgram(p.program);this.declare("inverse",i);this.opcode("invokeProgram",null,l.length,!!p.mustache.hash);this.opcode("append");},hash:function(s){var r=s.pairs,u,t;this.opcode("push","{}");for(var q=0,p=r.length;q<p;q++){u=r[q];t=u[1];this.accept(t);this.opcode("assignToHash",u[0]);}},partial:function(i){var l=i.id;this.usePartial=true;if(i.context){this.ID(i.context);}else{this.opcode("push","depth0");}this.opcode("invokePartial",l.original);this.opcode("append");},content:function(i){this.opcode("appendContent",i.string);},mustache:function(i){var l=this.setupStackForMustache(i);this.opcode("invokeMustache",l.length,i.id.original,!!i.hash);if(i.escaped){this.opcode("appendEscaped");}else{this.opcode("append");}},ID:function(r){this.addDepth(r.depth);this.opcode("getContext",r.depth);this.opcode("lookupWithHelpers",r.parts[0]||null,r.isScoped||false);for(var q=1,p=r.parts.length;q<p;q++){this.opcode("lookup",r.parts[q]);}},STRING:function(i){this.opcode("pushString",i.string);},INTEGER:function(i){this.opcode("push",i.integer);},BOOLEAN:function(i){this.opcode("push",i.bool);},comment:function(){},pushParams:function(q){var l=q.length,p;while(l--){p=q[l];if(this.options.stringParams){if(p.depth){this.addDepth(p.depth);}this.opcode("getContext",p.depth||0);this.opcode("pushStringParam",p.string);}else{this[p.type](p);}}},opcode:function(i,q,p,l){this.opcodes.push(m.OPCODE_MAP[i]);
if(q!==undefined){this.opcodes.push(q);}if(p!==undefined){this.opcodes.push(p);}if(l!==undefined){this.opcodes.push(l);}},declare:function(i,l){this.opcodes.push("DECLARE");this.opcodes.push(i);this.opcodes.push(l);},addDepth:function(i){if(i===0){return;}if(!this.depths[i]){this.depths[i]=true;this.depths.list.push(i);}},setupStackForMustache:function(i){var l=i.params;this.pushParams(l);if(i.hash){this.hash(i.hash);}this.ID(i.id);return l;}};k.prototype={nameLookup:function(p,i,l){if(/^[0-9]+$/.test(i)){return p+"["+i+"]";}else{if(k.isValidJavaScriptVariableName(i)){return p+"."+i;}else{return p+"['"+i+"']";}}},appendToBuffer:function(i){if(this.environment.isSimple){return"return "+i+";";}else{return"buffer += "+i+";";}},initializeBuffer:function(){return this.quotedString("");},compile:function(i,l,q,p){this.environment=i;this.options=l||{};this.name=this.environment.name;this.isChild=!!q;this.context=q||{programs:[],aliases:{self:"this"},registers:{list:[]}};this.preamble();this.stackSlot=0;this.stackVars=[];this.compileChildren(i,l);var s=i.opcodes,r;this.i=0;for(g=s.length;this.i<g;this.i++){r=this.nextOpcode(0);if(r[0]==="DECLARE"){this.i=this.i+2;this[r[1]]=r[2];}else{this.i=this.i+r[1].length;this[r[0]].apply(this,r[1]);}}return this.createFunctionContext(p);},nextOpcode:function(u){var r=this.environment.opcodes,q=r[this.i+u],p,s;var t,i;if(q==="DECLARE"){p=r[this.i+1];s=r[this.i+2];return["DECLARE",p,s];}else{p=m.DISASSEMBLE_MAP[q];t=m.multiParamSize(q);i=[];for(var l=0;l<t;l++){i.push(r[this.i+l+1+u]);}return[p,i];}},eat:function(i){this.i=this.i+i.length;},preamble:function(){var i=[];if(!this.isChild){var l="helpers = helpers || Handlebars.helpers;";if(this.environment.usePartial){l=l+" partials = partials || Handlebars.partials;";}i.push(l);}else{i.push("");}if(!this.environment.isSimple){i.push(", buffer = "+this.initializeBuffer());}else{i.push("");}this.lastContext=0;this.source=i;},createFunctionContext:function(u){var v=this.stackVars;if(!this.isChild){v=v.concat(this.context.registers.list);}if(v.length>0){this.source[1]=this.source[1]+", "+v.join(", ");}if(!this.isChild){var q=[];for(var t in this.context.aliases){this.source[1]=this.source[1]+", "+t+"="+this.context.aliases[t];}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";";}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n";}if(!this.environment.isSimple){this.source.push("return buffer;");}var w=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var s=0,p=this.environment.depths.list.length;s<p;s++){w.push("depth"+this.environment.depths.list[s]);}if(w.length===4&&!this.environment.usePartial){w.pop();}if(u){w.push(this.source.join("\n  "));return Function.apply(this,w);}else{var r="function "+(this.name||"")+"("+w.join(",")+") {\n  "+this.source.join("\n  ")+"}";d.log(d.logger.DEBUG,r+"\n\n");return r;}},appendContent:function(i){this.source.push(this.appendToBuffer(this.quotedString(i)));},append:function(){var i=this.popStack();this.source.push("if("+i+" || "+i+" === 0) { "+this.appendToBuffer(i)+" }");if(this.environment.isSimple){this.source.push("else { "+this.appendToBuffer("''")+" }");}},appendEscaped:function(){var l=this.nextOpcode(1),i="";this.context.aliases.escapeExpression="this.escapeExpression";if(l[0]==="appendContent"){i=" + "+this.quotedString(l[1][0]);this.eat(l);}this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"+i));},getContext:function(i){if(this.lastContext!==i){this.lastContext=i;}},lookupWithHelpers:function(p,q){if(p){var i=this.nextStack();this.usingKnownHelper=false;var l;if(!q&&this.options.knownHelpers[p]){l=i+" = "+this.nameLookup("helpers",p,"helper");this.usingKnownHelper=true;}else{if(q||this.options.knownHelpersOnly){l=i+" = "+this.nameLookup("depth"+this.lastContext,p,"context");}else{l=i+" = "+this.nameLookup("helpers",p,"helper")+" || "+this.nameLookup("depth"+this.lastContext,p,"context");}}l+=";";this.source.push(l);}else{this.pushStack("depth"+this.lastContext);}},lookup:function(l){var i=this.topStack();this.source.push(i+" = ("+i+" === null || "+i+" === undefined || "+i+" === false ? "+i+" : "+this.nameLookup(i,l,"context")+");");},pushStringParam:function(i){this.pushStack("depth"+this.lastContext);this.pushString(i);},pushString:function(i){this.pushStack(this.quotedString(i));},push:function(i){this.pushStack(i);},invokeMustache:function(p,l,i){this.populateParams(p,this.quotedString(l),"{}",null,i,function(q,s,r){if(!this.usingKnownHelper){this.context.aliases.helperMissing="helpers.helperMissing";this.context.aliases.undef="void 0";this.source.push("else if("+r+"=== undef) { "+q+" = helperMissing.call("+s+"); }");if(q!==r){this.source.push("else { "+q+" = "+r+"; }");}}});},invokeProgram:function(p,q,l){var i=this.programExpression(this.inverse);var r=this.programExpression(p);this.populateParams(q,null,r,i,l,function(s,u,t){if(!this.usingKnownHelper){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";this.source.push("else { "+s+" = blockHelperMissing.call("+u+"); }");}});},populateParams:function(u,p,y,v,C,B){var q=C||this.options.stringParams||v||this.options.data;var l=this.popStack(),A;var s=[],r,t,z;if(q){this.register("tmp1",y);z="tmp1";}else{z="{ hash: {} }";}if(q){var x=(C?this.popStack():"{}");this.source.push("tmp1.hash = "+x+";");}if(this.options.stringParams){this.source.push("tmp1.contexts = [];");}for(var w=0;w<u;w++){r=this.popStack();s.push(r);if(this.options.stringParams){this.source.push("tmp1.contexts.push("+this.popStack()+");");}}if(v){this.source.push("tmp1.fn = tmp1;");this.source.push("tmp1.inverse = "+v+";");}if(this.options.data){this.source.push("tmp1.data = data;");}s.push(z);this.populateCall(s,l,p||l,B);},populateCall:function(q,t,s,i){var p=["depth0"].concat(q).join(", ");var r=["depth0"].concat(s).concat(q).join(", ");var l=this.nextStack();if(this.usingKnownHelper){this.source.push(l+" = "+t+".call("+p+");");
}else{this.context.aliases.functionType='"function"';this.source.push("if(typeof "+t+" === functionType) { "+l+" = "+t+".call("+p+"); }");}i.call(this,l,r,t);this.usingKnownHelper=false;},invokePartial:function(i){this.pushStack("self.invokePartial("+this.nameLookup("partials",i,"partial")+", '"+i+"', "+this.popStack()+", helpers, partials);");},assignToHash:function(i){var l=this.popStack();var p=this.topStack();this.source.push(p+"['"+i+"'] = "+l+";");},compiler:k,compileChildren:function(p,s){var u=p.children,w,v;for(var t=0,q=u.length;t<q;t++){w=u[t];v=new this.compiler();this.context.programs.push("");var r=this.context.programs.length;w.index=r;w.name="program"+r;this.context.programs[r]=v.compile(w,s,this.context);}},programExpression:function(q){if(q==null){return"self.noop";}var u=this.environment.children[q],t=u.depths.list;var s=[u.index,u.name,"data"];for(var r=0,p=t.length;r<p;r++){depth=t[r];if(depth===1){s.push("depth0");}else{s.push("depth"+(depth-1));}}if(t.length===0){return"self.program("+s.join(", ")+")";}else{s.shift();return"self.programWithDepth("+s.join(", ")+")";}},register:function(i,l){this.useRegister(i);this.source.push(i+" = "+l+";");},useRegister:function(i){if(!this.context.registers[i]){this.context.registers[i]=true;this.context.registers.list.push(i);}},pushStack:function(i){this.source.push(this.nextStack()+" = "+i+";");return"stack"+this.stackSlot;},nextStack:function(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot);}return"stack"+this.stackSlot;},popStack:function(){return"stack"+this.stackSlot--;},topStack:function(){return"stack"+this.stackSlot;},quotedString:function(i){return'"'+i.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"';}};var f=("break case catch continue default delete do else finally "+"for function if in instanceof new return switch this throw "+"try typeof var void while with null true false").split(" ");var j=k.RESERVED_WORDS={};for(var h=0,g=f.length;h<g;h++){j[f[h]]=true;}k.isValidJavaScriptVariableName=function(i){if(!k.RESERVED_WORDS[i]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(i)){return true;}return false;};})(d.Compiler,d.JavaScriptCompiler);d.precompile=function(i,h){h=h||{};var g=d.parse(i);var f=new d.Compiler().compile(g,h);return new d.JavaScriptCompiler().compile(f,h);};d.compile=function(g,f){f=f||{};var i;function h(){var l=d.parse(g);var k=new d.Compiler().compile(l,f);var j=new d.JavaScriptCompiler().compile(k,f,undefined,true);return d.template(j);}return function(k,j){if(!i){i=h();}return i.call(this,k,j);};};var c=["debug","info","warn","error"];d.logger.log=function(g,f){};d.render=function(g,h,f){var i=d.compile(g);return i(h,f);};},"@VERSION@",{requires:["handlebars-base"]});