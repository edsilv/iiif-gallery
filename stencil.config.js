exports.config = {
  namespace: 'iiifgallery',
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false
    }
  ]
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}