var Backbone = require("Backbone");
var _ = require('underscore');

//load model
var HotSearch = require('../models/hot_search.js');

var search_view = Backbone.View.extend({
	className:"search_view",
    template: _.template($("#search_template").html()),
    events:{
		'click .search_btn':'onSearch',
		'click .item':'onTagClick',
        'click .circle':'onClick'
    },
    initialize : function(options){
        this.options = options;
        this.model = new HotSearch();
    },
    onSearch:function(){
		if(!this.$('.search_input').val()){
			console.log("no value!");
		}else{
            this.trigger("hide");
            var params = {page:1,type:'search'};
            params.keywords = this.$('.search_input').val();
			var url = "search_result?" + $.param(params);
			this.options.router.navigate(url,{trigger: true});
		}
    },
    onTagClick:function(e){
		this.options.router.navigate($(e.target).data("link"),{trigger: true});
    },
    onClick:function(){
        this.trigger("hide");
    },
    render: function(){
        var that = this;
        this.$el.html(this.template());
        return this;
    }
})

module.exports = search_view;
