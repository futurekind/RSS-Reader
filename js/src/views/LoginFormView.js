var LoginFormView = Backbone.View.extend({

	tagName: 'form',
	className: 'form form-loginForm',

	initialize: function(){
		this.template = App.loadTemplate('templates/loginForm.html');
		this.render();
	},

	render: function(){
		var _this = this;

		var html = _.template(this.template);
		this.$el.html(html);

		$('#app-main').empty().append(this.$el);

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
				App.appView.checkForUsernameAndPassword();
				_this.remove();
			}
		});


	}

});