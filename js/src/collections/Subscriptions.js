var Subscriptions = Backbone.Collection.extend({
	comparator: 'title',

	url: 'scripts/feedbinApiProxy.php',

	load: function(params, callback){

		var _this = this;

		$.get(this.url, params, function(data){
			// loading.close();

			if(data.http_code == '401'){

				callback(false);

			} else {

				$.each(data, function(i, s){
					_this.add(s);
				});

				callback(true);

			}

		}, 'json');

	}
});