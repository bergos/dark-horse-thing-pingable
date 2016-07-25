'use strict'

const context = require('dark-horse-thing/context')
const ping = require('ping').promise.probe
const Switchable = require('dark-horse-thing/device/Switchable')

class Pingable extends Switchable {
  constructor (iri, config) {
    super(iri, {type: config.type})

    this.endpoint = config.endpoint
  }
  
  get () {
    return ping(this.endpoint).then((res) => {
      this.state = res.alive ? context.on : context.off

      return this
    })
  }
}

module.exports = Pingable
