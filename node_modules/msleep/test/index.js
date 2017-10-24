var msleep = require('../src/')
var chai = require('chai')
var assert = chai.assert

describe('msleep', function () {
  it('should block the main thread for N seconds', function () {
    var timeStart = (new Date).getTime()
    var sleepTime = 20
    var timeEnd = (new Date).getTime()

    msleep(sleepTime)
    timeEnd = (new Date).getTime()

    assert(
      (timeStart + sleepTime) === (timeEnd - 1) ||
      (timeStart + sleepTime) === (timeEnd)
    )
  })
})
