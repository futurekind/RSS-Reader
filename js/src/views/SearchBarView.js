var SearchBarView = Backbone.View.extend({

	events: {
		'click #js-search-button': 'addRssFeed'
	},

	initialize: function(){
		this.setElement($('header'));
	},

	render: function(){

	}
});