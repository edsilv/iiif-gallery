/*! Built with http://stenciljs.com */
!function(e,t,i,r,n,s,l,o,c,a,u,f,d,m,p){for((u=e.iiifgallery=e.iiifgallery||{}).components=c,(d=c.filter(function(e){return e[2]}).map(function(e){return e[0]})).length&&((f=t.createElement("style")).innerHTML=d.join()+"{visibility:hidden}.hydrated{visibility:inherit}",f.setAttribute("data-styles",""),t.head.insertBefore(f,t.head.firstChild)),u.$r=[],p=a.componentOnReady,a.componentOnReady=function(t){const i=this;function r(e){u.$r?u.$r.push([i,e]):u.componentOnReady(i,e)}return p&&p.call(i),t?r(t):e.Promise?new Promise(r):{then:r}},f=(d=t.querySelectorAll("script")).length-1;f>=0&&!(m=d[f]).src&&!m.hasAttribute("data-resources-url");f--);(d=m.getAttribute("data-resources-url"))&&(n=d),!n&&m.src&&(n=(d=m.src.split("/").slice(0,-1)).join("/")+(d.length?"/":"")+"iiifgallery/"),f=t.createElement("script"),function(e,t,i,r){return!(t.search.indexOf("core=esm")>0)&&(!(!(t.search.indexOf("core=es5")>0||"file:"===t.protocol)&&e.customElements&&e.customElements.define&&e.fetch&&e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")&&"noModule"in i)||function(e){try{return new Function('import("")'),!1}catch(e){}return!0}())}(e,e.location,f)?f.src=n+"iiifgallery.core.pf.js":(f.src=n+"iiifgallery.core.js",f.setAttribute("type","module"),f.setAttribute("crossorigin",!0)),f.setAttribute("data-resources-url",n),f.setAttribute("data-namespace","iiifgallery"),t.head.appendChild(f)}(window,document,0,0,0,0,0,0,[["iiif-gallery","iiif-gallery",1,[["ignore",1,0,1,2],["items",5],["manifest",1,0,1,2],["reset",6]],0,[["onSelectItem","itemSelected"]]],["iiif-gallery-item","iiif-gallery",1,[["item",1],["selected",1,0,1,3]]]],HTMLElement.prototype);