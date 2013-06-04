var AppView = Backbone.View.extend({

	initialize: function(){
		this.setElement($('#js-app'));
		App.appView = this;
		this.render();
	},

	render: function(){
		var searchBarView = new SearchBarView();
	}

});