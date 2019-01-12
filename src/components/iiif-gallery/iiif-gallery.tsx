import { Component, Prop, State, Listen, Event, EventEmitter, Method, Watch } from '@stencil/core';
import { ManifestResource, IIIFResource, Collection, Sequence, Manifest } from 'manifesto.js';

@Component({
	tag: 'iiif-gallery',
	styleUrl: 'iiif-gallery.css'
})
export class IIIFGallery {

	private _selectedItem: ManifestResource | null;

	@State() items: ManifestResource[] = null;

	@Prop() manifest: string;
	@Watch('manifest')
	manifestHandler() {
		this._reset();
	}

	@Prop() ignore: string;
	@Watch('ignore')
	ignoreHandler() {
		this._reset();
	}

	@Event() onSelectManifest: EventEmitter;
	@Event() onSelectCollection: EventEmitter;
	@Event() onSelectCanvas: EventEmitter;

	componentWillLoad() {
		this._reset();
	}

	private _reset(): void {

		if (this.manifest) {

			manifesto.loadManifest(this.manifest).then((data) => {

				const manifest: ManifestResource = manifesto.parseManifest(data);

				// if it's a collection, list either the child collections or child manifests.
				if ((manifest as IIIFResource).isCollection()) {
					this.items = (manifest as Collection).items;
				} else {
					// if it's a manifest, list the child canvases.
					const sequences: Sequence[] = (manifest as Manifest).getSequences();

					if (sequences.length) {
						const sequence: Sequence = sequences[0];
						this.items = sequence.getCanvases();
					}
				}

				if (this.ignore) {
					// remove any whitespace in ignore csv
					const ignore: string[] = this.ignore.split(',').map((item: string) => item.trim());
					this.items = this.items.filter(resource => ignore.indexOf(resource.id) === -1);
				}

			}).catch(function(e) {
				console.error(e);
				console.error('failed to load manifest');
			});

		} else {
			this.items = null;
		}
	}

	@Method()
	public reset(): void{
		this._reset();
	}

	render() {

		if (!this.items) {
			return (<span></span>)
		} else {

			return (
				<section class="cf w-100 pa2">{
					this.items.map((item) =>
						<iiif-gallery-item item={item} selected={this._selectedItem === item}></iiif-gallery-item>
					)
				}
				</section>
			)
		}
	}

	@Listen('onSelectItem')
	itemSelected(event: CustomEvent) {

		const item: IIIFResource = event.detail;
		this._selectedItem = item;

		if (item.isCollection()) {
			this.onSelectCollection.emit(item);
		} else if (item.isManifest()) {
			this.onSelectManifest.emit(item);
		} else {
			this.onSelectCanvas.emit(item);
		}
	}
}
