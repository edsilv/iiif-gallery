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
				'selected': this.selected,
				'aspect-ratio': true,
				'aspect-ratio--1x1': true
			}
		);

		return (
			<article class="fl w-100 w-50-m  w-25-ns pa2">
				<div onClick={() => this._itemSelectedHandler()} class={classes}>
					<img src={thumbnail.id} class="db bg-center cover aspect-ratio--object" />
				</div>
				{/*
				<a href="#0" class="ph2 ph0-ns pb3 link db">
					<h3 class="f5 f4-ns mb0 black-90">Heading</h3>
					<h3 class="f6 f5 fw4 mt2 black-60">Sub-heading</h3>
				</a>
				*/}
			</article>
		)
	}

	private _itemSelectedHandler() {
		this.onSelectItem.emit(this.item);
	}
}