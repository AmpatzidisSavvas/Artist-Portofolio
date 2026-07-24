const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LazyVideo-DEk4vLk8.js","assets/index-DdRKU1hX.js","assets/index-DRTOmxLL.css"])))=>i.map(i=>d[i]);
import{g as ka,r as Re,_ as Aa,j as c,B as Pa,a as Oa,R as Mn}from"./index-DdRKU1hX.js";import{A as Je}from"./AnimatedTitle-BHozryZY.js";import"./index-DSpwt0cg.js";var ce={exports:{}},fe,Qe;function Sa(){if(Qe)return fe;Qe=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return fe=t,fe}var ue,tn;function Na(){if(tn)return ue;tn=1;var t=Sa();function e(){}function n(){}return n.resetWarningCache=e,ue=function(){function a(s,f,b,p,h,D){if(D!==t){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}a.isRequired=a;function r(){return a}var i={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return i.PropTypes=i,i},ue}var en;function Ea(){return en||(en=1,ce.exports=Na()()),ce.exports}var Ca=Ea();const Y=ka(Ca),ja=Re.lazy(()=>Aa(()=>import("./LazyVideo-DEk4vLk8.js"),__vite__mapDeps([0,1,2]))),At=({src:t,title:e,description:n,titleButton:a,href:r})=>c.jsxs("div",{className:"relative size-full",children:[c.jsx(Re.Suspense,{fallback:c.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-20",children:c.jsxs("div",{className:"flex space-x-2",children:[c.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce"}),c.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"}),c.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.6s]"})]})}),children:c.jsx(ja,{src:t,loop:!0,muted:!0,autoPlay:!0,playsInline:!0,preload:"metadata",className:"absolute left-0 top-0 size-full object-cover object-center"})}),c.jsxs("div",{className:" relative z-10 flex size-full flex-col justify-between p-5 text-blue-50",children:[c.jsxs("div",{children:[c.jsx("h1",{className:" bento-title special-font",children:e}),n&&c.jsx("p",{className:"mt-3 max-w-64 text-xs md:text-base",children:n})]}),a&&r&&c.jsx(Pa,{title:a,containerClass:"!bg-yellow-300 flex-center gap-1",href:r})]})]});var qt={},nn;function Ta(){if(nn)return qt;nn=1,Object.defineProperty(qt,"__esModule",{value:!0});var t=Oa();function e(o){return Array.prototype.slice.call(o)}function n(o,d){var l=Math.floor(o);return l===d||l+1===d?o:d}function a(){return Date.now()}function r(o,d,l){if(d="data-keen-slider-"+d,l===null)return o.removeAttribute(d);o.setAttribute(d,l||"")}function i(o,d){return d=d||document,typeof o=="function"&&(o=o(d)),Array.isArray(o)?o:typeof o=="string"?e(d.querySelectorAll(o)):o instanceof HTMLElement?[o]:o instanceof NodeList?e(o):[]}function s(o){o.raw&&(o=o.raw),o.cancelable&&!o.defaultPrevented&&o.preventDefault()}function f(o){o.raw&&(o=o.raw),o.stopPropagation&&o.stopPropagation()}function b(){var o=[];return{add:function(d,l,w,k){d.addListener?d.addListener(w):d.addEventListener(l,w,k),o.push([d,l,w,k])},input:function(d,l,w,k){this.add(d,l,function(v){return function(g){g.nativeEvent&&(g=g.nativeEvent);var L=g.changedTouches||[],M=g.targetTouches||[],S=g.detail&&g.detail.x?g.detail:null;return v({id:S?S.identifier?S.identifier:"i":M[0]?M[0]?M[0].identifier:"e":"d",idChanged:S?S.identifier?S.identifier:"i":L[0]?L[0]?L[0].identifier:"e":"d",raw:g,x:S&&S.x?S.x:M[0]?M[0].screenX:S?S.x:g.pageX,y:S&&S.y?S.y:M[0]?M[0].screenY:S?S.y:g.pageY})}}(w),k)},purge:function(){o.forEach(function(d){d[0].removeListener?d[0].removeListener(d[2]):d[0].removeEventListener(d[1],d[2],d[3])}),o=[]}}}function p(o,d,l){return Math.min(Math.max(o,d),l)}function h(o){return(o>0?1:0)-(o<0?1:0)||+o}function D(o){var d=o.getBoundingClientRect();return{height:n(d.height,o.offsetHeight),width:n(d.width,o.offsetWidth)}}function x(o,d,l,w){var k=o&&o[d];return k==null?l:w&&typeof k=="function"?k():k}function B(o){return Math.round(1e6*o)/1e6}function st(o,d){if(o===d)return!0;var l=typeof o;if(l!==typeof d)return!1;if(l!=="object"||o===null||d===null)return l==="function"&&o.toString()===d.toString();if(o.length!==d.length||Object.getOwnPropertyNames(o).length!==Object.getOwnPropertyNames(d).length)return!1;for(var w in o)if(!st(o[w],d[w]))return!1;return!0}var rt=function(){return rt=Object.assign||function(o){for(var d,l=1,w=arguments.length;l<w;l++)for(var k in d=arguments[l])Object.prototype.hasOwnProperty.call(d,k)&&(o[k]=d[k]);return o},rt.apply(this,arguments)};function Z(o,d,l){for(var w,k=0,v=d.length;k<v;k++)!w&&k in d||(w||(w=Array.prototype.slice.call(d,0,k)),w[k]=d[k]);return o.concat(w||Array.prototype.slice.call(d))}function at(o){var d,l,w,k,v,g;function L(z){g||(g=z),M(!0);var H=z-g;H>w&&(H=w);var C=k[l];if(C[3]<H)return l++,L(z);var W=C[2],V=C[4],j=C[0],T=C[1]*(0,C[5])(V===0?1:(H-W)/V);if(T&&o.track.to(j+T),H<w)return U();g=null,M(!1),S(null),o.emit("animationEnded")}function M(z){d.active=z}function S(z){d.targetIdx=z}function U(){var z;z=L,v=window.requestAnimationFrame(z)}function J(){var z;z=v,window.cancelAnimationFrame(z),M(!1),S(null),g&&o.emit("animationStopped"),g=null}return d={active:!1,start:function(z){if(J(),o.track.details){var H=0,C=o.track.details.position;l=0,w=0,k=z.map(function(W){var V,j=Number(C),T=(V=W.earlyExit)!==null&&V!==void 0?V:W.duration,E=W.easing,tt=W.distance*E(T/W.duration)||0;C+=tt;var X=w;return w+=T,H+=tt,[j,W.distance,X,w,W.duration,E]}),S(o.track.distToIdx(H)),U(),o.emit("animationStarted")}},stop:J,targetIdx:null}}function et(o){var d,l,w,k,v,g,L,M,S,U,J,z,H,C,W=1/0,V=[],j=null,T=0;function E(N){ft(T+N)}function tt(N){var P=X(T+N).abs;return R(P)?P:null}function X(N){var P=Math.floor(Math.abs(B(N/l))),m=B((N%l+l)%l);m===l&&(m=0);var _=h(N),O=L.indexOf(Z([],L).reduce(function(G,$){return Math.abs($-m)<Math.abs(G-m)?$:G})),F=O;return _<0&&P++,O===g&&(F=0,P+=_>0?1:-1),{abs:F+P*g*_,origin:O,rel:F}}function q(N,P,m){var _;if(P||!mt())return A(N,m);if(!R(N))return null;var O=X(m??T),F=O.abs,G=N-O.rel,$=F+G;_=A($);var nt=A($-g*h(G));return(nt!==null&&Math.abs(nt)<Math.abs(_)||_===null)&&(_=nt),B(_)}function A(N,P){if(P==null&&(P=B(T)),!R(N)||N===null)return null;N=Math.round(N);var m=X(P),_=m.abs,O=m.rel,F=m.origin,G=ct(N),$=(P%l+l)%l,nt=L[F],ht=Math.floor((N-(_-O))/g)*l;return B(nt-$-nt+L[G]+ht+(F===g?l:0))}function R(N){return Q(N)===N}function Q(N){return p(N,S,U)}function mt(){return k.loop}function ct(N){return(N%g+g)%g}function ft(N){var P;P=N-T,V.push({distance:P,timestamp:a()}),V.length>6&&(V=V.slice(-6)),T=B(N);var m=I().abs;if(m!==j){var _=j!==null;j=m,_&&o.emit("slideChanged")}}function I(N){var P=N?null:function(){if(g){var m=mt(),_=m?(T%l+l)%l:T,O=(m?T%l:T)-v[0][2],F=0-(O<0&&m?l-Math.abs(O):O),G=0,$=X(T),nt=$.abs,ht=$.rel,Gt=v[ht][2],$t=v.map(function(gt,xa){var ot=F+G;(ot<0-gt[0]||ot>1)&&(ot+=(Math.abs(ot)>l-1&&m?l:0)*h(-ot));var qe=xa-ht,Ke=h(qe),Dt=qe+nt;m&&(Ke===-1&&ot>Gt&&(Dt+=g),Ke===1&&ot<Gt&&(Dt-=g),J!==null&&Dt<J&&(ot+=l),z!==null&&Dt>z&&(ot-=l));var Ze=ot+gt[0]+gt[1],wa=Math.max(ot>=0&&Ze<=1?1:Ze<0||ot>1?0:ot<0?Math.min(1,(gt[0]+ot)/gt[0]):(1-ot)/gt[0],0);return G+=gt[0]+gt[1],{abs:Dt,distance:k.rtl?-1*ot+1-gt[0]:ot,portion:wa,size:gt[0]}});return nt=Q(nt),ht=ct(nt),{abs:Q(nt),length:w,max:C,maxIdx:U,min:H,minIdx:S,position:T,progress:m?_/l:T/w,rel:ht,slides:$t,slidesLength:l}}}();return d.details=P,o.emit("detailsChanged"),P}return d={absToRel:ct,add:E,details:null,distToIdx:tt,idxToDist:q,init:function(N){if(function(){if(k=o.options,v=(k.trackConfig||[]).map(function(O){return[x(O,"size",1),x(O,"spacing",0),x(O,"origin",0)]}),g=v.length){l=B(v.reduce(function(O,F){return O+F[0]+F[1]},0));var m,_=g-1;w=B(l+v[0][2]-v[_][0]-v[_][2]-v[_][1]),L=v.reduce(function(O,F){if(!O)return[0];var G=v[O.length-1],$=O[O.length-1]+(G[0]+G[2])+G[1];return $-=F[2],O[O.length-1]>$&&($=O[O.length-1]),$=B($),O.push($),(!m||m<$)&&(M=O.length-1),m=$,O},null),w===0&&(M=0),L.push(B(l))}}(),!g)return I(!0);var P;(function(){var m=o.options.range,_=o.options.loop;J=S=_?x(_,"min",-1/0):0,z=U=_?x(_,"max",W):M;var O=x(m,"min",null),F=x(m,"max",null);O!==null&&(S=O),F!==null&&(U=F),H=S===-1/0?S:o.track.idxToDist(S||0,!0,0),C=U===W?U:q(U,!0,0),F===null&&(z=U),x(m,"align",!1)&&U!==W&&v[ct(U)][2]===0&&(C-=1-v[ct(U)][0],U=tt(C-T)),H=B(H),C=B(C)})(),P=N,Number(P)===P?E(A(Q(N))):I()},to:ft,velocity:function(){var N=a(),P=V.reduce(function(m,_){var O=_.distance,F=_.timestamp;return N-F>200||(h(O)!==h(m.distance)&&m.distance&&(m={distance:0,lastTimestamp:0,time:0}),m.time&&(m.distance+=O),m.lastTimestamp&&(m.time+=F-m.lastTimestamp),m.lastTimestamp=F),m},{distance:0,lastTimestamp:0,time:0});return P.distance/P.time||0}}}function it(o){var d,l,w,k,v,g,L,M;function S(j){return 2*j}function U(j){return p(j,L,M)}function J(j){return 1-Math.pow(1-j,3)}function z(){return w?o.track.velocity():0}function H(){V();var j=o.options.mode==="free-snap",T=o.track,E=z();k=h(E);var tt=o.track.details,X=[];if(E||!j){var q=C(E),A=q.dist,R=q.dur;if(R=S(R),A*=k,j){var Q=T.idxToDist(T.distToIdx(A),!0);Q&&(A=Q)}X.push({distance:A,duration:R,easing:J});var mt=tt.position,ct=mt+A;if(ct<v||ct>g){var ft=ct<v?v-mt:g-mt,I=0,N=E;if(h(ft)===k){var P=Math.min(Math.abs(ft)/Math.abs(A),1),m=function(F){return 1-Math.pow(1-F,1/3)}(P)*R;X[0].earlyExit=m,N=E*(1-P)}else X[0].earlyExit=0,I+=ft;var _=C(N,100),O=_.dist*k;o.options.rubberband&&(X.push({distance:O,duration:S(_.dur),easing:J}),X.push({distance:-O+I,duration:500,easing:J}))}o.animator.start(X)}else o.moveToIdx(U(tt.abs),!0,{duration:500,easing:function(F){return 1+--F*F*F*F*F}})}function C(j,T){T===void 0&&(T=1e3);var E=147e-9+(j=Math.abs(j))/T;return{dist:Math.pow(j,2)/E,dur:j/E}}function W(){var j=o.track.details;j&&(v=j.min,g=j.max,L=j.minIdx,M=j.maxIdx)}function V(){o.animator.stop()}o.on("updated",W),o.on("optionsChanged",W),o.on("created",W),o.on("dragStarted",function(){w=!1,V(),d=l=o.track.details.abs}),o.on("dragChecked",function(){w=!0}),o.on("dragEnded",function(){var j=o.options.mode;j==="snap"&&function(){var T=o.track,E=o.track.details,tt=E.position,X=h(z());(tt>g||tt<v)&&(X=0);var q=d+X;E.slides[T.absToRel(q)].portion===0&&(q-=X),d!==l&&(q=l),h(T.idxToDist(q,!0))!==X&&(q+=X),q=U(q);var A=T.idxToDist(q,!0);o.animator.start([{distance:A,duration:500,easing:function(R){return 1+--R*R*R*R*R}}])}(),j!=="free"&&j!=="free-snap"||H()}),o.on("dragged",function(){l=o.track.details.abs})}function pt(o){var d,l,w,k,v,g,L,M,S,U,J,z,H,C,W,V,j,T,E=b();function tt(I){if(g&&M===I.id){var N=R(I);if(S){if(!A(I))return q(I);U=N,S=!1,o.emit("dragChecked")}if(V)return U=N;s(I);var P=function(_){if(j===-1/0&&T===1/0)return _;var O=o.track.details,F=O.length,G=O.position,$=p(_,j-G,T-G);if(F===0)return 0;if(!o.options.rubberband)return $;if(G<=T&&G>=j||G<j&&l>0||G>T&&l<0)return _;var nt=(G<j?G-j:G-T)/F,ht=k*F,Gt=Math.abs(nt*ht),$t=Math.max(0,1-Gt/v*2);return $t*$t*_}(L(U-N)/k*w);l=h(P);var m=o.track.details.position;(m>j&&m<T||m===j&&l>0||m===T&&l<0)&&f(I),J+=P,!z&&Math.abs(J*k)>5&&(z=!0),o.track.add(P),U=N,o.emit("dragged")}}function X(I){!g&&o.track.details&&o.track.details.length&&(J=0,g=!0,z=!1,S=!0,M=I.id,A(I),U=R(I),o.emit("dragStarted"))}function q(I){g&&M===I.idChanged&&(g=!1,o.emit("dragEnded"))}function A(I){var N=Q(),P=N?I.y:I.x,m=N?I.x:I.y,_=H!==void 0&&C!==void 0&&Math.abs(C-m)<=Math.abs(H-P);return H=P,C=m,_}function R(I){return Q()?I.y:I.x}function Q(){return o.options.vertical}function mt(){k=o.size,v=Q()?window.innerHeight:window.innerWidth;var I=o.track.details;I&&(j=I.min,T=I.max)}function ct(I){z&&(f(I),s(I))}function ft(){if(E.purge(),o.options.drag&&!o.options.disabled){var I;I=o.options.dragSpeed||1,L=typeof I=="function"?I:function(P){return P*I},w=o.options.rtl?-1:1,mt(),d=o.container,function(){var P="data-keen-slider-clickable";i("[".concat(P,"]:not([").concat(P,"=false])"),d).map(function(m){E.add(m,"dragstart",f),E.add(m,"mousedown",f),E.add(m,"touchstart",f)})}(),E.add(d,"dragstart",function(P){s(P)}),E.add(d,"click",ct,{capture:!0}),E.input(d,"ksDragStart",X),E.input(d,"ksDrag",tt),E.input(d,"ksDragEnd",q),E.input(d,"mousedown",X),E.input(d,"mousemove",tt),E.input(d,"mouseleave",q),E.input(d,"mouseup",q),E.input(d,"touchstart",X,{passive:!0}),E.input(d,"touchmove",tt,{passive:!1}),E.input(d,"touchend",q),E.input(d,"touchcancel",q),E.add(window,"wheel",function(P){g&&s(P)});var N="data-keen-slider-scrollable";i("[".concat(N,"]:not([").concat(N,"=false])"),o.container).map(function(P){return function(m){var _;E.input(m,"touchstart",function(O){_=R(O),V=!0,W=!0},{passive:!0}),E.input(m,"touchmove",function(O){var F=Q(),G=F?m.scrollHeight-m.clientHeight:m.scrollWidth-m.clientWidth,$=_-R(O),nt=F?m.scrollTop:m.scrollLeft,ht=F&&m.style.overflowY==="scroll"||!F&&m.style.overflowX==="scroll";if(_=R(O),($<0&&nt>0||$>0&&nt<G)&&W&&ht)return V=!0;W=!1,s(O),V=!1}),E.input(m,"touchend",function(){V=!1})}(P)})}}o.on("updated",mt),o.on("optionsChanged",ft),o.on("created",ft),o.on("destroyed",E.purge)}function ut(o){var d,l,w=null;function k(H,C,W){o.animator.active?g(H,C,W):requestAnimationFrame(function(){return g(H,C,W)})}function v(){k(!1,!1,l)}function g(H,C,W){var V=0,j=o.size,T=o.track.details;if(T&&d){var E=T.slides;d.forEach(function(tt,X){if(H)!w&&C&&M(tt,null,W),S(tt,null,W);else{if(!E[X])return;var q=E[X].size*j;!w&&C&&M(tt,q,W),S(tt,E[X].distance*j-V,W),V+=q}})}}function L(H){return o.options.renderMode==="performance"?Math.round(H):H}function M(H,C,W){var V=W?"height":"width";C!==null&&(C=L(C)+"px"),H.style["min-"+V]=C,H.style["max-"+V]=C}function S(H,C,W){if(C!==null){C=L(C);var V=W?C:0;C="translate3d(".concat(W?0:C,"px, ").concat(V,"px, 0)")}H.style.transform=C,H.style["-webkit-transform"]=C}function U(){d&&(g(!0,!0,l),d=null),o.on("detailsChanged",v,!0)}function J(){k(!1,!0,l)}function z(){U(),l=o.options.vertical,o.options.disabled||o.options.renderMode==="custom"||(w=x(o.options.slides,"perView",null)==="auto",o.on("detailsChanged",v),(d=o.slides).length&&J())}o.on("created",z),o.on("optionsChanged",z),o.on("beforeOptionsChanged",function(){U()}),o.on("updated",J),o.on("destroyed",U)}function le(o,d){return function(l){var w,k,v,g,L,M=b();function S(A){var R;r(l.container,"reverse",(R=l.container,window.getComputedStyle(R,null).getPropertyValue("direction")!=="rtl"||A?null:"")),r(l.container,"v",l.options.vertical&&!A?"":null),r(l.container,"disabled",l.options.disabled&&!A?"":null)}function U(){J()&&V()}function J(){var A=null;if(g.forEach(function(Q){Q.matches&&(A=Q.__media)}),A===w)return!1;w||l.emit("beforeOptionsChanged"),w=A;var R=A?v.breakpoints[A]:v;return l.options=rt(rt({},v),R),S(),X(),q(),T(),!0}function z(A){var R=D(A);return(l.options.vertical?R.height:R.width)/l.size||1}function H(){return l.options.trackConfig.length}function C(A){for(var R in w=!1,v=rt(rt({},d),A),M.purge(),k=l.size,g=[],v.breakpoints||[]){var Q=window.matchMedia(R);Q.__media=R,g.push(Q),M.add(Q,"change",U)}M.add(window,"orientationchange",tt),M.add(window,"resize",E),J()}function W(A){l.animator.stop();var R=l.track.details;l.track.init(A??(R?R.abs:0))}function V(A){W(A),l.emit("optionsChanged")}function j(A,R){if(A)return C(A),void V(R);X(),q();var Q=H();T(),H()!==Q?V(R):W(R),l.emit("updated")}function T(){var A=l.options.slides;if(typeof A=="function")return l.options.trackConfig=A(l.size,l.slides);for(var R=l.slides,Q=R.length,mt=typeof A=="number"?A:x(A,"number",Q,!0),ct=[],ft=x(A,"perView",1,!0),I=x(A,"spacing",0,!0)/l.size||0,N=ft==="auto"?I:I/ft,P=x(A,"origin","auto"),m=0,_=0;_<mt;_++){var O=ft==="auto"?z(R[_]):1/ft-I+N,F=P==="center"?.5-O/2:P==="auto"?0:P;ct.push({origin:F,size:O,spacing:I}),m+=O}if(m+=I*(mt-1),P==="auto"&&!l.options.loop&&ft!==1){var G=0;ct.map(function($){var nt=m-G;return G+=$.size+I,nt>=1||($.origin=1-nt-(m>1?0:1-m)),$})}l.options.trackConfig=ct}function E(){X();var A=l.size;l.options.disabled||A===k||(k=A,j())}function tt(){E(),setTimeout(E,500),setTimeout(E,2e3)}function X(){var A=D(l.container);l.size=(l.options.vertical?A.height:A.width)||1}function q(){l.slides=i(l.options.selector,l.container)}l.container=(L=i(o,document)).length?L[0]:null,l.destroy=function(){M.purge(),l.emit("destroyed"),S(!0)},l.prev=function(){l.moveToIdx(l.track.details.abs-1,!0)},l.next=function(){l.moveToIdx(l.track.details.abs+1,!0)},l.update=j,C(l.options)}}var zt=function(o,d,l){try{return function(w,k){var v,g={};return v={emit:function(L){g[L]&&g[L].forEach(function(S){S(v)});var M=v.options&&v.options[L];M&&M(v)},moveToIdx:function(L,M,S){var U=v.track.idxToDist(L,M);if(U){var J=v.options.defaultAnimation;v.animator.start([{distance:U,duration:x(S||J,"duration",500),easing:x(S||J,"easing",function(z){return 1+--z*z*z*z*z})}])}},on:function(L,M,S){S===void 0&&(S=!1),g[L]||(g[L]=[]);var U=g[L].indexOf(M);U>-1?S&&delete g[L][U]:S||g[L].push(M)},options:w},function(){if(v.track=et(v),v.animator=at(v),k)for(var L=0,M=k;L<M.length;L++)(0,M[L])(v);v.track.init(v.options.initial||0),v.emit("created")}(),v}(d,Z([le(o,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),ut,pt,it],l||[],!0))}catch(w){console.error(w)}};return qt.useKeenSlider=function(o,d){var l=t.useRef(null),w=t.useRef(!1),k=t.useRef(o),v=t.useCallback(function(g){g?(k.current=o,l.current=new zt(g,o,d),w.current=!1):(l.current&&l.current.destroy&&l.current.destroy(),l.current=null)},[]);return t.useEffect(function(){st(k.current,o)||(k.current=o,l.current&&l.current.update(k.current))},[o]),[v,l]},qt}var Fn=Ta();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Ia(t,e,n){return(e=Ma(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function an(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?an(Object(n),!0).forEach(function(a){Ia(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):an(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function _a(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ma(t){var e=_a(t,"string");return typeof e=="symbol"?e:e+""}const rn=()=>{};let ze={},Ln={},Rn=null,zn={mark:rn,measure:rn};try{typeof window<"u"&&(ze=window),typeof document<"u"&&(Ln=document),typeof MutationObserver<"u"&&(Rn=MutationObserver),typeof performance<"u"&&(zn=performance)}catch{}const{userAgent:on=""}=ze.navigator||{},Ot=ze,K=Ln,sn=Rn,Kt=zn;Ot.document;const kt=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",Dn=~on.indexOf("MSIE")||~on.indexOf("Trident/");var Fa=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,La=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Wn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ra={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],lt="classic",ae="duotone",za="sharp",Da="sharp-duotone",Un=[lt,ae,za,Da],Wa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Ya={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ua=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ha={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Va=["fak","fa-kit","fakd","fa-kit-duotone"],ln={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ba=["kit"],Xa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ga=["fak","fakd"],$a={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},cn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Zt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ka=["fak","fa-kit","fakd","fa-kit-duotone"],Za={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ja={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Qa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ve={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},tr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ye=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...qa,...tr],er=["solid","regular","light","thin","duotone","brands"],Hn=[1,2,3,4,5,6,7,8,9,10],nr=Hn.concat([11,12,13,14,15,16,17,18,19,20]),ar=[...Object.keys(Qa),...er,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Zt.GROUP,Zt.SWAP_OPACITY,Zt.PRIMARY,Zt.SECONDARY].concat(Hn.map(t=>"".concat(t,"x"))).concat(nr.map(t=>"w-".concat(t))),rr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const xt="___FONT_AWESOME___",xe=16,Vn="fa",Bn="svg-inline--fa",Ct="data-fa-i2svg",we="data-fa-pseudo-element",ir="data-fa-pseudo-element-pending",De="data-prefix",We="data-icon",fn="fontawesome-i2svg",or="async",sr=["HTML","HEAD","STYLE","SCRIPT"],Xn=(()=>{try{return!0}catch{return!1}})();function Bt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[lt]}})}const Gn=u({},Wn);Gn[lt]=u(u(u(u({},{"fa-duotone":"duotone"}),Wn[lt]),ln.kit),ln["kit-duotone"]);const lr=Bt(Gn),ke=u({},Ha);ke[lt]=u(u(u(u({},{duotone:"fad"}),ke[lt]),cn.kit),cn["kit-duotone"]);const un=Bt(ke),Ae=u({},ve);Ae[lt]=u(u({},Ae[lt]),$a.kit);const Ye=Bt(Ae),Pe=u({},Ja);Pe[lt]=u(u({},Pe[lt]),Xa.kit);Bt(Pe);const cr=Fa,$n="fa-layers-text",fr=La,ur=u({},Wa);Bt(ur);const dr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],de=Ra,mr=[...Ba,...ar],Yt=Ot.FontAwesomeConfig||{};function pr(t){var e=K.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function hr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}K&&typeof K.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=hr(pr(n));r!=null&&(Yt[a]=r)});const qn={styleDefault:"solid",familyDefault:lt,cssPrefix:Vn,replacementClass:Bn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yt.familyPrefix&&(Yt.cssPrefix=Yt.familyPrefix);const Ft=u(u({},qn),Yt);Ft.autoReplaceSvg||(Ft.observeMutations=!1);const y={};Object.keys(qn).forEach(t=>{Object.defineProperty(y,t,{enumerable:!0,set:function(e){Ft[t]=e,Ut.forEach(n=>n(y))},get:function(){return Ft[t]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(t){Ft.cssPrefix=t,Ut.forEach(e=>e(y))},get:function(){return Ft.cssPrefix}});Ot.FontAwesomeConfig=y;const Ut=[];function gr(t){return Ut.push(t),()=>{Ut.splice(Ut.indexOf(t),1)}}const Pt=xe,vt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function br(t){if(!t||!kt)return;const e=K.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=K.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return K.head.insertBefore(e,a),t}const vr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ht(){let t=12,e="";for(;t-- >0;)e+=vr[Math.random()*62|0];return e}function Rt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ue(t){return t.classList?Rt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Kn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yr(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Kn(t[n]),'" '),"").trim()}function re(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function He(t){return t.size!==vt.size||t.x!==vt.x||t.y!==vt.y||t.rotate!==vt.rotate||t.flipX||t.flipY}function xr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),f="rotate(".concat(e.rotate," 0 0)"),b={transform:"".concat(i," ").concat(s," ").concat(f)},p={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:b,path:p}}function wr(t){let{transform:e,width:n=xe,height:a=xe,startCentered:r=!1}=t,i="";return r&&Dn?i+="translate(".concat(e.x/Pt-n/2,"em, ").concat(e.y/Pt-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/Pt,"em), calc(-50% + ").concat(e.y/Pt,"em)) "):i+="translate(".concat(e.x/Pt,"em, ").concat(e.y/Pt,"em) "),i+="scale(".concat(e.size/Pt*(e.flipX?-1:1),", ").concat(e.size/Pt*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var kr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Zn(){const t=Vn,e=Bn,n=y.cssPrefix,a=y.replacementClass;let r=kr;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),f=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(f,".".concat(a))}return r}let dn=!1;function me(){y.autoAddCss&&!dn&&(br(Zn()),dn=!0)}var Ar={mixout(){return{dom:{css:Zn,insertCss:me}}},hooks(){return{beforeDOMElementCreation(){me()},beforeI2svg(){me()}}}};const wt=Ot||{};wt[xt]||(wt[xt]={});wt[xt].styles||(wt[xt].styles={});wt[xt].hooks||(wt[xt].hooks={});wt[xt].shims||(wt[xt].shims=[]);var yt=wt[xt];const Jn=[],Qn=function(){K.removeEventListener("DOMContentLoaded",Qn),te=1,Jn.map(t=>t())};let te=!1;kt&&(te=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),te||K.addEventListener("DOMContentLoaded",Qn));function Pr(t){kt&&(te?setTimeout(t,0):Jn.push(t))}function Xt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Kn(t):"<".concat(e," ").concat(yr(n),">").concat(a.map(Xt).join(""),"</").concat(e,">")}function mn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var pe=function(e,n,a,r){var i=Object.keys(e),s=i.length,f=n,b,p,h;for(a===void 0?(b=1,h=e[i[0]]):(b=0,h=a);b<s;b++)p=i[b],h=f(h,e[p],p,e);return h};function Or(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Oe(t){const e=Or(t);return e.length===1?e[0].toString(16):null}function Sr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function pn(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Se(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=pn(e);typeof yt.hooks.addPack=="function"&&!a?yt.hooks.addPack(t,pn(e)):yt.styles[t]=u(u({},yt.styles[t]||{}),r),t==="fas"&&Se("fa",e)}const{styles:Vt,shims:Nr}=yt,ta=Object.keys(Ye),Er=ta.reduce((t,e)=>(t[e]=Object.keys(Ye[e]),t),{});let Ve=null,ea={},na={},aa={},ra={},ia={};function Cr(t){return~mr.indexOf(t)}function jr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Cr(r)?r:null}const oa=()=>{const t=a=>pe(Vt,(r,i,s)=>(r[s]=pe(i,a,{}),r),{});ea=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(f=>typeof f=="number").forEach(f=>{a[f.toString(16)]=i}),a)),na=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(f=>typeof f=="string").forEach(f=>{a[f]=i}),a)),ia=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(f=>{a[f]=i}),a});const e="far"in Vt||y.autoFetchSvg,n=pe(Nr,(a,r)=>{const i=r[0];let s=r[1];const f=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:f}),a},{names:{},unicodes:{}});aa=n.names,ra=n.unicodes,Ve=ie(y.styleDefault,{family:y.familyDefault})};gr(t=>{Ve=ie(t.styleDefault,{family:y.familyDefault})});oa();function Be(t,e){return(ea[t]||{})[e]}function Tr(t,e){return(na[t]||{})[e]}function Et(t,e){return(ia[t]||{})[e]}function sa(t){return aa[t]||{prefix:null,iconName:null}}function Ir(t){const e=ra[t],n=Be("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function St(){return Ve}const la=()=>({prefix:null,iconName:null,rest:[]});function _r(t){let e=lt;const n=ta.reduce((a,r)=>(a[r]="".concat(y.cssPrefix,"-").concat(r),a),{});return Un.forEach(a=>{(t.includes(n[a])||t.some(r=>Er[a].includes(r)))&&(e=a)}),e}function ie(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=lt}=e,a=lr[n][t];if(n===ae&&!t)return"fad";const r=un[n][t]||un[n][a],i=t in yt.styles?t:null;return r||i||null}function Mr(t){let e=[],n=null;return t.forEach(a=>{const r=jr(y.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function hn(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function oe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=ye.concat(Ka),i=hn(t.filter(D=>r.includes(D))),s=hn(t.filter(D=>!ye.includes(D))),f=i.filter(D=>(a=D,!Yn.includes(D))),[b=null]=f,p=_r(i),h=u(u({},Mr(s)),{},{prefix:ie(b,{family:p})});return u(u(u({},h),zr({values:t,family:p,styles:Vt,config:y,canonical:h,givenPrefix:a})),Fr(n,a,h))}function Fr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?sa(r):{},s=Et(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!Vt.far&&Vt.fas&&!y.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Lr=Un.filter(t=>t!==lt||t!==ae),Rr=Object.keys(ve).filter(t=>t!==lt).map(t=>Object.keys(ve[t])).flat();function zr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,f=n===ae,b=e.includes("fa-duotone")||e.includes("fad"),p=s.familyDefault==="duotone",h=a.prefix==="fad"||a.prefix==="fa-duotone";if(!f&&(b||p||h)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Lr.includes(n)&&(Object.keys(i).find(x=>Rr.includes(x))||s.autoFetchSvg)){const x=Ua.get(n).defaultShortPrefixId;a.prefix=x,a.iconName=Et(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=St()||"fas"),a}class Dr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=u(u({},this.definitions[i]||{}),r[i]),Se(i,r[i]);const s=Ye[lt][i];s&&Se(s,r[i]),oa()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:f}=a[r],b=f[2];e[i]||(e[i]={}),b.length>0&&b.forEach(p=>{typeof p=="string"&&(e[i][p]=f)}),e[i][s]=f}),e}}let gn=[],It={};const Mt={},Wr=Object.keys(Mt);function Yr(t,e){let{mixoutsTo:n}=e;return gn=t,It={},Object.keys(Mt).forEach(a=>{Wr.indexOf(a)===-1&&delete Mt[a]}),gn.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{It[s]||(It[s]=[]),It[s].push(i[s])})}a.provides&&a.provides(Mt)}),n}function Ne(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(It[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function jt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(It[t]||[]).forEach(i=>{i.apply(null,n)})}function Nt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Mt[t]?Mt[t].apply(null,e):void 0}function Ee(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||St();if(e)return e=Et(n,e)||e,mn(ca.definitions,n,e)||mn(yt.styles,n,e)}const ca=new Dr,Ur=()=>{y.autoReplaceSvg=!1,y.observeMutations=!1,jt("noAuto")},Hr={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kt?(jt("beforeI2svg",t),Nt("pseudoElements2svg",t),Nt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,Pr(()=>{Br({autoReplaceSvgRoot:e}),jt("watch",t)})}},Vr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Et(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ie(t[0]);return{prefix:n,iconName:Et(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(y.cssPrefix,"-"))>-1||t.match(cr))){const e=oe(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||St(),iconName:Et(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=St();return{prefix:e,iconName:Et(e,t)||t}}}},dt={noAuto:Ur,config:y,dom:Hr,parse:Vr,library:ca,findIconDefinition:Ee,toHtml:Xt},Br=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=K}=t;(Object.keys(yt.styles).length>0||y.autoFetchSvg)&&kt&&y.autoReplaceSvg&&dt.dom.i2svg({node:e})};function se(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Xt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!kt)return;const n=K.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Xr(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(He(s)&&n.found&&!a.found){const{width:f,height:b}=n,p={x:f/b/2,y:.5};r.style=re(u(u({},i),{},{"transform-origin":"".concat(p.x+s.x/16,"em ").concat(p.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Gr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(y.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:s}),children:a}]}]}function Xe(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:f,maskId:b,titleId:p,extra:h,watchable:D=!1}=t,{width:x,height:B}=n.found?n:e,st=Ga.includes(a),rt=[y.replacementClass,r?"".concat(y.cssPrefix,"-").concat(r):""].filter(ut=>h.classes.indexOf(ut)===-1).filter(ut=>ut!==""||!!ut).concat(h.classes).join(" ");let Z={children:[],attributes:u(u({},h.attributes),{},{"data-prefix":a,"data-icon":r,class:rt,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(B)})};const at=st&&!~h.classes.indexOf("fa-fw")?{width:"".concat(x/B*16*.0625,"em")}:{};D&&(Z.attributes[Ct]=""),f&&(Z.children.push({tag:"title",attributes:{id:Z.attributes["aria-labelledby"]||"title-".concat(p||Ht())},children:[f]}),delete Z.attributes.title);const et=u(u({},Z),{},{prefix:a,iconName:r,main:e,mask:n,maskId:b,transform:i,symbol:s,styles:u(u({},at),h.styles)}),{children:it,attributes:pt}=n.found&&e.found?Nt("generateAbstractMask",et)||{children:[],attributes:{}}:Nt("generateAbstractIcon",et)||{children:[],attributes:{}};return et.children=it,et.attributes=pt,s?Gr(et):Xr(et)}function bn(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:f=!1}=t,b=u(u(u({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});f&&(b[Ct]="");const p=u({},s.styles);He(r)&&(p.transform=wr({transform:r,startCentered:!0,width:n,height:a}),p["-webkit-transform"]=p.transform);const h=re(p);h.length>0&&(b.style=h);const D=[];return D.push({tag:"span",attributes:b,children:[e]}),i&&D.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),D}function $r(t){const{content:e,title:n,extra:a}=t,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=re(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:he}=yt;function Ce(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(de.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(de.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(de.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const qr={found:!1,width:512,height:512};function Kr(t,e){!Xn&&!y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function je(t,e){let n=e;return e==="fa"&&y.styleDefault!==null&&(e=St()),new Promise((a,r)=>{if(n==="fa"){const i=sa(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&he[e]&&he[e][t]){const i=he[e][t];return a(Ce(i))}Kr(t,e),a(u(u({},qr),{},{icon:y.showMissingIcons&&t?Nt("missingIconAbstract")||{}:{}}))})}const vn=()=>{},Te=y.measurePerformance&&Kt&&Kt.mark&&Kt.measure?Kt:{mark:vn,measure:vn},Wt='FA "6.7.2"',Zr=t=>(Te.mark("".concat(Wt," ").concat(t," begins")),()=>fa(t)),fa=t=>{Te.mark("".concat(Wt," ").concat(t," ends")),Te.measure("".concat(Wt," ").concat(t),"".concat(Wt," ").concat(t," begins"),"".concat(Wt," ").concat(t," ends"))};var Ge={begin:Zr,end:fa};const Jt=()=>{};function yn(t){return typeof(t.getAttribute?t.getAttribute(Ct):null)=="string"}function Jr(t){const e=t.getAttribute?t.getAttribute(De):null,n=t.getAttribute?t.getAttribute(We):null;return e&&n}function Qr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(y.replacementClass)}function ti(){return y.autoReplaceSvg===!0?Qt.replace:Qt[y.autoReplaceSvg]||Qt.replace}function ei(t){return K.createElementNS("http://www.w3.org/2000/svg",t)}function ni(t){return K.createElement(t)}function ua(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ei:ni}=e;if(typeof t=="string")return K.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(ua(i,{ceFn:n}))}),a}function ai(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Qt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ua(n),e)}),e.getAttribute(Ct)===null&&y.keepOriginalSource){let n=K.createComment(ai(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ue(e).indexOf(y.replacementClass))return Qt.replace(t);const a=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,f)=>(f===y.replacementClass||f.match(a)?s.toSvg.push(f):s.toNode.push(f),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>Xt(i)).join(`
`);e.setAttribute(Ct,""),e.innerHTML=r}};function xn(t){t()}function da(t,e){const n=typeof e=="function"?e:Jt;if(t.length===0)n();else{let a=xn;y.mutateApproach===or&&(a=Ot.requestAnimationFrame||xn),a(()=>{const r=ti(),i=Ge.begin("mutate");t.map(r),i(),n()})}}let $e=!1;function ma(){$e=!0}function Ie(){$e=!1}let ee=null;function wn(t){if(!sn||!y.observeMutations)return;const{treeCallback:e=Jt,nodeCallback:n=Jt,pseudoElementsCallback:a=Jt,observeMutationsRoot:r=K}=t;ee=new sn(i=>{if($e)return;const s=St();Rt(i).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!yn(f.addedNodes[0])&&(y.searchPseudoElements&&a(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&y.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&yn(f.target)&&~dr.indexOf(f.attributeName))if(f.attributeName==="class"&&Jr(f.target)){const{prefix:b,iconName:p}=oe(Ue(f.target));f.target.setAttribute(De,b||s),p&&f.target.setAttribute(We,p)}else Qr(f.target)&&n(f.target)})}),kt&&ee.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ri(){ee&&ee.disconnect()}function ii(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],f=i.slice(1);return s&&f.length>0&&(a[s]=f.join(":").trim()),a},{})),n}function oi(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=oe(Ue(t));return r.prefix||(r.prefix=St()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Tr(r.prefix,t.innerText)||Be(r.prefix,Oe(t.innerText))),!r.iconName&&y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function si(t){const e=Rt(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return y.autoA11y&&(n?e["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(a||Ht()):(e["aria-hidden"]="true",e.focusable="false")),e}function li(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=oi(t),i=si(t),s=Ne("parseNodeAttributes",{},t);let f=e.styleParser?ii(t):[];return u({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:vt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:f,attributes:i}},s)}const{styles:ci}=yt;function pa(t){const e=y.autoReplaceSvg==="nest"?kn(t,{styleParser:!1}):kn(t);return~e.extra.classes.indexOf($n)?Nt("generateLayersText",t,e):Nt("generateSvgReplacementMutation",t,e)}function fi(){return[...Va,...ye]}function An(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kt)return Promise.resolve();const n=K.documentElement.classList,a=h=>n.add("".concat(fn,"-").concat(h)),r=h=>n.remove("".concat(fn,"-").concat(h)),i=y.autoFetchSvg?fi():Yn.concat(Object.keys(ci));i.includes("fa")||i.push("fa");const s=[".".concat($n,":not([").concat(Ct,"])")].concat(i.map(h=>".".concat(h,":not([").concat(Ct,"])"))).join(", ");if(s.length===0)return Promise.resolve();let f=[];try{f=Rt(t.querySelectorAll(s))}catch{}if(f.length>0)a("pending"),r("complete");else return Promise.resolve();const b=Ge.begin("onTree"),p=f.reduce((h,D)=>{try{const x=pa(D);x&&h.push(x)}catch(x){Xn||x.name==="MissingIcon"&&console.error(x)}return h},[]);return new Promise((h,D)=>{Promise.all(p).then(x=>{da(x,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),b(),h()})}).catch(x=>{b(),D(x)})})}function ui(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pa(t).then(n=>{n&&da([n],e)})}function di(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ee(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ee(r||{})),t(a,u(u({},n),{},{mask:r}))}}const mi=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=vt,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:f=null,classes:b=[],attributes:p={},styles:h={}}=e;if(!t)return;const{prefix:D,iconName:x,icon:B}=t;return se(u({type:"icon"},t),()=>(jt("beforeDOMElementCreation",{iconDefinition:t,params:e}),y.autoA11y&&(s?p["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(f||Ht()):(p["aria-hidden"]="true",p.focusable="false")),Xe({icons:{main:Ce(B),mask:r?Ce(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:x,transform:u(u({},vt),n),symbol:a,title:s,maskId:i,titleId:f,extra:{attributes:p,styles:h,classes:b}})))};var pi={mixout(){return{icon:di(mi)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=An,t.nodeCallback=ui,t}}},provides(t){t.i2svg=function(e){const{node:n=K,callback:a=()=>{}}=e;return An(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:f,symbol:b,mask:p,maskId:h,extra:D}=n;return new Promise((x,B)=>{Promise.all([je(a,s),p.iconName?je(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(st=>{let[rt,Z]=st;x([e,Xe({icons:{main:rt,mask:Z},prefix:s,iconName:a,transform:f,symbol:b,maskId:h,title:r,titleId:i,extra:D,watchable:!0})])}).catch(B)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const f=re(s);f.length>0&&(a.style=f);let b;return He(i)&&(b=Nt("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(b||r.icon),{children:n,attributes:a}}}},hi={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return se({type:"layer"},()=>{jt("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},gi={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return se({type:"counter",content:t},()=>(jt("beforeDOMElementCreation",{content:t,params:e}),$r({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(y.cssPrefix,"-layers-counter"),...a]}})))}}}},bi={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=vt,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return se({type:"text",content:t},()=>(jt("beforeDOMElementCreation",{content:t,params:e}),bn({content:t,transform:u(u({},vt),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(y.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,f=null;if(Dn){const b=parseInt(getComputedStyle(e).fontSize,10),p=e.getBoundingClientRect();s=p.width/b,f=p.height/b}return y.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,bn({content:e.innerHTML,width:s,height:f,transform:r,title:a,extra:i,watchable:!0})])}}};const vi=new RegExp('"',"ug"),Pn=[1105920,1112319],On=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),Ya),rr),Za),_e=Object.keys(On).reduce((t,e)=>(t[e.toLowerCase()]=On[e],t),{}),yi=Object.keys(_e).reduce((t,e)=>{const n=_e[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function xi(t){const e=t.replace(vi,""),n=Sr(e,0),a=n>=Pn[0]&&n<=Pn[1],r=e.length===2?e[0]===e[1]:!1;return{value:Oe(r?e[0]:e),isSecondary:a||r}}function wi(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(_e[n]||{})[r]||yi[n]}function Sn(t,e){const n="".concat(ir).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=Rt(t.children).filter(x=>x.getAttribute(we)===e)[0],f=Ot.getComputedStyle(t,e),b=f.getPropertyValue("font-family"),p=b.match(fr),h=f.getPropertyValue("font-weight"),D=f.getPropertyValue("content");if(s&&!p)return t.removeChild(s),a();if(p&&D!=="none"&&D!==""){const x=f.getPropertyValue("content");let B=wi(b,h);const{value:st,isSecondary:rt}=xi(x),Z=p[0].startsWith("FontAwesome");let at=Be(B,st),et=at;if(Z){const it=Ir(st);it.iconName&&it.prefix&&(at=it.iconName,B=it.prefix)}if(at&&!rt&&(!s||s.getAttribute(De)!==B||s.getAttribute(We)!==et)){t.setAttribute(n,et),s&&t.removeChild(s);const it=li(),{extra:pt}=it;pt.attributes[we]=e,je(at,B).then(ut=>{const le=Xe(u(u({},it),{},{icons:{main:ut,mask:la()},prefix:B,iconName:et,extra:pt,watchable:!0})),zt=K.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(zt,t.firstChild):t.appendChild(zt),zt.outerHTML=le.map(o=>Xt(o)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function ki(t){return Promise.all([Sn(t,"::before"),Sn(t,"::after")])}function Ai(t){return t.parentNode!==document.head&&!~sr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(we)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Nn(t){if(kt)return new Promise((e,n)=>{const a=Rt(t.querySelectorAll("*")).filter(Ai).map(ki),r=Ge.begin("searchPseudoElements");ma(),Promise.all(a).then(()=>{r(),Ie(),e()}).catch(()=>{r(),Ie(),n()})})}var Pi={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Nn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=K}=e;y.searchPseudoElements&&Nn(n)}}};let En=!1;var Oi={mixout(){return{dom:{unwatch(){ma(),En=!0}}}},hooks(){return{bootstrap(){wn(Ne("mutationObserverCallbacks",{}))},noAuto(){ri()},watch(t){const{observeMutationsRoot:e}=t;En?Ie():wn(Ne("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Cn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Si={mixout(){return{parse:{transform:t=>Cn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Cn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),b="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),p="rotate(".concat(a.rotate," 0 0)"),h={transform:"".concat(f," ").concat(b," ").concat(p)},D={transform:"translate(".concat(i/2*-1," -256)")},x={outer:s,inner:h,path:D};return{tag:"g",attributes:u({},x.outer),children:[{tag:"g",attributes:u({},x.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),x.path)}]}]}}}};const ge={x:0,y:0,width:"100%",height:"100%"};function jn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ni(t){return t.tag==="g"?t.children:[t]}var Ei={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?oe(n.split(" ").map(r=>r.trim())):la();return a.prefix||(a.prefix=St()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:f}=e;const{width:b,icon:p}=r,{width:h,icon:D}=i,x=xr({transform:f,containerWidth:h,iconWidth:b}),B={tag:"rect",attributes:u(u({},ge),{},{fill:"white"})},st=p.children?{children:p.children.map(jn)}:{},rt={tag:"g",attributes:u({},x.inner),children:[jn(u({tag:p.tag,attributes:u(u({},p.attributes),x.path)},st))]},Z={tag:"g",attributes:u({},x.outer),children:[rt]},at="mask-".concat(s||Ht()),et="clip-".concat(s||Ht()),it={tag:"mask",attributes:u(u({},ge),{},{id:at,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[B,Z]},pt={tag:"defs",children:[{tag:"clipPath",attributes:{id:et},children:Ni(D)},it]};return n.push(pt,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(et,")"),mask:"url(#".concat(at,")")},ge)}),{children:n,attributes:a}}}},Ci={provides(t){let e=!1;Ot.matchMedia&&(e=Ot.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=u(u({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:u(u({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:u(u({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ji={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Ti=[Ar,pi,hi,gi,bi,Pi,Oi,Si,Ei,Ci,ji];Yr(Ti,{mixoutsTo:dt});dt.noAuto;dt.config;dt.library;dt.dom;const Me=dt.parse;dt.findIconDefinition;dt.toHtml;const Ii=dt.icon;dt.layer;dt.text;dt.counter;function Tn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Tn(Object(n),!0).forEach(function(a){_t(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ne(t){"@babel/helpers - typeof";return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(t)}function _t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _i(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Mi(t,e){if(t==null)return{};var n=_i(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Fe(t){return Fi(t)||Li(t)||Ri(t)||zi()}function Fi(t){if(Array.isArray(t))return Le(t)}function Li(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ri(t,e){if(t){if(typeof t=="string")return Le(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Le(t,e)}}function Le(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function zi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Di(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,s=t.shake,f=t.flash,b=t.spin,p=t.spinPulse,h=t.spinReverse,D=t.pulse,x=t.fixedWidth,B=t.inverse,st=t.border,rt=t.listItem,Z=t.flip,at=t.size,et=t.rotation,it=t.pull,pt=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":f,"fa-spin":b,"fa-spin-reverse":h,"fa-spin-pulse":p,"fa-pulse":D,"fa-fw":x,"fa-inverse":B,"fa-border":st,"fa-li":rt,"fa-flip":Z===!0,"fa-flip-horizontal":Z==="horizontal"||Z==="both","fa-flip-vertical":Z==="vertical"||Z==="both"},_t(e,"fa-".concat(at),typeof at<"u"&&at!==null),_t(e,"fa-rotate-".concat(et),typeof et<"u"&&et!==null&&et!==0),_t(e,"fa-pull-".concat(it),typeof it<"u"&&it!==null),_t(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(pt).map(function(ut){return pt[ut]?ut:null}).filter(function(ut){return ut})}function Wi(t){return t=t-0,t===t}function ha(t){return Wi(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Yi=["style"];function Ui(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Hi(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=ha(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Ui(r)]=i:e[r]=i,e},{})}function ga(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(b){return ga(t,b)}),r=Object.keys(e.attributes||{}).reduce(function(b,p){var h=e.attributes[p];switch(p){case"class":b.attrs.className=h,delete e.attributes.class;break;case"style":b.attrs.style=Hi(h);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?b.attrs[p.toLowerCase()]=h:b.attrs[ha(p)]=h}return b},{attrs:{}}),i=n.style,s=i===void 0?{}:i,f=Mi(n,Yi);return r.attrs.style=bt(bt({},r.attrs.style),s),t.apply(void 0,[e.tag,bt(bt({},r.attrs),f)].concat(Fe(a)))}var ba=!1;try{ba=!0}catch{}function Vi(){if(!ba&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function In(t){if(t&&ne(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Me.icon)return Me.icon(t);if(t===null)return null;if(t&&ne(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function be(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?_t({},t,e):{}}var _n={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Lt=Mn.forwardRef(function(t,e){var n=bt(bt({},_n),t),a=n.icon,r=n.mask,i=n.symbol,s=n.className,f=n.title,b=n.titleId,p=n.maskId,h=In(a),D=be("classes",[].concat(Fe(Di(n)),Fe((s||"").split(" ")))),x=be("transform",typeof n.transform=="string"?Me.transform(n.transform):n.transform),B=be("mask",In(r)),st=Ii(h,bt(bt(bt(bt({},D),x),B),{},{symbol:i,title:f,titleId:b,maskId:p}));if(!st)return Vi("Could not find icon",h),null;var rt=st.abstract,Z={ref:e};return Object.keys(n).forEach(function(at){_n.hasOwnProperty(at)||(Z[at]=n[at])}),Bi(rt[0],Z)});Lt.displayName="FontAwesomeIcon";Lt.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};var Bi=ga.bind(null,Mn.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const va={prefix:"fas",iconName:"circle-arrow-left",icon:[512,512,["arrow-circle-left"],"f0a8","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z"]},ya={prefix:"fas",iconName:"circle-arrow-right",icon:[512,512,["arrow-circle-right"],"f0a9","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"]},Xi=({slides:t})=>{const[e,n]=Fn.useKeenSlider({loop:!0,mode:"snap",slides:{perView:1,spacing:10},breakpoints:{"(min-width: 640px)":{slides:{perView:2,spacing:15}},"(min-width: 1024px)":{slides:{perView:3,spacing:20}}}}),a=()=>{var i;(i=n.current)==null||i.prev()},r=()=>{var i;(i=n.current)==null||i.next()};return c.jsxs("section",{className:"relative w-[90%] mx-auto px-6",children:[c.jsx("div",{className:"absolute top-1/2  left-0 z-10",children:c.jsx("button",{onClick:a,children:c.jsx(Lt,{icon:va,size:"2x",className:"text-black bg-white rounded-2xl border border-white"})})}),c.jsx("div",{className:"absolute top-1/2 right-0 z-10",children:c.jsx("button",{onClick:r,children:c.jsx(Lt,{icon:ya,size:"2x",className:"text-black bg-white rounded-2xl border border-white"})})}),c.jsx("div",{ref:e,className:"keen-slider",children:t.map((i,s)=>c.jsx("div",{className:"keen-slider__slide rounded-lg",children:c.jsx("img",{src:i,alt:`Slide ${s+1}`,className:"w-full h-auto object-cover rounded-xl",loading:"lazy"})},s))})]})},Tt=({src:t})=>{const[e,n]=Re.useState(!1),a=()=>{n(!0)};return c.jsxs("div",{className:"bento-tilt_2",children:[!e&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-20",children:c.jsxs("div",{className:"flex space-x-2",children:[c.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce"}),c.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"}),c.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.6s]"})]})}),c.jsx("video",{src:t,loop:!0,muted:!0,autoPlay:!0,preload:"metadata",onCanPlay:a,playsInline:!0,style:{pointerEvents:"none"},className:"size-full object-cover object-center"})]})},Gi=({slides:t})=>{const[e,n]=Fn.useKeenSlider({loop:!0,mode:"snap",rubberband:!0,slides:{perView:1.15,spacing:14},breakpoints:{"(min-width: 768px)":{slides:{perView:1,spacing:24}}}}),a=i=>{var s;i.stopPropagation(),(s=n.current)==null||s.prev()},r=i=>{var s;i.stopPropagation(),(s=n.current)==null||s.next()};return c.jsxs("section",{className:"relative w-full max-w-[1920px] mx-auto my-10",children:[c.jsx("div",{className:"hidden sm:block absolute top-1/2 left-3 z-20 -translate-y-1/2",children:c.jsx("button",{onClick:a,className:"transition hover:scale-110 active:scale-95",children:c.jsx(Lt,{icon:va,size:"2x",className:"text-white bg-black/40 rounded-full backdrop-blur-sm"})})}),c.jsx("div",{className:"hidden sm:block absolute top-1/2 right-3 z-20 -translate-y-1/2",children:c.jsx("button",{onClick:r,className:"transition hover:scale-110 active:scale-95",children:c.jsx(Lt,{icon:ya,size:"2x",className:"text-white bg-black/40 rounded-full backdrop-blur-sm"})})}),c.jsx("div",{ref:e,className:"keen-slider px-4 md:px-0",children:t.map((i,s)=>c.jsx("div",{className:"keen-slider__slide",children:c.jsx("div",{className:`
                                group
                                w-full
                                p-[3px]
                                rounded-3xl
                                bg-gradient-to-br
                                from-white/10
                                via-white/5
                                to-white/10
                                sm:from-white/25
                                sm:via-white/10
                                sm:to-white/25
                                lg:bg-none
                                lg:p-0
                                transition-all
                                duration-500
                            `,children:c.jsx("div",{className:"overflow-hidden rounded-[22px] bg-neutral-900",children:c.jsx("img",{src:i,alt:`Slide ${s+1}`,loading:"lazy",className:`
                                        w-full
                                        aspect-[16/9]
                                        object-cover
                                        
                                    `})})})},s))}),c.jsx("div",{className:"sm:hidden flex justify-center mt-4",children:c.jsxs("div",{className:"flex gap-1",children:[c.jsx("div",{className:"w-8 h-1 rounded-full bg-black/80"}),c.jsx("div",{className:"w-2 h-1 rounded-full bg-black/30"}),c.jsx("div",{className:"w-2 h-1 rounded-full bg-black/30"})]})})]})},$i=["img/1.webp","img/2.webp","img/3.webp","img/5.webp","img/6.webp","img/7.webp","img/8.webp","img/9.webp","img/10.webp","img/11.webp","img/12.webp","img/13.webp"],qi=["img/RoomCross2.webp","img/RoomPanagia2.webp","img/256.webp","img/256-2.webp","img/Start.webp","img/Start2.webp","img/Eversor.webp","img/mid.webp","img/mid3.webp"],Qi=()=>c.jsxs("section",{id:"work",className:"bg-black pb-35",children:[c.jsxs("div",{className:"container mx-auto px-3 md:px-10",children:[c.jsx("div",{className:"px-5 py-10",children:c.jsx(Je,{title:"3d animations / Visuals",containerClass:"mt-5 !text-yellow-300 text-center"})}),c.jsx(Gi,{slides:qi}),c.jsx("br",{}),c.jsx("div",{className:"border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ",children:c.jsx(At,{src:"videos/feature-12.webm",title:c.jsx(c.Fragment,{children:"Beyond The End"}),titleButton:"Watch full video",description:c.jsx(c.Fragment,{children:`Promotional animation for Andri J and Motive Hits's third album "Beyond the End"`}),href:"https://www.youtube.com/watch?v=O4CYOYftk1s"})}),c.jsx("div",{className:"border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ",children:c.jsx(At,{src:"videos/feature-1.mp4",title:c.jsx(c.Fragment,{children:"dialleima"}),description:c.jsx(c.Fragment,{children:"3D animated music video for the artist Agrimi"}),titleButton:"Watch full video",href:"https://www.youtube.com/watch?v=57m9Sb6Nk4M"})}),c.jsx("div",{className:"border-hsla relative mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ",children:c.jsx(At,{src:"videos/feature-13.webm",title:c.jsx(c.Fragment,{children:"Closed Circuit II"}),description:c.jsx(c.Fragment,{children:`Promotional animation for music producer Eversor's album "Closed Circuit ΙΙ"`}),href:"https://vimeo.com/1127080265",titleButton:"Watch full video"})}),c.jsx("br",{}),c.jsxs("div",{className:"grid h-[135vh] grid-cols-2 grid-rows-3 gap-7",children:[c.jsx("div",{className:"bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2",children:c.jsx(At,{title:c.jsx(c.Fragment,{children:"aethales"}),description:c.jsx(c.Fragment,{children:`Animation for producer 256Colors's EP "Aethales Pt.2"`}),src:"videos/feature-14.webm",titleButton:"Watch full video",href:"https://www.youtube.com/watch?v=DNKnkBBHH-U"})}),c.jsx("div",{className:"bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0",children:c.jsx(At,{src:"videos/feature-3.webm"})}),c.jsx("div",{className:"bento-tilt_1 me-14 md:col-span-1 md:me-0",children:c.jsx(At,{title:c.jsx(c.Fragment,{children:"go-ship"}),description:c.jsx(c.Fragment,{children:"3D animated music video for the artist Silent"}),src:"videos/feature-4.webm",titleButton:"Watch full video",href:"https://www.youtube.com/watch?v=kZOZSruDpRw"})}),c.jsx(Tt,{src:"videos/feature-5.webm"}),c.jsx(Tt,{src:"videos/feature-6.webm"})]}),c.jsx("div",{className:"border-hsla relative mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ",children:c.jsx(At,{src:"videos/hero-2.webm",title:c.jsx(c.Fragment,{children:"Unusual Mind"}),description:c.jsx(c.Fragment,{children:'Scene from my animated short film "Unusual Mind" 2025'}),titleButton:"Watch film here",href:"https://youtu.be/_xJd7ZvUFc4?si=GA5onEsLdznPnSOo"})}),c.jsxs("div",{className:"grid  grid-cols-1 md:grid-cols-2 mt-7 gap-7",children:[c.jsx(Tt,{src:"videos/feature-8.webm"}),c.jsx(Tt,{src:"videos/feature-9.webm"})]}),c.jsx("div",{className:"border-hsla relative mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ",children:c.jsx(At,{src:"videos/feature-7.webm"})}),c.jsxs("div",{className:"grid  grid-cols-1 md:grid-cols-2 mt-7 gap-7",children:[c.jsx(Tt,{src:"videos/feature-2.webm"}),c.jsx(Tt,{src:"videos/feature-11.webm"})]})]}),c.jsxs("div",{className:"px-5 py-20",children:[c.jsx(Je,{title:"Illustrations",containerClass:"mt-5 mb-10 !text-pink-300 text-center"}),c.jsx(Xi,{slides:$i})]})]});export{Qi as default};
