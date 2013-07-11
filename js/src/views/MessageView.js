var MessageView = Backbone.View.extend({

	events: {
		'click .message-close': 'close'
	},

	options: {
		type: 'plain',
		title: '',
		body: '',
		showLoadingIndicator: false
	},

	initialize: function(){
		this.template = App.loadTemplate('templates/messageView.html');
		this.render();
	},

	render: function(){

		var _this = this;

		var html = _.template(this.template, this.options);
		App.appView.$el.append(this.$el.html(html));

		setTimeout(function(){
			_this.$el.find('.message').addClass('message-active');
		}, 250);
	},

	close: function(e){
		e.preventDefault();

		var _this = this;

		this.$el.find('.message').removeClass('message-active');

		setTimeout(function(){
			_this.remove();
		}, 500);
	}

});