/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='iiifgallery']");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t,e,o,i,c,f){let r=e.n+(o||W),u=e[r];if(u||(u=e[r=e.n+W]),u){let o=t.t;if(t.e)if(1===e.encapsulation)o=i.shadowRoot;else for(;i=t.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=n.i.get(o)||{};if(!c[r]){f=u.content.cloneNode(!0);const e=o.querySelectorAll("[data-styles]");t.c(o,f,e.length&&e[e.length-1].nextSibling||o.f),c[r]=!0,n.i.set(o,c)}}}function f(n){return{r:n[0],u:n[1],l:!!n[2],s:!!n[3],a:!!n[4]}}function r(n,t){if(O(t)){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t)}return t}function u(n,t,e,o){const i=n.p.get(t);i&&((o=i.$activeLoading)&&((e=o.indexOf(t))>-1&&o.splice(e,1),!o.length&&i.$initLoad()),n.p.delete(t))}function l(n,t,e){let o,i=!1,c=!1;for(var f=arguments.length;f-- >2;)L.push(arguments[f]);for(;L.length;)if((e=L.pop())&&void 0!==e.pop)for(f=e.length;f--;)L.push(e[f]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].d+=e:void 0===o?o=[c?s(e):e]:o.push(c?s(e):e),i=c;const r=new A;if(r.m=n,r.y=o,t&&(r.b=t,r.v=t.w,r.M=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(f in t.class)t.class[f]&&L.push(f);t.class=L.join(" "),L.length=0}return r}function s(n){const t=new A;return t.d=n,t}function a(n,t){n.k.has(t)||(n.k.set(t,!0),n.g.add(()=>{(function n(t,e,o,i,c){if(t.k.delete(e),!t.C.has(e)){let f;if(i=t.W.get(e),o=!i){if((c=t.p.get(e))&&!c.$rendered)return void(c.$onRender=c.$onRender||[]).push(()=>{n(t,e)});i=function f(n,t,e,o,i,c){try{(function f(n,t,e,o,i,c){for(c in n.N.set(o,e),n.j.has(e)||n.j.set(e,{}),(i=Object.assign({color:{type:String}},t.properties)).mode={type:String},i)d(n,i[c],e,o,c)})(n,o=n.x(t).O,t,e=new o),function r(n,t,e){if(t){const o=n.N.get(e);t.forEach(t=>{e[t.method]={emit:e=>{n.S(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,e);try{if(i=n.T.get(t)){for(c=0;c<i.length;c+=2)e[i[c]](i[c+1]);n.T.delete(t)}}catch(e){n.A(e,2,t)}}catch(o){e={},n.A(o,7,t,!0)}return n.W.set(t,e),e}(t,e);try{i.componentWillLoad&&(f=i.componentWillLoad())}catch(n){t.A(n,3,e)}}f&&f.then?f.then(()=>p(t,e,i,o)):p(t,e,i,o)}})(n,t)}))}function p(n,t,e,o){(function i(n,t,e,o,c){try{const i=t.O.host;if(o.render||o.hostData||i){n.L=!0;const i=o.render&&o.render();let f;n.L=!1;const r=n.P.get(e)||new A;r.R=e,n.P.set(e,n.render(r,l(null,f,i),c,n.q.get(e),n.B.get(e),t.O.encapsulation))}n.D(n,n.H,t,o.mode,e),e.$rendered=!0,e.$onRender&&(e.$onRender.forEach(n=>n()),e.$onRender=null)}catch(t){n.L=!1,n.A(t,8,e,!0)}})(n,n.x(t),t,e,!o);try{o?t.$initLoad():M(n.P.get(t))}catch(e){n.A(e,6,t,!0)}}function d(n,t,e,o,i){if(t.type||t.state){const c=n.j.get(e);if(!t.state){if(t.attr&&(void 0===c[i]||""===c[i])){const o=n.H.F(e,t.attr);null!=o&&(c[i]=r(t.type,o))}e.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=e[i]),delete e[i])}o.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=o[i]),t.watchCallbacks&&(c[P+i]=t.watchCallbacks.slice()),y(o,i,function c(t){return(t=n.j.get(n.N.get(this)))&&t[i]},function f(e,o){(o=n.N.get(this))&&(t.state||t.mutable)&&m(n,o,i,e)})}else t.method&&h(e,i,o[i].bind(o))}function m(n,t,e,o,i,c,f){(i=n.j.get(t))||n.j.set(t,i={}),o!==i[e]&&(i[e]=o,n.W.get(t)&&(i[P+e],!n.L&&t.$rendered&&a(n,t)))}function h(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function y(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function b(n,t,e,o,i){const c=11===e.R.nodeType&&e.R.host?e.R.host:e.R,f=t&&t.b||E,r=e.b||E;for(i in f)r&&null!=r[i]||null==f[i]||v(n,c,i,f[i],void 0,o);for(i in r)i in f&&r[i]===("value"===i||"checked"===i?c[i]:f[i])||v(n,c,i,f[i],r[i],o)}function v(n,t,e,o,i,c,f,r){if("class"!==e||c)if("style"===e){for(f in o=o||E,i=i||E,o)i[f]||(t.style[f]="");for(f in i)i[f]!==o[f]&&(t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.x(t);o&&o.z&&o.z[e]?w(t,e,i):"ref"!==e&&(w(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(f=e!==(e=e.replace(/^xlink\:?/,"")),1!==R[e]||i&&"false"!==i?"function"!=typeof i&&(f?t.setAttributeNS(q,S(e),i):t.setAttribute(e,i)):f?t.removeAttributeNS(q,S(e)):t.removeAttribute(e));else e=S(e.substring(2)),i?i!==o&&n.H.I(t,e,i):n.H.Q(t,e);else if(o!==i){const n=null==o||""===o?N:o.trim().split(/\s+/),e=null==i||""===i?N:i.trim().split(/\s+/);let c=null==t.className||""===t.className?N:t.className.trim().split(/\s+/);for(f=0,r=n.length;f<r;f++)-1===e.indexOf(n[f])&&(c=c.filter(t=>t!==n[f]));for(f=0,r=e.length;f<r;f++)-1===n.indexOf(e[f])&&(c=[...c,e[f]]);t.className=c.join(" ")}}function w(n,t,e){try{n[t]=e}catch(n){}}function M(n,t){n&&(n.M&&n.M(t?null:n.R),n.y&&n.y.forEach(n=>{M(n,t)}))}function $(n,t,e,o,i){const c=n.U(t);let f,r,u,l;if(i&&1===c){(r=n.F(t,C))&&(u=r.split("."))[0]===o&&((l=new A).m=n.G(l.R=t),e.y||(e.y=[]),e.y[u[1]]=l,e=l,i=""!==u[2]);for(let c=0;c<t.childNodes.length;c++)$(n,t.childNodes[c],e,o,i)}else 3===c&&(f=t.previousSibling)&&8===n.U(f)&&"s"===(u=n.J(f).split("."))[0]&&u[1]===o&&((l=s(n.J(t))).R=t,e.y||(e.y=[]),e.y[u[2]]=l)}function k(n,t,e,o){return function(){const i=arguments;return function c(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.K.querySelector(e)),i||(i=t[e]=n.V(e),n.X(n.K,i)),i.componentOnReady(o)})}(n,t,e).then(n=>n[o].apply(n,i))}}const g="data-ssrv",C="data-ssrc",W="$",E={},N=[],j={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},O=n=>void 0!==n&&null!==n,x=n=>void 0===n||null===n,S=n=>n.toLowerCase(),T=()=>{};class A{}const L=[],P="wc-",R={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},q="http://www.w3.org/1999/xlink";let B=!1;const D=n[o]=n[o]||{};{const o=function H(t,e,o,i,s,p){const d={html:{}},v={},w=function C(n,t){const e=new WeakMap,o={Y:t.documentElement,t:t.head,K:t.body,Z:!1,U:n=>n.nodeType,V:n=>t.createElement(n),_:(n,e)=>t.createElementNS(n,e),nn:n=>t.createTextNode(n),tn:n=>t.createComment(n),c:(n,t,e)=>n.insertBefore(t,e),en:n=>n.remove(),X:(n,t)=>n.appendChild(t),on:n=>n.childNodes,o:n=>n.parentNode,in:n=>n.nextSibling,G:n=>S(n.tagName),J:n=>n.textContent,cn:(n,t)=>n.textContent=t,F:(n,t)=>n.getAttribute(t),fn:(n,t,e)=>n.setAttribute(t,e),rn:(n,t,e,o)=>n.setAttributeNS(t,e,o),un:(n,t)=>n.removeAttribute(t),ln:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.sn(e):"body"===i?o.K:"document"===i?t:"window"===i?n:e,I:(n,t,i,c,f,r,u,l)=>{const s=t;let a=n,p=e.get(n);if(p&&p[s]&&p[s](),"string"==typeof r?a=o.ln(n,r):"object"==typeof r?a=r:(l=t.split(":")).length>1&&(a=o.ln(n,l[0]),t=l[1]),!a)return;let d=i;(l=t.split(".")).length>1&&(t=l[0],d=(n=>{n.keyCode===j[l[1]]&&i(n)})),u=o.Z?{capture:!!c,passive:!!f}:!!c,a.addEventListener(t,d,u),p||e.set(n,p={}),p[s]=(()=>{a&&a.removeEventListener(t,d,u),p[s]=null})},Q:(n,t)=>{const o=e.get(n);o&&(t?o[t]&&o[t]():Object.keys(o).forEach(n=>{o[n]&&o[n]()}))},an:(t,e,o)=>t&&t.dispatchEvent(new n.CustomEvent(e,o))};try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>o.Z=!0}))}catch(n){}return o.sn=((n,t)=>(t=o.o(n))&&11===o.U(t)?t.host:t),o}(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=s,t.enableListener=((n,t,e,o,i)=>(function c(n,t,e,o,i,f){if(t){const c=n.N.get(t),r=n.x(c);if(r&&r.pn)if(o){const o=r.pn.find(n=>n.r===e);o&&n.H.I(c,e,n=>t[o.u](n),o.a,void 0===f?o.s:!!f,i)}else n.H.Q(c,e)}})(N,n,t,e,o,i)),t.emit=((n,e,o)=>w.an(n,t.eventNameFn?t.eventNameFn(e):e,o)),e.h=l,e.Context=t;const E=o.$definedCmps=o.$definedCmps||{},N={dn:function L(n,e){e.mode||(e.mode=w.F(e,"mode")||t.mode),w.F(e,g)||function o(n,t){return n&&1===t.encapsulation}(w.e,n)||function i(n,t,e,o,c,f,r,u,l){for(e.$defaultHolder||t.c(e,e.$defaultHolder=t.tn(""),o[0]),l=0;l<o.length;l++)c=o[l],1===t.U(c)&&null!=(f=t.F(c,"slot"))?(u=u||{})[f]?u[f].push(c):u[f]=[c]:r?r.push(c):r=[c];n.q.set(e,r),n.B.set(e,u)}(N,w,e,e.childNodes),w.e||1!==n.encapsulation||(e.shadowRoot=e)},H:w,mn:function P(n,t){if(!E[n.n]){E[n.n]=!0,function e(n,t,o,i){o.connectedCallback=function(){(function e(n,t,o){n.hn.has(o)||(n.hn.set(o,!0),function i(n,t){const e=n.x(t);e.pn&&e.pn.forEach(e=>{e.l||n.H.I(t,e.r,function o(n,t,e,i){return o=>{(i=n.W.get(t))?i[e](o):((i=n.T.get(t)||[]).push(e,o),n.T.set(t,i))}}(n,t,e.u),e.a,e.s)})}(n,o)),n.C.delete(o),n.yn.has(o)||(n.yn.set(o,!0),function c(n,t,e){for(e=t;e=n.H.sn(e);)if(n.bn(e)){n.vn.has(t)||(n.p.set(t,e),(e.$activeLoading=e.$activeLoading||[]).push(t));break}}(n,o),n.g.add(()=>{n.dn(t,o),n.loadBundle(t,o.mode,()=>a(n,o))},3))})(n,t,this)},o.attributeChangedCallback=function(n,e,o){(function i(n,t,e,o,c,f){if(o!==c&&n)for(f in e=S(e),n)if(n[f].wn===e){t[f]=r(n[f].Mn,c);break}})(t.z,this,n,e,o)},o.disconnectedCallback=function(){(function t(n,e,o){!n.$n&&function i(n,t){for(;t;){if(!n.o(t))return 9!==n.U(t);t=n.o(t)}}(n.H,e)&&(n.C.set(e,!0),u(n,e),M(n.P.get(e),!0),n.H.Q(e),n.hn.delete(e))})(n,this)},o.componentOnReady=function(t,e){return t||(e=new Promise(n=>t=n)),function o(n,t,e,i){n.C.has(t)||(n.vn.has(t)?e(t):((i=n.kn.get(t)||[]).push(e),n.kn.set(t,i)))}(n,this,t),e},o.$initLoad=function(){(function t(n,e,o,i,c){if(!n.vn.has(e)&&n.W.get(e)&&!n.C.has(e)&&(!e.$activeLoading||!e.$activeLoading.length)){delete e.$activeLoading,n.vn.set(e,!0);try{M(n.P.get(e)),(c=n.kn.get(e))&&(c.forEach(n=>n(e)),n.kn.delete(e))}catch(t){n.A(t,4,e)}e.classList.add(o),u(n,e)}})(n,this,i)},o.gn=function(){a(n,this)},function c(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].Cn;1===i||2===i?y(e,o,function t(){return(n.j.get(this)||{})[o]},function t(e){m(n,this,o,e)}):6===i&&h(e,o,T)})}(n,t.z,o)}(N,n,t.prototype,p);{const e=[];for(const t in n.z)n.z[t].wn&&e.push(n.z[t].wn);t.observedAttributes=e}o.customElements.define(n.n,t)}},S:t.emit,x:n=>d[w.G(n)],Wn:n=>t[n],isClient:!0,bn:n=>!(!E[w.G(n)]&&!N.x(n)),loadBundle:function R(n,t,e){if(n.O)e();else{const o="string"==typeof n.En?n.En:n.En[t],i=s+o+(function o(n,t){return 2===t.encapsulation||1===t.encapsulation&&!n}(w.e,n)?".sc":"")+".js";import(i).then(t=>{try{n.O=t[(n=>S(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,t,e){const o=e.style;if(o){const i=e.is+(e.styleMode||W);if(!t[i]){const e=n.V("template");t[i]=e,e.innerHTML=`<style>${o}</style>`,n.X(n.t,e)}}}(w,n,n.O)}catch(t){n.O=class{}}e()}).catch(n=>void 0)}},A:(n,t,e)=>void 0,Nn:n=>(function t(n,e,o){return{create:k(n,e,o,"create"),componentOnReady:k(n,e,o,"componentOnReady")}})(w,v,n),g:function q(t,e,o){function i(){for(;s.length>0;)s.shift()();e=!1}function c(n){for(n=r(),i();a.length>0&&r()-n<40;)a.shift()();(o=a.length>0)&&u(f)}function f(n){for(i(),n=4+r();a.length>0&&r()<n;)a.shift()();(o=a.length>0)&&u(c)}const r=()=>t.performance.now(),u=t=>n.requestAnimationFrame(t),l=Promise.resolve(),s=[],a=[];return{add:(n,t)=>{3===t?(s.push(n),e||(e=!0,l.then(i))):(a.push(n),o||(o=!0,u(c)))}}}(o),jn:n=>(n||[]).map(n=>(function t(n,e,o,i){const c={n:n[0],z:{color:{wn:"color"}}};c.En=n[1];const r=n[3];if(r)for(o=0;o<r.length;o++)i=r[o],c.z[i[0]]={Cn:i[1],wn:"string"==typeof i[2]?i[2]:i[2]?i[0]:0,Mn:i[3]};return c.encapsulation=n[4],n[5]&&(c.pn=n[5].map(f)),e[c.n]=c})(n,d)),p:new WeakMap,i:new WeakMap,q:new WeakMap,yn:new WeakMap,hn:new WeakMap,vn:new WeakMap,N:new WeakMap,W:new WeakMap,C:new WeakMap,k:new WeakMap,B:new WeakMap,kn:new WeakMap,T:new WeakMap,P:new WeakMap,j:new WeakMap};N.render=function D(n,t){function e(o,i,f,r,u,l,m,h,y){if("function"==typeof o.m&&(o=o.m(Object.assign({},o.b,{On:o.y}))),!p&&"slot"===o.m){if((s||a)&&(d&&t.fn(i,d+"-slot",""),m=o.b&&o.b.name,h=O(m)?a&&a[m]:s,O(h))){for(n.$n=!0,r=0;r<h.length;r++)l=h[r],t.en(l),t.X(i,l),8!==l.nodeType&&(y=!0);!y&&o.y&&c(i,[],o.y),n.$n=!1}return null}if(O(o.d))o.R=t.nn(o.d);else{u=o.R=t.V(o.m),b(n,null,o,B),null!==d&&u.xn!==d&&t.fn(u,u.xn=d,"");const i=o.y;if(i)for(r=0;r<i.length;++r)(l=e(i[r],u))&&t.X(u,l)}return o.R}function o(n,o,i,c,f,r,u){const l=n.$defaultHolder&&t.o(n.$defaultHolder)||n;for(;c<=f;++c)u=i[c],O(u)&&(r=O(u.d)?t.nn(u.d):e(u,n),O(r)&&(u.R=r,t.c(l,r,o)))}function i(n,e,o){for(;e<=o;++e)O(n[e])&&t.en(n[e].R)}function c(n,c,l){let s,a,p,d,m=0,h=0,y=c.length-1,b=c[0],v=c[y],w=l.length-1,M=l[0],$=l[w];for(;m<=y&&h<=w;)null==b?b=c[++m]:null==v?v=c[--y]:null==M?M=l[++h]:null==$?$=l[--w]:f(b,M)?(u(b,M),b=c[++m],M=l[++h]):f(v,$)?(u(v,$),v=c[--y],$=l[--w]):f(b,$)?(u(b,$),t.c(n,b.R,t.in(v.R)),b=c[++m],$=l[--w]):f(v,M)?(u(v,M),t.c(n,v.R,b.R),v=c[--y],M=l[++h]):(x(s)&&(s=r(c,m,y)),a=s[M.v],x(a)?(d=e(M,n),M=l[++h]):((p=c[a]).m!==M.m?d=e(M,n):(u(p,M),c[a]=void 0,d=p.R),M=l[++h]),d&&t.c(b.R&&b.R.parentNode||n,d,b.R));m>y?o(n,null==l[w+1]?null:l[w+1].R,l,h,w):h>w&&i(c,m,y)}function f(n,t){return n.m===t.m&&n.v===t.v}function r(n,t,e){const o={};let i,c,f;for(i=t;i<=e;++i)null!=(f=n[i])&&void 0!==(c=f.v)&&(o.Sn=i);return o}function u(e,f){const r=f.R=e.R,u=e.y,l=f.y;let s;if(x(f.d))"slot"!==f.m&&b(n,e,f,B),O(u)&&O(l)?c(r,u,l):O(l)?(O(e.d)&&t.cn(r,""),o(r,null,l,0,l.length-1)):O(u)&&i(u,0,u.length-1);else if(s=n.q.get(r)){const e=s[0].parentElement;t.cn(e,f.d),n.q.set(r,[e.childNodes[0]])}else e.d!==f.d&&t.cn(r,f.d)}let l,s,a,p,d;return function n(e,o,i,c,f,r,p){return l=i,s=c,a=f,d="scoped"===r||"shadow"===r&&!t.e?"data-"+t.G(e.R):null,l||d&&t.fn(e.R,d+"-host",""),u(e,o),o}}(N,w);const H=w.Y;return H.$rendered=!0,H.$activeLoading=[],H.$initLoad=(()=>N.vn.set(H,!0)),function F(n,t,e){const o=e.querySelectorAll(`[${g}]`),i=o.length;let c,f,r,u,l,s;if(i>0)for(n.vn.set(e,!0),u=0;u<i;u++)for(c=o[u],f=t.F(c,g),(r=new A).m=t.G(r.R=c),n.P.set(c,r),l=0,s=c.childNodes.length;l<s;l++)$(t,c.childNodes[l],r,f,!0)}(N,w,H),N.D=c,N}(e,D,n,t,i,hydratedCssClass);o.jn(D.components).forEach(n=>o.mn(n,class extends HTMLElement{}))}})(window,document,Context,appNamespace,publicPath);
})({},"iiifgallery","hydrated","/build/iiifgallery/");