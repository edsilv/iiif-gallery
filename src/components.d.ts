/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface IiifGalleryItem {
    'item': Manifesto.IManifestResource;
    'selected': boolean;
  }
  interface IiifGalleryItemAttributes extends StencilHTMLAttributes {
    'item'?: Manifesto.IManifestResource;
    'onOnSelectItem'?: (event: CustomEvent) => void;
    'selected'?: boolean;
  }

  interface IiifGallery {
    'ignore': string;
    'manifest': string;
    'reset': () => void;
  }
  interface IiifGalleryAttributes extends StencilHTMLAttributes {
    'ignore'?: string;
    'manifest'?: string;
    'onOnSelectCanvas'?: (event: CustomEvent) => void;
    'onOnSelectCollection'?: (event: CustomEvent) => void;
    'onOnSelectManifest'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'IiifGalleryItem': Components.IiifGalleryItem;
    'IiifGallery': Components.IiifGallery;
  }

  interface StencilIntrinsicElements {
    'iiif-gallery-item': Components.IiifGalleryItemAttributes;
    'iiif-gallery': Components.IiifGalleryAttributes;
  }


  interface HTMLIiifGalleryItemElement extends Components.IiifGalleryItem, HTMLStencilElement {}
  var HTMLIiifGalleryItemElement: {
    prototype: HTMLIiifGalleryItemElement;
    new (): HTMLIiifGalleryItemElement;
  };

  interface HTMLIiifGalleryElement extends Components.IiifGallery, HTMLStencilElement {}
  var HTMLIiifGalleryElement: {
    prototype: HTMLIiifGalleryElement;
    new (): HTMLIiifGalleryElement;
  };

  interface HTMLElementTagNameMap {
    'iiif-gallery-item': HTMLIiifGalleryItemElement
    'iiif-gallery': HTMLIiifGalleryElement
  }

  interface ElementTagNameMap {
    'iiif-gallery-item': HTMLIiifGalleryItemElement;
    'iiif-gallery': HTMLIiifGalleryElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
