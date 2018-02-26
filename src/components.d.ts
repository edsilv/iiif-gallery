/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  IIIFGalleryItem as IiifGalleryItem
} from './components/iiif-gallery-item/iiif-gallery-item';

declare global {
  interface HTMLIiifGalleryItemElement extends IiifGalleryItem, HTMLStencilElement {
  }
  var HTMLIiifGalleryItemElement: {
    prototype: HTMLIiifGalleryItemElement;
    new (): HTMLIiifGalleryItemElement;
  };
  interface HTMLElementTagNameMap {
    "iiif-gallery-item": HTMLIiifGalleryItemElement;
  }
  interface ElementTagNameMap {
    "iiif-gallery-item": HTMLIiifGalleryItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "iiif-gallery-item": JSXElements.IiifGalleryItemAttributes;
    }
  }
  namespace JSXElements {
    export interface IiifGalleryItemAttributes extends HTMLAttributes {
      item?: Manifesto.IManifestResource;
      selected?: boolean;
    }
  }
}


import {
  IIIFGallery as IiifGallery
} from './components/iiif-gallery/iiif-gallery';

declare global {
  interface HTMLIiifGalleryElement extends IiifGallery, HTMLStencilElement {
  }
  var HTMLIiifGalleryElement: {
    prototype: HTMLIiifGalleryElement;
    new (): HTMLIiifGalleryElement;
  };
  interface HTMLElementTagNameMap {
    "iiif-gallery": HTMLIiifGalleryElement;
  }
  interface ElementTagNameMap {
    "iiif-gallery": HTMLIiifGalleryElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "iiif-gallery": JSXElements.IiifGalleryAttributes;
    }
  }
  namespace JSXElements {
    export interface IiifGalleryAttributes extends HTMLAttributes {
      manifest?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
