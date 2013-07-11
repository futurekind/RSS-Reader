var AppView = Backbone.View.extend({

	subscriptionBarView: null,

	initialize: function(){
		this.setElement($('#app'));
	},

	render: function(){
		// this.subscriptionBarView = new SubscriptionBarView();
		this.showMessage();
	},

	showMessage: function(){

		var message = new MessageView({
			showLoadingIndicator: true,
			title: 'Lade Daten'
		});

		setTimeout(function(){
			message.close();
		}, 5000);
	}

});