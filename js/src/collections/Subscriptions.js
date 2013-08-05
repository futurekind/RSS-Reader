define([
	'jquery',
	'underscore',
	'backbone',
	'build/Subscription'
], function($, _, Backbone, Subscription){

	var Subscriptions = Backbone.Collection.extend({
		comparator: 'title',

		// model: 'Subscription',

		url: 'scripts/feedbinApiProxy.php',

		load: function(params, callback){

			var _this = this;

			$.get(this.url, params, function(data){

				if(data.http_code == '401'){

					callback(false);

				} else {

					$.each(data, function(i, s){
						_this.add(new Subscription(s));
					});

					callback(true);

				}

			}, 'json');

		}
	});

	return Subscriptions;

});