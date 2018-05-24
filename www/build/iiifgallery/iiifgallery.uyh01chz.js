/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='iiifgallery']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,e,n,o){"use strict";function i(t,e,n,o,i,c,f){let l=n.t+(o||x),r=n[l];if(r||(r=n[l=n.t+x]),r){let o=e.e;if(e.n)if(1===n.encapsulation)o=i.shadowRoot;else for(;i=e.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=t.i.get(o)||{};if(!c[l]){f=r.content.cloneNode(!0);const n=o.querySelectorAll("[data-styles]");e.c(o,f,n.length&&n[n.length-1].nextSibling||o.f),c[l]=!0,t.i.set(o,c)}}}function c(t){return{l:t[0],r:t[1],s:!!t[2],u:!!t[3],a:!!t[4]}}function f(t,e){if(S(e)){if(t===Boolean||3===t)return"false"!==e&&(""===e||!!e);if(t===Number||4===t)return parseFloat(e)}return e}function l(t,e,n,o){const i=t.p.get(e);i&&((o=i["s-ld"]||i.$activeLoading)&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.p.delete(e))}function r(t,e,n){let o,i,c=null,f=!1,l=!1;for(var r=arguments.length;r-- >2;)R.push(arguments[r]);for(;R.length>0;)if((n=R.pop())&&void 0!==n.pop)for(r=n.length;r--;)R.push(n[r]);else"boolean"==typeof n&&(n=null),(l="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(l=!1)),l&&f?c[c.length-1].d+=n:null===c?c=[l?{d:n}:n]:c.push(l?{d:n}:n),f=l;if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(r in e.class)e.class[r]&&R.push(r);e.class=R.join(" "),R.length=0}null!=e.v&&(o=e.v),null!=e.name&&(i=e.name)}return"function"==typeof t?t(Object.assign({},e,{children:c})):{m:t,b:c,d:void 0,y:e,w:o,M:i,g:void 0,k:!1}}function s(t,e){t.C.has(e)||(t.C.set(e,!0),t.W?t.queue.write(()=>u(t,e)):t.queue.tick(()=>u(t,e)))}function u(t,e,n,o,i,c){if(t.C.delete(e),!t.j.has(e)){if(o=t.x.get(e),n=!o){if((i=t.p.get(e))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{u(t,e)}),void(i.$onRender=i["s-rc"]);o=function f(t,e,n,o,i,c,l){try{(function r(t,e,n,o,i,c,f){for(f in t.N.set(o,n),t.O.has(n)||t.O.set(n,{}),(c=Object.assign({color:{type:String}},e.properties)).mode={type:String},c)p(t,c[f],n,o,f,i)})(t,i=t.T(e).S,e,o=new i,n),function s(t,e,n){if(e){const o=t.N.get(n);e.forEach(e=>{n[e.method]={emit:n=>{t.A(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}}})}}(t,i.events,o);try{if(c=t.R.get(e)){for(l=0;l<c.length;l+=2)o[c[l]](c[l+1]);t.R.delete(e)}}catch(n){t.L(n,2,e)}}catch(n){o={},t.L(n,7,e,!0)}return t.x.set(e,o),o}(t,e,t.q.get(e));try{o.componentWillLoad&&(c=o.componentWillLoad())}catch(n){t.L(n,3,e)}}c&&c.then?c.then(()=>a(t,e,o,n)):a(t,e,o,n)}}function a(t,e,n,o){(function i(t,e,n,o,c){try{const i=e.S.host;let f;if(o.render||o.hostData||i||f){t.B=!0;const i=o.render&&o.render();let f;t.B=!1;const l=t.D.get(n)||{};l.g=n;const s=r(null,f,i);t.D.set(n,t.render(l,s,c,e.S.encapsulation))}t.P(t,t.F,e,o.mode,n),n["s-rn"]=!0,n.$onRender&&(n["s-rc"]=n.$onRender),n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.B=!1,t.L(e,8,n,!0)}})(t,t.T(e),e,n,!o);try{o?e["s-init"]():M(t.D.get(e))}catch(n){t.L(n,6,e,!0)}}function p(t,e,n,o,i,c,l,r){if(e.type||e.state){const s=t.O.get(n);e.state||(!e.attr||void 0!==s[i]&&""!==s[i]||(l=c&&c.H)&&S(r=l[e.attr])&&(s[i]=f(e.type,r)),n.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=n[i]),delete n[i])),o.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=o[i]),e.watchCallbacks&&(s[L+i]=e.watchCallbacks.slice()),m(o,i,function s(e){return(e=t.O.get(t.N.get(this)))&&e[i]},function u(n,o){(o=t.N.get(this))&&(e.state||e.mutable)&&d(t,o,i,n)})}else e.method&&v(n,i,o[i].bind(o))}function d(t,e,n,o,i,c,f){(i=t.O.get(e))||t.O.set(e,i={});const l=i[n];if(o!==l&&(i[n]=o,c=t.x.get(e))){if(f=i[L+n])for(let t=0;t<f.length;t++)try{c[f[t]].call(c,o,l,n)}catch(t){}!t.B&&e["s-rn"]&&s(t,e)}}function v(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function m(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function b(t,e,n,o,i,c,f,l,r){if("class"!==n||c)if("style"===n){for(l in o=o||E,i=i||E,o)i[l]||(e.style[l]="");for(l in i)i[l]!==o[l]&&(e.style[l]=i[l])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!c&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.T(e);o&&o.I&&o.I[n]?h(e,n,i):"ref"!==n&&(h(e,n,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(n))}else null!=i?function s(t,e,n){const o=e!==(e=e.replace(/^xlink\:?/,"")),i=q[e];!i||n&&"false"!==n?"function"!=typeof n&&(i&&(n=""),o?t.setAttributeNS(B,T(e),n):t.setAttribute(e,n)):o?t.removeAttributeNS(B,T(e)):t.removeAttribute(e)}(e,n,i):!c||null!=i&&!1!==i||e.removeAttribute(n);else n=T(n)in e?T(n.substring(2)):T(n[2])+n.substring(3),i?i!==o&&t.F.U(e,n,i):t.F.z(e,n);else if(o!==i){const t=null==o||""===o?N:o.trim().split(/\s+/),n=null==i||""===i?N:i.trim().split(/\s+/);let c=null==e.className||""===e.className?N:e.className.trim().split(/\s+/);for(l=0,r=t.length;l<r;l++)-1===n.indexOf(t[l])&&(c=c.filter(e=>e!==t[l]));for(l=0,r=n.length;l<r;l++)-1===t.indexOf(n[l])&&(c=[...c,n[l]]);e.className=c.join(" ")}}function h(t,e,n){try{t[e]=n}catch(t){}}function y(t,e,n,o,i){const c=11===n.g.nodeType&&n.g.host?n.g.host:n.g,f=e&&e.y||E,l=n.y||E;for(i in f)l&&null!=l[i]||null==f[i]||b(t,c,i,f[i],void 0,o,n.k);for(i in l)i in f&&l[i]===("value"===i||"checked"===i?c[i]:f[i])||b(t,c,i,f[i],l[i],o,n.k)}function w(t,e){function n(i,c,f,l,r,s,p,d,h){if(d=c.b[f],u||(v=!0,"slot"===d.m&&(a&&e.Q(l,a+"-slot",""),d.b?d.Z=!0:d.G=!0)),S(d.d))d.g=e.J(d.d);else if(d.G)d.g=e.J("");else{if(s=d.g=D||"svg"===d.m?e.K("http://www.w3.org/2000/svg",d.m):e.V(d.Z?"slot-fb":d.m),D="svg"===d.m||"foreignObject"!==d.m&&D,y(t,null,d,D),S(a)&&s["s-si"]!==a&&e.Q(s,s["s-si"]=a,""),d.b)for(r=0;r<d.b.length;++r)(p=n(i,d,r,s))&&e.X(s,p);"svg"===d.m&&(D=!1)}return d.g["s-hn"]=m,(d.Z||d.G)&&(d.g["s-sr"]=!0,d.g["s-cr"]=b,d.g["s-sn"]=d.M||"",(h=i&&i.b&&i.b[f])&&h.m===d.m&&i.g&&o(i.g)),d.g}function o(n,i,c,f){t.Y=!0;const s=e._(n);for(c=s.length-1;c>=0;c--)(f=s[c])["s-hn"]!==m&&f["s-ol"]&&(e.tt(f),e.c(r(f),f,l(f)),e.tt(f["s-ol"]),f["s-ol"]=null,v=!0),i&&o(f,i);t.Y=!1}function i(t,o,i,c,f,r,s,u){const a=t["s-cr"]||t.$defaultHolder;for((s=a&&e.o(a)||t).shadowRoot&&(s=s.shadowRoot);f<=r;++f)c[f]&&(u=S(c[f].d)?e.J(c[f].d):n(null,i,f,t))&&(c[f].g=u,e.c(s,u,l(o)))}function c(t,n,i,c){for(;n<=i;++n)S(t[n])&&(c=t[n].g,d=!0,c["s-ol"]?e.tt(c["s-ol"]):o(c,!0),e.tt(c))}function f(t,e){return t.m===e.m&&t.w===e.w&&("slot"!==t.m||t.M===e.M)}function l(t){return t&&t["s-ol"]?t["s-ol"]:t}function r(t){return e.o(t["s-ol"]?t["s-ol"]:t)}const s=[];let u,a,p,d,v,m,b;return function u(h,w,M,$,g,k,C,W,j){if(p=M,m=e.et(h.g),b=h.g["s-cr"],a="scoped"===$||"shadow"===$&&!e.n?"data-"+e.et(h.g):null,v=d=!1,p||a&&e.Q(h.g,a+"-host",""),function s(u,a,p){const d=a.g=u.g,v=u.b,m=a.b;D=a.g&&S(e.nt(a.g))&&void 0!==a.g.ownerSVGElement,D="svg"===a.m||"foreignObject"!==a.m&&D,S(a.d)?(p=d["s-cr"]||d.$defaultHolder)?e.ot(e.o(p),a.d):u.d!==a.d&&e.ot(d,a.d):("slot"!==a.m&&y(t,u,a,D),S(v)&&S(m)?function b(t,u,a,p,d,v,m,h){let y=0,w=0,M=u.length-1,$=u[0],g=u[M],k=p.length-1,C=p[0],W=p[k];for(;y<=M&&w<=k;)if(null==$)$=u[++y];else if(null==g)g=u[--M];else if(null==C)C=p[++w];else if(null==W)W=p[--k];else if(f($,C))s($,C),$=u[++y],C=p[++w];else if(f(g,W))s(g,W),g=u[--M],W=p[--k];else if(f($,W))"slot"!==$.m&&"slot"!==W.m||o(e.o($.g)),s($,W),e.c(t,$.g,e.it(g.g)),$=u[++y],W=p[--k];else if(f(g,C))"slot"!==$.m&&"slot"!==W.m||o(e.o(g.g)),s(g,C),e.c(t,g.g,$.g),g=u[--M],C=p[++w];else{for(d=null,v=y;v<=M;++v)if(u[v]&&S(u[v].w)&&u[v].w===C.w){d=v;break}S(d)?((h=u[d]).m!==C.m?m=n(u&&u[w],a,d,t):(s(h,C),u[d]=void 0,m=h.g),C=p[++w]):(m=n(u&&u[w],a,w,t),C=p[++w]),m&&e.c(r($.g),m,l($.g))}y>M?i(t,null==p[k+1]?null:p[k+1].g,a,p,w,k):w>k&&c(u,y,M)}(d,v,a,m):S(m)?(S(u.d)&&e.ot(d,""),i(d,null,a,m,0,m.length-1)):S(v)&&c(v,0,v.length-1)),D&&"svg"===a.m&&(D=!1)}(h,w),v){for(function t(n,o,i,c,f,l,r,u,a,p){for(f=0,l=(o=e._(n)).length;f<l;f++){if((i=o[f])["s-sr"]&&(c=i["s-cr"]))for(u=e._(e.o(c)),a=i["s-sn"],r=u.length-1;r>=0;r--)(c=u[r])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(p=e.ct(c))||8===p)&&""===a||1===p&&null===e.ft(c,"slot")&&""===a||1===p&&e.ft(c,"slot")===a)&&(s.some(t=>t.lt===c)||(d=!0,c["s-sn"]=a,s.push({rt:i,lt:c})));1===e.ct(i)&&t(i)}}(w.g),k=0;k<s.length;k++)(C=s[k]).lt["s-ol"]||((W=e.J(""))["s-nr"]=C.lt,e.c(e.o(C.lt),C.lt["s-ol"]=W,C.lt));for(t.Y=!0,k=0;k<s.length;k++){C=s[k];const t=e.o(C.rt);let n=e.it(C.rt);for(W=C.lt["s-ol"];W=e.st(W);)if((j=W["s-nr"])&&j["s-sn"]===C.lt["s-sn"]&&t===e.o(j)){n=e.it(j);break}(!n&&t!==e.o(C.lt)||e.it(C.lt)!==n)&&C.lt!==n&&(e.tt(C.lt),e.c(t,C.lt,n))}t.Y=!1}return d&&function t(n,o,i,c,f,l,r,s){for(c=0,f=(i=e._(n)).length;c<f;c++)if(o=i[c],1===e.ct(o)){if(o["s-sr"])for(r=o["s-sn"],o.hidden=!1,l=0;l<f;l++)if(i[l]["s-hn"]!==o["s-hn"])if(s=e.ct(i[l]),""!==r){if(1===s&&r===e.ft(i[l],"slot")){o.hidden=!0;break}}else if(1===s||3===s&&""!==e.ut(i[l]).trim()){o.hidden=!0;break}t(o)}}(w.g),s.length=0,w}}function M(t,e){t&&(t.y&&t.y.ref&&t.y.ref(e?null:t.g),t.b&&t.b.forEach(t=>{M(t,e)}))}function $(t,e,n,o,i){const c=t.ct(e);let f,l,r,s;if(i&&1===c){(l=t.ft(e,j))&&(r=l.split("."))[0]===o&&((s={}).m=t.et(s.g=e),n.b||(n.b=[]),n.b[r[1]]=s,n=s,i=""!==r[2]);for(let c=0;c<e.childNodes.length;c++)$(t,e.childNodes[c],n,o,i)}else 3===c&&(f=e.previousSibling)&&8===t.ct(f)&&"s"===(r=t.ut(f).split("."))[0]&&r[1]===o&&((s={d:t.ut(e)}).g=e,n.b||(n.b=[]),n.b[r[2]]=s)}function g(t,e,n,o,i){return n["s-cr"]||t.ft(n,W)||function c(t,e){return t&&1===e.encapsulation}(t.n,e)||(n["s-cr"]=t.J(""),n["s-cr"]["s-cn"]=!0,t.c(n,n["s-cr"],t._(n)[0])),t.n||1!==e.encapsulation||(n.shadowRoot=n),o={at:n["s-id"],H:{}},e.I&&Object.keys(e.I).forEach(c=>{(i=e.I[c].pt)&&(o.H[i]=t.ft(n,i))}),o}function k(t,e,n,o){n.connectedCallback=function(){(function n(t,e,o){t.dt.has(o)||(t.dt.set(o,!0),function i(t,e){const n=t.T(e);n.vt&&n.vt.forEach(n=>{n.s||t.F.U(e,n.l,function o(t,e,n,i){return o=>{(i=t.x.get(e))?i[n](o):((i=t.R.get(e)||[]).push(n,o),t.R.set(e,i))}}(t,e,n.r),n.a,n.u)})}(t,o)),t.j.delete(o),t.mt.has(o)||(t.mt.set(o,!0),o["s-id"]||(o["s-id"]=t.bt()),function c(t,e,n){for(n=e;n=t.F.nt(n);)if(t.ht(n)){t.yt.has(e)||(t.p.set(e,n),n.$activeLoading&&(n["s-ld"]=n.$activeLoading),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>t.wt(e,o,g(t.F,e,o))))})(t,e,this)},n.attributeChangedCallback=function(t,n,o){(function i(t,e,n,o,c,l,r){if(t&&o!==c)for(l in t)if((r=t[l]).pt&&T(r.pt)===T(n)){e[l]=f(r.Mt,c);break}})(e.I,this,t,n,o)},n.disconnectedCallback=function(){(function e(t,n,o){!t.Y&&function i(t,e){for(;e;){if(!t.o(e))return 9!==t.ct(e);e=t.o(e)}}(t.F,n)&&(t.j.set(n,!0),l(t,n),M(t.D.get(n),!0),t.F.z(n),t.dt.delete(n),[t.p,t.$t,t.q].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c){if(!t.yt.has(n)&&t.x.get(n)&&!t.j.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){delete n["s-ld"],t.yt.set(n,!0);try{M(t.D.get(n)),(c=t.$t.get(n))&&(c.forEach(t=>t(n)),t.$t.delete(n))}catch(e){t.L(e,4,n)}n.classList.add(o),l(t,n)}})(t,this,o)},n.forceUpdate=function(){s(t,this)},function i(t,e,n){e&&Object.keys(e).forEach(o=>{const i=e[o].gt;1===i||2===i?m(n,o,function e(){return(t.O.get(this)||{})[o]},function e(n){d(t,this,o,n)}):6===i&&v(n,o,A)})}(t,e.I,n)}function C(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){return new Promise(o=>{let i=e[n];i||(i=t.kt.querySelector(n)),i||(i=e[n]=t.V(n),t.X(t.kt,i)),i.componentOnReady(o)})}(t,e,n).then(t=>t[o].apply(t,i))}}const W="data-ssrv",j="data-ssrc",x="$",E={},N=[],O={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},S=t=>null!=t,T=t=>t.toLowerCase(),A=()=>{},R=[],L="wc-",q={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},B="http://www.w3.org/1999/xlink";let D=!1;(function P(t,e,n,o,f,l){const u={html:{}},a={},p=n[t]=n[t]||{},d=function v(t,e,n){t.Ct||(t.Ct=((t,e,n,o)=>t.addEventListener(e,n,o)),t.Wt=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={jt:n.documentElement,e:n.head,kt:n.body,xt:!1,ct:t=>t.nodeType,V:t=>n.createElement(t),K:(t,e)=>n.createElementNS(t,e),J:t=>n.createTextNode(t),Et:t=>n.createComment(t),c:(t,e,n)=>t.insertBefore(e,n),tt:t=>t.remove(),X:(t,e)=>t.appendChild(e),_:t=>t.childNodes,o:t=>t.parentNode,it:t=>t.nextSibling,st:t=>t.previousSibling,et:t=>T(t.nodeName),ut:t=>t.textContent,ot:(t,e)=>t.textContent=e,ft:(t,e)=>t.getAttribute(e),Q:(t,e,n)=>t.setAttribute(e,n),Nt:(t,e,n,o)=>t.setAttributeNS(e,n,o),Ot:(t,e)=>t.removeAttribute(e),St:(t,o)=>{return"child"===o?t.firstElementChild:"parent"===o?i.nt(t):"body"===o?i.kt:"document"===o?n:"window"===o?e:t},U:(e,n,c,f,l,r,s,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof r?p=i.St(e,r):"object"==typeof r?p=r:(u=n.split(":")).length>1&&(p=i.St(e,u[0]),n=u[1]),!p)return;let v=c;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===O[u[1]]&&c(t)})),s=i.xt?{capture:!!f,passive:!!l}:!!f,t.Ct(p,n,v,s),d||o.set(e,d={}),d[a]=(()=>{p&&t.Wt(p,n,v,s),d[a]=null})},z:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},Tt:(t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o))};try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.xt=!0}))}catch(t){}return i.nt=((t,e)=>(e=i.o(t))&&11===i.ct(e)?e.host:e),i}(p,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=f,e.enableListener=((t,e,n,o,i)=>(function c(t,e,n,o,i,f){if(e){const c=t.N.get(e),l=t.T(c);if(l&&l.vt)if(o){const o=l.vt.find(t=>t.l===n);o&&t.F.U(c,n,t=>e[o.r](t),o.a,void 0===f?o.u:!!f,i)}else t.F.z(c,n)}})(h,t,e,n,o,i)),e.emit=((t,n,o)=>d.Tt(t,e.eventNameFn?e.eventNameFn(n):n,o)),p.h=r,p.Context=e;const m=n.$definedCmps=n.$definedCmps||{};let b=0;const h={F:d,At:function y(t,e){if(!m[t.t]){m[t.t]=!0,k(h,t,e.prototype,l);{const n=[];for(const e in t.I)t.I[e].pt&&n.push(t.I[e].pt);e.observedAttributes=n}n.customElements.define(t.t,e)}},A:e.emit,T:t=>u[d.et(t)],Rt:t=>e[t],isClient:!0,ht:t=>!(!m[d.et(t)]&&!h.T(t)),bt:()=>t+b++,L:(t,e,n)=>void 0,Lt:t=>(function e(t,n,o){return{create:C(t,n,o,"create"),componentOnReady:C(t,n,o,"componentOnReady")}})(d,a,t),queue:e.queue=function M(t,e){function n(t){for(let e=0;e<t.length;e++)try{t[e]()}catch(t){}t.length=0}function o(t,e){let n=0;for(;n<t.length&&c()<e;)try{t[n++]()}catch(t){}n===t.length?t.length=0:0!==n&&t.splice(0,n)}function i(){a++,n(r);const e=c()+7*Math.ceil(a*(1/22));o(s,e),o(u,e),s.length>0&&(u.push(...s),s.length=0),(p=r.length+s.length+u.length>0)?t.raf(i):a=0}const c=()=>e.performance.now(),f=Promise.resolve(),l=[],r=[],s=[],u=[];let a=0,p=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){l.push(t),1===l.length&&f.then(()=>n(l))},read(e){r.push(e),p||(p=!0,t.raf(i))},write(e){s.push(e),p||(p=!0,t.raf(i))}}}(p,n),wt:function j(t,n){if(n.mode||(n.mode=d.ft(n,"mode")||e.mode),g(h.F,t,n),t.S)s(h,n);else{const e="string"==typeof t.qt?t.qt:t.qt[n.mode],o=f+e+(function o(t,e){return 2===e.encapsulation||1===e.encapsulation&&!t}(d.n,t)?".sc":"")+".js";import(o).then(e=>{try{t.S=e[(t=>T(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n){const o=n.style;if(o){const i=n.is+(n.styleMode||x);if(!e[i]){const n=t.V("template");e[i]=n,n.innerHTML=`<style>${o}</style>`,t.X(t.e,n)}}}(d,t,t.S)}catch(e){t.S=class{}}s(h,n)}).catch(t=>void 0)}},p:new WeakMap,i:new WeakMap,mt:new WeakMap,dt:new WeakMap,yt:new WeakMap,N:new WeakMap,q:new WeakMap,x:new WeakMap,j:new WeakMap,C:new WeakMap,$t:new WeakMap,R:new WeakMap,D:new WeakMap,O:new WeakMap};h.render=w(h,d);const E=d.jt;E["s-ld"]=[],E["s-rn"]=!0,E["s-init"]=(()=>{h.yt.set(E,p.loaded=h.W=!0),d.Tt(n,"appload",{detail:{namespace:t}})}),function N(t,e,n){const o=n.querySelectorAll(`[${W}]`),i=o.length;let c,f,l,r,s,u;if(i>0)for(t.yt.set(n,!0),r=0;r<i;r++)for(c=o[r],f=e.ft(c,W),(l={}).m=e.et(l.g=c),t.D.set(c,l),s=0,u=c.childNodes.length;s<u;s++)$(e,c.childNodes[s],l,f,!0)}(h,d,E),h.P=i,(p.components||[]).map(t=>(function e(t,n,o,i){const f={t:t[0],I:{color:{pt:"color"}}};f.qt=t[1];const l=t[3];if(l)for(o=0;o<l.length;o++)i=l[o],f.I[i[0]]={gt:i[1],Bt:!!i[2],pt:"string"==typeof i[3]?i[3]:i[3]?i[0]:0,Mt:i[4]};return f.encapsulation=t[4],t[5]&&(f.vt=t[5].map(c)),n[f.t]=f})(t,u)).forEach(t=>h.At(t,class extends HTMLElement{})),function S(t,e){e.componentOnReady=((e,n)=>{if(t.T(e)&&!t.yt.has(e)){const o=t.$t.get(e)||[];o.push(n),t.$t.set(e,o)}else n(e)}),e.$r&&e.$r.forEach(t=>e.componentOnReady(t[0],t[1])),e.$r=null}(h,p),p.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"iiifgallery","hydrated");