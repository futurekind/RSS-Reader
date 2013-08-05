define([
	'jquery',
	'underscore',
	'backbone',
	'build/MessageView',
	'build/SubscriptionBarView'
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
				require(['build/LoginFormView'], function(LoginFormView){
					_this.loadingView.close();
					_this.loginView = new LoginFormView();
					_this.$el.find('#app-main').empty().append(_this.loginView.$el);

					_this.listenTo(_this.loginView, 'didLoginWithSuccess', function(){
						_this.loginView.remove();
						_this.render();
					});
				});

			});

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