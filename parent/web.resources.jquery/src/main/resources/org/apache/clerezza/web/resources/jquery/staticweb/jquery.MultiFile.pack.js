/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/*
 ### jQuery Multiple File Upload Plugin v1.44 - 2009-04-08 ###
 * Home: http://www.fyneworks.com/jquery/multiple-file-upload/
 * Code: http://code.google.com/p/jquery-multifile-plugin/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 ###
*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';3(Q.1w)(6($){$.7.2=6(h){3(5.U==0)8 5;3(18 T[0]==\'1J\'){3(5.U>1){l i=T;8 5.L(6(){$.7.2.10($(5),i)})};$.7.2[T[0]].10(5,$.28(T).1Z(1)||[]);8 5};l h=$.O({},$.7.2.I,h||{});$(\'1X\').1l(\'2-R\').S(\'2-R\').1k($.7.2.12);3($.7.2.I.13){$.7.2.1i($.7.2.I.13);$.7.2.I.13=W};5.1l(\'.2-16\').S(\'2-16\').L(6(){Q.2=(Q.2||0)+1;l e=Q.2;l g={e:5,E:$(5),N:$(5).N()};3(18 h==\'26\')h={k:h};l o=$.O({},$.7.2.I,h||{},($.1D?g.E.1D():($.1Q?g.E.Y():W))||{},{});3(!(o.k>0)){o.k=g.E.H(\'1N\');3(!(o.k>0)){o.k=(q(g.e.1I.B(/\\b(k|1S)\\-([0-9]+)\\b/t)||[\'\']).B(/[0-9]+/t)||[\'\'])[0];3(!(o.k>0))o.k=-1;2o o.k=q(o.k).B(/[0-9]+/t)[0]}};o.k=1e 25(o.k);o.p=o.p||g.E.H(\'p\')||\'\';3(!o.p){o.p=(g.e.1I.B(/\\b(p\\-[\\w\\|]+)\\b/t))||\'\';o.p=1e q(o.p).y(/^(p|1b)\\-/i,\'\')};$.O(g,o||{});g.A=$.O({},$.7.2.I.A,g.A);$.O(g,{n:0,J:[],2a:[],1f:g.e.K||\'2\'+q(e),1g:6(z){8 g.1f+(z>0?\'1L\'+q(z):\'\')},F:6(a,b){l c=g[a],j=$(b).H(\'j\');3(c){l d=c(b,j,g);3(d!=W)8 d}8 1d}});3(q(g.p).U>1){g.1m=1e 2b(\'\\\\.(\'+(g.p?g.p:\'\')+\')$\',\'t\')};g.P=g.1f+\'1K\';g.E.1z(\'<M V="2-1z" K="\'+g.P+\'"></M>\');g.1C=$(\'#\'+g.P+\'\');g.e.D=g.e.D||\'m\'+e+\'[]\';3(!g.G){g.1C.1c(\'<M V="2-G" K="\'+g.P+\'1h"></M>\');g.G=$(\'#\'+g.P+\'1h\')};g.G=$(g.G);g.11=6(c,d){g.n++;c.2=g;3(d>0)c.K=c.D=\'\';3(d>0)c.K=g.1g(d);c.D=q(g.1j.y(/\\$D/t,$(g.N).H(\'D\')).y(/\\$K/t,$(g.N).H(\'K\')).y(/\\$g/t,e).y(/\\$i/t,d));3((g.k>0)&&((g.n-1)>(g.k)))c.Z=1d;g.X=g.J[d]=c;c=$(c);c.17(\'\').H(\'j\',\'\')[0].j=\'\';c.S(\'2-16\');c.1T(6(){$(5).1V();3(!g.F(\'1W\',5,g))8 u;l a=\'\',v=q(5.j||\'\');3(g.p&&v&&!v.B(g.1m))a=g.A.1n.y(\'$1b\',q(v.B(/\\.\\w{1,4}$/t)));1o(l f 29 g.J)3(g.J[f]&&g.J[f]!=5)3(g.J[f].j==v)a=g.A.1p.y(\'$m\',v.B(/[^\\/\\\\]+$/t));l b=$(g.N).N();b.S(\'2\');3(a!=\'\'){g.1q(a);g.n--;g.11(b[0],d);c.1r().2t(b);c.C();8 u};$(5).1s({1t:\'1M\',1u:\'-1O\'});c.1P(b);g.1v(5,d);g.11(b[0],d+1);3(!g.F(\'1R\',5,g))8 u});$(c).Y(\'2\',g)};g.1v=6(c,d){3(!g.F(\'2u\',c,g))8 u;l r=$(\'<M V="2-1U"></M>\'),v=q(c.j||\'\'),a=$(\'<1x V="2-1y" 1y="\'+g.A.14.y(\'$m\',v)+\'">\'+g.A.m.y(\'$m\',v.B(/[^\\/\\\\]+$/t)[0])+\'</1x>\'),b=$(\'<a V="2-C" 1Y="#\'+g.P+\'">\'+g.A.C+\'</a>\');g.G.1c(r.1c(b,\' \',a));b.1A(6(){3(!g.F(\'20\',c,g))8 u;g.n--;g.X.Z=u;g.J[d]=W;$(c).C();$(5).1r().C();$(g.X).1s({1t:\'\',1u:\'\'});$(g.X).15().17(\'\').H(\'j\',\'\')[0].j=\'\';3(!g.F(\'22\',c,g))8 u;8 u});3(!g.F(\'23\',c,g))8 u};3(!g.2)g.11(g.e,0);g.n++;g.E.Y(\'2\',g)})};$.O($.7.2,{15:6(){l a=$(5).Y(\'2\');3(a)a.G.24(\'a.2-C\').1A();8 $(5)},12:6(a){a=q(a||\'1B\');l o=[];$(\'1a:m\').L(6(){3($(5).17()==\'\')o[o.U]=5});8 $(o).L(6(){5.Z=1d}).S(a)},19:6(a){a=q(a||\'1B\');8 $(\'1a:m.\'+a).27(a).L(6(){5.Z=u})},R:{},1i:6(b,c,d){l e,j;d=d||[];3(d.1E.1F().1G("1H")<0)d=[d];3(18(b)==\'6\'){$.7.2.12();j=b.10(c||Q,d);$.7.2.19();8 j};3(b.1E.1F().1G("1H")<0)b=[b];1o(l i=0;i<b.U;i++){e=b[i]+\'\';3(e)(6(a){$.7.2.R[a]=$.7[a]||6(){};$.7[a]=6(){$.7.2.12();j=$.7.2.R[a].10(5,T);$.7.2.19();8 j}})(e)}}});$.7.2.I={p:\'\',k:-1,1j:\'$D\',A:{C:\'x\',1n:\'2c 2d 2e a $1b m.\\2f 2g...\',m:\'$m\',14:\'2h 14: $m\',1p:\'2i m 2j 2k 2l 14:\\n$m\'},13:[\'1k\',\'2m\',\'2n\'],1q:6(s){2p(s)}};$.7.15=6(){8 5.L(6(){2q{5.15()}2r(e){}})};$(6(){$("1a[2s=m].21").2()})})(1w);',62,155,'||MultiFile|if||this|function|fn|return|||||||||||value|max|var|file|||accept|String|||gi|false||||replace||STRING|match|remove|name||trigger|list|attr|options|slaves|id|each|div|clone|extend|wrapID|window|intercepted|addClass|arguments|length|class|null|current|data|disabled|apply|addSlave|disableEmpty|autoIntercept|selected|reset|applied|val|typeof|reEnableEmpty|input|ext|append|true|new|instanceKey|generateID|_list|intercept|namePattern|submit|not|rxAccept|denied|for|duplicate|error|parent|css|position|top|addToList|jQuery|span|title|wrap|click|mfD|wrapper|metadata|constructor|toString|indexOf|Array|className|string|_wrap|_F|absolute|maxlength|3000px|after|meta|afterFileSelect|limit|change|label|blur|onFileSelect|form|href|slice|onFileRemove|multi|afterFileRemove|afterFileAppend|find|Number|number|removeClass|makeArray|in|files|RegExp|You|cannot|select|nTry|again|File|This|has|already|been|ajaxSubmit|validate|else|alert|try|catch|type|prepend|onFileAppend'.split('|'),0,{}))
