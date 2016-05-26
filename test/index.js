/**
 * Imports
 */

var toBlob = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var canvas = document.createElement('canvas')
  var blob = toBlob(canvas.toDataURL('image/png'))

  t.ok(blob instanceof Blob)
  t.end()
})

function drawCircle (canvas) {
  var ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.arc(100, 75, 50, 0, 2*Math.PI)
  ctx.stroke()
}
