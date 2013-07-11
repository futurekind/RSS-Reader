var SubscriptionBarView = Backbone.View.extend({

	apiUrl: 'https://api.feedbin.me/v2/subscriptions.json',
	subscriptions: null,

	initialize: function(){
		this.template = App.loadTemplate('templates/subscriptionBar.html');
		this.loadSubscriptions();
	},

	loadSubscriptions: function(){

		var _this = this;

		$.get(this.apiUrl, function(data){
			_this.subscriptions = data;

			_this.render();
		});
	},

	render: function() {
		var templateHtml = _.template(this.template, {data: this.subscriptions});

		this.$el.html(templateHtml);

		App.appView.$el.find('.l-tools.text-right').append(this.$el);
	}
});