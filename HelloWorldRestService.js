"use strict";
 
const rpc = require("pip-services3-rpc-node");
const commons = require("pip-services3-commons-node");
 
class HelloWorldRestService extends rpc.RestService {
   constructor() {
       super();
       this._baseRoute = "/hello_world";
       this._dependencyResolver.put("controller", new commons.Descriptor("hello-world", "controller", "*", "*", "1.0"));
   }

   setReferences(references){
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired('controller');
   }

   register() {
       this.registerRoute("get", "/greeting", null, (req, res) => {
           let name = req.query.name;
           this._controller.greeting(name, this.sendResult(req, res));
       });
   }
}
 
exports.HelloWorldRestService = HelloWorldRestService
