"use strict";

const rpc = require("pip-services3-rpc-node");
const container = require('pip-services3-container-node');
const factory = require("./HelloWorldServiceFactory");

class HelloWorldProcess extends container.ProcessContainer {
    constructor() {
        super('hello-world', 'HelloWorld microservice');
        this._configPath = './config.yml';
        this._factories.add(new factory.HelloWorldServiceFactory());
        this._factories.add(new rpc.DefaultRpcFactory());
    }
}

exports.HelloWorldProcess = HelloWorldProcess;
