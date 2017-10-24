/**
 * Blocks the main thread for `sleepTime` ms
 * @param  {Number} sleepTime number of ms to block the main thread
 * @return {Undefined}
 */
function msleep(sleepTime) {
  var initTime = new Date
  while((new Date).getTime() < (initTime.getTime() + sleepTime));
}

// Exports
// -------

function isNode() {
  return (
    typeof module !== 'undefined' &&
    typeof module.exports !== 'undefined'
  )
}

if (isNode) {
  module.exports = msleep
} else {
  window.msleep = msleep
}
