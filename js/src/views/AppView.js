var AppView = Backbone.View.extend({

	apiUrl: 'https://api.feedbin.me/v2/subscriptions.json',

	initialize: function(){
		this.setElement($('#app'));
		App.appView = this;
		this.checkApi();
	},

	checkApi: function(){
		$.get(this.apiUrl, function(data){
			console.log(data);
		});
	}

});