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
		App.appView.apiUser = $('#app-username').val();
		App.appView.apiPassword = $('#app-password').val();

		localStorage.setItem(App.appView.appIdentifier + 'username', App.appView.apiUser);
		localStorage.setItem(App.appView.appIdentifier + 'password', App.appView.apiPassword);

		App.appView.checkForUsernameAndPassword();

		this.remove();
	}

});