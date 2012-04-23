var Backbone, Main, main,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

Ti.API.debug('hi');

Backbone = require('backbone');

Main = (function(_super) {

  __extends(Main, _super);

  function Main() {
    this.initialize = __bind(this.initialize, this);
    Main.__super__.constructor.apply(this, arguments);
  }

  Main.prototype.initialize = function() {
    this.proxy = Ti.UI.createWindow({
      navBarHidden: false
    });
    alert('opening');
    return this.proxy.open();
  };

  return Main;

})(Backbone.View);

main = new Main;
