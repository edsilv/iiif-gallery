import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';
import classNames  from 'classnames';

@Component({
	tag: 'iiif-gallery-item',
	styleUrl: 'iiif-gallery-item.css'
})
export class IIIFGalleryItem {

	@Prop() item: Manifesto.IManifestResource;
	@Prop() selected: boolean = false;

	@Event() selectItem: EventEmitter;

	renderLabel() {

		let label: string | null = this.item.getDefaultLabel();

		if (label) {
			return  (<div class="ph2 ph0-ns pb3 link">
						<h3 class="f5 f4-ns mb0 black-90">{label}</h3>
						{/*<h3 class="f6 f5 fw4 mt2 black-60">Sub-heading</h3>*/}
				    </div>)
		}
	}

	render() {

    let thumbnail: Manifesto.IThumbnail = this.item.getThumbnail();

		const classes = classNames(
			{
				'collection': (this.item as Manifesto.IIIIFResource).isCollection(),
                'manifest': this.item.isManifest(),
				'canvas': this.item.isCanvas(),
				'selected': this.selected,
				'aspect-ratio': true,
				'aspect-ratio--1x1': true
			}
		);

		return (
			<div onClick={() => this._itemSelectedHandler()} class="fl w-100 w-50-m  w-25-ns pa2">
				<div class={classes}>
					{
            (thumbnail) ? <img src={thumbnail.id} class="db bg-center cover aspect-ratio--object" /> : <span>No thumbnail</span>
          }
				</div>
				{
					this.renderLabel()
				}
			</div>
		)
	}

	private _itemSelectedHandler() {
		this.selectItem.emit(this.item);
	}
}
