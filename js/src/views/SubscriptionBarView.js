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

		var params = {
			method: 'getSubscriptions'
		};

		$.get('scripts/feedbinApiProxy.php', params, function(data){
			loading.close();

			if(data.data.http_code == '401'){
				new LoginFormView();
			}

		});
	},

	render: function() {
		var templateHtml = _.template(this.template, {data: this.subscriptions});

		this.$el.html(templateHtml);

		App.appView.$el.find('.l-tools.text-right').append(this.$el);
	}
});