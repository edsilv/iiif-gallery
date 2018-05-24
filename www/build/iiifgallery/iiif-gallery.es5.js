/*! Built with http://stenciljs.com */
iiifgallery.loadBundle("iiif-gallery",["exports"],function(e){var t,n=window.iiifgallery.h,i=function(){function e(){this.items=null}return e.prototype.watchHandler=function(){this._reset()},e.prototype.componentWillLoad=function(){this._reset()},e.prototype._reset=function(){var e=this;manifesto.loadManifest(this.manifest).then(function(t){var n=manifesto.create(t);if(n.isCollection())e.items=n.items;else{var i=n.getSequences();if(i.length){var r=i[0];e.items=r.getCanvases()}}}).catch(function(e){console.error(e),console.error("failed to load manifest")})},e.prototype.reset=function(){this._reset()},e.prototype.render=function(){var e=this;return this.items?this.items.map(function(t){return n("iiif-gallery-item",{item:t,selected:e._selectedItem===t})}):n("span",null,"loading...")},e.prototype.itemSelected=function(e){var t=e.detail;this._selectedItem=t,t.isCollection()?this.onSelectCollection.emit(t):t.isManifest()?this.onSelectManifest.emit(t):this.onSelectCanvas.emit(t)},Object.defineProperty(e,"is",{get:function(){return"iiif-gallery"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{items:{state:!0},manifest:{type:String,attr:"manifest",watchCallbacks:["watchHandler"]},reset:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onSelectManifest",method:"onSelectManifest",bubbles:!0,cancelable:!0,composed:!0},{name:"onSelectCollection",method:"onSelectCollection",bubbles:!0,cancelable:!0,composed:!0},{name:"onSelectCanvas",method:"onSelectCanvas",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"onSelectItem",method:"itemSelected"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"iiif-gallery{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}"},enumerable:!0,configurable:!0}),e}(),r=(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var l in r)t.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}(t={exports:{}}),t.exports),o=function(){function e(){this.selected=!1}return e.prototype.render=function(){var e=this,t=this.item.getThumbnail(),i=r({collection:this.item.isCollection(),manifest:this.item.isManifest(),canvas:this.item.isCanvas(),selected:this.selected});return n("figure",{onClick:function(){return e._itemSelectedHandler()},class:i},n("img",{src:t.id}))},e.prototype._itemSelectedHandler=function(){this.onSelectItem.emit(this.item)},Object.defineProperty(e,"is",{get:function(){return"iiif-gallery-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{item:{type:"Any",attr:"item"},selected:{type:Boolean,attr:"selected"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onSelectItem",method:"onSelectItem",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"iiif-gallery-item{width:calc(25% - 8px);text-decoration:none;color:#000;margin-bottom:8px;cursor:pointer}figure{overflow:hidden;margin:0 15px 20px 15px;text-align:center}img{max-width:100%;height:auto;-webkit-transition:-webkit-transform .2s ease-in-out;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}figcaption{margin-top:15px}"},enumerable:!0,configurable:!0}),e}();e.IiifGallery=i,e.IiifGalleryItem=o,Object.defineProperty(e,"__esModule",{value:!0})});