var AppView = Backbone.View.extend({

	subscriptionBarView: null,
	feedView: null,
	loadingView: null,

	appIdentifier: 'zappscription',

	apiUser: null,
	apiPassword: null,

	initialize: function(){
		this.setElement($('#app'));
		this.apiUser = localStorage.getItem(this.appIdentifier + 'username');
		this.apiPassword = localStorage.getItem(this.appIdentifier + 'password');
	},

	checkForUsernameAndPassword: function(){
		if(!window.localStorage) {

		} else {
			this.render();
		}

	},

	render: function(){

		var _this = this;

		this.loadingView = new MessageView({
			showLoadingIndicator: true,
			title: 'Loading your stuff, so hang tight!'
		});

		this.subscriptionBarView = new SubscriptionBarView();
		this.feedView = new FeedView();

		this.subscriptionBarView.loadSubscriptions();

		this.listenTo(this.subscriptionBarView, 'didRender', function(){
			_this.feedView.loadUnreadFeeds();
		});

		this.listenTo(this.feedView, 'didRender', function(){
			_this.loadingView.close();
			this.showUnredFeedCounts();
		});
	},

	showUnredFeedCounts: function(){

		var unreadFeeds = this.feedView.feeds.where({'read': false});

		$('#app-reading-new-items .bubble').text(unreadFeeds.length);
	}

});