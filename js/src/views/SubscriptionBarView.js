define(['jquery', 'underscore', 'backbone', 'build/Subscriptions', 'text!templates/subscriptionBar.html'],
	function($, _, Backbone, Subscriptions ,viewTemplate) {

		var SubscriptionBarView = Backbone.View.extend({

			subscriptions: null,

			initialize: function(){
				this.template = viewTemplate;
			},

			loadSubscriptions: function(){

				var _this = this;

				var params = {
					method: 'getSubscriptions'
				};

				this.subscriptions = new Subscriptions();

				this.subscriptions.on('change', function(){
					_this.render(false);
				}, this);

				this.subscriptions.load(params, function(data){

					if(data) {
						_this.render(true);
					} else {
						_this.trigger('didLoadWithError');
					}

				});

			},

			render: function(withTrigger) {

				var templateHtml = _.template(this.template, {data: this.subscriptions.models});

				this.$el.html(templateHtml);

				$('#app-subscriptions-bar').append(this.$el);

				if(withTrigger){
					this.trigger('didRender');
				}

			}
		});

		return SubscriptionBarView;

	}
);