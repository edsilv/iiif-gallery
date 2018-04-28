/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface IiifGalleryItem {
      'item': Manifesto.IIIIFResource;
    }
  }

  interface HTMLIiifGalleryItemElement extends StencilComponents.IiifGalleryItem, HTMLStencilElement {}

  var HTMLIiifGalleryItemElement: {
    prototype: HTMLIiifGalleryItemElement;
    new (): HTMLIiifGalleryItemElement;
  };
  interface HTMLElementTagNameMap {
    'iiif-gallery-item': HTMLIiifGalleryItemElement;
  }
  interface ElementTagNameMap {
    'iiif-gallery-item': HTMLIiifGalleryItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'iiif-gallery-item': JSXElements.IiifGalleryItemAttributes;
    }
  }
  namespace JSXElements {
    export interface IiifGalleryItemAttributes extends HTMLAttributes {
      'item'?: Manifesto.IIIIFResource;
      'onOnSelectItem'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface IiifGallery {
      'manifest': string;
      'reset': () => void;
    }
  }

  interface HTMLIiifGalleryElement extends StencilComponents.IiifGallery, HTMLStencilElement {}

  var HTMLIiifGalleryElement: {
    prototype: HTMLIiifGalleryElement;
    new (): HTMLIiifGalleryElement;
  };
  interface HTMLElementTagNameMap {
    'iiif-gallery': HTMLIiifGalleryElement;
  }
  interface ElementTagNameMap {
    'iiif-gallery': HTMLIiifGalleryElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'iiif-gallery': JSXElements.IiifGalleryAttributes;
    }
  }
  namespace JSXElements {
    export interface IiifGalleryAttributes extends HTMLAttributes {
      'manifest'?: string;
      'onOnSelectCanvas'?: (event: CustomEvent) => void;
      'onOnSelectCollection'?: (event: CustomEvent) => void;
      'onOnSelectManifest'?: (event: CustomEvent) => void;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
