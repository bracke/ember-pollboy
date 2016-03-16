"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,i,n,a){var r=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:i["default"]}),(0,n["default"])(r,a["default"].modulePrefix),e["default"]=r}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,i){var n=i["default"].APP.name,a=i["default"].APP.version;e["default"]=t["default"].extend({version:a,name:n})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,i){e["default"]={name:"App Version",initialize:(0,t["default"])(i["default"].APP.name,i["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,i){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,i){function n(){var e=arguments[1]||arguments[0];if(i["default"].exportApplicationGlobal!==!1){var n,a=i["default"].exportApplicationGlobal;n="string"==typeof a?a:t["default"].String.classify(i["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/pollboy",["exports"],function(e){function t(e,t){t.inject("route","pollboy","service:pollboy")}e.initialize=t,e["default"]={name:"pollboy",initialize:t}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,i){var n=t["default"].Router.extend({location:i["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/services/pollboy",["exports","ember"],function(e,t){var i=t["default"].Object.extend({isPaused:!1,schedule:function(){var e=this.get("callback"),i=this.get("context"),n=this.get("interval");return t["default"].run.later(this,function(){var t=this;e.apply(i).then(function(){t.set("timer",t.schedule())})},n)},pause:function(){this.set("isPaused",!0);var e=this.get("timer");t["default"].run.cancel(e)},resume:function(){var e=this.get("isPaused");e&&this.start()},start:function(){var e=this.schedule();this.set("timer",e)},stop:function(){this.set("isPaused",!1);var e=this.get("timer");t["default"].run.cancel(e)}});e.Poller=i,e["default"]=t["default"].Service.extend({pollers:[],init:function(){this._super(),document.addEventListener("visibilitychange",this.onVisibilityChange.bind(this),!1)},onVisibilityChange:function(){var e=this.get("pollers");return document.hidden?void e.forEach(function(e){e.pause()}):void e.forEach(function(e){e.resume()})},add:function(e,t,n){var a=i.create({callback:t,context:e,interval:n});return a.start(),this.get("pollers").pushObject(a),a},remove:function(e){e.stop(),this.get("pollers").removeObject(e)}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.2",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),i=e.createElement("h2");e.setAttribute(i,"id","title");var n=e.createTextNode("Welcome to Ember");e.appendChild(i,n),e.appendChild(t,i);var i=e.createTextNode("\n\n");e.appendChild(t,i);var i=e.createComment("");e.appendChild(t,i);var i=e.createTextNode("\n");return e.appendChild(t,i),t},buildRenderNodes:function(e,t,i){var n=new Array(1);return n[0]=e.createMorphAt(t,2,2,i),n},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var i=t+"/config/environment",n=e["default"].$('meta[name="'+i+'"]').attr("content"),a=JSON.parse(unescape(n));return{"default":a}}catch(r){throw new Error('Could not read config from meta tag with name "'+i+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-pollboy",version:"v0.1.0"});