var FeedView = Backbone.View.extend({

	feeds: null,

	initialize: function(){
		this.template = '<% _.each(data, function(f) { %> <h1><%=f.attributes.title%></h1><br/><%=f.attributes.content%><br/><br/> <% }); %>';
	},


	loadUnreadFeeds: function(){

		var _this = this;

		var params = {
			method: 'getUnreadFeeds',
			userpass: App.appView.apiUser + ':' + App.appView.apiPassword
		};

		this.feeds = new Feeds();

		this.feeds.load(params, function(data){
			if(data) {
				_this.render();
			}
		});
	},

	render: function(){

		var templateHtml = _.template(this.template, {data: this.feeds.models});

		this.$el.html(templateHtml);

		$('#app-main').append(this.$el);

		this.trigger('didRender');

	}

});