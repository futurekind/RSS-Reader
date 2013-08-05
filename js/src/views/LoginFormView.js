define([
	'jquery',
	'underscore',
	'backbone',
	'text!../../../templates/loginForm.html'
],function($, _, Backbone, viewTemplate){

	var LoginFormView = Backbone.View.extend({

		tagName: 'form',
		className: 'form form-loginForm',

		initialize: function(){
			this.template = viewTemplate;
			this.render();
		},

		render: function(){
			var _this = this;

			var html = _.template(this.template);
			this.$el.html(html);

			this.$el.on('submit', function(e){
				_this.login(e);
			});

		},

		login: function(e) {
			e.preventDefault();

			var params = {
				method: 'setSessionParameter',
				username: $('#app-username').val(),
				password: $('#app-password').val()
			};

			var _this = this;

			$.post('scripts/feedbinApiProxy.php', params, function(data){
				if(data == 'success') {
					_this.trigger('didLoginWithSuccess');
				}
			});


		}

	});

	return LoginFormView;

	}
);