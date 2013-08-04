var Subscription = Backbone.Model.extend({

	defaults: {
		'id': 0,
		'created_at': '',
		'feed_id': 0,
		'title': '',
		'feed_url': '',
		'site_url': '',
		'count': 0
	},

	test: function(){
		console.log(this);
	}

});