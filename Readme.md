
# dataurl-to-blob

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Turn a dataurl into a blob in a cross-browser way. This code is based on [blueimp's canvas-to-blob](https://github.com/blueimp/JavaScript-Canvas-to-Blob/blob/master/js/canvas-to-blob.js), with the important difference that it is not a polyfill, and that it can be required (though not used) on the server, which makes it more friendly to server-side rendering.

## Installation

    $ npm install @f/dataurl-to-blob

## Usage

```js
var toBlob = require('@f/dataurl-to-blob')

function canvasToBlob (canvas) {
  return toBlob(canvas.toDataURL('image/png'))
}
```

## API

### dataURLToBlob(dataURL)

- `dataURL` - The dataURL string. This can be generated from a canvas by calling `canvas.toDataURL("image/png")`.

**Returns:** A blob buffer of the raw image data

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/dataurl-to-blob.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/dataurl-to-blob
[git-image]: https://img.shields.io/github/tag/micro-js/dataurl-to-blob.svg?style=flat-square
[git-url]: https://github.com/micro-js/dataurl-to-blob
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/dataurl-to-blob.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/dataurl-to-blob
