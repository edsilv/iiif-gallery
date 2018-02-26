/*! Built with http://stenciljs.com */
const { h } = window.iiifgallery;

class IIIFGallery {
    constructor() {
        this.items = null;
    }
    componentWillLoad() {
        this._reset();
    }
    _reset() {
        manifesto.loadManifest(this.manifest).then((data) => {
            const manifest = manifesto.create(data);
            // if it's a collection, list either the child collections or child manifests.
            if (manifest.isCollection()) {
                this.items = manifest.items;
            }
            else {
                // if it's a manifest, list the child canvases.
                const sequences = manifest.getSequences();
                if (sequences.length) {
                    const sequence = sequences[0];
                    this.items = sequence.getCanvases();
                }
            }
        }).catch(function (e) {
            console.error(e);
            console.error('failed to load manifest');
        });
    }
    reset() {
        this._reset();
    }
    render() {
        if (!this.items) {
            return (h("span", null, "loading..."));
        }
        else {
            return (this.items.map((item) => h("iiif-gallery-item", { item: item, selected: this._selectedItem === item })));
        }
    }
    itemSelected(event) {
        const item = event.detail;
        this._selectedItem = item;
        if (item.isCollection()) {
            this.onSelectCollection.emit(item);
        }
        else if (item.isManifest()) {
            this.onSelectManifest.emit(item);
        }
        else {
            this.onSelectCanvas.emit(item);
        }
    }
    static get is() { return "iiif-gallery"; }
    static get properties() { return { "items": { "state": true }, "manifest": { "type": String, "attr": "manifest" }, "reset": { "method": true } }; }
    static get events() { return [{ "name": "onSelectManifest", "method": "onSelectManifest", "bubbles": true, "cancelable": true, "composed": true }, { "name": "onSelectCollection", "method": "onSelectCollection", "bubbles": true, "cancelable": true, "composed": true }, { "name": "onSelectCanvas", "method": "onSelectCanvas", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "iiif-gallery { \n	display: flex;\n	flex-wrap: wrap;\n	/*justify-content: space-between;*/ /* or space-around */\n}"; }
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

class IIIFGalleryItem {
    constructor() {
        this.selected = false;
    }
    render() {
        let thumbnail = this.item.getThumbnail();
        //let label: string | null = this.item.getDefaultLabel();
        const classes = classnames({
            'collection': this.item.isCollection(),
            'manifest': this.item.isManifest(),
            'canvas': this.item.isCanvas(),
            'selected': this.selected
        });
        return (h("figure", { onClick: () => this._itemSelectedHandler(), class: classes },
            h("img", { src: thumbnail.id })));
    }
    _itemSelectedHandler() {
        this.onSelectItem.emit(this.item);
    }
    static get is() { return "iiif-gallery-item"; }
    static get properties() { return { "item": { "type": "Any", "attr": "item" }, "selected": { "type": Boolean, "attr": "selected" } }; }
    static get events() { return [{ "name": "onSelectItem", "method": "onSelectItem", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "iiif-gallery-item {\n    width: calc(25% - 8px); /* 4 per row with 8px padding */\n    text-decoration: none;\n    color: #000;\n    margin-bottom: 8px;\n    cursor: pointer;\n}\n\nfigure {\n    overflow: hidden;\n    margin: 0 15px 20px 15px;\n    text-align: center;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n    /*display: block;*/\n    transition: transform .2s ease-in-out;\n}\n\nfigcaption {\n    margin-top: 15px;\n}\n\n/* \@media screen and (min-width:50em) {\n     a {\n       width:calc(25% - 6px)\n     }\n } */"; }
}

export { IIIFGallery as IiifGallery, IIIFGalleryItem as IiifGalleryItem };
