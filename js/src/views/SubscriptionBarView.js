var SubscriptionBarView = Backbone.View.extend({

	subscriptions: null,

	initialize: function(){
		this.template = App.loadTemplate('templates/subscriptionBar.html');
		this.loadSubscriptions();
	},

	loadSubscriptions: function(){

		var loading = new MessageView({
			showLoadingIndicator: true,
			title: 'Loading your subscriptions!'
		});

		var _this = this;

		var params = {
			method: 'getSubscriptions',
			userpass: App.appView.apiUser + ':' + App.appView.apiPassword
		};

		this.subscriptions = new Subscriptions();

		this.subscriptions.on('change', this.render, this);

		this.subscriptions.load(params, function(data){
			loading.close();

			if(data) {
				_this.render();
			} else {
				new LoginFormView();
			}

		});

	},

	render: function() {

		var templateHtml = _.template(this.template, {data: this.subscriptions.models});

		this.$el.html(templateHtml);

		$('#app-subscriptions-bar').append(this.$el);

	}
});