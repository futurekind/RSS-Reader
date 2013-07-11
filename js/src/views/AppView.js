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

		} else if(this.apiUser) {
			this.subscriptionBarView = new SubscriptionBarView();
		} else {
			this.apiUser = 'wrong_user';
			this.apiPassword = 'wrong_pwd';

			localStorage.setItem(this.appIdentifier + 'username', this.apiUser);
			localStorage.setItem(this.appIdentifier + 'password', this.apiPassword);

			this.subscriptionBarView = new SubscriptionBarView();
		}

	}

});