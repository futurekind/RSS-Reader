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
	}

});