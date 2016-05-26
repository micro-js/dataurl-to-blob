/**
 * Expose dataURLToBlob
 */

module.exports = dataURLToBlob

/**
 * dataURLToBlob
 */

function dataURLToBlob (dataURL) {
  var hasBlobConstructor = supportsBlobConstructor()
  var hasArrayBufferViewSupport = hasBlobConstructor && supportsArrayBufferView()

  var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder
  var dataURLPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/

  // Parse the dataURL components as per RFC 2397
  var matches = dataURL.match(dataURLPattern)
  if (!matches) {
    throw new Error('invalid data URI')
  }

  // Default to text/plain;charset=US-ASCII
  var mediaType = matches[2]
    ? matches[1]
    : 'text/plain' + (matches[3] || ';charset=US-ASCII')

  var isBase64 = !!matches[4]
  var dataString = dataURL.slice(matches[0].length)

  if (isBase64) {
    // Convert base64 to raw binary data held in a string:
    byteString = atob(dataString)
  } else {
    // Convert base64/URLEncoded data component to raw binary:
    byteString = decodeURIComponent(dataString)
  }
  // Write the bytes of the string to an ArrayBuffer:
  var arrayBuffer = new ArrayBuffer(byteString.length)
  var intArray = new Uint8Array(arrayBuffer)

  for (var i = 0; i < byteString.length; i += 1) {
    intArray[i] = byteString.charCodeAt(i)
  }

  // Write the ArrayBuffer (or ArrayBufferView) to a blob:
  if (hasBlobConstructor) {
    return new Blob(
      [hasArrayBufferViewSupport ? intArray : arrayBuffer],
      {type: mediaType}
    )
  }

  var bb = new BlobBuilder()
  bb.append(arrayBuffer)
  return bb.getBlob(mediaType)
}

/**
 * Helpers
 */

function supportsBlobConstructor () {
  if (window.Blob) {
    try {
      return Boolean(new Blob())
    } catch (e) {}
  }

  return false
}

function supportsArrayBufferView () {
  if (window.Uint8Array) {
     try {
       return new Blob([new Uint8Array(100)]).size === 100
     } catch (e) {}
  }

  return false
}
