/**
 * main.js
 *
 * the entry of the whole app
 */
var Backbone = require("Backbone");


var SiteRouter = Backbone.Router.extend({
    routes: {
        '': 'home',
        'login': 'login',
        'search':'search',
        'search_result':'search_result',
        'course/:id(/)':'course'
    },
    home: function() {
        console.log('you have reached home')
    },
    login: function() {
        console.log('you have reached login')
    },
    search:function(){
        console.log('you have reached search');
    },
    search_result:function(){
        console.log('you have reached search result');
    },
    course:function(id){
        console.log('you have reached course'+id);
    }
});

var IndexRouter = Backbone.Router.extend({
    routes: {
        'choice/:id(/)': 'choice',
        'recommend':'recommend',
        'all':'all'
    },
    choice: function(id) {
        console.log('you have reached choice'+id)
    },
    recommend: function() {
        console.log('you have reached recommend')
    },
    all:function(){
        console.log('you have reached all')
    }
});

//initialize the app
var siteRouter = new SiteRouter();
var indexRouter = new IndexRouter();

$('#target').click(function(e) {
    siteRouter.navigate($(e.target).attr('href'), true);
    return false;
});

Backbone.history.start({
    pushState: !0
});
