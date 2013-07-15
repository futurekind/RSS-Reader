var AppView = Backbone.View.extend({

	subscriptionBarView: null,
	appIdentifier: 'zappscription',

	apiUser: null,
	apiPassword: null,

	initialize: function(){
		this.setElement($('#app'));
		this.apiUser = localStorage.getItem(this.appIdentifier + 'username');
		this.apiPassword = localStorage.getItem(this.appIdentifier + 'password');
	},

	render: function(){

		this.checkForUsernameAndPassword();
	},

	checkForUsernameAndPassword: function(){
		if(!window.localStorage) {

		} else {
			this.subscriptionBarView = new SubscriptionBarView();
		}

	}

});