import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'iiifgallery',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};