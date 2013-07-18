var Feeds = Backbone.Collection.extend({

	url: 'scripts/feedbinApiProxy.php',

	load: function(params, callback){

		var _this = this;

		$.get(this.url, params, function(data){

			if(data.http_code == '401'){

				callback(false);

			} else {

				$.each(data, function(i, f){
					_this.add(new Feed(f));
				});

				callback(true);

			}

		}, 'json');

	}

});