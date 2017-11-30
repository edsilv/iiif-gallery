import { Component, Event, EventEmitter, Prop } from '@stencil/core';
import classNames  from 'classnames';

@Component({
	tag: 'iiif-explorer-item',
	styleUrl: 'iiif-explorer-item.scss'
})
export class IIIFExplorerItem {

    @Prop() item: Manifesto.IIIIFResource;

	@Event() onSelectItem: EventEmitter;

	render() {

        let thumbnail: string = this.item.getThumbnail();
        const description: string | null = this.item.getDescription();

		const figClasses = classNames(
			{ 
				'collection': this.item.isCollection(),
                'manifest': this.item.isManifest(),
                'canvas': this.item.isCanvas()
			}
		);

		return (
			
			<figure class={figClasses}>
                <img src={thumbnail} />
				<figcaption>
                    {description}
                </figcaption>
			</figure>
		)
	}

	private _itemSelectedHandler() {
		this.onSelectItem.emit(this.item);
	}
}