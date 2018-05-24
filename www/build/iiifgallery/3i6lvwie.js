/*! Built with http://stenciljs.com */
const{h:e}=window.iiifgallery;class t{constructor(){this.items=null}watchHandler(){this._reset()}componentWillLoad(){this._reset()}_reset(){this.manifest?manifesto.loadManifest(this.manifest).then(e=>{const t=manifesto.create(e);if(t.isCollection())this.items=t.items;else{const e=t.getSequences();if(e.length){const t=e[0];this.items=t.getCanvases()}}}).catch(function(e){console.error(e),console.error("failed to load manifest")}):this.items=null}reset(){this._reset()}render(){return this.items?this.items.map(t=>e("iiif-gallery-item",{item:t,selected:this._selectedItem===t})):e("span",null)}itemSelected(e){const t=e.detail;this._selectedItem=t,t.isCollection()?this.onSelectCollection.emit(t):t.isManifest()?this.onSelectManifest.emit(t):this.onSelectCanvas.emit(t)}static get is(){return"iiif-gallery"}static get properties(){return{items:{state:!0},manifest:{type:String,attr:"manifest",watchCallbacks:["watchHandler"]},reset:{method:!0}}}static get events(){return[{name:"onSelectManifest",method:"onSelectManifest",bubbles:!0,cancelable:!0,composed:!0},{name:"onSelectCollection",method:"onSelectCollection",bubbles:!0,cancelable:!0,composed:!0},{name:"onSelectCanvas",method:"onSelectCanvas",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"onSelectItem",method:"itemSelected"}]}static get style(){return"iiif-gallery{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}"}}var s,i=(function(e){!function(){var t={}.hasOwnProperty;function s(){for(var e=[],i=0;i<arguments.length;i++){var l=arguments[i];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(l);else if(Array.isArray(l))e.push(s.apply(null,l));else if("object"===n)for(var a in l)t.call(l,a)&&l[a]&&e.push(a)}}return e.join(" ")}e.exports?e.exports=s:window.classNames=s}()}(s={exports:{}}),s.exports);class l{constructor(){this.selected=!1}render(){let t=this.item.getThumbnail();const s=i({collection:this.item.isCollection(),manifest:this.item.isManifest(),canvas:this.item.isCanvas(),selected:this.selected});return e("figure",{onClick:()=>this._itemSelectedHandler(),class:s},e("img",{src:t.id}))}_itemSelectedHandler(){this.onSelectItem.emit(this.item)}static get is(){return"iiif-gallery-item"}static get properties(){return{item:{type:"Any",attr:"item"},selected:{type:Boolean,attr:"selected"}}}static get events(){return[{name:"onSelectItem",method:"onSelectItem",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"iiif-gallery-item{width:calc(25% - 8px);text-decoration:none;color:#000;margin-bottom:8px;cursor:pointer}figure{overflow:hidden;margin:0 15px 20px 15px;text-align:center}img{max-width:100%;height:auto;-webkit-transition:-webkit-transform .2s ease-in-out;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}figcaption{margin-top:15px}"}}export{t as IiifGallery,l as IiifGalleryItem};