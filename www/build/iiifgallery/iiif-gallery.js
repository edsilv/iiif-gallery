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

export { IIIFGallery as IiifGallery };
