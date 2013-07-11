var MessageView = Backbone.View.extend({

	className: 'message',

	events: {
		'click .message-close': 'close'
	},

	options: {
		type: 'plain',
		title: '',
		body: '',
		showLoadingIndicator: false,
		showCloseButton: false
	},

	initialize: function(){
		this.template = App.loadTemplate('templates/messageView.html');
		this.render();
	},

	render: function(){

		var _this = this;

		var html = _.template(this.template, this.options);

		this.$el
			.addClass('message-' + this.options.type)
			.html(html);

		App.appView.$el.append(this.$el);

		setTimeout(function(){
			_this.$el.addClass('message-active');
		}, 250);
	},

	close: function(e){
		if(e){
			e.preventDefault();
		}

		var _this = this;

		this.$el.removeClass('message-active');

		setTimeout(function(){
			_this.remove();
		}, 500);
	}

});