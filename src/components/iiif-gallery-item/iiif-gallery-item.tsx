import { Component, Event, EventEmitter, Prop } from '@stencil/core';
import classNames  from 'classnames';

@Component({
	tag: 'iiif-gallery-item',
	styleUrl: 'iiif-gallery-item.css'
})
export class IIIFGalleryItem {

	@Prop() item: Manifesto.IManifestResource;
	@Prop() selected: boolean = false;

	@Event() onSelectItem: EventEmitter;

	render() {

        let thumbnail: Manifesto.IThumbnail = this.item.getThumbnail();
        //let label: string | null = this.item.getDefaultLabel();

		const classes = classNames(
			{ 
				'collection': (this.item as Manifesto.IIIIFResource).isCollection(),
                'manifest': this.item.isManifest(),
				'canvas': this.item.isCanvas(),
				'selected': this.selected
			}
		);

		return (
            <figure onClick={() => this._itemSelectedHandler()} class={classes}>
                <img src={thumbnail.id} />
                {/* <figcaption>
                    {label}
                </figcaption> */}
            </figure>
		)
	}

	private _itemSelectedHandler() {
		this.onSelectItem.emit(this.item);
	}
}