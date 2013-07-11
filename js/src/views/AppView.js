var AppView = Backbone.View.extend({

	subscriptionBarView: null,

	events: {
		"click .test-message-plain": "showMessage"
	},

	initialize: function(){
		this.setElement($('#app'));
	},

	render: function(){
		// this.subscriptionBarView = new SubscriptionBarView();
	},

	showMessage: function(e){
		e.preventDefault();
		new MessageView({
			showLoadingIndicator: true,
			title: 'Hallo, junger Freund',
			body: 'Ich bin ein Messagetext! Ich hoffe alles passt!'
		});
	}

});