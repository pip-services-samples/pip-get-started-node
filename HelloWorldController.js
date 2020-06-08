"use strict";

class HelloWorldController {
  constructor() {
    this._defaultName = "Pip User";
  }

  configure(config) {
    this._defaultName = config.getAsStringWithDefault("default_name", this._defaultName);
  }

  greeting(name, callback) {
    callback(null, "Hello, " + (name || this._defaultName) + "!");
  }
}

exports.HelloWorldController = HelloWorldController
