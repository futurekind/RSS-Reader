var Feeds = Backbone.Collection.extend({

	url: 'scripts/feedbinApiProxy.php',

	load: function(params, callback){

		var _this = this;

		$.get(this.url, params, function(data){

			if(data.http_code == '401'){

				callback(false);

			} else {

				$.each(data, function(i, f){

					var feed = new Feed(f);
					var source = App.appView.subscriptionBarView.subscriptions.findWhere({
						feed_id: feed.get('feed_id')
					});

					var date = moment(feed.get('published'), 'YYYY-MM-DD').format('dddd, MMMM Do YYYY');
					// var date = moment("Dec 25, 1995");
console.log(date);
					feed.set('published_formated', date);
					feed.set('source', source.get('title'));


					_this.add(feed);
				});

				callback(true);

			}

		}, 'json');

	}

});