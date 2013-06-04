var SearchBarView = Backbone.View.extend({

	initialize: function(){
		this.setElement(App.loadTemplate('templates/searchBar.html'));
		this.render();
	},

	render: function(){
		this.$el.appendTo(App.appView.$el.find('header'));
	}
});