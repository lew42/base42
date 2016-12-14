var create_constructor = require("./createConstructor");
var extend = require("./extend");

var track = require("track42");


var Base1 = create_constructor("Base1");
track(Base1);
track(Base1.prototype);

Base1.assign({
	extend: extend,
	create_constructor: create_constructor
});

Base1.prototype.assign({
	instantiate: function(){
		this.assign.apply(this, arguments);
		this.init();
	},
	init: function(){}
});

module.exports = Base1;