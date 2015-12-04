var Backbone = require("Backbone");
var _ = require('underscore');

var nav_view = Backbone.View.extend({
	className:"container space",
    template: _.template($("#nav_template").html()),
    initialize:function(options){
    	this.model.bind("change",_.bind(this.render,this));
		this.router = options.router;
    },
    events:{
		"click .link":"onLinkClicked",
		"click .back":"onBackClicked"
    },
    onLinkClicked:function(e){
		this.router.navigate($(e.target).data("link"),{trigger: true});
    },
    onBackClicked:function(){
		window.history.back();
    },
    render: function() {
        this.$el.html(this.template( this.model.toJSON() ));
        return this;
    }
})

module.exports = nav_view;
