exports.config = {
  namespace: 'iiifgallery',
  generateDistribution: true,
  bundles: [
    { components: ['iiif-gallery'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
