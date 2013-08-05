define([
	'jquery',
	'underscore',
	'backbone',
	'views/MessageView',
	'views/SubscriptionBarView',
	'views/LoginFormView'
], function($, _, Backbone, MessageView, SubscriptionBarView, LoginFormView){

	var AppView = Backbone.View.extend({

		subscriptionBarView: null,
		feedView: null,
		loadingView: null,
		loginView: null,

		appIdentifier: 'zappscription',

		apiUser: null,
		apiPassword: null,

		initialize: function(){
			this.setElement($('#app'));
		},

		render: function(){

			var _this = this;

			this.loadingView = new MessageView({
				showLoadingIndicator: true,
				title: 'Loading your stuff, so hang tight!'
			});

			this.$el.append(this.loadingView.$el);

			this.subscriptionBarView = new SubscriptionBarView();

			this.subscriptionBarView.loadSubscriptions();

			this.listenTo(this.subscriptionBarView, 'didLoadWithError', function(){
				this.loadingView.close();
				this.loginView = new LoginFormView();
				this.$el.find('#app-main').empty().append(this.loginView.$el);

				this.listenTo(this.loginView, 'didLoginWithSuccess', function(){
					this.loginView.remove();
					this.render();
				}, this);

			}, this);

			this.listenTo(this.subscriptionBarView, 'didRender', function(){
				_this.loadingView.close();
				// _this.feedView.loadUnreadFeeds();
			});

			/*this.feedView = new FeedView();
			this.listenTo(this.feedView, 'didRender', function(){
				_this.loadingView.close();
				this.showUnredFeedCounts();
				this.showSubscriptionFeedCounts();
			});

			this.listenTo(this.feedView, 'didSetReadCount', function(){
				this.showUnredFeedCounts();
				this.showSubscriptionFeedCounts();
			});*/
		},

		showUnredFeedCounts: function(){

			var unreadFeeds = this.feedView.feeds.where({'read': false});

			$('#app-reading-new-items .bubble').text(unreadFeeds.length);
		},

		showSubscriptionFeedCounts: function() {
			var _this = this;
			var subscriptions = this.subscriptionBarView.subscriptions.models;

			$.each(subscriptions, function(i, s){
				var feeds = _this.feedView.feeds.where({
					'feed_id': s.attributes.feed_id,
					'read': false
				});
				s.set('count', feeds.length);
			});
		}

	});

	return AppView;

});