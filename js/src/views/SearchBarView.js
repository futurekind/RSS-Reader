var SearchBarView = Backbone.View.extend({

	events: {
		'click #js-search-button': 'addRssFeed'
	},

	initialize: function(){
		this.setElement(App.loadTemplate('templates/searchBar.html'));
		this.render();
	},

	render: function(){
		this.$el.appendTo(App.appView.$el.find('header'));
	},

	addRssFeed: function(){
		console.log("Add RSS-Feed");
	}
});