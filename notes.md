# prod builds

Change:

```
"dev": "sd concurrent \"stencil build --dev --watch\" \"stencil-dev-server\" ",
```

to:

```
"dev": "sd concurrent \"stencil build --dev --prod --watch\" \"stencil-dev-server\" ",
```

otherwise you get es6 builds.

# firefox

https://github.com/ionic-team/stencil/issues/594#issuecomment-370479069

After build, in dist/iiifgallery/iiifgallery.core.pf.js, replace es6-promise with:

https://cdn.jsdelivr.net/npm/es6-promise@4.1.0/dist/es6-promise.js

Change

```
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ES6Promise = factory());
```

to

```
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    (global.ES6Promise = factory());
```

# lazy loading

https://www.npmjs.com/package/st-img . just npm install that and put it in your stencil-config. Lazy loads images using https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

So you can see here, i have installed the `stencil-router` which is a collection of web components that provide routing functionality. https://github.com/ionic-team/ionic-stencil-hn-app/blob/master/package.json#L20 . I then just put it here https://github.com/ionic-team/ionic-stencil-hn-app/blob/master/stencil.config.js#L10 in my stencil-config, and the compiler handles putting the components in the right place
