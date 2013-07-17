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

		$.get('scripts/feedbinApiProxy.php', params, function(data){
			loading.close();

			if(data.http_code == '401'){
				new LoginFormView();
			} else {

				_this.subscriptions = new Subscriptions();
				_this.subscriptions.on( "change", _this.render, _this);

				$.each(data, function(i, s){
					var subscription = new Subscription(s);
					_this.subscriptions.add(subscription);
				});

				_this.render();
			}

		}, 'json');
	},

	render: function() {
		// console.log(this.subscriptions);
		var templateHtml = _.template(this.template, {data: this.subscriptions.models});

		this.$el.html(templateHtml);

		$('#app-feeds-bar').append(this.$el);

		this.subscriptions.get(618762).set('title', 'foo');
	}
});