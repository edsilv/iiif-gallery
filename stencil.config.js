exports.config = {
  namespace: 'iiifgallery',
  generateDistribution: true,
  serviceWorker: false
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}