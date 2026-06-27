const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LazyVideo-CGdHK0Zu.js","assets/index-D9G2gtsP.js","assets/index-gPJMgIeu.css"])))=>i.map(i=>d[i]);
import{r as Ht,_ as ka,j as f,a as Aa,g as Pa,R as Mn}from"./index-D9G2gtsP.js";import{B as Oa,A as Je}from"./Button-GXkOh6EF.js";const Sa=Ht.lazy(()=>ka(()=>import("./LazyVideo-CGdHK0Zu.js"),__vite__mapDeps([0,1,2]))),At=({src:t,title:e,description:n,titleButton:a,href:r})=>f.jsxs("div",{className:"relative size-full",children:[f.jsx(Ht.Suspense,{fallback:f.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-20",children:f.jsxs("div",{className:"flex space-x-2",children:[f.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce"}),f.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"}),f.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.6s]"})]})}),children:f.jsx(Sa,{src:t,loop:!0,muted:!0,autoPlay:!0,playsInline:!0,preload:"metadata",className:"absolute left-0 top-0 size-full object-cover object-center"})}),f.jsxs("div",{className:" relative z-10 flex size-full flex-col justify-between p-5 text-blue-50",children:[f.jsxs("div",{children:[f.jsx("h1",{className:" bento-title special-font",children:e}),n&&f.jsx("p",{className:"mt-3 max-w-64 text-xs md:text-base",children:n})]}),a&&r&&f.jsx(Oa,{title:a,containerClass:"!bg-yellow-300 flex-center gap-1",href:r})]})]});var Kt={},Qe;function Na(){if(Qe)return Kt;Qe=1,Object.defineProperty(Kt,"__esModule",{value:!0});var t=Aa();function e(o){return Array.prototype.slice.call(o)}function n(o,d){var l=Math.floor(o);return l===d||l+1===d?o:d}function a(){return Date.now()}function r(o,d,l){if(d="data-keen-slider-"+d,l===null)return o.removeAttribute(d);o.setAttribute(d,l||"")}function i(o,d){return d=d||document,typeof o=="function"&&(o=o(d)),Array.isArray(o)?o:typeof o=="string"?e(d.querySelectorAll(o)):o instanceof HTMLElement?[o]:o instanceof NodeList?e(o):[]}function s(o){o.raw&&(o=o.raw),o.cancelable&&!o.defaultPrevented&&o.preventDefault()}function c(o){o.raw&&(o=o.raw),o.stopPropagation&&o.stopPropagation()}function g(){var o=[];return{add:function(d,l,w,k){d.addListener?d.addListener(w):d.addEventListener(l,w,k),o.push([d,l,w,k])},input:function(d,l,w,k){this.add(d,l,function(v){return function(b){b.nativeEvent&&(b=b.nativeEvent);var L=b.changedTouches||[],M=b.targetTouches||[],S=b.detail&&b.detail.x?b.detail:null;return v({id:S?S.identifier?S.identifier:"i":M[0]?M[0]?M[0].identifier:"e":"d",idChanged:S?S.identifier?S.identifier:"i":L[0]?L[0]?L[0].identifier:"e":"d",raw:b,x:S&&S.x?S.x:M[0]?M[0].screenX:S?S.x:b.pageX,y:S&&S.y?S.y:M[0]?M[0].screenY:S?S.y:b.pageY})}}(w),k)},purge:function(){o.forEach(function(d){d[0].removeListener?d[0].removeListener(d[2]):d[0].removeEventListener(d[1],d[2],d[3])}),o=[]}}}function p(o,d,l){return Math.min(Math.max(o,d),l)}function h(o){return(o>0?1:0)-(o<0?1:0)||+o}function D(o){var d=o.getBoundingClientRect();return{height:n(d.height,o.offsetHeight),width:n(d.width,o.offsetWidth)}}function x(o,d,l,w){var k=o&&o[d];return k==null?l:w&&typeof k=="function"?k():k}function B(o){return Math.round(1e6*o)/1e6}function st(o,d){if(o===d)return!0;var l=typeof o;if(l!==typeof d)return!1;if(l!=="object"||o===null||d===null)return l==="function"&&o.toString()===d.toString();if(o.length!==d.length||Object.getOwnPropertyNames(o).length!==Object.getOwnPropertyNames(d).length)return!1;for(var w in o)if(!st(o[w],d[w]))return!1;return!0}var rt=function(){return rt=Object.assign||function(o){for(var d,l=1,w=arguments.length;l<w;l++)for(var k in d=arguments[l])Object.prototype.hasOwnProperty.call(d,k)&&(o[k]=d[k]);return o},rt.apply(this,arguments)};function Z(o,d,l){for(var w,k=0,v=d.length;k<v;k++)!w&&k in d||(w||(w=Array.prototype.slice.call(d,0,k)),w[k]=d[k]);return o.concat(w||Array.prototype.slice.call(d))}function at(o){var d,l,w,k,v,b;function L(R){b||(b=R),M(!0);var H=R-b;H>w&&(H=w);var C=k[l];if(C[3]<H)return l++,L(R);var W=C[2],V=C[4],j=C[0],I=C[1]*(0,C[5])(V===0?1:(H-W)/V);if(I&&o.track.to(j+I),H<w)return U();b=null,M(!1),S(null),o.emit("animationEnded")}function M(R){d.active=R}function S(R){d.targetIdx=R}function U(){var R;R=L,v=window.requestAnimationFrame(R)}function J(){var R;R=v,window.cancelAnimationFrame(R),M(!1),S(null),b&&o.emit("animationStopped"),b=null}return d={active:!1,start:function(R){if(J(),o.track.details){var H=0,C=o.track.details.position;l=0,w=0,k=R.map(function(W){var V,j=Number(C),I=(V=W.earlyExit)!==null&&V!==void 0?V:W.duration,E=W.easing,tt=W.distance*E(I/W.duration)||0;C+=tt;var X=w;return w+=I,H+=tt,[j,W.distance,X,w,W.duration,E]}),S(o.track.distToIdx(H)),U(),o.emit("animationStarted")}},stop:J,targetIdx:null}}function et(o){var d,l,w,k,v,b,L,M,S,U,J,R,H,C,W=1/0,V=[],j=null,I=0;function E(N){ft(I+N)}function tt(N){var P=X(I+N).abs;return z(P)?P:null}function X(N){var P=Math.floor(Math.abs(B(N/l))),m=B((N%l+l)%l);m===l&&(m=0);var _=h(N),O=L.indexOf(Z([],L).reduce(function(G,$){return Math.abs($-m)<Math.abs(G-m)?$:G})),F=O;return _<0&&P++,O===b&&(F=0,P+=_>0?1:-1),{abs:F+P*b*_,origin:O,rel:F}}function q(N,P,m){var _;if(P||!mt())return A(N,m);if(!z(N))return null;var O=X(m??I),F=O.abs,G=N-O.rel,$=F+G;_=A($);var nt=A($-b*h(G));return(nt!==null&&Math.abs(nt)<Math.abs(_)||_===null)&&(_=nt),B(_)}function A(N,P){if(P==null&&(P=B(I)),!z(N)||N===null)return null;N=Math.round(N);var m=X(P),_=m.abs,O=m.rel,F=m.origin,G=ct(N),$=(P%l+l)%l,nt=L[F],ht=Math.floor((N-(_-O))/b)*l;return B(nt-$-nt+L[G]+ht+(F===b?l:0))}function z(N){return Q(N)===N}function Q(N){return p(N,S,U)}function mt(){return k.loop}function ct(N){return(N%b+b)%b}function ft(N){var P;P=N-I,V.push({distance:P,timestamp:a()}),V.length>6&&(V=V.slice(-6)),I=B(N);var m=T().abs;if(m!==j){var _=j!==null;j=m,_&&o.emit("slideChanged")}}function T(N){var P=N?null:function(){if(b){var m=mt(),_=m?(I%l+l)%l:I,O=(m?I%l:I)-v[0][2],F=0-(O<0&&m?l-Math.abs(O):O),G=0,$=X(I),nt=$.abs,ht=$.rel,$t=v[ht][2],qt=v.map(function(gt,xa){var ot=F+G;(ot<0-gt[0]||ot>1)&&(ot+=(Math.abs(ot)>l-1&&m?l:0)*h(-ot));var qe=xa-ht,Ke=h(qe),Dt=qe+nt;m&&(Ke===-1&&ot>$t&&(Dt+=b),Ke===1&&ot<$t&&(Dt-=b),J!==null&&Dt<J&&(ot+=l),R!==null&&Dt>R&&(ot-=l));var Ze=ot+gt[0]+gt[1],wa=Math.max(ot>=0&&Ze<=1?1:Ze<0||ot>1?0:ot<0?Math.min(1,(gt[0]+ot)/gt[0]):(1-ot)/gt[0],0);return G+=gt[0]+gt[1],{abs:Dt,distance:k.rtl?-1*ot+1-gt[0]:ot,portion:wa,size:gt[0]}});return nt=Q(nt),ht=ct(nt),{abs:Q(nt),length:w,max:C,maxIdx:U,min:H,minIdx:S,position:I,progress:m?_/l:I/w,rel:ht,slides:qt,slidesLength:l}}}();return d.details=P,o.emit("detailsChanged"),P}return d={absToRel:ct,add:E,details:null,distToIdx:tt,idxToDist:q,init:function(N){if(function(){if(k=o.options,v=(k.trackConfig||[]).map(function(O){return[x(O,"size",1),x(O,"spacing",0),x(O,"origin",0)]}),b=v.length){l=B(v.reduce(function(O,F){return O+F[0]+F[1]},0));var m,_=b-1;w=B(l+v[0][2]-v[_][0]-v[_][2]-v[_][1]),L=v.reduce(function(O,F){if(!O)return[0];var G=v[O.length-1],$=O[O.length-1]+(G[0]+G[2])+G[1];return $-=F[2],O[O.length-1]>$&&($=O[O.length-1]),$=B($),O.push($),(!m||m<$)&&(M=O.length-1),m=$,O},null),w===0&&(M=0),L.push(B(l))}}(),!b)return T(!0);var P;(function(){var m=o.options.range,_=o.options.loop;J=S=_?x(_,"min",-1/0):0,R=U=_?x(_,"max",W):M;var O=x(m,"min",null),F=x(m,"max",null);O!==null&&(S=O),F!==null&&(U=F),H=S===-1/0?S:o.track.idxToDist(S||0,!0,0),C=U===W?U:q(U,!0,0),F===null&&(R=U),x(m,"align",!1)&&U!==W&&v[ct(U)][2]===0&&(C-=1-v[ct(U)][0],U=tt(C-I)),H=B(H),C=B(C)})(),P=N,Number(P)===P?E(A(Q(N))):T()},to:ft,velocity:function(){var N=a(),P=V.reduce(function(m,_){var O=_.distance,F=_.timestamp;return N-F>200||(h(O)!==h(m.distance)&&m.distance&&(m={distance:0,lastTimestamp:0,time:0}),m.time&&(m.distance+=O),m.lastTimestamp&&(m.time+=F-m.lastTimestamp),m.lastTimestamp=F),m},{distance:0,lastTimestamp:0,time:0});return P.distance/P.time||0}}}function it(o){var d,l,w,k,v,b,L,M;function S(j){return 2*j}function U(j){return p(j,L,M)}function J(j){return 1-Math.pow(1-j,3)}function R(){return w?o.track.velocity():0}function H(){V();var j=o.options.mode==="free-snap",I=o.track,E=R();k=h(E);var tt=o.track.details,X=[];if(E||!j){var q=C(E),A=q.dist,z=q.dur;if(z=S(z),A*=k,j){var Q=I.idxToDist(I.distToIdx(A),!0);Q&&(A=Q)}X.push({distance:A,duration:z,easing:J});var mt=tt.position,ct=mt+A;if(ct<v||ct>b){var ft=ct<v?v-mt:b-mt,T=0,N=E;if(h(ft)===k){var P=Math.min(Math.abs(ft)/Math.abs(A),1),m=function(F){return 1-Math.pow(1-F,1/3)}(P)*z;X[0].earlyExit=m,N=E*(1-P)}else X[0].earlyExit=0,T+=ft;var _=C(N,100),O=_.dist*k;o.options.rubberband&&(X.push({distance:O,duration:S(_.dur),easing:J}),X.push({distance:-O+T,duration:500,easing:J}))}o.animator.start(X)}else o.moveToIdx(U(tt.abs),!0,{duration:500,easing:function(F){return 1+--F*F*F*F*F}})}function C(j,I){I===void 0&&(I=1e3);var E=147e-9+(j=Math.abs(j))/I;return{dist:Math.pow(j,2)/E,dur:j/E}}function W(){var j=o.track.details;j&&(v=j.min,b=j.max,L=j.minIdx,M=j.maxIdx)}function V(){o.animator.stop()}o.on("updated",W),o.on("optionsChanged",W),o.on("created",W),o.on("dragStarted",function(){w=!1,V(),d=l=o.track.details.abs}),o.on("dragChecked",function(){w=!0}),o.on("dragEnded",function(){var j=o.options.mode;j==="snap"&&function(){var I=o.track,E=o.track.details,tt=E.position,X=h(R());(tt>b||tt<v)&&(X=0);var q=d+X;E.slides[I.absToRel(q)].portion===0&&(q-=X),d!==l&&(q=l),h(I.idxToDist(q,!0))!==X&&(q+=X),q=U(q);var A=I.idxToDist(q,!0);o.animator.start([{distance:A,duration:500,easing:function(z){return 1+--z*z*z*z*z}}])}(),j!=="free"&&j!=="free-snap"||H()}),o.on("dragged",function(){l=o.track.details.abs})}function pt(o){var d,l,w,k,v,b,L,M,S,U,J,R,H,C,W,V,j,I,E=g();function tt(T){if(b&&M===T.id){var N=z(T);if(S){if(!A(T))return q(T);U=N,S=!1,o.emit("dragChecked")}if(V)return U=N;s(T);var P=function(_){if(j===-1/0&&I===1/0)return _;var O=o.track.details,F=O.length,G=O.position,$=p(_,j-G,I-G);if(F===0)return 0;if(!o.options.rubberband)return $;if(G<=I&&G>=j||G<j&&l>0||G>I&&l<0)return _;var nt=(G<j?G-j:G-I)/F,ht=k*F,$t=Math.abs(nt*ht),qt=Math.max(0,1-$t/v*2);return qt*qt*_}(L(U-N)/k*w);l=h(P);var m=o.track.details.position;(m>j&&m<I||m===j&&l>0||m===I&&l<0)&&c(T),J+=P,!R&&Math.abs(J*k)>5&&(R=!0),o.track.add(P),U=N,o.emit("dragged")}}function X(T){!b&&o.track.details&&o.track.details.length&&(J=0,b=!0,R=!1,S=!0,M=T.id,A(T),U=z(T),o.emit("dragStarted"))}function q(T){b&&M===T.idChanged&&(b=!1,o.emit("dragEnded"))}function A(T){var N=Q(),P=N?T.y:T.x,m=N?T.x:T.y,_=H!==void 0&&C!==void 0&&Math.abs(C-m)<=Math.abs(H-P);return H=P,C=m,_}function z(T){return Q()?T.y:T.x}function Q(){return o.options.vertical}function mt(){k=o.size,v=Q()?window.innerHeight:window.innerWidth;var T=o.track.details;T&&(j=T.min,I=T.max)}function ct(T){R&&(c(T),s(T))}function ft(){if(E.purge(),o.options.drag&&!o.options.disabled){var T;T=o.options.dragSpeed||1,L=typeof T=="function"?T:function(P){return P*T},w=o.options.rtl?-1:1,mt(),d=o.container,function(){var P="data-keen-slider-clickable";i("[".concat(P,"]:not([").concat(P,"=false])"),d).map(function(m){E.add(m,"dragstart",c),E.add(m,"mousedown",c),E.add(m,"touchstart",c)})}(),E.add(d,"dragstart",function(P){s(P)}),E.add(d,"click",ct,{capture:!0}),E.input(d,"ksDragStart",X),E.input(d,"ksDrag",tt),E.input(d,"ksDragEnd",q),E.input(d,"mousedown",X),E.input(d,"mousemove",tt),E.input(d,"mouseleave",q),E.input(d,"mouseup",q),E.input(d,"touchstart",X,{passive:!0}),E.input(d,"touchmove",tt,{passive:!1}),E.input(d,"touchend",q),E.input(d,"touchcancel",q),E.add(window,"wheel",function(P){b&&s(P)});var N="data-keen-slider-scrollable";i("[".concat(N,"]:not([").concat(N,"=false])"),o.container).map(function(P){return function(m){var _;E.input(m,"touchstart",function(O){_=z(O),V=!0,W=!0},{passive:!0}),E.input(m,"touchmove",function(O){var F=Q(),G=F?m.scrollHeight-m.clientHeight:m.scrollWidth-m.clientWidth,$=_-z(O),nt=F?m.scrollTop:m.scrollLeft,ht=F&&m.style.overflowY==="scroll"||!F&&m.style.overflowX==="scroll";if(_=z(O),($<0&&nt>0||$>0&&nt<G)&&W&&ht)return V=!0;W=!1,s(O),V=!1}),E.input(m,"touchend",function(){V=!1})}(P)})}}o.on("updated",mt),o.on("optionsChanged",ft),o.on("created",ft),o.on("destroyed",E.purge)}function ut(o){var d,l,w=null;function k(H,C,W){o.animator.active?b(H,C,W):requestAnimationFrame(function(){return b(H,C,W)})}function v(){k(!1,!1,l)}function b(H,C,W){var V=0,j=o.size,I=o.track.details;if(I&&d){var E=I.slides;d.forEach(function(tt,X){if(H)!w&&C&&M(tt,null,W),S(tt,null,W);else{if(!E[X])return;var q=E[X].size*j;!w&&C&&M(tt,q,W),S(tt,E[X].distance*j-V,W),V+=q}})}}function L(H){return o.options.renderMode==="performance"?Math.round(H):H}function M(H,C,W){var V=W?"height":"width";C!==null&&(C=L(C)+"px"),H.style["min-"+V]=C,H.style["max-"+V]=C}function S(H,C,W){if(C!==null){C=L(C);var V=W?C:0;C="translate3d(".concat(W?0:C,"px, ").concat(V,"px, 0)")}H.style.transform=C,H.style["-webkit-transform"]=C}function U(){d&&(b(!0,!0,l),d=null),o.on("detailsChanged",v,!0)}function J(){k(!1,!0,l)}function R(){U(),l=o.options.vertical,o.options.disabled||o.options.renderMode==="custom"||(w=x(o.options.slides,"perView",null)==="auto",o.on("detailsChanged",v),(d=o.slides).length&&J())}o.on("created",R),o.on("optionsChanged",R),o.on("beforeOptionsChanged",function(){U()}),o.on("updated",J),o.on("destroyed",U)}function ce(o,d){return function(l){var w,k,v,b,L,M=g();function S(A){var z;r(l.container,"reverse",(z=l.container,window.getComputedStyle(z,null).getPropertyValue("direction")!=="rtl"||A?null:"")),r(l.container,"v",l.options.vertical&&!A?"":null),r(l.container,"disabled",l.options.disabled&&!A?"":null)}function U(){J()&&V()}function J(){var A=null;if(b.forEach(function(Q){Q.matches&&(A=Q.__media)}),A===w)return!1;w||l.emit("beforeOptionsChanged"),w=A;var z=A?v.breakpoints[A]:v;return l.options=rt(rt({},v),z),S(),X(),q(),I(),!0}function R(A){var z=D(A);return(l.options.vertical?z.height:z.width)/l.size||1}function H(){return l.options.trackConfig.length}function C(A){for(var z in w=!1,v=rt(rt({},d),A),M.purge(),k=l.size,b=[],v.breakpoints||[]){var Q=window.matchMedia(z);Q.__media=z,b.push(Q),M.add(Q,"change",U)}M.add(window,"orientationchange",tt),M.add(window,"resize",E),J()}function W(A){l.animator.stop();var z=l.track.details;l.track.init(A??(z?z.abs:0))}function V(A){W(A),l.emit("optionsChanged")}function j(A,z){if(A)return C(A),void V(z);X(),q();var Q=H();I(),H()!==Q?V(z):W(z),l.emit("updated")}function I(){var A=l.options.slides;if(typeof A=="function")return l.options.trackConfig=A(l.size,l.slides);for(var z=l.slides,Q=z.length,mt=typeof A=="number"?A:x(A,"number",Q,!0),ct=[],ft=x(A,"perView",1,!0),T=x(A,"spacing",0,!0)/l.size||0,N=ft==="auto"?T:T/ft,P=x(A,"origin","auto"),m=0,_=0;_<mt;_++){var O=ft==="auto"?R(z[_]):1/ft-T+N,F=P==="center"?.5-O/2:P==="auto"?0:P;ct.push({origin:F,size:O,spacing:T}),m+=O}if(m+=T*(mt-1),P==="auto"&&!l.options.loop&&ft!==1){var G=0;ct.map(function($){var nt=m-G;return G+=$.size+T,nt>=1||($.origin=1-nt-(m>1?0:1-m)),$})}l.options.trackConfig=ct}function E(){X();var A=l.size;l.options.disabled||A===k||(k=A,j())}function tt(){E(),setTimeout(E,500),setTimeout(E,2e3)}function X(){var A=D(l.container);l.size=(l.options.vertical?A.height:A.width)||1}function q(){l.slides=i(l.options.selector,l.container)}l.container=(L=i(o,document)).length?L[0]:null,l.destroy=function(){M.purge(),l.emit("destroyed"),S(!0)},l.prev=function(){l.moveToIdx(l.track.details.abs-1,!0)},l.next=function(){l.moveToIdx(l.track.details.abs+1,!0)},l.update=j,C(l.options)}}var Rt=function(o,d,l){try{return function(w,k){var v,b={};return v={emit:function(L){b[L]&&b[L].forEach(function(S){S(v)});var M=v.options&&v.options[L];M&&M(v)},moveToIdx:function(L,M,S){var U=v.track.idxToDist(L,M);if(U){var J=v.options.defaultAnimation;v.animator.start([{distance:U,duration:x(S||J,"duration",500),easing:x(S||J,"easing",function(R){return 1+--R*R*R*R*R})}])}},on:function(L,M,S){S===void 0&&(S=!1),b[L]||(b[L]=[]);var U=b[L].indexOf(M);U>-1?S&&delete b[L][U]:S||b[L].push(M)},options:w},function(){if(v.track=et(v),v.animator=at(v),k)for(var L=0,M=k;L<M.length;L++)(0,M[L])(v);v.track.init(v.options.initial||0),v.emit("created")}(),v}(d,Z([ce(o,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),ut,pt,it],l||[],!0))}catch(w){console.error(w)}};return Kt.useKeenSlider=function(o,d){var l=t.useRef(null),w=t.useRef(!1),k=t.useRef(o),v=t.useCallback(function(b){b?(k.current=o,l.current=new Rt(b,o,d),w.current=!1):(l.current&&l.current.destroy&&l.current.destroy(),l.current=null)},[]);return t.useEffect(function(){st(k.current,o)||(k.current=o,l.current&&l.current.update(k.current))},[o]),[v,l]},Kt}var Fn=Na();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Ea(t,e,n){return(e=ja(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?tn(Object(n),!0).forEach(function(a){Ea(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ca(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ja(t){var e=Ca(t,"string");return typeof e=="symbol"?e:e+""}const en=()=>{};let Re={},Ln={},zn=null,Rn={mark:en,measure:en};try{typeof window<"u"&&(Re=window),typeof document<"u"&&(Ln=document),typeof MutationObserver<"u"&&(zn=MutationObserver),typeof performance<"u"&&(Rn=performance)}catch{}const{userAgent:nn=""}=Re.navigator||{},Ot=Re,K=Ln,an=zn,Zt=Rn;Ot.document;const kt=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",Dn=~nn.indexOf("MSIE")||~nn.indexOf("Trident/");var Ia=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ta=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Wn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},_a={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],lt="classic",re="duotone",Ma="sharp",Fa="sharp-duotone",Un=[lt,re,Ma,Fa],La={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},za={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ra=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Da={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Wa=["fak","fa-kit","fakd","fa-kit-duotone"],rn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ya=["kit"],Ua={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ha=["fak","fakd"],Va={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},on={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Jt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ba=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Xa=["fak","fa-kit","fakd","fa-kit-duotone"],Ga={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$a={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},qa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ye={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ka=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],xe=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ba,...Ka],Za=["solid","regular","light","thin","duotone","brands"],Hn=[1,2,3,4,5,6,7,8,9,10],Ja=Hn.concat([11,12,13,14,15,16,17,18,19,20]),Qa=[...Object.keys(qa),...Za,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Jt.GROUP,Jt.SWAP_OPACITY,Jt.PRIMARY,Jt.SECONDARY].concat(Hn.map(t=>"".concat(t,"x"))).concat(Ja.map(t=>"w-".concat(t))),tr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const xt="___FONT_AWESOME___",we=16,Vn="fa",Bn="svg-inline--fa",jt="data-fa-i2svg",ke="data-fa-pseudo-element",er="data-fa-pseudo-element-pending",De="data-prefix",We="data-icon",sn="fontawesome-i2svg",nr="async",ar=["HTML","HEAD","STYLE","SCRIPT"],Xn=(()=>{try{return!0}catch{return!1}})();function Xt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[lt]}})}const Gn=u({},Wn);Gn[lt]=u(u(u(u({},{"fa-duotone":"duotone"}),Wn[lt]),rn.kit),rn["kit-duotone"]);const rr=Xt(Gn),Ae=u({},Da);Ae[lt]=u(u(u(u({},{duotone:"fad"}),Ae[lt]),on.kit),on["kit-duotone"]);const ln=Xt(Ae),Pe=u({},ye);Pe[lt]=u(u({},Pe[lt]),Va.kit);const Ye=Xt(Pe),Oe=u({},$a);Oe[lt]=u(u({},Oe[lt]),Ua.kit);Xt(Oe);const ir=Ia,$n="fa-layers-text",or=Ta,sr=u({},La);Xt(sr);const lr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fe=_a,cr=[...Ya,...Qa],Yt=Ot.FontAwesomeConfig||{};function fr(t){var e=K.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ur(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}K&&typeof K.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ur(fr(n));r!=null&&(Yt[a]=r)});const qn={styleDefault:"solid",familyDefault:lt,cssPrefix:Vn,replacementClass:Bn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yt.familyPrefix&&(Yt.cssPrefix=Yt.familyPrefix);const Lt=u(u({},qn),Yt);Lt.autoReplaceSvg||(Lt.observeMutations=!1);const y={};Object.keys(qn).forEach(t=>{Object.defineProperty(y,t,{enumerable:!0,set:function(e){Lt[t]=e,Ut.forEach(n=>n(y))},get:function(){return Lt[t]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(t){Lt.cssPrefix=t,Ut.forEach(e=>e(y))},get:function(){return Lt.cssPrefix}});Ot.FontAwesomeConfig=y;const Ut=[];function dr(t){return Ut.push(t),()=>{Ut.splice(Ut.indexOf(t),1)}}const Pt=we,vt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mr(t){if(!t||!kt)return;const e=K.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=K.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return K.head.insertBefore(e,a),t}const pr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){let t=12,e="";for(;t-- >0;)e+=pr[Math.random()*62|0];return e}function zt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ue(t){return t.classList?zt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Kn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hr(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Kn(t[n]),'" '),"").trim()}function ie(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function He(t){return t.size!==vt.size||t.x!==vt.x||t.y!==vt.y||t.rotate!==vt.rotate||t.flipX||t.flipY}function gr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),g={transform:"".concat(i," ").concat(s," ").concat(c)},p={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:g,path:p}}function br(t){let{transform:e,width:n=we,height:a=we,startCentered:r=!1}=t,i="";return r&&Dn?i+="translate(".concat(e.x/Pt-n/2,"em, ").concat(e.y/Pt-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/Pt,"em), calc(-50% + ").concat(e.y/Pt,"em)) "):i+="translate(".concat(e.x/Pt,"em, ").concat(e.y/Pt,"em) "),i+="scale(".concat(e.size/Pt*(e.flipX?-1:1),", ").concat(e.size/Pt*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var vr=`:root, :host {
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
}`;function Zn(){const t=Vn,e=Bn,n=y.cssPrefix,a=y.replacementClass;let r=vr;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(c,".".concat(a))}return r}let cn=!1;function ue(){y.autoAddCss&&!cn&&(mr(Zn()),cn=!0)}var yr={mixout(){return{dom:{css:Zn,insertCss:ue}}},hooks(){return{beforeDOMElementCreation(){ue()},beforeI2svg(){ue()}}}};const wt=Ot||{};wt[xt]||(wt[xt]={});wt[xt].styles||(wt[xt].styles={});wt[xt].hooks||(wt[xt].hooks={});wt[xt].shims||(wt[xt].shims=[]);var yt=wt[xt];const Jn=[],Qn=function(){K.removeEventListener("DOMContentLoaded",Qn),ee=1,Jn.map(t=>t())};let ee=!1;kt&&(ee=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),ee||K.addEventListener("DOMContentLoaded",Qn));function xr(t){kt&&(ee?setTimeout(t,0):Jn.push(t))}function Gt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Kn(t):"<".concat(e," ").concat(hr(n),">").concat(a.map(Gt).join(""),"</").concat(e,">")}function fn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var de=function(e,n,a,r){var i=Object.keys(e),s=i.length,c=n,g,p,h;for(a===void 0?(g=1,h=e[i[0]]):(g=0,h=a);g<s;g++)p=i[g],h=c(h,e[p],p,e);return h};function wr(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Se(t){const e=wr(t);return e.length===1?e[0].toString(16):null}function kr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function un(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ne(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=un(e);typeof yt.hooks.addPack=="function"&&!a?yt.hooks.addPack(t,un(e)):yt.styles[t]=u(u({},yt.styles[t]||{}),r),t==="fas"&&Ne("fa",e)}const{styles:Bt,shims:Ar}=yt,ta=Object.keys(Ye),Pr=ta.reduce((t,e)=>(t[e]=Object.keys(Ye[e]),t),{});let Ve=null,ea={},na={},aa={},ra={},ia={};function Or(t){return~cr.indexOf(t)}function Sr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Or(r)?r:null}const oa=()=>{const t=a=>de(Bt,(r,i,s)=>(r[s]=de(i,a,{}),r),{});ea=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(c=>typeof c=="number").forEach(c=>{a[c.toString(16)]=i}),a)),na=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(c=>typeof c=="string").forEach(c=>{a[c]=i}),a)),ia=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(c=>{a[c]=i}),a});const e="far"in Bt||y.autoFetchSvg,n=de(Ar,(a,r)=>{const i=r[0];let s=r[1];const c=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:c}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});aa=n.names,ra=n.unicodes,Ve=oe(y.styleDefault,{family:y.familyDefault})};dr(t=>{Ve=oe(t.styleDefault,{family:y.familyDefault})});oa();function Be(t,e){return(ea[t]||{})[e]}function Nr(t,e){return(na[t]||{})[e]}function Et(t,e){return(ia[t]||{})[e]}function sa(t){return aa[t]||{prefix:null,iconName:null}}function Er(t){const e=ra[t],n=Be("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function St(){return Ve}const la=()=>({prefix:null,iconName:null,rest:[]});function Cr(t){let e=lt;const n=ta.reduce((a,r)=>(a[r]="".concat(y.cssPrefix,"-").concat(r),a),{});return Un.forEach(a=>{(t.includes(n[a])||t.some(r=>Pr[a].includes(r)))&&(e=a)}),e}function oe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=lt}=e,a=rr[n][t];if(n===re&&!t)return"fad";const r=ln[n][t]||ln[n][a],i=t in yt.styles?t:null;return r||i||null}function jr(t){let e=[],n=null;return t.forEach(a=>{const r=Sr(y.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function dn(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function se(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=xe.concat(Xa),i=dn(t.filter(D=>r.includes(D))),s=dn(t.filter(D=>!xe.includes(D))),c=i.filter(D=>(a=D,!Yn.includes(D))),[g=null]=c,p=Cr(i),h=u(u({},jr(s)),{},{prefix:oe(g,{family:p})});return u(u(u({},h),Mr({values:t,family:p,styles:Bt,config:y,canonical:h,givenPrefix:a})),Ir(n,a,h))}function Ir(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?sa(r):{},s=Et(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!Bt.far&&Bt.fas&&!y.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Tr=Un.filter(t=>t!==lt||t!==re),_r=Object.keys(ye).filter(t=>t!==lt).map(t=>Object.keys(ye[t])).flat();function Mr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,c=n===re,g=e.includes("fa-duotone")||e.includes("fad"),p=s.familyDefault==="duotone",h=a.prefix==="fad"||a.prefix==="fa-duotone";if(!c&&(g||p||h)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Tr.includes(n)&&(Object.keys(i).find(x=>_r.includes(x))||s.autoFetchSvg)){const x=Ra.get(n).defaultShortPrefixId;a.prefix=x,a.iconName=Et(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=St()||"fas"),a}class Fr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=u(u({},this.definitions[i]||{}),r[i]),Ne(i,r[i]);const s=Ye[lt][i];s&&Ne(s,r[i]),oa()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:c}=a[r],g=c[2];e[i]||(e[i]={}),g.length>0&&g.forEach(p=>{typeof p=="string"&&(e[i][p]=c)}),e[i][s]=c}),e}}let mn=[],_t={};const Ft={},Lr=Object.keys(Ft);function zr(t,e){let{mixoutsTo:n}=e;return mn=t,_t={},Object.keys(Ft).forEach(a=>{Lr.indexOf(a)===-1&&delete Ft[a]}),mn.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{_t[s]||(_t[s]=[]),_t[s].push(i[s])})}a.provides&&a.provides(Ft)}),n}function Ee(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(_t[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function It(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(_t[t]||[]).forEach(i=>{i.apply(null,n)})}function Nt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ft[t]?Ft[t].apply(null,e):void 0}function Ce(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||St();if(e)return e=Et(n,e)||e,fn(ca.definitions,n,e)||fn(yt.styles,n,e)}const ca=new Fr,Rr=()=>{y.autoReplaceSvg=!1,y.observeMutations=!1,It("noAuto")},Dr={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kt?(It("beforeI2svg",t),Nt("pseudoElements2svg",t),Nt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,xr(()=>{Yr({autoReplaceSvgRoot:e}),It("watch",t)})}},Wr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Et(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=oe(t[0]);return{prefix:n,iconName:Et(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(y.cssPrefix,"-"))>-1||t.match(ir))){const e=se(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||St(),iconName:Et(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=St();return{prefix:e,iconName:Et(e,t)||t}}}},dt={noAuto:Rr,config:y,dom:Dr,parse:Wr,library:ca,findIconDefinition:Ce,toHtml:Gt},Yr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=K}=t;(Object.keys(yt.styles).length>0||y.autoFetchSvg)&&kt&&y.autoReplaceSvg&&dt.dom.i2svg({node:e})};function le(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Gt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!kt)return;const n=K.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ur(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(He(s)&&n.found&&!a.found){const{width:c,height:g}=n,p={x:c/g/2,y:.5};r.style=ie(u(u({},i),{},{"transform-origin":"".concat(p.x+s.x/16,"em ").concat(p.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Hr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(y.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:s}),children:a}]}]}function Xe(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:c,maskId:g,titleId:p,extra:h,watchable:D=!1}=t,{width:x,height:B}=n.found?n:e,st=Ha.includes(a),rt=[y.replacementClass,r?"".concat(y.cssPrefix,"-").concat(r):""].filter(ut=>h.classes.indexOf(ut)===-1).filter(ut=>ut!==""||!!ut).concat(h.classes).join(" ");let Z={children:[],attributes:u(u({},h.attributes),{},{"data-prefix":a,"data-icon":r,class:rt,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(B)})};const at=st&&!~h.classes.indexOf("fa-fw")?{width:"".concat(x/B*16*.0625,"em")}:{};D&&(Z.attributes[jt]=""),c&&(Z.children.push({tag:"title",attributes:{id:Z.attributes["aria-labelledby"]||"title-".concat(p||Vt())},children:[c]}),delete Z.attributes.title);const et=u(u({},Z),{},{prefix:a,iconName:r,main:e,mask:n,maskId:g,transform:i,symbol:s,styles:u(u({},at),h.styles)}),{children:it,attributes:pt}=n.found&&e.found?Nt("generateAbstractMask",et)||{children:[],attributes:{}}:Nt("generateAbstractIcon",et)||{children:[],attributes:{}};return et.children=it,et.attributes=pt,s?Hr(et):Ur(et)}function pn(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:c=!1}=t,g=u(u(u({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});c&&(g[jt]="");const p=u({},s.styles);He(r)&&(p.transform=br({transform:r,startCentered:!0,width:n,height:a}),p["-webkit-transform"]=p.transform);const h=ie(p);h.length>0&&(g.style=h);const D=[];return D.push({tag:"span",attributes:g,children:[e]}),i&&D.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),D}function Vr(t){const{content:e,title:n,extra:a}=t,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ie(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:me}=yt;function je(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(fe.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(fe.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Br={found:!1,width:512,height:512};function Xr(t,e){!Xn&&!y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ie(t,e){let n=e;return e==="fa"&&y.styleDefault!==null&&(e=St()),new Promise((a,r)=>{if(n==="fa"){const i=sa(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&me[e]&&me[e][t]){const i=me[e][t];return a(je(i))}Xr(t,e),a(u(u({},Br),{},{icon:y.showMissingIcons&&t?Nt("missingIconAbstract")||{}:{}}))})}const hn=()=>{},Te=y.measurePerformance&&Zt&&Zt.mark&&Zt.measure?Zt:{mark:hn,measure:hn},Wt='FA "6.7.2"',Gr=t=>(Te.mark("".concat(Wt," ").concat(t," begins")),()=>fa(t)),fa=t=>{Te.mark("".concat(Wt," ").concat(t," ends")),Te.measure("".concat(Wt," ").concat(t),"".concat(Wt," ").concat(t," begins"),"".concat(Wt," ").concat(t," ends"))};var Ge={begin:Gr,end:fa};const Qt=()=>{};function gn(t){return typeof(t.getAttribute?t.getAttribute(jt):null)=="string"}function $r(t){const e=t.getAttribute?t.getAttribute(De):null,n=t.getAttribute?t.getAttribute(We):null;return e&&n}function qr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(y.replacementClass)}function Kr(){return y.autoReplaceSvg===!0?te.replace:te[y.autoReplaceSvg]||te.replace}function Zr(t){return K.createElementNS("http://www.w3.org/2000/svg",t)}function Jr(t){return K.createElement(t)}function ua(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Zr:Jr}=e;if(typeof t=="string")return K.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(ua(i,{ceFn:n}))}),a}function Qr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const te={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ua(n),e)}),e.getAttribute(jt)===null&&y.keepOriginalSource){let n=K.createComment(Qr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ue(e).indexOf(y.replacementClass))return te.replace(t);const a=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,c)=>(c===y.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>Gt(i)).join(`
`);e.setAttribute(jt,""),e.innerHTML=r}};function bn(t){t()}function da(t,e){const n=typeof e=="function"?e:Qt;if(t.length===0)n();else{let a=bn;y.mutateApproach===nr&&(a=Ot.requestAnimationFrame||bn),a(()=>{const r=Kr(),i=Ge.begin("mutate");t.map(r),i(),n()})}}let $e=!1;function ma(){$e=!0}function _e(){$e=!1}let ne=null;function vn(t){if(!an||!y.observeMutations)return;const{treeCallback:e=Qt,nodeCallback:n=Qt,pseudoElementsCallback:a=Qt,observeMutationsRoot:r=K}=t;ne=new an(i=>{if($e)return;const s=St();zt(i).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!gn(c.addedNodes[0])&&(y.searchPseudoElements&&a(c.target),e(c.target)),c.type==="attributes"&&c.target.parentNode&&y.searchPseudoElements&&a(c.target.parentNode),c.type==="attributes"&&gn(c.target)&&~lr.indexOf(c.attributeName))if(c.attributeName==="class"&&$r(c.target)){const{prefix:g,iconName:p}=se(Ue(c.target));c.target.setAttribute(De,g||s),p&&c.target.setAttribute(We,p)}else qr(c.target)&&n(c.target)})}),kt&&ne.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ti(){ne&&ne.disconnect()}function ei(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],c=i.slice(1);return s&&c.length>0&&(a[s]=c.join(":").trim()),a},{})),n}function ni(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=se(Ue(t));return r.prefix||(r.prefix=St()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Nr(r.prefix,t.innerText)||Be(r.prefix,Se(t.innerText))),!r.iconName&&y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ai(t){const e=zt(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return y.autoA11y&&(n?e["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(a||Vt()):(e["aria-hidden"]="true",e.focusable="false")),e}function ri(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=ni(t),i=ai(t),s=Ee("parseNodeAttributes",{},t);let c=e.styleParser?ei(t):[];return u({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:vt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:c,attributes:i}},s)}const{styles:ii}=yt;function pa(t){const e=y.autoReplaceSvg==="nest"?yn(t,{styleParser:!1}):yn(t);return~e.extra.classes.indexOf($n)?Nt("generateLayersText",t,e):Nt("generateSvgReplacementMutation",t,e)}function oi(){return[...Wa,...xe]}function xn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kt)return Promise.resolve();const n=K.documentElement.classList,a=h=>n.add("".concat(sn,"-").concat(h)),r=h=>n.remove("".concat(sn,"-").concat(h)),i=y.autoFetchSvg?oi():Yn.concat(Object.keys(ii));i.includes("fa")||i.push("fa");const s=[".".concat($n,":not([").concat(jt,"])")].concat(i.map(h=>".".concat(h,":not([").concat(jt,"])"))).join(", ");if(s.length===0)return Promise.resolve();let c=[];try{c=zt(t.querySelectorAll(s))}catch{}if(c.length>0)a("pending"),r("complete");else return Promise.resolve();const g=Ge.begin("onTree"),p=c.reduce((h,D)=>{try{const x=pa(D);x&&h.push(x)}catch(x){Xn||x.name==="MissingIcon"&&console.error(x)}return h},[]);return new Promise((h,D)=>{Promise.all(p).then(x=>{da(x,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),g(),h()})}).catch(x=>{g(),D(x)})})}function si(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pa(t).then(n=>{n&&da([n],e)})}function li(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ce(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ce(r||{})),t(a,u(u({},n),{},{mask:r}))}}const ci=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=vt,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:c=null,classes:g=[],attributes:p={},styles:h={}}=e;if(!t)return;const{prefix:D,iconName:x,icon:B}=t;return le(u({type:"icon"},t),()=>(It("beforeDOMElementCreation",{iconDefinition:t,params:e}),y.autoA11y&&(s?p["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(c||Vt()):(p["aria-hidden"]="true",p.focusable="false")),Xe({icons:{main:je(B),mask:r?je(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:x,transform:u(u({},vt),n),symbol:a,title:s,maskId:i,titleId:c,extra:{attributes:p,styles:h,classes:g}})))};var fi={mixout(){return{icon:li(ci)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=xn,t.nodeCallback=si,t}}},provides(t){t.i2svg=function(e){const{node:n=K,callback:a=()=>{}}=e;return xn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:c,symbol:g,mask:p,maskId:h,extra:D}=n;return new Promise((x,B)=>{Promise.all([Ie(a,s),p.iconName?Ie(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(st=>{let[rt,Z]=st;x([e,Xe({icons:{main:rt,mask:Z},prefix:s,iconName:a,transform:c,symbol:g,maskId:h,title:r,titleId:i,extra:D,watchable:!0})])}).catch(B)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const c=ie(s);c.length>0&&(a.style=c);let g;return He(i)&&(g=Nt("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(g||r.icon),{children:n,attributes:a}}}},ui={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return le({type:"layer"},()=>{It("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},di={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return le({type:"counter",content:t},()=>(It("beforeDOMElementCreation",{content:t,params:e}),Vr({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(y.cssPrefix,"-layers-counter"),...a]}})))}}}},mi={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=vt,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return le({type:"text",content:t},()=>(It("beforeDOMElementCreation",{content:t,params:e}),pn({content:t,transform:u(u({},vt),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(y.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,c=null;if(Dn){const g=parseInt(getComputedStyle(e).fontSize,10),p=e.getBoundingClientRect();s=p.width/g,c=p.height/g}return y.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,pn({content:e.innerHTML,width:s,height:c,transform:r,title:a,extra:i,watchable:!0})])}}};const pi=new RegExp('"',"ug"),wn=[1105920,1112319],kn=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),za),tr),Ga),Me=Object.keys(kn).reduce((t,e)=>(t[e.toLowerCase()]=kn[e],t),{}),hi=Object.keys(Me).reduce((t,e)=>{const n=Me[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function gi(t){const e=t.replace(pi,""),n=kr(e,0),a=n>=wn[0]&&n<=wn[1],r=e.length===2?e[0]===e[1]:!1;return{value:Se(r?e[0]:e),isSecondary:a||r}}function bi(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Me[n]||{})[r]||hi[n]}function An(t,e){const n="".concat(er).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=zt(t.children).filter(x=>x.getAttribute(ke)===e)[0],c=Ot.getComputedStyle(t,e),g=c.getPropertyValue("font-family"),p=g.match(or),h=c.getPropertyValue("font-weight"),D=c.getPropertyValue("content");if(s&&!p)return t.removeChild(s),a();if(p&&D!=="none"&&D!==""){const x=c.getPropertyValue("content");let B=bi(g,h);const{value:st,isSecondary:rt}=gi(x),Z=p[0].startsWith("FontAwesome");let at=Be(B,st),et=at;if(Z){const it=Er(st);it.iconName&&it.prefix&&(at=it.iconName,B=it.prefix)}if(at&&!rt&&(!s||s.getAttribute(De)!==B||s.getAttribute(We)!==et)){t.setAttribute(n,et),s&&t.removeChild(s);const it=ri(),{extra:pt}=it;pt.attributes[ke]=e,Ie(at,B).then(ut=>{const ce=Xe(u(u({},it),{},{icons:{main:ut,mask:la()},prefix:B,iconName:et,extra:pt,watchable:!0})),Rt=K.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Rt,t.firstChild):t.appendChild(Rt),Rt.outerHTML=ce.map(o=>Gt(o)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function vi(t){return Promise.all([An(t,"::before"),An(t,"::after")])}function yi(t){return t.parentNode!==document.head&&!~ar.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ke)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Pn(t){if(kt)return new Promise((e,n)=>{const a=zt(t.querySelectorAll("*")).filter(yi).map(vi),r=Ge.begin("searchPseudoElements");ma(),Promise.all(a).then(()=>{r(),_e(),e()}).catch(()=>{r(),_e(),n()})})}var xi={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Pn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=K}=e;y.searchPseudoElements&&Pn(n)}}};let On=!1;var wi={mixout(){return{dom:{unwatch(){ma(),On=!0}}}},hooks(){return{bootstrap(){vn(Ee("mutationObserverCallbacks",{}))},noAuto(){ti()},watch(t){const{observeMutationsRoot:e}=t;On?_e():vn(Ee("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Sn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var ki={mixout(){return{parse:{transform:t=>Sn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Sn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),g="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),p="rotate(".concat(a.rotate," 0 0)"),h={transform:"".concat(c," ").concat(g," ").concat(p)},D={transform:"translate(".concat(i/2*-1," -256)")},x={outer:s,inner:h,path:D};return{tag:"g",attributes:u({},x.outer),children:[{tag:"g",attributes:u({},x.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),x.path)}]}]}}}};const pe={x:0,y:0,width:"100%",height:"100%"};function Nn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ai(t){return t.tag==="g"?t.children:[t]}var Pi={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?se(n.split(" ").map(r=>r.trim())):la();return a.prefix||(a.prefix=St()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:c}=e;const{width:g,icon:p}=r,{width:h,icon:D}=i,x=gr({transform:c,containerWidth:h,iconWidth:g}),B={tag:"rect",attributes:u(u({},pe),{},{fill:"white"})},st=p.children?{children:p.children.map(Nn)}:{},rt={tag:"g",attributes:u({},x.inner),children:[Nn(u({tag:p.tag,attributes:u(u({},p.attributes),x.path)},st))]},Z={tag:"g",attributes:u({},x.outer),children:[rt]},at="mask-".concat(s||Vt()),et="clip-".concat(s||Vt()),it={tag:"mask",attributes:u(u({},pe),{},{id:at,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[B,Z]},pt={tag:"defs",children:[{tag:"clipPath",attributes:{id:et},children:Ai(D)},it]};return n.push(pt,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(et,")"),mask:"url(#".concat(at,")")},pe)}),{children:n,attributes:a}}}},Oi={provides(t){let e=!1;Ot.matchMedia&&(e=Ot.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=u(u({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:u(u({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:u(u({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Si={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Ni=[yr,fi,ui,di,mi,xi,wi,ki,Pi,Oi,Si];zr(Ni,{mixoutsTo:dt});dt.noAuto;dt.config;dt.library;dt.dom;const Fe=dt.parse;dt.findIconDefinition;dt.toHtml;const Ei=dt.icon;dt.layer;dt.text;dt.counter;var he={exports:{}},ge,En;function Ci(){if(En)return ge;En=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ge=t,ge}var be,Cn;function ji(){if(Cn)return be;Cn=1;var t=Ci();function e(){}function n(){}return n.resetWarningCache=e,be=function(){function a(s,c,g,p,h,D){if(D!==t){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}a.isRequired=a;function r(){return a}var i={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return i.PropTypes=i,i},be}var jn;function Ii(){return jn||(jn=1,he.exports=ji()()),he.exports}var Ti=Ii();const Y=Pa(Ti);function In(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?In(Object(n),!0).forEach(function(a){Mt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):In(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ae(t){"@babel/helpers - typeof";return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae(t)}function Mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _i(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Mi(t,e){if(t==null)return{};var n=_i(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Le(t){return Fi(t)||Li(t)||zi(t)||Ri()}function Fi(t){if(Array.isArray(t))return ze(t)}function Li(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zi(t,e){if(t){if(typeof t=="string")return ze(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ze(t,e)}}function ze(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Ri(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Di(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,s=t.shake,c=t.flash,g=t.spin,p=t.spinPulse,h=t.spinReverse,D=t.pulse,x=t.fixedWidth,B=t.inverse,st=t.border,rt=t.listItem,Z=t.flip,at=t.size,et=t.rotation,it=t.pull,pt=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":c,"fa-spin":g,"fa-spin-reverse":h,"fa-spin-pulse":p,"fa-pulse":D,"fa-fw":x,"fa-inverse":B,"fa-border":st,"fa-li":rt,"fa-flip":Z===!0,"fa-flip-horizontal":Z==="horizontal"||Z==="both","fa-flip-vertical":Z==="vertical"||Z==="both"},Mt(e,"fa-".concat(at),typeof at<"u"&&at!==null),Mt(e,"fa-rotate-".concat(et),typeof et<"u"&&et!==null&&et!==0),Mt(e,"fa-pull-".concat(it),typeof it<"u"&&it!==null),Mt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(pt).map(function(ut){return pt[ut]?ut:null}).filter(function(ut){return ut})}function Wi(t){return t=t-0,t===t}function ha(t){return Wi(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Yi=["style"];function Ui(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Hi(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=ha(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Ui(r)]=i:e[r]=i,e},{})}function ga(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(g){return ga(t,g)}),r=Object.keys(e.attributes||{}).reduce(function(g,p){var h=e.attributes[p];switch(p){case"class":g.attrs.className=h,delete e.attributes.class;break;case"style":g.attrs.style=Hi(h);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?g.attrs[p.toLowerCase()]=h:g.attrs[ha(p)]=h}return g},{attrs:{}}),i=n.style,s=i===void 0?{}:i,c=Mi(n,Yi);return r.attrs.style=bt(bt({},r.attrs.style),s),t.apply(void 0,[e.tag,bt(bt({},r.attrs),c)].concat(Le(a)))}var ba=!1;try{ba=!0}catch{}function Vi(){if(!ba&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Tn(t){if(t&&ae(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Fe.icon)return Fe.icon(t);if(t===null)return null;if(t&&ae(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ve(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Mt({},t,e):{}}var _n={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ct=Mn.forwardRef(function(t,e){var n=bt(bt({},_n),t),a=n.icon,r=n.mask,i=n.symbol,s=n.className,c=n.title,g=n.titleId,p=n.maskId,h=Tn(a),D=ve("classes",[].concat(Le(Di(n)),Le((s||"").split(" ")))),x=ve("transform",typeof n.transform=="string"?Fe.transform(n.transform):n.transform),B=ve("mask",Tn(r)),st=Ei(h,bt(bt(bt(bt({},D),x),B),{},{symbol:i,title:c,titleId:g,maskId:p}));if(!st)return Vi("Could not find icon",h),null;var rt=st.abstract,Z={ref:e};return Object.keys(n).forEach(function(at){_n.hasOwnProperty(at)||(Z[at]=n[at])}),Bi(rt[0],Z)});Ct.displayName="FontAwesomeIcon";Ct.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};var Bi=ga.bind(null,Mn.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const va={prefix:"fas",iconName:"circle-arrow-left",icon:[512,512,["arrow-circle-left"],"f0a8","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z"]},ya={prefix:"fas",iconName:"circle-arrow-right",icon:[512,512,["arrow-circle-right"],"f0a9","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z"]},Xi={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Gi=({slides:t})=>{const[e,n]=Fn.useKeenSlider({loop:!0,mode:"snap",slides:{perView:1,spacing:10},breakpoints:{"(min-width: 640px)":{slides:{perView:2,spacing:15}},"(min-width: 1024px)":{slides:{perView:3,spacing:20}}}}),a=()=>{var i;(i=n.current)==null||i.prev()},r=()=>{var i;(i=n.current)==null||i.next()};return f.jsxs("section",{className:"relative w-[90%] mx-auto px-6",children:[f.jsx("div",{className:"absolute top-1/2  left-0 z-10",children:f.jsx("button",{onClick:a,children:f.jsx(Ct,{icon:va,size:"2x",className:"text-black bg-white rounded-2xl border border-white"})})}),f.jsx("div",{className:"absolute top-1/2 right-0 z-10",children:f.jsx("button",{onClick:r,children:f.jsx(Ct,{icon:ya,size:"2x",className:"text-black bg-white rounded-2xl border border-white"})})}),f.jsx("div",{ref:e,className:"keen-slider",children:t.map((i,s)=>f.jsx("div",{className:"keen-slider__slide rounded-lg",children:f.jsx("img",{src:i,alt:`Slide ${s+1}`,className:"w-full h-auto object-cover rounded-xl",loading:"lazy"})},s))})]})},Tt=({src:t})=>{const[e,n]=Ht.useState(!1),a=()=>{n(!0)};return f.jsxs("div",{className:"bento-tilt_2",children:[!e&&f.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-20",children:f.jsxs("div",{className:"flex space-x-2",children:[f.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce"}),f.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"}),f.jsx("div",{className:"w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.6s]"})]})}),f.jsx("video",{src:t,loop:!0,muted:!0,autoPlay:!0,preload:"metadata",onCanPlay:a,playsInline:!0,style:{pointerEvents:"none"},className:"size-full object-cover object-center"})]})},$i=({slides:t})=>{const[e,n]=Ht.useState(null);Ht.useEffect(()=>{if(!e)return;const c=g=>{g.key==="Escape"&&n(null)};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[e]);const[a,r]=Fn.useKeenSlider({loop:!0,mode:"snap",rubberband:!0,slides:{perView:1.15,spacing:14},breakpoints:{"(min-width: 768px)":{slides:{perView:1,spacing:24}}}}),i=()=>{var c;return(c=r.current)==null?void 0:c.prev()},s=()=>{var c;return(c=r.current)==null?void 0:c.next()};return f.jsxs(f.Fragment,{children:[f.jsxs("section",{className:"relative w-full max-w-[1920px] mx-auto",children:[f.jsx("div",{className:"hidden sm:block absolute top-1/2 left-3 z-20 -translate-y-1/2",children:f.jsx("button",{onClick:i,className:"transition hover:scale-110 active:scale-95",children:f.jsx(Ct,{icon:va,size:"2x",className:"text-white bg-black/40 rounded-full backdrop-blur-sm"})})}),f.jsx("div",{className:"hidden sm:block absolute top-1/2 right-3 z-20 -translate-y-1/2",children:f.jsx("button",{onClick:s,className:"transition hover:scale-110 active:scale-95",children:f.jsx(Ct,{icon:ya,size:"2x",className:"text-white bg-black/40 rounded-full backdrop-blur-sm"})})}),f.jsx("div",{ref:a,className:"keen-slider px-4 md:px-0",children:t.map((c,g)=>f.jsx("div",{className:"keen-slider__slide",children:f.jsx("button",{onClick:()=>n(c),className:`
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
								`,children:f.jsx("div",{className:"overflow-hidden rounded-[22px] bg-neutral-900",children:f.jsx("img",{src:c,alt:`Slide ${g+1}`,loading:"lazy",className:`
											w-full
											aspect-[16/9]
											object-cover
											transition-transform
											duration-700
											group-hover:scale-105
										`})})})},g))}),f.jsx("div",{className:"sm:hidden flex justify-center mt-4",children:f.jsxs("div",{className:"flex gap-1",children:[f.jsx("div",{className:"w-8 h-1 rounded-full bg-black/80"}),f.jsx("div",{className:"w-2 h-1 rounded-full bg-black/30"}),f.jsx("div",{className:"w-2 h-1 rounded-full bg-black/30"})]})})]}),e&&f.jsxs("div",{className:`
						fixed inset-0 z-50
						bg-black/90
						backdrop-blur-sm
						flex items-center justify-center
						p-4
					`,onClick:()=>n(null),children:[f.jsx("button",{className:"absolute top-4 right-4 text-white text-2xl z-50",onClick:()=>n(null),children:f.jsx(Ct,{icon:Xi})}),f.jsx("img",{src:e,alt:"Preview",className:`
							max-w-full
							max-h-[90vh]
							object-contain
							rounded-2xl
							shadow-2xl
						`,onClick:c=>c.stopPropagation()})]})]})},qi=["img/1.webp","img/2.webp","img/3.webp","img/5.webp","img/6.webp","img/7.webp","img/8.webp","img/9.webp","img/10.webp","img/11.webp","img/12.webp","img/13.webp"],Ki=["img/RoomCross2.webp","img/RoomPanagia2.webp","img/256.webp","img/256-2.webp","img/Start.webp","img/Start2.webp","img/Eversor.webp","img/mid.webp","img/mid3.webp"],Qi=()=>f.jsxs("section",{id:"work",className:"bg-black pb-35",children:[f.jsxs("div",{className:"container mx-auto px-3 md:px-10",children:[f.jsx("div",{className:"px-5 py-10",children:f.jsx(Je,{title:"3d animations / Visuals",containerClass:"mt-5 !text-yellow-300 text-center"})}),f.jsx($i,{slides:Ki}),f.jsx("br",{}),f.jsx("div",{className:"border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ",children:f.jsx(At,{src:"videos/feature-12.webm",title:f.jsx(f.Fragment,{children:"Beyond The End"}),titleButton:"Watch full video",description:f.jsx(f.Fragment,{children:`Promotional animation for Andri J and Motive Hits's third album "Beyond the End"`}),href:"https://www.youtube.com/watch?v=O4CYOYftk1s"})}),f.jsx("div",{className:"border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ",children:f.jsx(At,{src:"videos/feature-1.mp4",title:f.jsx(f.Fragment,{children:"dialleima"}),description:f.jsx(f.Fragment,{children:"3D animated music video for the artist Agrimi"}),titleButton:"Watch full video",href:"https://www.youtube.com/watch?v=57m9Sb6Nk4M"})}),f.jsx("div",{className:"border-hsla relative mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ",children:f.jsx(At,{src:"videos/feature-13.webm",title:f.jsx(f.Fragment,{children:"Closed Circuit II"}),description:f.jsx(f.Fragment,{children:`Promotional animation for music producer Eversor's album "Closed Circuit ΙΙ"`}),href:"https://vimeo.com/1127080265",titleButton:"Watch full video"})}),f.jsx("br",{}),f.jsxs("div",{className:"grid h-[135vh] grid-cols-2 grid-rows-3 gap-7",children:[f.jsx("div",{className:"bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2",children:f.jsx(At,{title:f.jsx(f.Fragment,{children:"aethales"}),description:f.jsx(f.Fragment,{children:`Animation for producer 256Colors's EP "Aethales Pt.2"`}),src:"videos/feature-14.webm",titleButton:"Watch full video",href:"https://www.youtube.com/watch?v=DNKnkBBHH-U"})}),f.jsx("div",{className:"bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0",children:f.jsx(At,{src:"videos/feature-3.webm"})}),f.jsx("div",{className:"bento-tilt_1 me-14 md:col-span-1 md:me-0",children:f.jsx(At,{title:f.jsx(f.Fragment,{children:"go-ship"}),description:f.jsx(f.Fragment,{children:"3D animated music video for the artist Silent"}),src:"videos/feature-4.webm",titleButton:"Watch full video",href:"https://www.youtube.com/watch?v=kZOZSruDpRw"})}),f.jsx(Tt,{src:"videos/feature-5.webm"}),f.jsx(Tt,{src:"videos/feature-6.webm"})]}),f.jsx("div",{className:"border-hsla relative mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ",children:f.jsx(At,{src:"videos/hero-3.webm",title:f.jsx(f.Fragment,{children:"Unusual Mind"}),description:f.jsx(f.Fragment,{children:'Scene from my animated short film "Unusual Mind" 2025'}),titleButton:"Watch film here",href:"https://youtu.be/_xJd7ZvUFc4?si=GA5onEsLdznPnSOo"})}),f.jsxs("div",{className:"grid  grid-cols-1 md:grid-cols-2 mt-7 gap-7",children:[f.jsx(Tt,{src:"videos/feature-8.webm"}),f.jsx(Tt,{src:"videos/feature-9.webm"})]}),f.jsx("div",{className:"border-hsla relative mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ",children:f.jsx(At,{src:"videos/feature-7.webm"})}),f.jsxs("div",{className:"grid  grid-cols-1 md:grid-cols-2 mt-7 gap-7",children:[f.jsx(Tt,{src:"videos/feature-2.webm"}),f.jsx(Tt,{src:"videos/feature-11.webm"})]})]}),f.jsxs("div",{className:"px-5 py-20",children:[f.jsx(Je,{title:"Illustrations",containerClass:"mt-5 mb-10 !text-pink-300 text-center"}),f.jsx(Gi,{slides:qi})]})]});export{Qi as default};
