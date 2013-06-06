var SearchBarView = Backbone.View.extend({

	events: {
		'click #js-search-button': 'addRssFeed'
	},

	initialize: function(){
		this.setElement($('header'));
	},

	render: function(){

	},

	addRssFeed: function(){
		var url = this.$el.find('input').val();

		$.get(url, function(data){
			console.log(data);
		});
	}
});